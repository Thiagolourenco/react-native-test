import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

//icons
import IconA from 'react-native-vector-icons/AntDesign';
import IconIo from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {colors} from '../../constants/colors';
import styles from './styles';
import Header from '../../components/Header';

IconA.loadFont();
IconIo.loadFont();
Icon.loadFont();

export default function ChatMessage() {
  const navigation = useNavigation();
  const routes = useRoute();

  const userChat = routes.params.userProfile;

  const [data, setData] = useState([
    {
      id: 1,
      date: '9:50 am',
      type: 'in',
      message: 'Olá João tudo bom ?',
    },
    {
      id: 2,
      date: '9:50 am',
      type: 'out',
      message: 'Tudo Sim, e com você',
    },
    {
      id: 3,
      date: '9:50 am',
      type: 'out',
      message:
        'Ai, com que você trabalha, eu sou um sonhador em busca de conseguir conquista meus objetivos',
    },
    {
      id: 4,
      date: '9:50 am',
      type: 'in',
      message:
        'Fala João, cara eu sou Desenvolvedor Mobile, focado em React Native, mais gosto bastante de me aventurar em outras techs, como nodejs, adonisjs e nestjs. E também gosto de brincar com Flutter',
    },
    {
      id: 5,
      date: '9:50 am',
      type: 'out',
      message: 'Legal',
    },
  ]);
  return (
    <View style={styles.container}>
      <Header
        label="Chat"
        left={true}
        icon="left"
        color={colors.white}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.chatContent}>
        <View style={styles.chatContentHeader}>
          <View style={styles.viewChatImage}>
            <Image source={{uri: userChat.avatar}} style={styles.chatImage} />
            <Text style={styles.chatTextName}>{userChat.name}</Text>
          </View>
          <Text style={styles.chatTextInfoActive}>{userChat.visto}</Text>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <View
            style={[
              styles.item,
              {
                backgroundColor:
                  item.type === 'in' ? colors.subTitle : colors.primary,
                borderBottomRightRadius: item.type === 'in' ? 30 : 5,
                borderTopLeftRadius: item.type === 'in' ? 5 : 30,
                alignSelf: item.type === 'in' ? 'flex-start' : 'flex-end',
              },
            ]}>
            <View style={[styles.balloon]}>
              <Text
                style={[
                  styles.textChat,
                  {
                    color: item.type === 'in' ? '#000' : '#fff',
                  },
                ]}>
                {item.message}
              </Text>
            </View>
          </View>
        )}
      />

      <View style={styles.viewSendInputMessage}>
        <TextInput
          placeholder="Type Message to send"
          style={styles.inputMessage}
        />
        <TouchableOpacity style={styles.btnSend} activeOpacity={0.7}>
          <IconIo name="ios-send" color={colors.white} size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
