import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import PrensaItem from './PrensaItem'

const Index = () => {
  const { data, loading } = useFetch(`/prensa`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'NAUM KNOP Prensa'
  }, [])

  return (
    <Layout>
      <section className='bg-secondary h-full'>
        {loading ? (
          <Loader />
        ) : (
          <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 flex flex-col-reverse lg:flex-row gap-y-6 gap-x-12 font-secondary'>
            <div className='flex flex-col gap-y-3'>
              {data.map((item, index) => (
                <PrensaItem
                  key={index}
                  data={item}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Index
