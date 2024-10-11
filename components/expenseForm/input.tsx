import {FC} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {IInput} from '../../constant/interface';
import {GlobalStyles} from '../../constant/styles';

const Input: FC<IInput> = ({
  label,
  description,
  amount,
  date,
  textinputconfig,
  style,
}) => {
  const inputStyles = [styles.input];

  if (textinputconfig && textinputconfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <View style={[styles.container,style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textinputconfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 14,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
export default Input;
