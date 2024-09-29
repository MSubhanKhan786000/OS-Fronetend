// ShippingPolicy.js

import React from 'react';
import '../shipping us/shipping us.css';

function ShippingPolicy() {
  return (
    <div className="shipping-policy-container">
      <h1>Shipping Policy</h1>
      <div className="section">
        <h2>1. Shipping Methods</h2>
        <p>
          We offer various shipping methods to meet your needs, including standard shipping, expedited shipping, and international shipping. Shipping costs and delivery times may vary depending on the shipping method selected and your location.
        </p>
      </div>
      <div className="section">
        <h2>2. Shipping Rates</h2>
        <p>
          Shipping rates are calculated based on the weight of your order, the shipping method selected, and your location. You can view the shipping rates for your order during the checkout process before completing your purchase.
        </p>
      </div>
      <div className="section">
        <h2>3. Order Processing Time</h2>
        <p>
          Orders are typically processed and shipped within 4-5 working days. Once your order has been shipped, you will receive a shipping confirmation email with tracking information to track your package's delivery status.
        </p>
      </div>
      <div className="section">
        <h2>4. Shipping Restrictions</h2>
        <p>
          We may be unable to ship certain items to certain locations due to shipping restrictions or regulations. Additionally, we do not ship to P.O. boxes or APO/FPO addresses. Please contact us if you have any questions or concerns about shipping restrictions.
        </p>
      </div>
      <div className="section">
        <h2>5. Contact Us</h2>
        <p>
          If you have any questions or concerns about our Shipping Policy or your order's shipping status, please contact us at [Your Contact Information].
        </p>
      </div>
    </div>
  );
}

export default ShippingPolicy;
