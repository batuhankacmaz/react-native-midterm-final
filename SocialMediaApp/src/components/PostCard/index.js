import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './PostCard.style';
import {useFetchPost} from '../../hooks/fetchData';

const PostCard = ({cardData, cardName, navigation, navigatePage}) => {
  const {postData, postError, postLoading} = useFetchPost(cardData.id);

  function navigateToPage() {
    navigation.navigate(navigatePage, postData);
  }

  return (
    <View>
      <TouchableOpacity style={styles.containerFree} onPress={navigateToPage}>
        <Text style={styles.text}>{cardData.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostCard;
