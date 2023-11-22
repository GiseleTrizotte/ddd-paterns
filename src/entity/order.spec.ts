import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("should throw error when items is empty", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrowError("Items are required");
  });

  it("should calculate total", () => {
    const item = new OrderItem("id1", "name item 1", 100, "productId1", 2);
    const item2 = new OrderItem("id2", "name item 2", 200, "productId2", 2);
    const order = new Order("id1", "customerId1", [item]);

    let total = order.total();

    expect(total).toBe(200);

    const order2 = new Order("id2", "customerId2", [item, item2]);
    total = order2.total();
    expect(total).toBe(600);
  });

  it("should throw error if the item qte is less or equal zero 0", () => {
    expect(() => {
      const item = new OrderItem("id1", "name item 1", 100, "productId1", 0);
      const order = new Order("id1", "customerId1", [item]);
    }).toThrowError("Quantity must be greater than 0");
  });
});
