import Spinner from "./Spinner";

function Inventory() {
  return (
    <div className="text-spinner">
      <h2
        style={{
          color: "white",
          paddingTop: "200px",
          paddingBottom: "600px",
          textAlign: "center",
          marginTop: "0px",
        }}
      >
        COMING SOON . . .
      </h2>
      <div className="spin">
        <Spinner></Spinner>
      </div>
    </div>
  );
}
export default Inventory;
