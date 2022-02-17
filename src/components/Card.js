import './card.css';

export default function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className='card__badge'>{badgeText}</div>}
            <img src={props.coverImg} alt="card" />
            <div className="card__stats">
                {/* <img src="" alt="rating " /> */}
                {props.item.stats.rating && <span>{props.item.stats.rating}</span>}
                <span className='gray'>({props.item.stats.reviewCount}) . </span>
                <span className='gray'>{props.item.location}</span>

            </div>
            <p style={{ display: props.item.title ? "block" : "none" }}>{props.item.title}</p>
            <p><strong>From ${props.item.price} </strong> / person</p>
        </div>
    );
}

// title={item.title}
// description={item.description}
// price={item.price}
// location={item.location}
// rating={item.stats.rating}
// reviewCount={item.stats.reviewCount}
// openSpots={item.openSpots}
// coverImg={cardImg}