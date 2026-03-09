import Card from "../../components/Card";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

function SingleStats({ data }) {
  return (
    <div className="h-full">
      {data.map((card, index) => {
        const numericDelta = parseFloat(card.delta);
        const isPositive = numericDelta >= 0; // 0 should be green

        return (
          <Card
            iconClassName="!gap-[8px]"
            key={index}
            title={<div className="text-[#64748B]">{card.title}</div>}
            icon={
              <card.Icon
                className="h-[20px] w-[20px]"
                style={{ color: card.iconColor || "#000000" }}
              />
            }
            className="h-[132px]"
          >
            <div>
              <div className="text-[28px] leading-[32px] font-medium text-[#121212]">
                {card.value}
              </div>

              <div
                className={`flex items-center pt-[8px] text-[12px] leading-[16px] ${
                  card.delta ? "gap-[8px]" : ""
                }`}
              >
                {card.delta && (
                  <div
                    className="flex items-center gap-[4px]"
                    style={{
                      color: isPositive ? "#1FA05B" : "#E11D48",
                      fontWeight: 500,
                    }}
                  >
                    {isPositive ? <FaCaretUp /> : <FaCaretDown />}
                    {Math.abs(numericDelta)}%
                  </div>
                )}

                <div style={{ color: "#64748B" }}>{card.deltaLabel}</div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default SingleStats;