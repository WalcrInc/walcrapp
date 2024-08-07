import { ActiveRedIcon, MessageIconDark, PhoneIconDark } from "@/assets";

export default function WalkerContacts() {
  return (
    <div className="walker_contacts">
      <div className="message">
        <span>
          <ActiveRedIcon />
        </span>
        <i>
          <MessageIconDark />
        </i>
      </div>
      <i>
        <PhoneIconDark />
      </i>
    </div>
  );
}
