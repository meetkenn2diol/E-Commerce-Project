import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Product from "./Product";

//mocks the entire axios package
vi.mock("axios");

describe("Product component test", () => {
  //A dummy product
  let product;

  //A mock function (i.e fake function)
  let loadCart;

  //for user event
  let user;

  //recreate the shared variables before each test
  beforeEach(() => {
    product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };

    loadCart = vi.fn();
    user = userEvent.setup();
  });

  it("displays the product details correctly", () => {
    render(<Product product={product} loadCart={loadCart} />);

    expect(
      //screen checks the fake webpage
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs"),
    ).toBeInTheDocument();

    expect(screen.getByText("$10.90")).toBeInTheDocument();

    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg",
    );

    expect(screen.getByTestId("product-rating-stars-image")).toHaveAttribute(
      "src",
      "images/ratings/rating-45.png",
    );

    expect(screen.getByText("87")).toBeInTheDocument();
  });

  //testing user interaction
  it("adds a product to the cart", async () => {
    render(<Product product={product} loadCart={loadCart} />);

    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);

    //expect our code to run axios.post
    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    });
    //check if loadCart is called
    expect(loadCart).toHaveBeenCalled();
  });

  it("can select a quantity", async () => {
    // Render the Product component with our dummy data and mock function
    render(<Product product={product} loadCart={loadCart} />);

    // Retrieve the quantity dropdown menu from the rendered screen
    const quantitySelector = screen.getByTestId("quantity-selector");
    // Ensure the default value in the dropdown is '1'
    expect(quantitySelector).toHaveValue("1");

    // Simulate a user changing the dropdown selection to '3'
    await user.selectOptions(quantitySelector, "3");

    // Check that the dropdown successfully updated its value to '3'
    expect(quantitySelector).toHaveValue("3");

    // Find the "Add to Cart" button on the screen
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    // Simulate a user clicking the "Add to Cart" button
    await user.click(addToCartButton);

    // Verify an API request was sent to add the correct product and the updated quantity (3)
    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 3,
    });
    // Verify the parent component's cart update function was called
    expect(loadCart).toHaveBeenCalled();
  });
});
