import React from 'react'

function Proitem({pdata})
 {
  console.log(pdata)
  return (
    <div className='  shadow-lg text-center pb-4 bg-black rounded-md text-white hover:bg-white hover:text-black hover:scale-50'>
      <img src={pdata.thumbnail}/>
     <h4>{pdata.title}</h4>
     <b>${pdata.price}</b>
  </div>
  )
}

export default Proitem;