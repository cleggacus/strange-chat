import { FC, useContext, useEffect, useState } from "react";

import styles from "../../../styles/Navbar.module.scss"

import { AiOutlineMenu, AiOutlineUser, AiOutlineHome, AiOutlineMessage, AiOutlineBell, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { IconType } from "react-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../../store/store";

type NavElemProps = {
  Icon: IconType,
  onClick?: () => void,
  to?: string,
  text?: string
}

const NavElem: FC<NavElemProps> = ({ Icon, onClick, to, text }) => {
  const [activeState, setActiveState] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveState(location.pathname == to);
  }, [location])

  return <Link to={to || ""}>
    <div onClick={onClick} className={`${styles.elem} ${activeState ? styles.active : ""}`}>
      <div className={styles.cropper}>
        <div className={styles.inner}>
          <div className={styles.icon}>
            <Icon></Icon>
          </div>
          <p>{text || ""}</p>
        </div>
      </div>
    </div>
  </Link>
}

const Navbar: FC = () => {
  const { dispatch } = useContext(StoreContext)
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen(!open);

  const logout = () => 
    fetch("/api/user/logout")
      .then(() => dispatch({
        type: "removeUser"
      }));

  return <div className={`${styles.container} ${open ? styles.open : styles.close}`}>
    <div className={styles.section}>
      <NavElem text="Menu" onClick={toggleOpen} Icon={AiOutlineMenu}></NavElem>
      <NavElem text="Home" to="/" Icon={AiOutlineHome}></NavElem>
      <NavElem text="Messages" to="/messages" Icon={AiOutlineMessage}></NavElem>
      <NavElem text="Notifications" to="/notifications" Icon={AiOutlineBell}></NavElem>
      <NavElem text="My Profile" to="/me" Icon={AiOutlineUser}></NavElem>
    </div>

    <div className={styles.section}>
      <NavElem text="Logout" onClick={logout} Icon={AiOutlineLogout}></NavElem>
      <NavElem text="User Settings" to="/settings" Icon={AiOutlineSetting}></NavElem>
    </div>
  </div>
}

export default Navbar;
