import React from 'react';
import styles from './loader.module.scss';
import Icons from '@/themes/icons/icons';



const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <span className={styles.logo}>{Icons.logo}</span>
    </div>
  )
}

export default Loader
