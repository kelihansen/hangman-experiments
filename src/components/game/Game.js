import React, { PureComponent } from 'react';
import Hangman from './Hangman';
import MysteryWord from './MysteryWord';
import WrongLetters from './WrongLetters';
import LetterInput from './LetterInput';

export default class Game extends PureComponent {
  render() {
    return (
      <section>
        <button>New Game</button>
        <Hangman/>
        <MysteryWord wordArray={['m', 'y', 's', 't', 'e', 'r', 'y']}/>
        <WrongLetters/>
        {/* <LetterInput/> */}
      </section>
    );
  }
}