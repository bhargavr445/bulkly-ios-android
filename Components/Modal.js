import { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function BottomModal() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.button}>
        <Text style={{ color: 'white' }}>Open Bottom Window</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            <View style={styles.handle} />
            <Text style={styles.modalText}>This is your bottom window!</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={{ color: 'red' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { backgroundColor: '#0d70adff', padding: 15, borderRadius: 8 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(79, 77, 77, 0.5)', // Dim the background
    justifyContent: 'flex-end', // Align modal to bottom
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
    height: '50%', // Set height of the bottom window
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
    marginBottom: 15,
  },
});