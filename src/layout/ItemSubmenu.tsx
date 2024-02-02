import { Link } from 'wouter'

const ItemSubmenu = ({ item, location }) => {
  const matchUrl = location.split('/')[1] === item.url.split('/')[1] && location.split('/')[2] === item.url.split('/')[2] && true

  return (
    <li className='border-r px-2'>
      <Link to={item.url}>
        <a className={`transition-colors ${matchUrl ? 'text-primary' : 'text-primary-hover'}`}>{item.title}</a>
      </Link>

      {matchUrl &&
        item.filters &&
        item.filters.length > 0 &&
        item.filters.map((filter, index) => (
          <Link
            key={index}
            to={filter.url}
          >
            <a className={`transition-colors ml-1 ${location === filter.url ? 'text-black' : 'text-primary-hover'}`}>— {filter.title}</a>
          </Link>
        ))}
    </li>
  )
}

export default ItemSubmenu
