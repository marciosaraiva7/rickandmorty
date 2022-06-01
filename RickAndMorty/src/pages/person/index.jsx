import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Photo, Name, Container } from "./styles";

export default function Person({ route, navigation }) {
  const { nome, imagem } = route.params;
  return (
    <Container
      style={{
        flex: 1,
        backgroundColor: "#f1f1f1",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
      }}
      img={imagem}
    >
      <Photo source={{ uri: imagem }} />
      <Name>{nome}</Name>
    </Container>
  );
}
