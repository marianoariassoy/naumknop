import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Social from './Social'
import Form from './Form'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'NAUM KNOP Contacto'
  }, [])

  return (
    <Layout>
      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 flex flex-col-reverse lg:flex-row gap-y-6 gap-x-12 font-secondary'>
          <div className='lg:w-1/3 flex flex-col gap-y-6 lg:pr-14'>
            <div>
              Catamarca 1747 <br />
              C1246 AAK <br />
              Buenos Aires
            </div>
            <div>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9466935358228!2d-58.40508722341009!3d-34.63078735892979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1bad1e7421%3A0x1d6677efcbff6a2a!2sCatamarca%201747%2C%20C1246AAK%20CABA!5e0!3m2!1ses-419!2sar!4v1706819257478!5m2!1ses-419!2sar'
                width='100%'
                height='300'
                loading='lazy'
              ></iframe>
            </div>
            <div className='mt-6'>
              <Social />
            </div>
          </div>
          <div className='lg:w-2/3'>
            <Form />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
