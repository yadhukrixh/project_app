import React from 'react';
import styles from './navigation-header.module.scss'
import Icons from '@/themes/icons/icons';

const NavigationHeader = () => {
  return (
    <div className={styles.navigationHeaderWrapper}>
      <span>{Icons.logoHorizontal}</span>
    </div>
  )
}

export default NavigationHeader;
