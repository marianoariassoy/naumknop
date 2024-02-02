import ImageComponent from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const BiografiaImages = () => {
  const { data, loading } = useFetch(`/biografia`)

  if (loading) return <Loader />

  return data.map((item, index) => (
    <article className='flex flex-col gap-y-3'>
      <ImageComponent
        key={index}
        src={item.image}
        alt={item.title}
      />
      <div>
        <h3 className='text-xs text-gray'>{item.title}</h3>
      </div>
    </article>
  ))
}

export default BiografiaImages
