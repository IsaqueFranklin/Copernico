import { View, Text, SafeAreaView } from 'react-native';

export default function Tab() {
  return (
   <SafeAreaView style={{flex: 1, backgroundColor: '#041214', color: 'white'}}>
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={{color: 'white'}}>Home page where all the stuff will be.</Text>
    </View>
   </SafeAreaView> 
  )
}
