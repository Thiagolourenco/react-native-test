import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import Header from '../../components/Header';
import figura1 from '../../assets/homen.jpeg';
import figura2 from '../../assets/mulher.jpeg';
import {usersRequest} from '../../store/modules/users/actions';
import {colors} from '../../constants/colors';

Icon.loadFont();

export default function HomePage() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const dataUsers = useSelector((state) => state.userList.usersList);
  const userAuthId = useSelector((state) => state.userList.user);
  const loading = useSelector((state) => state.userList.loading);


  // MOCKS DE USUÁRIOS A SEREM CONECTADOS
  const data = [
    {
      id: 1,
      name: 'Thiago Lourenço',
      cargo: 'Mobile Developer',
      online: 'visto há 10 min',
      img: figura1,
    },
    {
      id: 2,
      name: 'Ana Carolina',
      cargo: 'Arquiteta',
      online: 'visto há 5 min',
      img: figura2,
    },
    {
      id: 3,
      name: 'Joao Matheus',
      cargo: 'Gamer',
      online: 'visto há 1 min',
      img: figura1,
    },
  ];

  useEffect(() => {
    dispatch(usersRequest(userAuthId.id));
  }, [userAuthId]);

  return (
    <View style={styles.container}>
      <Header
        label="We Dev Teste"
        right={true}
        icon="notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      {loading ? (
        <View style={styles.viewLoading}>
          <ActivityIndicator size="small" color={colors.primary} />
        </View>
      ) : (
        <>
          <ScrollView
            style={styles.viewScroll}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {data.map((item) => (
              <View style={styles.viewUserConnect} key={item.id}>
                <Image style={styles.viewUserConnectImg} source={item.img} />
                <Text style={styles.viewUserConnectTitle}>{item.name}</Text>
                <Text style={styles.viewUserConntectSubTitle}>
                  {item.cargo}
                </Text>

                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>CONECTAR</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          <FlatList
            data={dataUsers}
            style={styles.viewContentScroll}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.viewContentList}
                onPress={() => navigation.navigate('ProfileUser', {item})}
                activeOpacity={0.7}>
                <View style={styles.viewContentListView}>
                  <Image
                    style={styles.viewUserConnectImg}
                    source={{uri: item.avatar}}
                  />
                  <View style={styles.viewContentListText}>
                    <Text style={styles.viewContentListTitle}>{item.name}</Text>
                    <Text style={styles.viewContentListSubTitle}>
                      {item.visto}
                    </Text>
                  </View>
                </View>
                <View style={styles.viewContentStatus}>
                  <View
                    style={[
                      styles.viewContentListBollon,
                      {
                        backgroundColor:
                          item.status === 'online' ? '#1abc9c' : '#d63031',
                        borderColor:
                          item.status === 'online' ? '#2ecc71' : '#ff7675',
                      },
                    ]}
                  />
                  <Text style={styles.viewContentStatusText}>
                    {item.status}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
}
