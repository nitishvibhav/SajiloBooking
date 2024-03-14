import { View, Text, Image } from "react-native";
import React from "react";

const ReviewRating = () => {
  return (
    <View
      style={{
        width: "95%",
        borderRadius: 6,
        backgroundColor: "white",
        alignSelf: "center",
        marginTop: 10,
        elevation: 5,
        shadowColor: "grey",
        marginBottom: 10,
      }}
    >
      <Text style={{ margin: 10, fontSize: 18, fontWeight: 700 }}>
        Reviews & Ratings
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "#0d58b5",
            width: 45,
            height: 35,
            borderRadius: 6,
            marginLeft: 10,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>4.4</Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "#0e59b4", fontWeight: 700 }}>Excellent</Text>
          <Text style={{ color: "#7f7f7f" }}>
            <Text style={{ color: "#414141", fontWeight: 500 }}>1087</Text>{" "}
            Users Reviews &{" "}
            <Text style={{ color: "#414141", fontWeight: 500 }}>2439 </Text>
            Ratings
          </Text>
        </View>
      </View>
      <Text style={{ color: "#4c4c4c", marginLeft: 10, marginBottom: 7 }}>
        Rating Score Card
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "95%",
          alignSelf: "center",
          marginBottom: 5,
          borderColor: "#d9d9d9",
          borderWidth: 1,
          borderRadius: 10,
          padding: 8,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#0091ff", fontWeight: 800, fontSize: 12 }}>
            4.6
          </Text>
          <Text style={{ color: "#626262", fontSize: 12 }}>
            Value for Money
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#0091ff", fontWeight: 800, fontSize: 12 }}>
            4.5
          </Text>
          <Text style={{ color: "#626262", fontSize: 12 }}>Food</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#0091ff", fontWeight: 800, fontSize: 12 }}>
            4.2
          </Text>
          <Text style={{ color: "#626262", fontSize: 12 }}>Location</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#0091ff", fontWeight: 800, fontSize: 12 }}>
            5.0
          </Text>
          <Text style={{ color: "#626262", fontSize: 12 }}>
            Child friendliness
          </Text>
        </View>
      </View>
      <Text style={{ color: "#737373", marginLeft: 10, marginBottom: 10 }}>
        Highest Scores in Kolkata
      </Text>

      <Text style={{ color: "#494949", marginLeft: 10, marginBottom: 10 }}>
        Last 10 Customer Ratings (Latest Rating First)
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 10,
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            borderColor: "#345c80",
            borderWidth: 1,
            height: 24,
            width: 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            marginRight: 7,
          }}
        >
          <Text>5</Text>
        </View>
        <View
          style={{
            borderColor: "#345c80",
            borderWidth: 1,
            height: 24,
            width: 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            marginRight: 7,
          }}
        >
          <Text>4</Text>
        </View>
        <View
          style={{
            borderColor: "#345c80",
            borderWidth: 1,
            height: 24,
            width: 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            marginRight: 7,
          }}
        >
          <Text>4</Text>
        </View>
        <View
          style={{
            borderColor: "#345c80",
            borderWidth: 1,
            height: 24,
            width: 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            marginRight: 7,
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            borderColor: "#345c80",
            borderWidth: 1,
            height: 24,
            width: 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            marginRight: 7,
          }}
        >
          <Text>5</Text>
        </View>
        <View
          style={{
            borderColor: "#345c80",
            borderWidth: 1,
            height: 24,
            width: 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            marginRight: 7,
          }}
        >
          <Text>5</Text>
        </View>
        <View
          style={{
            borderColor: "#345c80",
            borderWidth: 1,
            height: 24,
            width: 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            marginRight: 7,
          }}
        >
          <Text>5</Text>
        </View>
        <View
          style={{
            borderColor: "#345c80",
            borderWidth: 1,
            height: 24,
            width: 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            marginRight: 7,
          }}
        >
          <Text>4</Text>
        </View>
        <View
          style={{
            borderColor: "#345c80",
            borderWidth: 1,
            height: 24,
            width: 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            marginRight: 7,
          }}
        >
          <Text>3</Text>
        </View>
        <View
          style={{
            borderColor: "#345c80",
            borderWidth: 1,
            height: 24,
            width: 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            marginRight: 7,
          }}
        >
          <Text>4</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#d6d6d6",
          borderBottomWidth: 1,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          marginLeft: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../images/user.png")}
          style={{ height: 24, width: 24 }}
        />
        <Text style={{ marginLeft: 10, fontWeight: 700, fontSize: 16 }}>
          Travellar Impressions
        </Text>
      </View>
      <Text style={{ color: "#5b5b5b", margin: 10 }}>
        The property is located in a prime location near Panjim bus stand,
        making it easily accessible. The staff is polite, friendly, and
        cooperative. The rooms are clean and well-maintained, but some guests
        found them to be small. The food quality is good, but the breakfast menu
        is limited and repetitive. The property has good amenities, including a
        gym and a kids' room. However, some guests faced issues with the AC, hot
        water, and room service. Overall, it's a decent property for short
        business trips or solo travelers.
      </Text>
      <Text
        style={{
          textDecorationLine: "underline",
          color: "#008aff",
          marginLeft: 10,
          fontWeight: 700,
          marginBottom: 10,
        }}
      >
        Read more
      </Text>
      <View
        style={{
          borderBottomColor: "#d6d6d6",
          borderBottomWidth: 1,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          marginLeft: 10,
          fontWeight: 700,
        }}
      >
        Guests Photos{" "}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "95%",
          height: 100,
          padding: 10,
        }}
      >
        <Image
          source={require("../../images/hoteloyo.jpg")}
          style={{ height: 80, width: "24%", borderRadius: 6, marginRight: 10 }}
        />
        <Image
          source={require("../../images/hoteloyo.jpg")}
          style={{ height: 80, width: "24%", borderRadius: 6, marginRight: 10 }}
        />
        <Image
          source={require("../../images/hoteloyo.jpg")}
          style={{ height: 80, width: "24%", borderRadius: 6, marginRight: 10 }}
        />
        <View
          style={{
            height: 80,
            width: "24%",
            borderRadius: 6,
            marginRight: 10,
            backgroundColor: "grey",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: 700, fontSize: 16 }}> +991</Text> Guests
            Photos
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#d6d6d6",
          borderBottomWidth: 1,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          marginLeft: 10,
          fontWeight: 700,
        }}
      >
        Guests Reviews{" "}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 10,
          marginLeft:10, marginTop:10, marginBottom:5
        }}
      >
        <View>
          <Text style={{ color: "#000000", fontWeight: 700 }}>Feedback</Text>
          <Text style={{ color: "#6e6e6e" }}>
            Mustafa K<Text style={{ fontWeight: 800 }}> • </Text>Feb 25,2024
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#0c57b2",
            width: 30,
            height: 30,
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "#0c57b5", fontWeight: 700 }}>4.0</Text>
        </View>
      </View>
      <Text style={{ color: "#4a4a4a", marginLeft:10, marginRight:10, }}>
        The service was good so was the room and everything but wash basin was
        clogging again and again, rest all good thank you so much
      </Text>
      <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 10,
        marginLeft:10, marginTop:10, marginBottom:5
      }}
    >
      <View>
        <Text style={{ color: "#000000", fontWeight: 700 }}>Excellent Stay</Text>
        <Text style={{ color: "#6e6e6e" }}>
          Abhishek Bibek<Text style={{ fontWeight: 800 }}> • </Text>Feb 23,2024
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#0c57b2",
          width: 30,
          height: 30,
          borderRadius: 6,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "#0c57b5", fontWeight: 700 }}>5.0</Text>
      </View>
    </View>
    <Text style={{ color: "#4a4a4a", marginLeft:10, marginRight:10, marginBottom:10}}>
      The service was good so was the room and everything but wash basin was
      clogging again and again, rest all good thank you so much
    </Text>
    <Text
        style={{
          color: "#008aff",
          marginLeft: 10,
          fontWeight: 700,
          marginBottom: 10,
        }}
      >
        Read All 1087 Reviews
      </Text>
    </View>
  );
};

export default ReviewRating;
