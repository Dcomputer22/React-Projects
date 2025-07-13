import "./App.css";
import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/image-slider/ImageSlider";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import QRCodeGenerator from "./components/qr-code-generator/QRCodeGenerator";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import menus from "./components/tree-view/data";
import TreeView from "./components/tree-view/TreeView";

function App() {
  return (
    <div className={"app"}>
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Start Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={1}
        limit={"10"}
      /> */}
      {/* Load More Products Components */}
      {/* <LoadMoreData /> */}
      {/* Tree view component */}
      {/* <TreeView menus={menus} /> */}
      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}
      {/* Light-Dark Mode */}
      <LightDarkMode />
    </div>
  );
}

export default App;
