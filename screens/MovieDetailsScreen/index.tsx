import React,{useState} from "react";
import movie from "../../assets/data/movie";
import {Text,View} from "../../components/Themed";
import {FlatList, Image, Pressable} from "react-native";
import { RootTabScreenProps } from '../../types';
import styles from "./styles";
import { AntDesign, MaterialIcons,Ionicons,Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import EpisodeItem from "../../components/EpisodeItem";
import {Picker} from '@react-native-picker/picker';


const firstSeason = movie.seasons.items[0];

const firstEpisode = firstSeason.episodes.items[0];
export default function MovieDetailsScreen({ navigation }: RootTabScreenProps<'Home'>)  {
    const [currentSeason,setCurrentSeason] = useState(firstSeason);
const seasonNames = movie.seasons.items.map((season)=>season.name);
    return (
        <View>
            <Image style={styles.image} source={{uri:firstEpisode.poster}}/>
            <FlatList 
                data={currentSeason.episodes.items}
                style={{marginBottom:250}}
                renderItem={({item})=><EpisodeItem episode={item} />}
                ListHeaderComponent={(
                    <View style={{padding:12}}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style = {styles.match}>98% match</Text>
                        <Text style={styles.year}>{movie.year}</Text>
                        <View style={styles.ageContainer}>
                            <Text style={styles.age}>12+</Text>
                        </View>
                        <Text style = {styles.year}>{movie.numberOfSeasons} Seasons</Text>
                        <MaterialIcons name="hd" size={24} color="white" />
                    </View>
                    <Pressable onPress={()=>{console.warn("Plage")}} style={styles.playButton} >
                        <Text  style={styles.playButtonText}>
                            <Entypo name="controller-play" size={16} color="black" />
                            Play
                        </Text>
                    </Pressable>
                    <Pressable onPress={()=>{console.warn("Donwload")}} style={styles.donwnloadPlayButton} >
                        <Text style={styles.downloadButtonText}>
                            <AntDesign name="download" size={16} color="white" />
                            {' '}
                            Download
                        </Text>
                    </Pressable>
                    <Text style={{marginVertical:10}}>{movie.plot}</Text>
                    <Text style={styles.year}>Cast:{movie.cast}</Text>
                    <Text style={styles.year}>Creator:{movie.creator}</Text>
                        <View style={{flexDirection:"row",marginTop:20}}>
                            <View style={{alignItems:"center",marginHorizontal:20}}>
                                <AntDesign name="plus" size={24} color={"white"}/>
                                <Text style={{color:"darkgrey",marginTop:5}}>My List</Text>
                            </View>
                            <View style={{alignItems:"center",marginHorizontal:20}}>
                                <Feather name="thumbs-up" size={24} color={"white"}/>
                                <Text style={{color:"darkgrey",marginTop:5}}>Rate</Text>
                            </View>
                            <View style={{alignItems:"center",marginHorizontal:20}}>
                            <Ionicons name="share-social" size={24} color="white" />
                                <Text style={{color:"darkgrey",marginTop:5}}>Share</Text>
                            </View>
                        </View>
                        <Picker
                            style={{color:"white",width:130}} 
                            dropdownIconColor={'white'}
                            selectedValue={currentSeason.name}
                            onValueChange={(itemValue, itemIndex) =>{setCurrentSeason(movie.seasons.items[itemIndex])}}>
                            {seasonNames.map(seasonName =>(
                                <Picker.Item key={seasonName} value={seasonName} label={seasonName}/>))}
                        </Picker>
                </View>
    
                )}
            />
        </View>
        
    )
}

