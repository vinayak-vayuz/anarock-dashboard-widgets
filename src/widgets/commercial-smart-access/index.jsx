import React, { useState } from "react";
import AccessOverview from "./component/AccessOverview";
import CardAccess from "./component/CardAccess";
import AccessPointsUsage from "./component/AccessPointsUsage";
import { ScanQrCode } from 'lucide-react';
import CommercialHeader from "../components/CommercialHeader";



function CommercialSmartAccess() {

  const cardAccessData = [
    { label: "Total Cards", value: 208, color: "#329DFF" },
    { label: "Card Entries", value: 630786, color: "#36AB6C" },
    { label: "Card Exits", value: 99330, color: "#AB0000" },
    { label: "Access Denied (Entry)", value: 2028, color: "#AB0000" },
    { label: "Access Denied (Exit)", value: 813, color: "#AB0000" },
  ];

  const mobileAccessData = [
    { label: "Total Users", value: 53394, color: "#329DFF" },
    { label: "Mobile Entries", value: 969822, color: "#36AB6C" },
    { label: "Mobile Exits", value: 330274, color: "#AB0000" },
  ];


  return (
    <>
    <CommercialHeader text="Smart Access" Icon={ScanQrCode} />
      <div className="px-5 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 auto-rows-fr">
        <AccessOverview />
        <CardAccess title="Card Access" data={cardAccessData} />
        <CardAccess title="Mobile Access" data={mobileAccessData} />
      </div>
      <div className="mt-7 px-5">
        <AccessPointsUsage />
      </div>
    </>
  );
}

export default CommercialSmartAccess;
