var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = { 'country': 'ie' };
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/');

var countries = {
  'ie': {
    center: { lat: 52.9335, lng: -9.3441 },
    zoom: 11,
    search: ['natural_feature']
  },
};
// Dictionary to store radio button variables to loop through in onPlaceChanged() function
var searchOptions = {
    'sleepRadio':{ zoom: 14, search: ['lodgings'] },
    'eatRadio':{ zoom: 14, search: ['cafe','restaurant'] },
    'drinkRadio':{ zoom: 14, search: ['bar', 'night_club'] },
    'seeRadio':{ zoom: 11, search: ['natural_feature'] }
};
var radioButtonIDs = ['sleepRadio', 'eatRadio', 'drinkRadio', 'seeRadio'];

function initMap() {
  document.getElementById("seeRadio").checked = true;
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: countries['ie'].zoom,
    center: countries['ie'].center,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    type: ['natural_feature'],
    streetViewControl: false
  });

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });
  //document.getElementById('autocomplete').value = "Lahinch, County Clare, Ireland";
  // Create the autocomplete object and associate it with the UI input control.
  // Restrict the search to the default country, and to place type "cities".
  autocomplete = new google.maps.places.Autocomplete(//SearchBox
    /** @type {!HTMLInputElement} */
    (
      document.getElementById('autocomplete')), {
      types: ['(cities)'],
      componentRestrictions: countryRestrict,
      //usePreview: false
    });
  autocomplete.addListener('place_changed', onPlaceChanged);
  
  var request = {
    //query: 'Lahinch, County Clare, Ireland',
    //bounds: map.getBounds(),
    types: ['natural_feature'],
    location: countries['ie'].center,
    radius: 10
  };

  places = new google.maps.places.PlacesService(map);
  /*
  places.nearbySearch(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      createMarkers(results);
      console.log(results);
      //for (var i = 0; i < results.length; i++) {
      //  createMarker(results[i]);
      //}
      map.setCenter(results[0].geometry.location);
     autocomplete.set('place',place);
    }
  });*/
  // Add a DOM event listener to react when the user selects a radio button
  radioButtonIDs.forEach(function(element) {
    document.getElementById(element).addEventListener(
      'change', onPlaceChanged);
  });
  // //This should work but it is not, maybe delay after a second?
  // google.maps.event.trigger(autocomplete, 'place_changed');
  // google.maps.event.trigger( autocomplete, 'submit', {} );
  search(['natural_feature']);
  onPlaceChanged();
}


// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
     for(var id of radioButtonIDs){
        if ($("#"+id).is(':checked')) {             //concatenate the id to the AJAX selector: # + id
            var place = autocomplete.getPlace();
            console.log(place);
            if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(searchOptions[id].zoom);    // Take the zoom variable from the dictionary with the id
            search(searchOptions[id].search);       // Search keywords from dictionary
            // Because there can be only one radio button selected
            // We can break from the loop here
            break;
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a city");
        }
      }
    }
}

// Search for hotels in the selected city, within the viewport of the map.
function search(types) {
  var search = {
    bounds: map.getBounds(),
    types: types
  };

  places.nearbySearch(search, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();
      createMarkers(results);
      // Create a marker for each hotel found, and
      // assign a letter of the alphabetic to each marker icon.
        }
  });
}

// createMarkers fucntion for initMap.
function createMarkers(results){
    // Create a marker for each hotel found, and
    // assign a letter of the alphabetic to each marker icon.
    for (var i = 0; i < results.length; i++) {
    var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
    var markerIcon = MARKER_PATH + markerLetter + '.png';
    // Use marker animation to drop the icons incrementally on the map.
    markers[i] = new google.maps.Marker({
        position: results[i].geometry.location,
        animation: google.maps.Animation.DROP,
        icon: markerIcon
    });
    // If the user clicks a hotel marker, show the details of that hotel
    // in an info window.
    markers[i].placeResult = results[i];
    google.maps.event.addListener(markers[i], 'click', showInfoWindow);
    setTimeout(dropMarker(i), i * 100);
    addResult(results[i], i);
    }
}

// Search for bar in the selected city, within the viewport of the map.


// Search for bar in the selected city, within the viewport of the map.

// Reset button

function resetbtn() {
  clearMarkers();
  clearResults();
  initMap();
}

// Empties markers array
function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
}

// Set the country restriction based on user input.
// Also center and zoom the map on the given country.
function setAutocompleteCountry() {
  var country = document.getElementById('country').value;
  if (country == 'ie') {
    autocomplete.setComponentRestrictions({ 'country': [] });
    map.setCenter({ lat: 52.9335, lng: -9.3441 });
    map.setZoom(10);
  }
  else {
    autocomplete.setComponentRestrictions({ 'country': country });
    map.setCenter(countries[country].center);
    map.setZoom(countries[country].zoom);
  }
  clearResults();
  clearMarkers();
}

function dropMarker(i) {
  return function() {
    markers[i].setMap(map);
  };
}

function addResult(result, i) {
  var results = document.getElementById('results');
  var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
  var markerIcon = MARKER_PATH + markerLetter + '.png';

  var tr = document.createElement('tr');
  tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
  tr.onclick = function() {
    google.maps.event.trigger(markers[i], 'click');
  };

  var iconTd = document.createElement('td');
  var nameTd = document.createElement('td');
  var icon = document.createElement('img');
  icon.src = markerIcon;
  icon.setAttribute('class', 'placeIcon');
  icon.setAttribute('className', 'placeIcon');
  var name = document.createTextNode(result.name);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
}

function clearResults() {
  var results = document.getElementById('results');
  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
}

// Get the place details for a hotel. Show the information in an info window,
// anchored on the marker for the hotel that the user selected.
function showInfoWindow() {
  var marker = this;
  places.getDetails({ placeId: marker.placeResult.place_id },
    function(place, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }
      infoWindow.open(map, marker);
      buildIWContent(place);
    });
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
  document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
    'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
    '">' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;

  if (place.formatted_phone_number) {
    document.getElementById('iw-phone-row').style.display = '';
    document.getElementById('iw-phone').textContent =
      place.formatted_phone_number;
  }
  else {
    document.getElementById('iw-phone-row').style.display = 'none';
  }

  // Assign a five-star rating to the hotel, using a black star ('&#10029;')
  // to indicate the rating the hotel has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
    var ratingHtml = '';
    for (var i = 0; i < 5; i++) {
      if (place.rating < (i + 0.5)) {
        ratingHtml += '&#10025;';
      }
      else {
        ratingHtml += '&#10029;';
      }
      document.getElementById('iw-rating-row').style.display = '';
      document.getElementById('iw-rating').innerHTML = ratingHtml;
    }
  }
  else {
    document.getElementById('iw-rating-row').style.display = 'none';
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.
  if (place.website) {
    var fullUrl = place.website;
    var website = hostnameRegexp.exec(place.website);
    if (website === null) {
      website = 'http://' + place.website + '/';
      fullUrl = website;
    }
    document.getElementById('iw-website-row').style.display = '';
    document.getElementById('iw-website').textContent = website;
  }
  else {
    document.getElementById('iw-website-row').style.display = 'none';
  }
}

// A $( document ).ready() block.
$(document).ready(function() {
  initMap();
});