async function getApiMethodResponse1() {
  const URL = "https://reqres.in/api/users?page=1"
  return fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
async function getApiMethodResponse2() {
  const URL = "https://reqres.in/api/users?page=2"
  return fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

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

export {
  getApiMethodResponse1,
  getApiMethodResponse2,
  deleteApiMethodResponse,
  putApiMethodResponse,
}
