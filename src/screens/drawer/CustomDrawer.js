import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const CustomDrawer = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          backgroundColor: "orange",
          borderRadius: 6,
          height: 80,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: "white",
            borderRadius: 50,
            alignSelf: "center",
            marginLeft: 10,
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../../assets/user2.png")}
            style={{
              height: 30,
              width: 30,
              alignSelf: "center",
              tintColor: "grey",
            }}
          />
        </View>
        <View style={{ alignSelf: "center", marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: 700 }}>
            Hi Nitish
          </Text>
          <Text style={{ color: "white", fontSize: 12 }}>8420557642</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          borderRadius: 6,
          height: 80,
          flexDirection: "row",
          borderColor: "#d9d9d9",
          borderWidth: 1,
          justifyContent: "space-between",
          paddingRight: 10,
        }}
      >
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#cff1fd",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
          <Text style={{ fontSize: 12 }}>My Account</Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
            marginLeft: 10,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#cff1fd",
              borderRadius: 50,
              alignSelf: "center",

              justifyContent: "center",
            }}
          ></View>
          <Text style={{ fontSize: 12 }}>Support</Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
            marginLeft: 10,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#cff1fd",
              borderRadius: 50,
              alignSelf: "center",
              justifyContent: "center",
            }}
          ></View>
          <Text style={{ fontSize: 12 }}>Notification</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          borderRadius: 6,
          borderColor: "#d9d9d9",
          borderWidth: 1,
          paddingBottom: 10,
        }}
      >
        <Text style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
          My trips
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/briefcase.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 12, fontWeight: 600 }}>
              View/Manage Trips
            </Text>
          </View>
          <Image
            source={require("../../../assets/next.png")}
            style={{ height: 20, width: 20, tintColor: "#0379d3" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/love.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 12, fontWeight: 600 }}>Wishlist</Text>
          </View>
          <Image
            source={require("../../../assets/next.png")}
            style={{ height: 20, width: 20, tintColor: "#0379d3" }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          borderRadius: 6,
          borderColor: "#d9d9d9",
          borderWidth: 1,
          paddingBottom: 10,
        }}
      >
        <Text style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
          Rewards
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/briefcase.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 12, fontWeight: 600 }}>Gift Cards</Text>
          </View>
          <Image
            source={require("../../../assets/next.png")}
            style={{ height: 20, width: 20, tintColor: "#0379d3" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/love.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 12, fontWeight: 600 }}>Rewards</Text>
          </View>
          <Image
            source={require("../../../assets/next.png")}
            style={{ height: 20, width: 20, tintColor: "#0379d3" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/love.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 12, fontWeight: 600 }}>Refer & Earn</Text>
          </View>
          <Image
            source={require("../../../assets/next.png")}
            style={{ height: 20, width: 20, tintColor: "#0379d3" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/love.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 12, fontWeight: 600 }}>
              Holidays Refer & earn
            </Text>
          </View>
          <Image
            source={require("../../../assets/next.png")}
            style={{ height: 20, width: 20, tintColor: "#0379d3" }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          borderRadius: 6,
          borderColor: "#d9d9d9",
          borderWidth: 1,
          paddingBottom: 10,
        }}
      >
        <Text style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
          Settings
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/briefcase.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 12, fontWeight: 600 }}>Language</Text>
          </View>
          <Image
            source={require("../../../assets/next.png")}
            style={{ height: 20, width: 20, tintColor: "#0379d3" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/love.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 12, fontWeight: 600 }}>Country</Text>
          </View>
          <Image
            source={require("../../../assets/next.png")}
            style={{ height: 20, width: 20, tintColor: "#0379d3" }}
          />
        </View>
      </View>
      <Text
        style={{
          alignSelf: "center",
          marginTop: 20,
          fontSize: 10,
          color: "#0379d3",
          fontWeight: 600,
        }}
      >
        Rate Us • Privacy Policy{" "}
      </Text>
      <Text
        style={{
          alignSelf: "center",
          marginBottom: 40,
          fontSize: 12,
          fontWeight: 500,
        }}
      >
        App Version 1.0.1
      </Text>
    </ScrollView>
  );
};

export default CustomDrawer;
