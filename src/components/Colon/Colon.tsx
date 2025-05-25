import './Colon.scss';
import { FC } from 'react';
import Point from '../Point/Point.tsx';
import { Layer, Stage } from 'react-konva';
import { colonHeight, colonWidth } from './Colon.config.ts';
import config from '../../config.ts';

const Colon: FC = () => {
  // ToDo: Move this logic.
  // (digit height * default size) / 2
  const yOffset = (14 * 5) / 2;

  return (
    <div className="Colon">
      <div style={{ transform: `translateY(calc(${yOffset}px - 50%))` }}>
        <Stage
          height={colonHeight * config.konva.pointSize}
          width={colonWidth * config.konva.pointSize}>
          <Layer>
            <Point />
            <Point
              y={10} />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Colon;
