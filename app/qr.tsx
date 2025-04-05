import { View, Text, StyleSheet } from 'react-native';

export default function QRScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Check-In QR Code</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 18 },
});

