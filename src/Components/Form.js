import { Fragment, useState } from "react";

function Form({ workerDetail, workerList, setWorkerList }) {
  const [data, setData] = useState({
    ...workerDetail,
  });

  const { id, name } = workerDetail;

  function handleInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function sendInputData(event) {
    event.preventDefault();
    const newData = overwriteData();
    setWorkerList(newData);
  }

  function overwriteData() {
    const workerListTemplate = [...workerList];

    workerListTemplate.forEach((worker, position) => {
      if (worker.id === id) {
        workerListTemplate[position] = { ...data };
      }
    });
    return workerListTemplate;
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
        {/* <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder="new email"
            name="email"
            onChange={handleInputChange}
          ></input>
        </div> */}
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            GUARDAR
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default Form;
