import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'

const Menu = () => {
  const [location] = useLocation()

  return (
    <nav className='hidden nav-mobile'>
      <ul className='flex flex-col gap-y-3'>
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={item.url}>
              <a className={`transition-colors ${location.split('/')[1] === item.url.split('/')[1] ? 'text-primary' : 'text-primary-hover'}`}>{item.title}</a>
            </Link>

            {item.url.split('/')[1] === 'naum' && location.split('/')[1] === 'naum' && (
              <ul className='flex flex-col gap-y-1 text-gray font-secondary text-sm'>
                {menu[0].submenu.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url}>
                      <a className={`transition-colors ${location === item.url ? 'text-primary' : 'text-primary-hover'}`}>{item.title}</a>
                    </Link>
                    {item.filters &&
                      location.split('/')[1] === item.url.split('/')[1] &&
                      location.split('/')[2] === item.url.split('/')[2] &&
                      item.filters.map((filter, index) => (
                        <Link
                          key={index}
                          to={filter.url}
                        >
                          <a className={`transition-colors ml-1 ${location === filter.url ? 'text-black' : 'text-primary-hover'}`}>— {filter.title}</a>
                        </Link>
                      ))}
                  </li>
                ))}
              </ul>
            )}

            {item.url.split('/')[1] === 'fundacion' && location.split('/')[1] === 'fundacion' && (
              <ul className='flex flex-col gap-y-1 text-gray font-secondary text-sm'>
                {menu[1].submenu.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url}>
                      <a className={`transition-colors ${location === item.url ? 'text-primary' : 'text-primary-hover'}`}>{item.title}</a>
                    </Link>
                    {item.filters &&
                      location.split('/')[1] === item.url.split('/')[1] &&
                      location.split('/')[2] === item.url.split('/')[2] &&
                      item.filters.map((filter, index) => (
                        <Link
                          key={index}
                          to={filter.url}
                        >
                          <a className={`transition-colors ml-1 ${location === filter.url ? 'text-black' : 'text-primary-hover'}`}>— {filter.title}</a>
                        </Link>
                      ))}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
