import { FunctionComponent } from "react";
import Contacts from "../components/ContactList";
import styles from "./PractisingArea.module.css";
import Header from "../components/Header";

const PractisingArea: FunctionComponent = () => {
  return (
    <div className={styles.laywers}>
      {/* <div className={styles.navbar} /> */}
      {/* <FrameComponent4 /> */}
      <Header />

      {/* Heading */}
      <section className={styles.vectorParent}>
        <div className={styles.criminalLawWrapper}>
          <h1 className={styles.criminalLaw}>Criminal Law</h1>
        </div>
        <div className={styles.criminalLawGovernsContainer}>
          <p className={styles.criminalLawGoverns}>
            Criminal law governs behaviors deemed harmful to society,
            classifying offenses as felonies or misdemeanors. Rooted in the
            presumption of innocence, it demands the prosecution prove guilt
            beyond a reasonable doubt. Mens rea (mental state) and actus reus
            (criminal act) are integral, balancing intent and action. Examples
            of criminal law include assault, theft, and homicide, addressing
            crimes against persons; burglary, arson, and vandalism, concerning
            crimes against property; and fraud and bribery, constituting
            white-collar crimes against the state. Procedural safeguards ensure
            fairness, emphasizing punishment, rehabilitation, and deterrence in
            maintaining a just and ordered society.
          </p>
          <br />
          <p className={styles.criminalLawGoverns}>
            We are devoted to securing the best possible outcomes for our
            clients through tireless advocacy and a thorough understanding of
            criminal law. Your defense is our priority, and we are here to fight
            for your rights and future.
          </p>
        </div>
      </section>

      <section className={styles.vectorGroup}>
        <div className={styles.contactsWrapper}>
          <h1 className={styles.contacts}>Contacts</h1>
        </div>
        
        <div className={styles.wrapperGroup2280Parent}>
          <div className={styles.wrapperGroup2280}>
            <img
              className={styles.wrapperGroup2280Child}
              alt=""
              src="/group-2280.svg"
            />
          </div>
          <Contacts />
        </div>

      </section>
    </div>
  );
};

export default PractisingArea;
