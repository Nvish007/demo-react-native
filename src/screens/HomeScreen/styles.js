import {StyleSheet} from 'react-native';
import {colors, isIOS} from '../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginTop: isIOS() ? 30 : 0,
  },
  subContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
  },
  tabButtonStyle: {
    marginRight: 30,
    borderRadius: 40,
    width: 80,
    paddingVertical: 10,
  },
  tabButtonStyle2: {
    marginLeft: 10,
    borderRadius: 50,
    width: 80,
    paddingVertical: 10,
  },
  tabButtonTextStyle: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  floatingButtonStyle: {
    position: 'absolute',
    bottom: 20,
    left: 180,
    backgroundColor: colors.blue,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: 24,
  },
});
