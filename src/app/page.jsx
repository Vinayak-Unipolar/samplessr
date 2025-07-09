"use client";
import React from "react";

export default async function Home() {
  // Simulate fetching data from an API or database
  const message = "This page is rendered on the server (SSR) using Next.js!";
  const time = new Date().toLocaleString();

  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Sample SSR Page (JSX Only)</h1>
      <p>{message}</p>
      <p>Server Time: {time}</p>
    </main>
  );
}
