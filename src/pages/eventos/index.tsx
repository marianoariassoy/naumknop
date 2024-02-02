import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTMLText from '../../hooks/useHTML'
import Lugares from './Lugares'

const Index = () => {
  const { data, loading } = useFetch(`/textos`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'NAUM KNOP Eventos'
  }, [])

  return (
    <Layout>
      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 pt-20 flex flex-col-reverse lg:flex-row gap-y-6 gap-x-12 font-secondary'>
          <div className='lg:w-1/3'></div>
          <div className='lg:w-2/3 flex flex-col gap-y-3'>
            {loading ? (
              <Loader />
            ) : (
              <div className='text-primary'>
                <HTMLText text={data[6].text} />
              </div>
            )}
            <a
              href='mailto:eventos@naum-knop.org'
              className='font-bold text-primary-hover'
            >
              Contacto: eventos@naum-knop.org
            </a>
          </div>
        </div>
        <Lugares />
      </section>
    </Layout>
  )
}

export default Index
