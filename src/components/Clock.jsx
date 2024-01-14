import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000)
  
      return () => clearInterval(intervalId);
      }, [])
  
      let h = time.getHours() < 13 ? time.getHours() : time.getHours()%12 ;
      let m = time.getMinutes();
      let s = time.getSeconds();



    return (
        <div className="clock">
            <div class="clock-con">
        <label style={{'--i':'1'}}><span>1</span></label>
        <label style={{'--i':'2'}}><span>2</span></label>
        <label style={{'--i':'3'}}><span>3</span></label>
        <label style={{'--i':'4'}}><span>4</span></label>
        <label style={{'--i':'5'}}><span>5</span></label>
        <label style={{'--i':'6'}}><span>6</span></label>
        <label style={{'--i':'7'}}><span>7</span></label>
        <label style={{'--i':'8'}}><span>8</span></label>
        <label style={{'--i':'9'}}><span>9</span></label>
        <label style={{'--i':'10'}}><span>10</span></label>
        <label style={{'--i':'11'}}><span>11</span></label>
        <label style={{'--i':'12'}}><span>12</span></label>
        
        <div class="cen-cir"></div>
        <div class="cen-cir cen-cir-2 "></div>
        <div class="needle-con">
            <div id="hour" style={{transform:`rotate(${(h*30)+(m/2)}deg)`}}></div>
            <div id="min"  style={{transform: `rotate(${m*6}deg)`}}></div>
            <div id="sec"  style={{transform:`rotate(${s*6}deg)`}} ></div>
        </div>
        </div>
    </div>
    )
}

export default Clock
