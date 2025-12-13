import { useRoute } from '@react-navigation/native';
import { Text } from "react-native";

export default function Contact() {

    const route = useRoute();
    const id = route.params.cId;

  return (
    <Text>Contact-{id}</Text>
  )
}
