import style from './Score.module.css'
function Score({score}) {
  return (
    <div className={style.left}>
    <h1 className='text-[100px] font-medium'>{score}</h1>
    <p className='text-[24px] font-medium'>Total Score</p>
  </div>
  )
}

export default Score