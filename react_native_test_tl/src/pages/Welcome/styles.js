import {StyleSheet} from 'react-native';

import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 50,
    width: '90%',
    borderRadius: 10,
    backgroundColor: colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingLeft: 10,
    borderRadius: 10,
  },
});

export default styles;
