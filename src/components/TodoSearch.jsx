const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <input placeholder='Buscar tarea'
    value={searchValue}
    onChange={e => setSearchValue(e.target.value)}
    />
  )
}

export { TodoSearch };