import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import ObrasItem from './ObrasItem'
import Modal from './Modal'

const Index = ({ data }) => {
  const [location] = useLocation()
  const [filter, setFilter] = useState('all')
  const [currentImage, setCurrentImage] = useState(null)
  const [currentIndex, setcurrentIndex] = useState(0)

  useEffect(() => {
    const url = location.split('/')[3]
    if (url) {
      setFilter(url)
    } else {
      setFilter('all')
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location, filter])

  const dataFiltered = data.filter(item => filter === 'all' || item.category === filter)

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
    <section className='bg-secondary h-full'>
      <div className='animate-fade animate-duration-500 m-auto max-w-6xl px-6 pb-20 pt-28 gap-y-6 grid lg:grid-cols-3 gap-6'>
        {dataFiltered.map((item, index) => (
          <ObrasItem
            key={index}
            data={item}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </div>
      {currentImage && (
        <Modal
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          handelNext={handelNext}
          handelPrev={handelPrev}
        />
      )}
    </section>
  )
}

export default Index
