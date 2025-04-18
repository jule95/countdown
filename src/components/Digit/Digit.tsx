import './Digit.scss';
import { FC } from 'react';
import Segment from '../Segment/Segment.tsx';
import { Layer, Stage } from 'react-konva';
import { IDigitProps } from './Digit.types.ts';
import { activeSegments, segments } from './Digit.config.ts';

const Digit: FC<IDigitProps> = ({ size=10, number }) => (
  <div className="Digit">
    <Stage
      height={12 * size}
      width={7 * size}>
      <Layer>
        {segments.map((segment, index) => (
          <Segment
            filled={activeSegments[number]?.includes(index) ?? false}
            isHorizontal={segment.horizontal}
            size={size}
            x={segment.x}
            y={segment.y} />
        ))}
      </Layer>
    </Stage>
  </div>
);

export default Digit;
