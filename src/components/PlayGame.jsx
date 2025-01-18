
import NumberSelector from './NumberSelector';
import style from './PlayGame.module.css'
import RollDice from './RollDice';
import Score from './Score';
import { useState } from 'react';
function PlayGame() {

  const [isnumselected, setisnumselected] = useState();
  const [currentdice, setcurrentdice] = useState(4);
  const [score, setscore] = useState(0);
  const [error, seterror] = useState("");

  const generateRandomNumber = (max, min) => {
    console.log((Math.round(Math.random() * (max - min) + min)));
    return (Math.floor(Math.random() * (max - min) + min));
  }

  const rolldice = () => {
    if (!isnumselected) {
      seterror("You have not selected any number.")
      return;
    }
    seterror(" ");

    const randomnumber = generateRandomNumber(6, 1);
    setcurrentdice(() => randomnumber);
    if (isnumselected === randomnumber) {
      setscore((prev) => prev + randomnumber);
    }
    else {
      setscore(prev => prev - 2);
    }
    setisnumselected(undefined);
  }

  const resetscore = () => {
    setscore(0);
  }

  return (
    <div className='pt-5'>
      <div className={style.header}>
        <Score score={score} />
        <NumberSelector isnumselected={isnumselected} setisnumselected={setisnumselected} error={error} seterror={seterror}/>
      </div>
      <RollDice currentdice={currentdice} rolldice={rolldice} resetscore={resetscore}/>
    </div>
  )
}

export default PlayGame;