import { useEffect } from 'react'
import Layout from '../../layout/Layout'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'NAUM KNOP'
  }, [])

  return (
    <Layout>
      <section className='h-full w-full px-6 flex items-center justify-center bg-secondary'>
        <div className='text-2xl'>Página no encontada</div>
      </section>
    </Layout>
  )
}

export default Index
