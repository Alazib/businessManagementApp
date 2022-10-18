import { render, screen } from "@testing-library/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewWorker from "../../src/components/NewWorker"
import App from "../components/App"
import HeaderNavBar from "../components/HeaderNavBar"
import user from "@testing-library/user-event"

// jest.mock("react-router-dom", () => {
//   const originalModule = jest.requireActual("react-router-dom")

//   return {
//     __esModule: true,
//     ...originalModule,
//     useNavigate: jest.fn().mockImplementation(() => {}),
//   }
// })

jest.spyOn(global, "fetch").mockImplementationOnce(() => {})
// DUDA 1)
//¿Por qué funciona el toHaveBeenCalledWith() si aquí he vaciado la función fetch? Si hago "global.fetch = jest.fn()"
// también funciona

// DUDA 2)
//   jest.spyOn(global, "fetch")
//   .mockImplementationOnce(() => Promise.resolve({ json: jest.fn() }))

// global.fetch = () => {
//   return {
//     then: () => {
//       return { catch: () => {} }
//     },
//   }
// }
// DUDA 3)
// Ese mock no funciona, pues el toHaveBeenCalled me dice que necesita un spy o un mock.
// Imagino que al hacer un mock manual no lo reconoce como tal.

describe("when the user create a new worker", () => {
  it("fetch should send the input data", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="" element={<NewWorker />}></Route>
          {/* DUDA 4)
          ¿Por qué si pongo el path "new-worker" no funciona? */}
        </Routes>
      </BrowserRouter>
    )

    //  render(
    //   <BrowserRouter>
    //     <NewWorker></NewWorker>
    //   </BrowserRouter>
    // )
    // DUDA 5
    // ¿Por qué también funciona esto?

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
  })

  it("after send user data, useNavigate() is called to go to Worker List", async () => {
    render(
      <BrowserRouter>
        <HeaderNavBar />
        <App></App>
      </BrowserRouter>
    )
    // DUDA 6) ¿La app entera la cargo así?

    const newWorkerLink = screen.getByRole("link", { name: /new worker/i })
    user.click(newWorkerLink)

    const submitButton = await screen.findByRole("button", { name: /save/i })
    user.click(submitButton)

    screen.debug()
    // DUDA 7)
    // ¿Por qué no me ha dirigido a WorkerList?

    // const deleteListButton = await screen.findAllByRole("button", {
    //   name: /delete/i,
    // })
  })
})
