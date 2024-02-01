import Layout from '../../layout/Layout'
import EventosItem from './EventosItem'

const index = () => {
  const data = [
    {
      title: 'PATIO',
      text: '',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'SALA AUDITORIO',
      text: 'Capacidad: 50 personas\nAire acondicionado\nIluminación dicroica',
      image: 'https://images.pexels.com/photos/18037931/pexels-photo-18037931/free-photo-of-ciudad-italiano-arte-calle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      title: 'SALA DE EXPOSICIÓN',
      text: '',
      image: 'https://images.pexels.com/photos/13990979/pexels-photo-13990979.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    }
  ]

  return (
    <Layout>
      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 pt-20 flex flex-col-reverse lg:flex-row gap-y-6 gap-x-12 font-secondary'>
          <div className='lg:w-1/3'></div>
          <div className='lg:w-2/3 flex flex-col gap-y-3'>
            <p className='text-balance text-primary'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
              dapibus.
            </p>
            <a
              href='mailto:eventos@naum-knop.org'
              className='font-bold text-primary-hover'
            >
              Contacto: eventos@naum-knop.org
            </a>
          </div>
        </div>

        <div className='m-auto max-w-6xl px-6 pb-12 pt-12 grid lg:grid-cols-3 gap-3'>
          {data.map((item, index) => (
            <EventosItem
              data={item}
              key={index}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default index
