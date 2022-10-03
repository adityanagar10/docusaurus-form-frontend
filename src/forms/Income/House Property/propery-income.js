import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../actions/updateAction";

const PropertyIncome = (props) => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
  };


  useEffect(() => {
    actions.updateAction({ currentThirdLevelNav: 'property-income', currentThirdLevelNavPages: [], nextThirdLevelNav: '', prevThirdLevelNav: '/docs/income/house-property/property-type', currentPage: 0 })
}, [])

  return (
    <form onBlur={handleSubmit(onSubmit)}>
      <label>
      Gross Rent Received:
        <input {...register("grossRentReceived")} />
      </label>
      <label>
      Tax Paid local Auth:
        <input {...register("taxPaidlocalAuth")} />
      </label>
      <label>
      Annual Value:
        <input {...register("annualValue")} />
      </label>
      <label>
      Arrears Unrealized Rent Rcvd:
        <input {...register("arrearsUnrealizedRentRcvd")} />
      </label>
      <label>
      Total Income Of HP:
        <input {...register("totalIncomeOfHP")} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(PropertyIncome);
