import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          backgroundColor: "white",
          justifyContent: "space-between",
        }}
      >
        <View style={{flexDirection:'row'}}>
          <Image
            style={{ height: 20, width: 20, marginRight: 20 }}
            source={require("../../../assets/back.png")}
          />
          <Text style={{ fontSize: 16, fontWeight: 800 }}>My Profile</Text>
        </View>
        <Text style={{ color: "#2a74d7", fontSize: 16, fontWeight: 600 }}>
          SAVE
        </Text>
      </View>
      <View
        style={{
          height: 90,
          width: 90,
          borderRadius: 50,
          backgroundColor: "#e0e3ea",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        <Image
          style={{ height: 60, width: 60, tintColor: "#657a97" }}
          source={require("../../../assets/user2.png")}
        />
      </View>
      <Text
        style={{
          color: "#2a74d7",
          fontWeight: 700,
          alignSelf: "center",
          marginTop: 5,
          fontSize: 16,
        }}
      >
        Add Profile Photo
      </Text>
      <View
        style={{ backgroundColor: "white", marginTop: 10, paddingBottom: 10 }}
      >
        <Text
          style={{
            color: "#717171",
            fontWeight: 400,
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          PERSONAL INFORMATION
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../assets/non-selected.png")}
            style={{ height: 20, width: 20, tintColor: "#667a95" }}
          />
          <Text
            style={{
              color: "#222222",
              fontWeight: 600,
              marginLeft: 5,
              fontSize: 16,
            }}
          >
            Male
          </Text>
          <Image
            source={require("../../../assets/non-selected.png")}
            style={{
              height: 20,
              width: 20,
              marginLeft: 20,
              tintColor: "#667a95",
            }}
          />
          <Text
            style={{
              color: "#222222",
              fontWeight: 600,
              marginLeft: 5,
              fontSize: 16,
            }}
          >
            Female
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            borderColor: "#e1e1e1",
            borderWidth: 1,
            alignSelf: "center",
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <TextInput placeholder="Full Name" placeholderTextColor={"#505152"} />
        </View>
        <View
          style={{
            width: "90%",
            borderColor: "#e1e1e1",
            borderWidth: 1,
            alignSelf: "center",
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <TextInput placeholder="Email" placeholderTextColor={"#505152"} />
        </View>
        <View
          style={{
            width: "90%",
            borderColor: "#e1e1e1",
            borderWidth: 1,
            alignSelf: "center",
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <TextInput
            placeholder="Mobile No."
            placeholderTextColor={"#505152"}
          />
        </View>
        <View
          style={{
            width: "90%",
            borderColor: "#e1e1e1",
            borderWidth: 1,
            alignSelf: "center",
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <TextInput
            placeholder="Date of Birth"
            placeholderTextColor={"#505152"}
          />
        </View>
      </View>
      <View
        style={{ backgroundColor: "white", marginTop: 20, paddingBottom: 10 }}
      >
        <Text
          style={{
            color: "#717171",
            fontWeight: 400,
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          TRAVEL INFORMATION
        </Text>
        <View
          style={{
            width: "90%",
            borderColor: "#e1e1e1",
            borderWidth: 1,
            alignSelf: "center",
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <TextInput
            placeholder="Pan Card Number"
            placeholderTextColor={"#505152"}
          />
        </View>
        <View
          style={{
            width: "90%",
            borderColor: "#e1e1e1",
            borderWidth: 1,
            alignSelf: "center",
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <TextInput
            placeholder="Passport Number"
            placeholderTextColor={"#505152"}
          />
        </View>
        <View
          style={{
            backgroundColor: "#fff5eb",
            width: "90%",
            alignSelf: "center",
            marginTop: 20,
            padding: 10,
            paddingHorizontal: 20,
            fontWeight: 600,
          }}
        >
          <Text style={{ fontSize: 12, color: "#717171" }}>
            Your PAN & Passport info will only be used for International
            Bookings as per RBI guidelines.
          </Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: "white", marginTop: 20, paddingBottom: 10 }}
      >
        <Text
          style={{
            color: "#717171",
            fontWeight: 400,
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          BILLING DETAILS
        </Text>
        <View
          style={{
            width: "90%",
            borderColor: "#e1e1e1",
            borderWidth: 1,
            alignSelf: "center",
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <TextInput
            placeholder="Billing Address"
            placeholderTextColor={"#505152"}
          />
        </View>
        <View
          style={{
            width: "90%",
            borderColor: "#e1e1e1",
            borderWidth: 1,
            alignSelf: "center",
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <TextInput placeholder="Pincode" placeholderTextColor={"#505152"} />
        </View>
        <View
          style={{
            width: "90%",
            borderColor: "#e1e1e1",
            borderWidth: 1,
            alignSelf: "center",
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <TextInput placeholder="State" placeholderTextColor={"#505152"} />
        </View>
        <View
          style={{
            backgroundColor: "#fff5eb",
            width: "90%",
            alignSelf: "center",
            marginTop: 20,
            padding: 10,
            paddingHorizontal: 20,
            fontWeight: 600,
          }}
        >
          <Text style={{ fontSize: 12, color: "#717171" }}>
            As per the government directive billing address is compulsory for
            all bookings.
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 20,
          marginBottom: 60,
          flexDirection: "row",
          padding: 20,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/logout.png")}
          style={{ height: 20, width: 20 }}
        />
        <Text
          style={{
            color: "#2275df",
            fontWeight: 700,
            marginLeft: 10,
            fontSize: 16,
          }}
        >
          Log Out
        </Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
