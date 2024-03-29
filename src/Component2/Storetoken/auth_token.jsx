//yahan sara token ko store karenge aur usecontext hook ke jarye send karenge jaha ishka recquired ho

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [users, setUsers] = useState("");
  const[isAdminlogin, setIsAdminlogin]=useState(true);//yah line ushke liye h jo Search karega ki Admin jab tak aana jaye tab ka loding dikhaye
  const [services, setServices]=useState([]);
  const[tasks, setTasks]=useState([]);

  const Authorization =`Bearer ${token}`;

  //function to stored the token in local storage
  const StoreTokenIns = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //yah dekhega ki ki token h yanahi hai to isLoggedIn me to store ho jao
  let isLoggedIn = !!token;

  //to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //to fectch data for service

  const getServices = async()=>{
    try{
      const response = await fetch("https://deploy-mern-api.vercel.app/api/group/service",{
        method:"GET",
      });

      if(response.ok){
        const data = await response.json();
        console.log(data);
        setServices(data.data);

      }

      console.log("service", response);

    }catch(error){
      console.log(`this error is coming in service section ${error}`);
    }
  }

  useEffect(() => {
    getServices();
  }, []);

  //Auto fill data in any form
  const useAuthentication = async () => {
        try {
          setIsAdminlogin(true);
        const response = await fetch("https://deploy-mern-api.vercel.app/api/auth/user", {
            method: "GET",
            headers: {
            Authorization: Authorization,
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log("user data ",data.userData)
            setUsers(data.userData);
            setIsAdminlogin(false);
        } else {
            console.error("Error fetching user data");
            setIsAdminlogin(false)
        }
        } catch (error) {
        console.log("this is Authentication folder where coming error ${error}");
        }
    };

  useEffect(() => {
    useAuthentication();
  }, []);




  // this is task section

  const fetchTasks = async () => {
    try {
      const Authorization =`Bearer ${token}`
      
    const response = await fetch("https://deploy-mern-api.vercel.app/app/get/alltask", {
        method: "GET",
        headers: {
        Authorization: Authorization,
        },
    });

    if (response.ok) {
        const data = await response.json();
        console.log("user data ",data.userData)
        setTasks(data);
        
    } else {
        console.error("Error fetching task data");
        
    }
    } catch (error) {
    console.log("this is Authentication folder where coming error ${error}");
    }
};

useEffect(() => {
  fetchTasks();
}, []);

  return (
    <AuthContext.Provider value={{ StoreTokenIns, isLoggedIn, LogoutUser,users,services,Authorization,isAdminlogin,tasks}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const useContextValue = useContext(AuthContext);
  if (!useContextValue) {
    throw new Error("useAuth provider error");
  }
  return useContextValue;
};
