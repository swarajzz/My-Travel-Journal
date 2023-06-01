export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="card__img">
        <img class="location__img" src={props.item.imageUrl} alt="" />
      </div>

      <div className="card__text">
        <div className="location">
          <ion-icon class="location__icon" name="location-outline"></ion-icon>
          <h5 className="location__name">{props.item.location}</h5>
          <a className="location__link" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="location__title">{props.item.title}</h2>
        <h6 className="location__date">
          {props.item.startDate} - {props.item.endDate}
        </h6>
        <p className="location__description">{props.item.description}</p>
      </div>
    </div>
  );
}
