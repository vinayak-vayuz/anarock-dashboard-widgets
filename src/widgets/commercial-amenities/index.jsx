import React from 'react'
import CommercialHeader from '../components/CommercialHeader'
import SingleStats from './components/Stats'
import BookingsChart from './components/BookingsChart'
import AmenityWiseRevenue from './components/AmenityWiseRevenue'
import { LandPlot } from 'lucide-react';
import { RiBillLine } from "react-icons/ri";

import { TicketCheck, Percent, Ticket, BanknoteArrowDown } from 'lucide-react';
import BookingTrendChart from './components/BookingTrendChart';

function index() {
    return (
        <>
            <CommercialHeader text="Amenities" Icon={LandPlot} iconColor="#F59D0D" />
            <div className='p-4 grid grid-cols-2 mt-[24px] gap-[24px]'>
                <div className='grid grid-cols-2 gap-[24px]'>

                    <SingleStats
                        data={[
                            {
                                title: "Total Bookings",
                                value: 145,
                                delta: "+11.0%",
                                deltaLabel: "Compared to last month",

                                Icon: TicketCheck,
                                iconColor: "#1FA05B",
                                iconBg: "bg-emerald-50",
                            },
                        ]}
                    />
                    <SingleStats
                        data={[
                            {
                                title: "Utilisation Rate",
                                value: "73%",
                                delta: "+11.0%",
                                deltaLabel: "Compared to last month",
                                Icon: Percent,
                                iconColor: "#329DFF",
                            },
                        ]}
                    />
                    <SingleStats
                        data={[
                            {
                                title: "Most Popular",
                                value: "Table Tennis",
                                delta: "+11.0%",
                                deltaLabel: "Compared to last month",
                                Icon: Ticket,
                                iconColor: "#FA7E28",
                            },
                        ]}
                    />
                    <SingleStats
                        data={[
                            {
                                title: "Pending Approvals",
                                value: 23,
                                delta: "-8.0%",
                                deltaLabel: "Compared to last month",
                                Icon: BanknoteArrowDown,
                                iconColor: "#AB0000",
                            },
                        ]}
                    />
                </div>
                <BookingsChart/>
            </div>
            <div className='grid grid-cols-2 gap-[24px] px-4'>
            <BookingTrendChart/>
            <AmenityWiseRevenue/>
            </div>
            
        </>
    )
}

export default index