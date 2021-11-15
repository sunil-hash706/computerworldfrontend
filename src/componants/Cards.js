// import React from 'react'

// export default function Cards(props) {



//     return (
//     <>
      
//     </>
//   )
// }


import React from 'react'

function Cards(props) {
  return (
    <div>
      <div className="d-flex justify-content-around container">
        <div>
          <img id="newsimg" src={props.imgurl} alt="img" />
        </div>
        <div>
          <h2 className="text-left">{props.title}</h2>
          <p className="text-left">{props.desp}</p>
          <a className="text-center" href={props.url}>Read more</a>
        </div>
      </div >
    </div>
  )
}

export default Cards
