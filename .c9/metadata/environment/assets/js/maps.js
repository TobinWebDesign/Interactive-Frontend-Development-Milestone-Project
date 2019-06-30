{"filter":false,"title":"maps.js","tooltip":"/assets/js/maps.js","undoManager":{"mark":105,"position":100,"stack":[[{"start":{"row":194,"column":0},"end":{"row":225,"column":1},"action":"insert","lines":["// Search for bar in the selected city, within the viewport of the map.","function searchDrink() {","  var search = {","    bounds: map.getBounds(),","    types: ['bar, nightclub']","  };","","  places.nearbySearch(search, function(results, status) {","    if (status === google.maps.places.PlacesServiceStatus.OK) {","      clearResults();","      clearMarkers();","      // Create a marker for each bar found, and","      // assign a letter of the alphabetic to each marker icon.","      for (var i = 0; i < results.length; i++) {","        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));","        var markerIcon = MARKER_PATH + markerLetter + '.png';","        // Use marker animation to drop the icons incrementally on the map.","        markers[i] = new google.maps.Marker({","          position: results[i].geometry.location,","          animation: google.maps.Animation.DROP,","          icon: markerIcon","        });","        // If the user clicks a bar marker, show the details of that hotel","        // in an info window.","        markers[i].placeResult = results[i];","        google.maps.event.addListener(markers[i], 'click', showInfoWindow);","        setTimeout(dropMarker(i), i * 100);","        addResult(results[i], i);","      }","    }","  });","}"],"id":102}],[{"start":{"row":195,"column":15},"end":{"row":195,"column":20},"action":"remove","lines":["Drink"],"id":103},{"start":{"row":195,"column":15},"end":{"row":195,"column":16},"action":"insert","lines":["S"]},{"start":{"row":195,"column":16},"end":{"row":195,"column":17},"action":"insert","lines":["e"]},{"start":{"row":195,"column":17},"end":{"row":195,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":198,"column":13},"end":{"row":198,"column":27},"action":"remove","lines":["bar, nightclub"],"id":104},{"start":{"row":198,"column":13},"end":{"row":198,"column":44},"action":"insert","lines":["'art_gallery', 'museum', 'park'"]}],[{"start":{"row":198,"column":43},"end":{"row":198,"column":45},"action":"remove","lines":["''"],"id":105}],[{"start":{"row":198,"column":13},"end":{"row":198,"column":14},"action":"remove","lines":["'"],"id":106}],[{"start":{"row":198,"column":42},"end":{"row":198,"column":43},"action":"insert","lines":["'"],"id":107}],[{"start":{"row":92,"column":3},"end":{"row":93,"column":0},"action":"insert","lines":["",""],"id":108},{"start":{"row":93,"column":0},"end":{"row":93,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":93,"column":2},"end":{"row":103,"column":3},"action":"insert","lines":["else if ($(\"#drinkRadio\").is(':checked')) {","    var place = autocomplete.getPlace();","    if (place.geometry) {","      map.panTo(place.geometry.location);","      map.setZoom(10);","      searchDrink();","    }","    else {","      $('#autocomplete').attr(\"placeholder\", \"Enter a city\");","    }","  }"],"id":109}],[{"start":{"row":93,"column":15},"end":{"row":93,"column":20},"action":"remove","lines":["drink"],"id":110},{"start":{"row":93,"column":15},"end":{"row":93,"column":16},"action":"insert","lines":["s"]},{"start":{"row":93,"column":16},"end":{"row":93,"column":17},"action":"insert","lines":["e"]},{"start":{"row":93,"column":17},"end":{"row":93,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":98,"column":12},"end":{"row":98,"column":17},"action":"remove","lines":["Drink"],"id":111},{"start":{"row":98,"column":12},"end":{"row":98,"column":13},"action":"insert","lines":["S"]},{"start":{"row":98,"column":13},"end":{"row":98,"column":14},"action":"insert","lines":["e"]},{"start":{"row":98,"column":14},"end":{"row":98,"column":15},"action":"insert","lines":["e"]}],[{"start":{"row":98,"column":6},"end":{"row":98,"column":15},"action":"remove","lines":["searchSee"],"id":112},{"start":{"row":98,"column":6},"end":{"row":98,"column":15},"action":"insert","lines":["searchSee"]}],[{"start":{"row":97,"column":19},"end":{"row":97,"column":20},"action":"remove","lines":["0"],"id":113}],[{"start":{"row":97,"column":19},"end":{"row":97,"column":20},"action":"insert","lines":["2"],"id":114}],[{"start":{"row":86,"column":19},"end":{"row":86,"column":20},"action":"remove","lines":["0"],"id":115}],[{"start":{"row":86,"column":19},"end":{"row":86,"column":20},"action":"insert","lines":["2"],"id":116}],[{"start":{"row":75,"column":19},"end":{"row":75,"column":20},"action":"remove","lines":["0"],"id":117}],[{"start":{"row":75,"column":19},"end":{"row":75,"column":20},"action":"insert","lines":["2"],"id":118}],[{"start":{"row":64,"column":19},"end":{"row":64,"column":20},"action":"remove","lines":["0"],"id":119}],[{"start":{"row":64,"column":19},"end":{"row":64,"column":20},"action":"insert","lines":["2"],"id":120}],[{"start":{"row":110,"column":13},"end":{"row":110,"column":19},"action":"remove","lines":["hotels"],"id":121},{"start":{"row":110,"column":13},"end":{"row":110,"column":20},"action":"insert","lines":["lodging"]}],[{"start":{"row":176,"column":23},"end":{"row":176,"column":24},"action":"insert","lines":["_"],"id":122}],[{"start":{"row":176,"column":12},"end":{"row":176,"column":29},"action":"remove","lines":["'bar, night_club'"],"id":123},{"start":{"row":176,"column":12},"end":{"row":176,"column":31},"action":"insert","lines":["'bar', 'night_club'"]}],[{"start":{"row":143,"column":18},"end":{"row":143,"column":19},"action":"insert","lines":["'"],"id":124}],[{"start":{"row":143,"column":21},"end":{"row":143,"column":22},"action":"insert","lines":["'"],"id":125}],[{"start":{"row":143,"column":32},"end":{"row":143,"column":33},"action":"remove","lines":["s"],"id":126}],[{"start":{"row":143,"column":17},"end":{"row":143,"column":18},"action":"remove","lines":["s"],"id":127}],[{"start":{"row":209,"column":43},"end":{"row":209,"column":44},"action":"insert","lines":[","],"id":128}],[{"start":{"row":209,"column":44},"end":{"row":209,"column":45},"action":"insert","lines":[" "],"id":129}],[{"start":{"row":209,"column":45},"end":{"row":209,"column":58},"action":"insert","lines":["travel_agency"],"id":130}],[{"start":{"row":209,"column":58},"end":{"row":209,"column":59},"action":"insert","lines":["'"],"id":131}],[{"start":{"row":209,"column":45},"end":{"row":209,"column":46},"action":"insert","lines":["'"],"id":132}],[{"start":{"row":209,"column":60},"end":{"row":209,"column":61},"action":"insert","lines":[","],"id":133}],[{"start":{"row":209,"column":61},"end":{"row":209,"column":62},"action":"insert","lines":[" "],"id":134}],[{"start":{"row":209,"column":62},"end":{"row":209,"column":64},"action":"insert","lines":["\"\""],"id":135}],[{"start":{"row":209,"column":62},"end":{"row":209,"column":64},"action":"remove","lines":["\"\""],"id":136}],[{"start":{"row":209,"column":62},"end":{"row":209,"column":64},"action":"insert","lines":["''"],"id":137}],[{"start":{"row":209,"column":63},"end":{"row":209,"column":77},"action":"insert","lines":["amusement_park"],"id":138}],[{"start":{"row":209,"column":78},"end":{"row":209,"column":79},"action":"insert","lines":[","],"id":139}],[{"start":{"row":209,"column":79},"end":{"row":209,"column":80},"action":"insert","lines":[" "],"id":140}],[{"start":{"row":209,"column":80},"end":{"row":209,"column":82},"action":"insert","lines":["''"],"id":141}],[{"start":{"row":209,"column":81},"end":{"row":209,"column":89},"action":"insert","lines":["aquarium"],"id":142}],[{"start":{"row":209,"column":12},"end":{"row":209,"column":14},"action":"insert","lines":["''"],"id":143}],[{"start":{"row":209,"column":13},"end":{"row":209,"column":28},"action":"insert","lines":["natural_feature"],"id":144}],[{"start":{"row":209,"column":29},"end":{"row":209,"column":30},"action":"insert","lines":["."],"id":145}],[{"start":{"row":209,"column":30},"end":{"row":209,"column":36},"action":"insert","lines":["charAt"],"id":146}],[{"start":{"row":209,"column":35},"end":{"row":209,"column":36},"action":"remove","lines":["t"],"id":147},{"start":{"row":209,"column":34},"end":{"row":209,"column":35},"action":"remove","lines":["A"]},{"start":{"row":209,"column":33},"end":{"row":209,"column":34},"action":"remove","lines":["r"]},{"start":{"row":209,"column":32},"end":{"row":209,"column":33},"action":"remove","lines":["a"]},{"start":{"row":209,"column":31},"end":{"row":209,"column":32},"action":"remove","lines":["h"]},{"start":{"row":209,"column":30},"end":{"row":209,"column":31},"action":"remove","lines":["c"]},{"start":{"row":209,"column":29},"end":{"row":209,"column":30},"action":"remove","lines":["."]}],[{"start":{"row":209,"column":29},"end":{"row":209,"column":30},"action":"insert","lines":[","],"id":148}],[{"start":{"row":209,"column":30},"end":{"row":209,"column":31},"action":"insert","lines":[" "],"id":149}],[{"start":{"row":209,"column":12},"end":{"row":209,"column":14},"action":"insert","lines":["''"],"id":150}],[{"start":{"row":209,"column":13},"end":{"row":209,"column":14},"action":"insert","lines":["b"],"id":151},{"start":{"row":209,"column":14},"end":{"row":209,"column":15},"action":"insert","lines":["e"]},{"start":{"row":209,"column":15},"end":{"row":209,"column":16},"action":"insert","lines":["a"]},{"start":{"row":209,"column":16},"end":{"row":209,"column":17},"action":"insert","lines":["c"]},{"start":{"row":209,"column":17},"end":{"row":209,"column":18},"action":"insert","lines":["h"]},{"start":{"row":209,"column":18},"end":{"row":209,"column":19},"action":"insert","lines":[","]}],[{"start":{"row":209,"column":18},"end":{"row":209,"column":19},"action":"remove","lines":[","],"id":152}],[{"start":{"row":209,"column":19},"end":{"row":209,"column":20},"action":"insert","lines":[","],"id":153}],[{"start":{"row":209,"column":20},"end":{"row":209,"column":21},"action":"insert","lines":[" "],"id":154}],[{"start":{"row":209,"column":12},"end":{"row":209,"column":21},"action":"remove","lines":["'beach', "],"id":155}],[{"start":{"row":209,"column":32},"end":{"row":209,"column":108},"action":"remove","lines":["art_gallery', 'museum', 'park', 'travel_agency', 'amusement_park', 'aquarium"],"id":156},{"start":{"row":209,"column":32},"end":{"row":209,"column":33},"action":"insert","lines":["a"]},{"start":{"row":209,"column":33},"end":{"row":209,"column":34},"action":"insert","lines":["t"]},{"start":{"row":209,"column":34},"end":{"row":209,"column":35},"action":"insert","lines":["t"]},{"start":{"row":209,"column":35},"end":{"row":209,"column":36},"action":"insert","lines":["r"]},{"start":{"row":209,"column":36},"end":{"row":209,"column":37},"action":"insert","lines":["a"]},{"start":{"row":209,"column":37},"end":{"row":209,"column":38},"action":"insert","lines":["c"]},{"start":{"row":209,"column":38},"end":{"row":209,"column":39},"action":"insert","lines":["t"]},{"start":{"row":209,"column":39},"end":{"row":209,"column":40},"action":"insert","lines":["i"]}],[{"start":{"row":209,"column":40},"end":{"row":209,"column":41},"action":"insert","lines":["o"],"id":157},{"start":{"row":209,"column":41},"end":{"row":209,"column":42},"action":"insert","lines":["n"]},{"start":{"row":209,"column":42},"end":{"row":209,"column":43},"action":"insert","lines":["s"]}],[{"start":{"row":209,"column":32},"end":{"row":209,"column":43},"action":"remove","lines":["attractions"],"id":158},{"start":{"row":209,"column":32},"end":{"row":209,"column":46},"action":"insert","lines":["poi.attraction"]}],[{"start":{"row":209,"column":13},"end":{"row":209,"column":30},"action":"remove","lines":["natural_feature',"],"id":159}],[{"start":{"row":209,"column":12},"end":{"row":209,"column":13},"action":"remove","lines":["'"],"id":160}],[{"start":{"row":209,"column":14},"end":{"row":209,"column":28},"action":"remove","lines":["poi.attraction"],"id":161},{"start":{"row":209,"column":14},"end":{"row":209,"column":31},"action":"insert","lines":["natural_feature',"]}],[{"start":{"row":209,"column":30},"end":{"row":209,"column":31},"action":"remove","lines":[","],"id":162}],[{"start":{"row":209,"column":30},"end":{"row":209,"column":31},"action":"remove","lines":["'"],"id":163}],[{"start":{"row":97,"column":19},"end":{"row":97,"column":20},"action":"remove","lines":["2"],"id":164}],[{"start":{"row":97,"column":19},"end":{"row":97,"column":20},"action":"insert","lines":["0"],"id":165}],[{"start":{"row":97,"column":19},"end":{"row":97,"column":20},"action":"remove","lines":["0"],"id":166}],[{"start":{"row":97,"column":19},"end":{"row":97,"column":20},"action":"insert","lines":["1"],"id":167}],[{"start":{"row":86,"column":19},"end":{"row":86,"column":20},"action":"remove","lines":["2"],"id":168}],[{"start":{"row":86,"column":19},"end":{"row":86,"column":20},"action":"insert","lines":["4"],"id":169}],[{"start":{"row":75,"column":19},"end":{"row":75,"column":20},"action":"remove","lines":["2"],"id":170}],[{"start":{"row":75,"column":19},"end":{"row":75,"column":20},"action":"insert","lines":["4"],"id":171}],[{"start":{"row":64,"column":19},"end":{"row":64,"column":20},"action":"remove","lines":["2"],"id":172}],[{"start":{"row":64,"column":19},"end":{"row":64,"column":20},"action":"insert","lines":["4"],"id":173}],[{"start":{"row":237,"column":0},"end":{"row":238,"column":0},"action":"insert","lines":["",""],"id":174},{"start":{"row":238,"column":0},"end":{"row":238,"column":1},"action":"insert","lines":["/"]},{"start":{"row":238,"column":1},"end":{"row":238,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":238,"column":2},"end":{"row":238,"column":3},"action":"insert","lines":[" "],"id":175}],[{"start":{"row":238,"column":3},"end":{"row":238,"column":24},"action":"insert","lines":["empties markers array"],"id":176}],[{"start":{"row":238,"column":3},"end":{"row":238,"column":4},"action":"remove","lines":["e"],"id":177}],[{"start":{"row":238,"column":3},"end":{"row":238,"column":4},"action":"insert","lines":["E"],"id":178}],[{"start":{"row":236,"column":1},"end":{"row":237,"column":0},"action":"insert","lines":["",""],"id":179},{"start":{"row":237,"column":0},"end":{"row":238,"column":0},"action":"insert","lines":["",""]},{"start":{"row":238,"column":0},"end":{"row":238,"column":1},"action":"insert","lines":["?"]},{"start":{"row":238,"column":1},"end":{"row":238,"column":2},"action":"insert","lines":["?"]}],[{"start":{"row":238,"column":1},"end":{"row":238,"column":2},"action":"remove","lines":["?"],"id":180},{"start":{"row":238,"column":0},"end":{"row":238,"column":1},"action":"remove","lines":["?"]}],[{"start":{"row":238,"column":0},"end":{"row":238,"column":1},"action":"insert","lines":["/"],"id":181},{"start":{"row":238,"column":1},"end":{"row":238,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":238,"column":2},"end":{"row":238,"column":3},"action":"insert","lines":[" "],"id":182},{"start":{"row":238,"column":3},"end":{"row":238,"column":4},"action":"insert","lines":["R"]},{"start":{"row":238,"column":4},"end":{"row":238,"column":5},"action":"insert","lines":["e"]},{"start":{"row":238,"column":5},"end":{"row":238,"column":6},"action":"insert","lines":["s"]},{"start":{"row":238,"column":6},"end":{"row":238,"column":7},"action":"insert","lines":["t"]},{"start":{"row":238,"column":7},"end":{"row":238,"column":8},"action":"insert","lines":["e"]}],[{"start":{"row":238,"column":8},"end":{"row":238,"column":9},"action":"insert","lines":[" "],"id":183}],[{"start":{"row":238,"column":8},"end":{"row":238,"column":9},"action":"remove","lines":[" "],"id":184},{"start":{"row":238,"column":7},"end":{"row":238,"column":8},"action":"remove","lines":["e"]},{"start":{"row":238,"column":6},"end":{"row":238,"column":7},"action":"remove","lines":["t"]}],[{"start":{"row":238,"column":6},"end":{"row":238,"column":7},"action":"insert","lines":["e"],"id":185},{"start":{"row":238,"column":7},"end":{"row":238,"column":8},"action":"insert","lines":["t"]}],[{"start":{"row":238,"column":8},"end":{"row":238,"column":9},"action":"insert","lines":[" "],"id":186},{"start":{"row":238,"column":9},"end":{"row":238,"column":10},"action":"insert","lines":["b"]},{"start":{"row":238,"column":10},"end":{"row":238,"column":11},"action":"insert","lines":["u"]},{"start":{"row":238,"column":11},"end":{"row":238,"column":12},"action":"insert","lines":["t"]},{"start":{"row":238,"column":12},"end":{"row":238,"column":13},"action":"insert","lines":["t"]},{"start":{"row":238,"column":13},"end":{"row":238,"column":14},"action":"insert","lines":["o"]},{"start":{"row":238,"column":14},"end":{"row":238,"column":15},"action":"insert","lines":["n"]}],[{"start":{"row":238,"column":15},"end":{"row":239,"column":0},"action":"insert","lines":["",""],"id":187},{"start":{"row":239,"column":0},"end":{"row":240,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":240,"column":0},"end":{"row":244,"column":1},"action":"insert","lines":["function resetbtn() {","  clearMarkers();","  clearResults();","  initMap();","}"],"id":188}],[{"start":{"row":17,"column":20},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":189},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":18,"column":2},"end":{"row":18,"column":45},"action":"insert","lines":["document.getElementById(\"\").checked = true;"],"id":190}],[{"start":{"row":18,"column":27},"end":{"row":18,"column":35},"action":"insert","lines":["seeRadio"],"id":191}],[{"start":{"row":380,"column":0},"end":{"row":381,"column":0},"action":"insert","lines":["",""],"id":240},{"start":{"row":381,"column":0},"end":{"row":382,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":382,"column":0},"end":{"row":382,"column":1},"action":"insert","lines":["N"],"id":241},{"start":{"row":382,"column":1},"end":{"row":382,"column":2},"action":"insert","lines":["A"]},{"start":{"row":382,"column":2},"end":{"row":382,"column":3},"action":"insert","lines":["V"]}],[{"start":{"row":382,"column":3},"end":{"row":382,"column":4},"action":"insert","lines":[" "],"id":242},{"start":{"row":382,"column":4},"end":{"row":382,"column":5},"action":"insert","lines":["O"]},{"start":{"row":382,"column":5},"end":{"row":382,"column":6},"action":"insert","lines":["P"]},{"start":{"row":382,"column":6},"end":{"row":382,"column":7},"action":"insert","lines":["E"]},{"start":{"row":382,"column":7},"end":{"row":382,"column":8},"action":"insert","lines":["N"]}],[{"start":{"row":382,"column":0},"end":{"row":382,"column":3},"action":"insert","lines":["// "],"id":243}],[{"start":{"row":382,"column":11},"end":{"row":383,"column":0},"action":"insert","lines":["",""],"id":244},{"start":{"row":383,"column":0},"end":{"row":384,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":384,"column":0},"end":{"row":390,"column":9},"action":"insert","lines":["function openNav() {","            document.getElementById(\"mySidenav\").style.width = \"250px\";","        }","","        function closeNav() {","            document.getElementById(\"mySidenav\").style.width = \"0\";","        }"],"id":245}],[{"start":{"row":390,"column":9},"end":{"row":391,"column":0},"action":"insert","lines":["",""],"id":246},{"start":{"row":391,"column":0},"end":{"row":391,"column":8},"action":"insert","lines":["        "]},{"start":{"row":391,"column":8},"end":{"row":392,"column":0},"action":"insert","lines":["",""]},{"start":{"row":392,"column":0},"end":{"row":392,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":392,"column":6},"end":{"row":392,"column":8},"action":"remove","lines":["  "],"id":247},{"start":{"row":392,"column":4},"end":{"row":392,"column":6},"action":"remove","lines":["  "]},{"start":{"row":392,"column":2},"end":{"row":392,"column":4},"action":"remove","lines":["  "]},{"start":{"row":392,"column":0},"end":{"row":392,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":392,"column":0},"end":{"row":394,"column":9},"action":"insert","lines":[" function myFunction(x) {","            x.classList.toggle(\"change\");","        }"],"id":248}],[{"start":{"row":384,"column":0},"end":{"row":384,"column":3},"action":"insert","lines":["// "],"id":249},{"start":{"row":385,"column":0},"end":{"row":385,"column":3},"action":"insert","lines":["// "]},{"start":{"row":386,"column":0},"end":{"row":386,"column":3},"action":"insert","lines":["// "]},{"start":{"row":388,"column":0},"end":{"row":388,"column":3},"action":"insert","lines":["// "]},{"start":{"row":389,"column":0},"end":{"row":389,"column":3},"action":"insert","lines":["// "]},{"start":{"row":390,"column":0},"end":{"row":390,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":384,"column":0},"end":{"row":384,"column":3},"action":"remove","lines":["// "],"id":251},{"start":{"row":385,"column":0},"end":{"row":385,"column":3},"action":"remove","lines":["// "]},{"start":{"row":386,"column":0},"end":{"row":386,"column":3},"action":"remove","lines":["// "]},{"start":{"row":388,"column":0},"end":{"row":388,"column":3},"action":"remove","lines":["// "]},{"start":{"row":389,"column":0},"end":{"row":389,"column":3},"action":"remove","lines":["// "]},{"start":{"row":390,"column":0},"end":{"row":390,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":28,"column":2},"end":{"row":35,"column":12},"action":"remove","lines":["// service.nearbySearch(","  //     {location: ie, radius: 500, type: ['store']},","  //     function(results, status,) {","  //       if (status !== 'OK') return;","","  //       markers(results);","        ","  //     });"],"id":259},{"start":{"row":28,"column":0},"end":{"row":28,"column":2},"action":"remove","lines":["  "]},{"start":{"row":27,"column":2},"end":{"row":28,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":28,"column":2},"end":{"row":28,"column":5},"action":"insert","lines":["// "],"id":259},{"start":{"row":29,"column":2},"end":{"row":29,"column":5},"action":"insert","lines":["// "]},{"start":{"row":30,"column":2},"end":{"row":30,"column":5},"action":"insert","lines":["// "]},{"start":{"row":31,"column":2},"end":{"row":31,"column":5},"action":"insert","lines":["// "]},{"start":{"row":33,"column":2},"end":{"row":33,"column":5},"action":"insert","lines":["// "]},{"start":{"row":35,"column":2},"end":{"row":35,"column":5},"action":"insert","lines":["// "]}],[{"start":{"row":33,"column":8},"end":{"row":33,"column":21},"action":"remove","lines":["createMarkers"],"id":260},{"start":{"row":33,"column":8},"end":{"row":33,"column":15},"action":"insert","lines":["markers"]}],[{"start":{"row":28,"column":2},"end":{"row":35,"column":9},"action":"insert","lines":["service.nearbySearch(","      {location: ie, radius: 500, type: ['store']},","      function(results, status,) {","        if (status !== 'OK') return;","","        createMarkers(results);","        ","      });"],"id":261}],[{"start":{"row":26,"column":5},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":262},{"start":{"row":27,"column":0},"end":{"row":27,"column":2},"action":"insert","lines":["  "]},{"start":{"row":27,"column":2},"end":{"row":28,"column":0},"action":"insert","lines":["",""]},{"start":{"row":28,"column":0},"end":{"row":28,"column":2},"action":"insert","lines":["  "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":26,"column":5},"end":{"row":26,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":141,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1561890217364,"hash":"4c314b2c05071899f549985c0538a0edd5e4635b"}