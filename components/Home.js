import { Pressable, Text, View } from 'react-native';

export default function Home({navigation}) {

    function navigateTo(path, id) {
        navigation.navigate(path, { cId: id });
    }

    return (
        <View style={{ padding: 16, gap: 12 }}>

            <Pressable onPress={() => navigateTo('About', 10)}>
                <Text>About Us</Text>
            </Pressable>

            <Pressable onPress={() => navigateTo('Contact', 20)}>
                <Text>Contact</Text>
            </Pressable>

        </View>
    );
}