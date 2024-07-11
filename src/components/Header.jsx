import { NavBar } from './NavBar'

export const Header = ({ menu, openMenu }) => {
  const classHeaderNav = menu ? 'header-nav isActive' : 'header-nav'

  return (
    <header id='header'>
      <h4>Carlos <a className='highlight'>Manuel Hernández</a></h4>
      <i
        class='bi-list open-btn'
        onClick={() => { openMenu() }}
      />
      <NavBar classname={classHeaderNav} />
    </header>
  )
}
