import { useState, useEffect } from 'react'
import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import ObrasDestacadasItem from './ObrasDestacadasItem'
import ObrasItem from './ObrasItem'

const Index = () => {
  const [filter, setFilter] = useState({
    from: 0,
    to: 0
  })

  const { decada } = useParams()

  useEffect(() => {
    if (decada) {
      const from = parseInt(decada.split('-')[0])
      const to = parseInt(decada.split('-')[1])
      setFilter({ from, to })
    } else {
      setFilter({ from: 0, to: 0 })
    }
  }, [decada])

  const decadas = [
    {
      title: '1930-1940',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: '1940-1960',
      image: 'https://images.pexels.com/photos/18037931/pexels-photo-18037931/free-photo-of-ciudad-italiano-arte-calle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      title: '1960-1970',
      image: 'https://images.pexels.com/photos/13990979/pexels-photo-13990979.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    }
  ]

  const data = [
    {
      title: 'Este es un dibujo',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600',
      category: 'dibujos',
      year: 1930
    },
    {
      title: 'Epígrafe de la obra',
      image: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'dibujos',
      year: 1940
    },
    {
      title: 'Epígrafe de la obra',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600',
      category: 'dibujos',
      year: 1960
    },
    {
      title: 'Epígrafe de la obra',
      image: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'dibujos',
      year: 1970
    },
    {
      title: 'Epígrafe de la obra',
      image: 'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'dibujos',
      year: 1950
    },
    {
      title: 'Esta es una escultura',
      image: 'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'esculturas',
      year: 1950
    },
    {
      title: 'Esta es una escultura',
      image: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'esculturas',
      year: 1930
    },
    {
      title: 'Esta es una escultura',
      image: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'esculturas',
      year: 1930
    },
    {
      title: 'Esta es una escultura',
      image: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'esculturas',
      year: 1930
    }
  ]

  const dataFiltered = data.filter(item => item.year >= filter.from && item.year <= filter.to)

  return (
    <Layout>
      <section className='bg-secondary h-full'>
        {filter.from === 0 && (
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
        )}
        {filter.from > 0 && (
          <div className='animate-fade animate-duration-300 m-auto max-w-4xl px-6 py-20'>
            <h1 className='text-3xl mb-6 font-secondary font-black'>
              {filter.from}
              {' - '}
              {filter.to}
            </h1>
            <div className='flex flex-col gap-y-6'>
              {dataFiltered.map((item, index) => (
                <ObrasItem
                  key={index}
                  data={item}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Index
