import React, { StyleSheet, Component } from 'react-native';
import { Card, AvatarSelectBar, Layout, Button, Text } from '../widgets';
import { CollectionDataContainer } from '../containers';
import OrderingPanel from '../components/OrderingPanel';

const TESTPAGE = (props) => (
		<Card elevation={4} style={styles.bottomBar}>
      <CollectionDataContainer stateKey='deliverers' initFuncName='onRefresh' size={5}
        converter={datas => {
          const avatars = datas.map(data => {
            return { id: data.id, src: data.avatarUrl, name: data.name };
          });
          return { avatars };
        }}>
        <OrderingPanel onSelect={id => console.log(id)}/>
      </CollectionDataContainer>
		</Card>
);

const styles = StyleSheet.create({
  bottomBar: {
    marginTop: 100,
    height: 180
  }
});

export default TESTPAGE;