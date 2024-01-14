import { monthOrder } from "../data/timetable";
import styles from './DayOrderDisplay.module.css'

let roman = ["I", "II", "III", "IV", "V", "VI"];

function DayOrderDisplay({step}) {

    let date = new Date();
    date.setDate(date.getDate() + step);
  
    let curdate = date.getDate();
    let curMon = date.getMonth();
    let curday = date.getDay();
    let curdayord = monthOrder[curMon][curdate-1];

    return ( 
    <h2 className={styles.DayOrderDisplay}>
        {
            curdayord?curdayord.dayorder!==0?` ${roman[curdayord.dayorder-1]} day order`:`${(curday === 0 || curday === 6 ) ?curday===0?"Sunday":"Saturday":curdayord.holiday} Holiday`:"Update will be soon"
        }
    </h2>
    )
}

export default DayOrderDisplay
