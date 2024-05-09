import ImageComponent from '../../components/Image'

const ItemMuestras = ({ item }) => {
  return (
    <article>
      <div className='aspect-[6/5] mb-3'>
        <ImageComponent
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className='text-gray text-sm'>{item.title}</div>
    </article>
  )
}

export default ItemMuestras
