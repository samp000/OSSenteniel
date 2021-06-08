const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");
const navLogo = document.querySelector("#navbar_logo");

//display mobile menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  $("body").css("overflow", "hidden");
};

menu.addEventListener("click", mobileMenu);

// hide menu bar while clicking on nav links

const hideMobileMenu = () => {
  $("body").css("overflow", "scroll");
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 968 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

// Navbar hiding
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.boxShadow =
      "0 1px 1px  rgb(246, 246, 246)";
  } else {
    document.getElementById("navbar").style.top = "-80px";
    document.getElementById("navbar").style.borderBottomColor = "transperent";
    document.getElementById("navbar").style.boxShadow = "none";
  }
  prevScrollpos = currentScrollPos;
};

// slideshow
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 4 seconds
}

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

// loader

var loader = document.querySelector(".loader_container");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}

// Expand btn in about us content

function expand() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("expandBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// accordium(about us)

// Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

document.getElementById("defaultOpen").click();

function openTab(evt, tbname) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tbname).style.display = "block";
  evt.currentTarget.className += " active";
}

// Form in services
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function displayContactThanku() {
  document.getElementById("thankyou_container").style.display = "block";
}

function disableContactThanku() {
  document.getElementById("thankyou_container").style.display = "none";
  document.getElementById("Form-contact").reset();
}

const icon = document.querySelector(".fa-times-circle");
icon.addEventListener("click", closeForm);

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("thankyou_container").style.display = "none";
}

// Feedback Section

function openFeedback() {
  document.getElementById("feed_container").style.display = "block";
}

function closefeedForm() {
  document.getElementById("feed_container").style.display = "none";
}

const feedbtn = document.querySelector(".feedback_btn");
feedbtn.addEventListener("click", openFeedback);

const btn = document.querySelector(".submit-rating");
const thanksmsg = document.querySelector(".thanks-msg");
const starRating = document.querySelector(".star-input");
// Success msg show/hide
btn.onclick = () => {
  starRating.style.display = "none";
  thanksmsg.style.display = "table";
  return false;
};

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
let contactInfo = firebase.database().ref("ContactInfo");

document.querySelector(".Form-contact").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //get input values

  let name = document.querySelector(".fullname").value;
  let email = document.querySelector(".email").value;
  let subject = document.querySelector(".subject").value;

  saveContactInfo(name, email, subject);
}

// Save infos to firebase

function saveContactInfo(name, email, subject) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    Name: name,
    Email: email,
    Message: subject,
  });
}
