import { FC, useEffect, useState } from 'react';
import { Line } from 'react-konva';
import { points } from './Point.config.ts';
import { IPointProps } from './Point.types.ts';

const Point:FC<IPointProps> = ({ size = 1.5, filled = false, x = 0, y = 0 }) => {
  const [state, setState] = useState<number[]>([]);

  useEffect(() => {
    setState(points.map(point => point * size));
  }, [size]);

  return (
    <Line
      closed
      fill={filled ? `black` : `lightgray`}
      points={state}
      stroke="white"
      strokeWidth={1}
      x={x * size}
      y={y * size} />
  );
};

export default Point;
