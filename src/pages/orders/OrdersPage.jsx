import Header from "../../components/Header";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import "./orders-page.css";
import Order from "./Order";

function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      let response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };

    fetchOrdersData();
  }, []);

  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <Order key={order.id} order={order} loadCart={loadCart} />
            );
          })}
          ;
        </div>
      </div>
    </>
  );
}

export default OrdersPage;
