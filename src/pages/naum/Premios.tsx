import Layout from '../../layout/Layout'
import ExposicionesItem from './ExposicionesItem'

const index = () => {
  const data = [
    {
      year: '1967',
      text: 'Premio Adquisición, Salón de Arte “Obras para el Hotel Albatros”.'
    },
    {
      year: '1964',
      text: 'Gran Premio de Honor, LIII Salón Nacional de Artes Plásticas.'
    },
    {
      year: '1963',
      text: 'Gran Premio de Escultura, XII Salón Municipal de Artes Plásticas Manuel Belgrano.'
    },
    {
      year: '1962',
      text: 'Premio de Honor “Ministerio de Educación y Justicia de La Nación”, El Salón Nacional de Artes Plásticas.'
    },
    {
      year: '1961',
      text: 'Primer Premio Adquisición, XXXIX Salón de Rosario'
    },
    {
      year: '1960',
      text: 'Premio Adquisición “Provincia de Santa Fe”, 37 Salón Anual de Santa Fe.'
    },
    {
      year: '1959',
      text: 'Premio, XXXVIII Salón Anual de Artes Plásticas de Rosario.'
    },
    {
      year: '1950',
      text: 'Primer Premio, Salón de Arte de Mar del Plata.'
    }
  ]

  return (
    <Layout>
      <section className='bg-secondary h-full font-secondary'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-12'>
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
