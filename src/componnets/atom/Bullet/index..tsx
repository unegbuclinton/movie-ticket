import React from "react";
interface bulletProp {
  color: string;
}
const Bullet: React.FC<bulletProp> = ({ color }) => {
  return (
    <span
      style={{
        display: "block",
        width: "8px",
        height: "8px",
        backgroundColor: `${color}`,
        borderRadius: "50%",
      }}
    ></span>
  );
};

export default Bullet;
