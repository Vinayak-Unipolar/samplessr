"use client";
import React from "react";

export default function RequestTestDriveButton() {
  return (
    <button
      style={{
        background: "#1976d2",
        color: "#fff",
        border: "none",
        borderRadius: 8,
        padding: "14px 36px",
        fontSize: 18,
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(25,118,210,0.08)",
        transition: "background 0.2s",
      }}
      onClick={() => alert("Request Sent! Our team will contact you soon.")}
    >
      Request a Test Drive
    </button>
  );
} 