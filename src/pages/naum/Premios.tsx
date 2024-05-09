import { useState } from 'react'
import Layout from '../../layout/Layout'
import PremiosItem from './PremiosItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Volver from '../../components/Volver'
import Modal from './Modal'

const Index = () => {
  const { data, loading } = useFetch(`/premios`)
  const [currentImage, setCurrentImage] = useState(null)
  const [currentIndex, setcurrentIndex] = useState(0)

  const handelNext = () => {
    if (currentIndex === data.length - 1) {
      setCurrentImage(data[0].image)
      setcurrentIndex(0)
    } else {
      setCurrentImage(data[currentIndex + 1].image)
      setcurrentIndex(currentIndex + 1)
    }
  }
  const handelPrev = () => {
    if (currentIndex === 0) {
      setCurrentImage(data[data.length - 1].image)
      setcurrentIndex(data.length - 1)
    } else {
      setCurrentImage(data[currentIndex - 1].image)
      setcurrentIndex(currentIndex - 1)
    }
  }

  return (
    <Layout>
      <Volver url='/naum/exposiciones' />

      <section className='bg-secondary h-full font-secondary'>
        {loading ? (
          <Loader />
        ) : (
          <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 flex flex-col gap-y-6'>
            <div className='flex gap-x-6 lg:gap-x-12'>
              <div className='w-[15%] lg:w-1/3'></div>
              <div className='w-[85%] lg:w-2/3'>
                <h1 className='text-xl font-black'>Premios</h1>
              </div>
            </div>
            <div className='flex flex-col gap-y-2'>
              {data.map((item, index) => (
                <PremiosItem
                  key={index}
                  data={item}
                  setCurrentImage={setCurrentImage}
                />
              ))}
            </div>
          </div>
        )}
        {currentImage && (
          <Modal
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            handelNext={handelNext}
            handelPrev={handelPrev}
          />
        )}
      </section>
    </Layout>
  )
}

export default Index
