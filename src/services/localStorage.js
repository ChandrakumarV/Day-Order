
function fetchUsers(){

}

export function getLocalUser(){
    return JSON.parse(window.localStorage.getItem('user'))
}
export function setUser(name,rollno){

    const user={
        name,
        rollno : +rollno
    }


    window.localStorage.setItem('user',JSON.stringify(user))
}

export function removeUser(){
    window.localStorage.clear();
}