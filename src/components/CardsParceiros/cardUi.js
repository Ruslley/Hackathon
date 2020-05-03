import React from 'react'
import img1 from "../../assets/magalu.png"

const Card = props =>{
  return(
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="Magalu"/>
      </div>
      <div className="card-body text-dark">
       <h4 className="title"></h4>
       <p className="card-text-secondy">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
         Perferendis enim earum odio repellat, temporibus error impedit non accusamus 
         autem consequatur quidem natus nisi accusantium obcaecati quasi nobis!
          Nulla, commodi veniam?
       </p>

      </div>
    </div>
  )
}

export default Card;