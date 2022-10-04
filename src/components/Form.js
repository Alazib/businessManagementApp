import { Fragment, useState } from "react"
import Button from "./Button/Button"
import Input from "./Input"
import { putNewDataInWorker } from "../apiRequests"
import getWorkers from "../getWorkers"
import "../styles/Form.css"

function Form({
  workerDetail,
  setWorkerDetail,
  setWorkerList,
  update,
  setUpdate,
}) {
  const [data, setData] = useState({
    ...workerDetail,
  })

  const { id, first_name, last_name, email, age, address, phone } = workerDetail

  function handleInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  async function sendInputData(event) {
    event.preventDefault()
    await putNewDataInWorker(id, data)
    getAndSetWorkers()
    saveUpdatingandCloseForm()
  }

  async function getAndSetWorkers() {
    const totalWorkers = await getWorkers()
    setWorkerList(totalWorkers)
  }

  function saveUpdatingandCloseForm() {
    setWorkerDetail(data)
    setUpdate(!update)
  }

  function cancelUpdatingAndCloseForm() {
    setUpdate(!update)
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
          <Button
            type="submit"
            label="Save"
            onClick={() => {
              return
            }}
          ></Button>
          <Button onClick={cancelUpdatingAndCloseForm} label="Exit"></Button>
        </div>
      </form>
    </Fragment>
  )
}

export default Form
