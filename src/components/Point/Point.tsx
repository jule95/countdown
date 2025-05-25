import { FC, useEffect, useState } from 'react';
import { Line } from 'react-konva';
import { points } from './Point.config.ts';
import { IPointProps } from './Point.types.ts';
import { useTheme } from '@mui/material';
import config from '../../config.ts';

const Point:FC<IPointProps> = ({ x = 0, y = 0 }) => {
  const [state, setState] = useState<number[]>([]);
  const theme = useTheme();

  useEffect(() => {
    setState(points.map(point => point * config.konva.pointSize));
  }, []);

  return (
    <Line
      closed
      fill={theme.countdown.fillColor}
      points={state}
      stroke={theme.countdown.strokeColor}
      strokeWidth={1}
      x={x * config.konva.pointSize}
      y={y * config.konva.pointSize} />
  );
};

export default Point;
