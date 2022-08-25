import WorkerPreviewCard from "./WorkerPreviewCard";
import "../styles/WorkerList.css"


function WorkerList({ workerList, setWorkerList, setWorkerDetail }) {

    const activeWorkers = workerList.filter((worker) => {
        return worker.active
    })

    const nonActiveWorkers = workerList.filter((worker) => {
        return !worker.active
    })


    return (

        <> <div className="worker-list">

            <div className="active-workers">

                <h1>{activeWorkers.length} ACTIVE WORKERS</h1>
                {
                    workerList.map((worker, position) => {

                        const WORKER_IS_ACTIVE = worker.active

                        return (

                            <div key={position}>
                                {WORKER_IS_ACTIVE && <WorkerPreviewCard
                                    key={position}
                                    setWorkerDetail={setWorkerDetail}
                                    worker={worker}
                                    workerList={workerList}
                                    setWorkerList={setWorkerList}
                                />}
                            </div>

                        )
                    })
                }
            </div>


            <div className="non-active-workers">

                <h1>{nonActiveWorkers.length} NON-ACTIVE WORKERS</h1>
                {
                    workerList.map((worker, position) => {

                        const WORKER_IS_NOT_ACTIVE = !worker.active
                        return (

                            <div key={position}>
                                {WORKER_IS_NOT_ACTIVE && <WorkerPreviewCard
                                    key={position}
                                    setWorkerDetail={setWorkerDetail}
                                    worker={worker}
                                    workerList={workerList}
                                    setWorkerList={setWorkerList}
                                />}
                            </div>


                        )
                    })
                }
            </div>

        </div>
        </>
    )


}

export default WorkerList