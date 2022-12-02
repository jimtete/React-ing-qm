import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
});

function AuthContextProvider(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function logoutHandler(){
        setIsLoggedIn(false);
    }

    function loginHandler(){
        setIsLoggedIn(true);
    }

    return (<AuthContext.Provider>{props.children}</AuthContext.Provider>)
}

export default AuthContext;