import React, { useState } from 'react'

const toppings = [
    {id:1, name:"abhinav", price:56},
    {id:2, name:"niraj", price:34},
    {id:3, name:"jay", price:12},
]
const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export const Test = () => {
    const [total, setTotal] = useState(0);

    
  return (
      <div className="App">
          <h3>Select Toppings</h3>
          <ul className="toppings-list">
              {toppings.map(({ name, price }, index) => {
                  return (
                      <li key={index}>
                          <div className="toppings-list-item">
                              <div className="left-section">
                                  <input
                                      type="checkbox"
                                      id={`custom-checkbox-${index}`}
                                      name={name}
                                      value={name}
                                  />
                                  {/* <label htmlFor={`custom-checkbox-${index}`}>{name}</label> */}
                              </div>
                              {/* <div className="right-section">{getFormattedPrice(price)}</div> */}
                          </div>
                      </li>
                  );
              })}
              <li>
                  <div className="toppings-list-item">
                      <div className="left-section">Total:</div>
                      <div className="right-section">{getFormattedPrice(total)}</div>
                  </div>
              </li>
          </ul>
      </div>
  )
}
