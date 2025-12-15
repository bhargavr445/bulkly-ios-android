import { useRoute } from '@react-navigation/native';
import { Text, ScrollView, View, StyleSheet } from "react-native";

export default function Contact() {

  const route = useRoute();
  const id = route.params?.cId;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerBand}>
        <Text style={styles.mainTitle}>Have questions? We're here to help!</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Get in Touch</Text>

        <View style={styles.row}>
          <Text style={styles.icon}>✉️</Text>
          <View style={styles.rowText}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>support@bulkly.com</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.icon}>📞</Text>
          <View style={styles.rowText}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>+91 800-123-4567</Text>
            <Text style={styles.subValue}>Mon–Sat, 9AM–6PM IST</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.icon}>📍</Text>
          <View style={styles.rowText}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>Bulkly Headquarters</Text>
            <Text style={styles.value}>Mumbai, Maharashtra</Text>
            <Text style={styles.value}>India</Text>
          </View>
        </View>
      </View>

      {/* Quick Help */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quick Help</Text>

        <View style={styles.linkRow}>
          <Text style={[styles.icon, styles.iconQuestion]}>?</Text>
          <Text style={styles.linkText}>FAQs</Text>
        </View>

        <View style={styles.linkRow}>
          <Text style={styles.icon}>🛡️</Text>
          <Text style={styles.linkText}>Return Policy</Text>
        </View>

        <View style={styles.linkRow}>
          <Text style={styles.icon}>💬</Text>
          <Text style={styles.linkText}>Help Center</Text>
        </View>
      </View>

      {/* Business Hours */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Business Hours</Text>

        <View style={styles.hoursRow}>
          <Text style={styles.hoursLeft}>Monday – Friday</Text>
          <Text style={styles.hoursRight}>9:00 AM – 6:00 PM</Text>
        </View>

        <View style={styles.hoursRow}>
          <Text style={styles.hoursLeft}>Saturday</Text>
          <Text style={styles.hoursRight}>10:00 AM – 4:00 PM</Text>
        </View>

        <View style={styles.hoursRow}>
          <Text style={styles.hoursLeft}>Sunday</Text>
          <Text style={styles.hoursRight}>Closed</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingHorizontal: 4,
    // alignItems: "center",
  },
  headerBand: {
    backgroundColor: "#EAF6FF",
    paddingTop: 26,
    paddingBottom: 26,
    paddingHorizontal: 18,
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
  },
  container: {
    // paddingVertical: 18,
    // gap: 16,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDE8F3",
    borderRadius: 24,
    paddingVertical: 22,
    paddingHorizontal: 18,
    marginHorizontal: 10,
    marginVertical: 10,
    // Soft shadow
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#0F172A",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    paddingVertical: 6,
  },
  icon: {
    width: 24,
    fontSize: 14,
    marginTop: 2,
    textAlign: "center",
  },
  iconQuestion: {
    color: "#E11D48", // red ?
    fontWeight: "900",
  },
  rowText: { flex: 1 },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 2,
  },
  value: {
    fontSize: 14,
    color: "#334155",
    lineHeight: 16,
  },
  subValue: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },

  linkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
  },
  linkText: {
    fontSize: 14,
    color: "#334155",
    // fontWeight: "500",
  },

  hoursRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  hoursLeft: {
    fontSize: 14,
    color: "#334155",
    // fontWeight: "400",
  },
  hoursRight: {
    fontSize: 14,
    color: "#334155",
    // fontWeight: "400",
  },
});

