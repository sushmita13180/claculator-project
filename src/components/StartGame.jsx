import { Link } from 'react-router';
import style from './StartGame.module.css'
function StartGame({toggle}) {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="right_part">
        <h1>DICE GAME</h1>
        <Link to={`/playgame`} ><button onClick={toggle} className={style.playbtn}>Play Now</button></Link>
      </div>
    </div>
  )
}

export default StartGame;



