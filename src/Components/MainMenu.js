import photo from "../image.png";

function MainMenu() {
  return (
    <img
      src={photo}
      alt="foto"
      style={{ display: "block", margin: "auto", paddingTop: "100px" }}
    ></img>
  );
}

export default MainMenu;
