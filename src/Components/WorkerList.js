import WorkerPreviewCard from "./WorkerPreviewCard";
import "../styles/WorkerList.css";

function WorkerList({ workerList, setWorkerList, setWorkerDetail }) {
  const numberOfActiveWorkers = workerList.filter((worker) => {
    return worker.active;
  });

  const numberOfNonActiveWorkers = workerList.filter((worker) => {
    return !worker.active;
  });

  return (
    <>
      <div className="worker-list">
        <div className="active-workers">
          <h3>ACTIVE WORKERS: {numberOfActiveWorkers.length}</h3>
          {workerList.map((worker) => {
            const WORKER_IS_ACTIVE = worker.active;

            return (
              <div key={worker.id}>
                {WORKER_IS_ACTIVE && (
                  <WorkerPreviewCard
                    setWorkerDetail={setWorkerDetail}
                    worker={worker}
                    workerList={workerList}
                    setWorkerList={setWorkerList}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="non-active-workers">
          <h3>NON-ACTIVE WORKERS: {numberOfNonActiveWorkers.length}</h3>
          {workerList.map((worker) => {
            const WORKER_IS_NOT_ACTIVE = !worker.active;
            return (
              <div key={worker.id}>
                {WORKER_IS_NOT_ACTIVE && (
                  <WorkerPreviewCard
                    setWorkerDetail={setWorkerDetail}
                    worker={worker}
                    workerList={workerList}
                    setWorkerList={setWorkerList}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WorkerList;
