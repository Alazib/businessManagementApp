import { useState } from "react"
import Button from "./Button/Button"
import Input from "./Input"
import Label from "./Label"
import { putNewDataInWorker } from "../services/apiRequests"
import getWorkers from "../services/getWorkers"
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
    <>
      <form className="worker-form" onSubmit={sendInputData}>
        <div>
          <Label htmlFor={"firstName"} text="First name:" />
          <Input
            id="first name"
            placeholder={first_name}
            name="first_name"
            onChange={handleInputChange}
          ></Input>
        </div>

        <div>
          <Label htmlFor={"lastName"} text="Last name:" />
          <Input
            id="lastName"
            placeholder={last_name}
            name="last_name"
            onChange={handleInputChange}
          ></Input>
        </div>

        <div>
          <Label htmlFor={"age"} text="Age:" />
          <Input
            id="age"
            placeholder={age}
            name="age"
            onChange={handleInputChange}
          ></Input>
        </div>

        <div>
          <Label htmlFor={"phone"} text="Phone:" />
          <Input
            id="phone"
            placeholder={phone}
            name="phone"
            onChange={handleInputChange}
          ></Input>
        </div>

        <div>
          <Label htmlFor={"email"} text="Email:" />
          <Input
            id="email"
            placeholder={email}
            name="email"
            onChange={handleInputChange}
          ></Input>
        </div>

        <div>
          <Label htmlFor={"address"} text="Address:" />
          <Input
            id="address"
            placeholder={address}
            name="address"
            onChange={handleInputChange}
          ></Input>
        </div>

        <div className="buttons-save-exit">
          <Button type="submit" label="Save"></Button>
          <Button onClick={cancelUpdatingAndCloseForm} label="Exit"></Button>
        </div>
      </form>
    </>
  )
}

export default Form
