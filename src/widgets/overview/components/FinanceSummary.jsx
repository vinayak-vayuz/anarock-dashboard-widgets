import Card from "../../components/Card";
import { LuReceiptText } from "react-icons/lu";

function FinanceSummary({ data }) {
  const income = data?.incomeSummary || {};
  const expenditure = data?.expenditureSummary || {};

  function formatCurrency(value) {
    if (value === null || value === undefined || isNaN(value)) return "0";

    const num = Number(value);

    if (num >= 1_000_000_000) {
      return (
        (num / 1_000_000_000).toFixed(num % 1_000_000_000 === 0 ? 0 : 2) + "B"
      );
    } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 2) + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 2) + "K";
    } else {
      return num.toFixed(num % 1 === 0 ? 0 : 2);
    }
  }

  return (
    <Card
      title="Income"
      period="This Month"
      icon={<LuReceiptText className="!text-[24px] text-green-600" />}
      className="!gap-[16px] break-inside-avoid h-[232px] overflow-hidden"
    >
      <div>
        <div className="grid grid-cols-4 !text-[12px] text-[#64748B] mb-2">
          <div>Opening</div>
          <div>Income</div>
          <div>Collection</div>
          <div>Closing</div>
        </div>

        <div className="grid grid-cols-4 !text-[12px] font-medium text-[#121212] mb-2">
          <div>{formatCurrency(income.opening_balance)} AED</div>
          <div>{formatCurrency(income.income)} AED</div>
          <div>{formatCurrency(income.collection)} AED</div>
          <div>{formatCurrency(income.closing_balance)} AED</div>
        </div>

        <hr className="my-4 border-t border-dashed border-gray-300" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <LuReceiptText className="!text-[24px] text-red-600" />
            <div
              style={{ fontWeight: 500, fontSize: "16px", lineHeight: "20px" }}
              className="!my-0 !font-medium !text-[16px] !leading-[20px] !text-[#121212]"
            >
              Expenditure
            </div>
          </div>

          <div className="!text-[12px] !leading-[16px] !text-[#64748B]">
            This Month
          </div>
        </div>

        <div className="grid grid-cols-4 !text-[12px] text-[#64748B] mt-4 mb-2">
          <div>Opening</div>
          <div>Expenditure</div>
          <div>Payment</div>
          <div>Outstanding</div>
        </div>

        <div className="grid grid-cols-4 !text-[12px] font-medium text-[#121212]">
          <div>{formatCurrency(expenditure.opening_balance)} AED</div>
          <div>{formatCurrency(expenditure.expenditure)} AED</div>
          <div>{formatCurrency(expenditure.payment)} AED</div>
          <div>{formatCurrency(expenditure.outstanding)} AED</div>
        </div>
      </div>
    </Card>
  );
}

export default FinanceSummary;
