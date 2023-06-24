import { useContext, createContext, useReducer } from "react";

const fetchContext = createContext();
// function fetchReducer() {
//   console.log("from fetch");
// }
// const initialState = {
//   data: null,
//   isLoading: true
// };
const fetchProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(fetchReducer, initialState);

  return (
    <fetchContext.Provider value={state}>{children}</fetchContext.Provider>
  );
};

const useFetch = () => useContext(fetchContext);

export { useFetch, fetchProvider };
