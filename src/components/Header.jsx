import { useState } from 'react'

export const Header = () => {
  const [menu, setMenu] = useState(false)

  const openMenu = () => {
    setMenu(true)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  const classHeaderNav = menu ? 'header-nav isActive' : 'header-nav'

  return (
    <header id='header'>
      <h4>Carlos <a className='highlight'>Manuel Hernández</a></h4>
      {!menu && <button id='openBtn' className='menuBtn' onClick={openMenu} />}

      <nav className={classHeaderNav}>
        {menu && <button id='closeBtn' className='menuBtn' onClick={closeMenu}><img src='./img/icons/close.png' /></button>}
        <a>Home</a>
        <a>About</a>
        <a>My Skills</a>
        <a>My work</a>
        <a>Contact Me</a>
      </nav>
    </header>
  )
}
