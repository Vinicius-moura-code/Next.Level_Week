import { View, Image, FlatList } from 'react-native';
import LogoImg from '../../assets/logo-nlw-esports.png';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { GAMES } from '../../utils/games';
import { GameCard } from '../../components/GameCard';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={LogoImg} style={styles.logo} />
      <Header
        title='Encontre seu duo!'
        subtitles='Selecione o game que deseja jogar...'
      />
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
