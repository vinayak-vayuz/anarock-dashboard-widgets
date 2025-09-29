import React from "react";
import { OpenInNewOutlined as OpenInNewOutlinedIcon } from "@mui/icons-material";
import Card from "../../components/Card";

const CashBankBalance = () => {
  const accounts = [
    { title: "Primary Account", amount: 2850000, subtitle: "Savings" },
    { title: "Emergency Fund", amount: 1200000, subtitle: "Fixed deposit" },
    { title: "Maintenance Fund", amount: 680000, subtitle: "Current" },
  ];

  const total = accounts.reduce((sum, acc) => sum + acc.amount, 0);

  const formatCurrency = (num) => {
    if (num >= 1000000) return `AED ${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `AED ${(num / 1000).toFixed(1)}K`;
    return `AED ${num}`;
  };

  return (
    <Card
      title="Cash & Bank Balance"
      className="w-full h-[362px]"
      period={
        <OpenInNewOutlinedIcon className="h-5 w-5 text-[#884EA7] cursor-pointer" />
      }
      titleWeight="semi-bold"
      childrenClassName="divide-y divide-slate-100"
    >
      {accounts.map((acc, i) => (
        <div key={i} className="flex justify-between items-center ">
          <div>
            <div className="text-base font-medium">{acc.title}</div>
            <div className="text-xs text-slate-400">{acc.subtitle}</div>
          </div>
          <div className="text-[#1FA05B] font-semibold">
            {formatCurrency(acc.amount)}
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center py-3 font-semibold">
        <div>Total</div>
        <div className="text-emerald-600">{formatCurrency(total)}</div>
      </div>
    </Card>
  );
};

export default CashBankBalance;
