import React from 'react';
import { Icon, Text, View } from 'wasabi-kit';
import CardInfo, { StyledInfoContainer } from './styles';

const styledText = {
  marginLeft: 20,
  fontSize: 12,
  fontWeight: 500,
};

function Info(props) {
  return (
    <StyledInfoContainer container justify="space-between">
      <CardInfo direction="column">
        <Text style={{ margin: '20px 0' }} type="h3">About me</Text>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="birthday-cake" />
          <Text style={styledText} type="p1">9.05.1987</Text>
        </View>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="building" />
          <Text style={styledText} type="p1">Barcelona, España</Text>
        </View>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="id-card" />
          <Text style={styledText} type="p1">46409563W</Text>
        </View>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="car" />
          <Text style={styledText} type="p1">B</Text>
        </View>
      </CardInfo>
      <CardInfo direction="column">
        <Text style={{ margin: '20px 0' }} type="h3">Personality</Text>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="check" />
          <Text style={styledText} type="p1">Proactive</Text>
        </View>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="check" />
          <Text style={styledText} type="p1">Positive</Text>
        </View>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="check" />
          <Text style={styledText} type="p1">Loves challenges</Text>
        </View>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="check" />
          <Text style={styledText} type="p1">Team oriented</Text>
        </View>
      </CardInfo>
      <CardInfo direction="column">
        <Text style={{ margin: '20px 0' }} type="h3">Languages</Text>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="language" />
          <Text style={styledText} type="p1">English - B2</Text>
        </View>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="language" />
          <Text style={styledText} type="p1">Spanish - Native</Text>
        </View>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="language" />
          <Text style={styledText} type="p1">Catalan - Native</Text>
        </View>
      </CardInfo>
      <CardInfo direction="column">
        <Text style={{ margin: '20px 0' }} type="h3">Contact</Text>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="phone" />
          <Text style={styledText} type="p1">675 44 80 54</Text>
        </View>
        <View align="center" padding="5px 0">
          <Icon size={12} font="fa" name="envelope" />
          <Text style={styledText} type="p1">xmartinezpujol@gmail.com</Text>
        </View>
      </CardInfo>
    </StyledInfoContainer>
  );
}

export default Info;
