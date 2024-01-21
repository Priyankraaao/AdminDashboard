import styles from "./styles.module.css";
import SubSection from "./subSection/subSection";

const Section = ({ items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionName}>{items.sectionName}</div>
      <div className={styles.sectionDetails}>
        {items.sectionDetails.map((sub)=>{
            return <SubSection items={sub}/>
        })}
      </div>
    </div>
  );
};

export default Section;

