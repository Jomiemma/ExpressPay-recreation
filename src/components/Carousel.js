import React, {useRef, useEffect} from 'react';
import './Carousel.css';


function Carousel() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += 1;

                if(
                    scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
                    scrollRef.current.scrollWidth
                ) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
        }, 20);
        
        return () => clearInterval(scrollInterval);
    }, []);

    return(
        <section className='carousel-container'>
            <p id="carousel-txt">Trusted By</p>
            <div id='img-container'>
                <img 
                src="https://myxpresspay.com:8095/oyo.png"
                alt='Oyo'/>
                <img 
                src='https://myxpresspay.com:8095/keystone.svg'
                alt='Keystone'/>
                <img src='https://myxpresspay.com:8095/shago.png'
                alt='Shago'/>
                <img 
                src='https://myxpresspay.com:8095/delta.png'
                alt='Delta'/>
                <img 
                src='https://myxpresspay.com:8095/nibss.jpg'
                alt='Nibss'
                />

                 <img 
                src="https://myxpresspay.com:8095/oyo.png"
                alt='Oyo'/>
                <img 
                src='https://myxpresspay.com:8095/keystone.svg'
                alt='Keystone'/>
                <img src='https://myxpresspay.com:8095/shago.png'
                alt='Shago'/>
                <img 
                src='https://myxpresspay.com:8095/delta.png'
                alt='Delta'/>
                <img 
                src='https://myxpresspay.com:8095/nibss.jpg'
                alt='Nibss'
                />
            </div>
            </section>
    )
}

export default Carousel;