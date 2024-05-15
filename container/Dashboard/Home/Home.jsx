import {
  AddIcon,
  Delivery_Box_Green,
  Delivery_Box_Orange,
  ForwardIcon,
  Hamburger,
  LocationIcon,
  NotificationIcon,
} from "@/assets";
import useFetchData from "@/hooks/useFetchDataHook/useFetchData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeStyle } from "./Home.style";
import { SideNavbar } from "./SideNavbar";
import { Notification } from "./Notification";
import useRoutes from "@/hooks/Routes/Routes";
import { toast } from "react-toastify";
const Home = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.data : "";

  const [info, setInfo] = useState([]);
  const [showNav, setShowNav] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const {handleAddCashRoute, handleLoginRoute} = useRoutes()

  const { data } = useFetchData({
    url: "https://walcr-backend.onrender.com/auth/user",
    token: accessToken,
  });

  useEffect(() => {
    if (data) {
      setInfo(data.data);
    }
  }, [data]);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  const handleShowNotification = () => {
    setShowNotification(!showNotification);
  };

 

  return (
    <HomeStyle>
      <div className="header">
        <div className="icon">
          <span onClick={handleShowNav}>
            <Hamburger />
          </span>
          <span onClick={handleShowNotification}>
            <NotificationIcon />
          </span>
        </div>
        <div className="text">
          <h1>
            Welcome, <span>{info?.firstname}</span>{" "}
          </h1>

          <p>
            <LocationIcon /> {info?.address}
          </p>
        </div>
      </div>

      <div className="wallet-balance" background={"#1A1A1A"}>
        <div className="text">
          <p>Wallet balance</p>
          <h1> $20.00</h1>
        </div>

        <div onClick={handleAddCashRoute}>
          <AddIcon />
        </div>
      </div>

      <div className="quick-actions">
        <h1>Quick Actions</h1>
        <div className="options">
          <div className="option">
            <Delivery_Box_Orange />
            <h1> Package delivery</h1>
            <p>Send and receive a package with our Walcr</p>
            <span>
              <ForwardIcon />
            </span>
          </div>

          <div className="option">
            <Delivery_Box_Orange />
            <h1>Heavy lifting</h1>
            <p>Send and receive a package with our Walcr</p>
            <span>
              <ForwardIcon />
            </span>
          </div>
        </div>
      </div>

      {/* //SideNavbar */}
      {showNav && (
        <SideNavbar info={info} showNav={showNav} setShowNav={setShowNav} />
      )}
      {/*Notification*/}
      {showNotification && (
        <Notification
          handleShowNotification={handleShowNotification}
        />
      )}
    </HomeStyle>
  );
};

export { Home };
