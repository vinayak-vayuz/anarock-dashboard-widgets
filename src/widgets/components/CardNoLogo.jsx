import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const Card = ({
  title,
  icon,
  period,
  isDateSelector = false,
  children,
  footer,
  className = "",
  titleWeight,
  titleColor,
  iconClassName,
  titleClassName,
  childrenClassName,
}) => {
  const fontWeightValue = titleWeight === "semi-bold" ? 600 : 500;

  return (
    <div
      className={`relative bg-white border border-[#EBEBEB] rounded-[12px] p-[24px] shadow-[0_0_12px_0_#EAF2FF] ${className}`}
    >
      <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          {icon && <div className={iconClassName}>{icon}</div>}

          <div
            style={{
              fontWeight: fontWeightValue,
              color: titleColor || "#121212",
            }}
            className={
              titleClassName
                ? titleClassName
                : "text-[20px] leading-[24px]"
            }
          >
            {title}
          </div>
        </div>

        {period && !isDateSelector && (
          <div className="text-[12px] leading-[16px] text-[#64748B]">
            {period}
          </div>
        )}

        {isDateSelector && (
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg border border-[#EBEBEB] bg-white text-sm text-[#64748B]">
            <Calendar size={16} className="text-[#64748B]" />
            <ChevronLeft size={16} className="cursor-pointer" />
            <span className="text-[12px] leading-[16px] text-[#64748B]">
              {period}
            </span>
            <ChevronRight size={16} className="cursor-pointer" />
          </div>
        )}
      </div>

      <div className={`flex-1 min-h-0 mt-4 ${childrenClassName}`}>
        {children}
      </div>

      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-100 text-[12px] text-[#64748B]">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
