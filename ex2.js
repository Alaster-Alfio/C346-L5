import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from 'react-native';

// Step 2: Replace the data source with SectionList data
const datasource = [
  {
    data: [
      { key: 'a' },
      { key: 'e' },
      { key: 'i' },
      { key: 'o' },
    ],
    title: 'Vowels',
    backgroundColor: '#ADD8E6', // Light blue
  },
  {
    data: [
      { key: 'b' },
      { key: 'c' },
      { key: 'd' },
      { key: 'f' },
      { key: 'g' },
      { key: 'h' },
      { key: 'j' },
      { key: 'k' },
      { key: 'l' },
      { key: 'm' },
      { key: 'n' },
      { key: 'p' },
      { key: 'q' },
    ],
    title: 'Consonants',
    backgroundColor: '#FFFACD', // Light yellow
  },
];

// Step 4: Create the renderItem function
const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};

export default function Ex2() {
  return (
      <View style={styles.container}>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, backgroundColor } }) => (
                <View
                    style={[
                      styles.headerContainer,
                      { backgroundColor: backgroundColor || '#f0f0f0' },
                    ]}
                >
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
            keyExtractor={(item, index) => `${item.key}-${index}`}
        />
        <StatusBar style="auto" />
      </View>
  );
}

// Step 3 & Step 5: Add styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10, // White space around the list
  },
  opacityStyle: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 5,
    padding: 5,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  headerContainer: {
    paddingVertical: 5,
  },
});
