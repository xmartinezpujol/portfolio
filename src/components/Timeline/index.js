import React from 'react';
import { Text, View } from 'wasabi-kit';

const titleStyles = {
  borderBottom: '2px solid #FAFAFA',
  marginBottom: 20,
};

function Timeline(props) {
  const {
    background, title, data, icon,
  } = props;
  return (
    <View padding="40px 0" direction="column" style={{ background }}>
      <View container align="center" style={{ maxWidth: 1100 }}>
        <img src={`./assets/svg/${icon}.svg`} width="50" alt={icon} />
        <Text style={{ marginLeft: 20 }} type="h1.w">{title}</Text>
      </View>
      {data.map(time => (
        <View padding="20px 0" key={time.id} container direction="column" style={{ maxWidth: 1100 }}>
          <Text style={titleStyles} type="h2.w">{time.title}</Text>
          <View align="center">
            <Text type="h4.w">{time.place}</Text>
            <Text type="h4" style={{ color: '#FBC02D', marginLeft: 10 }}>{`(${time.time})`}</Text>
          </View>
          <Text type="span" style={{ color: 'white' }}>{time.desc}</Text>
        </View>
      ))}
    </View>
  );
}

export default Timeline;
