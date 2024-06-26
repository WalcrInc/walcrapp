import React from "react";
import { NotificationContainer } from "./Notification.style";
import { BackIcon } from "@/assets";
import { notification } from "./data";

const Notification = ({ handleShowNotification }) => {
  const formatDate = (dateString) => {
    const today = new Date();
    const [day, month, year] = dateString.split("/").map(Number); // Split and convert to numbers
    const notificationDate = new Date(year, month - 1, day); // Note: Month is 0-indexed in JavaScript Date object
    const diff = today - notificationDate;
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day

    // If the notification date is today
    if (diff < oneDay && notificationDate.getDate() === today.getDate()) {
      return "Today";
    }
    // If the notification date is yesterday
    else if (
      diff < oneDay * 2 &&
      notificationDate.getDate() === today.getDate() - 1
    ) {
      return "Yesterday";
    }
    // Otherwise, format the date as "Month, Day Year"
    else {
      const options = { month: "long", day: "numeric", year: "numeric" };
      return notificationDate.toLocaleDateString("en-US", options);
    }
  };

  // Group notifications by date and format date
  const groupedNotifications = notification.reduce((acc, curr) => {
    const date = formatDate(curr.date);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(curr);
    return acc;
  }, {});

  return (
    <NotificationContainer>
      <header>
        <span onClick={handleShowNotification}>
          <BackIcon />
        </span>
        <h1>Notifications</h1>
        <span style={{ color: "white" }}>.</span>
      </header>
      <div className="body">
        {Object.entries(groupedNotifications).map(([date, notifications]) => (
          <div className="info" key={date}>
            <h1>{date}</h1>
            {notifications.map((notification, index) => (
              <div className="sub-info" key={index}>
                <div className="icon"> {notification.icon}</div>
                <div className="text">
                  <h2>{notification?.payment_status}</h2>
                  <p>{notification.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </NotificationContainer>
  );
};

export { Notification };
