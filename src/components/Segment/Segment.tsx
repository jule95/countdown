import './Segment.scss';
import { Line } from 'react-konva';
import { ISegmentProps } from './Segment.types.ts';
import { FC, useEffect, useState } from 'react';
import { horizontal, vertical } from './Segment.config.ts';

const Segment: FC<ISegmentProps> = ({ isHorizontal = false, x = 0, y = 0, size = 10 }) => {
  const [points, setPoints] = useState<number[]>([]);

  useEffect(() => {
    const tempPoints = isHorizontal ? horizontal : vertical;
    setPoints(tempPoints.map(point => point * size));
  }, [size, isHorizontal]);

  return (
    <Line
      closed
      fill="black"
      points={points}
      x={x}
      y={y} />
  );
};

export default Segment;
