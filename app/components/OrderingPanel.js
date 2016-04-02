import React, { PropTypes, StyleSheet } from 'react-native';
import { Layout, Text, Button, AvatarSelectBar } from '../widgets';

let OrderingPanel = ({avatars, onSelect, onMakeOrder}) => (
	<Layout style={styles.container}>
		<Layout style={styles.container} padding cneter alignCenter>
			<Text wMode='sub' wSize='sm'>
				{avatars?`${avatars[0].name} ${avatars.length===1?'is':(' and '+avatars.length+' others are')} now delivering`:'Nobody delivering right now :('}
			</Text>
			<AvatarSelectBar avatars={avatars} onSelect={onSelect}/>
		</Layout>
    <Layout row alignCenter paddingBottom>
      {avatars&&<Button wMode='primary' block onPress={onMakeOrder}>ORDER NOW</Button>}
      <Button block>IM ORDERING</Button>
    </Layout>
	</Layout>
);

OrderingPanel.propTypes = {
	avatars: PropTypes.arrayOf(PropTypes.object),
	onSelect: PropTypes.func.isRequired,
	onMakeOrder: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default OrderingPanel;