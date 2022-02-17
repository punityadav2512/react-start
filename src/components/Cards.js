import React from 'react'
import Card from './Card'
import './cards.css';
import cardImg from '../images/punit1.png';

function Cards() {
    return (
        <div className='cards'>
            <Card img={cardImg} rating="5" reviewCount={6.0} country="USA" title="Rich Dad Poor Dad" price={50} />
            <Card img={cardImg} rating="5" reviewCount={6.0} country="USA" title="Rich Dad Poor Dad" price={50} />
            <Card img={cardImg} rating="5" reviewCount={6.0} country="USA" title="Rich Dad Poor Dad" price={50} />
            <Card img={cardImg} rating="5" reviewCount={6.0} country="USA" title="Rich Dad Poor Dad" price={50} />

        </div>
    )
}

export default Cards