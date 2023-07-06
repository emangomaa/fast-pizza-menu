import React from "react";

function Footer() {
  const time = new Date().getHours();
  const open = 12;
  const close = 22;
  const isOpen = time >= open && time <= close;
  return (
    <footer>
      {isOpen ? (
        <div>
          <p>We're Open You Can Visit Us Or Order Online</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {open}:00 and {close}:00
        </p>
      )}
    </footer>
  );
}

export default Footer;
