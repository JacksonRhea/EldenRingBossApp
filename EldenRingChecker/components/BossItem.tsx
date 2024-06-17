import React, { useEffect } from "react";
import { Image, Pressable, SafeAreaView, View } from "react-native";
import { Text } from "react-native";
import styles from "../global/styles";
import { useState } from "react";
import { Boss } from "../models/Bosses";
import { bosses } from "../global/BossInfo";
import { ImageMap } from "../global/ImageMapping";
import { LocationMap } from "../global/LocationImageMapping";
import CheckBox from 'expo-checkbox';

interface Props {
    boss: Boss
    onBossValueChange: (boss: Boss) => void
}

const BossItem: React.FC<Props> = ({ boss, onBossValueChange }) => {
  const [moreInfo, setMoreInfo] = useState<boolean>(boss.completed);
  const [complete, setComplete] = useState<boolean>(boss.completed);

  const imageSource = ImageMap[boss.image]
  const locationSource = LocationMap[boss.mapLink]

  const HandleComplete = () => {
    setComplete(!complete)
    boss.completed = !complete
    onBossValueChange(boss)
  }

  const HandleMoreInfo = () => {
    setMoreInfo(!moreInfo)
  }

  return (
    <SafeAreaView style={styles.bossItem}>
      <View style={styles.backgroundWrapper}>
      </View>
        <Text style={styles.important}>{boss.name}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.middleImportant}>Health: </Text>
            <Text style={styles.lessImportant}>
              {boss.healthPoints ? boss.healthPoints : 0}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.middleImportant}>Runes: </Text>
            <Text style={styles.lessImportant}>
              {boss.runeRewards ? boss.runeRewards : 0}
            </Text>
          </View>
        </View>
        {imageSource && <Image source={imageSource} style={styles.bossImg} />}
        <View>
          <Text style={styles.important}>{boss.location}</Text>
          <View
            style={styles.iconContainer}>
            <Pressable onPress={HandleMoreInfo}>
              <Image style={styles.moreInfo} source={(require("../assets/map.png"))}></Image>
            </Pressable>
            <CheckBox 
              value={complete}
              onValueChange={HandleComplete}
              color={complete ? 'green' : ''}
              style={styles.checkStyle}
            />
          </View>
        </View>
        {moreInfo && (
          <View style={styles.colItem}>
            <Text style={styles.important}>Description</Text>
            <Text style={{ marginBottom: 10, color: '#b4b2b0' }}>{boss.description}</Text>
            <Text style={styles.important}>Map </Text>
            {locationSource && <Image source={locationSource} style={styles.bossImg} />}
          </View>
        )}
    </SafeAreaView>
  );
};

export default BossItem;
