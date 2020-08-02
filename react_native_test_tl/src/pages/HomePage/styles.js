import {StyleSheet} from 'react-native';

import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewScroll: {
    marginTop: 20,
  },
  viewUserConnect: {
    height: 130,
    width: 150,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.shadow,
    shadowOffset: {
      height: 5,
      width: 7,
    },
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 0.4,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewUserConnectImg: {
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: '#000',
  },
  viewUserConnectTitle: {
    fontSize: 16,
    color: colors.title,
    fontWeight: '600',
    marginTop: 5,
  },
  viewUserConntectSubTitle: {
    color: colors.subTitle,
    fontSize: 12,
    marginTop: 4,
  },
  btn: {
    marginTop: 10,
  },
  btnText: {
    color: colors.btnText,
    fontSize: 14,
    fontWeight: '500',
  },
  viewContentScroll: {
    marginLeft: 20,
    marginRight: 20,
  },
  viewContentList: {
    marginTop: 10,
    backgroundColor: colors.secondary,
    width: '100%',
    height: 80,
    borderRadius: 15,
    shadowColor: colors.shadow,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 0.4,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  viewContentListView: {
    flexDirection: 'row',
  },
  viewContentListText: {
    marginLeft: 10,
  },
  viewContentListTitle: {
    fontSize: 14,
    color: colors.title,
    fontWeight: '700',
  },
  viewContentListSubTitle: {
    fontSize: 12,
    color: colors.subTitle,
    fontWeight: '600',
    marginTop: 5,
  },
  viewContentListBollon: {
    height: 10,
    width: 10,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: '#1abc9c',
    borderColor: '#2ecc71',
  },
  viewContentStatus: {
    alignItems: 'center',
  },
  viewContentStatusText: {
    fontSize: 10,
    color: colors.subTitle,
    fontWeight: 'bold',
    marginTop: 5,
  },
  viewLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
