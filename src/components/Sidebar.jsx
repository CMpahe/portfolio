import { items } from '../data/items'
import { SidebarItem } from './SidebarItem'

export const Sidebar = ({ menu, closeMenu }) => {
  const isActive = menu ? 'isActive' : ''

  return (
    <div id='sidebar' className={isActive}>
      <i
        className='bi-x-lg close-btn'
        onClick={() => { closeMenu() }}
      />
      {items.map((item, index) => <SidebarItem item={item} index={index} key={index} />)}
    </div>
  )
}
