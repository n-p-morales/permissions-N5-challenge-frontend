import React,{ createContext, useContext, useReducer} from "react";
import { initialState, reducer  } from './reducer/permissionsReducer';

const PermissionsContext = createContext({});

const usePermissionsContext = () => {
    const context = useContext(PermissionsContext);

    if (!context) {
        throw new Error();
    }

    return context;
};

const PermissionsContextProvider = ({ children }) => {
    const  [state, dispatch] = useReducer(reducer, initialState);

    return  (
        <PermissionsContext.Provider value={{ state, dispatch }}>
            { children }
        </PermissionsContext.Provider>
    );
};

export { usePermissionsContext };
export default PermissionsContextProvider;