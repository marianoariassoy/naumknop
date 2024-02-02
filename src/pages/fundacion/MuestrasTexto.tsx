import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTMLText from '../../hooks/useHTML'

const MuestrasTexto = () => {
  const { data, loading } = useFetch(`/textos`)

  return (
    <div className='text-primary pr-20 border-b border-black/50 pb-6'>
      <h2>LEGADO</h2>
      {loading ? <Loader /> : <HTMLText text={data[0].text} />}
    </div>
  )
}

export default MuestrasTexto
