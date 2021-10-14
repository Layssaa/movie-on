import React from "react";
import 'regenerator-runtime/runtime';
import { render } from "@testing-library/react";
import { MyProvider } from "../../Context/Context";

export const renderWithProviders = (children) => {
  return render(<MyProvider>{children}</MyProvider>);
};
