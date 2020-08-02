import {StyleSheet, Platform} from 'react-native';

import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: Platform.OS === 'ios' ? '50%' : '35%',
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  imageProfile: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textName: {
    fontSize: 16,
    color: colors.title,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textNameEmail: {
    color: colors.subTitle,
    fontSize: 12,
    marginTop: 5,
    opacity: 0.5,
    fontWeight: '600',
  },
  textNameDesc: {
    color: colors.subTitle,
    fontSize: 14,
    marginTop: 5,
    opacity: 0.6,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  viewSocialMedia: {
    position: 'absolute',
    bottom: -20,
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewSocialMediaBollon: {
    height: 40,
    width: 40,
    marginLeft: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: colors.shadow,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 4,
    shadowRadius: 4,
    // elevation: 2,
    backgroundColor: '#fff',
  },
  viewGallery: {
    alignSelf: 'center',
    flexGrow: 2,
    marginTop: 30,
  },
  viewImageGallery: {
    height: 90,
    width: 90,
    borderRadius: 10,
    margin: 2,
    backgroundColor: '#000',
  },
  viewHeaderProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageHeaderProfile: {
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  viewWW: {
    height: 10,
    width: 30,
    backgroundColor: 'transparent',
  },
  btnChat: {
    backgroundColor: 'transparent',
    height: 50,
    width: 50,
    borderRadius: 40,
    position: 'absolute',
    bottom: 30,
    left: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingGallery: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
