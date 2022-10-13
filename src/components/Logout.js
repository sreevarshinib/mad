import { auth } from "../../firebase";
import {useNavigation} from "@react-navigation/native"
import { ToastAndroid } from 'react-native'

export default function Logout() {
    const navigation =useNavigation();
    auth.signOut()
        .then(() => {navigation.navigate('Login');
        ToastAndroid.showWithGravity(
            "User Logged out",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
});
}