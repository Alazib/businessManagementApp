import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteWorker from "./Buttons/DeleteWorker";
import SwitchWorkerState from "./Buttons/SwitchWorkerState"
import "../styles/WorkerDetail.css"



function WorkerDetail({ workerList, setWorkerList, workerDetail }) {

    const [update, setUpdate] = useState(false)

    const { photo, name, age, phoneNumber, email, address, active } = workerDetail


    const workerIndexCard = <div className="name-age-number-email-adress-state">
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
        <div><b>Worker state:</b><br></br>{active? "Active" : "Non active"}</div>
        <br></br>
    </div>

    const form = <form>

        <p>
            <label><b>Name:</b></label><br />
            <input
                type="text"
                name="name"
                placeholder={name}
                onChange={(event) => {


                    console.log("LISTA antes del forEach", workerList)
                    //¿CÓMO ES POSIBLE QUE CAMBIE workerList? 

                    // Lo PRIMERO: en el caso de que workerList tuviese que cambiar, el cambio se produce más abajo, en el forEach 
                    // ¿cómo puede cambiar entonces aquí, tan pronto?

                    // Lo SEGUNDO: la workerList NO tiene que cambiar, sino workerListTemplate. Abajo creo workerListTemplate de tal manera
                    // que se haga una copia total (que cambien las direcciones en memoria de ambas variables), evitando así que al cambiar
                    // una variable cambie también la otra.

                    // Lo TERCERO: dejando de lado que workerList no tiene que cambiar ¿como puede cambiar sin usar el setWorkerList si no
                    // tan solo por asignación de un nuevo valor? Entonces ¿para qué estan los setters del useState?

                    const workerListTemplate = [...workerList]

                    console.log("MOLDE antes del forEach", workerListTemplate)

                    workerListTemplate.forEach((worker, position) => {

                        if (worker.name === workerDetail.name) {

                            workerListTemplate[position].name = event.target.value
                        }
                    })

                    console.log("LISTA después del forEach", workerList)
                    console.log("MOLDE después del forEach", workerListTemplate)

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

    </form>


    return (


        <>
            <div className="worker-detail-and-buttons">

                <div className="worker-detail">

                    <div><img src={photo} alt="worker"></img></div>

                    {!update && workerIndexCard
                    }

                    {update && form
                    }

                </div>

                <div className="buttons">

                    <SwitchWorkerState
                        workerList={workerList}
                        setWorkerList={setWorkerList}
                        workerDetail={workerDetail}
                    />

                    {!update && <button onClick={() => { setUpdate(!update) }}>
                        Update worker info
                    </button>}

                    {update && <button onClick={() => {

                        setWorkerList()
                        //¿?

                        setUpdate(!update)
                    }}>

                        Save worker info
                    </button>}

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