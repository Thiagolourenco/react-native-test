import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './styles';
import profileImage from '../../assets/homen.jpeg';
import {colors} from '../../constants/colors';
import {userAuthUpdateRequest} from '../../store/modules/users/actions';

Icon.loadFont();
IconAnt.loadFont();

export default function Settings() {
  const [imageUri, setImageUri] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [visto, setVisto] = useState('');
  const [status, setStatus] = useState('');

  const [editable, setEditable] = useState(false);
  const [editableEmail, setEditableEmail] = useState(false);
  const [editableDescription, setEditableDescription] = useState(false);

  const dispatch = useDispatch();

  const userAuthId = useSelector((state) => state.userList.user);
  const loading = useSelector((state) => state.userList.loading);

  useEffect(() => {
    setName(userAuthId.name);
    setEmail(userAuthId.email);
    setDescription(userAuthId.description);
    setImageUri(userAuthId.avatar);
    setVisto(userAuthId.visto);
    setStatus(userAuthId.status);
  }, [userAuthId]);

  // name, email, avatar, description, visto, status
  function handleUpdateUser() {
    dispatch(
      userAuthUpdateRequest(
        userAuthId.id,
        name,
        email,
        imageUri,
        description,
        visto,
        status,
      ),
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile</Text>

        <ScrollView>
          <Text style={styles.labelPhoto}>Photo</Text>
          <View style={styles.viewUploadPhoto}>
            <View style={styles.viewImage}>
              {imageUri ? (
                <Image source={{uri: imageUri}} style={styles.imagePhotoUser} />
              ) : (
                <Image source={{uri: imageUri}} style={styles.imagePhotoUser} />
              )}
            </View>
            <TouchableOpacity
              style={styles.btnEditPhoto}
              activeOpacity={0.7}
              onPress={() => {}}>
              <Icon name="camera" color={colors.white} size={15} />
            </TouchableOpacity>
          </View>
          <Text style={styles.labelPhoto}>Name</Text>

          <View style={styles.viewEditTextInput}>
            <TextInput
              value={name}
              onChangeText={setName}
              editable={editable}
              style={styles.input}
              placeholder="name"
              placeholderTextColor={colors.title}
            />
            <TouchableOpacity
              style={styles.btnEditPhoto}
              activeOpacity={0.7}
              onPress={() => setEditable(!editable)}>
              <IconAnt name="edit" color={colors.white} size={15} />
            </TouchableOpacity>
          </View>

          <Text style={styles.labelPhoto}>Email</Text>
          <View style={styles.viewEditTextInput}>
            <TextInput
              value={email}
              // defaultValue={}
              onChangeText={setEmail}
              editable={editableEmail}
              style={styles.input}
              placeholder="email"
              placeholderTextColor={colors.title}
            />
            <TouchableOpacity
              style={styles.btnEditPhoto}
              activeOpacity={0.7}
              onPress={() => setEditableEmail(!editableEmail)}>
              <IconAnt name="edit" color={colors.white} size={15} />
            </TouchableOpacity>
          </View>
          <Text style={styles.labelPhoto}>Description</Text>
          <View style={styles.viewEditTextInputDesc}>
            <TextInput
              value={description}
              onChangeText={setDescription}
              editable={editableDescription}
              style={styles.input}
              placeholder="description"
              placeholderTextColor={colors.title}
              multiline={true}
              scrollEnabled={true}
            />
            <TouchableOpacity
              style={styles.btnEditPhoto}
              activeOpacity={0.7}
              onPress={() => setEditableDescription(!editableDescription)}>
              <IconAnt name="edit" color={colors.white} size={15} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={handleUpdateUser}
            activeOpacity={0.7}>
            {loading ? (
              <ActivityIndicator size="small" color={colors.white} />
            ) : (
              <Text style={styles.btnText}>SAVE</Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
