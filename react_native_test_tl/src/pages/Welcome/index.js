import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import {colors} from '../../constants/colors';
import {userAuthRequest} from '../../store/modules/users/actions';

export default function Welcome() {
  const [email, setEmail] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userList.loading);

  function handleNavigate() {
    dispatch(userAuthRequest(email, navigation));
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="email"
        placeholderTextColor={colors.title}
        style={styles.input}
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        returnKeyLabel="send"
        returnKeyType="send"
        onSubmitEditing={handleNavigate}
      />

      <TouchableOpacity style={styles.btn} onPress={handleNavigate}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Text style={styles.btnText}>WELCOME</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
