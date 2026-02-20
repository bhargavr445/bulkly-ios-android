import React from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BottomModal({ children, visible, setVisible }) {

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            {/* X icon (top-left) */}
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.closeIcon}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Close modal"
            >
              <Ionicons name="close" size={24} color="#334155" />
            </TouchableOpacity>

            {/* handle */}
            <Pressable style={styles.handle} onPress={() => setVisible(false)} />
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },


  overlay: {
    flex: 1,
    backgroundColor: "rgba(79, 77, 77, 0.5)",
    justifyContent: "flex-end",
  },

  modalView: {
    backgroundColor: "#fdfdfdff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 18,         // give space for close icon + handle
    paddingBottom: 24,
    alignItems: "center",
    shadowColor: "#000",
    elevation: 5,
    height: "70%",
  },

  closeIcon: {
    position: "absolute",
    top: 14,
    right: 14,
    zIndex: 10,
  },

  handle: {
    width: 44,
    height: 8,
    backgroundColor: "#cbd5e1",
    borderRadius: 999,
    marginTop: 6,
    marginBottom: 18,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
    textAlign: "center",
    marginBottom: 8,
  },

  modalSubTitle: {
    fontSize: 14,
    color: "#475569",
    textAlign: "center",
    marginBottom: 18,
  },

  closeBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
  },
});