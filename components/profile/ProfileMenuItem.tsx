// components/profile/ProfileMenuItem.tsx
import React from "react";

type Props = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export default function ProfileMenuItem({
  label,
  active,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 cursor-pointer rounded-md transition ${
        active
          ? "bg-blue-500 text-white"
          : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      {label}
    </div>
  );
}