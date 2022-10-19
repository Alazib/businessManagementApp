import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NewWorker from "../../src/components/NewWorker"
import App from "../components/App"
import HeaderNavBar from "../components/HeaderNavBar"
import user from "@testing-library/user-event"

describe("when the user create a new worker", () => {
  it("fetch should send the input data", () => {
    global.fetch = jest.fn(() => Promise.resolve({}))
    // OJO!!! -->  jest.spyOn(global, "fetch") --> Si este primer fetch lo mockeo así, pasan los 2 test.

    render(
      <BrowserRouter>
        <NewWorker></NewWorker>
      </BrowserRouter>
    )

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
    global.fetch = jest.fn(() => Promise.resolve({}))
  })

  it("after send user data, useNavigate() is called to go to Worker List", async () => {
    render(
      <BrowserRouter>
        <HeaderNavBar />
        <App></App>
      </BrowserRouter>
    )
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: [{ name: "X" }, { name: "Y" }] }),
      })
    )
    const newWorkerLink = screen.getByRole("link", { name: /new worker/i })
    user.click(newWorkerLink)

    const submitButton = await screen.findByRole("button", { name: /save/i })
    user.click(submitButton)

    const headingActiveWorkers = await screen.findAllByRole("heading", {
      name: /active workers: 0/i,
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
