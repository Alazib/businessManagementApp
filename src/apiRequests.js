async function getApiMethodResponse() {
  const URL = "https://reqres.in/api/users?page=1";
  return fetch(URL).then((response) => response.json());
}

async function deleteApiMethodResponse(id) {
  const URL = `https://reqres.in/api/users/${id}`;
  const myInit = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(URL, myInit).then((response) => response.json());
}

export { getApiMethodResponse, deleteApiMethodResponse };
