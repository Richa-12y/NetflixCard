import React from 'react'
//Img,cardcategory,cardtitle,linktag

const Card = ({Img,cardcategory,cardtitle,linktag}) => {
    return (
        <>
        <div className="cards">
        <div className="card">
          <img src={Img} alt="mypic" className="card_img" />

          <div className="card_info">

            <span className="card_category">{cardcategory}</span>

            <h3 className="card_title">{cardtitle}</h3>

            <a href={linktag} target="blank">

              <button>Watch Now</button>

            </a>


          </div>

        </div>
      </div>
        </>
    )
}

export default Card
