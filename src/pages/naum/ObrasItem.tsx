import ImageComponent from '../../components/Image'

const ObrasItem = ({ data }) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <div className='min-h-[300px]'>
        <ImageComponent
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className='text-gray font-secondary'>{data.title}</div>
    </article>
  )
}

export default ObrasItem
