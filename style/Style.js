import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F2DDA4',
  },

  header: {
    marginTop: 30,
    marginBottom: 18,
    backgroundColor: '#413C58',
    flexDirection: 'row',
  },

  customFont: {
    fontFamily: 'Frank',
    fontSize: 19,
  },

  gameinfo: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
  },

  gameinfoBold: {
    fontWeight: 'bold',
  },

  footer: {
    marginTop: 25,
    backgroundColor: '#413C58',
    flexDirection: 'row'
  },

  title: {
    color: '#E7EFC5',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },

  row: {
    marginTop: 20,
    padding: 10
  },
  
  gameboard: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  flex: {
    flexDirection: "row",
  },

  button: {
    margin: 20,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#413C58",
    width: 150,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#BFD7B5',
    borderWidth: 3
  },
  
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color:'#E7EFC5',
    fontSize: 20
  },

  author: {
    fontFamily:'Papyrus',
    color: '#E7EFC5',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
});