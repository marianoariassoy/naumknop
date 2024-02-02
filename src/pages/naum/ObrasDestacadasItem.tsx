import { Link } from 'wouter'

const ObrasDestacadasItem = ({ data }) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <Link to={`/naum/obras/decadas/${data.title}`}>
        <div
          className='bg-[#00a19a] hover:bg-blend-multiply aspect-[6/5] transition-all cursor-pointer bg-no-repeat bg-cover bg-center'
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>
      </Link>
      <div>{data.title}</div>
    </article>
  )
}

export default ObrasDestacadasItem
