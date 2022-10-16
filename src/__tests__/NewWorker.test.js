import { render, screen } from "@testing-library/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewWorker from "../../src/components/NewWorker"
import user from "@testing-library/user-event"

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn().mockImplementation(() => {}),
  }
})

jest.spyOn(global, "fetch")

// global.fetch = jest.fn()

// global.fetch = () => {
//   return {
//     then: () => {
//       return { catch: () => {} }
//     },
//   }
// }
// Ese mock no funciona, pues el toHaveBeenCalled me dice que necesita un spy o un mock.
// Imagino que al hacer un mock manual no lo reconoce como tal.

describe("when the user create a new worker", () => {
  it("fetch should send the input data", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="" element={<NewWorker />}></Route>
        </Routes>
      </BrowserRouter>
    )
    // const apiUrl = "https://reqres.in/api/users?page=1"
    // const newData = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     first_name: "Ulysses",
    //     last_name: "Odysseus",
    //     age: "45",
    //     phone: "666 66 00 66",
    //     email: "ulysses@gmail.com",
    //     address: "Ithaca",
    //   }),
    // }

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

    expect(fetch).toHaveBeenCalled()
  })

  // it("after send user data, useNavigate() is called", async () => {
  //   render(
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="" element={<NewWorker />}></Route>
  //       </Routes>
  //     </BrowserRouter>
  //   )

  //   const submitButton = screen.getByRole("button", { name: /save/i })
  //   user.click(submitButton)

  //   expect(await screen.findByText(/delete/i)).toBeInTheDocument()
  // })
})
