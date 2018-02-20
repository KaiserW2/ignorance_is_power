import React, { Component } from 'react';
import './PirateGold.css';
import { Row, Col, Card, InputNumber, Button } from 'antd';
import Client from './Client';

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
            <div className="PirateGold">
                <Row>
                    <Col span={6} />
                    <Col span={12}>
                        <Col span={8}>
                            Number of Pirates :
                        </Col>
                        <Col span={16}>
                            <InputNumber 
                                min={1} max={20} 
                                style={{ width: "100%" }}
                                value={this.state.pirate} 
                                onChange={value => this.setState( { pirate: value } )}
                            />
                        </Col>
                        <Col span={8}>
                            Number of Gold :
                        </Col>
                        <Col span={16}>
                            <InputNumber 
                                min={1} max={100} 
                                style={{ width: "100%" }}
                                value={this.state.gold} 
                                onChange={value => this.setState( { gold: value } )}
                            />
                        </Col>
                        <Button type="primary" onClick={this.run}>Run</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={6} />
                    <Col span={12}>
                        {sentences}
                        <Card style={{ width: "100%" }}>
                            {this.state.output.strategy ? this.state.output.strategy.toString() : ""}
                        </Card>
                        
                    </Col>
                    <Col span={6} />
                </Row>
            </div>
		);
	}
}

export default App;
