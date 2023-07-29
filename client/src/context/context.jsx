import React, { createContext, useState } from 'react';

// Step 1: Create a new React Context
const MyContext = createContext();

// Step 2: Create a Provider Component
const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    popUpWin: false
  });

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

// Export both the context and the provider component as default exports
export default MyContext;
export { MyProvider };