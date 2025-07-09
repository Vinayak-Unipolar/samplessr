import React from "react";

export default async function CarPage() {
  // Simulate fetching car data
  const car = {
    name: "2024 Tesla Model S",
    image: "/globe.svg", // Replace with actual car image in public/ if available
    description:
      "Experience the future of driving with the 2024 Tesla Model S. Combining cutting-edge technology, luxury, and performance, the Model S sets the standard for electric vehicles.",
    features: [
      "Long Range Battery (405 miles)",
      "0-60 mph in 1.99 seconds",
      "Autopilot & Full Self-Driving",
      "Premium Interior & Sound",
      "All-Wheel Drive",
    ],
    price: "$89,990",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
        padding: 40,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 24,
          boxShadow: "0 8px 32px rgba(60,60,60,0.12)",
          maxWidth: 480,
          width: "100%",
          padding: 36,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={car.image}
          alt={car.name}
          style={{ width: 320, height: 180, objectFit: "cover", borderRadius: 16, marginBottom: 24 }}
        />
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 12px 0", color: "#222" }}>{car.name}</h1>
        <p style={{ fontSize: 18, color: "#444", marginBottom: 20, textAlign: "center" }}>{car.description}</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", width: "100%" }}>
          {car.features.map((feature, idx) => (
            <li
              key={idx}
              style={{
                fontSize: 16,
                color: "#333",
                padding: "6px 0",
                borderBottom: idx !== car.features.length - 1 ? "1px solid #eee" : "none",
              }}
            >
              • {feature}
            </li>
          ))}
        </ul>
        <div style={{ fontSize: 22, fontWeight: 600, color: "#1976d2", marginBottom: 28 }}>{car.price}</div>
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
      </div>
    </main>
  );
}
