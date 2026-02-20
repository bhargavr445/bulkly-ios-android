import React from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const STEPS = [
    {
        title: "Vendor Validation",
        body:
            "Every manufacturer undergoes a comprehensive background check including business licenses, certifications (ISO 9001, ISO 14001), facility inspections, and financial stability assessment. We verify production capacity, quality control systems, and compliance with labor laws.",
    },
    {
        title: "Product Testing",
        body:
            "Our in-house team conducts rigorous testing on sample products — functionality, durability, safety checks, and material verification. We also engage NABL-accredited third-party labs for independent validation.",
    },
    {
        title: "Certification Requirements",
        body:
            "Products must meet strict certification standards based on category. All documents are verified directly with issuing authorities.",
    },
    {
        title: "Continuous Monitoring",
        body:
            "Quality doesn’t stop at approval. We track return rates, perform surprise audits, and review customer feedback. Vendors with poor performance are reviewed or delisted.",
    },
];

const FEATURES = [
    {
        title: "Third-Party Testing",
        body: "All products tested by NABL-accredited labs.",
        icon: "ribbon-outline",
    },
    {
        title: "Complete Documentation",
        body: "Test reports & certificates available for every product.",
        icon: "document-text-outline",
    },
    {
        title: "Batch Quality Logs",
        body: "Every production batch is tracked with quality records.",
        icon: "cube-outline",
    },
];

export default function QualityVerifiedSection() {
    const { width } = useWindowDimensions();

    // 3 cards row on wide, 2 on medium, 1 on small
    const cols = width >= 900 ? 3 : width >= 600 ? 2 : 1;

    return (
        <ScrollView contentContainerStyle={styles.page}>
            {/* Top row */}
            <View style={styles.topRow}>
                <View style={styles.smallIcon}>
                    <Ionicons name="checkmark" size={18} color="#fff" />
                </View>

                <View style={styles.textBlock}>
                    <Text style={styles.topTitle}>Quality Verified</Text>
                    <Text style={styles.topSub}>
                        Rigorous testing and validation before every listing.
                    </Text>
                </View>
            </View>

            {/* Main card */}
            <View style={styles.mainCard}>
                <Text style={styles.cardHeading}>Our Quality Assurance Process</Text>

                {STEPS.map((s, idx) => (
                    <View key={s.title} style={styles.stepRow}>
                        <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>{idx + 1}</Text>
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.stepTitle}>{s.title}</Text>
                            <Text style={styles.stepBody}>{s.body}</Text>
                        </View>
                    </View>
                ))}
            </View>

            {/* Feature cards */}
            <View style={styles.featuresGrid}>
                {FEATURES.map((f) => (
                    <View key={f.title} style={[styles.featureCard, { width: `${100 / cols}%` }]}>
                        <View style={styles.featureIconWrap}>
                            <Ionicons name={f.icon} size={18} color="#0f172a" />
                        </View>

                        <Text style={styles.featureTitle}>{f.title}</Text>
                        <Text style={styles.featureBody}>{f.body}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const BLUE = "#2D5BFF";
const TEXT = "#0F172A";
const MUTED = "#475569";
const BORDER = "#dbeafe"; // soft blue border
const CARD_BORDER = "#dbe5f1";
const BG = "#f6fbff";

const styles = StyleSheet.create({
    page: {
        padding: 18,
        backgroundColor: BG,
        gap: 16,
    },

    // Top row
    topRow: {
        flexDirection: "row",
        alignItems: "flex-start", // 👈 aligns text block nicely
        gap: 12,
    },
    smallIcon: {
        height: 28,
        width: 28,
        borderRadius: 14,
        backgroundColor: BLUE,
        alignItems: "center",
        justifyContent: "center",
    },

    bigIcon: {
        height: 40,
        width: 40,
        borderRadius: 29,
        backgroundColor: BLUE,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 10 },
        elevation: 5,
    },
    topTitle: {
        fontSize: 18,
        fontWeight: "800",
        textAlign: "center",
        color: TEXT,
    },
    textBlock: {
        flex: 1,
    },

    topTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: TEXT,
    },

    topSub: {
        marginTop: 2,
        fontSize: 14,
        color: MUTED,
        lineHeight: 18,
    },

    // Main card
    mainCard: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: CARD_BORDER,
        borderRadius: 18,
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 10 },
        elevation: 3,
    },
    cardHeading: {
        fontSize: 16,
        fontWeight: "800",
        color: TEXT,
        marginBottom: 10,
    },

    stepRow: {
        flexDirection: "row",
        gap: 12,
        paddingVertical: 12,
    },
    stepNumber: {
        height: 44,
        width: 44,
        borderRadius: 22,
        backgroundColor: "#e6f0ff",
        borderWidth: 1,
        borderColor: BORDER,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
    },
    stepNumberText: {
        fontSize: 16,
        fontWeight: "800",
        color: BLUE,
    },
    stepTitle: {
        fontSize: 15,
        fontWeight: "800",
        color: TEXT,
        marginBottom: 6,
    },
    stepBody: {
        fontSize: 13.5,
        color: MUTED,
        lineHeight: 20,
    },

    // Feature cards grid
    featuresGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    featureCard: {
        padding: 10,
    },
    featureCardInner: {},
    featureIconWrap: {
        height: 44,
        width: 44,
        borderRadius: 22,
        backgroundColor: "#eef6ff",
        borderWidth: 1,
        borderColor: BORDER,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 10,
    },

    // Real feature box
    featureCardBox: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: CARD_BORDER,
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 14,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 8 },
        elevation: 2,
        minHeight: 140,
    },

    featureTitle: {
        fontSize: 14.5,
        fontWeight: "800",
        color: TEXT,
        textAlign: "center",
        marginBottom: 6,
    },
    featureBody: {
        fontSize: 13,
        color: MUTED,
        textAlign: "center",
        lineHeight: 18,
    },
});