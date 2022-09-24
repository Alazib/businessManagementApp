
// La URL es la misma en todas, seria bien ponerla aqui
// const API_URL = "https://reqres.in/api/"
// Luego donde vayas a usarla ya añadiras el resto de info

async function getListApiMethod1() {
  const URL = "https://reqres.in/api/users?page=1"
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(error))
}

async function getListApiMethod2() {
  const URL = "https://reqres.in/api/users?page=2"
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(error))
}


// Los nombres se pueden mejorar mucho. Solo tienes que decir lo que hace (Borrar usuario) y no apiMethodResponse que seria algo relacionado con el como lo haces.
// async function deleteWorker(id)
async function deleteApiMethodResponse(id) {
  const URL = `https://reqres.in/api/users/${id}`
  const myInit = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }

  return fetch(URL, myInit)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

async function putApiMethodResponse(id, newData) {
  const URL = `https://reqres.in/api/users/${id}`
  const myInit = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  }
  return fetch(URL, myInit)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

async function postApiMethodResponse(newWorker) {
  const URL = "https://reqres.in/api/users?page=1"
  const myInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWorker),
  }
  return fetch(URL, myInit)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export {
  getListApiMethod1,
  getListApiMethod2,
  deleteApiMethodResponse,
  putApiMethodResponse,
  postApiMethodResponse,
}
