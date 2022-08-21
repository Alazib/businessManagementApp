import WorkerPreviewCard from "./WorkerPreviewCard";


function WorkerList ({ workerList, setWorkerList, setWorkerDetail }) {


    return (

        //¿Cómo aplico DRY en este Return?
        <>
            <div className="active-workers">ACTIVE WORKERS
                {workerList.length > 0 &&
                    workerList.map((worker, position) => {

                        const WORKER_IS_ACTIVE = worker.active === true

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


            <div className="non-active-workers">NON-ACTIVE WORKERS
                {
                    workerList.map((worker, position) => {

                        const WORKER_IS_NOT_ACTIVE = worker.active === false
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


        </>
    )


}

export default WorkerList