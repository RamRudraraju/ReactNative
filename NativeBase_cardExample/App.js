import React, { Component } from 'react';
import { StyleSheet,  View, Image } from 'react-native';

import { Container, 
         Header, 
         Content, 
         Card, 
         CardItem, 
         Thumbnail, 
         Text, 
         Button, 
         Icon, 
         Left, 
         Body, 
         Right } from 'native-base';

export default class CardImageExample extends Component {
 
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./src/Images/dp.jpg')} />
                <Body>
                  <Text>NativeBase Card</Text>
                  <Text note>Ram Rudraraju</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./src/Images/rocket.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>11 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}