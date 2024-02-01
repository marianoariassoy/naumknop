import Layout from '../../layout/Layout'
import ImageComponent from '../../components/Image'

const index = () => {
  const images = [
    {
      image: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Epígrafe de la foto'
    },
    {
      image: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Naum Knop'
    }
  ]

  return (
    <Layout>
      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-12 flex flex-col-reverse lg:flex-row    gap-y-6 gap-x-12 '>
          <div className='lg:w-1/3 flex flex-col gap-y-6 lg:pr-14'>
            {images.map((item, index) => (
              <article className='flex flex-col gap-y-3'>
                <ImageComponent
                  key={index}
                  src={item.image}
                  alt={item.title}
                />
                <div>
                  <h3 className='text-xs'>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className='lg:w-2/3'>
            <p className='font-secondary text-balance [&>strong]:font-black [&>strong]:text-[#00a19a]'>
              Naum Knop nace en <strong>1917</strong> en Buenos Aires, en el seno de una familia de origen ruso procedente de Ucrania. Su infancia transcurre en el barrio de La
              Paternal, donde su padre tiene un taller de carpintería, espacio en el que toma contacto por primera vez con la técnica de la talla en madera. Tras terminar la
              escuela primaria, trabaja con el maestro Luis Fernández y poco después se dedica al diseño de muebles. Hacia <strong>1935</strong> , ingresa a la Escuela de Bellas
              Artes Manuel Belgrano. Entre <strong>1941 y 1942</strong> asiste al curso para egresados que dictan Alberto Lagos y Alfredo Bigatti en la Escuela Nacional de Bellas
              Artes y continúa formándose entre 1942-1945 en la Escuela Superior Ernesto de la Cárcova con Soto Avedaño, Carlos de la Cárcova y José Fioravanti. En esta época pone
              sus obras en diálogo con otros jóvenes artistas como Libero Badii y Aurelio Macchi. Hacia 1947 realiza su viaje de estudios. Se dirige a California, Estados Unidos,
              donde ingresa al Art Institute de Los Ángeles. Paralelamente visita museos y galerías. En enero de 1948 organiza su primera exposición en el extranjero, llevada a
              cabo en Hall of Ar ts de Beverly Hills en Los Ángeles. Durante este período recorre Chicago y luego Nueva York. Ese año viaja a Europa; su itinerario incluye Francia,
              Italia, Suiza e Inglaterra. Como resultado toma contacto con la obra de Henry Moore, Jean Arp, Lipchitz, Brancusi, Umberto Boccioni, Henry Laurens, Ossip Zadkine.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
