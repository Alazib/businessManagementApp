import { Fragment, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import "../styles/Form.css";

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

  const { id, first_name, last_name, email, age, address, phone } =
    workerDetail;

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
      <form className="worker-form" onSubmit={sendInputData}>
        <div>
          <div>
            <b>Name:</b>
            <br></br>
          </div>
          <Input
            placeholder={first_name}
            name="first_name"
            onChange={handleInputChange}
          ></Input>
        </div>
        <div>
          <Input
            placeholder={last_name}
            name="last_name"
            onChange={handleInputChange}
          ></Input>
        </div>
        <div>
          <br></br>
          <b>Age:</b>
          <br></br>
        </div>
        <div>
          <Input
            placeholder={age}
            name="age"
            onChange={handleInputChange}
          ></Input>
        </div>
        <div>
          <br></br>
          <b>Phone:</b>
          <br></br>
        </div>
        <div>
          <Input
            placeholder={phone}
            name="phone"
            onChange={handleInputChange}
          ></Input>
        </div>
        <br></br>
        <div>
          <b>Email:</b>
          <br></br>
        </div>
        <div>
          <Input
            placeholder={email}
            name="email"
            onChange={handleInputChange}
          ></Input>
        </div>
        <br></br>
        <div>
          <b>Address:</b>
          <br></br>
        </div>
        <div>
          <Input
            placeholder={address}
            name="address"
            onChange={handleInputChange}
          ></Input>
        </div>
        <br></br>
        <div className="buttons-save-exit">
          <button type="submit">Save</button>
          <Button onClick={cancelUpdatingAndCloseForm} label="Exit"></Button>
        </div>
      </form>
    </Fragment>
  );
}

export default Form;
