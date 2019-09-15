import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'wasabi-kit';
import Badge from '../Badge';

const SkillBadge = styled(Badge)`
  min-width: 100%;
  line-height: 36px;
  @media (min-width: 500px) {
    min-width: calc(50% - 20px);
  }
  @media (min-width: 991px) {
    min-width: calc(33% - 20px);
  }
  @media (min-width: 1200px) {
    min-width: calc(25% - 20px);
  }
`;

function Skills(props) {
  const {
    background, title, data, icon,
  } = props;

  function calculateSkillRange(percentage) {
    switch (true) {
      case percentage > 0 && percentage <= 33:
        return <span style={{ color: 'yellow', marginLeft: 5 }}>✚</span>;
      case percentage > 33 && percentage <= 66:
        return <span style={{ color: 'orange', marginLeft: 5 }}>✚✚</span>;
      default:
        return <span style={{ color: 'lightgreen', marginLeft: 5 }}>✚✚✚</span>;
    }
  }

  return (
    <View padding="40px 0" direction="column" style={{ background }}>
      <View container align="center" style={{ maxWidth: 1100, marginBottom: 20 }}>
        <img src={`./assets/svg/${icon}.svg`} width="50" alt={icon} />
        <Text style={{ marginLeft: 20 }} type="h1.w">{title}</Text>
      </View>
      <View container align="center" style={{ maxWidth: 1100, flexWrap: 'wrap' }}>
        {data.map(skill => (
          <SkillBadge key={skill.title} justify="center" type="noriDark">{skill.title}{calculateSkillRange(skill.percent)}</SkillBadge>
        ))}
      </View>
    </View>
  );
}

export default Skills;
