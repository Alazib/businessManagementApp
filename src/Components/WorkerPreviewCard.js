import { Link } from "react-router-dom";
import Button from "./Button";

function WorkerPreviewCard({
  workerList,
  setWorkerList,
  worker,
  setWorkerDetail,
}) {
  function deleteWorkerFromList() {
    let newWorkerList = workerList.filter((employee) => {
      return !(employee.name === worker.name);
    });

    setWorkerList(newWorkerList);
  }

  function workerStateSwitcher() {
    let workerListTemplate = [...workerList];

    workerListTemplate.forEach((employee, position) => {
      if (employee.name === worker.name) {
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
          <img src={worker.photo} alt="avatar"></img>
        </div>
        {<b>{worker.name}</b>}
      </Link>

      <div className="Buttons">
        <Button onClick={workerStateSwitcher} label="Active/Inactive" />
        <Button onClick={deleteWorkerFromList} label="Delete worker" />
      </div>
    </div>
  );
}

export default WorkerPreviewCard;
