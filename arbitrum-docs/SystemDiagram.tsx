import {
  TransformComponent,
  TransformWrapper,
  KeepScale,
} from "react-zoom-pan-pinch";
import Diagram from "./assets/diagram.jpg";

export const SystemDiagram = () => {
  return (
    <TransformWrapper maxScale={100}>
      {({ centerView, resetTransform }) => (
        <>
          <div>
            <button type="button" onClick={() => resetTransform()}>
              Previous
            </button>
            <button type="button" onClick={() => centerView()}>
              Next
            </button>
          </div>
          <TransformComponent
            wrapperStyle={{
              width: "100%",
              height: "500px",
              maxWidth: "100%",
              maxHeight: "calc(100vh - 50px)",
            }}
          >
            <img style={{ width: "100vw" }} src={Diagram} alt="" />
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};
