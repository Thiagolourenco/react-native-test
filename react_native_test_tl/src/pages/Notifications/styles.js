import {StyleSheet} from 'react-native';

import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContent: {
    height: 80,
    width: '90%',
    backgroundColor: colors.secondary,
    borderRadius: 10,
    shadowColor: colors.shadow,
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
    elevation: 1,
    alignSelf: 'center',
    marginTop: 20,
    borderLeftColor: colors.primary,
    borderLeftWidth: 2,
    paddingLeft: 5,
    paddingRight: 5,
  },
  viewContentTitle: {
    color: colors.title,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 5,
  },
  viewContentSubTitle: {
    color: colors.subTitle,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default styles;
