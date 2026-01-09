import { ActionButtons } from "../../components/ActionButtons";
import { Card } from "../../utils";
import { LuReceiptText } from "react-icons/lu";

function FinanceSummary({ data }) {
  const income = data?.incomeSummary || {};
  const expenditure = data?.expenditureSummary || {};

  const rightSideCurrencies = ["AED", "USD", "EUR"];
  const leftSideCurrencies = ["Rs", "INR", "₹"];

  function formatCurrency(value) {
    if (value === null || value === undefined || isNaN(value)) return "0";

    const num = Number(value);
    const absNum = Math.abs(num);
    const sign = num < 0 ? "-" : "";

    if (absNum >= 1_000_000_000) {
      return (
        sign +
        (absNum / 1_000_000_000).toFixed(absNum % 1_000_000_000 === 0 ? 0 : 2) +
        "B"
      );
    } else if (absNum >= 1_000_000) {
      return (
        sign +
        (absNum / 1_000_000).toFixed(absNum % 1_000_000 === 0 ? 0 : 2) +
        "M"
      );
    } else if (absNum >= 1_000) {
      return (
        sign + (absNum / 1_000).toFixed(absNum % 1_000 === 0 ? 0 : 2) + "K"
      );
    } else {
      return sign + absNum.toFixed(absNum % 1 === 0 ? 0 : 2);
    }
  }

  // 🔹 Utility: format with currency placement
  function withCurrency(value, currencyType) {
    if (!currencyType) return formatCurrency(value);

    if (leftSideCurrencies.includes(currencyType)) {
      return `${currencyType} ${formatCurrency(value)}`;
    } else if (rightSideCurrencies.includes(currencyType)) {
      return `${formatCurrency(value)} ${currencyType}`;
    } else {
      // Default to right if unknown
      return `${formatCurrency(value)} ${currencyType}`;
    }
  }

  console.log("Finance Summary Data:", data);

  return (
    <Card
      title="Income"
      period="This Month"
      icon={<LuReceiptText className="!text-[24px] text-green-600" />}
      className="!gap-[16px] break-inside-avoid h-[232px] overflow-hidden"
      // actionButtons={
      //   <ActionButtons
      //     widgetId={data?.widget_id}
      //     options={data?.communities}
      //     onFilterChange={(value, widget) => console.log(value, widget)}
      //     onExport={(widget) => console.log("Export triggered for", widget)}
      //   />
      // }
    >
      <div>
        {/* Header */}
        <div className="grid grid-cols-4 !text-[12px] text-[#64748B] mb-2">
          <div>Opening</div>
          <div>Income</div>
          <div>Collection</div>
          <div>Closing</div>
        </div>

        {/* Income Data */}
        <div className="grid grid-cols-4 !text-[12px] font-medium text-[#121212] mb-2">
          <div>
            {withCurrency(income.opening_balance, income?.currency_type)}
          </div>
          <div>{withCurrency(income.income, income?.currency_type)}</div>
          <div>{withCurrency(income.collection, income?.currency_type)}</div>
          <div>
            {withCurrency(income.closing_balance, income?.currency_type)}
          </div>
        </div>

        <hr className="my-4 border-t border-dashed border-gray-300" />

        {/* Expenditure Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <LuReceiptText className="!text-[24px] text-red-600" />
            <div className="!my-0 !font-medium !text-[16px] !leading-[20px] !text-[#121212]">
              Expenditure
            </div>
          </div>
          {/* <div className="!text-[12px] !leading-[16px] !text-[#64748B]">
            This Month
          </div> */}
        </div>

        <div className="grid grid-cols-4 !text-[12px] text-[#64748B] mt-4 mb-2">
          <div>Opening</div>
          <div>Expenditure</div>
          <div>Payment</div>
          <div>Outstanding</div>
        </div>

        {/* Expenditure Data */}
        <div className="grid grid-cols-4 !text-[12px] font-medium text-[#121212]">
          <div>
            {withCurrency(
              expenditure.opening_balance,
              expenditure?.currency_type
            )}
          </div>
          <div>
            {withCurrency(expenditure.expenditure, expenditure?.currency_type)}
          </div>
          <div>
            {withCurrency(expenditure.payment, expenditure?.currency_type)}
          </div>
          <div>
            {withCurrency(expenditure.outstanding, expenditure?.currency_type)}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FinanceSummary;
