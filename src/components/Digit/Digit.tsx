import './Digit.scss';
import { FC } from 'react';
import Segment from '../Segment/Segment.tsx';
import { Layer, Stage } from 'react-konva';
import { IDigitProps } from './Digit.types.ts';
import { activeSegments, digitHeight, digitWidth, segments } from './Digit.config.ts';
import ComponentHelper from '../../helpers/ComponentHelper.ts';

const Digit: FC<IDigitProps> = ({ className=``, size=5, number }) => (
  <div className={ComponentHelper.className([
    `Digit`,
    className,
  ])}>
    <Stage
      height={digitHeight * size}
      width={digitWidth * size}>
      <Layer>
        {segments.map((segment, index) => (
          <Segment
            key={`digit-segment-${index}`}
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
