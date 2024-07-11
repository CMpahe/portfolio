// HOOKS
import { useState } from 'react'
// COMPONENTS
import { Header } from './src/components/Header'
import { Main } from './src/components/Main'
import { Footer } from './src/components/Footer'
import { Sidebar } from './src/components/Sidebar'

export function App () {
  const [menu, setMenu] = useState(false)

  const openMenu = () => {
    setMenu(true)
  }
  const closeMenu = () => {
    setMenu(false)
  }
  return (
    <section id='container'>
      <Header menu={menu} openMenu={openMenu} />
      <Sidebar menu={menu} closeMenu={closeMenu} />
      <Main />
      <Footer />
    </section>
  )
}
