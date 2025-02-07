import { FC } from "react";
import { Iloading } from "../../constant/interface";
import { View,ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constant/styles";




const LoadingOverlay: FC<Iloading> = ()=>{
return <View style={styles.container}>
<ActivityIndicator size={"large"} color={'white'}/>
</View>
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700,
    },
});