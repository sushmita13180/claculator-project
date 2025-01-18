import style from './Rules.module.css'

function Rules() {
  return (
    <div className={style.rulecontainer}>
      <h2>How to play dice game</h2>
      <h3>Select any number</h3>
      <h3>Click on dice image</h3>
      <h3>after click on  dice  if selected number is equal to dice number you will get same point as dice </h3>
      <h3>if you get wrong guess then  2 point will be dedcuted </h3>
    </div>
  )
}

export default Rules