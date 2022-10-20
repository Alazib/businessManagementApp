import Input from "./Input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postNewWorker } from "../apiRequests"
import Label from "./Label"
import newUserAvatar from "../images/new-user.png"
import "../styles/Form.css"

function NewWorker() {
  const [newWorker, setNewWorker] = useState({})

  function handleInputChange(event) {
    setNewWorker({ ...newWorker, [event.target.name]: event.target.value })
  }

  async function sendInputData(event) {
    event.preventDefault()
    console.log("Voy a entrar en postNewWoker()")
    await postNewWorker(newWorker)
    console.log("Me dirijo al navigate()")

    navigate("/worker-list")
  }
  const navigate = useNavigate()

  return (
    <>
      <div className="form-container">
        <form className="worker-form new-worker" onSubmit={sendInputData}>
          <img
            className="new-user-avatar"
            src={newUserAvatar}
            alt="new user"
          ></img>
          <div>
            <Label htmlFor={"firstName"} text="First name:" />
            <Input
              id="firstName"
              placeholder="first name"
              name="first_name"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor={"lastName"} text="Last name:" />
            <Input
              id="lastName"
              placeholder="last name"
              name="last_name"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor={"age"} text="Age:" />
            <Input
              id="age"
              placeholder="age"
              name="age"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor={"phone"} text="Phone:" />
            <Input
              id="phone"
              placeholder="phone"
              name="phone"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor={"email"} text="Email:" />
            <Input
              id="email"
              placeholder="email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor={"address"} text="Address:" />
            <Input
              id="address"
              placeholder="address"
              name="address"
              onChange={handleInputChange}
            />
          </div>
          <div className="buttons-save-exit">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewWorker
