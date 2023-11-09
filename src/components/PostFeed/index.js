import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import {styles} from './styles';
import {Images} from '../../assets';

const PostFeed = ({postList, handleLikeFlow}) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImageModal = (images, index) => {
    setSelectedImages(images);
    setSelectedIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImages([]);
    setSelectedIndex(null);
  };

  const highlightMentions = description => {
    const parts = description.split(/(@\S+)/g);
    return parts.map((part, index) => {
      if (part.startsWith('@')) {
        const username = part.slice(1);
        return (
          <Text key={index} style={styles.highlightedText}>
            {username}
          </Text>
        );
      } else {
        return <Text key={index}>{part}</Text>;
      }
    });
  };

  const renderImageItem = ({item, index}) => (
    <View style={styles.imageModalContainer}>
      <TouchableOpacity onPress={closeImageModal}>
        <Image source={{uri: item}} style={styles.modalImage} />
      </TouchableOpacity>
      <TouchableOpacity onPress={closeImageModal}>
        <Text style={styles.modalDescription}>Close</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {postList?.length > 0 ? (
          postList.map(item => {
            return (
              <View key={item.id} style={styles.postContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {item.images?.slice(0, 4).map((image, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => openImageModal(item.images, index)}>
                      <Image source={{uri: image}} style={styles.postImage} />
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <Text style={styles.description}>
                  {highlightMentions(item.description)}
                </Text>
                <TouchableOpacity onPress={() => handleLikeFlow(item.id)}>
                  {item.isLiked ? (
                    <Image
                      source={Images.likedHeart}
                      resizeMode="contain"
                      style={styles.image}
                    />
                  ) : (
                    <Image
                      source={Images.unlikedHeart}
                      resizeMode="contain"
                      style={styles.image}
                    />
                  )}
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <Text>There is no post available!</Text>
        )}
      </ScrollView>

      <Modal visible={selectedImages.length > 0} transparent={true}>
        <FlatList
          data={selectedImages}
          renderItem={renderImageItem}
          horizontal
          pagingEnabled
          initialScrollIndex={selectedIndex}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </Modal>
    </View>
  );
};

export default PostFeed;
