import React from 'react'
import List from './components/List'
import useFetch from './hooks/useFetch'

function App() {
  const [data, stillFetching] = useFetch()
  const style = {
    marginLeft: '1.3rem',
  }

  return (
    <div>
      <h1 style={style}>Silicon Valley Employees</h1>
      {stillFetching ? (
        <p style={style}>Loading data...</p>
      ) : (
        <List data={data} />
      )}
    </div>
  )
}

export default App
