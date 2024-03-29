import { social } from '../../components/data'

const Social = () => {
  return (
    <nav className='flex flex-col gap-y-3 justify-center text-white'>
      {social.map((item, index) => (
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
