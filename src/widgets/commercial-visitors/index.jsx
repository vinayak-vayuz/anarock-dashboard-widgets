import React from 'react'
import CommercialHeader from '../components/CommercialHeader'
import { FileUser } from 'lucide-react';
import MetricCard from '../commercial-helpdesk/component/Resolution';
import { GoPeople } from "react-icons/go";
import { ArrowRightToLine } from 'lucide-react';
import WeeklyVisitorCard from './components/WeeklyVisitorPattern';
import OrganisationWiseVisitorsCard from './components/OrganisationWiseVisitors';

function index() {
  return (
    <>
      <CommercialHeader text="Visitors" Icon={FileUser} iconColor="#884EA7" />

      <div className='grid grid-cols-2 gap-[24px] mt-[24px]'>
        <MetricCard
          icon={GoPeople}
          iconColor="#329DFF"
          title="Visitors Expected"
          value="1,247"
          percentage="+11.0%"
          percentageText="Compared to last month"
        />
        <MetricCard
          icon={ArrowRightToLine}
          iconColor="#1FA05B"
          title="Visitors Inside"
          value="800"
          percentageText="Across organisations"
        />
      </div>
      <div className='grid grid-cols-2 gap-[24px] mt-[24px]'>
        <WeeklyVisitorCard />
        <OrganisationWiseVisitorsCard />
      </div>
      <div>

      </div>
    </>
  )
}

export default index
