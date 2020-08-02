import {StyleSheet} from 'react-native';

import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 60,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  viewTransparent: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
});

export default styles;
