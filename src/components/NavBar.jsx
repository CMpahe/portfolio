import { items } from '../data/items'

export const NavBar = ({ classname }) => {
  const displayItems = () => {
    return (
      items.map((item, index) => {
        return (
          <a href={item.href} key={index}>{item.title}</a>
        )
      })
    )
  }
  return (
    <nav className={classname}>
      {displayItems()}
    </nav>
  )
}
