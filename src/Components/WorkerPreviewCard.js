import { Link } from "react-router-dom";
import DeleteWorker from "./Buttons/DeleteWorker";
import SwitchWorkerState from "./Buttons/SwitchWorkerState";
import "../styles/WorkerPreviewCard.css";

function WorkerPreviewCard({
  workerList,
  setWorkerList,
  worker,
  setWorkerDetail,
}) {
  function deleteWorkerFromList() {
    let newWorkerList = workerList.filter((eachWorker) => {
      return !(worker.name === eachWorker.name);
    });

    setWorkerList(newWorkerList);
  }

  return (
    <>
      <Link
        to="worker-detail"
        onClick={() => {
          setWorkerDetail(worker);
        }}
      >
        <div className="image">
          <img src={worker.photo} alt="avatar"></img>
        </div>
        {<b>{worker.name}</b>}
      </Link>

      <div className="Buttons">
        <SwitchWorkerState
          workerList={workerList}
          setWorkerList={setWorkerList}
          workerDetail={worker}
        />

        <DeleteWorker onClick={deleteWorkerFromList} />
      </div>
    </>
  );
}

export default WorkerPreviewCard;
