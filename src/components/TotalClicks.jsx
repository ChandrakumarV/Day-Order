import axios from "axios";
import { useEffect, useState } from "react";

function TotalClicks() {
    const [clicks,setclicks] = useState(0);
    useEffect(function () {

        const getApi = async () => {
            
        try{
            const res = await axios.get("https://6508523156db83a34d9c20cf.mockapi.io/api/chandru");
            await axios.put("https://6508523156db83a34d9c20cf.mockapi.io/api/chandru/" + 1, {clicks : res.data[0].clicks+1});
            await axios.put("https://6508523156db83a34d9c20cf.mockapi.io/api/chandru/" + 1, {date : {name:"dfk"}} );
    
            setclicks(()=>res.data[0].clicks+1);
        }
        catch(ex){
                console.log(ex.message)
        }
        };
        getApi();
      }, []);

    return <p className="copyright">Copyright @ 2024 Chandru (  {clicks?`viewers : ${clicks}`:"loading...."} )</p>
      
}

export default TotalClicks
