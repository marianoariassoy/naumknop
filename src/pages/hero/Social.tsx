import { Instagram, Facebook } from '../../components/icons'

const items = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com',
    icon: Facebook
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: Instagram
  }
]

const Social = () => {
  return (
    <nav className='flex flex-col gap-y-3 justify-center text-white'>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target='_blank'
          rel='noreferrer'
          className='text-primary-hover transition-colors'
        >
          <item.icon />
        </a>
      ))}
    </nav>
  )
}

export default Social
