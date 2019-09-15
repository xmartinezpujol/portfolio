import React from 'react';

import { Text, View } from 'wasabi-kit';

import Header from '../../components/Header';
import Info from '../../components/Info';
import Profile from '../../components/Profile';
import Timeline from '../../components/Timeline';

import CV from '../../data/cv.json';
import Skills from '../../components/Skills';

const styledTitle = {
  fontSize: 26,
  fontWeight: 600,
  color: '#00E676',
  letterSpacing: 5,
};

const XP_BG_STYLE = 'linear-gradient(-225deg, #6200EA 0%, #673AB7 48%, #3F51B5 100%)';
const EDU_BG_STYLE = 'linear-gradient(-225deg, #F44336 0%, #FF6E40 48%, #EF5350 100%)';
const SKILLS_BG_STYLE = 'linear-gradient(-225deg, #8BC34A 0%, #00E676 48%, #26A69A 100%)';

function Home() {
  return (
    <View type="blue_light" direction="column">
      <Header>
        <Text style={styledTitle} type="h1" color="blue">
          CURRICULUM VITAE
        </Text>
      </Header>
      <Profile />
      <View style={{ maxWidth: 1100 }} round={5} container direction="column" align="space-between" padding={40} type="blue">
        <Text style={{ fontWeight: 500, fontSize: 18, marginBottom: 20 }} type="p1.w">Javascript Developer at
          <a
            style={{ color: '#f83e59', padding: 10 }}
            rel="noopener noreferrer"
            href="https://rakuten.tv"
            target="_blank"
          >
            Rakuten.tv
          </a>
          who loves the React ecosystem.
        </Text>
        <Text type="p1.w" style={{ fontWeight: 500, fontSize: 18 }}>
          I'm a very proactive and practical person with a sense of humor. Always looking for tech trends and ways to improve my career & skills. When I have the chance to work with different technologies I consider myself a fullstack developer.
        </Text>
      </View>
      <Info />
      <Timeline background={XP_BG_STYLE} icon="suitcase" title="Experience" data={CV.experience} />
      <Skills background={SKILLS_BG_STYLE} icon="rocket" title="Skills" data={CV.skills} />
      <Timeline background={EDU_BG_STYLE} icon="studies" title="Education" data={CV.education} />
    </View>
  );
}

export default Home;
