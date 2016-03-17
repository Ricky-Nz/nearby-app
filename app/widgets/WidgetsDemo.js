import React, { StyleSheet, View, Text } from 'react-native';
import StatusBar from './StatusBar';
import ActionBar from './ActionBar';
import IconButton from './IconButton';
import Icon from './Icon';
import Avatar from './Avatar';
import TitleText from './TitleText';
import MainText from './MainText';
import SubText from './SubText';
import SlideTabBar from './SlideTabBar';
import SlideTabViewPager from './SlideTabViewPager';
import AvatarSelectBar from './AvatarSelectBar';

const IMAGE_URL = 'http://facebook.github.io/origami/public/images/birds.jpg';

const TestPage = (props) => (
	<View style={styles.container}>
		<StatusBar/>
		<ActionBar title='Test Title' back='close' menus={['search', 'search']}/>
		<AvatarSelectBar avatars={[
			{src: IMAGE_URL, id: '1'}, {src: IMAGE_URL, id: '2'}, {src: IMAGE_URL, id: '3'}]}
			onSelect={(id) => console.log(id)}/>
		<Icon src='search'/>
		<Icon src='search' size='normal'/>
		<Icon src='search' size='large'/>
		<Avatar src='http://facebook.github.io/origami/public/images/birds.jpg'/>
		<Avatar src='http://facebook.github.io/origami/public/images/birds.jpg' size='normal'/>
		<Avatar src='http://facebook.github.io/origami/public/images/birds.jpg' size='large'/>
		<IconButton src='search' onPress={() => console.log('clicked')}/>
		<IconButton src='search' onPress={() => console.log('clicked')} size='normal'/>
		<IconButton src='search' onPress={() => console.log('clicked')} size='large'/>
		<SlideTabBar tabs={['home', 'home', 'home']} onSelect={(tab) => console.log(tab)} position={1}/>
		<TitleText>This is just an example</TitleText>
		<MainText>This is just an example</MainText>
		<SubText>This is just an example</SubText>
		<SlideTabViewPager tabs={['home', 'home', 'home']}
			onBindPager={(position) => <Text>{position}</Text>}/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'antiquewhite'
	}
});

export default TestPage;