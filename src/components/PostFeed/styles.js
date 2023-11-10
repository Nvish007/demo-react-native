import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 80,
    // backgroundColor: '#fff',
  },
  postContainer: {
    height: 210,
    paddingHorizontal: 20,
    margin: 3,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    opacity: 0.9,
  },
  description: {
    fontSize: 16,
    marginTop: 4,
  },
  postImage: {
    width: 100,
    height: 100,
    marginTop: 5,
    marginRight: 8,
    borderRadius: 8,
  },
  imageModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    paddingHorizontal: 60,
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  modalDescription: {
    color: 'white',
    fontSize: 18,
    marginTop: 16,
  },
  image: {
    height: 30,
    width: 30,
  },
  highlightedText: {
    fontWeight: 'bold',
    color: '#000',
  },
  textStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
