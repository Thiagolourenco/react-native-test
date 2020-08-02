import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIo from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import face from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import {colors} from '../../constants/colors';
import {photosRequest} from '../../store/modules/photos/actions';

Icon.loadFont();
IconIo.loadFont();

export default function ProfileUser() {
  const navigation = useNavigation();
  const routes = useRoute();
  const dispatch = useDispatch();

  const userProfile = routes.params.item;

  const photoList = useSelector((state) => state.photo.photoList);
  const loading = useSelector((state) => state.photo.loading);

  useEffect(() => {
    dispatch(photosRequest(userProfile.id));
  }, [userProfile]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.viewHeaderProfile}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="left" color="#fff" size={20} />
          </TouchableOpacity>
          <View style={styles.imageProfile}>
            <Image
              style={styles.imageHeaderProfile}
              source={{uri: userProfile.avatar}}
            />
          </View>
          <View style={styles.viewWW} />
        </View>

        <Text style={styles.textName}>{userProfile.name}</Text>
        <Text style={styles.textNameEmail}>{userProfile.email}</Text>
        <Text style={styles.textNameDesc}>{userProfile.description}</Text>
        {userProfile.rede ? (
          <View style={styles.viewSocialMedia}>
            <Image style={styles.viewSocialMediaBollon} source={face} />
            <Image style={styles.viewSocialMediaBollon} source={insta} />
            <Image style={styles.viewSocialMediaBollon} source={twitter} />
          </View>
        ) : (
          <View />
        )}
      </View>
      <View style={{flex: 1}}>
        {loading ? (
          <View style={styles.loadingGallery}>
            <ActivityIndicator size="small" color={colors.primary} />
          </View>
        ) : (
          <FlatList
            data={photoList}
            style={styles.viewGallery}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            numColumns={3}
            renderItem={({item}) => (
              <Image style={styles.viewImageGallery} source={{uri: item.url}} />
            )}
          />
        )}
      </View>

      <TouchableOpacity
        style={styles.btnChat}
        onPress={() => navigation.navigate('ChatMessage', {userProfile})}
        activeOpacity={0.7}>
        <IconIo
          name="chatbubble-ellipses-sharp"
          size={35}
          color={colors.primary}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
