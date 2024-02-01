import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Social from './Social'
import Slider from './Slider'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch(`/portada`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'NAUM KNOP Fundación'
    const header = document.querySelector('header')
    header.classList.add('hero-mode', 'animate-fade')
    return () => {
      header.classList.remove('hero-mode')
    }
  }, [])

  return (
    <Layout>
      <section className='w-screen h-screen bg-black/70 text-white'>
        {loading ? <Loader /> : <Slider data={data} />}

        <div className='absolute bottom-0 left-0 p-6 lg:p-12 text-white animate-fade animate-duration-500 animate-delay-300'>
          <Social />
        </div>
      </section>
    </Layout>
  )
}

export default Index
