// function workerListGenerator(setWorkerList) {
//   const url1 = "https://reqres.in/api/users?page=1";
//   const url2 = "https://reqres.in/api/users?page=2";

//   fetch(url1)
//     .then((response) => response.json())
//     .then((json) => {
//       let listOfWorkers = [];
//       listOfWorkers = json.data;
//       fetch(url2)
//         .then((response) => response.json())
//         .then((json) => {
//           console.log(json);
//           listOfWorkers.push(...json.data);
//           listOfWorkers.forEach((worker) => {
//             worker.age = "edad de prueba";
//             worker.address = "dirección de prueba";
//             worker.phone = "teléfono de prueba";
//             worker.active = worker.id % 2 === 0;
//           });
//           setWorkerList(listOfWorkers);
//         });
//     });
// }

async function getApiResponse() {
  const url = "https://reqres.in/api/users?page=1";
  return fetch(url).then((response) => response.json());
}

export default getApiResponse;
