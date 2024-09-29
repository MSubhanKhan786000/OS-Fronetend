// RefundPolicy.js

import React from 'react';
import '../Refund/Refund.css';

function RefundPolicy() {
  return (
    <div className="refund-policy-container">
      <h1>Refund Policy</h1>
      <div className="section">
        <h2>1. Refund Eligibility</h2>
        <p>
          We offer refunds on eligible products or services within  30 days of purchase. To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
        </p>
      </div>
      <div className="section">
        <h2>2. Refund Process</h2>
        <p>
          To request a refund, please contact us at  with your order details and the reason for your refund request. We will review your request and notify you of the approval or rejection of your refund.
        </p>
      </div>
      <div className="section">
        <h2>3. Refund Exceptions</h2>
        <p>
          Certain items are not eligible for refunds, including personalized or custom-made products, downloadable software, and gift cards. Additionally, we reserve the right to refuse refunds on items that are returned damaged or not in their original condition.
        </p>
      </div>
      <div className="section">
        <h2>4. Refund Processing Time</h2>
        <p>
          Once your refund is approved, we will initiate a refund to your original method of payment. The processing time for refunds may vary depending on your payment provider. Please contact your payment provider for more information.
        </p>
      </div>
      <div className="section">
        <h2>5. Contact Us</h2>
        <p>
          If you have any questions or concerns about our Refund Policy or your refund request, please contact us at OccasionStyles@gmail.com.
        </p>
      </div>
    </div>
  );
}

export default RefundPolicy;
