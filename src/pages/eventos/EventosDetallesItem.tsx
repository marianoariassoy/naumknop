import ImageComponent from '../../components/Image'
import HTML from '../../hooks/useHTML'

const ObrasItem = ({ data }) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <div>
        <ImageComponent
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className='text-secondary text-gray text-sm'>
        <HTML text={data.title} />
      </div>
    </article>
  )
}

export default ObrasItem
