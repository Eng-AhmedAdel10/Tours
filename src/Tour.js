import React, { useState } from 'react'

const Tour = ({ id, name, image, price, info, deleteTour }) => {
  const [read, setRead] = useState(false)

  return (
    <article id={id} className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4 className='name'>{name}</h4>
          <h4 className='tour-price'>$ {price}</h4>
        </div>
        <p>
          {read ? info : info.substring(0, 200) + '...'}
          <button className='read-btn' onClick={() => setRead(!read)}>
            {read ? 'Read Less' : 'Read More'}
          </button>
        </p>
        <button className='interested-btn' onClick={() => deleteTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
