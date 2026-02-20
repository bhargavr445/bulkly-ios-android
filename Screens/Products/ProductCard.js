import { useNavigation } from "@react-navigation/native";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable
} from "react-native";
import ProgressBar from "../../Components/ProgressBar";
import { format } from "date-fns";

function formatNumber(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function ProductCard({ item, isLive }) {
    const progress = item.ordersPlaced / item.ordersRequired;
    const navigation = useNavigation();


    function navigateToProductDetails() {
        // alert('nav failed...');
        navigation.navigate('ProductDetails');
    }

    return (
        <View style={[styles.card]}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=60' }} style={styles.cardImage} />

            <View style={styles.cardBody}>
                {!isLive && <View style={styles.badge}>
                    <Text style={styles.text}>Coming Soon</Text>
                </View>}
                <Text style={styles.title} numberOfLines={2}>
                    {item.name}
                </Text>
                <Text style={styles.subtitle} numberOfLines={2}>
                    {item.description}
                </Text>

                {isLive ? (
                    <View>
                        <View style={styles.ordersRow}>
                            <Text style={styles.metaLabel}>Orders</Text>
                            <Text style={styles.metaValue}>
                                {item.ordersPlaced}/{item.ordersRequired}
                            </Text>
                        </View>

                        <ProgressBar value={progress} />

                        <View style={styles.metaRow}>
                            <Text style={styles.metaText}>-{item.daysLeft} days left</Text>
                            <Text style={styles.metaText}>{item.fundedText}</Text>
                        </View>
                    </View>) : 
                    <>
                        <View style={styles.ordersRow}>
                            <Text style={styles.comingSoonInfo}>📅 Product Live Date</Text>
                            <Text style={styles.metaInfo}>{ format(item.productLiveTime, 'MM/dd/yyyy')}</Text>
                        </View>
                        <View style={styles.ordersRow}>
                            <Text style={styles.comingSoonInfo}>👥 People Interested</Text>
                            <Text style={styles.metaInfo}>{item.interestedPeopleCount}</Text>
                        </View>
                    </>
                    
                    }

                <View style={styles.priceRow}>
                    <Text style={styles.price}>{formatNumber(item.offerPrice)}</Text>
                    <Text style={styles.oldPrice}>{formatNumber(item.actualPrice)}</Text>
                    {isLive ? (<View style={styles.actionsRow}>
                        <Pressable style={styles.primaryBtn} onPress={() => navigateToProductDetails()}>
                            <Text style={styles.primaryBtnText}>View Details</Text>
                        </Pressable>

                        <Pressable style={styles.shareBtn} onPress={() => { }}>
                            <Text style={styles.shareIcon}>⤴︎</Text>
                        </Pressable>
                    </View>) : <View style={styles.actionsRow}>
                        <Pressable style={styles.secondaryBtn}>
                            <Text style={styles.secondaryBtnText}>Show Interest</Text>
                        </Pressable>

                        <Pressable style={styles.shareBtn} onPress={() => { }}>
                            <Text style={styles.shareIcon}>⤴︎</Text>
                        </Pressable>
                    </View>}
                </View>
            </View>
        </View>
    );
}

const NAVY = "#0B1526";
const TEXT = "#0F172A";
const MUTED = "#64748B";
const BORDER = "#DDE8F3";

const styles = StyleSheet.create({
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
    badge: {
        alignSelf: "flex-start", // keeps pill width tight to content
        backgroundColor: "#1F4D2B", // dark green
        paddingHorizontal: 18,
        paddingVertical: 8,
        marginBottom: 14,
        borderRadius: 999, // fully rounded pill
    },
    text: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0.3,
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
        backgroundColor: NAVY,
        paddingVertical: 14,
        paddingHorizontal: 14,
        marginHorizontal: 14,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
    },
    primaryBtnText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "800",
    },

    secondaryBtn: {
        backgroundColor: '#f8fafc',
        borderWidth: 1,
        borderColor: BORDER,
        paddingVertical: 14,
        paddingHorizontal: 14,
        marginHorizontal: 14,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
    },
    secondaryBtnText: {
        color: "#0B1526",
        fontSize: 14,
        fontWeight: "800",
    },

    metaInfo: {
        fontSize: 13,
        color: '#0084d1',
        fontWeight: "600",
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

    comingSoonInfo: {
        fontSize: 14,
        color: '#45556c',
        lineHeight: 14,
        marginBottom: 14,
    },

    ordersRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },
    hList: {
        paddingTop: 8,
        paddingBottom: 18,
        gap: 14,
    },
    grid: {
        paddingTop: 8,
        paddingBottom: 18,
    }
})