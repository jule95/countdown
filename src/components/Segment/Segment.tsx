import './Segment.scss';
import { Line } from 'react-konva';
import { ISegmentProps } from './Segment.types.ts';
import { FC, useEffect, useRef, useState } from 'react';
import { horizontal, vertical } from './Segment.config.ts';
import Konva from 'konva';
import { useTheme } from '@mui/material';

const Segment: FC<ISegmentProps> = ({ isHorizontal = false, x = 0, y = 0, size = 10, filled = false }) => {
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
  }, [filled]);

  useEffect(() => {
    const tempPoints = isHorizontal ? horizontal : vertical;
    setPoints(tempPoints.map(point => point * size));
  }, [size, isHorizontal]);

  return (
    <Line
      ref={segmentRef}
      closed
      points={points}
      stroke={theme.countdown.strokeColor}
      strokeWidth={1}
      x={x * size}
      y={y * size} />
  );
};

export default Segment;
