import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteWorker from "./Buttons/DeleteWorker";
import SwitchWorkerState from "./Buttons/SwitchWorkerState"

function WorkerDetail({ workerList, setWorkerList, workerDetail }) {

    const [update, setUpdate] = useState(false)

    return (
        <>
            <div>{workerDetail.name}</div>

            <Link
                to={"/"}>
                GO BACK
            </Link>

            <SwitchWorkerState
                workerList={workerList}
                setWorkerList={setWorkerList}
                workerDetail={workerDetail}
            />

            <DeleteWorker
                workerList={workerList}
                workerDetail={workerDetail}
                setWorkerList={setWorkerList}
            />

            <button onClick={() => { setUpdate(!update) }}>
                Update worker info
            </button>

            {update && <form>

                <p>
                    <label>Fist name</label><br />
                    <input
                        type="text"
                        name="first_name"
                        placeholder={workerDetail.name}
                        onChange={(event) => {

                            let workerListTemplate = workerList

                            workerListTemplate.forEach((worker, position) => {

                                if (worker.name === workerDetail.name) {

                                    workerListTemplate[position].name = event.target.value
                                }
                            })

                            setWorkerList([...workerListTemplate])

                            console.log(event)
                        }}
                    />
                </p>

            </form>}








        </>
    )
}

export default WorkerDetail