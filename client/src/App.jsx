import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import Client from './Client';
import LeftSider from './LeftSider';
import PirateGold from './PirateGold';
const { Header, Content, Footer } = Layout;

class App extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			pirate: "",
			gold: "",
			output: {}
		}
	}

	run = () => {
		Client.search( this.state.pirate + " " + this.state.gold, 
			( response ) => this.setState({
				output: JSON.parse(response.output)
			}) );
				
	}

  	render() {
		let sentences = [], keynum = 0;
		if ( this.state.output.sentences ) {
			this.state.output.sentences.forEach( line => {
				keynum++;
				sentences.push( (<div key={"output_sentence_" + keynum}>{line}</div>) );
			 } );
		}
		return (
			<Layout>
				<LeftSider />
				<Layout style={{ marginLeft: 200 }}>
					<Header style={{ background: '#fff', padding: 0 }}>
						blabla Header
					</Header>
					<Content style={{ margin: '24px 16px 0', overflow: 'initial', minHeight: 400 }}>
						<PirateGold />
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						blabla footer
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default App;
