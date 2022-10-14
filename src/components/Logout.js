import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native"

export default function Logout() {
    const navigation = useNavigation();
    auth.signOut()
        .then(() => {
            alert("Logged out");
            navigation.navigate('Login');
        });
}