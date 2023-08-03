import React, { Component } from "react";

class Task extends Component {
  render() {
    const allData = {
      account: {
        id: 65,
        first_name: "Anuprash",
        last_name: "Prasad",
        full_phone_number: "66666666666",
      },
      orders: {
        data: [
          {
            id: "20",
            type: "order_detail",
            attributes: {
              account_id: 65,
              user_id: null,
              created_at: "2023-07-27T08:49:43.143Z",
              art_name: "TestStagMintNFTArtName5July05",
              amount: "100",
              status: "confirmed",
              art_image:
                "https://minio.b228630.dev.eastus.az.svc.builder.cafe/sbucket/zdl9q667vbiyhqd3tv4keb91vqsd",
            },
          },
          {
            id: "19",
            type: "order_detail",
            attributes: {
              account_id: 65,
              user_id: null,
              created_at: "2023-07-14T08:11:47.196Z",
              art_name: "Tiger_art225",
              amount: "100",
              status: "confirmed",
              art_image:
                "https://minio.b228630.dev.eastus.az.svc.builder.cafe/sbucket/540wboq4qdcv3jmdl86e6tbcrwrz",
            },
          },
        ],
      },
    };

    const orders = allData.orders.data;
    return (
      <div>
        <h1>Orders List</h1>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Art Name: {order.attributes.art_name}</p>
              <p>Amount: {order.attributes.amount}</p>
              <p>Status: {order.attributes.status}</p>
              <img
                src={order.attributes.art_image}
                alt={order.attributes.art_name}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Task;
