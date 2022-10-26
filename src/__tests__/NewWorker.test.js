/* eslint-disable no-unused-vars */
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import user from "@testing-library/user-event"
import App from "../components/App"
import HeaderNavBar from "../components/HeaderNavBar"

const mockFetch1 = {
  json: () =>
    Promise.resolve({
      data: [{ first_name: "FIRST 1", last_name: "LAST 1", id: 1 }],
    }),
}

const mockFetch2 = {
  json: () =>
    Promise.resolve({
      data: [{ first_name: "FIRST 2", last_name: "LAST 2", id: 2 }],
    }),
}

function renderApp() {
  return render(
    <BrowserRouter>
      <HeaderNavBar />
      <App />
    </BrowserRouter>
  )
}

describe("when the user creates a new worker", () => {
  beforeEach(() => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(mockFetch1))
      .mockImplementationOnce(() => Promise.resolve(mockFetch1))
      .mockImplementationOnce(() => Promise.resolve(mockFetch2))
      .mockImplementationOnce(() => Promise.resolve(mockFetch2))
      .mockImplementationOnce(() => Promise.resolve(mockFetch2))
  })

  it("should create a new worker with all fields", async () => {
    renderApp()

    const newWorkerLink = screen.getByRole("link", { name: /new worker/i })
    user.click(newWorkerLink)

    const firstNameInput = screen.getByRole("textbox", { name: /first name/i })
    const lastNameInput = screen.getByRole("textbox", { name: /last name/i })
    const ageInput = screen.getByRole("textbox", { name: /age/i })
    const phoneInput = screen.getByRole("textbox", { name: /phone/i })
    const emailInput = screen.getByRole("textbox", { name: /email/i })
    const addressInput = screen.getByRole("textbox", { name: /address/i })
    const submitButton = screen.getByRole("button", { name: /save/i })

    user.type(firstNameInput, "Ulysses")
    user.type(lastNameInput, "Odysseus")
    user.type(ageInput, "45")
    user.type(phoneInput, "666 66 00 66")
    user.type(emailInput, "ulysses@gmail.com")
    user.type(addressInput, "Ithaca")
    user.click(submitButton)

    expect(fetch).toHaveBeenCalledWith("https://reqres.in/api/users?page=1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: "Ulysses",
        last_name: "Odysseus",
        age: "45",
        phone: "666 66 00 66",
        email: "ulysses@gmail.com",
        address: "Ithaca",
      }),
    })

    await screen.findAllByRole("heading", { name: /active workers/i })
  })

  it("after submit the new user data, worker list is rendered", async () => {
    renderApp()

    const newWorkerLink = screen.getByRole("link", { name: /new worker/i })
    user.click(newWorkerLink)

    const submitButton = await screen.findByRole("button", { name: /save/i })
    user.click(submitButton)

    await screen.findAllByRole("heading", {
      name: /active workers/i,
    })
  })
})

// jest.mock("react-router-dom", () => {
//   const originalModule = jest.requireActual("react-router-dom")

//   return {
//     __esModule: true,
//     ...originalModule,
//     useNavigate: jest.fn().mockImplementation(() => {}),
//   }
// })
