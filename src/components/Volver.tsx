import { Link } from 'wouter'
import { Back } from './icons'

const Volver = ({ url }: { url: string }) => {
  return (
    <div className='absolute right-6 lg:right-12 mt-12 z-10 text-4xl'>
      <Link to={url}>
        <a className='cursor-pointer text-primary hover:text-black'>
          <Back />
        </a>
      </Link>
    </div>
  )
}

export default Volver
