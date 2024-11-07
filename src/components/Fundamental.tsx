import React, {useState} from 'react';
import {View, Image, Text, Button, TextInput} from 'react-native';
import {Section} from './Section';

const Fundamental = () => {
  const [isHungry, setIsHungry] = useState<boolean>(true);
  const [text, setText] = useState<string>();

  return (
    <>
      <Section title="States">
        <View>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
            }}
            style={{width: 200, height: 200, margin: '0 auto'}}
          />
          <Text style={{height: 40, color: 'blue'}}>
            Hello, I'm Thomas the cat
          </Text>
          {isHungry ? (
            <Text style={{color: 'red', textTransform: 'uppercase'}}>
              im hungry, please feed me !!!
            </Text>
          ) : (
            <Text>I'm Full ^^</Text>
          )}
          <Button
            title={isHungry ? 'FEED' : 'THANK YOU!'}
            disabled={!isHungry}
            onPress={event => {
              console.log('Event Clicked', event);
              setIsHungry(!isHungry);
            }}
          />
        </View>
      </Section>

      <Section title="Pizza World Translator 🍕">
        <View>
          <TextInput
            placeholder="Please enter word to translate"
            onChangeText={text => {
              setText(text);
            }}
          />

          <Text>Result</Text>
          <Text>{text?.split('').map(word => word && '🍕')}</Text>
        </View>
      </Section>
    </>
  );
};

export default Fundamental;
