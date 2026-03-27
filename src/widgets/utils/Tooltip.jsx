// components/FixTooltip.js

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const FixTooltip = ({
  children,
  active,
  payload,
  coordinate,
  data,
//   offsetX = 70,
  offsetY = 40,
}) => {
  if (!active || !payload?.length) return null;


  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(${coordinate.x}px, ${coordinate.y}px)`,
        pointerEvents: "none",
        zIndex: 99999,
      }}
    >
      <Tippy
        content={children}
        visible={true}
        placement={ "right"}
        offset={[0, 5]} 
        arrow={true}
          theme="custom-black"   
      >
        <div style={{ width: 0, height: 0 ,background :"black" }} />
      </Tippy>
    </div>
  );
};

export default FixTooltip;