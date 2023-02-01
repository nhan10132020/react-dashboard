import React from 'react'
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from  '@syncfusion/ej2-react-popups';
import { useStateContext } from '../../contexts/ContextProvider';
const SettingPlace = () => {
  const {setThemeSettings,currentColor} = useStateContext()
  return (
    <div className='fixed right-4 bottom-4 z-[1000]'>
        <TooltipComponent content='Settings' position="Top">
            <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:currentColor, borderRadius:'50%'}} onClick={()=>{setThemeSettings(true)}}>
                <FiSettings/>
            </button>
        </TooltipComponent>
        
    </div>
  )
}

export default SettingPlace