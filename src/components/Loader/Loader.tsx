import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

export default function Loader({ loading = true }) {
  return (
    <div className={styles.loaderWrapper}>
      <ClipLoader
        color="#00BFFF"
        loading={loading}
        size={80}
        aria-label="Loading Spinner"
      />
    </div>
  );
}