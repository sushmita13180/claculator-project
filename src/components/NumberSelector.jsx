import style from "./NumberSelector.module.css"

function NumberSelector({isnumselected,setisnumselected, error ,seterror}) {
  const numarr = [1, 2, 3, 4, 5, 6];
  const numberhandler = (value) =>{
    setisnumselected(value);
    console.log(`num selected ${value}`);
    seterror("");
  }
  
  return (
    <div className={style.right}>
      <p className={style.error}>{error}</p>
      <div className={style.btncontainer}>
        {numarr.map((value, i) => (<button className={style.numbtn} key={i}
          // selected={value === isnumselected}
          onClick={()=>numberhandler(value)}> {value}</button>))}
      </div>
      <p className={style.selectheading}>Select Number</p>
    </div>
  )
}

export default NumberSelector