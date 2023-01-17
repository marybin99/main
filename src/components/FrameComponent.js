import "./FrameComponent.css";

const FrameComponent = ({ onClose }) => {
  return (
    <div className="parent">
      <div className="div">
        <div className="child" />
        <div className="div1">오픈 프로필</div>
      </div>
      <div className="div2">
        <div className="item" />
        <div className="div3">공고</div>
      </div>
    </div>
  );
};

export default FrameComponent;
