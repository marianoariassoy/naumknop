import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import ImageComponent from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTMLText from '../../hooks/useHTML'

const Index = () => {
  const { data, loading } = useFetch(`/textos`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'NAUM KNOP Historia'
  }, [])

  return (
    <Layout>
      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 flex flex-col-reverse lg:flex-row gap-y-6 gap-x-12'>
          <div className='lg:w-1/3'>
            <ImageComponent
              src='http://naum-knop.org/backend/images-static/fundacion.jpg'
              alt='Imagen para historia'
            />
          </div>
          <div className='lg:w-2/3 font-secondary flex flex-col gap-y-3'>
            <h1 className='font-black text-xl'>La fundación</h1>
            {loading ? <Loader /> : <HTMLText text={data[1].text} />}
            <h1 className='font-black text-xl'>La casa museo</h1>
            {loading ? <Loader /> : <HTMLText text={data[2].text} />}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
