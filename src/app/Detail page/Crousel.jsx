import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Crousel() {
    const images = [
        {
          id: "102",
          download_url:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: "103",
          download_url:
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: "104",
          download_url:
            "https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
        },
      ];
    
  return (
    <>

      <Carousel className="crsl" infiniteLoop interval={2000}>
        {images.map((image) => (
          <div key={image.id} className="carousel-image-wrapper">
            <img src={image.download_url} alt='' />
          </div>
        ))}
      </Carousel>

    </>
  )
}

export default Crousel