import React, { StyleSheet, Component } from 'react-native';
import { Card, AvatarSelectBar, Layout, Button } from '../widgets';
import { CollectionDataContainer } from '../containers';
import Text from '../widgets/Text';

const TESTPAGE = (props) => (
		<Card elevation={4} style={styles.bottomBar}>
      <CollectionDataContainer stateKey='deliverers' initFuncName='onRefresh' size={5}
        converter={datas => {
          const avatars = datas.map(data => {
            return { id: data.id, src: data.avatarUrl };
          });
          return { avatars };
        }}>
        <AvatarSelectBar onSelect={userId => console.log(userId)}/>
      </CollectionDataContainer>
      <Layout style={styles.test} row>
      	<Button block>ORDER NOW</Button>
      	<Button block>I AM DELIVERING</Button>
      </Layout>
      <Text>Li Ruiqi</Text>
		</Card>
);

const styles = StyleSheet.create({
  bottomBar: {
    marginTop: 100,
    height: 150
  },
  test: {
    backgroundColor: 'red'
  }
});

export default TESTPAGE;