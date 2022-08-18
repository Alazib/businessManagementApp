import { useEffect, useState } from "react";
import WorkerPreviewCard from "./WorkerPreviewCard";




function ListOfWorkers({ setWorkerDetail }) {

    const [workerList, setWorkerList] = useState([]);

    useEffect(() => {

        setWorkerList([{

            name: "juan",
            email: "juan@gmail",
            state: "active"
        },
        {
            name: "paco",
            email: "paco@gmail",
            state: "active"
        },
        {
            name: "emiliano",
            email: "emiliano@gmail",
            state: "non-active"
        }])

    }, []);


    return (
        <>
            <div className="active-workers">ACTIVE WORKERS
                {
                    workerList.map((worker, position) => {

                        const WORKER_IS_ACTIVE = worker.state === "active"

                        return (

                            <div key={position}>
                                {WORKER_IS_ACTIVE && <WorkerPreviewCard
                                    key={position}
                                    setWorkerDetail={setWorkerDetail}
                                    worker={worker}
                                />}
                            </div>




                        )
                    })
                }
            </div>

            <div className="non-active-workers">NON-ACTIVE WORKERS
                {
                    workerList.map((worker, position) => {

                        const WORKER_IS_NOT_ACTIVE = worker.state === "non-active"

                        return (

                            <div key={position}>
                                {WORKER_IS_NOT_ACTIVE && <WorkerPreviewCard
                                    key={position}
                                    setWorkerDetail={setWorkerDetail}
                                    worker={worker}
                                />}
                            </div>


                        )
                    })
                }
            </div>


        </>
    )


}

export default ListOfWorkers