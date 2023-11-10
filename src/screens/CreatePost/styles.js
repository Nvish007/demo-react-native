import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },
  submitBtnContainer: {
    borderRadius: 50,
    width: 140,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputStyle: {
    marginTop: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 90,
    marginTop: 80,
  },
  scrollStyle: {
    marginTop: 20,
  },
  imageContainer: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 15,
  },
  optionModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  optionModalSubContainer: {
    backgroundColor: 'white',
    padding: 16,
  },
  modalBtnText: {
    fontSize: 18,
    padding: 10,
  },
  listImageContainer: {
    height: 130,
    width: 130,
  },
  btnWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  closeIcon: {
    height: 20,
    width: 20,
  },
});
