function displayGetGuardThanku() {
  document.getElementById("thankyou_container").style.display = "block";
}

function disableGetGuardThanku() {
  document.getElementById("thankyou_container").style.display = "none";
  document.getElementById("form_get_guard_container").reset();
}

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAYfNIpbpc6zUsxitPcQxLDgw6dHfJw0UM",
  authDomain: "ossentinel.firebaseapp.com",
  projectId: "ossentinel",
  storageBucket: "ossentinel.appspot.com",
  messagingSenderId: "227923727208",
  appId: "1:227923727208:web:3e32aa077dc46b041e3cdd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference contactinfo collection
let getGuardInfo = firebase.database().ref("GetGuardForm");

document
  .getElementById("form_get_guard_container")
  .addEventListener("submit", submitGetGuardForm);

console.log("hello");

function submitGetGuardForm(e) {
  e.preventDefault();

  //get input values

  let name = document.querySelector(".cust_name").value;
  let email = document.querySelector(".cust_email").value;
  let phone = document.querySelector(".cust_phno").value;
  let address = document.querySelector(".cust_Addr").value;
  let no_of_guards = document.querySelector(".cust_noOfguards").value;

  saveGetGuardInfo(name, email, phone, address, no_of_guards);
}

// Save infos to firebase

function saveGetGuardInfo(name, email, phone, address, no_of_guards) {
  let newgetGuardInfo = getGuardInfo.push();

  newgetGuardInfo.set({
    Customer_Name: name,
    Customer_Email: email,
    Customer_Phone: phone,
    Customer_Address: address,
    Type_Of_Guard: gtype,
    No_Of_Guards_Need: no_of_guards,
  });
}
