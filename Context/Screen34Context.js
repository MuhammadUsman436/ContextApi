import React, { useState } from 'react';

const Screen34CreateContext = React.createContext();

const Screen34ContextProvider = ({ children }) => {
  const [User,setUser] = useState(null);

  return (
    <Screen34CreateContext.Provider value={{ User, setUser }}>
      {children}
    </Screen34CreateContext.Provider>
  );
};

export { Screen34ContextProvider, Screen34CreateContext };
