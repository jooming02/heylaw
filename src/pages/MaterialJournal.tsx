import { FunctionComponent, useCallback } from "react";
import Header_Material from "../components/Header_Material";
import styles from "./MaterialJournal.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const MaterialJournal: FunctionComponent = () => {
  const navigate = useNavigate();

  const onStartContainerClick = useCallback(() => {
    navigate("/journalarticle");
  }, [navigate]);

  return (
    <div className="background">
      <Header_Material />
      <Container>
        <Row>
          <Col>
            <div className={styles.fastSettings} onClick={onStartContainerClick}>
                <div className={styles.vol31No}>
                Contract Law
                </div>
            </div>
          </Col>
          <Col>
            <div className={styles.fastSettings}>
                <div className={styles.vol31No}>
                Criminal Law: 
                </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.fastSettings}>
                <div className={styles.vol31No}>
                Family Law
                </div>
            </div>
          </Col>
          <Col>
            <div className={styles.fastSettings}>
                <div className={styles.vol31No}>
                Tort Law: 
                </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.fastSettings}>
                <div className={styles.vol31No}>
                Constitutional  Law
                </div>
            </div>
          </Col>
          <Col>
            <div className={styles.fastSettings}>
                <div className={styles.vol31No}>
                Commercial  Law: 
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MaterialJournal;
