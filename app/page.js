"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      {!entered ? (
        <div className="flex items-center justify-center min-h-screen backdrop-blur-md">
          <button
            onClick={() => setEntered(true)}
            className="px-6 py-3 text-lg font-bold text-white bg-transparent border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:text-purple-600 hover:scale-110"
          >
            Enter MayaMatrix Technology World
          </button>
        </div>
      ) : (
        <>
          <Navbar />
          <LandingPage />
        </>
      )}
    </main>
  );
}
