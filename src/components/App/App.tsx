import SearchBar from '../SearchBar/SearchBar';
import styles from './App.module.css';

export default function App() {
  return (
      <div className={styles.appBackground}>
          <div className={styles.content}></div>
      <SearchBar />
      {/* сюда можно добавить остальной контент */}
    </div>
  );
}
