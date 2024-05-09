import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTMLText from '../../hooks/useHTML'
import Volver from '../../components/Volver'

const Index = () => {
  const { data, loading } = useFetch(`/textos`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'NAUM KNOP Nosotros'
  }, [])

  return (
    <Layout>
      <Volver url='/fundacion/muestras' />

      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 flex flex-col-reverse lg:flex-row gap-y-6 gap-x-12'>
          <div className='lg:w-1/3'></div>
          <div className='lg:w-2/3 font-secondary flex flex-col gap-y-3'>
            <h1 className='font-black text-xl'>Consejo de Administración</h1>
            {loading ? <Loader /> : <HTMLText text={data[2].text} />}
            <h1 className='font-black text-xl'>Staff</h1>
            {loading ? <Loader /> : <HTMLText text={data[3].text} />}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
