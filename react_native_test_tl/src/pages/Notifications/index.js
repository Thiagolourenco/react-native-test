import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import {colors} from '../../constants/colors';
import styles from './styles';

export default function Notifications() {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([
    {
      id: 1,
      message: 'Você recebeu uma solicação de conexão, deseja aceitar ?',
      datahora: '31/07/2020 às 16:00h',
    },
    {
      id: 2,
      message: 'Chegou uma nova mensagem, de Mathus',
      datahora: 'ontem às 16:00h',
    },
    {
      id: 1,
      message:
        'Olá Amigo tudo bem ?, já sabe da nova atualização, se não clica aqui e chega mais e vamos evoluir juntos.',
      datahora: '30/07/2020 às 10:00h',
    },
  ]);

  return (
    <View style={styles.container}>
      <Header
        label="Notificação"
        left={true}
        icon="left"
        color={colors.white}
        onPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {messages.map((item) => (
          <View key={item.id} style={styles.viewContent}>
            <Text style={styles.viewContentTitle}>{item.message}</Text>
            <Text style={styles.viewContentSubTitle}>{item.datahora}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
