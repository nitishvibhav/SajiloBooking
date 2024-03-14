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
          source={require("../../../assets/Signup.png")}
          style={{
            height: 230,
            width: 260,
            resizeMode: "contain",
            alignSelf: "center",
            marginTop: 30,
          }}
        />
        <Text style={{ marginLeft: 20, marginTop: 20, }}>
          Sign Up for SAJILO App
        </Text>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter Full Name"
          style={{
            width: "90%",
            backgroundColor: "#ebedf0",
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
            backgroundColor: "#ebedf0",
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
            backgroundColor: "#ebedf0",
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
            backgroundColor: "#ebedf0",
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 6,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        />
  
        <TouchableOpacity
          style={{
            marginTop: 30,
            width: "90%",
            borderRadius: 6,
            paddingVertical: 10,
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#2D4990",
          }}
          onPress={handleSignUp}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#fefe",
              alignSelf: "center",
              fontWeight: "600",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SignUp;
  