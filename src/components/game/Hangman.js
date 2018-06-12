import React, { PureComponent } from 'react';
import styles from './Hangman.css';
import gallows from '../../images/gallows.png';
import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.png';
import four from '../../images/four.png';
import five from '../../images/five.png';
import full from '../../images/full.png';

export default class Hangman extends PureComponent {
  render() {
    return (
      <section className={styles.hangman}>
        {/* <img src={gallows}/>
        <img src={one}/>
        <img src={two}/>
        <img src={three}/>
        <img src={four}/>
        <img src={five}/> */}
        <img src={full}/>
      </section>
    );
  }
}