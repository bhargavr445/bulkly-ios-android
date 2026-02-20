import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FairPricingSection() {
  return (
    <ScrollView style={styles.page}>
      {/* Top row */}
      <View style={styles.topRow}>
        <View style={styles.smallIcon}>
          <Ionicons name="trending-up" size={18} color="#fff" />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.topTitle}>Fair Pricing</Text>
          <Text style={styles.topSub}>
            Collective buying power for better prices.
          </Text>
        </View>
      </View>

      {/* Main Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>How We Ensure Fair Prices</Text>

        <Text style={styles.h2}>Bulk Purchase Model</Text>
        <Text style={styles.p}>
          Traditional retail involves multiple intermediaries, each adding markup.
          We connect you directly with manufacturers and use collective bulk
          ordering to unlock pricing usually reserved for large retailers.
        </Text>

        {/* Inner Light Box */}
        <View style={styles.innerBox}>
          <Text style={styles.innerTitle}>Price Breakdown Example</Text>

          {/* 2 columns (stacks on small screens automatically if you want) */}
          <View style={styles.twoCol}>
            <View style={styles.col}>
              <Text style={styles.colTitle}>Traditional Retail Price:</Text>
              <DashItem text="Manufacturer cost" />
              <DashItem text="Distributor / wholesaler / retailer markups (150%)" />
              <DashItem text="Logistics & overhead" />
            </View>

            <View style={styles.col}>
              <Text style={styles.colTitle}>Bulkly Direct Price:</Text>
              <DashItem text="Manufacturer cost" />
              <DashItem text="Platform fee (fair, transparent)" />
              <DashItem text="Logistics & quality assurance" />

              <Text style={styles.savingsText}>
                Your savings: ~40–50% vs typical retail
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.h2}>Transparent Pricing</Text>
        <Text style={styles.p}>
          We show complete price breakdowns including manufacturing cost, platform
          fee, logistics, and QA. No hidden charges.
        </Text>

        <Text style={styles.h2}>Share & Save More</Text>
        <View style={{ marginTop: 6, gap: 10 }}>
          <IconLine icon="trending-up" text="50% orders reached: +5% extra discount" />
          <IconLine icon="trending-up" text="75% orders reached: +10% extra discount" />
          <IconLine icon="trending-up" text="100% orders reached: +15% extra discount" />
        </View>

        <Text style={[styles.h2, { marginTop: 18 }]}>Price Protection</Text>
        <Text style={styles.p}>
          Once you place an order, your price is locked. If you find the same
          product cheaper elsewhere with comparable standards, we’ll match it.
        </Text>
      </View>
    </ScrollView>
  );
}

/* ---------- Small helpers ---------- */

function DashItem({ text }) {
  return (
    <View style={styles.dashRow}>
      <Text style={styles.dash}>–</Text>
      <Text style={styles.dashText}>{text}</Text>
    </View>
  );
}

function IconLine({ icon, text }) {
  return (
    <View style={styles.iconLine}>
      <Ionicons name={icon} size={16} color="#334155" />
      <Text style={styles.iconLineText}>{text}</Text>
    </View>
  );
}

/* ---------- Styles ---------- */

const BG = "#EEF7FF";
const BLUE = "#2D5BFF";
const CARD_BG = "#FFFFFF";
const BORDER = "#DDE8F3";
const INNER_BG = "#F1F8FF";

const TEXT = "#0F172A";
const MUTED = "#475569";
const GREEN = "#16A34A";

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

  // main card
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
    marginTop: 14,
    marginBottom: 6,
  },

  p: {
    fontSize: 14,
    color: MUTED,
    lineHeight: 21,
  },

  // inner box
  innerBox: {
    marginTop: 14,
    backgroundColor: INNER_BG,
    borderRadius: 16,
    padding: 14,
  },
  innerTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: TEXT,
    marginBottom: 10,
  },

  twoCol: {
    flexDirection: "row",
    gap: 14,
  },
  col: {
    flex: 1,
  },
  colTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: TEXT,
    marginBottom: 8,
  },

  dashRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 8,
  },
  dash: {
    width: 10,
    fontSize: 16,
    lineHeight: 20,
    color: MUTED,
    fontWeight: "700",
  },
  dashText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: TEXT,
  },

  savingsText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "800",
    color: GREEN,
  },

  iconLine: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconLineText: {
    flex: 1,
    fontSize: 14,
    color: TEXT,
    lineHeight: 20,
  },
});