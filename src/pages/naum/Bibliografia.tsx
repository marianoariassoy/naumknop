import Layout from '../../layout/Layout'
import ExposicionesItem from './ExposicionesItem'

const index = () => {
  const data = [
    {
      year: '1989',
      text: '“Naum Knop. Esculturas”, Museu de Arte Contemporânea José Pancetti, San Pablo, Brasil “Argentine Art 1989”, Arch Gallery, Nueva York, Estados Unidos. “The Lyric Structures of Naum Knop”, Museum of Modern Art of Latin America Gallery at the Organization of American States Building Washington, Estados Unidos.'
    },
    {
      year: '1986',
      text: '“Naum Knop”, Arch Gallery, Nueva York, Estados Unidos.'
    },
    {
      year: '1984',
      text: '“Naum Knop. Esculturas”, Museu de Arte Contemporânea José Pancetti, San Pablo, Brasil “Argentine Art 1989”, Arch Gallery, Nueva York, Estados Unidos.'
    },
    {
      year: '1982',
      text: '“Naum Knop”, Vincent Price Gallery, Los Angeles, Estados Unidos.'
    },
    {
      year: '1981',
      text: '“Encounter of Argentine Plastic Artists”, The Argentine American Cultural Foundation, Los Angeles, Estados Unidos. Muestra en B. Lewin Galleries, Palm Spring – Beverly Hills, Estados Unidos.'
    },
    {
      year: '1977',
      text: '“Naum Knop”, EP Galerie, Düsseldorf, Alemania.'
    },
    {
      year: '1973',
      text: '“N. Knop Sculptures”, Art Gallery at Leivik House, Tel-Aviv, Israel. “Exhibition of Sculptures by the argentinian Sculptor Naum Knop”, '
    }
  ]

  return (
    <Layout>
      <section className='bg-secondary h-full font-secondary'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-12'>
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
