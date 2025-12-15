import { Ionicons } from '@expo/vector-icons';
import { Pressable } from "react-native";


export default function IconButton({ iconName, size, color }) {
    return (
        <Pressable>
            <Ionicons
                name={iconName}
                size={size}
                color={color} />
        </Pressable>
    )
}
