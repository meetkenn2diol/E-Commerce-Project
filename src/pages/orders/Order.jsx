import axios from "axios";
import OrderHeader from "./OrderHeader";
import OrderProduct from "./OrderProduct";

export default function Order({ order, loadCart }) {

    return (
        <div className="order-container">

            <OrderHeader order={order} />

            <div className="order-details-grid">
                {order.products.map((orderProduct) => {
                    const addToCart = async () => {
                        await axios.post("/api/cart-items", {
                            productId: orderProduct.product.id,
                            quantity: 1,
                        });
                        await loadCart();
                    };

                    return (
                        <OrderProduct key={orderProduct.product.id} orderProduct={orderProduct} addToCart={addToCart} order={order} />
                    );
                })}
            </div>
        </div>
    );
}