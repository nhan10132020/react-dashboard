import React,{createContext,useContext,useEffect,useState} from 'react'


const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}

export const StateContext = createContext();
export const ContextProvider = ({children})=>{
    const [activeMenu,setActiveMenu] = useState(true)
    const [isClick,setIsClick] =useState(initialState)
    const [screenSize,setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState(()=>{return localStorage.getItem('colorMode')||'#03C9D7'})
    const [currentMode, setCurrentMode] = useState(()=>{return localStorage.getItem('themeMode')||'Light'})
    const [themeSettings,setThemeSettings] = useState(false)

    const setMode=(e)=>{
        localStorage.setItem("themeMode",e.target.value);
        setCurrentMode(e.target.value);
    }
    const setColor=(e)=>{
        localStorage.setItem("colorMode",e);
        setCurrentColor(e);
    }
    
    useEffect(()=>{
        const prev = currentMode==='Dark'?'light':'dark'
        const now =  currentMode==='Dark'?'dark':'light'
        document.documentElement.classList.remove(prev)
        document.documentElement.classList.add(now)
    },[currentMode])

    const handleClick = (clicked)=>{
        setIsClick({...initialState,[clicked]:true})
    }

    return (
        <StateContext.Provider value={{activeMenu,setActiveMenu,isClick,setIsClick,handleClick,screenSize,setScreenSize,currentColor,currentMode,setCurrentColor,setCurrentMode,themeSettings,setThemeSettings,setMode,setColor}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=>{
    return useContext(StateContext)
}