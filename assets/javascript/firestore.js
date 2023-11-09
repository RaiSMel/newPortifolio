  export const enviarBanco = (information) => {
    let firebaseConfig = {
        apiKey: "AIzaSyCoYsIIutLwZq7tFMLUZrzCOed68uK1JWo",
        authDomain: "rock-perception-286915.firebaseapp.com",
        projectId: "rock-perception-286915",
        storageBucket: "rock-perception-286915.appspot.com",
        messagingSenderId: "179293564511",
        appId: "1:179293564511:web:965cde4afc84c267b7b5ea",
        measurementId: "G-QZ8VHT9XZY"
      };
    
      firebase.initializeApp(firebaseConfig);
      let db = firebase.firestore();
      db.collection("Mensagem").add({
        nome: `${information.nome}`,
        email: `${information.email}`,
        mensagem: `${information.mensagem}`
    })
    
  }