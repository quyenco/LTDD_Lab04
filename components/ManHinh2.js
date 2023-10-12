import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import { WebViewHTMLAttributes } from "react";
import {StarOutlined, StarFilled, CameraFilled} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

export default function ManHinh2() {
  return(
    <View style = {styles.component}>
        <View style={{flexDirection:'row', marginTop:20}}>
            <Image source={require("../image/usb.png")}
                style={{height:100, width:100, resizeMode:"center", marginLeft:20}}></Image>
            <Text style={styles.text1}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
        </View>
        <Text style={{
            top:20,
            fontWeight:700,
            fontSize:18,
            lineHieght: 21.09}}>
                Cực kì hài lòng
        </Text>
        <View style={{flexDirection:'row', top:50}}>
            <StarFilled style={styles.star}></StarFilled>
            <StarFilled style={styles.star}></StarFilled>
            <StarFilled style={styles.star}></StarFilled>
            <StarFilled style={styles.star}></StarFilled>
            <StarFilled style={styles.star}></StarFilled>
        </View>
        <View style={styles.borderAnh}>
            <CameraFilled style={{fontSize:39}}></CameraFilled>
            <Text style={{fontSize:18, fontWeight: 700, padding: 10}}>Thêm hình ảnh</Text>
        </View>
        <View>
            <TextArea style={styles.inputChiaSe} placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm" placeholderTextColor={"gray"} ></TextArea>
            {/* <WebView source={{uri: 'https://github.com/facebook/react-native'}}/> */}
        </View>
        <View style={{width:293, height: 20, top:110}}>
            <Button  title="Gửi"></Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    component:{
        flex:1,
        alignItems:'center'
    },
    text1:{
        fontWeight:700,
        fontSize:16,
        lineHieght: 18.75,
        marginLeft:10
    },
    star:{
        fontSize:39,
        color: '#F2DD1B',
        padding: 5
    },
    borderAnh:{
        borderWidth: 1,
        height: 68,
        width: 293,
        top: 80,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: '#1511EB'

    },
    inputChiaSe:{
        fontSize: 18,
        width: 293,
        height: 222,
        borderRadius: 5,
        borderWidth: 1,
        borderColor:"#C4C4C4",
        top: 95

    },
    
});
