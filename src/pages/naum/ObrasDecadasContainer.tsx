import { useState, useEffect } from 'react'
import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import ObrasDecadas from './ObrasDecadas'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Decadas from './Decadas'
import Volver from '../../components/Volver'

const Index = () => {
  const { data, loading } = useFetch(`/obras`)
  const [filter, setFilter] = useState({
    from: 0,
    to: 0
  })

  const { decada } = useParams()

  useEffect(() => {
    if (decada) {
      const from = parseInt(decada.split('-')[0])
      const to = parseInt(decada.split('-')[1])
      setFilter({ from, to })
    } else {
      setFilter({ from: 0, to: 0 })
    }
    document.title = 'NAUM KNOP Obras'
  }, [decada])

  return (
    <Layout>
      <Volver url='/naum/obras/decadas' />

      <section className='bg-secondary h-full'>
        {filter.from === 0 && <Decadas />}
        {filter.from > 0 &&
          (loading ? (
            <div className='bg-secondary h-full'>
              <Loader />
            </div>
          ) : (
            <ObrasDecadas
              data={data}
              filter={filter}
            />
          ))}
      </section>
    </Layout>
  )
}

export default Index
