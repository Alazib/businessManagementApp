import { Link } from "react-router-dom";
import Button from "./Button";
import "../styles/WorkerPreviewCard.css";

function WorkerPreviewCard({
  workerList,
  setWorkerList,
  worker,
  setWorkerDetail,
}) {
  const { id, photo, name } = worker;

  function deleteWorkerFromList() {
    let newWorkerList = workerList.filter((worker) => {
      return !(worker.id === id);
    });

    setWorkerList(newWorkerList);
  }

  function workerStateSwitcher() {
    let workerListTemplate = [...workerList];

    workerListTemplate.forEach((worker, position) => {
      if (worker.id === id) {
        workerListTemplate[position].active =
          !workerListTemplate[position].active;
      }
    });

    setWorkerList(workerListTemplate);
  }

  return (
    <div className="worker-preview-card-and-buttons">
      <div className="worker-preview-card">
        <Link
          to="worker-detail"
          onClick={() => {
            setWorkerDetail(worker);
          }}
        >
          <div className="worker-preview-card-image">
            <img src={photo} alt="avatar" width="180px" height="195px"></img>
          </div>
          <h5 className="worker-preview-card-name">{name}</h5>
        </Link>
      </div>

      <div className="preview-card-buttons">
        <Button onClick={workerStateSwitcher} label="Active/Inactive" />
        <Button onClick={deleteWorkerFromList} label="Delete worker" />
      </div>
    </div>
  );
}

export default WorkerPreviewCard;
