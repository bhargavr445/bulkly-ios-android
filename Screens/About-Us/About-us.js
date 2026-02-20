import { ScrollView, StyleSheet, Text, View } from "react-native";
import OurSolutionSection from './Solutions';

export default function AboutUs() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Section 1: Top header band */}
        <View style={styles.headerBand}>
          <Text style={styles.mainTitle}>Redefining Trust in E-commerce</Text>
        </View>

        {/* Section 2: Problem + card */}
        <View style={styles.problemWrap}>
          <Text style={styles.sectionTitle}>The Problem We're Solving</Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Today's e-commerce platforms are overcrowded with low-quality,
              mass-marketed products, leaving customers confused and uncertain
              about what to trust. Reviews are unreliable, and genuine,
              high-quality or innovative products struggle to stand out against
              aggressive marketing.
              {"\n\n"}
              Customers deserve better. They deserve transparency, quality, and
              fair prices. That's why we created Bulkly.
            </Text>
          </View>
        </View>

        <OurSolutionSection />
      </ScrollView>
    </>

  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  container: {
    paddingBottom: 30,
  },

  container: {
    paddingBottom: 10,
    paddingHorizontal: 4,
    // alignItems: "center",
  },

  // Header band (light blue strip)
  headerBand: {
    backgroundColor: "#EAF6FF",
    paddingTop: 26,
    paddingBottom: 26,
    paddingHorizontal: 18,
    alignItems: "center",
  },
  kicker: {
    fontSize: 13,
    color: "#64748B",
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
  },

  // Problem section
  problemWrap: {
    paddingHorizontal: 18,
    paddingTop: 34,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 14,
    textAlign: "center",
  },

  // Rounded white card
  card: {
    width: "100%",
    maxWidth: 900,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6EEF6",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#64748B",
  },
});