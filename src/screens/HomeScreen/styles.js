import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  subContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
  },
  tabButtonStyle: {
    marginRight: 30,
    borderRadius: 50,
    width: 70,
  },
  tabButtonStyle2: {
    marginLeft: 10,
    borderRadius: 50,
    width: 70,
  },
  tabButtonTextStyle: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  floatingButtonStyle: {
    position: 'absolute',
    bottom: 20,
    left: 160,
    backgroundColor: '#2986f0',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    color: 'white',
    fontSize: 24,
  },
});
