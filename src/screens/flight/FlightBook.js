import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const FlightBook = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 60,
          width: "100%",
          flexDirection: "row",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          elevation:20,
          shadowColor:'grey',
          marginBottom:5
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 700, marginLeft: 20 }}>
          Please select a fare for IndiGo
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#cccccc",
            marginRight: 20,
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate("PriceFlight")}
        >
          <Image
            source={require("../../images/reject.png")}
            style={{ height: 20, width: 20, tintColor: "white" }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "95%",
            alignSelf: "center",
            borderRadius: 6,
            elevation: 20,
            shadowColor: "grey",
            alignContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "95%",
              marginTop: 20,
            }}
          >
            <Image
              source={require("../../images/selected.png")}
              style={{ height: 20, width: 20, marginLeft: 10, marginRight: 10 }}
            />
            <Text
              style={{
                fontSize: 16,
                width: "40%",
                marginLeft: 10,
                fontWeight: 600,
              }}
            >
              SAVER
            </Text>
            <Text
              style={{
                width: "40%",
                marginLeft: 10,
                fontSize: 16,
                textAlign: "right",
                fontWeight: 800,
                color: "black",
              }}
            >
              6,731
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "95%",
              marginTop: 10,
            }}
          >
            <Image
              source={require("../../images/luggage.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Check-in baggage
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              15 KGS
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "95%",
              marginTop: 10,
            }}
          >
            <Image
              source={require("../../images/calendar.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Date change fee per passenger
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Starting from 1516
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
              width: "95%",
            }}
          >
            <Image
              source={require("../../images/cancelled.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Cancellation fee per passenger
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Starting from 1516
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
              width: "95%",
            }}
          >
            <Image
              source={require("../../images/chair.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Seat
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Limited free seats
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 15,
              width: "95%",
              marginBottom: 20,
            }}
          >
            <Image
              source={require("../../images/lunch.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Meal
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Chargeable
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              bottom: 0,
              backgroundColor: "#decda0",
            }}
          >
            <Text>Lock this price at 436 for 24 hrs</Text>
          </View>
        </View>

        <View
          style={{
            width: "95%",
            alignSelf: "center",
            borderRadius: 6,
            elevation: 20,
            shadowColor: "grey",
            alignContent: "space-between",
            backgroundColor: "white",
            marginTop: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "95%",
              marginTop: 20,
            }}
          >
            <Image
              source={require("../../images/checkbox.png")}
              style={{ height: 20, width: 20, marginLeft: 10, marginRight: 10 }}
            />
            <Text
              style={{
                fontSize: 16,
                width: "40%",
                marginLeft: 10,
                fontWeight: 600,
              }}
            >
              SAJILO OFFER
            </Text>
            <Text
              style={{
                width: "40%",
                marginLeft: 10,
                fontSize: 16,
                textAlign: "right",
                fontWeight: 800,
                color: "green",
              }}
            >
              6,731
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "95%",
              marginTop: 10,
            }}
          >
            <Image
              source={require("../../images/luggage.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Check-in baggage
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              15 KGS
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "95%",
              marginTop: 10,
            }}
          >
            <Image
              source={require("../../images/calendar.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Date change fee per passenger
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Starting from 1516
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
              width: "95%",
            }}
          >
            <Image
              source={require("../../images/cancelled.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Cancellation fee per passenger
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Starting from 1516
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
              width: "95%",
            }}
          >
            <Image
              source={require("../../images/chair.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Seat
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Limited free seats
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 15,
              width: "95%",
              marginBottom: 20,
            }}
          >
            <Image
              source={require("../../images/lunch.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Meal
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Chargeable
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              bottom: 0,
              backgroundColor: "#decda0",
            }}
          >
            <Text>Lock this price at 436 for 24 hrs</Text>
          </View>
        </View>

        <View
          style={{
            width: "95%",
            alignSelf: "center",
            borderRadius: 6,
            elevation: 20,
            shadowColor: "grey",
            alignContent: "space-between",
            backgroundColor: "white",
            marginTop: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "95%",
              marginTop: 20,
            }}
          >
            <Image
              source={require("../../images/checkbox.png")}
              style={{ height: 20, width: 20, marginLeft: 10, marginRight: 10 }}
            />
            <Text
              style={{
                fontSize: 16,
                width: "40%",
                marginLeft: 10,
                fontWeight: 600,
              }}
            >
              SAJILO TRIP
            </Text>
            <Text
              style={{
                width: "40%",
                marginLeft: 10,
                fontSize: 16,
                textAlign: "right",
                fontWeight: 800,
                color: "green",
              }}
            >
              6,731
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "95%",
              marginTop: 10,
            }}
          >
            <Image
              source={require("../../images/luggage.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Check-in baggage
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              15 KGS
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "95%",
              marginTop: 10,
            }}
          >
            <Image
              source={require("../../images/calendar.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Date change fee per passenger
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Starting from 1516
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
              width: "95%",
            }}
          >
            <Image
              source={require("../../images/cancelled.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Cancellation fee per passenger
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Starting from 1516
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
              width: "95%",
            }}
          >
            <Image
              source={require("../../images/chair.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Seat
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Limited free seats
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 15,
              width: "95%",
              marginBottom: 20,
            }}
          >
            <Image
              source={require("../../images/lunch.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Meal
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Chargeable
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              bottom: 0,
              backgroundColor: "#decda0",
            }}
          >
            <Text>Lock this price at 436 for 24 hrs</Text>
          </View>
        </View>

        <View
          style={{
            width: "95%",
            alignSelf: "center",
            borderRadius: 6,
            elevation: 20,
            shadowColor: "grey",
            alignContent: "space-between",
            backgroundColor: "white",
            marginTop: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "95%",
              marginTop: 20,
            }}
          >
            <Image
              source={require("../../images/checkbox.png")}
              style={{
                height: 20,
                width: 20,
                marginLeft: 10,
                marginRight: 10,
                tintColor: "black",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                width: "40%",
                marginLeft: 10,
                fontWeight: 600,
              }}
            >
              SAJILO SPECIAL
            </Text>
            <Text
              style={{
                width: "40%",
                marginLeft: 10,
                fontSize: 16,
                textAlign: "right",
                fontWeight: 800,
                color: "green",
              }}
            >
              6,731
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "95%",
              marginTop: 10,
            }}
          >
            <Image
              source={require("../../images/luggage.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Check-in baggage
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              15 KGS
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "95%",
              marginTop: 10,
            }}
          >
            <Image
              source={require("../../images/calendar.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Date change fee per passenger
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Starting from 1516
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
              width: "95%",
            }}
          >
            <Image
              source={require("../../images/cancelled.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Cancellation fee per passenger
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Starting from 1516
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
              width: "95%",
            }}
          >
            <Image
              source={require("../../images/chair.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Seat
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Limited free seats
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 15,
              width: "95%",
              marginBottom: 20,
            }}
          >
            <Image
              source={require("../../images/lunch.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 12,
                width: "40%",
                marginLeft: 10,
              }}
            >
              Meal
            </Text>
            <Text style={{ width: "40%", marginLeft: 10, fontSize: 13 }}>
              Chargeable
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              bottom: 0,
              backgroundColor: "#decda0",
            }}
          >
            <Text>Lock this price at 436 for 24 hrs</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          alignItems: "center",
          height: 70,
          position: "absolute",
          bottom: 0,
          width: "100%",
          justifyContent: "flex-between",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            width: "45%",
            borderColor: "grey",
            borderRadius: 6,
            marginRight: 10,
            marginLeft: 10,
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 800,
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            Lock Price
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: "45%",
            backgroundColor: "orange",
            borderRadius: 6,
            marginLeft: 7,
          }}
          onPress={() => navigation.navigate("ReviewFlight")} 
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: 800,
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            BOOK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlightBook;
