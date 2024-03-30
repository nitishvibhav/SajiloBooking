import {
    View,
    Text,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity,
  } from "react-native";
  import { React, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import axios from "axios";
import CustomButton from "../../components/CustomButton";
  
  const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullName, setFullName] = useState("");
  
    const handleSignUp = () => {
      console.log({ email, password });
      axios
        .post("https://reqres.in/api/register", {
          email: email,
          password: password,
        })
        .then((result) => {
          console.log(result);
          alert("success");
          navigation.navigate("Login");
        })
        .catch((error) => {
          console.log(error);
          alert("wrong password or email");
        });
    };
  
    return (
      <View style={{ width: "100%", backgroundColor: "white", height: "100%" }}>
        <Image
          source={require("../../../assets/login_app.png")}
          style={{
            height: 330,
            width: 360,
            resizeMode: "contain",
            alignSelf: "center",
            marginTop: 30,
          }}
        />
        <View style={{width:'90%', alignSelf:'center'}}>
        <Text style={{ marginTop: 20,color:'#000' }}>
          Sign Up for SAJILO App
        </Text>
        </View>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter Full Name"
          style={{
            width: "90%",
            backgroundColor: "#eef3ef",
            alignSelf: "center",
            marginTop: 10,
            borderRadius: 6,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Your Email"
          style={{
            width: "90%",
            backgroundColor: "#eef3ef",
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 6,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Your Password"
          style={{
            width: "90%",
            backgroundColor: "#eef3ef",
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 6,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          style={{
            width: "90%",
            backgroundColor: "#eef3ef",
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 6,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        />
  
        <CustomButton title="Sign Up" width='90%' onPress={handleSignUp}/>
      </View>
    );
  };
  
  export default SignUp;
  