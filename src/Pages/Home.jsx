import { useEffect, useState } from "react"
import Calender from "../components/Calender"
import Clock from "../components/Clock"
import Skip from "../components/Skip"
import TotalClicks from "../components/TotalClicks"
import Dayorder from "../components/dayorder"
import styles from './Home.module.css'
import { useAuth } from "../context/AuthProvider"
import DayOrderDisplay from "../components/DayOrderDisplay"
import { LoginUpdateApiuser } from "../services/API"
import Loading from "../components/Loading"

function Home() {
    const [step, setStep] = useState(0);
    const {user,logout} = useAuth();
    const [userData , setUserData] = useState({})
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        async function getUserData(){
            try{
                setIsLoading(true)
                const userd = await LoginUpdateApiuser(user)
                await setUserData(userd)
            }
            catch(err){
                console.error(err.message)
            }
            finally{
                
                setIsLoading(false)
            }
        }
        getUserData();
    },[])
    
    if(isLoading) return <Loading/>
    return (
        <>
            <div className={styles.profile}>
                <div className={styles.left}>
                    <img src={`https://www.gackarurcoe.com/images/profile/2021/${user.rollno}.jpg`} alt="" />
                    <div>
                        <h1>{userData.name}</h1>
                        <p>{userData.rollno}</p>
                    </div>
                </div>
                <div className="right">
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
            <div className="cc_container">
                <Calender step={step}/>
                <Clock />
            </div>
            <DayOrderDisplay step={step}/>
            <Skip step={step} setStep={setStep}/>
            <Dayorder step={step} />
            <TotalClicks />
        </>
    )
}

export default Home
