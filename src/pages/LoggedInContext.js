import React, {useState, createContext} from 'react';

export const LoggedInContext = createContext();

export const LoggedInProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
      {props.children}
    </LoggedInContext.Provider>
  );
}

