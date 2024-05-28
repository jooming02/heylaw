import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const Header: FunctionComponent = () => {
  // const [activeKey, setActiveKey] = useState('/lawyers'); // Initialize state
  // const navigate = useNavigate();

  // const onMessageClick = useCallback(() => {
  //   navigate("/lawgpt");
  // }, [navigate]);

  return (
    <Container>
      <Row>
        <Col sm={2}>
          <img className={styles.logo} alt="" src="/logo_black.png" />
        </Col>

        <Col sm={10} className={styles.heading}>
          <Nav className={styles.rectangleParent} variant="pills">
            <Nav.Item className={styles.helpChild}>
              <Nav.Link className={styles.helpItem} href="/lawgpt">HeyLaws</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.helpActive}>
              <Nav.Link className={styles.helpItemActive} href="/laywers">Lawyer</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.helpChild}>
              <Nav.Link className={styles.helpItem} href="/material">Material</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.helpChild}>
              <Nav.Link className={styles.helpItem} href="/lawgpt">Booking</Nav.Link>
            </Nav.Item>
            <div className={styles.cardFlipPair}>
              <div className={styles.wrapperLockBtn}>
                <img
                  className={styles.lockBtnIcon}
                  loading="lazy"
                  alt=""
                  src="/lock-btn.svg"
                />
              </div>
            </div>
            <div className={styles.cardFlipPair}>
              <div className={styles.wrapperLockBtn}>
                <img
                  className={styles.lockBtnIcon}
                  loading="lazy"
                  alt=""
                  src="/lock-btn-1.svg"
                />
              </div>
            </div>
          </Nav>


        </Col>
      </Row>
    </Container>
  );
};

export default Header;
