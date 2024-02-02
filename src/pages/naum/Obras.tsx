import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import ObrasItem from './ObrasItem'

const Index = ({ data }) => {
  const [location] = useLocation()
  const [filter, setFilter] = useState('all')

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
  )
}

export default Index
