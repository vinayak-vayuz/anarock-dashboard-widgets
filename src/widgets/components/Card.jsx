const Card = ({
  title,
  icon,
  period,
  children,
  footer,
  className = "",
  childrenClassName,
  titleWeight,
  titleColor,
}) => {
  const fontWeightValue = titleWeight === "semi-bold" ? 600 : 500;

  return (
    <div
      className={`relative bg-white !border-[0.5px] !border-[#EBEBEB] !rounded-[12px] !shadow-[0_0_12px_0_#EAF2FF] p-[16px] flex flex-col gap-[24px] ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          {icon}
          <div
            style={{
              fontWeight: fontWeightValue,
              fontSize: "16px",
              lineHeight: "20px",
              color: titleColor || "#121212", // 👈 THIS is what you wanted
            }}
            className="!my-0 !text-[16px] !leading-[20px]"
          >
            {title}
          </div>
        </div>

        {period && (
          <div className="!text-[12px] !leading-[16px] !text-[#64748B]">
            {period}
          </div>
        )}
      </div>
      <div className={`flex-1 min-h-0 space-y-[20px] ${childrenClassName}`}>
        {children}
      </div>
      {footer && (
        <div className="mt-3 pt-3 border-t border-gray-100 !text-[12px] text-[#64748B]">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
