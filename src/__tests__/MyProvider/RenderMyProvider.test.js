import React from "react";
import { render } from "@testing-library/react";
import { MyProvider } from "../../Context/Context";
import { CartMovie } from "../../Context/Context"

export const renderWithProviders = (children) => {

  // const CartMovie = jest.fn();
  // const setAddMovie = jest.fn();
  // const setRemoveMovie = jest.fn();
  // const setCleanMovie = jest.fn();

  return render(<MyProvider>{children}</MyProvider>);
};
