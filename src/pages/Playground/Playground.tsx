import './Playground.scss';
import { Layer, Stage, Line } from 'react-konva';
import { orange } from '@mui/material/colors';

const Playground = () => {
  const points = [
    0, 1,
    1, 0,
    2, 1,
    2, 5,
    1, 6,
    0, 5,
  ];

  const innerPoints = [
    0.5, 1.25,
    1, 0.75,
    1.5, 1.25,
    1.5, 4.75,
    1, 5.25,
    0.5, 4.75,
  ];

  return (
    <div className="Playground">
      <Stage
        height={1000}
        width={1000}>
        <Layer>
          <Line
            closed
            fill={orange[900]}
            points={points.map(point => point * 30)} />
          <Line
            closed
            fill={orange[700]}
            points={innerPoints.map(point => point * 30)}
            shadowBlur={20}
            shadowColor={orange[800]}
            shadowEnabled={true}
            stroke="transparent" />
        </Layer>
      </Stage>
    </div>
  );
};
export default Playground;
