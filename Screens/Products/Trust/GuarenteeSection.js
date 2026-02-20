import React from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GuaranteeSection() {
  return (
    <ScrollView style={styles.page}>
      {/* Top row */}
      <View style={styles.topRow}>
        <View style={styles.smallIcon}>
          <Ionicons name="shield-checkmark" size={18} color="#fff" />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.topTitle}>100% Guaranteed</Text>
          <Text style={styles.topSub}>
            Your satisfaction and trust are our top priority.
          </Text>
        </View>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>What Our Guarantee Covers</Text>

        <Text style={styles.h2}>100% Replacement Guarantee</Text>
        <Text style={styles.p}>
          If you receive a product with any manufacturing defect, damage during
          transit, or quality issue, we replace it at absolutely no cost to you.
        </Text>

        {/* Check list */}
        <View style={styles.list}>
          <CheckItem text="Manufacturing defects – lifetime coverage" />
          <CheckItem text="Transit damage – full protection" />
          <CheckItem text="Quality mismatch – 30–60 day returns (product dependent)" />
          <CheckItem text="Wrong item delivered – immediate replacement" />
        </View>

        {/* Numbered list */}
        <Text style={[styles.h2, { marginTop: 18 }]}>Hassle-Free Process</Text>

        <View style={styles.steps}>
          <StepItem n={1} text="Raise a request through your profile or contact support." />
          <StepItem n={2} text="Provide photos / description (takes ~2 minutes)." />
          <StepItem n={3} text="We review and approve within 24 hours." />
          <StepItem n={4} text="Replacement shipped within 48 hours." />
        </View>

        {/* Footer */}
        <Text style={[styles.h2, { marginTop: 18 }]}>Quality Commitment</Text>
        <Text style={styles.p}>
          We stand behind every product on our platform. Our return rate is
          consistently below 2%, compared to an industry average of 15–20%.
        </Text>
      </View>
    </ScrollView>
  );
}

/* ---------- Subcomponents ---------- */

function CheckItem({ text }) {
  return (
    <View style={styles.checkRow}>
      <Ionicons name="checkmark-circle" size={18} color="#16A34A" />
      <Text style={styles.checkText}>{text}</Text>
    </View>
  );
}

function StepItem({ n, text }) {
  return (
    <View style={styles.stepRow}>
      <Text style={styles.stepNum}>{n}.</Text>
      <Text style={styles.stepText}>{text}</Text>
    </View>
  );
}

/* ---------- Styles ---------- */

const BG = "#EEF7FF";
const BLUE = "#2D5BFF";
const CARD_BG = "#FFFFFF";
const BORDER = "#DDE8F3";

const TEXT = "#0F172A";
const MUTED = "#475569";

const styles = StyleSheet.create({
  page: {
    backgroundColor: BG,
    padding: 16,
  },

  // top row
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 14,
  },
  smallIcon: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: BLUE,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  textBlock: { flex: 1 },
  topTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: TEXT,
  },
  topSub: {
    marginTop: 3,
    fontSize: 14,
    color: MUTED,
    lineHeight: 20,
  },

  // card
  card: {
    backgroundColor: CARD_BG,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 20,
    padding: 18,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: TEXT,
    marginBottom: 10,
  },

  h2: {
    fontSize: 16,
    fontWeight: "800",
    color: TEXT,
    marginTop: 10,
    marginBottom: 6,
  },

  p: {
    fontSize: 14,
    color: MUTED,
    lineHeight: 21,
  },

  list: {
    marginTop: 10,
    gap: 8,
  },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  checkText: {
    flex: 1,
    fontSize: 14,
    color: TEXT,
    lineHeight: 20,
  },

  steps: {
    marginTop: 6,
    gap: 10,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  stepNum: {
    width: 18,
    fontSize: 14,
    fontWeight: "700",
    color: MUTED,
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: MUTED,
    lineHeight: 20,
  },
});