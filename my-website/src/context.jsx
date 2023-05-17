import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
const AppContext = React.createContext();
const intialState = {
  name: "",
  image: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Web Technial",
        image: "./images/hero.png",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Gurjant Singh",
        image: "./images/about.webp",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
// eslint-disable-next-line import/no-anonymous-default-export
export { useGlobalContext, AppProvider };
