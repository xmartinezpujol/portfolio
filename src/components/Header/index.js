import React from 'react';
import { Text, View } from 'wasabi-kit';

function Header(props) {
  return (
    <header>
      <View padding={30} type="black" justify="center">
        {props.children}
      </View>
    </header>
  );
}

export default Header;
