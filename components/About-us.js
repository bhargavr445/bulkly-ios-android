import { useRoute } from '@react-navigation/native';
import { Text, View } from "react-native";

export default function AboutUs() {

    const route = useRoute();
    const id = route.params.cId;

    return (
        <View>
            <Text>About us - {id}</Text>
        </View>
    )
}