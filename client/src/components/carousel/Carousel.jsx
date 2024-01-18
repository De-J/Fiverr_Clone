import { useEffect, useRef } from 'react';

function Carousel({ children }) {
    const containerRef = useRef();

    // use scrollLeft property instead of translateX
    // translateX does not work on overflow: hidden elements
    // i.e. after translating the element appears clipped as mentioned in overflow mozilla docs
    // but scrollLeft allows you to see this clipped content
    let numberOfItemsLeftInCarousel = 0, numberOfFullyVisibleItems = 0,
        itemWidth = 1000, numberOfItemsScrolled = 0;
    
    useEffect(() => {
        const containerWidth = containerRef.current.clientWidth;

        containerRef.current.scrollLeft = 0;
        itemWidth = containerRef.current.childNodes[0].clientWidth;
        numberOfFullyVisibleItems = Math.floor(containerWidth / itemWidth);
        numberOfItemsLeftInCarousel = containerRef.current.childNodes.length - numberOfFullyVisibleItems; 
    }, []);

    const scrollRight = () => {
        if (numberOfItemsLeftInCarousel >= numberOfFullyVisibleItems) {
            numberOfItemsScrolled += numberOfFullyVisibleItems;
            numberOfItemsLeftInCarousel -= numberOfFullyVisibleItems;
            // console.log(numberOfItemsScrolled, "if", numberOfItemsLeftInCarousel);
            containerRef.current.scrollLeft += numberOfFullyVisibleItems * itemWidth;
        }
        else if (numberOfItemsLeftInCarousel !== 0) {
            // disable right arrow
            numberOfItemsScrolled += numberOfItemsLeftInCarousel;
            containerRef.current.scrollLeft += numberOfItemsLeftInCarousel * itemWidth;
            numberOfItemsLeftInCarousel = 0;
            // console.log(numberOfItemsScrolled, "else if", numberOfItemsLeftInCarousel);
        }
    }
    // works the first time
    const scrollLeft = () => {
        if (numberOfItemsScrolled >= numberOfFullyVisibleItems) {
            numberOfItemsScrolled -= numberOfFullyVisibleItems;
            numberOfItemsLeftInCarousel += numberOfFullyVisibleItems;
            containerRef.current.scrollLeft -= numberOfFullyVisibleItems * itemWidth;
        }
        else if (numberOfItemsScrolled !== 0) {
            // disable left arrow
            let x = containerRef.current.childNodes.length - numberOfItemsLeftInCarousel;
            numberOfItemsScrolled -= x;
            containerRef.current.scrollLeft -= x * itemWidth;
            numberOfItemsLeftInCarousel = containerRef.current.childNodes.length - numberOfFullyVisibleItems;
            console.log(x);
        }
    }

    return (
        <section>
            <div ref={containerRef} style={{ display: "flex", gap: "0.5rem", overflow: "hidden", position: "relative" }}>
                {children}
            </div>
            <button onClick={scrollLeft}>&lt;Prev</button>
            <button onClick={scrollRight}>Next&gt;</button>
        </section>
    )
}

export default Carousel