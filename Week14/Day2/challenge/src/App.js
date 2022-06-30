import { locations } from "./locations";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  console.log(locations);
  return (
    <div style={{ margin: "auto", width: "500px" }}>
      <Carousel>
        {locations.map((item) => {
          return (
            <div>
              <img src={item.imageUrl} alt=""></img>
              <p>{item.name}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default App;
