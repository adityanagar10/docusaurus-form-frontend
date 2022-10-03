import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../actions/updateAction";

const SalaryDetails = (props) => {
  const { register, handleSubmit } = useForm();

  
  useEffect(() => {
    actions.updateAction({ currentThirdLevelNav: 'salary-details', currentThirdLevelNavPages: [], nextThirdLevelNav: '/docs/income/house-property/property-type', prevThirdLevelNav: '/docs/income/salary/emp-info', currentPage: 0 })
}, [])
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
  };

  return (
    <form onBlur={handleSubmit(onSubmit)}>
      <label>
       Gross Salary:
        <input {...register("grossSalary")} />
      </label>
      <label>
      Salary:
        <input {...register("salary")} />
      </label>
      <label>
      Perquisites Value:
        <input {...register("perquisitesValue")} />
      </label>
      <label>
      Profits In Salary:
        <input {...register("profitsInSalary")} />
      </label>
      <label>
      IncomeNotified89A:
        <input {...register("incomeNotified89A")} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(SalaryDetails);
