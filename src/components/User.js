import React from "react";
import email from "../image/email.svg"
import phone from "../image/phone.svg"
import location from "../image/location.svg"

function User({ item }) {
    const newDate = (item.registered.date).slice(0, 10)
  return <div className="myuser">
      <div className="div1">
            <img src={item.picture.medium} className = "myimage" />
            <h2>{item.name.title} {item.name.first} {item.name.last}</h2>
      </div>

      <div className="div1">
            <img src={email} className="svg"/>
            <h3>{item.email}</h3>
      </div>

      <div className="div1">
            <img src={phone} className="svg"/>
            <h3>{item.phone}</h3>
      </div>

      <div className="div1">
            <img src={location} className="svg"/>
            <h3>{item.location.city} {item.location.country}</h3>
      </div>

      <p>Age : {item.registered.age}</p>
      <p>Date : {newDate}</p>


  </div>;
}

export default User;
