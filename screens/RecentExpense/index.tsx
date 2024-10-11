import React, {FC, useContext, useEffect, useState} from 'react';
import ExpensesOutput from '../../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../../stores/expense-context';
import { IRecentExpenses } from '../../constant/interface';
import { getdateminusdays } from '../../components/util/date';
import { fetchData } from '../../components/util/http';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import ErrorOverlay from '../../components/UI/ErrorOverlay';

const RecentExpenses: FC<IRecentExpenses> = () => {
  const expensesCtx = useContext(ExpensesContext);

  const [isfetching, setisfetching] = useState(true);
  const [error, seterror] = useState<any>();

  useEffect(() => {
    async function getExpenses() {
      try {
        const expenses = await fetchData();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        seterror('Could not fetch expenses!');
      }
      setisfetching(false);
    }
    getExpenses();
  }, [fetchData]);

  if (error && !isfetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isfetching) {
    return <LoadingOverlay/>;
  }

  const recentExpenses = expensesCtx.expenses.filter((expenses: any) => {
    const today = new Date();
    const date7daysago = getdateminusdays(today, 7);
    return expenses.date >= date7daysago && expenses.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesperiod="Last 7 Days"
      fallbacktext="No expenses registered in last 7 days"
    />
  );
};

export default RecentExpenses;
