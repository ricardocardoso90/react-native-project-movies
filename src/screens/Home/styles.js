import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #333;
`

export const TextMovies = styled.Text`
  color: #FFF;
  font-size: 18px;
  text-align: center;
  margin: 10px 0;
`

export const MovieItem = styled.View`
  margin-bottom: 30px;
`

export const MovieImage = styled.Image`
  height: 400px;
`

export const MovieTitle = styled.Text`
  color: #FFF;
  font-size: 24px;
  text-align: center;
  margin-top: 5px;
`

export const LoadingArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const LoadingText = styled.Text`
  color: #FFF;
`