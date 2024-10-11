import {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import { IExpensesItem } from '../../constant/interface';
import { GlobalStyles } from '../../constant/styles';
import getFormattedDate from '../util/date';

const ExpensesItem: FC<IExpensesItem> = ({id, description, amount, date}) => {
  const navigation: any = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpenses', {expenseId: id});
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.itemcontainer}>
        <View>
          <Text style={styles.text}> {description} </Text>
          <Text style={styles.text}> {getFormattedDate(date)} </Text>
        </View>
        <View style={styles.amountcontainer}>
          <Text style={styles.amount}> {amount?.toFixed(2)} </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  itemcontainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    elevation: 7,
  },
  text: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  amountcontainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '20%',
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});

export default ExpensesItem