import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Obras from './Obras'

const Index = () => {
  const { data, loading } = useFetch(`/obras`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'NAUM KNOP Obras'
  }, [])

  return (
    <Layout>
      {loading ? (
        <div className='bg-secondary h-full'>
          <Loader />
        </div>
      ) : (
        <Obras data={data} />
      )}
    </Layout>
  )
}

export default Index
