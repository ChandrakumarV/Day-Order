import { useState,useEffect } from "react";
import { dayOrder, monthOrder } from "../data/timetable";

function Dayorder({ step }) {
  const[NowHour,setNowHour ]  = useState(-1);
  let roman = ["I", "II", "III", "IV", "V", "VI"];


  let date = new Date();
  date.setDate(date.getDate() + step);

  let curdate = date.getDate();
  let curMon = date.getMonth()+1;
  let curday = date.getDay();
  let curdayord = monthOrder[curMon-1][curdate-1];
  let curdayordperiods=(dayOrder[curdayord?.dayorder-1]?.periods)


  
      useEffect(function(){
      const a =  setInterval(() => {
        let date = new Date();
        let hour=date.getHours();
        let min= date.getMinutes();

      
          if((hour===13&&min>=15)||(hour===14&&min<=10))
            setNowHour(1);
          else if((hour===14&&min>=10)||(hour===15&&min<=5))
          setNowHour(2);
          else if((hour===15&&min>=5)||(hour===16&&min<=0))
          setNowHour(3);
          else if((hour===16&&min>=0)||(hour===16&&min<=55))
          setNowHour(4);
          else if((hour===16&&min>=55)||(hour===17&&min<=55))
          setNowHour(5);
          else setNowHour(-1)
        }, 1000);
        
        return ()=>{clearInterval(a)}
      },[NowHour]
      )


  return (
      <div className="dayorder-table">

        <h2 className="dayorder-head">
            {
                curdayord?curdayord.dayorder!==0?` ${roman[curdayord.dayorder-1]} day order`:`${(curday === 0 || curday === 6 ) ?curday===0?"Sunday":"Saturday":curdayord.holiday} Holiday`:"Update will be soon"
            }
        </h2>

        <div className="period-list">
            {curdayord?curdayord.dayorder!==0?<ul>
                {curdayordperiods.map((hr,i)=>
                    
                        <List roman={roman} hr={hr} i={i} key={i} NowHour={NowHour} step={step}/>
                )}
                </ul>
            :<p className='msg-box'>-</p>:<p className='msg-box'>stay tune</p>}
        </div>
      </div>
  );
}


function List({roman,hr,i,NowHour,step}) {
    return ( <li>
        <h3>{roman[i]}</h3>
        <div className={`${hr.toString() === "LAB" ? "labhour period" : "period"} ${NowHour!==-1&&NowHour===i+1&&"active"}`}>
          {NowHour!==-1&&NowHour===i+1&&step===0&&<p className='red-dot'>&#9679;</p>}
          <p>{hr}</p>
        </div>
       
    </li>
    )
}




export default Dayorder;

