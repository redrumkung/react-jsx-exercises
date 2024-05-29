import React from "react";

function Header({ temperature, toggleIsOn, isOn }) {
  return (
    <>
      <button onClick={toggleIsOn}>ON/OFF</button>
      { // ใช้ && conditional rendering ได้ในกรณีที่ต้องการคืนค่า true แต่ไม่ต้องใช้ else 
      /* isOn && (
      <span className="ml-4 font-bold text-2xl">
        Current Temperature: {temperature}°C
      </span>
      ) */}

      {isOn ? (
        <span>Current Temperature: {temperature}°C</span>
      ) : (
        <span>OFF</span> // ถ้าไม่ต้องใช้ else ใส่ null
      )}
    </>
  );
}

export default Header;
