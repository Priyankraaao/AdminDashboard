import NavChart from "../userActivity/chart";
import styles from  './styles.module.css'

const TotalUser=({data})=>{
    return <div className={styles.container}>
       <NavChart data={data} />
    </div>
}

export default TotalUser