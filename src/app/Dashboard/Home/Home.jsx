import {
  AddIcon,
  Delivery_Box_Orange,
  ForwardIcon,
  Hamburger,
  LocationIcon,
  HomeNotificationIcon,
  Wrench_Green,
} from "@/assets";
import useFetchData, {
  BASE_URL,
} from "@/features/Hooks/useFetchDataHook/useFetchData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeStyle } from "./Home.style";
import { SideNavbar } from "./SideNavbar";
import { Notification } from "./Notification";
import useRoutes from "@/features/Hooks/Routes/Routes";
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

  const { handleAddCashRoute } = useRoutes();

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
          height: "100vh",
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
            <HomeNotificationIcon />
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
            <i
              style={{
                backgroundColor: "rgba(241, 131, 65, 0.10)",
                borderRadius: "8px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Delivery_Box_Orange />
            </i>
            <h1> Package delivery</h1>
            <p>Send and receive a package with our Walcr</p>
            <span>
              <ForwardIcon />
            </span>
          </div>

          <div className="option">
            <i
              style={{
                backgroundColor: "rgba(200, 255, 199, 0.50)",
                borderRadius: "8px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Wrench_Green />
            </i>
            <h1>Book a service</h1>
            <p>Send and receive a package with our Walcr</p>
            <span>
              <ForwardIcon />
            </span>
          </div>
        </div>
      </div>

      {/* SideNavbar */}
      {showNav && (
        <SideNavbar
          info={info}
          showNav={showNav}
          setShowNav={setShowNav}
          setShowNotification={setShowNotification}
        />
      )}
      {/* Notification */}
      {showNotification && (
        <Notification handleShowNotification={handleShowNotification} />
      )}
    </HomeStyle>
  );
};

export { Home };
