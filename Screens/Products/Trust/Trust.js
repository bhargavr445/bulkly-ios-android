import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomModal from "../../../Components/Modal";
import QualityVerifiedSection from "./Quality";
import GuaranteeSection from "./GuarenteeSection";
import FairPricingSection from "./FairPricing";


const ITEMS = [
  { label: "Quality Verified", icon: "checkmark", ID: 'QA', },
  { label: "100% Guaranteed", icon: "shield-checkmark", ID: '1G', },
  { label: "Fair Pricing", icon: "trending-up", ID: 'FP', },
  { label: "Direct from Makers", icon: "people", ID: 'DFV', },
];

export default function TrustSection() {

  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  function resetVisible() {
    setVisible(false);
  }

  function showModelForItem(item) {
    console.log(item);
    setSelectedItem(item);
    setVisible(true);
  }

  return (
    <View style={styles.section}>
      <Text style={styles.kicker}>Redefining Trust in E-commerce</Text>

      <Text style={styles.title}>
        Quality-verified products directly from manufacturers. Fair prices
        through collective buying. 100% guaranteed.
      </Text>

      {/* Icons Row */}

      <View style={styles.row}>
        {ITEMS.map((item) => (
          <Pressable
            key={item.label}
            style={styles.item}
            onPress={() => showModelForItem(item)}
            android_ripple={{ color: "rgba(255,255,255,0.2)", borderless: true }}
          >
            <View style={styles.iconCircle}>
              <Ionicons name={item.icon} size={22} color="#FFFFFF" />
            </View>
            <Text style={styles.label}>{item.label}</Text>
          </Pressable>
        ))}
      </View>
      <BottomModal visible={visible} setVisible={resetVisible}>
        {selectedItem?.ID === 'QA' ? <QualityVerifiedSection /> : null}
        {selectedItem?.ID === '1G' ? <GuaranteeSection /> : null}
        {selectedItem?.ID === 'FP' ? <FairPricingSection /> : null}
        {selectedItem?.ID === 'DFV' ? <GuaranteeSection /> : null}
      </BottomModal>
    </View>
  );
}

const BG = "#EEF7FF";
const BLUE = "#2D5BFF";
const TEXT = "#0F172A";
const MUTED = "#475569";

const styles = StyleSheet.create({
  section: {
    backgroundColor: BG,
    paddingVertical: 20,
    paddingHorizontal: 14,
  },

  kicker: {
    textAlign: "center",
    fontSize: 12,
    color: MUTED,
    fontWeight: "600",
    marginBottom: 6,
  },

  title: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    color: TEXT,
    marginBottom: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 4,
  },

  iconCircle: {
    height: 30,
    width: 30,
    borderRadius: 26,
    backgroundColor: BLUE,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  label: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: "400",
    color: TEXT,
    textAlign: "center",
  },
});