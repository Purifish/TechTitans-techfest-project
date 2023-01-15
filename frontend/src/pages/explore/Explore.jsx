import React from 'react'
import './Explore.css'

export default function Explore({posts}) {
  return (
    <div className="customer-order">
      <div class="customer-center">
        <span className="customer-name">{posts.name}</span>
      </div>
      <hr class="customer-hr"></hr>
      <span>
          <div className="customer-contact">Telegram Handle: {posts.tele}</div>
      </span>
      <span>
          <div className="customer-residence">Message: {posts.msg}</div>
      </span>
      {/* <span>
          <div className="customer-price">Paid: {posts.price}</div>
      </span> */}

    </div>
  )
}

