import React from 'react'
import CommercialHeader from '../components/CommercialHeader'
import { NotebookPen, ClipboardList, ImagePlus, ListChecks, Notebook } from 'lucide-react';
import SingleStats from '../commercial-amenities/components/Stats';

function index() {
    return (
        <>
            <CommercialHeader text="Engagement" Icon={NotebookPen} iconColor="#3C81F6" />
            <div className='grid grid-cols-4 gap-[24px] mt-4'>

                <SingleStats
                    data={[
                        {
                            title: "Notice",
                            value: 20,
                            deltaLabel: "Currently active",
                            Icon: ClipboardList,
                            iconColor: "#1FA05B",
                        },
                    ]}
                />
                <SingleStats
                    data={[
                        {
                            title: "Discussion Forum",
                            value: 9,
                            deltaLabel: "Active threads",
                            Icon: ImagePlus,
                            iconColor: "#329DFF",
                        },
                    ]}
                />
                <SingleStats
                    data={[
                        {
                            title: "Polls",
                            value: 3,
                            deltaLabel: "Currently active",
                            Icon: ListChecks,
                            iconColor: "#FA7E28",
                        },
                    ]}
                />
                <SingleStats
                    data={[
                        {
                            title: "Surveys",
                            value: 8,
                            deltaLabel: "Currently active",
                            Icon: Notebook,
                            iconColor: "#DBB467",
                        },
                    ]}
                />
            </div>
        </>
    )
}

export default index