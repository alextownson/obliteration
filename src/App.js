import React from 'react'
import bike from './assets/bike.png'
import chain  from './assets/chain.png'

export default function App() {

    const [toggle, setToggle] = React.useState('hide')
    function handleOnClick () {
        if (toggle === 'hide'){
            setToggle('show')
        } else {setToggle('hide')}
    }

    const [part, setPart] = React.useState('')
    function handleMouseEnter(e) {
        if (
            e.target.classList.contains('main--grid-area19') ||
            e.target.classList.contains('main--grid-area20') ||
            e.target.classList.contains('main--grid-area21')) 
            {
            setPart('— SADDLE')
        } else if (
            e.target.classList.contains('main--grid-area23')) 
            {
            setPart('— GRIPS, BRAKE LEVERS, SHIFT LEVERS, HANDLEBAR, STEM')
        } else if (
            e.target.classList.contains('main--grid-area32') ||
            e.target.classList.contains('main--grid-area33')) 
            {
            setPart('— RACK')
        } else if (
            e.target.classList.contains('main--grid-area34')) 
            {
            setPart('— SEATPOST, SEATPOST COLLAR')
        } else if (
            e.target.classList.contains('main--grid-area35') ||
            e.target.classList.contains('main--grid-area36')) 
            {
            setPart('— FRAME: TOP TUBE')
        } else if (
            e.target.classList.contains('main--grid-area37')) 
            {
            setPart('— HEADSET, FRAME: HEAD TUBE')
        } else if (
            e.target.classList.contains('main--grid-area38')) 
            {
            setPart('— BRAKE HOUSING, BRAKE CABLE, SHIFT HOUSING, SHIFT CABLE')
        } else if (
            e.target.classList.contains('main--grid-area46') ||
            e.target.classList.contains('main--grid-area47')) 
            {
            setPart('— RACK, FENDER, TIRE, TUBE, RIM, SPOKES')
        } else if (
            e.target.classList.contains('main--grid-area48')) 
            {
            setPart('— REAR BRAKES, BRAKE PADS, FRAME: SEAT STAYS')
        } else if (
            e.target.classList.contains('main--grid-area49')) 
            {
            setPart('— LOCK, FRAME: SEAT TUBE')
        } else if (
            e.target.classList.contains('main--grid-area50')) 
            {
            setPart('— BOTTLE CAGE, FRAME: DOWN TUBE')
        } else if (
            e.target.classList.contains('main--grid-area51')) 
            {
            setPart('— FORK, FENDER, TIRE, TUBE, RIM, SPOKES')
        } else if (
            e.target.classList.contains('main--grid-area52')) 
            {
            setPart('— FRONT BRAKES, BRAKE PADS, FENDER, TIRE, TUBE, RIM, SPOKES')
        } else if (
            e.target.classList.contains('main--grid-area53')) 
            {
            setPart('— TIRE, TUBE, RIM, SPOKES')
        } else if (
            e.target.classList.contains('main--grid-area59')) 
            {
            setPart('— FENDER')
        } else if (
            e.target.classList.contains('main--grid-area60')) 
            {
            setPart('— TIRE, TUBE, RIM, SPOKES')
        } else if (
            e.target.classList.contains('main--grid-area61')) 
            {
            setPart('— CASSETTE, REAR SKEWER')
        } else if (
            e.target.classList.contains('main--grid-area62')) 
            {
            setPart('— FRAME: CHAIN STAYS, CHAIN, SPOKES, RIM, TUBE, TIRE')
        } else if (
            e.target.classList.contains('main--grid-area63')) 
            {
            setPart('— LOCK, FRAME: SEAT TUBE, FRONT DERAILLEUR, CHAINRING, CRANK ARM')
        } else if (
            e.target.classList.contains('main--grid-area64')) 
            {
            setPart('— FRAME: DOWN TUBE, PEDAL')
        } else if (
            e.target.classList.contains('main--grid-area65')) 
            {
            setPart('— FENDER, TIRE, TUBE, RIM, SPOKES')
        } else if (
            e.target.classList.contains('main--grid-area66')) 
            {
            setPart('— FORK, FRONT SKEWER')
        } else if (
            e.target.classList.contains('main--grid-area67')) 
            {
            setPart('— SPOKES, RIM, TUBE, TIRE')
        } else if (
            e.target.classList.contains('main--grid-area68')) 
            {
            setPart('— TIRE')
        } else if (
            e.target.classList.contains('main--grid-area73')) 
            {
            setPart('— FENDER')
        } else if (
            e.target.classList.contains('main--grid-area74')) 
            {
            setPart('— FENDER, TIRE, TUBE, RIM, SPOKES')
        } else if (
            e.target.classList.contains('main--grid-area75')) 
            {
            setPart('— REAR DERAILLEUR, CHAIN')
        } else if (
            e.target.classList.contains('main--grid-area76')) 
            {
            setPart('— CHAIN, SPOKES, RIM, TUBE, TIRE')
        } else if (
            e.target.classList.contains('main--grid-area77')) 
            {
            setPart('— CHAIN, CHAINRING, CRANK ARM')
        } else if (
            e.target.classList.contains('main--grid-area78')) 
            {
            setPart('— PEDAL, FENDER')
        } else if (
            e.target.classList.contains('main--grid-area79')) 
            {
            setPart('— FENDER, TIRE, TUBE, RIM, SPOKES')
        } else if (
            e.target.classList.contains('main--grid-area80')) 
            {
            setPart('— SPOKES')
        } else if (
            e.target.classList.contains('main--grid-area81')) 
            {
            setPart('— SPOKES, RIM, TUBE, TIRE')
        } else if (
            e.target.classList.contains('main--grid-area82')) 
            {
            setPart('— TIRE')
        } else if (
            e.target.classList.contains('main--grid-area88') ||
            e.target.classList.contains('main--grid-area89') ||
            e.target.classList.contains('main--grid-area90') ||
            e.target.classList.contains('main--grid-area93') ||
            e.target.classList.contains('main--grid-area94') ||
            e.target.classList.contains('main--grid-area95')
            ) 
            {
            setPart('— TIRE, TUBE, RIM, SPOKES')
        }
    }
    function handleMouseLeave() {
        setPart('')
    }

    const boxes = []
    for (let i = 1; i < 113; i++) {
        if  (
            i >= 19 && i <= 21 ||
            i === 23 ||
            i >= 32 && i <= 38 ||
            i >= 46 && i <= 53 ||
            i >= 59 && i <= 68 ||
            i >= 73 && i <= 82 ||
            i >= 88 && i <= 90 ||
            i >= 93 && i <= 95
            ) {
                boxes.push(<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={i} className={'main--bike-boxes main--boxes main--grid-area' + i}></div>)
            } else {
                boxes.push(<div key={i} className={'main--boxes main--grid-area' + i}></div>)
            }
    }

    return ( 
        <>
            <nav>
                <h1>BIKE PARTS</h1>
                <h1 className='nav--part-name'>{part}</h1>
                <h1 onClick={handleOnClick} className="nav--about">ABOUT</h1>
            </nav>
            <section>
                <img className='main--chain' src={chain}/>
                <div onClick={handleOnClick} className={`main--about ${toggle}`}> Bike Parts is a resource designed to teach the parts of a bicycle. It is free to use and available for anyone. The aim of this resource is to help lower the barrier to entry in bicycle mechanics especially for folks who have historically been excluded; people of colour, women, queer, trans, and gender non-conforming folks.<br></br><br></br><a href="mailto:hello@alextownson.ca">hello@alextownson.ca</a></div>
                <div className='main--mobile-app'>Mobile app coming soon!<br></br><br></br>Bike Parts is a resource designed to teach the parts of a bicycle. It is free to use and available for anyone. The aim of this resource is to help lower the barrier to entry in bicycle mechanics especially for folks who have historically been excluded; people of colour, women, queer, trans, and gender non-conforming folks.<br></br><br></br><a href="mailto:hello@alextownson.ca">hello@alextownson.ca</a></div>
                <img src={bike} className="main--bike" />
                <div className='main--grid'>
                    {boxes}
                </div>
            </section>
        </>
    )
}