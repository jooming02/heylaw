import { FunctionComponent, useCallback } from "react";
import Header_Material from "../components/Header_Material";
import styles from "./material.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Material: FunctionComponent = () => {
  const navigate = useNavigate();

  const onStartContainerClick = useCallback(() => {
    navigate("/material_journal");
  }, [navigate]);

  return (
    <div className="background">
      <Header_Material />
      <Container>
        <Row>
          <Col>
            <div className={styles.climateMask} onClick={onStartContainerClick}>
              <div className={styles.bgParent}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                </div>
              </div>
              <div className={styles.maskParent}>
                <h1 className={styles.book}>Journal Article</h1>
                <img
                  className={styles.maskIcon}
                  loading="lazy"
                  alt=""
                  src="/mask.svg"
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.climateMask}>
              <div className={styles.bgParent}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                </div>
              </div>
              <div className={styles.maskParent}>
                <h1 className={styles.book}>Book</h1>
                <img
                  className={styles.maskIcon}
                  loading="lazy"
                  alt=""
                  src="/mask.svg"
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.climateMask}>
              <div className={styles.bgParent}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                </div>
              </div>
              <div className={styles.maskParent}>
                <h1 className={styles.book}>Video</h1>
                <img
                  className={styles.maskIcon}
                  loading="lazy"
                  alt=""
                  src="/mask.svg"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Material;
