import {NavigationAction} from '@react-navigation/native';
import {ReactNode} from 'react';

export interface IAllExpenses {}

export interface IRecentExpenses {
  expenses?: React.ReactNode;
}

export interface IManageExpenses {
  route?: any;
  navigation?: any;
  expensesCtx?:any;

}

export interface IExpensesOutput {
  expenses?: any;
  expensesperiod?: any;
  fallbacktext: string;
}

export interface IExpensesSummary {
  expenses?: any;
  periodname?: any;
}

export interface IExpensesList {
  expenses?: any;
}

export interface IExpensesItem {
  date?: any;
  id?: string;
  amount?: number;
  description?: string;
}

export interface IDate {
  toISOString(): any;
  getFullYear(): Date;
  getMonth(): any;
  getDate(): Date;
  date?: Date;

}

export interface IIconButton {
  name?: any;
  size?: number;
  color?: string;
  onPress?: any;
}

export interface IButton {
  style?: any;
  children?: ReactNode;
  onPress?: () => void;
  mode?: any;
}

export interface IExpenseForm {
  onCancel?: any;
  onSubmit?: any;
  submitButtonLabel?: any;
  amount?: any;
  defaultValues?:any;
  getFormattedDate?:any;
 
}

export interface IInput {
  label?: string;
  description?: string;
  amount?: number;
  date?: Date;
  textinputconfig?: object;
  multiline?: any;
}
export interface Ihhtp{
  storeExpense?:any;
}


export interface Iloading{

}
export interface IError{
  message?:any;
  onConfirm?:any;
}
