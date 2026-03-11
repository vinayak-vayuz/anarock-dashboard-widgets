import AccountingCard from "./component/AccountingCard";
import ExpenseCategories from "./component/ExpenseCategories";
import CashBankBalance from "./component/CashBankBalance";
import DuesAgeing from "./component/DuesAgeing";
import Budgets from "./component/Budgets";
import Header from "../components/Header";

function Financials({ data = {}, onExport }) {
  return (
    <div>
      <Header
        title="Financials"
        description="Units, residents, and occupancy details"
        onExport={onExport}
      />
      <div className="px-5 grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,1fr)] gap-[24px] mt-6">
        <AccountingCard data={data?.accounting} />
        <ExpenseCategories data={data?.expenseCategories} />
      </div>

      <div className="px-5 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,4fr)] gap-[24px] mt-6">
        <CashBankBalance data={data?.cashBankBalance} />
        <DuesAgeing data={data?.duesAgeing} />
      </div>
      <div className="px-5 mt-6">
        <Budgets data={data?.budgets} />
      </div>
    </div>
  );
}

export default Financials;
