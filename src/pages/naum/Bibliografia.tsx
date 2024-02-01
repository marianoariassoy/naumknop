import Layout from '../../layout/Layout'

const index = () => {
  return (
    <Layout>
      <section className='bg-secondary h-full font-secondary'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20'>
          <div className='flex flex-col lg:flex-row gap-x-12'>
            <div className='lg:w-1/3'></div>
            <div className='lg:w-2/3'>
              Gené, Horacio Enrique, Conversaciones con Naum Knop, ca. 1990 en prensa, nunca publicado. Chierico, Osiris, Naum Knop, Buenos Aires, Ediciones de Arte Gaglianone,
              1987. Svanascini, O., Aguinis, M., Naum Knop. Dibujos, Buenos Aires, Ediciones Lesague, 1983. Brughetti, Romualdo, Naum Knop, Buenos Aires, Ediciones Lesague, 1975.
              Caride, Vicente, Naum Knop, Buenos Aires, Ediciones Lesague, 1964.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
