import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import user from "@testing-library/user-event"
import App from "../App"
import HeaderNavBar from "../components/HeaderNavBar"

const mockFetch1 = {
  json: () =>
    Promise.resolve({
      data: [
        {
          avatar: "avatar 1",
          first_name: "FIRST1",
          last_name: "LAST1",
          age: 33,
          phone: 12345,
          email: "first-last-1@mail.com",
          address: "provisional street",
          id: 1,
        },
      ],
    }),
}
const mockFetch2 = {
  json: () =>
    Promise.resolve({
      data: [
        {
          avatar: "avatar 2",
          first_name: "FIRST2",
          last_name: "LAST2",
          age: 63,
          phone: 678910,
          email: "first-last-2@mail.com",
          address: "provisional avenue",
          id: 2,
        },
      ],
    }),
}

jest.mock("../services/provisionalSolutionToTheLackOfDataBase")

function renderApp() {
  return render(
    <BrowserRouter>
      <HeaderNavBar />
      <App />
    </BrowserRouter>
  )
}

describe("when user clicks on the worker preview card", () => {
  
  beforeEach(() => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(mockFetch1))
      .mockImplementationOnce(() => Promise.resolve(mockFetch2))
  })

  it("the worker detail should be rendered", async () => {
    renderApp()
    const workerListLink = screen.getByRole("link", { name: /worker list/i })
    user.click(workerListLink)

    const worker1PreviewCard = await screen.findByRole("heading", {
      name: /first1 last1/i,
    })
    user.click(worker1PreviewCard)

    const updateWorkerInfoButton = await screen.findByRole("button", {
      name: /update worker info/i,
    })
    const deleteWorkerButton = await screen.findByRole("button", {
      name: /delete worker/i,
    })
    const activeInactiveWorkerButton = await screen.findByRole("button", {
      name: /active\/inactive/i,
    })

    const workerAvatar = await screen.findByRole("img", { name: "worker" })
    const workerName = await screen.findByText(/first1 last1/i)
    const workerAge = await screen.findByText("33")
    const workerPhone = await screen.findByText("12345")
    const workerEmail = await screen.findByText(/first-last-1@mail.com/i)
    const workerAddress = await screen.findByText("provisional street")
    const workerState = await screen.findByText(/non active/i)
  })
})

describe("when user clicks on the Active/Inactive button", () => {
  beforeEach(() => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(mockFetch1))
      .mockImplementationOnce(() => Promise.resolve(mockFetch2))
      .mockImplementationOnce(() => Promise.resolve(mockFetch1))
      .mockImplementationOnce(() => Promise.resolve(mockFetch2))
  })

  it("the PUT method with the new data should be called", async () => {
    renderApp()
    const workerListLink = screen.getByRole("link", { name: /worker list/i })
    user.click(workerListLink)

    const worker1PreviewCard = await screen.findByRole("heading", {
      name: /first1 last1/i,
    })
    user.click(worker1PreviewCard)

    const activeInactiveWorkerButton = await screen.findByRole("button", {
      name: /active\/inactive/i,
    })
    user.click(activeInactiveWorkerButton)
    expect(fetch).toBeCalledWith("https://reqres.in/api/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: "avatar 1",
        first_name: "FIRST1",
        last_name: "LAST1",
        age: 33,
        phone: 12345,
        email: "first-last-1@mail.com",
        address: "provisional street",
        id: 1,
        active: true,
      }),
    })
  })
})
