import React from "react";
import {
  Text,
  View,
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
} from "native-base";
import { connect } from "react-redux";
import styles from "./styles";
// Components
import LogoutButton from "./LogoutButton";

// const OrderItem = ({ order }) => (
//   <ListItem button style={styles.listitem} onPress={() => alert("Hi")}>
//     <Card style={styles.transparent}>
//       <CardItem style={styles.transparent}>
//         <Text>{order.date.toString()}</Text>
//       </CardItem>
//     </Card>
//   </ListItem>
// );

const Profile = ({ username, order }) => {
  // const orderList = order.map((order) => (
  //   <OrderItem order={order} key={order.date.toString()} />
  // ));
  return (
    <View>
      {/* <View style={styles.container}> */}
      <ListItem>
        <Thumbnail
          source={{
            uri:
              "https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
          }}
          // style={{ height: 200, width: 370 }}
        />
        <Text style={styles.text2}>Welcome Sara</Text>
        {/* </View> */}
      </ListItem>
      <LogoutButton />
    </View>
  );
};
const mapStateToProps = ({ user, order }) => ({
  username: user?.username,
  order,
});

export default connect(mapStateToProps)(Profile);
// export default Profile;
