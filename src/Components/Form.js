import { Fragment, useState } from "react";
import Button from "./Button";

function Form({
  workerDetail,
  setWorkerDetail,
  workerList,
  setWorkerList,
  update,
  setUpdate,
}) {
  const [data, setData] = useState({
    ...workerDetail,
  });

  const { id, name, email, age, address, phoneNumber } = workerDetail;

  function handleInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function sendInputData(event) {
    event.preventDefault();
    const newWorkerList = workerListTemplate();
    setWorkerList(newWorkerList);
    saveUpdatingandCloseForm();
  }

  function workerListTemplate() {
    const workerListTemplate = [...workerList];

    workerListTemplate.forEach((worker, position) => {
      if (worker.id === id) {
        workerListTemplate[position] = { ...data };
      }
    });
    return workerListTemplate;
  }

  function saveUpdatingandCloseForm() {
    setWorkerDetail(data);
    setUpdate(!update);
  }

  function cancelUpdatingAndCloseForm() {
    setUpdate(!update);
  }

  return (
    <Fragment>
      <form onSubmit={sendInputData}>
        <div>
          <input
            type="text"
            placeholder={name}
            name="name"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder={age}
            name="age"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder={email}
            name="email"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder={phoneNumber}
            name="phoneNumber"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder={address}
            name="address"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <button type="submit">Save</button>
          <Button onClick={cancelUpdatingAndCloseForm} label="Exit"></Button>
        </div>
      </form>
    </Fragment>
  );
}

export default Form;
