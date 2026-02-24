import React from 'react'
import CommercialHeader from '../components/CommercialHeader'
import { Utensils , Ticket, Logs, Star } from 'lucide-react';
import SingleStats from '../commercial-amenities/components/Stats';
import BookingsChart from '../commercial-amenities/components/BookingTrendChart'
import AmenityWiseRevenue from '../commercial-amenities/components/AmenityWiseRevenue'

function index() {
    return (
        <>
            <CommercialHeader text="Food Orders" Icon={Utensils } iconColor="#FA7E28" />
            <div className='grid grid-cols-4 gap-[24px] mt-4'>

                <SingleStats
                    data={[
                        {
                            title: "Gross Revenue",
                            value: "₹1.66L",
                            deltaLabel: "Compared to last month",
                            Icon: Ticket,
                            delta: "+11.0%",
                            iconColor: "#FA7E28",
                        },
                    ]}
                />
                <SingleStats
                    data={[
                        {
                            title: "Total Orders",
                            value: "1.60L",
                            delta: "+11.0%",
                            deltaLabel: "Compared to last month ",
                            Icon: Logs,
                            iconColor: "#1FA05B",
                        },
                    ]}
                />
                <SingleStats
                    data={[
                        {
                            title: "Avg. Order Value",
                            value: "₹600",
                            deltaLabel: "Per Order",
                            Icon: Utensils,
                            iconColor: "#FA7E28",
                        },
                    ]}
                />
                <SingleStats
                    data={[
                        {
                            title: "Top Organisation",
                            value: "Google",
                            delta: "+11%",
                            deltaLabel: "Compared to last month",
                            Icon: Star,
                            iconColor: "#DBB467",
                        },
                    ]}
                />
            </div>
            <div className='grid grid-cols-2 gap-[24px] mt-4'>
                <BookingsChart/>
                <AmenityWiseRevenue/>
            </div>
        </>
    )
}

export default index