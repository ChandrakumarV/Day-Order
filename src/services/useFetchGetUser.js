import { useEffect, useState } from "react"

function useFetchGetUser(rollno) {

    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState('')
    const [data,setData] = useState({})

        useEffect(function () {
            async function fetchUser() {
              try {
                setIsLoading(true);
                setError("");
        
                const res = await fetch(`https://6508523156db83a34d9c20cf.mockapi.io/api/users/${rollno}`);
        
                if (!res.ok)
                  throw new Error("Something went wrong with fetching data");
        
                const data = await res.json();
                if (data.Response === "False") throw new Error("data not found");
        
                setData(data);
                setError("");
              } 
              catch (err) {
                  console.log(err.message);
                  setError(err.message);
              } 
              finally {
                setIsLoading(false);
              }
            }
            fetchUser();
          },
          []
        )
        
    return {isLoading,error,data}
}

export default useFetchGetUser
