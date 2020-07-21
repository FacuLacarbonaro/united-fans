import React from 'react';

const Card = ({title, description, img}) => {
    return ( 
        <div className="card">

            <div className="card_image">
                <img src={img} alt=''/>
            </div>
            
            <div className="card_description">
              <h2> {title} </h2>
              <p>
                {description}
              </p>
            </div>

          </div>
     );
}
 
export default Card;