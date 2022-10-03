import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../actions/updateAction";
const PropertyType = (props) => {
    const { register, handleSubmit } = useForm();
    const { actions, state } = useStateMachine({ updateAction });

    useEffect(() => {
        actions.updateAction({ currentThirdLevelNav: 'property-type', currentThirdLevelNavPages: [], nextThirdLevelNav: '/docs/income/house-property/expences', prevThirdLevelNav: '/docs/income/salary/salary-details', currentPage: 0 })
    }, [])

    const onSubmit = (data) => {
        actions.updateAction(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Emp Info:
            </label>
            <select {...register("propertyType")} >
                <option key='S' value='S'>Self Occupied</option>
                <option key='L' value='L'>Let Out</option>
                <option key='D' value='D'>Deemed let out</option>
            </select>
            <input type="submit" />
        </form>
    );
};

export default withRouter(PropertyType);
