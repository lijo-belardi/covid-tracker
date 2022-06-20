import React, {useContext} from 'react'
import { AllGlobalDataContext } from '../../context/AllGlobalData'

const AllDataSection = () => {
    const [data, setData] = useContext(AllGlobalDataContext)
    console.log(data);
    
    return (
        <div>AllDataSection</div>
    )
}

export default AllDataSection