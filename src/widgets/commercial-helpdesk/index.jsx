import React from 'react'
import CommercialHeader from '../components/CommercialHeader'
import { Headset } from 'lucide-react';
import Tickets from '../community/component/UnitStatusPie';
import { LuReceiptText } from "react-icons/lu";
import MetricCard from './component/Resolution';
import { Timer } from 'lucide-react';
import TicketsPerCategory from './component/TicketsPerCategory';

function index() {
  return (
    <>
      <CommercialHeader text="Helpdesk" Icon={Headset} iconColor="#12B981" />

      <div className="flex gap-6 mt-6 px-4">
        
        <div className="w-[380px] space-y-4">
          <Tickets
            title="Tickets"
            icon={<LuReceiptText className="h-6 w-6 text-[#EF4444]" />}
            firstLabel="Resolved"
            firstValue={779}
            firstColor="#12B981"
            secondLabel="Open"
            secondValue={83}
            secondColor="#AB0000"
            growthPercentage="+9.1%"
            growthColor="#1FA05B"
            growthText="Compared to last month"
            totalLabel="Total"
          />

          <MetricCard
            icon={Timer}
            iconColor="#329DFF"
            title="Avg. Resolution Time"
            value="4.2 hr"
          />
        </div>

        <div className="flex-1">
          <TicketsPerCategory />
        </div>

      </div>
    </>
  );
}


export default index