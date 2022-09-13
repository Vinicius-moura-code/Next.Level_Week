import { ImageBackground } from 'react-native';
import { styles } from './styles';
import  BackgroundImag  from '../../assets/background-galaxy.png'

interface Props {
  children: React.ReactNode
}

export function Background({ children }: Props) {
  return <ImageBackground 
  source={BackgroundImag}
  style={styles.container}
  defaultSource={BackgroundImag}
  >
    {children}
  </ImageBackground>;
}
