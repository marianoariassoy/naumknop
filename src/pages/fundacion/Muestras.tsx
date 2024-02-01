import { useState, useEffect } from 'react'
import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import MuestrasItem from './MuestrasItem'

const Index = () => {
  const [filter, setFilter] = useState('all')

  const { year } = useParams()

  useEffect(() => {
    if (year) {
      setFilter(year)
    } else {
      setFilter('all')
    }
  }, [year])

  const data = [
    {
      title: 'Alex Zuy, Florencia Battiti y Pablo Knop con obras de Naum Knop y Jorge Demirjian.',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600',
      year: '2023'
    },
    {
      title: 'Ana Badii junto a la obra de Libero Badii',
      image: 'https://images.pexels.com/photos/17371711/pexels-photo-17371711/free-photo-of-mano-nina-flor-retrato.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      year: '2023'
    },
    {
      title: 'Alex Zuy, Florencia Battiti y Pablo Knop con obras de Naum Knop y Jorge Demirjian.',
      image: 'https://images.pexels.com/photos/18037931/pexels-photo-18037931/free-photo-of-ciudad-italiano-arte-calle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      year: '2023'
    },
    {
      title: 'Alex Zuy, Florencia Battiti y Pablo Knop con obras de Naum Knop y Jorge Demirjian.',
      image: 'https://images.pexels.com/photos/11295166/pexels-photo-11295166.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      year: '2019'
    },
    {
      title: 'Alex Zuy, Florencia Battiti y Pablo Knop con obras de Naum Knop y Jorge Demirjian.',
      image: 'https://images.pexels.com/photos/17591304/pexels-photo-17591304/free-photo-of-ciudad-pavimento-urbano-pueblo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      year: '2019'
    },
    {
      title: 'Alex Zuy, Florencia Battiti y Pablo Knop con obras de Naum Knop y Jorge Demirjian.',
      image: 'https://images.pexels.com/photos/19195931/pexels-photo-19195931/free-photo-of-verano-edificio-industria-arquitectura.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      year: '2022'
    },
    {
      title: 'Alex Zuy, Florencia Battiti y Pablo Knop con obras de Naum Knop y Jorge Demirjian.',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600',
      year: '2022'
    },
    {
      title: 'Alex Zuy, Florencia Battiti y Pablo Knop con obras de Naum Knop y Jorge Demirjian.',
      image: 'https://images.pexels.com/photos/19814523/pexels-photo-19814523/free-photo-of-ciudad-calle-edificio-pared.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      year: '2022'
    }
  ]

  const dataFiltered = data.filter(item => filter === 'all' || item.year === filter)

  return (
    <Layout>
      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 grid lg:grid-cols-3 gap-3 font-secondary'>
          <div className='text-primary pr-20 text-sm border-b border-black/50'>
            <h2>LEGADO</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
            </p>
          </div>
          {dataFiltered.map((item, index) => (
            <MuestrasItem
              item={item}
              key={index}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Index
