import React from 'react';
import { Icon, Text, View } from 'wasabi-kit';

import { StyledAvatar, StyledAvatarCaption } from '../../containers/Home/styles';
import Badge from '../Badge';

import CV from '../../data/cv.json';
import StyledSocialLink from './styles';

function Profile(props) {
  return (
    <View direction="column" align="center" padding="40px 0" type="blue_light">
      <figure>
        <StyledAvatar
          src="/assets/img/xmp.jpeg"
          alt="Xavier Martínez Pujol"
        />
        <StyledAvatarCaption>Xavier Martínez Pujol</StyledAvatarCaption>
      </figure>
      <Badge justify="center" type="blue">Frontend Engineer</Badge>
      <View>
        {CV.social.map((socialItem, index) => (
          <StyledSocialLink
            key={`social-link-${index}`}
            href={socialItem.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon size={38} font="fa" name={socialItem.name} aria-hidden="true" />
          </StyledSocialLink>
        ))}
      </View>
      <Text style={{ fontWeight: 500, letterSpacing: 1.8, marginTop: 40 }} type="p1.w">Last update : 15/09/2019</Text>
    </View>
  );
}

export default Profile;
