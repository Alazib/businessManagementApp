import Input from "./Input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postApiMethodResponse } from "../apiRequests"
import newUserAvatar from "../images/new-user.png"
import "../styles/Form.css"

function NewWorker() {
  const [newWorker, setNewWorker] = useState({})

  function handleInputChange(event) {
    setNewWorker({ ...newWorker, [event.target.name]: event.target.value })
  }

  async function sendInputData(event) {
    event.preventDefault()
    await postApiMethodResponse(newWorker)
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
            <div>
              <b>Name:</b>
              <br></br>
            </div>
            <Input
              placeholder="first name"
              name="first_name"
              onChange={handleInputChange}
            ></Input>
          </div>
          <div>
            <Input
              placeholder="last name"
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
              placeholder="age"
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
              placeholder="phone"
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
              placeholder="email"
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
              placeholder="address"
              name="address"
              onChange={handleInputChange}
            ></Input>
          </div>
          <br></br>
          <div className="buttons-save-exit">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewWorker
