import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'
import ItemSubmenu from './ItemSubmenu'

const Nav = () => {
  const [location] = useLocation()

  return (
    <nav>
      <ul className='flex [&>li:last-child]:border-0 [&>li:last-child]:p-0]'>
        {menu.map((item, index) => (
          <li
            key={index}
            className='border-r px-3'
          >
            <Link to={item.url}>
              <a className={`transition-colors ${location.split('/')[1] === item.url.split('/')[1] ? 'text-primary' : 'hover:text-gray-500'}`}>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className='absolute flex [&>li:last-child]:border-0 [&>li:last-child]:p-0] text-gray font-secondary text-sm'>
        {location.split('/')[1] === 'naum' &&
          menu[0].submenu.map((item, index) => (
            <ItemSubmenu
              key={index}
              item={item}
              location={location}
            />
          ))}
        {location.split('/')[1] === 'fundacion' &&
          menu[1].submenu.map((item, index) => (
            <ItemSubmenu
              key={index}
              item={item}
              location={location}
            />
          ))}
      </ul>
    </nav>
  )
}

export default Nav
