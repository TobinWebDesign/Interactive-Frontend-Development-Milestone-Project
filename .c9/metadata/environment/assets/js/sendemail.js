{"filter":false,"title":"sendemail.js","tooltip":"/assets/js/sendemail.js","undoManager":{"mark":5,"position":5,"stack":[[{"start":{"row":0,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["function sendMail(contactForm) {","    emailjs.send(\"gmail\", \"rosie_template\", {","        \"from_name\": contactForm.name.value,","        \"from_email\": contactForm.emailaddress.value,","        \"project_request\": contactForm.projectsummary.value","    })","    .then(","        function(response) {","            console.log(\"SUCCESS\", response);","        },","        function(error) {","            console.log(\"FAILED\", error);","        }","    );","    return false; ","}"],"id":1}],[{"start":{"row":15,"column":1},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":17,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["var myform = $(\"form#myform\");","myform.submit(function(event){","\tevent.preventDefault();","","  // Change to your service ID, or keep using the default service","  var service_id = \"default_service\";","  var template_id = \"rosie_template\";","","  myform.find(\"button\").text(\"Sending...\");","  emailjs.sendForm(service_id,template_id,myform[0])","  \t.then(function(){ ","    \talert(\"Sent!\");","       myform.find(\"button\").text(\"Send\");","    }, function(err) {","       alert(\"Send email failed!\\r\\n Response:\\n \" + JSON.stringify(err));","       myform.find(\"button\").text(\"Send\");","    });","  return false;","});"],"id":3}],[{"start":{"row":22,"column":20},"end":{"row":22,"column":35},"action":"remove","lines":["default_service"],"id":4},{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["g"]},{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["m"]},{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"insert","lines":["a"]},{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"insert","lines":["i"]},{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"insert","lines":["l"]}],[{"start":{"row":0,"column":0},"end":{"row":15,"column":1},"action":"remove","lines":["function sendMail(contactForm) {","    emailjs.send(\"gmail\", \"rosie_template\", {","        \"from_name\": contactForm.name.value,","        \"from_email\": contactForm.emailaddress.value,","        \"project_request\": contactForm.projectsummary.value","    })","    .then(","        function(response) {","            console.log(\"SUCCESS\", response);","        },","        function(error) {","            console.log(\"FAILED\", error);","        }","    );","    return false; ","}"],"id":5}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":6},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":3,"scrollleft":0,"selection":{"start":{"row":2,"column":24},"end":{"row":2,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":148,"mode":"ace/mode/javascript"}},"timestamp":1561896135572,"hash":"2d7c54e26d54385bd5cc9c6b76ab5ed1083f4796"}