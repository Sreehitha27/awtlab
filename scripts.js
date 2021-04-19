// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA13kUiiKGuinmC9mcOhAmLgKB2i12l6BM",
    authDomain: "myproject-408b3.firebaseapp.com",
    projectId: "myproject-408b3",
    storageBucket: "myproject-408b3.appspot.com",
    messagingSenderId: "344309521791",
    appId: "1:344309521791:web:fe8f75a987523102550e4a",
    measurementId: "G-HR3NER4FEX"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var dbref=firebase.database().ref().child("students")
  function insertData()
  {
      var sname=document.getElementById("sname").value
        var rollno=document.getElementById("rollno").value
        dbref.child(rollno).set({
            sname:sname,
            rollno:rollno
        })
  
    }

    function deleteData()
    {
        var id=window.prompt("Enter the rollno to be deleted");
        dbref.child(id).remove()
        console.log("Data deleted");
    }

    function updateData()
    {
        var id=document.getElementById("rollno").value
        var nName=document.getElementById("sname").value
        dbref.child(id).update({sname:nName})
        
    }

    function loadData()
    {
        console.log("Reading Data...")
        dbref.on("value",(snap)=>{
            snap.forEach((data)=>{
                console.log(data.val())
            })
        })
    }

