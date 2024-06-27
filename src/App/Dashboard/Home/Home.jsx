import {
  AddIcon,
  Delivery_Box_Green,
  Delivery_Box_Orange,
  ForwardIcon,
  Hamburger,
  LocationIcon,
  NotificationIcon,
} from "Src/Assets/index";
import useFetchData, { BASE_URL } from "Src/Components/hooks/useFetchDataHook/useFetchData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeStyle } from "./Home.style";
import { SideNavbar } from "./SideNavbar";
import { Notification } from "./Notification";
import useRoutes from "Src/Components/hooks/Routes/Routes";
import { toast } from "react-toastify";
import { Spinner } from "@chakra-ui/react";

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.data : "";

  const [info, setInfo] = useState([]);
  const [balance, setBalance] = useState("");
  const [showNav, setShowNav] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const { handleAddCashRoute, handleLoginRoute } = useRoutes();

  const { data, isLoading } = useFetchData({
    url: `${BASE_URL}/auth/user`,
  });
  const { data: walletBalance, isLoading: loading } = useFetchData({
    url: `${BASE_URL}/wallet/balance`,
  });

  useEffect(() => {
    if (data && walletBalance) {
      setInfo(data.data);
      setBalance(walletBalance?.data);
    }
  }, [data, walletBalance]);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  const handleShowNotification = () => {
    setShowNotification(!showNotification);
  };

  if (isLoading && loading)
    return (
      <div
        style={{
          display: "flex",
          height: "100dvh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner />
      </div>
    );

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
            Welcome, <span>{info?.firstname}</span>
          </h1>
          <p>
            <LocationIcon /> {info?.address}
          </p>
        </div>
      </div>

      <div className="wallet-balance" background={"#1A1A1A"}>
        <div className="text">
          <p>Wallet balance</p>
          <h1> ${balance ? balance.toLocaleString() : "Loading..."}</h1>
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

      {/* SideNavbar */}
      {showNav && (
        <SideNavbar info={info} showNav={showNav} setShowNav={setShowNav} />
      )}
      {/* Notification */}
      {showNotification && (
        <Notification handleShowNotification={handleShowNotification} />
      )}
    </HomeStyle>
  );
};

export { Home };
