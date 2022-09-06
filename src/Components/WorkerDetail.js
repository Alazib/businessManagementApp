import { Link } from "react-router-dom";
import { useState } from "react";
import Form from "./Form";
import Button from "./Button";
import "../styles/WorkerDetail.css";
import WorkerIndexCard from "./WorkerIndexCar";

function WorkerDetail({
  workerList,
  setWorkerList,
  workerDetail,
  setWorkerDetail,
}) {
  const [update, setUpdate] = useState(false);

  const { id, photo } = workerDetail;

  function workerStateSwitcher() {
    let workerListTemplate = [...workerList];

    workerListTemplate.forEach((worker, position) => {
      if (worker.id === id) {
        workerListTemplate[position].active =
          !workerListTemplate[position].active;
        setWorkerDetail(workerListTemplate[position]);
      }
    });

    setWorkerList(workerListTemplate);
  }
  function deleteWorkerFromList() {
    let newWorkerList = workerList.filter((worker) => {
      return !(id === worker.id);
    });

    setWorkerList(newWorkerList);
  }
  function showUpdateForm() {
    setUpdate(!update);
  }

  return (
    <>
      <div className="worker-detail-form-and-buttons">
        <div className="worker-detail-form">
          <div>
            <img src={photo} alt="worker"></img>
          </div>

          {!update && <WorkerIndexCard workerDetail={workerDetail} />}
          {update && (
            <Form
              workerDetail={workerDetail}
              setWorkerDetail={setWorkerDetail}
              workerList={workerList}
              setWorkerList={setWorkerList}
              update={update}
              setUpdate={setUpdate}
            />
          )}
        </div>

        <div className="buttons">
          <Button onClick={workerStateSwitcher} label="Active/Inactive" />

          {!update && (
            <Button onClick={showUpdateForm} label="Update worker info" />
          )}

          <Button onClick={deleteWorkerFromList} label="Delete worker" />

          <div className="go-back">
            <Link to={"/worker-list"}>Back to list</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkerDetail;
