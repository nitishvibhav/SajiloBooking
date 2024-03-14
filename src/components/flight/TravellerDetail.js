import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const TravellerDetail = () => {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        width: "95%",
        borderRadius: 6,
        backgroundColor: "white",
        margin: 10,
        elevation: 5,
        shadowColor: "grey",
        alignSelf: "center",
      }}
    >
      <Text
        style={{ margin: 10, fontSize: 18, fontWeight: 800, marginLeft: 20 }}
      >
        Traveller Details
      </Text>
      <View
        style={{
          backgroundColor: "#e2fffa",
          width: "95%",
          alignSelf: "center",
          padding: 10,
          marginBottom: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: 600 }}>
          Multiple travellers can now receive booking details{" "}
          <Text style={{ fontWeight: 400 }}>
            & other alerts by just adding their contact info!
          </Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
          marginLeft: 20,
          marginRight: 30,
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../images/user2.png")}
            style={{
              height: 20,
              width: 20,
              resizeMode: "contain",
              marginRight: 10,
              backgroundColor: "#daedfc",
              borderRadius: 10,
              tintColor: "#2d4b63",
            }}
          />
          <Text style={{ color: "#4b4b4b", fontWeight: 700, fontSize: 16 }}>
            ADULT(12yrs+)
          </Text>
        </View>
        <Text style={{ color: "#000000", fontWeight: 500 }}>
          0/1 <Text style={{ color: "#9a9a9a", fontWeight: 500 }}>added</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          width: "95%",
          alignItems: "center",
          borderRadius: 1,
          elevation: 1,
          margin: 10,
        }}
        onPress={() => setModalVisible1(true)}
      >
        <Text
          style={{
            color: "#1c8ffa",
            fontSize: 16,
            fontWeight: 600,
            margin: 10,
          }}
        >
          +ADD NEW ADULT
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: "#f1f1f1",
          borderBottomWidth: 1,
          marginTop: 20,
        }}
      />
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
          marginRight: 20,
          marginLeft: 20,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 800 }}>
          Booking details will be sent to
        </Text>
        <Image
          source={require("../../images/next.png")}
          style={{ height: 20, width: 20, tintColor: "#4c87f5" }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: "row", margin: 10, marginLeft: 20 }}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={require("../../images/email.png")}
          style={{
            height: 20,
            width: 20,
            resizeMode: "contain",
            marginRight: 10,
            tintColor: "black",
          }}
        />
        <Text style={{ color: "#464646" }}>nitishvibhav@gmail.com</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: "row", marginLeft: 20, marginBottom: 10 }}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={require("../../images/phone-call.png")}
          style={{
            height: 20,
            width: 20,
            resizeMode: "contain",
            marginRight: 10,

            tintColor: "black",
          }}
        />
        <Text style={{ color: "#464646" }}>8420557642</Text>
      </TouchableOpacity>

      <View
        style={{
          borderBottomColor: "#f1f1f1",
          borderBottomWidth: 1,
          marginTop: 20,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          marginLeft: 20,
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Image
          source={require("../../images/unchecked3.png")}
          style={{
            height: 20,
            width: 20,
            resizeMode: "contain",
            marginRight: 10,
            tintColor: "#a1a1a1",
          }}
        />
        <Text style={{ color: "#151515", fontWeight: 600 }}>
          I have a GST number
          <Text style={{ color: "#9b9b9b", fontWeight: 600 }}> (Optional)</Text>
        </Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}>
          <View
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              bottom: 0,
              position: "absolute",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                marginTop: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>
                Add Adult1
              </Text>
              <Pressable
                style={{
                  borderRadius: 50,
                  height: 20,
                  width: 20,
                  marginRight: 20,
                  backgroundColor: "#b5b5b5",
                }}
                onPress={() => setModalVisible1(!modalVisible1)}
              >
                <Image
                  source={require("../../images/reject.png")}
                  style={{ height: 20, width: 20, tintColor: "white" }}
                />
              </Pressable>
            </View>
            <View
              style={{
                backgroundColor: "#fef8f8",
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 10,
                padding: 10,
              }}
            >
              <Text style={{ color: "#ff9764", fontSize: 12 }}>
                Double Check the spellings, to avoid modifications later{" "}
                <Text style={{ color: "#362e2e", fontSize: 12 }}>
                  Ensure the name and spelling matches with that on the{" "}
                </Text>{" "}
                <Text
                  style={{ color: "#362e2e", fontSize: 12, fontWeight: 700 }}
                >
                  {" "}
                  valid government ID
                </Text>{" "}
                <Text style={{ color: "#362e2e", fontSize: 12 }}>
                  you will be carrying{" "}
                </Text>
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", marginLeft: 10, marginTop: 10 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 20,
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../images/selected.png")}
                  style={{
                    height: 20,
                    width: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    tintColor: "#2370e6",
                  }}
                />
                <Text
                  style={{ color: "#212121", fontSize: 16, fontWeight: 600 }}
                >
                  Male
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../images/non-selected.png")}
                  style={{
                    height: 20,
                    width: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    tintColor: "#778797",
                  }}
                />
                <Text
                  style={{ color: "#212121", fontSize: 16, fontWeight: 600 }}
                >
                  Female
                </Text>
              </View>
            </View>
            <TextInput
              style={{
                backgroundColor: "#f7f7f7",
                borderColor: "#e3e3e3",
                borderWidth: 1,
                width: "90%",
                alignSelf: "center",
                padding: 10,
                color: "#a9a9a9",
                paddingLeft: 20,
                marginTop: 20,
                borderRadius: 6,
              }}
              placeholder="First & Middle Name"
            />
            <TextInput
              style={{
                backgroundColor: "#f7f7f7",
                borderColor: "#e3e3e3",
                borderWidth: 1,
                width: "90%",
                alignSelf: "center",
                padding: 10,
                color: "#a9a9a9",
                paddingLeft: 20,
                marginTop: 20,
                borderRadius: 6,
              }}
              placeholder="Last Name"
            />
            <TouchableOpacity
              style={{
                width: "90%",
                alignSelf: "center",
                backgroundColor: "#999999",
                height: 50,
                borderColor: "#e4e4e4",
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 30,
                marginBottom: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: 800 }}>
                Save & Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}>
          <View
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              bottom: 0,
              position: "absolute",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                marginTop: 20,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>
                Contact Details
              </Text>
              <Pressable
                style={{
                  borderRadius: 50,
                  height: 20,
                  width: 20,
                  marginRight: 20,
                  backgroundColor: "#b5b5b5",
                }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Image
                  source={require("../../images/reject.png")}
                  style={{ height: 20, width: 20, tintColor: "white" }}
                />
              </Pressable>
            </View>
            <View
              style={{
                backgroundColor: "#fef8f8",
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 10,
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 12 }}>
                Booking details and updates like flight change, gate change etc.
                will be sent to this person
              </Text>
            </View>

            <TextInput
              style={{
                backgroundColor: "#f7f7f7",
                borderColor: "#e3e3e3",
                borderWidth: 1,
                width: "90%",
                alignSelf: "center",
                padding: 10,
                color: "#a9a9a9",
                paddingLeft: 20,
                marginTop: 20,
                borderRadius: 6,
              }}
              placeholder="Mobile No."
            />
            <TextInput
              style={{
                backgroundColor: "#f7f7f7",
                borderColor: "#e3e3e3",
                borderWidth: 1,
                width: "90%",
                alignSelf: "center",
                padding: 10,
                color: "#a9a9a9",
                paddingLeft: 20,
                marginTop: 20,
                borderRadius: 6,
              }}
              placeholder="Email"
            />
            <TouchableOpacity
              style={{
                width: "90%",
                alignSelf: "center",
                backgroundColor: "#999999",
                height: 50,
                borderColor: "#e4e4e4",
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 30,
                marginBottom: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: 800 }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TravellerDetail;
