// Llevarte este button a un component, tal y como lo has montado nunca seria reutilizable. Imagina que montamos ahora una lista de empresas y queremos que el boton al hacer click nos salga un modal.
// Este boton no podria hacer eso, tendriamos que tener otro button
// A la hora de componetizar, rollo atomic design, el button solo debe hacer una cosa: Click, y lo que luego paso queda en manos del componente que ha llamado el componente button

function ButtonOfState({ workerList, setWorkerList, workerDetail }) {
  function WorkerStateSwitcher(workerList, setWorkerList, workerDetail) {
    // Otra solución:
    // let workerListTemplate = workerList.map((worker) => {
    //   return {
    //     ...worker,
    //     active: worker.email !== "ulises@gmail",
    //   };
    // });

    // Te he dado la turra por whatsapp, esto no hace una copia
    let workerListTemplate = workerList;

    // workerDetail.active === false
    // SI HACEMOS === false o === true no es bien. En este caso:
    // !workerDetail.active
    if (workerDetail.active === false) {
      workerListTemplate[2].active = true;
    }

    // Solucion1:
    // setWorkerList([...workerListTemplate]);
    setWorkerList(workerListTemplate);
  }

  return (
    <>
      <button
        onClick={() =>
          WorkerStateSwitcher(workerList, setWorkerList, workerDetail)
        }
      >
        SOY UN BOTÓN
      </button>
    </>
  );
}

export default ButtonOfState;
