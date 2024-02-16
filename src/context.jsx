import {createContext, useContext, useState} from 'react';

const GlobalCOntext = createContext();
export const useGlobalContext = () => useContext(GlobalCOntext);

const AppContext = (props) =>{
    const [name,setName] = useState('peter')
    return <GlobalCOntext.Provider value={{name:name, setName}}>
        {props.children}
    </GlobalCOntext.Provider>
}

export default AppContext;