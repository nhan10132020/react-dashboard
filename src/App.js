import React from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import SettingPlace from './components/SettingPlace/SettingPlace'
import Sidebar from './components/Sidebar/Sidebar'
import ColorPicker from './pages/ColorPicker'
import Customer from './pages/Customer'
import Ecommerce from './pages/Ecommerce'
import Editor from './pages/Editor'
import Employees from './pages/Employees'
import Kanban from './pages/Kanban'
import Order from './pages/Order'
import Calendar from './pages/Calendar'
import ThemeSetting from './components/ThemeSetting/ThemeSetting'
import { useStateContext } from './contexts/ContextProvider'



const App = () => {
    const {activeMenu,themeSettings} = useStateContext()
    
  return (
    <div className='flex relative dark:bg-main-dark-bg overflow-x-hidden'>
        <SettingPlace/>
        {activeMenu?
        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar/>
        </div>
        :
        <div className='w-0 dark:bg-secondary-dark-bg '>
            <Sidebar/>
        </div>
        }

        <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu?'md:ml-72':''}`
        }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar/>
            </div>
        


            <div>
                {themeSettings&&<ThemeSetting/>}
                <Routes>
                    <Route path="/" element={<Ecommerce/>}/>
                    <Route path="/ecommerce" element={<Ecommerce/>}/>

                    <Route path='/orders' element={<Order/>}/>
                    <Route path='/employees' element={<Employees/>}/>
                    <Route path='/customers' element={<Customer/>}/>

                    <Route path='/kanban' element={<Kanban/>}/>
                    <Route path='/editor' element={<Editor/>}/>
                    <Route path='/calendar' element={<Calendar/>}/>
                    <Route path='/color-picker' element={<ColorPicker/>}/>

                </Routes>
            </div>
        </div>
    </div>

  )
}



export default App