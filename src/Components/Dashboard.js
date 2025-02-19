import { GrGallery } from "react-icons/gr";
import { IoMdDocument } from "react-icons/io";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="cardsReport">
        <div className="displayCard">
          <GrGallery className="cardSvg svgIcon-large" />
          <div className="cardInfo">
            <p>Gallery</p>
            <h2>4</h2>
          </div>
        </div>
        <div className="displayCard">
          <IoMdDocument className="cardSvg svgIcon-large" />
          <div className="cardInfo">
            <p>Document</p>
            <h2>4</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
