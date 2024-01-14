import { createContext, useContext, useReducer } from "react";
import { removeUser, setUser } from "../services/localStorage";
import useFetchGetUser from "../services/useFetchGetUser";
import { LogoutUpdateApiuser, getApiUser } from "../services/API";
import {useNavigate} from 'react-router-dom'

const authContext = createContext();

const initial = {
  user: {},
  isAuth: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case "logout":
      return {
        ...state,
        user: {},
        isAuth: false,
      };

      case "updateUser":
        return {
          ...state,
          user: action.payload,
          isAuth: false,
        };
    default:
  }
}

function AuthProvider({ children }) {
  const [{ user,isAuth }, dispatch] = useReducer(reducer, initial);
  const navi = useNavigate();

  
  async function login(name, rollno) {
        setUser(name, rollno);
        dispatch({ type: "login", payload: {name,rollno} });
        navi('/home')
    }


    function logout() {
        LogoutUpdateApiuser(user.rollno)
        removeUser();
        dispatch({ type: "logout" });
  }


  return (
    <authContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  const content = useContext(authContext);
  return content;
}

export default AuthProvider;
