import { FunctionComponent } from "react";

import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import styles from "./LawGPT.module.css";
import Header_GPT from "../components/Header_GPT";

const LawGPT: FunctionComponent = () => {
  return (
    <div className="background">
      <Header_GPT />
      <div className="xd">
        <div className={styles.frameWrapper}>
            <div className={styles.wrapperRectangle1}>
              <img
                className={styles.glass}
                alt=""
                src="/rec_glass.svg"
              />
            </div>
            <img
              className='logo'
              loading="lazy"
              alt=""
              src="/logo_black.png"
            />
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default LawGPT;
