import React, { StyleSheet, ScrollView, View, Text } from 'react-native';
import StatusBar from './StatusBar';
import ActionBar from './ActionBar';
import IconButton from './IconButton';
import Icon from './Icon';
import Avatar from './Avatar';
import Star from './Star';
import TitleText from './TitleText';
import MainText from './MainText';
import SubText from './SubText';
import SlideTabBar from './SlideTabBar';
import SlideTabViewPager from './SlideTabViewPager';
import AvatarSelectBar from './AvatarSelectBar';
import StarMarkingBar from './StarMarkingBar';
import Button from './Button';
import IconMenu from './IconMenu';

const IMAGE_URL = 'http://facebook.github.io/origami/public/images/birds.jpg';

const TestPage = (props) => (
	<ScrollView style={styles.container}>
		<StatusBar/>
		<ActionBar title='Test Title' menus={[
			{ key: '1', src: 'close', active: true, position: 'left' },
			{ key: '2', src: 'home', active: true, position: 'right' },
			{ key: '3', src: 'search', active: true, position: 'right' }
		]}/>
		<AvatarSelectBar avatars={[
			{src: IMAGE_URL, id: '1'}, {src: IMAGE_URL, id: '2'}, {src: IMAGE_URL, id: '3'}]}
			onSelect={(id) => console.log(id)}/>
		<Star fill='full'/>
		<Star fill='half'/>
		<Star/>
		<View style={styles.buttonContainer}>
			<Button onPress={() => console.log('CLICK')}>Button</Button>
		</View>
		<IconMenu src='home' active/>
		<IconMenu src='home'/>
		<StarMarkingBar mark={10}/>
		<StarMarkingBar mark={9}/>
		<StarMarkingBar mark={8}/>
		<StarMarkingBar mark={7}/>
		<StarMarkingBar mark={6}/>
		<StarMarkingBar mark={5}/>
		<StarMarkingBar mark={4}/>
		<StarMarkingBar mark={3}/>
		<StarMarkingBar mark={2}/>
		<StarMarkingBar mark={1}/>
		<StarMarkingBar mark={0}/>
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
	</ScrollView>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'antiquewhite'
	},
	buttonContainer: {
		flexDirection: 'row'
	}
});

export default TestPage;