import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import CardFlip from "../components/CardFlip";
import styles from "./Laywers.module.css";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Laywers: FunctionComponent = () => {
  const navigate = useNavigate();

  const onStartContainerClick = useCallback(() => {
    navigate("/practisingarea");
  }, [navigate]);

  return (
    <div className={styles.laywers}>
      <Header />
      <Row>
        <Col className={styles.practicingArea}>Practicing Area</Col>
        <div className={styles.cornerParent}>
          <div className={styles.search}>Search...</div>
          <div className={styles.aviationCardQuintet}>
            <img className={styles.search1Icon} alt="" src="/search-1.svg" />
          </div>
        </div>
        </Row>

      <section className={styles.frameParent}>
        <div className={styles.cardflipParent} onClick={onStartContainerClick}>
          <CardFlip aviation="Criminal Law" />
          <CardFlip aviation="Banking and Finance Law" />
          <CardFlip aviation="Family Law" />
          <CardFlip aviation="Real Estate Law" />
          <CardFlip aviation="Environmental Law" />
          <CardFlip aviation="Healthcare & Medical Law" />
          <CardFlip aviation="Tax & Revenue" />
          <CardFlip aviation="Personal Injury and Tort Law" />
          <CardFlip aviation="Labor Law" />
        </div>
      </section>
    </div>
  );
};

export default Laywers;
