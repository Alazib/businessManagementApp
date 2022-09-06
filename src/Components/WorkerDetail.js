import { Link } from "react-router-dom";
import { useState } from "react";
import Form from "./Form";
import Button from "./Button";
import "../styles/WorkerDetail.css";

const WorkerIndexCard = ({ workerDetail }) => {
  const { name, age, phoneNumber, email, address, active } = workerDetail;

  return (
    <>
      <div className="name-age-number-email-adress-state">
        <div>
          <b>Name:</b>
          <br></br>
          {name}
        </div>
        <br></br>
        <div>
          <b>Age:</b>
          <br></br>
          {age}
        </div>
        <br></br>
        <div>
          <b>Phone number:</b>
          <br></br>
          {phoneNumber}
        </div>{" "}
        <br></br>
        <div>
          <b>Email:</b>
          <br></br>
          {email}
        </div>
        <br></br>
        <div>
          <b>Address:</b>
          <br></br>
          {address}
        </div>
        <br></br>
        <div>
          <b>Worker state:</b>
          <br></br>
          {active ? "Active" : "Non active"}
        </div>
        <br></br>
      </div>
    </>
  );
};

function WorkerDetail({ workerList, setWorkerList, workerDetail }) {
  const [update, setUpdate] = useState(false);

  const { id, photo } = workerDetail;

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
              workerList={workerList}
              setWorkerList={setWorkerList}
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
