import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

describe("Contact us test case", () => {
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

  it("verify 2 inputbox is present in the contact us component", () => {
    render(<ContactUs />);
    const inputboxes = screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2);
  });
});
