import { useState } from 'react';
import style from './RollDice.module.css'
import Rules from './Rules';
function RollDice({currentdice , rolldice, resetscore}) {
const [showrules, setshowrules] = useState(false);
  return (
    <div className={style.card}>
      <div className={style.diceimg}  onClick={rolldice}>
        <img src={`/images/Dice/dice_${currentdice}.png`} alt="dice1"  />
      </div>
      <p className='text-[36px] font-medium'>Click on Dice to roll</p>
  <button className={style.resetbtn} onClick={resetscore}>Reset Score</button>
  <button className={style.rulebtn} onClick={()=>setshowrules(prev => !prev)}>{showrules ? 'Hide' : 'Show'} Rules</button>
  {showrules && <Rules />}
    </div>
  )
}

export default RollDice;