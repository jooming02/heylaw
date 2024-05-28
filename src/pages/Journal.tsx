import { FunctionComponent, useCallback } from "react";
import Header_Material from "../components/Header_Material";
import styles from "./Journal.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Journal: FunctionComponent = () => {
  const Omission = useCallback(() => {
    // open link in new tabs
    window.open(
      "https://docs.google.com/document/d/1upeHc665R0kTsPOPmL7l5P4lqE9C9U6h/edit?usp=share_link&ouid=108211748497596192744&rtpof=true&sd=true",
      "_blank"
    );
  }, []);

  const conflict = useCallback(() => {
    // open link in new tabs
    window.open(
      "https://docs.google.com/document/d/1FDhQGiAR80qZzJfplE8_XvVOaSbxI6lT4B5p8PAkAK8/edit#heading=h.sj2bvbsprks6",
      "_blank"
    );
  }, []);

  const smart = useCallback(() => {
    // open link in new tabs
    window.open(
      "https://docs.google.com/document/d/1ZNihBicfSGLZpIYXGgDCwbAHA-XKRJbE47pSfqL3ljU/edit",
      "_blank"
    );
  }, []);

  const saman = useCallback(() => {
    // open link in new tabs
    window.open(
      "https://docs.google.com/document/d/1VaOaq7o8r1V34Zwbi1QXVSTm_Jb1VccVYES0Bbh4zTw/edit",
      "_blank"
    );
  }, []);

  const misrepresentation = useCallback(() => {
    // open link in new tabs
    window.open(
      "https://docs.google.com/document/d/1x9Mcr_uuo_JKYnFjfW9_CAW_dEbeO05IBi4ZsWBd7yE/edit",
      "_blank"
    );
  }, []);

  return (
    <div className="background">
      <Header_Material />
      <Container>
        <Row>
          <Col>
            <div className={styles.fastSettings} onClick={Omission}>
              <div className={styles.info}>
                <div className={styles.vol31No}>Omissions in UK</div>
                <div className={styles.div}>2023-11-30</div>
                <div className={styles.hajiMohdNaim}>Loo Ming Min</div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.fastSettings} onClick={conflict}>
              <div className={styles.info}>
                <div className={styles.vol31No}>
                  Common conflict which arises during the application of s.17 of
                  the Contract act
                </div>
                <div className={styles.div}>2023-12-12</div>
                <div className={styles.hajiMohdNaim}>Dennis Hii Jun Xian</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.fastSettings} onClick={smart}>
              <div className={styles.info}>
                <div className={styles.vol31No}>
                  The Rise of Smart Contracts: Exploring the Legal Implications
                </div>
                <div className={styles.div}>2023-12-31</div>
                <div className={styles.hajiMohdNaim}>Dennis Hii Jun Xian</div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.fastSettings} onClick={saman}>
              <div className={styles.info}>
                <div className={styles.vol31No}>Elements of Contract Law</div>
                <div className={styles.div}>2024-1-10</div>
                <div className={styles.hajiMohdNaim}>Dennis Hii Jun Xian</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.fastSettings} onClick={misrepresentation}>
              <div className={styles.info}>
                <div className={styles.vol31No}>Omissions in UK</div>
                <div className={styles.div}>2024-2-10</div>
                <div className={styles.hajiMohdNaim}>Dennis Hii Jun Xian</div>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Journal;
