

import React from 'react'

function category({finalcategory,setcatname}) {
  let cat =finalcategory.map ((v,i)=>{
    return(
      <li onClick={()=>setcatname(v)} key={(i)} className=' bg-black p-5 mb-3  text-white shadow-lg uppercase  '>
      {v}
      </li>
    )
  })
  return (
    <div>
        <h3 className='uppercase mb-3 bg-white text-black font-bold shadow-lg  '> product  category</h3>
             
           <ul>
            
            {/* <li className=' bg-slate-800 p-3 mb-3 text-white '> BRASLET</li> */}
          {cat}
            

           
           </ul>
      
  </div>
  

  )
}

export default category;