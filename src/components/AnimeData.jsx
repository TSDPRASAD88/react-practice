import React from 'react'

const AnimeData = ({data}) => {
  return (
    <div>
      <h3>title: {data.title}</h3>
      <p>genre: {data.genre}</p>
      <p>rating: {data.rating}</p>
      <p></p>
    </div>
  )
}

export default AnimeData
