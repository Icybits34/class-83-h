import React, { Component } from "react";
import {
View,
Text,
SafeAreaView,
Image,
ScrollView,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-paper";

render() {
    if(!this.state.fontsLoaded){
        return <AppLoading />;
    } else {
        let preview_images = {
            "image_1": require("../assets/image_1.png"),
            "image_2": require("../assets/image_2.png"),
            "image_3": require("../assets/image_3.png"),
            "image_4": require("../assets/image_4.png"),
            "image_5": require("../assets/image_5.png")
        }
    }
}

render(
    <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
            <View style={styles.appIcon}>
                <Image
                   source={require("../assets/logo.png")}
                   style={styles.iconImage}
                   ></Image>

            </View>
            <View style={styles.appTitleTextContainer}>
                <Text style={styles.appTitleText}>New Post</Text>
            </View>
        </View>
       <View style={styles.fieldsContainer}>
        <ScrollView>
            <Image
               source={preview_images[this.state.previewImage]}
               style={styles.previewImage}
               ></Image>
               <View style={{height:
                       RFValue(this.state.dropdownHeight)
               }}>
               <DropDownPicker
                    
                    items={[
                        {label:"Image 1", value: "image_1"},
                        {label:"Image 2", value: "image_2"},
                        {label:"Image 3", value: "image_3"},
                        {label:"Image 4", value: "image_4"},
                        {label:"Image 5", value: "image_5"},
                        {label:"Image 6", value: "image_6"},
                        {label:"Image 7", value: "image_7"},
                    ]}

                    defaultValue={this.state.previewImage}

                    containerStyle={{
                        height: 40,
                        borderRadius: 20,
                        marginBottom: 10
                    }}

                    onOpen={()=>{
                        this.setState({dropdownHeight:170});
                    }}
                    onClose={()=>{
                        this.setState({dropdownHeight: 40});
                    }}
                    style={{backgroundColor: "transparent"}}
                    itemStyle={{
                        justifyContent: "flex-start"
                    }}
                    dropDownStyle={{backgroundColor: "#2a2a2a"}}
                    labelStyle={{
                        color:"white"
                    }}
                    arrowStyle={{
                        color: "white"
                    }}
                    onChangeItem={item=>
                        this.setState({
                            previewImage: item.value
                        })
                    }
                    />
                    </View>
                  <TextInput
                  style={styles.inputFont}

                  onChangeText={caption => this.setState({caption})}

                  placeholder={"Caption"}

                  placeholderTextColor="white"
                  />
        </ScrollView>
       </View>
       <View style={{ flex: 0.08}} />
    </View>
)
