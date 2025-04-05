import { View, Text, StyleSheet } from 'react-native';

export default function ProfileFormScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fill Out Your Emergency Info</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 18 },
});

