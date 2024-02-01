import ImageComponent from '../../components/Image'

const MuestrasItem = ({ item }) => {
  return (
    <article className='flex flex-col items-start gap-y-3 pb-3 border-b border-black/50'>
      <div className='aspect-[6/5]'>
        <ImageComponent
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className='text-gray text-sm'>{item.title}</div>
    </article>
  )
}

export default MuestrasItem
