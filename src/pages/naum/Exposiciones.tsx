import Layout from '../../layout/Layout'
import ExposicionesItem from './ExposicionesItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch(`/exposiciones`)

  return (
    <Layout>
      <section className='bg-secondary h-full font-secondary'>
        {loading ? (
          <Loader />
        ) : (
          <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 flex flex-col gap-y-6'>
            <div className='flex gap-x-6 lg:gap-x-12'>
              <div className='w-[15%] lg:w-1/3'></div>
              <div className='w-[85%] lg:w-2/3'>
                <h1 className='text-xl font-black'>Exposiciones</h1>
              </div>
            </div>
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
