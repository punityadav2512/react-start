import './card.css';

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="card" />
            <div className="card__stats">
                {/* <img src="" alt="rating " /> */}
                {props.rating && <span>{props.rating}</span>}
                <span className='gray'>({props.reviewCount}) . </span>
                <span className='gray'>{props.country}</span>

            </div>
            <p style={{ display: props.title ? "block" : "none" }}>{props.title}</p>
            <p><strong>From ${props.price} </strong> / person</p>
        </div>
    );
}