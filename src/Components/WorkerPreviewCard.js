import { Link } from "react-router-dom";
import Button from "./Button";

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
    <div className="worker-preview-card">
      <Link
        to="worker-detail"
        onClick={() => {
          setWorkerDetail(worker);
        }}
      >
        <div className="image">
          <img src={photo} alt="avatar"></img>
        </div>
        {<b>{name}</b>}
      </Link>

      <div className="Buttons">
        <Button onClick={workerStateSwitcher} label="Active/Inactive" />
        <Button onClick={deleteWorkerFromList} label="Delete worker" />
      </div>
    </div>
  );
}

export default WorkerPreviewCard;
