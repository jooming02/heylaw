import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardFlip.module.css";

export type CardFlipType = {
  aviation?: string;

  /** Style props */
  // propPadding?: CSSProperties["padding"];
  // propMinHeight?: CSSProperties["minHeight"];
  // propWidth?: CSSProperties["width"];
  // propWidth1?: CSSProperties["width"];
};

const CardFlip: FunctionComponent<CardFlipType> = ({
  aviation,
  // propPadding,
  // propMinHeight,
  // propWidth,
  // propWidth1,
}) => {
  // const cardFlipStyle: CSSProperties = useMemo(() => {
  //   return {
  //     padding: propPadding,
  //     minHeight: propMinHeight,
  //     width: propWidth,
  //   };
  // }, [propPadding, propMinHeight, propWidth]);

  // const aviationStyle: CSSProperties = useMemo(() => {
  //   return {
  //     width: propWidth1,
  //   };
  // }, [propWidth1]);

  return (
    <div className={styles.cardflip}>
      <div className={styles.backParent}>
        {/* <img className={styles.backIcon} alt="" src="/back.svg" /> */}
        <img
          className={styles.frontIcon}
          loading="lazy"
          alt=""
          src="/front.svg"
        />
      </div>
      <div className={styles.aviation} >
        {aviation}
      </div>
    </div>
  );
};

export default CardFlip;
