import {StyleSheet, Platform} from 'react-native';

import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  gradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnAddInvestments: {
    width: 30,
    height: 25,
    backgroundColor: colors.primary,
    borderRadius: 5,

    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatTitle: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '600',
  },
  icon: {
    marginLeft: 5,
    color: colors.white,
  },
  chatContentHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewChatImage: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  chatImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#000',
  },
  chatTextName: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 10,
  },
  chatTextInfoActive: {
    fontSize: 12,
    color: '#ddd',
    marginRight: 10,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start',
  },
  itemOut: {
    alignSelf: 'flex-end',
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize: 12,
    color: '#808080',
  },
  item: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  textChat: {
    fontSize: 12,
  },
  viewSendInputMessage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  inputMessage: {
    marginLeft: 20,
    flex: 1,
    height: 40,
  },
  btnSend: {
    height: 30,
    width: 40,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default styles;
