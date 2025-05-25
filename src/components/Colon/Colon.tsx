import { FC, useEffect, useState } from 'react';
import { Layer, Line, Stage } from 'react-konva';
import { points } from './Colon.config.ts';
import config from '../../config.ts';
import { Box, useTheme } from '@mui/material';

const Colon: FC = () => {
  // ToDo: Move this logic.
  // (digit height * default size) / 2
  const theme = useTheme();
  const [state, setState] = useState<number[]>([]);

  useEffect(() => {
    setState(points.map(point => point * config.konva.pointSize));
  }, []);

  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center">
      <Stage
        height={config.konva.colonHeight * config.konva.pointSize}
        width={config.konva.colonWidth * config.konva.pointSize}>
        <Layer>
          <Line
            closed
            fill={theme.countdown.fillColor}
            points={state}
            stroke={theme.countdown.strokeColor}
            strokeWidth={1} />
          <Line
            closed
            fill={theme.countdown.fillColor}
            points={state}
            stroke={theme.countdown.strokeColor}
            strokeWidth={1}
            y={config.konva.colonWidth * config.konva.pointSize} />
        </Layer>
      </Stage>
    </Box>
  );
};

export default Colon;
