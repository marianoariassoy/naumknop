import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import HTMLText from '../../hooks/useHTML'
import BeatLoader from 'react-spinners/BeatLoader'
import BiografiaImages from './BiografiaImages'

const Index = () => {
  const { data, loading } = useFetch(`/textos`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'NAUM KNOP Biografía'
  }, [])

  return (
    <Layout>
      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 flex flex-col-reverse lg:flex-row gap-y-6 gap-x-12'>
          <div className='lg:w-1/3'></div>
          <div className='lg:w-2/3 flex flex-col gap-y-6'>
            <div className='font-secondary [&>div>b]:font-black [&>div>b]:text-[#00a19a]'>{loading ? <BeatLoader /> : <HTMLText text={data[7].text} />}</div>

            <div className='grid lg:grid-cols-2 gap-6'>
              <BiografiaImages />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
