import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function ListOfWorkers({ setWorkerDetail }) {

    const [workerList, setWorkerList] = useState([])

    useEffect(() => {

        setWorkerList([{

            name: "juan",
            email: "juan@gmail"
        },
        {
            name: "paco",
            email: "paco@gmail"
        },
        {
            name: "emiliano",
            email: "emiliano@gmail"
        }])

    }, [])


    return (
        <>
            {
                workerList.map((worker, position) => {

                    return (

                        <Link className="worker-preview-card"
                            to="worker-detail"
                            key={position}
                            onClick={() => {setWorkerDetail(worker)}}
                        >

                            {worker.name}

                        </Link>



                    )
                })
            }

        </>
    )


}

export default ListOfWorkers