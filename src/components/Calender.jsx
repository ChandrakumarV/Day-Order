function Calender({step}) {
    let date = new Date();
    date.setDate(date.getDate()+step)

    return (
        <div className="calender">
            <p>{date.toLocaleString('default', { weekday: 'long' })}</p>
            <h1>{date.getDate()<10?'0'+date.getDate():date.getDate()}</h1>
            <p>{date.toLocaleString('default', { month: 'long' })}</p>
      </div>
    )
}

export default Calender
