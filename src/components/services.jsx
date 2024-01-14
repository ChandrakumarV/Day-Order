import { useEffect, useState } from "react";

let finishTime = [
    {hr:14,m:10},
    {hr:15,m:5},
    {hr:16,m:0},
    {hr:16,m:55},
    {hr:17,m:55},
  ]
  
  
  
  export function CalRemain({NowHour}){

    const [time,setTime] = useState(new Date())

     useEffect(()=>{

      function start(){
        setTime(new Date())
      }
      start()
        const a = setInterval(start, 1000);

          return ()=>clearInterval(a)
    },[])

    let nowSec = (time.getHours()*60*60)+(time.getMinutes()*60)+(time.getSeconds());
    let finSec = (finishTime[NowHour-1].hr*60*60) + (finishTime[NowHour-1].m*60);
    let totalSec =  finSec - nowSec;

    let min = Math.floor(totalSec/60);
    let sec = totalSec%60;
  
    return <p className="remain">{min<10?'0'+min:min}:{sec<10?'0'+sec:sec} remain</p>
  }
  
  