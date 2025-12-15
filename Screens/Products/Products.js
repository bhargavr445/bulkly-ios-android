import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
    FlatList,
    Dimensions,
} from "react-native";

const DATA = [
    {
        id: "1",
        title: "SmartAir Pro 5000 Air Purifier",
        subtitle: "Medical-grade HEPA filtration with AI-powered air quality monitoring",
        orders: 324,
        goal: 1000,
        daysLeft: 173,
        fundedText: "32% funded",
        price: 7999,
        oldPrice: 12999,
        image:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=60",
    },
    {
        id: "2",
        title: "Reclaimed Wood Dining Table",
        subtitle: "Handcrafted 6-seater dining table from 100% reclaimed teak",
        orders: 324,
        goal: 1000,
        daysLeft: 173,
        fundedText: "32% funded",
        price: 18999,
        oldPrice: 27850,
        image:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=60",
    },
    {
        id: "3",
        title: "Heritage Leather Laptop Bag",
        subtitle: "Premium full-grain leather messenger bag with lifetime warranty",
        orders: 324,
        goal: 1000,
        daysLeft: 173,
        fundedText: "32% funded",
        price: 45999,
        oldPrice: 63500,
        image:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=60",
    },
];

function formatNumber(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ProgressBar({ value }) {
    const v = Math.max(0, Math.min(1, value));
    return (
        <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${v * 100}%` }]} />
        </View>
    );
}

function ProductCard({ item }) {
    const progress = item.orders / item.goal;

    return (
        <View style={[styles.card]}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />

            <View style={styles.cardBody}>
                <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                </Text>
                <Text style={styles.subtitle} numberOfLines={2}>
                    {item.subtitle}
                </Text>

                <View style={styles.ordersRow}>
                    <Text style={styles.metaLabel}>Orders</Text>
                    <Text style={styles.metaValue}>
                        {item.orders}/{item.goal}
                    </Text>
                </View>

                <ProgressBar value={progress} />

                <View style={styles.metaRow}>
                    <Text style={styles.metaText}>-{item.daysLeft} days left</Text>
                    <Text style={styles.metaText}>{item.fundedText}</Text>
                </View>

                <View style={styles.priceRow}>
                    <Text style={styles.price}>{formatNumber(item.price)}</Text>
                    <Text style={styles.oldPrice}>{formatNumber(item.oldPrice)}</Text>
                </View>

                <View style={styles.actionsRow}>
                    <Pressable style={styles.primaryBtn} onPress={() => { }}>
                        <Text style={styles.primaryBtnText}>View Details</Text>
                    </Pressable>

                    <Pressable style={styles.shareBtn} onPress={() => { }}>
                        <Text style={styles.shareIcon}>⤴︎</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default function LiveProductsSection() {
    // const screenW = Dimensions.get("window").width;

    // // Responsive card width:
    // // - phone: ~92% width
    // // - tablet/web: show 2 or 3 cards depending on width
    // const isLarge = screenW >= 900;
    // const isMedium = screenW >= 700 && screenW < 900;

    // const cardWidth = isLarge
    //     ? Math.floor((screenW - 48) / 3) // 3 cards
    //     : isMedium
    //         ? Math.floor((screenW - 40) / 2) // 2 cards
    //         : Math.floor(screenW - 28); // 1 card

    return (
        <ScrollView contentContainerStyle={styles.page}>
            <View style={styles.header}>
                <Text style={styles.h1}>Live Products</Text>
                <Text style={styles.h2}>
                    These products are actively collecting orders. Join others to unlock better prices!
                </Text>
            </View>

            {/* Horizontal on mobile, grid on tablet/web */}
             <View style={styles.grid}>
                {DATA.map((p) => (
                    <ProductCard key={p.id} item={p} />
                ))}
            </View>
        </ScrollView>
    );
}

const NAVY = "#0B1526";
const TEXT = "#0F172A";
const MUTED = "#64748B";
const BORDER = "#DDE8F3";
const TRACK = "#EEF2F7";
const FILL = "#1E2A5A";

const styles = StyleSheet.create({
    page: {
        paddingVertical: 18,
        paddingHorizontal: 14,
        backgroundColor: "#FFFFFF",
    },

    header: {
        marginBottom: 14,
    },
    h1: {
        fontSize: 18,
        fontWeight: "500",
        color: TEXT,
        marginBottom: 6,
        textAlign: "center"
    },
    h2: {
        fontSize: 16,
        color: MUTED,
        lineHeight: 22,
        textAlign: "center"
    },

    hList: {
        paddingTop: 8,
        paddingBottom: 18,
        gap: 14,
    },

    grid: {
        // flexDirection: "row",
        // flexWrap: "wrap",
        // justifyContent: "space-between",
        // gap: 14,
        paddingTop: 8,
        paddingBottom: 18,
    },

    card: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: BORDER,
        borderRadius: 22,
        overflow: "hidden",
        marginBottom: 14,

        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 10 },
        elevation: 3,
    },

    cardImage: {
        width: "100%",
        height: 220,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
    },

    cardBody: {
        paddingHorizontal: 18,
        paddingVertical: 16,
    },

    title: {
        fontSize: 18,
        fontWeight: "800",
        color: TEXT,
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        color: MUTED,
        lineHeight: 20,
        marginBottom: 14,
    },

    ordersRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    metaLabel: {
        fontSize: 13,
        color: TEXT,
        fontWeight: "600",
    },
    metaValue: {
        fontSize: 13,
        color: TEXT,
        fontWeight: "600",
    },

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

    metaRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 14,
    },
    metaText: {
        fontSize: 13,
        color: MUTED,
        fontWeight: "600",
    },

    priceRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 14,
    },
    price: {
        fontSize: 22,
        fontWeight: "900",
        color: "#0B5CAD", // blue price (like screenshot)
    },
    oldPrice: {
        fontSize: 16,
        color: "#94A3B8",
        textDecorationLine: "line-through",
        fontWeight: "600",
    },

    actionsRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    primaryBtn: {
        flex: 1,
        backgroundColor: NAVY,
        paddingVertical: 14,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
    },
    primaryBtnText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "800",
    },

    shareBtn: {
        width: 50,
        height: 50,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "#C9D6E6",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
    },
    shareIcon: {
        fontSize: 18,
        color: NAVY,
        fontWeight: "900",
    },
});