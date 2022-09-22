import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useMemo } from "react"
import Form from "./Form"
import Button from "./Button"
import { deleteApiMethodResponse, putApiMethodResponse } from "../apiRequests"
import getWorkers from "../getWorkers"
import "../styles/WorkerDetail.css"
import WorkerIndexCard from "./WorkerIndexCard"
import Map from "./Map"

function useQuery() {
  const { search } = useLocation()

  return useMemo(() => new URLSearchParams(search), [search])
}

function WorkerDetail({
  workerList,
  setWorkerList,
  workerDetail,
  setWorkerDetail,
}) {
  const [update, setUpdate] = useState(false)

  const { id, avatar } = workerDetail

  let query = useQuery()
  let queryId = query.get("id")

  useEffect(() => {
    const userUrl = `https://reqres.in/api/users/${queryId}`
    const thereIsNoWorkerDetail = !workerDetail.hasOwnProperty("id")
    if (thereIsNoWorkerDetail) {
      fetch(userUrl)
        .then((response) => response.json())
        .then((data) => {
          const workerDetailRecovered = data.data
          setWorkerDetail(workerDetailRecovered)
        })
    }
  }, [])

  async function workerStateSwitcher(id) {
    workerDetail.active = !workerDetail.active
    await putApiMethodResponse(id, workerDetail)
    getWorkers(setWorkerList)
  }

  const navigate = useNavigate()

  async function deleteWorkerAndBackToList() {
    await deleteApiMethodResponse(id)
    navigate("/worker-list")
  }

  function showUpdateForm() {
    setUpdate(!update)
  }

  return (
    <>
      <div className="worker-detail-form-and-buttons-and-map">
        <div className="worker-detail-form-and-buttons">
          <div className="worker-detail-form">
            <img src={avatar} alt="worker" />

            {!update && <WorkerIndexCard workerDetail={workerDetail} />}

            {update && (
              <Form
                workerDetail={workerDetail}
                setWorkerDetail={setWorkerDetail}
                workerList={workerList}
                setWorkerList={setWorkerList}
                update={update}
                setUpdate={setUpdate}
              />
            )}
          </div>

          {!update && (
            <div className="buttons">
              <Button onClick={workerStateSwitcher} label="Active/Inactive" />

              <Button onClick={showUpdateForm} label="Update worker info" />

              <Button
                onClick={deleteWorkerAndBackToList}
                label="Delete worker"
              />
            </div>
          )}
        </div>
        <Map avatar={avatar} />
      </div>
    </>
  )
}

export default WorkerDetail
