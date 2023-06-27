/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={[]}
        renderItem={() => {
          return (
            <View
              style={{
                backgroundColor: 'red',
                height: 100,
                borderRadius: 20,
                marginBottom: 22,
              }}>
              <Text>Render Item</Text>
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>Empty List</Text>
            </View>
          );
        }}
        onEndReached={() => {
          console.log('onEndReached');
        }}
        initialNumToRender={20}
      />
    </SafeAreaView>
  );
}

export default App;
