import React from 'react'
import Card from './Card'
import './cards.css';
import cardImg from '../images/punit1.png';
import data from '../data';

function Cards() {
    const cards = data.map(item => {
        return <Card
            key={item.id}
            item={item}
            coverImg={cardImg}

        />
    })
    return (

        <div className='cards'>
            {cards}
        </div>
    )
}

export default Cards