import React, { PureComponent } from 'react';
import styles from './WrongLetters.css';

export default class WrongLetters extends PureComponent {
  render() {
    return (
      <section className={styles['wrong-letters']}>
        Misses:
      </section>
    );
  }
}