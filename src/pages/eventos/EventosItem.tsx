import { Link } from 'wouter'

const EventosItem = ({ data }) => {
  return (
    <article className='flex flex-col gap-y-3 border-t border-black/50 pt-3'>
      <Link to={`/eventos/${data.id}/${data.title}`}>
        <a
          className='bg-[#00a19a] hover:bg-blend-multiply aspect-[6/5] transition-all cursor-pointer bg-no-repeat bg-cover bg-center text-white p-6'
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <h3 className='font-bold mb-3'>{data.title}</h3>
          <span className='whitespace-break-spaces font-secondary'>{data.text}</span>
        </a>
      </Link>
    </article>
  )
}

export default EventosItem
