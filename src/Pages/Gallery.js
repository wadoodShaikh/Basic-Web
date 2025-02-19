import { IoMdAddCircle, IoMdAdd } from "react-icons/io";
import image from "../Components/image.jpeg";

const Gallery = () => {
  return (
    <>
      <h1>Gallery</h1>
      <div className="container">
        <div className="gallery">
          <input type="file" id="file" className="inp" />
          <label for="file">
            <IoMdAdd className="svgIcon-large" />
          </label>
          <img src={image} alt="Placeholder" className="img-mid" />
          <img src={image} alt="Placeholder" className="img-mid" />
          <img src={image} alt="Placeholder" className="img-mid" />
          <img src={image} alt="Placeholder" className="img-mid" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
