import Layout from '../../layout/Layout'

const index = () => {
  return (
    <Layout>
      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 flex flex-col-reverse lg:flex-row gap-y-6 gap-x-12'>
          <div className='lg:w-1/3'></div>
          <div className='lg:w-2/3 font-secondary flex flex-col gap-y-3'>
            <h1 className='font-black text-xl'>Consejo de Administración</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum non maxime veritatis commodi ipsam ipsa alias quae, vel impedit ratione mollitia excepturi ex
              sapiente est at officia deleniti reprehenderit.
            </p>
            <h1 className='font-black text-xl'>Staff</h1>
            <p>
              Pablo Knop <br />
              Florencia Belén Martínez
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
