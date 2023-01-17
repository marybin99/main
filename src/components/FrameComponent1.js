import { useCallback } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({ onClose }) => {
  const onContainerClick = useCallback(() => {
    // Please sync "시그널 위크 (명예의 전당)" to the project
  }, []);

  const onContainer1Click = useCallback(() => {
    // Please sync "시그널 위크 (프로젝트)" to the project
  }, []);

  return (
    <div className="component-5-parent">
      <div className="component-5default">
        <div className="component-5default">
          <div className="div4" onClick={onContainerClick}>
            <div className="inner" />
            <div className="div5">명예의 전당</div>
          </div>
          <div className="div6" onClick={onContainer1Click}>
            <div className="rectangle-div" />
            <div className="div7">프로젝트 보기</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
