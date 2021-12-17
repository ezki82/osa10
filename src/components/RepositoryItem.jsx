import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const itemHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  imageContainer: {
    flexGrow: 0,
    padding: 10
  },
  nameText: {
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
  descText: {
    paddingBottom: 5,
    fontSize: 20,
    color: 'gray'
  },
  textContainer: {
    flexGrow: 1,
    padding: 10
  },
  languageText: {
    padding: 5,
    color: 'white',
    fontSize: 20
  },
  languageContainer: {
    backgroundColor: 'blue',
    flexGrow: 0,
    alignSelf: 'flex-start',
    alignItems: 'center',
    borderRadius: 5
  },
});

const ItemHeader = ({ item }) => {
  return (
    <View style={itemHeaderStyles.container}>
      <View style={itemHeaderStyles.imageContainer}>
        <Image source={{ uri: item.ownerAvatarUrl }}
          style={itemHeaderStyles.image} />
      </View>
      <View style={itemHeaderStyles.textContainer}>
        <Text style={itemHeaderStyles.nameText}>{item.fullName}</Text>
        <Text style={itemHeaderStyles.descText}>{item.description}</Text>
        <View style={itemHeaderStyles.languageContainer}>
          <Text style={itemHeaderStyles.languageText}>{item.language}</Text>
        </View>
      </View>
    </View>
  );
};

const itemInfoStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-around'
  }
});

const ItemInfo = ({ header, info }) => {
  return (
    <View style={itemInfoStyles.container}>
      <Text>{info}</Text>
      <Text>{header}</Text>
    </View>
  );
};

const itemInfoRowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

const ItemInfoRow = ({ item }) => {
  return (
    <View style={itemInfoRowStyles.container}>
      <ItemInfo header='Stars' info={item.stargazersCount} />
      <ItemInfo header='Forks' info={item.forksCount} />
      <ItemInfo header='Reviews' info={item.reviewCount} />
      <ItemInfo header='Rating' info={item.ratingAverage} />
    </View>
  );
};

const RepositoryItem = ({ item }) => (
  <View>
    <ItemHeader item={item} />
    <ItemInfoRow item={item} />
  </View>
);

export default RepositoryItem;