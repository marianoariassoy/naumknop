import { useState, useEffect } from 'react'
import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Volver from '../../components/Volver'
import Muestras from './Muestras'
import ReactPlayer from 'react-player'

const Index = () => {
  const { data, loading } = useFetch(`/muestras`)
  const { data: videos, loading: loadingVideos } = useFetch(`/videos`)
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

      <section className='bg-secondary'>
        <div className='m-auto max-w-6xl pt-20 px-6'>
          {!loadingVideos && (
            <div className='w-full aspect-video'>
              <ReactPlayer
                width='100%'
                height='100%'
                url={videos[0].url}
              />
            </div>
          )}
        </div>
      </section>

      <section className='bg-secondary'>
        {loading ? (
          <Loader />
        ) : (
          <Muestras
            data={data}
            filter={filter}
          />
        )}
      </section>
    </Layout>
  )
}

export default Index
