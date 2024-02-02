import Layout from '../../layout/Layout'
import ExposicionesItem from './ExposicionesItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch(`/premios`)

  return (
    <Layout>
      <section className='bg-secondary h-full font-secondary'>
        {loading ? (
          <Loader />
        ) : (
          <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20'>
            <div className='flex flex-col gap-y-2'>
              {data.map((item, index) => (
                <ExposicionesItem
                  key={index}
                  year={item.year}
                  text={item.text}
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
