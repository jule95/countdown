import './Segment.scss';
import { Stage, Layer, Line } from 'react-konva';
import { ISegmentProps } from './Segment.types.ts';
import { FC, useEffect, useState } from 'react';

const Segment: FC<ISegmentProps> = ({ x = 20, y = 20, size = 10 }) => {
  const [points, setPoints] = useState<number[]>([1, 0, 2, 1, 2, 4, 1, 5, 0, 4, 0, 1]);

  useEffect(() => {
    setPoints(points.map(point => point * size));
  }, [size]);

  return (
    <div className="Digit">
      <Stage
        height={window.innerHeight}
        width={window.innerWidth}>
        <Layer>
          <Line
            closed
            fill="black"
            points={points}
            x={x}
            y={y} />
        </Layer>
      </Stage>
    </div>
  );
};

export default Segment;
