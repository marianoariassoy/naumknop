import { Link } from 'wouter'
import { Logo } from '../components/icons'
import Nav from './Nav'
import Menu from './Menu'
import Bars from './Bars'

const Header = () => {
  return (
    <header className='sticky w-full top-0 p-6 lg:p-12 z-50 bg-white/60 backdrop-blur-sm flex flex-col gap-y-6'>
      <div className='flex justify-between items-center animate-duration-1000'>
        <div>
          <Link to='/'>
            <a className='hover:text-gray-500 transition-colors'>
              <Logo />
            </a>
          </Link>
        </div>
        <div>
          <div className='hidden lg:block'>
            <Nav />
          </div>
          <div className='block lg:hidden'>
            <Bars />
          </div>
        </div>
      </div>
      <div className='block lg:hidden'>
        <Menu />
      </div>
    </header>
  )
}

export default Header
