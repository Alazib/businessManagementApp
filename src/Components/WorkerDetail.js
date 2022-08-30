import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/WorkerDetail.css"
import Button from "./Buttons/Button";
import { Redirect } from "@reach/router";


function WorkerDetail({
    workerList,
    setWorkerList,
    workerDetail
}) {

    const [update, setUpdate] = useState(false)

    const { photo, name, age, phoneNumber, email, address, active } = workerDetail


    function workerStateSwitcher() {

        let workerListTemplate = [...workerList]

        workerListTemplate.forEach((worker, position) => {

            if (worker.name === workerDetail.name) {

                workerListTemplate[position].active = !workerListTemplate[position].active
            }

        })

        setWorkerList(workerListTemplate)

    }
    function deleteWorkerFromList() {

        let newWorkerList = workerList.filter((worker) => {

            return !(workerDetail.name === worker.name)
        })

        setWorkerList(newWorkerList)
    }
    function showUpdateForm() {

        setUpdate(!update)
    }
    function saveWorkerUpdate() {

        // setWorkerList()
        // ¿?

        setUpdate(!update)

    }

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
        <div><b>Worker state:</b><br></br>{active ? "Active" : "Non active"}</div>
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

                    // Lo PRIMERO: en el caso de que workerList tuviese que cambiar, la función que lo cambia está más abajo, en el forEach 
                    // ¿cómo puede cambiar entonces aquí, tan pronto?

                    // Lo SEGUNDO: la workerList NO tiene que cambiar, sino workerListTemplate. Abajo creo workerListTemplate de tal manera
                    // que se haga una copia total (que cambien las direcciones en memoria de ambas variables), evitando así que al cambiar
                    // una variable cambie también la otra.

                    // Lo TERCERO: dejando de lado que workerList no tiene que cambiar ¿como puede cambiar sin usar el setWorkerList sino
                    // tan solo por asignación de un nuevo valor? Entonces ¿para qué estan los setters del useState?

                    let workerListTemplate = [...workerList]

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
            <div className="worker-detail-form-and-buttons">

                <div className="worker-detail-form">

                    <div><img src={photo} alt="worker"></img></div>

                    {!update && workerIndexCard
                    }

                    {update && form
                    }

                </div>

                <div className="buttons">

                    <Button
                        onClick={workerStateSwitcher}
                        label="Active/Inactive"
                    />

                    {!update && <Button
                        onClick={showUpdateForm}
                        label="Update worker info"
                    />}

                    {update && <Button
                        onClick={saveWorkerUpdate}
                        label="Save worker update" />}

                    <Button
                        onClick={deleteWorkerFromList
                        }
                        label="Delete worker"
                    />

                    <div className="go-back">

                        <Link
                            to={"/worker-list"}>
                            Back to list
                        </Link>

                    </div>

                </div>

            </div>



        </>
    )
}

export default WorkerDetail