import React from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="Gurjant Singh">{children}</AppContext.Provider>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export { AppContext, AppProvider };
