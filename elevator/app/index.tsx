import React, { useState } from 'react';
import { ScrollView, View, Text, Switch, SafeAreaView } from 'react-native';

const noticias = [
  { id: 1, titulo: "Manutenção Preditiva", desc: "Sensores IoT reduzem paradas em 40%." },
  { id: 2, titulo: "Elevadores Magnéticos", desc: "A nova era sem cabos de aço." }
];

export default function App() {
  const [dark, setDark] = useState(false);

  const theme = {
    bg: dark ? '#000' : '#fff',
    text: dark ? '#fff' : '#000', 
    card: dark ? '#222' : '#f0f0f0'
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
        <Text style={{ color: theme.text }}>Modo Escuro</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {noticias.map(n => (
          <View key={n.id} style={{ backgroundColor: theme.card, padding: 15, marginBottom: 10, borderRadius: 10 }}>
            <Text style={{ color: theme.text, fontSize: 18, fontWeight: 'bold' }}>{n.titulo}</Text>
            <Text style={{ color: theme.text }}>{n.desc}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}