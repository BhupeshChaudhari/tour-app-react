import { useState } from "react";

function Card(props) {
  const [readMore, setreadMore] = useState(false);
  const desc = `${props.tourData.info.substring(0, 200)}....`;

  function readMoreHandler() {
    setreadMore(!readMore);
  }

  return;
  <div className="card">
    <img src={props.tourData.image} className="image" />

    <div className="tour-info">
      <div className="tour-details">
        <h4 className="tour-price">{props.tourData.price}</h4>
        <h4 className="tour-name">{props.tourData.name}</h4>
      </div>

      <div className="disc">
        {props.tourData.info}
        <span className="read-more" onClick={readMoreHandler}>
          {readMore ? "show less" : "read more"}
        </span>
      </div>
    </div>

    <button className="btn-red" onClick={removeTour}>
      Not Interested
    </button>
  </div>;
}

export default Card;
