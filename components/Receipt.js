// /* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { DataTable } from 'react-native-paper';
import {Text, StyleSheet, View, TextInput, Button, ScrollView} from 'react-native';

const Receipt = () => {
    const [name, setName] = useState('');
    const [num, setNum] = useState('');
    const [dnt, setDnt] = useState('');
    const [iname, setIName] = useState('');
    const [quan, setQuan] = useState('');
    const [price, setPrice] = useState('');
    const [dis, setDis] = useState('');
    const [gst, setGst] = useState('');
    const [tm, setTm] = useState('');
    const [tmp, setTmp] = useState('');
    const [change, setChange] = useState(false);
    const [edit,setEdit] = useState(true);
return (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.hh}> RECEIPT GENERATION FORM </Text>
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Buyer's Name"
          placeholderTextColor="grey"
          editable={edit}
          onChangeText={newText => setName(newText)}
        />
        <TextInput
          style={styles.inputStyle}
          keyboardType="numeric"
          placeholder="Contact Number"
          placeholderTextColor="grey"
          maxLength={10}
          required
          editable={edit}
          onChangeText={newText => setNum(newText)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Date and Time"
          placeholderTextColor="grey"
          editable={edit}
          onChangeText={newText => setDnt(newText)}
        />
        <Text style={styles.inputLabel}>
          Item Details
        </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Item Name"
          placeholderTextColor="grey"
          editable={edit}
          onChangeText={newText => setIName(newText)}
        />
        <TextInput
          style={styles.inputStyle}
          keyboardType="numeric"
          placeholder="Quantity"
          placeholderTextColor="grey"
          editable={edit}
          onChangeText={newText => setQuan(newText)}
        />
        <TextInput
          style={styles.inputStyle}
          keyboardType="numeric"
          placeholder="Price per Quantity"
          placeholderTextColor="grey"
          editable={edit}
          onChangeText={newText => setPrice(newText)}
        />
        <TextInput
          style={styles.inputStyle}
          keyboardType="numeric"
          placeholder="Discount(excluding GST)%"
          placeholderTextColor="grey"
          editable={edit}
          onChangeText={newText => setDis(newText)}
        />
        <TextInput
          style={styles.inputStyle}
          keyboardType="numeric"
          placeholder="GST(%)"
          editable={edit}
          placeholderTextColor="grey"
          onChangeText={newText => setGst(newText)}
        />
        <TextInput
          style={styles.inputStyle}
          keyboardType="numeric"
          placeholder="Total Amount of this Item"
          placeholderTextColor="grey"
          editable={edit}
          onChangeText={newText => setTm(newText)}
        />
      </View>
      <TextInput
        style={[styles.inputStyle, styles.x]}
        keyboardType="numeric"
        placeholder="Total Amount to be paid"
        placeholderTextColor="grey"
        editable={edit}
        onChangeText={newText => setTmp(newText)}
      />
      <Button
        title="Submit"
        style={styles.buton}
        color= "green"
        onPress={() => {
          setChange(true);
          setEdit(false);
        }}
      />

      {change &&
      <DataTable>
      <Text style={styles.heading}>INVOICE</Text>
      <View style={styles.shop}>
        <Text style={styles.title}>UpBringo's Store</Text>
        <Text style={styles.title}>A-60, UpBringo</Text>
      </View>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Buyer's Name</DataTable.Cell>
        <DataTable.Cell style={styles.data}>{name}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Contact Number</DataTable.Cell>
        <DataTable.Cell style={styles.data}>{num}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Date and Time</DataTable.Cell>
        <DataTable.Cell style={styles.data}>{dnt}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Item Name</DataTable.Cell>
        <DataTable.Cell style={styles.data}>{iname}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Quantity</DataTable.Cell>
        <DataTable.Cell style={styles.data}> {quan}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Price per Quantity</DataTable.Cell>
        <DataTable.Cell style={styles.data}>{price}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Discount(excluding GST)%</DataTable.Cell>
        <DataTable.Cell style={styles.data}> {dis}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>GST(%)</DataTable.Cell>
        <DataTable.Cell style={styles.data}> {gst}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Total Amount</DataTable.Cell>
        <DataTable.Cell style={styles.data}> {tm}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.data}>Amount to be Paid</DataTable.Cell>
        <DataTable.Cell style={styles.data}> {tmp}</DataTable.Cell>
      </DataTable.Row>
      <Button title="Edit Details" onPress={() => {
          setChange(false);
          setEdit(true);
        }}/>
    </DataTable>}
    </View>
  </ScrollView>
);
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 420,
  },
  hh: {
    fontSize: 25,
    color: 'black',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'purple',
    borderWidth: 2,
    color: 'black',
  },
  inputLabel:{
      alignItems:'center',
      textAlign: 'center',
      color: 'black',
      marginTop: 10,
      fontSize: 20,
  },
  buton:{
    marginTop: 10,
    padding: 20,
    color: 'green',
  },
  x:{
    marginBottom:20,
  },
  heading:{
    textAlign: 'center',
    color: 'black',
    fontSize: 50,
    marginBottom: 20,
  },
  shop:{
    textAlign: 'left',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginBottom: 20,
  },
  title:{
    textAlign: 'left',
    color: 'black',
    fontSize: 18,
  },
  data:{
    borderColor: 'black',
    borderWidth: 2,
    paddingLeft: 10,
    width:200,
  },
});

export default Receipt;
