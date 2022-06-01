import React, { useState } from "react";
import { Container, ContainerItem, Name, Item, Photo } from "./styles";
import { FlatList, View, Text } from "react-native";

import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [person, setPerson] = useState({});

  const getPerson = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(function (response) {
        // handle success
        setPerson(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.warn(error.message);
      });
  };

  getPerson();

  return (
    <ContainerItem>
      <FlatList
        data={person}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate("Person", {
                nome: item.name,
                imagem: item.image,
                especie: item.species,
                status: item.status,
                genero: item.gender,
                planeta: item.origin.name,
                episodio: item.episode,
              })
            }
          >
            <Container>
              <Photo source={{ uri: item.image }} />
              <View>
                <Text>{item.name}</Text>
              </View>
            </Container>
          </Item>
        )}
      />
    </ContainerItem>
  );
}
