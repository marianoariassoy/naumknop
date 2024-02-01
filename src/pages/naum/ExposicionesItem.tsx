const ExposicionesItem = ({ year, text }) => {
  return (
    <article className='flex gap-x-6 lg:gap-x-12'>
      <div className='w-[15%] lg:w-1/3 text-primary font-black text-xl lg:text-right'>{year}</div>
      <div className='w-[85%] lg:w-2/3 flex flex-col gap-x-3'>
        <div>{text}</div>
      </div>
    </article>
  )
}

export default ExposicionesItem
