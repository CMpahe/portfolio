import { useState } from 'react'

export const SidebarItem = ({ item, index }) => {
  const [open, setOpen] = useState(false)

  const sidebarItemClass = open ? 'sidebar-item open' : 'sidebar-item'

  if (item.children) {
    return (
      <div className={sidebarItemClass} key={index}>
        <div
          className='item-title'
          onClick={() => { setOpen(!open) }}
        >
          <i className='bi-chevron-down toggle-btn' />
          <span>
            {item.title}
            {item.icon && <i className={item.icon} />}
          </span>
        </div>
        <div className='item-content'>
          {item.children.map((child, index) => <SidebarItem item={child} key={index} />)}
        </div>
      </div>
    )
  } else {
    return (
      <div className='sidebar-item'>
        <a href={item.href}>
          {item.title}
          {item.icon && <i className={item.icon} />}
        </a>
      </div>
    )
  }
}
