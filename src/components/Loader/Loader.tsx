import { RingLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader({ loading = true }) {
  return (
    <div className={css.loaderWrapper}>
      <RingLoader
            color="#1620aeff"
            loading={loading}
            size={80}
            speedMultiplier={1} 
          />
      {loading && <p className={css.text}>Loading movies, please wait...</p>}
    </div>
  );
}
