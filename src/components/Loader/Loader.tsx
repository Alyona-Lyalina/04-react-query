import { RingLoader } from "react-spinners";
import styles from "./Loader.module.css";

export default function Loader({ loading = true }) {
  return (
    <div className={styles.loaderWrapper}>
      <RingLoader
            color="#1620aeff"
            loading={loading}
            size={80}
            speedMultiplier={1} 
          />
      {loading && <p className={styles.text}>Loading movies, please wait...</p>}
    </div>
  );
}
