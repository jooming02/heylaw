import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContactCard.module.css";

export type GroupComponentType = {
  icon?: string;
  name?: string;
  firm?: string;
  yearsExperiences?: string;
  phone?: string;
  email?: string;
  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propLeft?: CSSProperties["left"];

  /** Action props */
  onGroupContainerClick?: () => void;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  icon,
  name,
  firm,
  yearsExperiences,
  phone,
  email,
  propWidth,
  propAlignSelf,
  propLeft,
  onGroupContainerClick,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const mailIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={styles.frameWrapper}
      onClick={onGroupContainerClick}
      style={groupDivStyle}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.wrapperGroup46Wrapper}>
          <div className={styles.wrapperGroup46}>
            <img
              className={styles.wrapperGroup46Child}
              loading="lazy"
              alt=""
              src={icon}
            />
          </div>
        </div>
        <div className={styles.daveDuggalWrapper}>
          <div className={styles.daveDuggal}>
            <span className={styles.span}>{` `}</span> {name}
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <img
              className={styles.mailIcon}
              alt=""
              src="/mail1.svg"
              style={mailIconStyle}
            />
            <img
              className={styles.phoneIcon}
              loading="lazy"
              alt=""
              src="/phone1.svg"
            />
          </div>
          <div className={styles.rajaDarrylContainer}>
            <p className={styles.rajaDarryl}>{firm}</p>
            <p className={styles.yearsExperiences}>{yearsExperiences}</p>
            <p className={styles.p}>{phone}</p>
            <p className={styles.dave8hotmailcom}>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
