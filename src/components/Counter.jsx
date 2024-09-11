import React from "react";

const Counter = () => {
  return (
    <div className="d-flex gap-4 align-items-center">
      <button className="bg-danger">Eksi</button>
      <span className="fw-bold fs-2">0</span>
      <button className="bg-primary">Artı</button>
    </div>
  );
};

export default Counter;
