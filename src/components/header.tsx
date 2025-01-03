import ButtonLogout from "@/components/button-logout";
import { ModeToggle } from "@/components/toggle-theme";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/login"}>Đăng nhập</Link>
        </li>
        <li>
          <Link href={"/register"}>Đăng ký</Link>
        </li>
        <li>
          <ButtonLogout />
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
};

export default Header;
