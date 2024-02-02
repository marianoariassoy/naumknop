import ObrasDestacadasItem from './ObrasDestacadasItem'

const Decadas = () => {
  const decadas = [
    {
      title: '1930-1940',
      image: 'https://marianoarias.soy/sites/knop-backend/images-static/decadas19301940.jpg'
    },
    {
      title: '1940-1960',
      image: 'https://marianoarias.soy/sites/knop-backend/images-static/decadas19401960.jpg'
    },
    {
      title: '1960-1970',
      image: 'https://marianoarias.soy/sites/knop-backend/images-static/decadas19601970.jpg'
    }
  ]

  return (
    <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-12 flex items-center justify-center h-full'>
      <div className='w-full grid lg:grid-cols-3 gap-6'>
        {decadas.map((item, index) => (
          <ObrasDestacadasItem
            key={index}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Decadas
