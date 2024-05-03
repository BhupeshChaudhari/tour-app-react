import { useState } from "react";

function Card({ id, image, info, name, price, removeTour }) {
  const [readMore, setreadMore] = useState(false);
  const desc = readMore ? info : `${info.substring(0, 200)}....`;

  function readMoreHandler() {
    setreadMore(!readMore);
  }

  return (
    <div className="card">
      <img src={image} className="image" />

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="disc">
          {desc}
          <span className="read-more" onClick={readMoreHandler}>
            {readMore ? "Show Less" : "Read More"}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
