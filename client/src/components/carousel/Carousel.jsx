import { useState, useEffect, useRef } from 'react';

function Carousel({ children }) {
    const [style, setStyle] = useState({ display: "flex", gap: "0.5rem", overflow: "hidden", position: "relative" });
    const containerRef = useRef();
    console.log("render");

    // use scrollLeft property instead of translateX
    // translateX does not work on overflow: hidden elements
    // i.e. after translating the element appears clipped as mentioned in overflow mozilla docs
    // but scrollLeft, scrollRight allows you to see this clipped content
    let itemsLeftInCarousel = 0, numberOfFullyVisibleItems = 0, itemWidth = 1000;
    useEffect(() => {
        const containerWidth = containerRef.current.clientWidth;

        itemWidth = containerRef.current.childNodes[0].clientWidth;
        numberOfFullyVisibleItems = Math.floor(containerWidth / itemWidth);
        itemsLeftInCarousel = containerRef.current.childNodes.length - numberOfFullyVisibleItems;
    }, []);

    const slideRight = () => {
        if (itemsLeftInCarousel >= numberOfFullyVisibleItems) {
            itemsLeftInCarousel -= numberOfFullyVisibleItems;
            setStyle(prev => ({ ...prev, translate: `-${numberOfFullyVisibleItems * itemWidth}px 0` }));
        }
        else if (itemsLeftInCarousel !== 0) {
            // disable right arrow
            setStyle(prev => ({ ...prev, translate: `-${itemsLeftInCarousel * itemWidth}px 0` }));
            itemsLeftInCarousel = 0;
        }
    }

    return (
        <section>
            <div ref={containerRef} style={style}>
                {children}
            </div>
            <button>&lt;Prev</button>
            <button onClick={slideRight}>Next&gt;</button>
        </section>
    )
}

export default Carousel