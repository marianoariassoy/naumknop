// import ObrasItem from './ObrasItem'

// const ObrasDecadas = ({ data, filter }) => {
//   return (
//     <div className='animate-fade animate-duration-300 m-auto max-w-4xl px-6 py-20'>

//       <div className='flex flex-col gap-y-6'>
//         {data
//           .filter(item => item.year >= filter.from && item.year <= filter.to)
//           .map((item, index) => (
//             <ObrasItem
//               key={index}
//               data={item}
//               setCurrentImage={null}
//             />
//           ))}
//       </div>
//     </div>
//   )
// }

// export default ObrasDecadas

import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import ObrasItem from './ObrasItem'
import Modal from './Modal'

const ObrasDecadas = ({ data, filter }) => {
  const [location] = useLocation()
  const [currentImage, setCurrentImage] = useState(null)
  const [currentIndex, setcurrentIndex] = useState(0)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location, filter])

  const dataFiltered = data.filter(item => item.year >= filter.from && item.year <= filter.to)

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
      <div className='m-auto max-w-6xl px-6 pt-28 pb-12'>
        <h1 className='text-3xl mb-6 font-secondary font-black'>
          {filter.from}
          {' - '}
          {filter.to}
        </h1>
      </div>
      <div className='animate-fade animate-duration-500 m-auto max-w-6xl px-6 pb-20  gap-y-6 grid lg:grid-cols-3 gap-6'>
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

export default ObrasDecadas
