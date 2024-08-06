import React from "react";
import {TouchableOpacity, Image} from 'react-native'
import { styles } from "../constants";

function Card({item}) {
  return (
    <TouchableOpacity style={{}} key={item.id}>
      <Image
        style={styles.card.image}
        source={item.image}
      />
    </TouchableOpacity>
  );
}

export default Card;
