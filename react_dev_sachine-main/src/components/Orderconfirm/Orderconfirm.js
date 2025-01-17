import React from "react";
import "../Orderconfirm/orderconfirm.css";

export default function Orderconfirm() {
  return (
    <>
      <div className="container">
        <div className="mainorder">
          <div className="thanknote">
            <p className="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received">
              Thank you. Your order has been received.
            </p>
          </div>
          <ul class="woocommerce-order-overview woocommerce-thankyou-order-details order_details">
            <li class="woocommerce-order-overview__order order">
              Order number: <strong>10950</strong>
            </li>
            <li class="woocommerce-order-overview__date date">
              Date: <strong>September 18, 2017</strong>
            </li>
            <li class="woocommerce-order-overview__total total">
              Total:{" "}
              <strong>
                <span class="woocommerce-Price-amount amount">
                  <span class="woocommerce-Price-currencySymbol">Rs.</span>
                  229.00
                </span>
              </strong>
            </li>
            <li class="woocommerce-order-overview__payment-method method">
              Payment method: <strong>Check payments</strong>
            </li>
          </ul>
          <div className="woocommerce-order-details">
            <h2 class="woocommerce-order-details__title">Order details</h2>
            <table class="woocommerce-table woocommerce-table--order-details shop_table order_details">
              <thead>
                <tr>
                  <th class="woocommerce-table__product-name product-name">
                    Product
                  </th>
                  <th class="woocommerce-table__product-table product-total">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="woocommerce-table__line-item order_item">
                  <td class="woocommerce-table__product-name product-name">
                    <a href="https://demo.woothemes.com/storefront/product/standard-colander/">
                      Standard Colander
                    </a>{" "}
                    <strong class="product-quantity">× 1</strong>{" "}
                  </td>
                  <td class="woocommerce-table__product-total product-total">
                    <span class="woocommerce-Price-amount amount">
                      <span class="woocommerce-Price-currencySymbol">Rs.</span>
                      19.99
                    </span>
                  </td>
                </tr>
                <tr class="woocommerce-table__line-item order_item">
                  <td class="woocommerce-table__product-name product-name">
                    <a href="https://demo.woothemes.com/storefront/product/scubapro-10-litre-232-bar-cylinder-single-valve/">
                      Scubapro 10 litre 232 bar cylinder – single valve
                    </a>{" "}
                    <strong class="product-quantity">× 1</strong>{" "}
                  </td>
                  <td class="woocommerce-table__product-total product-total">
                    <span class="woocommerce-Price-amount amount">
                      <span class="woocommerce-Price-currencySymbol">Rs.</span>
                      229.00
                    </span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Subtotal:</th>
                  <td>
                    <span class="woocommerce-Price-amount amount">
                      <span class="woocommerce-Price-currencySymbol">Rs.</span>
                      248.99
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Payment method:</th>
                  <td>Check payments</td>
                </tr>
                <tr>
                  <th scope="row">Total:</th>
                  <td>
                    <span class="woocommerce-Price-amount amount">
                      <span class="woocommerce-Price-currencySymbol">Rs.</span>
                      229.00
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="woocommerce-customer-details">
            <h2 className="woocommerce-order-details__title">Customer details</h2>
            <table class="woocommerce-table woocommerce-table--customer-details shop_table customer_details">
              <tbody>
                <tr>
                  <th>Email:</th>
                  <td>luubinhan1989@gmail.com</td>
                </tr>
                <tr>
                  <th>Phone:</th>
                  <td>09438703156</td>
                </tr>
              </tbody>
            </table>
            <h2 class="woocommerce-order-details__title">Billing address</h2>
            <address>An Luu <br/>An 123 Luu <br/>Binh An Viet <br/>Nam Vietnam</address>
          </div>
        </div>
      </div>
    </>
  );
}
