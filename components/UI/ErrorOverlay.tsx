import {FC} from 'react';
import {IError} from '../../constant/interface';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {GlobalStyles} from '../../constant/styles';
import Button from './Button';

const ErrorOverlay: FC<IError> = ({message, onConfirm}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text,styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});
