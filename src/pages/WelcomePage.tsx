import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WelcomePage.module.css";


const WelcomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onStartContainerClick = useCallback(() => {
    navigate("/lawgpt");
  }, [navigate]);

  return (
    <div className={styles.welcomepage}>
      <section className={styles.welcomeToWrapper}>
        <h1 className={styles.welcomeTo}>Welcome To</h1>
      </section>

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

      <div className={styles.startWrapper}>
        <div className={styles.start} onClick={onStartContainerClick}>
          <div className={styles.emptySpace} />
          <img className={styles.playIcon} alt="" src="/play.svg" />
        </div>
      </div>
      <section className={styles.justiceUnboundedWhere}>
        "Justice Unbounded: Where Legal Guidance is a Right, Not a Privilege.”
      </section>
    </div>
  );
};

export default WelcomePage;
