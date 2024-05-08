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
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HomeStyle } from "./Home.style";
const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.data : "";

  const [info, setInfo] = useState([]);

  const { data } = useFetchData({
    url: "https://walcr-backend.onrender.com/auth/user",
    token: accessToken,
  });

  useEffect(() => {
    if (data) {
      setInfo(data.data);
    }
  }, [data]);

  return (
    <HomeStyle>
      <div className="header">
        <div className="icon">
          <Hamburger />
          <NotificationIcon />
        </div>
        <div className="text">
          <h1>
            Welcome, <Text fontWeight={"800"}>{info?.name}</Text>{" "}
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

        <div>
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



    </HomeStyle>
  );
};

export { Home };
