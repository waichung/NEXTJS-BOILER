import { GeneralLayout } from '../components/General/Layout';
import styles from './home.scss';

const HomeView = () => {
  return (
    <GeneralLayout>
      <div className={`${styles.content}`}></div>
    </GeneralLayout>
  )
}

export default HomeView;