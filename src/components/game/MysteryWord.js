import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './MysteryWord.css'

export default class MysteryWord extends PureComponent {
  static propTypes = {
    wordArray: PropTypes.array
  };

  render() {
    const { wordArray } = this.props;

    return (
      <section className={styles['mystery-word']}>
        {wordArray.map((letter, i) => <div className="underline" key={i}><h2 key={i}>{letter.toUpperCase()}</h2></div>)}
      </section>
    );
  }
}