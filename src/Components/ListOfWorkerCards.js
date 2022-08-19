import { useEffect, useState } from "react";
import WorkerPreviewCard from "./WorkerPreviewCard";




function ListOfWorkers({ setWorkerDetail, workerIsActive }) {

    const [workerList, setWorkerList] = useState([]);

    useEffect(() => {

        setWorkerList([{

            name: "juan",
            email: "juan@gmail",
            active: workerIsActive
        },
        {
            name: "paco",
            email: "paco@gmail",
            active: workerIsActive
        },
        {
            name: "emiliano",
            email: "emiliano@gmail",
            active: workerIsActive
        }])

    }, []);


    return (
        //¿Cómo aplico DRY en este Return?
        <>
            <div className="active-workers">ACTIVE WORKERS
                {
                    workerList.map((worker, position) => {

                        const WORKER_IS_ACTIVE = workerIsActive

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

                        const WORKER_IS_NOT_ACTIVE = !workerIsActive

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