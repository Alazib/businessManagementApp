import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function ListOfWorkers() {

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

                        <Link className="worker-preview-card" key={position} to="worker-detail">

                            {worker.name}

                        </Link>



                    )
                })
            }

        </>
    )


}

export default ListOfWorkers