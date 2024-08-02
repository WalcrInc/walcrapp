import { CopyIcon } from "@/assets";

export default function Rate() {
  return (
    <div className="flex flex-col gap-3 leading-7 py-4">
      <div className="flex justify-between text-xs text-black">
        <p>Hourly Rate</p>
        <p>2 hours</p>
      </div>
      <div className="flex justify-between text-xs text-black">
        <p>Order Number</p>
        <p className="flex items-center gap-2">
          29842404244323453458{" "}
          <i>
            <CopyIcon />
          </i>
        </p>
      </div>
      <div className="flex justify-between text-xs text-black">
        <p>Rate per hours</p>
        <p className="text-base text-[#1a1a1a]">
          $<span className="font-bold text-[20px]">45.00</span>
          <span className="text-[20px]">/hr</span>
        </p>
      </div>
    </div>
  );
}
