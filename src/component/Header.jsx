import React, { useState } from 'react'
import MenuLogo from "../assest/BurgerMenuIconwhite.svg"
import Logo from "../assest/Colour-Logo-PNG.png"

const Header = () => {

    const [menuToggel ,setmenuToggel] = useState(true) 
    
  return (
    <>
        <nav className='navbar'>
            <img src={Logo} className='ps-3' alt="JJ"  />
            <span className='text-white h1 mb-0 lh-sm'>ek JJ Alummi Association</span>
            <img src={MenuLogo} className='pe-3 d-none' alt="JJ" onClick={()=> setmenuToggel(!menuToggel)} />
            <div>
              <button className='btn'> Register</button>
              <button className='btn'> Contribute</button>
            </div>
        </nav>
        <aside style={ menuToggel ? {transition:"all 1s",left : "-50%" } : {transition:"all 1s",left : "0%"}}>
            <div className='cross-icon' onClick={() => setmenuToggel(!menuToggel)} ></div>
            <span>Menu</span>
        </aside>
    </>
  )
}

export default Header
