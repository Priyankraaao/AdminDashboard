import Section from "./Section/section";
import styles from "./styles.module.css";

const sections = [
  {
    sectionName: "Notification",
    sectionDetails: [
      {
        title: "You fixed a bug.",
        description: "Just now",
        icon: "",
        hiddenDescription: "",
      },
      {
        title: "New user registered.",
        description: "59 minutes ago",
        icon: "",
        hiddenDescription: "",
      },
      {
        title: "You fixed a bug.",
        description: "12 hours ago",
        icon: "",
        hiddenDescription: "",
      },
      {
        title: "Andi Lane subscribed to you.",
        description: "Today, 11:59 AM",
        icon: "",
        hiddenDescription: "",
      },
    ],
  },
  {
    sectionName: "Activities",
    sectionDetails: [
      {
        title: "Changed the style.",
        description: "Just now",
        icon: "",
        hiddenDescription: "",
      },
      {
        title: "Released a new version.",
        description: "59 minutes ago",
        icon: "",
        hiddenDescription: "",
      },
      {
        title: "Submitted a bug.",
        description: "12 hours ago",
        icon: "",
        hiddenDescription: "",
      },
      {
        title: "Modified A data in Page X.",
        description: "Today, 11:59 AM.",
        icon: "",
        hiddenDescription: "",
      },
      {
        title: "Deleted a page in Project X.",
        description: "Feb 2, 2024.",
        icon: "",
        hiddenDescription: "",
      },
    ],
  },
  {
    sectionName: "Contacts",
    sectionDetails: [
      {
        title: "Natali Craig.",
        description: "",
        icon: "",
        hiddenDescription: "",
      },
      {
        title: "Drew Cano.",
        description: "",
        icon: "",
        hiddenDescription: "",
      },
      {
        title: "Kate Morrison.",
        description: "",
        icon: "",
        hiddenDescription: "",
      },
      {
        title: "Melody Macy.",
        description: "",
        icon: "",
        hiddenDescription: "",
      },
    ],
  },
];

const Rightbar = () => {
  return (
    <div className={styles.container}>
      {sections.map((section) => {
        return <Section items={section}/>;
      })}
    </div>
  );
};

export default Rightbar;
