import {FC} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IIconButton } from '../../constant/interface';
import { GlobalStyles } from '../../constant/styles';

const IconButton: FC<IIconButton> = ({name, color, size, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.iconcontainer}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconcontainer: {
    margin: 10,
    borderColor: GlobalStyles.colors.primary100,
    padding: 1,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default IconButton