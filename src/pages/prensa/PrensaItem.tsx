import HTML from '../../hooks/useHTML'

const PrensaItem = ({ data }) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <a
        href={data.url ? data.url : data.file}
        target='_blank'
        rel='noreferrer'
        className='hover:underline'
      >
        <h3>
          <HTML text={data.title} />
        </h3>
        <p className='text-gray'>{data.url}</p>
      </a>
    </article>
  )
}

export default PrensaItem
