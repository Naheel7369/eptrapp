import {FC, useContext} from 'react';
import { IAllExpenses } from '../../constant/interface';
import { ExpensesContext } from '../../stores/expense-context';
import ExpensesOutput from '../../components/ExpensesOutput/ExpensesOutput';

const AllExpenses: FC<IAllExpenses> = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesperiod="total"
      fallbacktext="There are no expenses"
    />
  );
};

export default AllExpenses;