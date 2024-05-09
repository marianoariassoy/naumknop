import EventosDetallesItem from './EventosDetallesItem'
import useFetch from '../../hooks/useFetch'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import Loader from '../../components/Loader'
import Volver from '../../components/Volver'

const Index = () => {
  const [location] = useLocation()
  const id = location.split('/')[2]
  const title = location.split('/')[3]
  const { data, loading } = useFetch(`/imagenes/${id}`)

  return (
    <Layout>
      <Volver url='/eventos' />

      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-500 m-auto max-w-6xl px-6 pb-20 pt-28 flex flex-col gap-y-6'>
          <div className=''>{title}</div>
          <div className='gap-y-6 grid lg:grid-cols-3 gap-6'>
            {loading ? (
              <Loader />
            ) : (
              data.map((item, index) => (
                <EventosDetallesItem
                  key={index}
                  data={item}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
