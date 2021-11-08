import * as React from 'react';
import { View} from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import styles from "./styles"
import categories from "../../assets/data/categories"
import HomeCategory from "../../components/HomeCategory"
import { FlatList } from 'react-native';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
        <FlatList
          data={categories.items}
          renderItem = {({item}) => <HomeCategory category={item} />}
        />
    </View>
  );
}

