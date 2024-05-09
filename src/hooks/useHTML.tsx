const useHTML = ({ text }) => {
  return (
    <div
      className='leading-7'
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default useHTML
