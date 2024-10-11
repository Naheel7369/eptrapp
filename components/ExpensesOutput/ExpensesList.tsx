import {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import ExpensesItem from './ExpenseItem';
import { IExpensesList } from '../../constant/interface';

function renderExpenseItem(itemData: any) {
  return <ExpensesItem {...itemData.item} />;
}

const ExpensesList: FC<IExpensesList> = ({expenses}) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpensesList;