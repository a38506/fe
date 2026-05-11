// app/profile/page.tsx (Next.js App Router)
"use client";

import { useState } from "react";
import ProfileMenu from "@/components/profile/ProfileMenu";
import ProfileContent from "@/components/profile/ProfileContent";

export default function ProfilePage() {
  const [active, setActive] = useState("info");

  return (
    <div className="flex min-h-screen">
      <ProfileMenu active={active} setActive={setActive} />
      <ProfileContent active={active} />
    </div>
  );
}