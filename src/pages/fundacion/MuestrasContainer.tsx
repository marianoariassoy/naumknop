import { useState, useEffect } from 'react'
import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import MuestrasTexto from './MuestrasTexto'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Volver from '../../components/Volver'
import Muestras from './Muestras'

const Index = () => {
  const { data, loading } = useFetch(`/muestras`)
  const [filter, setFilter] = useState('all')

  const { year } = useParams()

  useEffect(() => {
    if (year) {
      setFilter(year)
    } else {
      setFilter('all')
    }
  }, [year])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'NAUM KNOP Muestras'
  }, [])

  return (
    <Layout>
      <Volver url='/fundacion/historia' />

      <section className='bg-secondary h-full'>
        <div className='m-auto max-w-6xl px-6 pt-20 mb-10 font-secondary'>
          <MuestrasTexto />
        </div>

        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 pb-20 grid lg:grid-cols-3 gap-6  font-secondary'>
          {loading ? (
            <Loader />
          ) : (
            <Muestras
              data={data}
              filter={filter}
            />
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Index
