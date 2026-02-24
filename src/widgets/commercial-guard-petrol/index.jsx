
import CommercialHeader from '../components/CommercialHeader'
import { ShieldCheck } from 'lucide-react';
import GuardPatrols from './components/PatrolStatus';
import IncidentReports from './components/IncidentReports';
import StaffAttendance from '../gate-and-security/component/StaffAttendance';

function index() {
    return (
        <>
            <CommercialHeader text="Guard Petrol" Icon={ShieldCheck} iconColor="#AB0000" />
            <div className='px-4 grid grid-cols-3 gap-[24px] mt-4'>
           <GuardPatrols/>
           <IncidentReports/>
           <StaffAttendance/>
            </div>
        </>
    )
}

export default index

