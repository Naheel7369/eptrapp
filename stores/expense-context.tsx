import {createContext, useReducer} from 'react';



export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}: any) => {},
  setExpenses:(expenses: any) =>{},
  deleteExpense: (id: any) => {},
  updateExpense: (id: any, {description, amount, date}: any) => {},
});

function ExpensesReducer(state: any[], action: any) {
  switch (action.type) {
    case 'Add':
      
      return [action.payload, ...state];
      case'SET':
      const inverted =action.payload.reverse();
      return inverted;
      // return action.payload;

    case 'Delete':
      return state.filter((expense: any) => expense.id !== action.payload);

    case 'Update':
      const updateableExpenseIndex = state.findIndex(
        (expense: any) => expense.id === action.payload.id,
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = {...updateableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;

    default:
      return state;
  }
}

function ExpensesContextProvider({children}: any) {
  const [ExpensesState, dispatch] = useReducer(ExpensesReducer,[] );

  function addExpense(expenseData: any) {
    dispatch({type: 'Add', payload: expenseData});
  }

  function setExpenses(expenses: any){
    dispatch({type:'SET', payload:expenses})
  }

  function deleteExpense(id: any) {
    dispatch({type: 'Delete', payload: id});
  }

  function updateExpense(id: any, expenseData: any) {
    dispatch({type: 'Update', payload: {id: id, data: expenseData}});
  }

  const value: any = {
    expenses: ExpensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
    setExpenses:setExpenses
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;