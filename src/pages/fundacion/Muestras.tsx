import MuestrasItem from './MuestrasItem'

const Muestras = ({ data, filter }) => {
  const dataFiltered = data.filter(item => filter === 'all' || item.year == filter)

  return dataFiltered.map((item, index) => (
    <MuestrasItem
      item={item}
      key={index}
    />
  ))
}

export default Muestras
