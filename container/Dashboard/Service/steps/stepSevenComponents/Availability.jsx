import {
  BicycleIconDark,
  ClockIconDark,
  DialIconDark,
  OrdersIconDark,
} from "@/assets";

export default function Availability() {
  return (
    <div className="p-4 flex items-end justify-between bg-[#F5F5F5D1] rounded-[12px] mt-5">
      <div className="flex flex-col gap-4 items-center justify-center">
        <BicycleIconDark />
        <p className="leading-3 text">8km Away</p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <ClockIconDark />
        <p className="leading-3 text">18 mins</p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <i className="mb-[-10px]">
          <DialIconDark />
        </i>
        <p className="leading-3 text">Available</p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <OrdersIconDark />
        <p className="leading-3 text">8k orders</p>
      </div>
    </div>
  );
}
