// TODO: Create an enum for days of the week
enum DayOfWeek { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday }


// TODO: Create an enum for order status
enum OrderStatus { Pending, Processing, Shipped, Delivered, Cancelled }


// TODO: Create an interface for Order
interface Order { id: number; customerName: string; status: OrderStatus; orderDate: Date; }


// TODO: Create a function that returns a human-readable status message
function getStatusMessage(status: OrderStatus): string {
    switch(status) {
        case OrderStatus.Pending: return 'Your order is pending';
        case OrderStatus.Processing: return 'Your order is processing';
        case OrderStatus.Shipped: return 'Your order is shipped';
        case OrderStatus.Delivered: return 'Your order is delivered';
        case OrderStatus.Cancelled: return 'Your order is cancelled';
        default: return 'Impossible!';
    }
}


// TODO: Create a function that checks if an order can be cancelled
// (only Pending and Processing orders can be cancelled)
function canCancelOrder(order: Order): boolean {
    return order.status === OrderStatus.Pending || order.status === OrderStatus.Processing;
}


// TODO: Create a function that gets the next status
function getNextStatus(currentStatus: OrderStatus): OrderStatus | null {
    // Return null if it's already Delivered or Cancelled
    switch (currentStatus) {
        case OrderStatus.Pending: return OrderStatus.Processing;
        case OrderStatus.Processing: return OrderStatus.Shipped;
        case OrderStatus.Shipped: return OrderStatus.Delivered;
        case OrderStatus.Delivered:
        case OrderStatus.Cancelled: return null;
    }
}


// Test your code
const order: Order = {
    id: 1,
    customerName: "Charlie",
    status: OrderStatus.Pending,
    orderDate: new Date()
};
console.log(getStatusMessage(order.status));
console.log(canCancelOrder(order));

