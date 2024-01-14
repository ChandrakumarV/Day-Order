

export async function LoginUpdateApiuser(userEntered){
    const Getres = await fetch(`https://6508523156db83a34d9c20cf.mockapi.io/api/users/${userEntered.rollno}`)
    const Getdata = await Getres.json();
    await fetch(`https://6508523156db83a34d9c20cf.mockapi.io/api/users/${userEntered.rollno}`,
    {
        method : "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            LoginCount :Getdata.LoginCount+1,
            currentLogin:true,
            lastLogin : new Date().getTime(),
            userEntered:{...userEntered}
        })
    })
    return Getdata
    
}


export async function LogoutUpdateApiuser(rollno){
    await fetch(`https://6508523156db83a34d9c20cf.mockapi.io/api/users/${rollno}`,
    {
        method : "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            currentLogin:false,
            lastLogout: new Date().getTime(),
        })
    })
}


export async function countIncreace(){
    // const res = await axios.get("https://6508523156db83a34d9c20cf.mockapi.io/api/chandru");
    // await axios.put("https://6508523156db83a34d9c20cf.mockapi.io/api/chandru/" + 1, {clicks : res.data[0].clicks+1});
    // setclicks(()=>res.data[0].clicks+1);


    const Getres = await fetch(`https://6508523156db83a34d9c20cf.mockapi.io/api/chandru/1`)
    const clicks = await Getres.json();
    await fetch(`https://6508523156db83a34d9c20cf.mockapi.io/api/chandru/1`,
    {
        method : "PUT",
        body:{
            clicks:clicks+1
        }
    })

    
    return clicks+1;
}