import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit tests", () => {
  it("should place an order", () => {
    const customer = new Customer("id1", "Customer 1");
    const item = new OrderItem("id1", "name item 1", 10, "productId1", 1);

    const order = OrderService.placeOrder(customer, [item]);
    expect(customer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);
  });
  it("should get total of al orders", () => {
    const item1 = new OrderItem("id1", "name item 1", 100, "productId1", 1);
    const item2 = new OrderItem("id1", "name item 1", 200, "productId1", 2);

    const order1 = new Order("id1", "customerId1", [item1]);
    const order2 = new Order("id1", "customerId1", [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(500);
  });
});
