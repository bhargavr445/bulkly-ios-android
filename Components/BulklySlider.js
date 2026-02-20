import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions
} from "react-native";

const BLUE = "#2D5BFF";
const TEXT = "#0F172A";
const MUTED = "#64748B";
const BG = "#F6FAFF";

export default function BulklySlider({data}) {

  const { width } = Dimensions.get("window");
  const CARD_GAP = 16;
  const H_PADDING = 16;

  // Card width is a bit smaller than screen so it looks like a carousel
  const CARD_WIDTH = Math.min(780, width - H_PADDING * 2);
  const SNAP_INTERVAL = CARD_WIDTH + CARD_GAP;

  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onMomentumEnd = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    const idx = Math.round(x / SNAP_INTERVAL);
    setActiveIndex(idx);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.card, { width: CARD_WIDTH, marginRight: CARD_GAP }]}>
        <View style={styles.stepCircle}>
          <Text style={styles.stepText}>{item.step}</Text>
        </View>

        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>How Bulkly Works</Text>

      <FlatList
        ref={listRef}
        data={data}
        keyExtractor={(item) => String(item.step)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: H_PADDING }}
        renderItem={renderItem}
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="fast"
        bounces={false}
        onMomentumScrollEnd={onMomentumEnd}
        // Helps snapping accuracy on iOS
        snapToAlignment="start"
        // optional: avoid jitter
        getItemLayout={(_, index) => ({
          length: SNAP_INTERVAL,
          offset: SNAP_INTERVAL * index,
          index,
        })}
      />

      {/* Dots */}
      <View style={styles.dotsRow}>
        {data?.map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <View
              key={i}
              style={[
                styles.dot,
                isActive ? styles.dotActive : styles.dotInactive,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: BG,
    paddingVertical: 22,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: TEXT,
    textAlign: "center",
    marginBottom: 16,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E6EEF8",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },

  stepCircle: {
    height: 62,
    width: 62,
    borderRadius: 31,
    backgroundColor: BLUE,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,

    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },

  stepText: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: TEXT,
    textAlign: "center",
    marginBottom: 10,
  },

  cardDesc: {
    fontSize: 16,
    color: MUTED,
    textAlign: "center",
    lineHeight: 24,
  },

  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14,
    gap: 8,
  },

  dot: {
    height: 8,
    borderRadius: 999,
  },

  dotActive: {
    width: 22,
    backgroundColor: BLUE,
  },

  dotInactive: {
    width: 8,
    backgroundColor: "#C7D6F5",
  },
});