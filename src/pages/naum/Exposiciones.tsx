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
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 flex flex-col gap-y-6'>
          <div className='flex gap-x-6 lg:gap-x-12'>
            <div className='w-[15%] lg:w-1/3'></div>
            <div className='w-[85%] lg:w-2/3'>
              <h1 className='text-xl font-black'>Exposiciones</h1>
            </div>
          </div>
          <div className='flex flex-col gap-y-2'>
            {data.map((item, index) => (
              <ExposicionesItem
                key={index}
                year={item.year}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
