import { Fragment, useState } from "react";

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
    newWorkerDetailandCloseForm();
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

  function newWorkerDetailandCloseForm() {
    setWorkerDetail(data);
    setUpdate(!update);
  }

  return (
    <Fragment>
      <form className="row" onSubmit={sendInputData}>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder={name}
            name="name"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder={age}
            name="age"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder={email}
            name="email"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder={phoneNumber}
            name="phoneNumber"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder={address}
            name="address"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            SAVE
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default Form;
