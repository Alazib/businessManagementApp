const API_URL = "https://reqres.in/api/"

async function getList1() {
  console.log("ENTRO EN GETLIST-1")
  const URL_LIST1 = `${API_URL}users?page=1`
  return fetch(URL_LIST1)
    .then((response) => {
      console.log("ENTRO EN THEN(response) de GETLIS-1")
      return response.json()
    })
    .then((data) => {
      console.log("ENTRO EN EL THEN(data) de GETLIST-1")
      return data.data
    })
    .catch((error) => console.log(error))
}

async function getList2() {
  console.log("ENTRO EN GETLIST-2")
  const URL_LIST2 = `${API_URL}users?page=2`
  return fetch(URL_LIST2)
    .then((response) => {
      console.log("ENTRO EN THEN(response) de GETLIST-2")
      return response.json()
    })
    .then((data) => {
      console.log("ENTRO EN EL THEN(data) de GETLIST-2")
      return data.data
    })
    .catch((error) => console.log(error))
}

async function deleteWorker(id) {
  const URL_USER = `${API_URL}users/${id}`
  const myInit = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }

  return fetch(URL_USER, myInit)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

async function putNewDataInWorker(id, newData) {
  const URL_USER = `${API_URL}users/${id}`
  const myInit = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  }
  return fetch(URL_USER, myInit)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

async function postNewWorker(newWorker) {
  console.log("ENTRO EN POST")
  const URL_LIST1 = `${API_URL}users?page=1`
  const myInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWorker),
  }

  return fetch(URL_LIST1, myInit)
    .then((response) => {
      console.log("ENTRO EN THEN de POST")
      return response.json()
    })
    .catch((error) => console.log(error))
}

async function recoverWorkerDetail(queryId) {
  const URL_USER = `${API_URL}users/${queryId}`
  return fetch(URL_USER)
    .then((response) => response.json())
    .then((data) => data.data)
}

export {
  getList1,
  getList2,
  deleteWorker,
  putNewDataInWorker,
  postNewWorker,
  recoverWorkerDetail,
}