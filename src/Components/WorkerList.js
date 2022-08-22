import WorkerPreviewCard from "./WorkerPreviewCard";


function WorkerList({ workerList, setWorkerList, setWorkerDetail }) {


    return (

        <>
            <div className="active-workers">
                <h1>ACTIVE WORKERS</h1>
                    {workerList.length > 0 &&
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
                        <h1>NON-ACTIVE WORKERS</h1>
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


                </>
                )


}

                export default WorkerList