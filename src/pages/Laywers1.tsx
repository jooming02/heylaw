import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Laywers1.module.css";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Laywers1: FunctionComponent = () => {

  const googleForm = useCallback(() => {
    // open link in new tabs
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfnZ8A-t3TlQg3v5a4HC-AedYIwyOEx0FKEU1owKhsLgq_umA/viewform?usp=sf_link",
      "_blank"
    );
  }, []);

  return (
    <div className={styles.laywers}>
      <Container>
        <Header />
        <Row className={styles.align} >
          <Col sm={5} >
            <section className={styles.containerr}>
              <img
                className={styles.wrapperGroup46Child}
                loading="lazy"
                alt=""
                src="/group-46@2x.png"
              />
              <h2 className={styles.daveDuggal}> Dave Duggal</h2>
              {/* <img
              className={styles.mailIcon}
              loading="lazy"
              alt=""
              src="/mail.svg"
            />
            <img
              className={styles.phoneIcon}
              loading="lazy"
              alt=""
              src="/phone.svg"
            /> */}
              <div className={styles.textContainer}>
                <p
                  className={styles.rajaDarryl}
                >{`Raja, Darryl & Loh |  10 Years Experiences`}</p>
                <p
                  className={styles.dave8hotmailcom}
                >{`+60 112 086 1190 | dave8@hotmail.com `}</p>
              </div>
            </section>
          </Col>
          <Col sm={7}>
            <section className={styles.rectangleGroup}>
              <div className={styles.frameParent}>
                <div className={styles.introductionWrapper}>
                  <h3 className={styles.introduction}>Introduction</h3>
                </div>
                <div className={styles.daveDuggalIsOneOfTheTopWrapper}>
                  <div className={styles.description}>
                    Dave Duggal is one of the top criminal lawyers in Malaysia
                    She has represented clients in some of the most high-profile
                    cases in the country and has a reputation for being a tough,
                    no-nonsense lawyer who gets results. Dave has a proven track
                    record of success in court and has earned the respect of his
                    peers and the judiciary. If you are facing serious criminal
                    charges, Dave Duggal is the lawyer you want on your side.
                  </div>
                </div>
                <div className={styles.introductionWrapper}>
                  <h3 className={styles.introduction}>Tertiary Education</h3>
                </div>
                <div className={styles.daveDuggalIsOneOfTheTopWrapper}>
                  <div className={styles.description}>
                    Bachelor of Laws (Hons) (University of Sheffield)
                  </div>
                </div>
                <div className={styles.introductionWrapper}>
                  <h3 className={styles.introduction}>
                    Professional Qualification
                  </h3>
                </div>
                <div className={styles.daveDuggalIsOneOfTheTopWrapper}>
                  <div className={styles.description}>
                    Barrister-at-Law (admitted as a member of the Honourable
                    Society of Middle Temple)
                  </div>
                </div>
                <div className={styles.introductionWrapper}>
                  <h3 className={styles.introduction}>Consultation Fees</h3>
                </div>
                <div className={styles.daveDuggalIsOneOfTheTopWrapper}>
                  <div className={styles.description}>RM200 per hour</div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div
                  className={styles.secondarybuttonParent}
                  onClick={googleForm}
                >
                  <div className={styles.secondarybutton}>
                    <div className={styles.secondaryButtonInstance} />
                  </div>
                  <h3 className={styles.bookForConsultation}>
                    Book for Consultation
                  </h3>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Laywers1;
