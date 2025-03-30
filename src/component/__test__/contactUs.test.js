import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

describe("Contact us test case", () => {
  beforeAll(() => {
    console.log("before all");
  });
  beforeEach(() => {
    console.log("before each");
  });
  afterEach(() => {
    console.log("before all");
  });
  afterAll(() => {
    console.log("before all");
  });
  it("verify contact us component is loaded", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("verify submit button is present in the contact us component", () => {
    render(<ContactUs />);
    const heading = screen.getByText("Submit");
    expect(heading).toBeInTheDocument();
  });

  it("verify input is present in the contact us component", () => {
    render(<ContactUs />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  test("verify 2 inputbox is present in the contact us component", () => {
    render(<ContactUs />);
    const inputboxes = screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2);
  });
});
