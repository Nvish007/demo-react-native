import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Image,
  Button,
  Modal,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {addNewPost} from '../../redux/user/userSlice';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const CreatePost = () => {
  const {userList, postList} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const maxImageCount = 4;
  const [isUserModalVisible, setUserModalVisible] = useState(false);
  const [isImageOptionsModalVisible, setImageOptionsModalVisible] =
    useState(false);
  const [filteredFollowingUsers, setFilteredFollowingUsers] = useState([]);

  useEffect(() => {
    const followingUsers = userList.filter(user => user.isFollowing);
    setFilteredFollowingUsers(followingUsers);
  }, [userList]);

  const openImageOptionsModal = () => {
    setImageOptionsModalVisible(true);
  };

  const closeImageOptionsModal = () => {
    setImageOptionsModalVisible(false);
  };

  const openImagePicker = async type => {
    setImageOptionsModalVisible(false);
    const options = {
      title: 'Select Images',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    if (type === 'camera') {
      await launchCamera(options, response => {
        if (response.didCancel) {
          console.log('didCancel');
        } else if (response.error) {
          console.log('error', response.error);
        } else {
          if (images.length < maxImageCount) {
            setImages([...images, response?.assets[0]?.uri]);
          } else {
            console.log('user exceeds the image limit');
          }
        }
      });
      return;
    }

    await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('didCancel');
      } else if (response.error) {
        console.log('error', response.error);
      } else {
        if (images.length < maxImageCount) {
          setImages([...images, response.assets[0].uri]);
        } else {
          console.log('user exceeds the image limit');
        }
      }
    });
  };

  const createPost = () => {
    if (description === '') {
      Alert.alert('Please add description');
      return;
    }
    if (!(images.length > 0)) {
      Alert.alert('Please add at least one image');
      return;
    }
    const data = {
      id: postList.length,
      description,
      images,
      isLiked: false,
    };
    dispatch(addNewPost(data));
    navigation.navigate('Home');
  };

  const handleDescriptionChange = text => {
    setDescription(text);
    if (text === '') {
      console.log('isEmpty');
    }
    if (text.endsWith('@') && !text.endsWith('@@')) {
      setUserModalVisible(true);
    }
  };

  const handleUserSelect = user => {
    const updatedDescription = description.replace(/@(\w*)$/, `@${user} `);

    setDescription(updatedDescription);
    setUserModalVisible(false);

    // setFilteredFollowingUsers(prevUsers =>
    //   prevUsers.filter(u => u.Name !== user),
    // );
  };

  const submitBtnBackground =
    description !== '' && images.length > 0 ? '#2986f0' : '#8f8f8f';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.submitBtnContainer,
          {backgroundColor: submitBtnBackground},
        ]}
        onPress={createPost}>
        <Text style={styles.submitBtnText}>Create Post</Text>
      </TouchableOpacity>

      <TextInput
        value={description}
        onChangeText={handleDescriptionChange}
        placeholder="Write your description..."
        multiline={true}
        numberOfLines={4}
        style={styles.inputStyle}
      />
      <Modal
        visible={isUserModalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <ScrollView>
            {filteredFollowingUsers?.map(user => (
              <Button
                key={user.Id}
                title={user.Name}
                onPress={() => handleUserSelect(user.Name)}
              />
            ))}
            <Button title="Close" onPress={() => setUserModalVisible(false)} />
          </ScrollView>
        </View>
      </Modal>

      <ScrollView horizontal style={styles.scrollStyle}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{uri: image}}
            style={styles.imageContainer}
          />
        ))}
      </ScrollView>

      {images.length < maxImageCount && (
        <Button title="Add Image" onPress={openImageOptionsModal} />
      )}

      <Modal
        visible={isImageOptionsModalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.optionModalContainer}>
          <View style={styles.optionModalSubContainer}>
            <TouchableOpacity onPress={() => openImagePicker('camera')}>
              <Text style={styles.modalBtnText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openImagePicker('gallery')}>
              <Text style={styles.modalBtnText}>Choose from Library</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeImageOptionsModal}>
              <Text style={[styles.modalBtnText, {color: 'red'}]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreatePost;
