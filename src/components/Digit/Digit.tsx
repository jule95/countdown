import './Digit.scss';
import { FC } from 'react';
import Segment from '../Segment/Segment.tsx';
import { Layer, Stage } from 'react-konva';
import { IDigitProps } from './Digit.types.ts';
import { activeSegments, segments } from './Digit.config.ts';
import ComponentHelper from '../../helpers/ComponentHelper.ts';
import config from '../../config.ts';
import Colon from '../Colon/Colon.tsx';

const Digit: FC<IDigitProps> = ({ className=``, number }) => (
  <div className={ComponentHelper.className([
    `Digit`,
    className,
  ])}>
    <Stage
      height={config.konva.digitHeight * config.konva.digitSize}
      width={config.konva.digitWidth * config.konva.digitSize}>
      <Layer>
        {segments.map((segment, index) => (
          <Segment
            key={`digit-segment-${index}`}
            filled={activeSegments[Math.floor(number / 10)]?.includes(index) ?? false}
            isHorizontal={segment.horizontal}
            x={segment.x}
            y={segment.y} />
        ))}

        {segments.map((segment, index) => (
          <Segment
            key={`digit-segment-${index}`}
            filled={activeSegments[number % 10]?.includes(index) ?? false}
            isHorizontal={segment.horizontal}
            x={segment.x + config.konva.digitWidth / 2}
            y={segment.y} />
        ))}
      </Layer>
    </Stage>

    <Colon />
  </div>
);

export default Digit;
