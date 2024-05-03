import { View, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Tab() {
  return (
    <View style={{flex: 1, backgroundColor: '#041214'}}>
      <StatusBar style="light" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#041214'}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: 'white'}}>A theoretical profile page.</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
