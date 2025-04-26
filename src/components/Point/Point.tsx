import { FC, useEffect, useState } from 'react';
import { Line } from 'react-konva';
import { points } from './Point.config.ts';
import { IPointProps } from './Point.types.ts';
import { useTheme } from '@mui/material';

const Point:FC<IPointProps> = ({ size = 1.5, x = 0, y = 0 }) => {
  const [state, setState] = useState<number[]>([]);
  const theme = useTheme();

  useEffect(() => {
    setState(points.map(point => point * size));
  }, [size]);

  return (
    <Line
      closed
      fill={theme.countdown.fillColor}
      points={state}
      stroke={theme.countdown.strokeColor}
      strokeWidth={1}
      x={x * size}
      y={y * size} />
  );
};

export default Point;
