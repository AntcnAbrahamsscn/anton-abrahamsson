import React from 'react'


export default function SwitchTheme({theme, switchTheme}) {
    
  return (
    <div className='app' data-theme={theme}>
    <div className='theme-toggle nav-flex'>
      <i onClick={switchTheme} className={theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} ></i>
    </div>
  </div>
  )
}
