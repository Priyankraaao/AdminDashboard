import Navbar from "../ui/Dashboard/navbar/navbar";
import Sidebar from "../ui/Dashboard/sidebar/sidebar";
import styles from './styles.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content }>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
