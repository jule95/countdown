import './Colon.scss';
import { FC } from 'react';
import Point from '../Point/Point.tsx';
import { Layer, Stage } from 'react-konva';
import { colonHeight, colonWidth } from './Colon.config.ts';
import { IColonProps } from './Colon.types.ts';

// eslint-disable-next-line
const Colon: FC<IColonProps> = ({ size = 1.5 }) => {
  return (
    <div className="Colon">
      <Stage
        height={colonHeight * size}
        width={colonWidth * size}>
        <Layer>
          <Point
            filled
            size={size} />
          <Point
            filled
            size={size}
            y={10} />
        </Layer>
      </Stage>
    </div>
  );
};

export default Colon;
