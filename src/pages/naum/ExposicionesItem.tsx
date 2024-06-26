const ExposicionesItem = ({ data }) => {
  return (
    <article className='flex gap-x-6 lg:gap-x-12'>
      <div className='w-[15%] lg:w-1/3 text-primary font-black text-xl lg:text-right'>{data.year}</div>
      <div className='w-[85%] lg:w-2/3 flex flex-col gap-x-3'>
        <div>
          {data.file ? (
            <a
              href={data.file}
              target='_blank'
              rel='noreferrer'
              className='hover:underline'
            >
              {data.text}
            </a>
          ) : (
            data.text
          )}
        </div>
      </div>
    </article>
  )
}

export default ExposicionesItem
