import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import '../styling/Caroull.css';

function Carousel() {
  const data = useSelector((state) => state.Products.products);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter >= data.length) {
      setCounter(0);
    } else if (counter < 0) {
      setCounter(data.length - 1);
    }
  }, [counter, data.length]);

  return (
    <div className="primary">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {data.map((product, index) => (
            <div
              key={product.id}
              className={`carousel-item ${index === counter ? 'active' : (index < counter ? 'prev' : 'next')}`}
            >
              <img src={product.image} alt={`Product ${product.id}`} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={() => setCounter(counter - 1)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={() => setCounter(counter + 1)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
