import Layout from '../../layout/Layout'

const index = () => {
  const data = [
    {
      title: 'Título de la nota',
      url: 'http://google.com'
    },
    {
      title: 'Título de la nota',
      url: 'http://google.com'
    },
    {
      title: 'Título de la nota',
      url: 'http://google.com'
    },
    {
      title: 'Título de la nota',
      url: 'http://google.com'
    },
    {
      title: 'Título de la nota',
      url: 'http://google.com'
    },
    {
      title: 'Título de la nota',
      url: 'http://google.com'
    }
  ]
  return (
    <Layout>
      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 flex flex-col-reverse lg:flex-row gap-y-6 gap-x-12 font-secondary'>
          <div className='flex flex-col gap-y-3'>
            {data.map((item, index) => (
              <article
                className='flex flex-col gap-y-3'
                key={index}
              >
                <a
                  href={item.url}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:opacity-70 transition-opacity'
                >
                  <h3>{item.title}</h3>
                  <p className='text-gray'>{item.url}</p>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
