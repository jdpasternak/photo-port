import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

afterEach(cleanup);

const photo = {
  name: "Park bench",
  category: "landscape",
  description: "A park bench outside",
  index: 1,
};

const mockToggleModal = jest.fn();

describe("Modal component", () => {
  it("renders", () => {
    render(<Modal currentPhoto={photo} onClose={mockToggleModal} />);
  });

  it("snapshot", () => {
    const { asFragment } = render(
      <Modal currentPhoto={photo} onClose={mockToggleModal} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("click event", () => {
  it("calls onClose handler", () => {
    const { getByText } = render(
      <Modal currentPhoto={photo} onClose={mockToggleModal} />
    );

    fireEvent.click(getByText("Close this modal"));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
