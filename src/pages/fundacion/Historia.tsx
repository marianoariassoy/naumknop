import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTMLText from '../../hooks/useHTML'
import Slider from './Slider'

const Index = () => {
  const { data, loading } = useFetch(`/textos`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'NAUM KNOP Historia'
  }, [])

  return (
    <Layout>
      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 flex flex-col gap-y-12'>
          <div className='w-full bg-slate-300'>
            <Slider />
          </div>
          <div className='font-secondary flex flex-col gap-y-3'>
            <h1 className='font-black text-xl'>La fundación</h1>
            {loading ? <Loader /> : <HTMLText text={data[0].text} />}
            <h1 className='font-black text-xl'>La casa museo</h1>
            {loading ? <Loader /> : <HTMLText text={data[1].text} />}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
