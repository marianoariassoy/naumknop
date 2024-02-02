import ObrasItem from './ObrasItem'

const ObrasDecadas = ({ data, filter }) => {
  return (
    <div className='animate-fade animate-duration-300 m-auto max-w-4xl px-6 py-20'>
      <h1 className='text-3xl mb-6 font-secondary font-black'>
        {filter.from}
        {' - '}
        {filter.to}
      </h1>
      <div className='flex flex-col gap-y-6'>
        {data.map((item, index) => (
          <ObrasItem
            key={index}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default ObrasDecadas
