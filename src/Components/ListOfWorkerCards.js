import { useEffect, useState } from "react";
import WorkerPreviewCard from "./WorkerPreviewCard";


function ListOfWorkers({ setWorkerDetail }) {

    const [workerList, setWorkerList] = useState([]);

    useEffect(() => {

        setWorkerList([{

            name: "Agamenón",
            email: "agamenón@gmail",
            active: true
        },
        {
            name: "Aquiles",
            email: "aquiles@gmail",
            active: true
        },
        {
            name: "Ulises",
            email: "ulises@gmail",
            active: false
        }])

    }, []);
    //¿Por qué cuando doy al botón en la pantalla no me vuelve a cargar el componente ListOfWorkers con Ulises ya en activo? 
    //Si nos fijamos, al dar al botón, Ulises cambia a activo y el estado "workerList" se setea; sin embargo, 
    // el componente no se re-renderiza y por tanto no aparece en activos. Si el estado "workerList" ha cambiado 
    //¿por qué no se re-renderiza el componente "ListOfWorkers"?


    console.log("SOY LISTOFWORKERCARDS:", workerList)


    return (
        //¿Cómo aplico DRY en este Return?
        <>
            <div className="active-workers">ACTIVE WORKERS
                {
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

export default ListOfWorkers