import EventosItem from './EventosItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Lugares = () => {
  const { data, loading } = useFetch(`/eventos`)

  if (loading)
    return (
      <div className='w-full mt-12'>
        <Loader />
      </div>
    )

  return (
    <div className='fade-in m-auto max-w-6xl px-6 pb-12 pt-12 grid lg:grid-cols-3 gap-3'>
      {data.map((item, index) => (
        <EventosItem
          data={item}
          key={index}
        />
      ))}
    </div>
  )
}

export default Lugares
