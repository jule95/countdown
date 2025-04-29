import './Playground.scss';
import { Layer, Stage } from 'react-konva';

const Playground = () => {
  return (
    <div className="Playground">
      <Stage
        height={1000}
        width={1000}>
        <Layer>
        </Layer>
      </Stage>
    </div>
  );
};
export default Playground;
