"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function StoriesRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/insights");
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 font-mono text-sm">
      <div className="text-center">
        <span className="w-3 h-3 rounded-full bg-[#38bdf8] inline-block animate-ping mb-4" />
        <p className="text-slate-400">Redirecting to DigiNorth Insights...</p>
      </div>
    </div>
  );
}
