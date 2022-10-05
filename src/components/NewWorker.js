import Input from "./Input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postNewWorker } from "../apiRequests"
import newUserAvatar from "../images/new-user.png"
import "../styles/Form.css"

function NewWorker() {
  const [newWorker, setNewWorker] = useState({})

  function handleInputChange(event) {
    setNewWorker({ ...newWorker, [event.target.name]: event.target.value })
  }

  async function sendInputData(event) {
    event.preventDefault()
    await postNewWorker(newWorker)
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
            <label>
              <b>Name:</b>
            </label>
            <Input
              placeholder="first name"
              name="first_name"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Input
              placeholder="last name"
              name="last_name"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>
              <b>Age:</b>
            </label>
            <Input placeholder="age" name="age" onChange={handleInputChange} />
          </div>
          <div>
            <label>
              <b>Phone:</b>
            </label>
            <Input
              placeholder="phone"
              name="phone"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>
              <b>Email:</b>
            </label>
            <Input
              placeholder="email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>
              <b>Address:</b>
            </label>
            <Input
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
