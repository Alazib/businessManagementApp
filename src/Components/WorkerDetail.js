import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteWorker from "./Buttons/DeleteWorker";
import SwitchWorkerState from "./Buttons/SwitchWorkerState"
import "../styles/WorkerDetail.css"

function WorkerDetail({ workerList, setWorkerList, workerDetail }) {

    const [update, setUpdate] = useState(false)

    const { photo, name, age, phoneNumber, email, address, active } = workerDetail

    console.log(age)

    return (


        <>
            <div className="worker-detail-and-buttons">

                <div className="worker-detail">

                    <div><img src={photo} alt="worker"></img></div>

                    {!update &&
                        <div className="name-age-number-email-adress-state">
                            <div><b>Name:</b><br></br>{name}</div>
                            <br></br>
                            <div><b>Age:</b><br></br>{age}</div>
                            <br></br>
                            <div><b>Phone number:</b><br></br>{phoneNumber}</div>
                            <br></br>
                            <div><b>Email:</b><br></br>{email}</div>
                            <br></br>
                            <div><b>Address:</b><br></br>{address}</div>
                            <br></br>
                            <div><b>Worker state:</b><br></br>{active === true ? "Active" : "Non active"}</div>
                            <br></br>
                        </div>}

                    <div className="form">
                        {update && <form>

                            <p>
                                <label><b>Name:</b></label><br />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={name}
                                    onChange={(event) => {

                                        let workerListTemplate = workerList

                                        workerListTemplate.forEach((worker, position) => {

                                            if (worker.name === workerDetail.name) {

                                                workerListTemplate[position].name = event.target.value
                                            }
                                        })

                                        setWorkerList([...workerListTemplate])

                                    }}
                                />
                            </p>

                            <p>
                                <label><b>Age:</b></label><br />
                                <input
                                    type="text"
                                    name="age"
                                    placeholder={age}
                                    onChange={(event) => {

                                        let workerListTemplate = workerList

                                        workerListTemplate.forEach((worker, position) => {

                                            if (worker.age === workerDetail.age) {

                                                workerListTemplate[position].age = event.target.value
                                            }
                                        })

                                        setWorkerList([...workerListTemplate])
                                    }}
                                />
                            </p>

                            <p>
                                <label><b>Phone number:</b></label><br />
                                <input
                                    type="text"
                                    name="phone-number"
                                    placeholder={phoneNumber}
                                    onChange={(event) => {

                                        let workerListTemplate = workerList

                                        workerListTemplate.forEach((worker, position) => {

                                            if (worker.phoneNumber === workerDetail.phoneNumber) {

                                                workerListTemplate[position].phoneNumber = event.target.value
                                            }
                                        })

                                        setWorkerList([...workerListTemplate])
                                    }}
                                />
                            </p>

                            <p>
                                <label><b>Email:</b></label><br />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder={email}
                                    onChange={(event) => {

                                        let workerListTemplate = workerList

                                        workerListTemplate.forEach((worker, position) => {

                                            if (worker.email === workerDetail.email) {

                                                workerListTemplate[position].email = event.target.value
                                            }
                                        })

                                        setWorkerList([...workerListTemplate])
                                    }}
                                />
                            </p>

                            <p>
                                <label><b>Address:</b></label><br />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder={address}
                                    onChange={(event) => {

                                        let workerListTemplate = workerList

                                        workerListTemplate.forEach((worker, position) => {

                                            if (worker.address === workerDetail.address) {

                                                workerListTemplate[position].address = event.target.value
                                            }
                                        })

                                        setWorkerList([...workerListTemplate])

                                    }}
                                />
                            </p>

                        </form>}

                    </div>


                </div>

                <div className="buttons">

                    <SwitchWorkerState
                        workerList={workerList}
                        setWorkerList={setWorkerList}
                        workerDetail={workerDetail}
                    />

                    <button onClick={() => { setUpdate(!update) }}>
                        Update worker info
                    </button>

                    <DeleteWorker
                        workerList={workerList}
                        workerDetail={workerDetail}
                        setWorkerList={setWorkerList}
                    />

                    <div className="go-back">

                        <Link
                            to={"/"}>
                            Back to list
                        </Link>

                    </div>



                </div>

            </div>


        </>
    )
}

export default WorkerDetail