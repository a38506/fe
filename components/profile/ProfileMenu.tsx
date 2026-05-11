// components/profile/ProfileMenu.tsx
import React from "react";
import ProfileMenuItem from "./ProfileMenuItem";

type Props = {
  active: string;
  setActive: (v: string) => void;
};

export default function ProfileMenu({ active, setActive }: Props) {
  return (
    <div className="w-64 border-r p-4 space-y-2">
      <ProfileMenuItem
        label="Thông tin cá nhân"
        active={active === "info"}
        onClick={() => setActive("info")}
      />

      <ProfileMenuItem
        label="Bảo mật"
        active={active === "security"}
        onClick={() => setActive("security")}
      />

      <ProfileMenuItem
        label="Đơn hàng"
        active={active === "orders"}
        onClick={() => setActive("orders")}
      />
    </div>
  );
}