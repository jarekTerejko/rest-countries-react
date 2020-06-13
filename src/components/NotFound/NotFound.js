import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem", color: "var(--Very-Dark-Blue)" }}>
        This page does not exists
      </h1>
    </div>
  );
};

export default NotFound;
