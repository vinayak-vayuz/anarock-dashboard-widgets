import React from 'react'
import CommercialHeader from '../components/CommercialHeader'
import { Rows3  } from 'lucide-react';
import AssetsByType from './components/AssetsByType';
import MaintenanceStatus from './components/MaintenanceStatus';

function index() {
    return (
        <>
            <CommercialHeader text="Asset Management" Icon={Rows3 } iconColor="#A74E8A" />
            <div className='grid grid-cols-2 mt-4 gap-[24px]'>
                <AssetsByType/>
                <MaintenanceStatus/>
            </div>
            </>
  )
}

export default index