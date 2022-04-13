import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm component", () => {
  it("renders", () => {
    render(<ContactForm></ContactForm>);
  });

  it("snapshot", () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("h1 tag", () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
  });

  it("submit button", () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId("submitbutton")).toHaveTextContent("Submit");
  });
});
