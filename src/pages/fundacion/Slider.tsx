import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Back, Forward } from '../../components/icons'

const Slider = () => {
  const { data, loading } = useFetch(`/historia`)

  if (loading) {
    return <Loader />
  }
  const sliderProperties = {
    autoplay: true,
    transitionDuration: 250,
    indicators: false,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    prevArrow: (
      <div className='hover:text-white ml-6 lg:ml-6 text-3xl'>
        <Back />
      </div>
    ),
    nextArrow: (
      <div className='hover:text-white mr-6 lg:mr-6 text-3xl'>
        <Forward />
      </div>
    )
  }

  return (
    <Slide {...sliderProperties}>
      {data.map(item => (
        <div
          key={item.id}
          className='aspect-video'
        >
          <img
            src={item.image}
            className='h-full w-full object-cover object-center'
          />
        </div>
      ))}
    </Slide>
  )
}

export default Slider
