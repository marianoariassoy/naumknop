import ImageComponent from '../../components/Image'

const ObrasItem = ({ data, setCurrentImage }) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <div
        className='min-h-[300px] relative'
        onClick={() => setCurrentImage(data.image)}
      >
        <ImageComponent
          src={data.image}
          alt={data.title}
        />

        <div
          className={`absolute top-0 cursor-pointer left-0 w-full h-full bg-primary opacity-0 hover:opacity-100 mix-blend-multiply transition-all ${
            setCurrentImage ? '' : 'hidden'
          }`}
        ></div>
      </div>
      <div className='text-gray font-secondary'>{data.title}</div>
    </article>
  )
}

export default ObrasItem
