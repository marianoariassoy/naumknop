import EventosItem from './EventosItem'

const Lugares = () => {
  const data = [
    {
      title: 'PATIO',
      text: '',
      image: 'https://marianoarias.soy/sites/knop-backend/images-static/patio.jpg'
    },
    {
      title: 'SALA AUDITORIO',
      text: 'Capacidad: 50 personas\nAire acondicionado\nIluminación dicroica',
      image: 'https://marianoarias.soy/sites/knop-backend/images-static/sala-auditorio.jpg'
    },
    {
      title: 'SALA DE EXPOSICIÓN',
      text: '',
      image: 'https://marianoarias.soy/sites/knop-backend/images-static/sala-exposicion.jpg'
    }
  ]

  return (
    <div className='m-auto max-w-6xl px-6 pb-12 pt-12 grid lg:grid-cols-3 gap-3'>
      {data.map((item, index) => (
        <EventosItem
          data={item}
          key={index}
        />
      ))}
    </div>
  )
}

export default Lugares
