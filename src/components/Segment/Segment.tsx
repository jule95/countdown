import './Segment.scss';
import { Line } from 'react-konva';
import { ISegmentProps } from './Segment.types.ts';
import { FC, useEffect, useRef, useState } from 'react';
import { horizontal, vertical } from './Segment.config.ts';
import Konva from 'konva';
import { useTheme } from '@mui/material';
import config from '../../config.ts';

const Segment: FC<ISegmentProps> = ({ isHorizontal = false, x = 0, y = 0, filled = false }) => {
  const [points, setPoints] = useState<number[]>([]);
  const segmentRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    if (!segmentRef.current) {
      return;
    }
    // @ts-expect-error TS2339
    segmentRef.current.to({
      duration: 0.150,
      easing: Konva.Easings.Linear,
      fill: theme.countdown.fillColor,
      opacity: filled ? 0.95 : 0.3,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filled]);

  useEffect(() => {
    const tempPoints = isHorizontal ? horizontal : vertical;
    setPoints(tempPoints.map(point => point * config.konva.digitSize));
  }, [isHorizontal]);

  return (
    <Line
      ref={segmentRef}
      closed
      points={points}
      stroke={theme.countdown.strokeColor}
      strokeWidth={1}
      x={x * config.konva.digitSize}
      y={y * config.konva.digitSize} />
  );
};

export default Segment;
