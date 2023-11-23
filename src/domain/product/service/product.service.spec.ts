import Product from "../entity/product";
import ProductService from "./product.service";

describe("Prodcut service unit tests", () => {
  it("should", () => {
    const product1 = new Product("id1", "name product 1", 10);
    const product2 = new Product("id2", "name product 2", 20);
    const products = [product1, product2];

    ProductService.increasePrice(products, 100);

    expect(product1.price).toBe(20);
    expect(product2.price).toBe(40);
  });
});
