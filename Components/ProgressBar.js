import { StyleSheet, View } from "react-native";

export default function ProgressBar({ value }) {
    const v = Math.max(0, Math.min(1, value));
    return (
        <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${v * 100}%` }]} />
        </View>
    );
}

const TRACK = "#EEF2F7";
const FILL = "#1E2A5A";

const styles = StyleSheet.create({
    progressTrack: {
        width: "100%",
        height: 8,
        borderRadius: 999,
        backgroundColor: TRACK,
        overflow: "hidden",
        marginBottom: 10,
    },
    progressFill: {
        height: "100%",
        borderRadius: 999,
        backgroundColor: FILL,
    },
})