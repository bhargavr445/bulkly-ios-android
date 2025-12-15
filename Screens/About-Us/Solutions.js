import { View, Text, StyleSheet } from "react-native";

export default function OurSolutionSection() {
    
    const solutions = [
        {
            icon: "✓",
            title: "Quality Verified",
            description:
                "Every vendor and product undergoes strict quality validation by our team before listing.",
        },
        {
            icon: "👥",
            title: "Direct from Manufacturers",
            description:
                "Connect directly with verified manufacturers, eliminating middlemen and markups.",
        },
        {
            icon: "↗",
            title: "Fair Bulk Pricing",
            description:
                "Production starts when minimum orders are reached, ensuring lower prices for everyone.",
        },
        {
            icon: "🛡",
            title: "100% Guaranteed",
            description:
                "Complete replacement guarantee and transparent vendor performance metrics.",
        },
    ];

    return (
        <>
            <Text style={styles.sectionTitle}>Our Solution</Text>
            <View style={styles.cardsWrapper}>
                {solutions.map((item) => (
                    <View key={item.title} style={styles.card}>
                        <View style={styles.iconCircle}>
                            <Text style={styles.iconText}>{item.icon}</Text>
                        </View>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardDescription}>{item.description}</Text>
                    </View>
                ))}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    sectionTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: "#0F172A",
        marginVertical: 22,
        textAlign: "center",
    },

    cardsWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 16,
    },

    card: {
        width: 170,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E6EEF6",
        borderRadius: 20,
        paddingVertical: 22,
        paddingHorizontal: 16,
        alignItems: "center",
    },

    iconCircle: {
        width: 52,
        height: 52,
        borderRadius: 999,
        backgroundColor: "#EAF1FF",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 14,
    },

    iconText: {
        fontSize: 18,
        color: "#2F6BFF",
        fontWeight: "700",
    },

    cardTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: "#0F172A",
        marginBottom: 6,
        textAlign: "center",
    },

    cardDescription: {
        fontSize: 13,
        lineHeight: 18,
        color: "#64748B",
        textAlign: "center",
    },
});