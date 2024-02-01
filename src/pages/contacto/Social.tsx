import { social } from '../../components/data'

const Social = () => {
  return (
    <nav className='flex flex-col gap-y-3 justify-center text-primary'>
      {social.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target='_blank'
          rel='noreferrer'
          className='hover:text-black transition-colors flex gap-x-2 items-center'
        >
          <item.icon />
          <span className='text-sm'>{item.title}</span>
        </a>
      ))}
    </nav>
  )
}

export default Social
