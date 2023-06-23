import { StyleSheet, Text, View,TouchableOpacity,TextInput ,Image,ScrollView} from 'react-native'
import React from 'react'
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const Rest = () => {
  const [ searchQuery, setSearchQuery] = useState('');
  
  return (
    <View style={styles.container}>
      
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
            <Text style={styles.input}>Delivery </Text>
         </TouchableOpacity>
         <TouchableOpacity>
            <Text style={styles.input}>Pickup</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}} >
        <ScrollView horizontal='true'>
         <TouchableOpacity style={{margin:10}} >
           <Image
             source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/15/c5/91/99/img-20181202-122531-largejpg.jpg'}}
             style={{width:75,height:75}}    
           />
           <Text style={{fontWeight:'bold'}}>Sea Foods</Text> 
         </TouchableOpacity>
         <TouchableOpacity style={{margin:10}} >
           <Image
             source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/06/df/61/61/absolute-barbecue.jpg'}}
             style={{width:75,height:75}}   
           /> 
           <Text style={{fontWeight:'bold'}}>Barbecue</Text> 
         </TouchableOpacity>
         <TouchableOpacity style={{margin:10}} >
           <Image
             source={{uri:'https://img.freepik.com/free-photo/bottom-view-cup-coffee-roasted-coffee-beans-cinnamons-bowls-biscuits-dark_140725-144578.jpg?size=626&ext=jpg&ga=GA1.1.1288231021.1679301795&semt=ais'}}
             style={{width:75,height:75}}    
           /> 
           <Text style={{fontWeight:'bold'}}>Coffee</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{margin:10}}>
           <Image
             source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/1a/b1/18/3e/goong-tod-prik-thai.jpg'}}
             style={{width:75,height:75}}    
           /> 
           <Text style={{fontWeight:'bold'}}>Chinese</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{margin:10}}>
           <Image
             source={{uri:'https://img.freepik.com/free-photo/crispy-mixed-pizza-with-olives-sausage_140725-3095.jpg?size=626&ext=jpg&ga=GA1.2.1288231021.1679301795&semt=sph'}}
             style={{width:75,height:75}}    
           /> 
           <Text style={{fontWeight:'bold'}}>Pizza </Text>
         </TouchableOpacity>
         <TouchableOpacity style={{margin:10}}>
           <Image
             source={{uri:'https://img.freepik.com/free-photo/eastern-sweets-turkish-delight-lokum-with-nuts-top-view_114579-8401.jpg?size=626&ext=jpg&ga=GA1.1.1288231021.1679301795&semt=ais'}}
             style={{width:75,height:75}}    
           /> 
           <Text style={{fontWeight:'bold'}}>Sweets Items</Text>
         </TouchableOpacity>
         </ScrollView>
      </View>
      <View style={styles.searchBox}>
        <Icon name="map-marker" size={25} color='pink' style={styles.mapIcon} />
        <TextInput
         style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search"
        />
      </View>
      <TouchableOpacity style={{margin:10,borderRadius:10,backgroundColor:'#c0b5b4'}}>
           <Image
             source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/02/68/21/08/tuscana-pizzeria-interior.jpg'}}
             style={{width:500,height:200}}    
           /> 
           <Text style={styles.coins}>Tuscana Pizzeria</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:10,borderRadius:10,backgroundColor:'#c0b5b4'}}>
           <Image
             source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/21/a3/56/1d/delight-your-palate-with.jpg'}}
             style={{width:500,height:200}}    
           /> 
           <Text style={styles.coins}>Paprika Cafe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:10,borderRadius:10,backgroundColor:'#c0b5b4'}}>
           <Image
             source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/18/e1/90/ba/ambience.jpg'}}
             style={{width:500,height:200}}    
           /> 
           <Text style={styles.coins}>MKC - Madras Kitchen Company</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Rest
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#ebe2e1',
  },
  input:{
    borderwidth :1,
    paddingRight: 10,
    margin :20,
    padding:10, 
    borderRadius:10,
    backgroundColor:'lightblue',
    fontWeight:'bold',
    textAlign:'center',
    alignItems:'center'
    
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingLeft: 10,
    shadowRadius: 2,
    width:500,
    
  },
  mapIcon: {
    marginRight: 5,
    
  },
  searchInput:{
    flex: 1,
    height: 40,
    borderRadius:20,
    fontSize:15
  },
  coins:{
    textAlign:'left',
    fontSize:20,
    fontWeight:'bold'
  }

})