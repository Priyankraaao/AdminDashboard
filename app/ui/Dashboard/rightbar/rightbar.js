import Section from "./Section/section";
import styles from "./styles.module.css";

const sections = [
  {
    sectionName: "Notification",
    sectionDetails: [
      {
        title: "You fixed a bug.",
        description: "Just now",
        icon: "./BugBeetle.svg",
        hiddenDescription: "",
      },
      {
        title: "New user registered.",
        description: "59 minutes ago",
        icon: "./User.svg",
        hiddenDescription: "",
      },
      {
        title: "You fixed a bug.",
        description: "12 hours ago",
        icon: "./BugBeetle.svg",
        hiddenDescription: "",
      },
      {
        title: "Andi Lane subscribed to you.",
        description: "Today, 11:59 AM",
        icon: "./Broadcast.svg",
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
        icon: "./User.svg",
        hiddenDescription: "",
      },
      {
        title: "Submitted a bug.",
        description: "12 hours ago",
        icon: "./Broadcast.svg",
        hiddenDescription: "",
      },
      {
        title: "Released a new version.",
        description: "59 minutes ago",
        icon: "/Frame.png",
        hiddenDescription: "",
      },
      {
        title: "Deleted a page in Project X.",
        description: "Feb 2, 2024.",
        icon: "./Broadcast.svg",
        hiddenDescription: "",
      },
      {
        title: "Modified A data in Page X.",
        description: "Today, 11:59 AM.",

        icon: "/Frame.png",
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
        icon: "./User.svg",
        hiddenDescription: "",
      },
      {
        title: "Drew Cano.",
        description: "",
        icon: "./User.svg",
        hiddenDescription: "",
      },
      {
        title: "Kate Morrison.",
        description: "",
        icon: "./User.svg",
        hiddenDescription: "",
      },
      {
        title: "Melody Macy.",
        description: "",
        icon: "./User.svg",
        hiddenDescription: "",
      },
    ],
  },
];

const Rightbar = () => {
  return (
    <div className={styles.container}>
      {sections.map((section) => {
        return <Section key={section.title} items={section} />;
      })}
    </div>
  );
};

export default Rightbar;
