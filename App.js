import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      {/* Info container */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}> My Tasks </Text>
        <Text style={styles.infosubtitle}> 1/2 completed . 1 pending  </Text>
      </View>


      {/* inputcontainer */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputStyle} />
        <View style={styles.button}>
          <Text style={styles.ButtonText}>+</Text>
        </View>
      </View>
      {/* Task items */}
      <TaskItem />
      <TaskItem />

      <TaskItem />
    </View>

  );
}



function TaskItem() {
  return <View style={styles.taskItemContainer}>
    <View style={styles.taskItem}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.circle}> </View>
        <Text>Eat breakfast</Text>
      </View>
      <View style={styles.deleteButton}>
        <Text> 🗑️ </Text>
      </View>

    </View>
  </View>
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
    paddingTop: 50,
    paddingHorizontal: 20

  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",

  },
  infoTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "900"
  },
  infosubtitle: {
    fontSize: 16,
    color: "white"
  },
  inputStyle: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 20,
    padding: 20
  },
  inputContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16
  }

  ,
  button: {
    backgroundColor: "#ff6b6b",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  ButtonText: {
    color: "white",
    fontSize: 24
  },
  taskItemContainer: {
    marginTop: 20

  },
  taskItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 12


  },
  deleteButton: {
    backgroundColor: "#ff6b6b",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  },
  circle: {
    borderColor: "grey",
    height: 20,
    width: 20,
    borderWidth: 1,

    borderRadius: 10,
    marginRight: 8
  }

});
