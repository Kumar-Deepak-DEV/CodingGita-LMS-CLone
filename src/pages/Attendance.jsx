import React from "react";
import Navbar from "../components/Navbar";

export default function StudentAttendance() {
  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;

  const today = new Date().toISOString().split("T")[0];

  if (!user) {
    return <div className="text-white p-6">No user found</div>;
  }

  const subjects = user.subjects || [];
  const mentor = user.mentors?.[0]?.name || "N/A";

  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white">
      <Navbar />

      <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 ">
          <div className="p-4 border-b border-neutral-800 ">
            <div className="text-white font-semibold">Overview</div>
          </div>

          
        </div>
      </div>
    </div>
  );
}