function Skip({step,setStep}) {

    function handlerdataInc(){
        setStep(cur=>cur+1)
    }
    function handlerdataDec(){
      setStep(cur=>cur-1)
    }


    return (
        <div className="skip-container">
            <button onClick={handlerdataDec}>Previous Day</button>
            {step!==0&&<button onClick={()=>setStep(0)}>Today</button>}
            <button onClick={handlerdataInc}>Next Day</button>
        </div>
    )
}

export default Skip
