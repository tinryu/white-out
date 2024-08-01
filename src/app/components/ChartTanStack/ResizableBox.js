import { ResizableBox as ReactResizableBox } from "react-resizable";

const ResizableBox = ({ children, width = 800, height = 300, resizable = true, style = {}, className = "" }) => {
  return (
    <div
      style={{
        display: "inline-block",
        width: "auto",
        padding: ".5rem",
        ...style
      }}
    >
      {resizable ? (
        <ReactResizableBox width={width} height={height}>
          <div style={{ width: "100%", height: "100%" }} className={className}>
            {children}
          </div>
        </ReactResizableBox>
      ) : (
        <div style={{ width: `${width}px`, height: `${height}px`}} className={className}>
          {children}
        </div>
      )}
    </div>
  );
}

export default ResizableBox;