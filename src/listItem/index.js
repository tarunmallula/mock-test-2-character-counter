import './index.css'

const ListItem = props => {
  const {item} = props
  const {name, length} = item

  return (
    <li>
      <p className="list-item">
        {name} : <span className="count">{length}</span>
      </p>
    </li>
  )
}

export default ListItem
