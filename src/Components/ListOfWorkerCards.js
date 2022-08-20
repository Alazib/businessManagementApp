import { useEffect, useState } from "react";
import WorkerPreviewCard from "./WorkerPreviewCard";

function ListOfWorkers({ setWorkerDetail }) {
  const [workerList, setWorkerList] = useState([]);

  useEffect(() => {
    setWorkerList([
      {
        name: "Agamenón",
        email: "agamenón@gmail",
        active: true,
      },
      {
        name: "Aquiles",
        email: "aquiles@gmail",
        active: true,
      },
      {
        name: "Ulises",
        email: "ulises@gmail",
        active: false,
      },
    ]);
  }, []);
  //¿Por qué cuando doy al botón en la pantalla no me vuelve a cargar el componente ListOfWorkers con Ulises ya en activo?
  //Si nos fijamos, al dar al botón, Ulises cambia a activo y el estado "workerList" se setea; sin embargo,
  // el componente no se re-renderiza y por tanto no aparece en activos. Si el estado "workerList" ha cambiado
  //¿por qué no se re-renderiza el componente "ListOfWorkers"?

  console.log("SOY LISTOFWORKERCARDS:", workerList);

  return (
    //¿Cómo aplico DRY en este Return?
    // Si vas a utilizar la misma lista si o si tendras que iterarlo 2 veces, no hay mucho que rascar ahi
    <>
      <div className="active-workers">
        ACTIVE WORKERS
        {workerList.map((worker, position) => {
          // Buen intento pero realmente no crees que worker.active ya te describe el estado del worker?
          // Si haces un === true es sintoma de que algo esta regular
          // No esta mal, pero en todo caso hubiera puesto  const WORKER_IS_ACTIVE = worker.active
          const WORKER_IS_ACTIVE = worker.active === true;

          return (
            <div key={position}>
              {WORKER_IS_ACTIVE && (
                <WorkerPreviewCard
                  key={position}
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
        {/* Los textos dentro de etiquetas, no los dejes flotando */}
        {/* <h1>NON-ACTIVE WORKERS</h1> */}
        NON-ACTIVE WORKERS
        {workerList.map((worker, position) => {
          // const WORKER_IS_NOT_ACTIVE = !worker.active
          const WORKER_IS_NOT_ACTIVE = worker.active === false;
          return (
            <div key={position}>
              {WORKER_IS_NOT_ACTIVE && (
                <WorkerPreviewCard
                  key={position}
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
    </>
  );
}

export default ListOfWorkers;
