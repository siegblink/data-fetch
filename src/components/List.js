import React from 'react'

export default function List({ data }) {
  return <ul>{data.map(renderData)}</ul>
}

function renderData(dataEntry) {
  const style = {
    listStyleType: 'none',
  }

  return (
    <li style={style} key={dataEntry.id}>
      {dataEntry.fullname} | {dataEntry.email}
    </li>
  )
}
