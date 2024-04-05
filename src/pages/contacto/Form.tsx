import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Loader from '../../components/Loader'

interface Inputs {
  name: string
  phone: string
  email: string
  message: string
}

const FormContacto = () => {
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: Inputs) => {
    setSending(true)
    const sender = {
      to: 'info@naum-knop.org',
      from: 'info@naum-knop.org',
      from_name: 'Naum Knop',
      subject: 'Contacto'
    }

    axios.post('http://naum-knop.org/backend/send-email.php', { ...data, ...sender }).then(data => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const Error = () => {
    return <div className='text-sm text-primary'>Por favor complete este campo</div>
  }

  return (
    <div className='row'>
      {error ? (
        <div className='text-xl text-primary'>Se produjo un error al enviar el mensaje</div>
      ) : sended ? (
        <div className='text-xl text-primary'>¡Su mensaje fue enviado! Gracias por contactarte con nosotros.</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-y-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='block'>Nombre</label>
              <input
                className='w-full border bg-transparent border-black h-14 px-4'
                {...register('name', { required: true })}
              />
              {errors.name && <Error />}
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='block'>E-mail</label>
              <input
                className='w-full border bg-transparent border-black h-14 px-4'
                {...register('email', { required: true })}
              />
              {errors.email && <Error />}
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='block'>Mensaje</label>
              <textarea
                className='w-full border bg-transparent border-black h-44 p-4'
                {...register('message', { required: true })}
              />
              {errors.message && <Error />}
            </div>
            <div className='flex justify-end'>
              {sending ? (
                <div className='h-14'>
                  <Loader />
                </div>
              ) : (
                <button
                  type='submit'
                  id='button-form'
                  className='font-black hover:bg-black text-white h-14 bg-primary transition-all px-8'
                >
                  Enviar
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default FormContacto
