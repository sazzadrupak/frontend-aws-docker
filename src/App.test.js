import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders React Docker Travis AWS link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React Docker Travis AWS/i);
  expect(linkElement).toBeInTheDocument();
});
