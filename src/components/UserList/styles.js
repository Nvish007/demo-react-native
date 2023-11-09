import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    // paddingHorizontal: 80,
    // borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
  },
  listView: {
    flexDirection: 'row',
    paddingHorizontal: 90,
    padding: 8,
  },
  userText: {
    fontWeight: 'bold',
    color: '#000',
    position: 'absolute',
    left: 20,
    top: 12,
  },
  btnContainer: {
    marginLeft: '90%',
    borderRadius: 4,
    width: 60,
    paddingVertical: 5,
  },
  btnTextStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 12,
  },
});
