import React from "react";
import { render, fireEvent } from "../testUtils";
import Checkout from "../../pages/checkout/index";

describe("Checkout Page", () => {
  // it('matches snapshot', () => {
  //   const { asFragment } = render(<Checkout />, {})
  //   expect(asFragment()).toMatchSnapshot()
  // })

  // it('clicking button triggers alert', () => {
  //   const { getByText } = render(<Checkout />, {})
  //   window.alert = jest.fn()
  //   fireEvent.click(getByText('Test Button'))
  //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  // })

  it("should render Header", () => {
    const { getByText } = render(<Checkout />);
    expect(getByText("Estamos quase lá!")).toBeInTheDocument();
  });
});
