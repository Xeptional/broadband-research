//object containing all the states 
const statesData = {
  
  "Select A State": "",
  "Abia": "group link 1",
  "Adamawa": "group link 2", 
  "Akwa Ibom": "group link 3",
  "Anambra": "group link 4",
  "Bauchi": "group link 5", 
  "Bayelsa": "",
  "Benue": "", 
  "Borno": "", 
  "Cross River": "", 
  "Delta": "",
  "Ebonyi": "",
  "Edo": "",
  "Ekiti": "",
  "Enugu": "",
  "Gombe": "",
  "Imo": "",
  "Jigawa": "", 
  "Kaduna": "", 
  "Kano": "", 
  "Katsina": "",
  "Kebbi": "", 
  "Kogi": "", 
  "Kwara": "",
  "Lagos": "",
  "Nasarawa": "", 
  "Niger": "", 
  "Ogun": "",
  "Ondo": "", 
  "Osun": "",
  "Oyo": "",
  "Plateau": "",
  "Rivers": "", 
  "Sokoto": "", 
  "Taraba": "",
  "Yobe": "",
  "Zanfara": "", 
  "FCT": ""

}

//function to populate select with states object
function populateState(statesData) {
  

  const statesDropDown = document.getElementById("statesDropDown");

  for(let key in statesData) {
    let stateOption = document.createElement("option");
    stateOption.setAttribute('value', statesData[key]);

    let optionText = document.createTextNode(key);
    stateOption.appendChild(optionText);

    statesDropDown.appendChild(stateOption);
  }

  const groupLink = document.getElementById("group-link");
  statesDropDown.addEventListener("change", e => {

    let link = document.createElement("a");
    link.setAttribute('href', e.target.value);
    link.innerHTML = "";
    link.innerHTML = e.target.value;
    
    // let linkText = document.createTextNode("Group Link");
    // link.appendChild(linkText);

    groupLink.appendChild(link);

  })

  
}

populateState(statesData);


// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}