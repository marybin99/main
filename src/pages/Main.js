import { useState, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import FrameComponent1 from "../components/FrameComponent1";
import "./Main.css";

const Main = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const onText10Click = useCallback(() => {
    // Please sync "마이프로젝트" to the project
  }, []);

  const onText11Click = useCallback(() => {
    // Please sync "공지사항 ( Main ) - 관리자" to the project
  }, []);

  const onQAClick = useCallback(() => {
    // Please sync "QnA ( Main ) - 상단고정" to the project
  }, []);

  return (
    <>
      <div className="main">
        <div className="main3">
          <div className="main3-child" />
          <div className="main3-item" />
          <img className="signal-week-icon" alt="" src="../signal-week.svg" />
          <div className="left">
            <div className="div8">
              <b className="b">여러분의 프로젝트를</b>
              <b className="b">평가받아보세요</b>
            </div>
            <div className="btn">
              <div className="btn1" />
              <b className="text">명예의 전당</b>
            </div>
          </div>
        </div>
        <div className="main2">
          <div className="layout" />
          <div className="project-pic">
            <img className="pjt1-1-icon" alt="" src="../pjt1-1@2x.png" />
            <img className="pjt2-1-icon" alt="" src="../pjt2-1@2x.png" />
          </div>
          <div className="right">
            <div className="div9">
              <b className="b">프로젝트를</b>
              <b className="b">편하게 진행하세요</b>
            </div>
            <div className="btn2">
              <div className="btn1" />
              <b className="text1">마이프로젝트</b>
            </div>
          </div>
        </div>
        <div className="icon">
          <img className="icon" alt="" src="../.svg" />
          <img className="icon1" alt="" src="../1.svg" />
          <img className="main-logo-icon" alt="" src="../main-logo.svg" />
          <div className="left1">
            <div className="div8">
              <b className="b">내가 찾던 팀원</b>
              <b className="b">시그널에서 만나세요</b>
            </div>
            <div className="btn4">
              <div className="btn1" />
              <b className="text2">지원하러 가기</b>
            </div>
          </div>
        </div>
        <div className="nav">
          <img className="nav-icon" alt="" src="../nav.svg" />
          <img className="nav-logo-icon" alt="" src="../nav-logo.svg" />
          <img className="mypage-icon" alt="" src="../mypage.svg" />
          <div className="letter">
            <div className="letter-child" />
            <img className="vector-icon" alt="" src="../vector.svg" />
          </div>
          <div className="group">
            <div className="div11" onClick={openFrame}>
              팀원 모집
            </div>
            <div className="div12" onClick={onText10Click}>
              마이프로젝트
            </div>
            <div className="div13" onClick={onText11Click}>
              공지사항
            </div>
            <div className="q-a" onClick={onQAClick}>{`Q & A`}</div>
            <div className="div14" onClick={openFrame1}>
              시그널위크
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <FrameComponent1 onClose={closeFrame1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Main;
