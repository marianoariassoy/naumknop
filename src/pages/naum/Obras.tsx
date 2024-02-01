import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import ObrasItem from './ObrasItem'

const Index = () => {
  const [location] = useLocation()
  const [filter, setFilter] = useState('all')

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

  useEffect(() => {
    const url = location.split('/')[3]
    if (url) {
      setFilter(url)
    } else {
      setFilter('all')
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location, filter])

  const dataFiltered = data.filter(item => filter === 'all' || item.category === filter)

  return (
    <Layout>
      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-500 m-auto max-w-4xl px-6 py-20 flex flex-col gap-y-6'>
          {dataFiltered.map((item, index) => (
            <ObrasItem
              key={index}
              data={item}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Index
