import ImageComponent from '../../components/Image'
import HTML from '../../hooks/useHTML'

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
        <div className='absolute top-0 cursor-pointer left-0 w-full h-full opacity-0 hover:opacity-100'>
          <span className='font-secondary text-white p-6 absolute z-10'>
            <HTML text={data.title} />
          </span>
          <div className='h-full w-full bg-black/70 mix-blend-multiply'></div>
        </div>
      </div>
    </article>
  )
}

export default ObrasItem
