const PremiosItem = ({ data, setCurrentImage }) => {
  return (
    <article className='flex gap-x-6 lg:gap-x-12'>
      <div className='w-[15%] lg:w-1/3 text-primary font-black text-xl lg:text-right'>{data.year}</div>
      <div className='w-[85%] lg:w-2/3 flex flex-col gap-x-3'>
        <div>
          {data.image ? (
            <button
              onClick={() => setCurrentImage(data.image)}
              className='hover:underline cursor-pointer'
            >
              {data.text}
            </button>
          ) : (
            data.text
          )}
        </div>
      </div>
    </article>
  )
}

export default PremiosItem
