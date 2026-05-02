"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/register");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Đang chuyển hướng...</p>
    </div>
  );
}
