import React from "react";
import './Cards.css'

function CardsTarot () {
    return (
        <div className="flex justify-center items-center m-32">
            <img className="cardTarot" id="card1" src={`${process.env.PUBLIC_URL}/photos/decorations/tarot/Death.jpg`} alt="tarotCard" />
            <img className="cardTarot" id="card2" src={`${process.env.PUBLIC_URL}/photos/decorations/tarot/TheFool.jpg`} alt="tarotCard" />
            <img className="cardTarot" id="card3" src={`${process.env.PUBLIC_URL}/photos/decorations/tarot/WheelOfFortune.jpg`} alt="tarotCard" />
        </div>
    )
}

export default CardsTarot;