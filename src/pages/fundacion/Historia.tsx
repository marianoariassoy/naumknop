import Layout from '../../layout/Layout'
import ImageComponent from '../../components/Image'

const index = () => {
  return (
    <Layout>
      <section className='bg-secondary h-full'>
        <div className='animate-fade animate-duration-300 m-auto max-w-6xl px-6 py-20 flex flex-col-reverse lg:flex-row gap-y-6 gap-x-12'>
          <div className='lg:w-1/3'>
            <ImageComponent
              src='https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Imagen para historia'
            />
          </div>
          <div className='lg:w-2/3 font-secondary flex flex-col gap-y-3'>
            <h1 className='font-black text-xl'>La fundación</h1>
            <p className='text-balance'>
              La Fundación Naum Knop (FNK) nace por iniciativa de Pablo y Gabriel Knop, hijos del escultor, siendo su sede la que fuera su Casa-Taller. Cuenta con el aval y
              respaldo de un prestigioso Consejo Directivo formado por profesionales de reconocida trayectoria en el campo artístico de nuestro país. El proyecto y la puesta en
              valor original de la Casa-Museo contó con el apoyo del Fondo Nacional de las Artes, y culminó tras haber sido restaurado el adoquinado del patio y reparadas las ahora
              salas destinadas a la exhibición permanente de la colección. La FNK cuenta con un archivo documental en el que se realizan tareas de relevamiento, catalogación e
              investigación sobre la obra del artista e intercambio de material con diversas instituciones culturales del país y del exterior. Además, en donde funcionó el taller,
              actualmente hay un área dedicada a la restauración y conservación de las piezas.
            </p>
            <h1 className='font-black text-xl'>La casa museo</h1>
            <p className='text-balance'>En 1970 Naum Knop compró la casa, antiguo corralón de principios del siglo pasado, en el barrio de Parque Patricios.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
