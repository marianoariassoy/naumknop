import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTMLText from '../../hooks/useHTML'

const Index = () => {
  const { data, loading } = useFetch(`/textos`)

  return (
    <Layout>
      <section className='bg-secondary h-full font-secondary'>
        {loading ? (
          <Loader />
        ) : (
          <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20'>
            <div className='flex flex-col lg:flex-row gap-x-12'>
              <div className='lg:w-1/3'></div>
              <div className='lg:w-2/3'>{<HTMLText text={data[5].text} />}</div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Index
