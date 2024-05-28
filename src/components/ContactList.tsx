import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContactCard from "./ContactCard";
import styles from "./ContactList.module.css";

const GroupComponent2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/laywers1");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <ContactCard
        icon="/group-461@2x.png"
        name="Dave"
        firm="Raja, Darryl & Loh"
        yearsExperiences="10  years experiences"
        phone="+60 112 086 1190"
        email="         dave8@hotmail.com"
        onGroupContainerClick={onGroupContainerClick}
      />
      <ContactCard
        icon="/group-46-1@2x.png"
        name={`Salma Hayek`}
        firm="Chong, , Meow  & Loh"
        yearsExperiences="28  years experiences"
        phone="+60 112 086 9078"
        email="         lmahayek@hotmail.com"
        
      />
      <ContactCard
        icon="/group-46-1@2x.png"
        name={`Raiyan Khanv`}
        firm="Zaid Peter Advocates"
        yearsExperiences="17  years experiences"
        phone="+60 111 086 1190"
        email="              raiyahanjiar@hotmail.com"
        
      />
      
    </div>
  );
};

export default GroupComponent2;
