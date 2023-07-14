import React, {useState, createContext} from 'react';

export const LoggedInContext = createContext();
export const UserContext = createContext();

export const LoggedInProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
      {props.children}
    </LoggedInContext.Provider>
  );
}

export const UserProvider = (props) => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}


