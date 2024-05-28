import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAcademicAidsTextClick = useCallback(() => {
    navigate("/academicaids");
  }, []);

  const onLegalAidsTextClick = useCallback(() => {
    navigate("/legalaids");
  }, []);

  return (
    <div className={styles.lawgptInner}>
      <div className={styles.primaryButtonParent}>
        <div className={styles.primaryButton}>
          <div className={styles.primaryButton1}>
            <div className={styles.primaryButtonChild} />
          </div>
          <div
            className={styles.academicAids}
            onClick={onAcademicAidsTextClick}
          >
            Academic Aids
          </div>
        </div>
        <div className={styles.primaryButton2}>
          <div className={styles.secondarybutton}>
            <div className={styles.secondarybuttonChild} />
          </div>
          <div className={styles.legalAids} onClick={onLegalAidsTextClick}>
            Legal Aids
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
