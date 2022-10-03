import { useStateMachine } from "little-state-machine";
import React, { useEffect } from "react";
import updateAction from "../actions/updateAction";
import NameAndPan from "./PersonalInfo/PersonalInfo_Details/Tax_Payer_Info/NameAndPan/NameAndPan";
import PAN from "./PersonalInfo/PersonalInfo_Details/Tax_Payer_Info/NameAndPan/PAN";
import AadhaarDetails from "./PersonalInfo/PersonalInfo_Details/Tax_Payer_Info/AadhaarDetails"
import Address from "./PersonalInfo/PersonalInfo_Details/Tax_Payer_Info/Address"

const pagesArray = ['NameAndPan', 'PAN', 'AadhaarDetails', 'Address']

const TaxPayerDetails = () => {

    const { actions, state } = useStateMachine({ updateAction })
    useEffect(() => {
        actions.updateAction({ ...state, currentThirdLevelNav: 'tax-payer-details', currentThirdLevelNavPages: pagesArray, nextThirdLevelNav: '/docs/income/salary/emp-info', prevThirdLevelNav: '', currentPage: state.currentPage })
    }, [])

    if (state.currentPage === 0) {
        return <NameAndPan />
    }

    if (state.currentPage === 1) {
        return <PAN />
    }

    if (state.currentPage === 2) {
        return <Address />
    }

    if (state.currentPage === 3) {
        return <AadhaarDetails />
    }
}

export default TaxPayerDetails