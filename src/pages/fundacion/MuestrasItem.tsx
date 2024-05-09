import HTMLText from '../../hooks/useHTML'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import ItemMuestras from './ItemMuestras'

const MuestrasItem = ({ item }) => {
  const { data, loading } = useFetch(`/imagenes/${item.id}`)
  if (loading) return <Loader />

  return (
    <article className='flex flex-col gap-y-2 pb-12 border-b border-black/50 mb-12'>
      <div className='m-auto max-w-6xl px-6 pt-20 mb-10 font-secondary text-primary'>
        <h2 className='uppercase'>{item.title}</h2>
        <HTMLText text={item.text} />
      </div>

      <div className='m-auto max-w-6xl px-6 grid lg:grid-cols-3 gap-6'>
        {data.map((item, index) => (
          <ItemMuestras
            key={index}
            item={item}
          />
        ))}
      </div>
    </article>
  )
}

export default MuestrasItem
