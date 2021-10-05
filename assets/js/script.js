//     'https://api.nasa.gov/planetary/apod?api_key=nndUMOcl1g9pH4trtcU5C4Reha8gBSZ4cOfJrlWU'

// Api for NASA APOD https://api.nasa.gov/planetary/apod?api_key=nndUMOcl1g9pH4trtcU5C4Reha8gBSZ4cOfJrlWU

//MODAL DISPLAY
class BulmaModal {
	constructor(selector) {
		this.elem = document.querySelector(selector)
		this.close_data()
	}
	
	show() {
		this.elem.classList.toggle('is-active')
		this.on_show()
	}
	
	close() {
		this.elem.classList.toggle('is-active')
		this.on_close()
	}
	
	close_data() {
		var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
		var that = this
		modalClose.forEach(function(e) {
			e.addEventListener("click", function() {
				
				that.elem.classList.toggle('is-active')

				var event = new Event('modal:close')

				that.elem.dispatchEvent(event);
			})
		})
	}
	
	on_show() {
		var event = new Event('modal:show')
	
		this.elem.dispatchEvent(event);
	}
	
	on_close() {
		var event = new Event('modal:close')
	
		this.elem.dispatchEvent(event);
	}
	
	addEventListener(event, callback) {
		this.elem.addEventListener(event, callback)
	}
}

var btn = document.querySelector("#btn")
var mdl = new BulmaModal("#myModal")

btn.addEventListener("click", function () {
	mdl.show()
})

mdl.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl.addEventListener("modal:close", function() {
	console.log("closed")
})
//END OF MODAL






const getLaunches = document.querySelector('#launchBtn');
const getImages = document.querySelector('#imageBtn');

//DISPLAY DIFFERENT LAUNCHES
const getLaunchesApi = function (user) {
  // format the github api url
  const apiUrlLaunches = 'https://lldev.thespacedevs.com/2.2.0/launch';

  // make a request to the url
  fetch(apiUrlLaunches)
    .then(function (response) {
      // request was succesful
      if (response.ok) {
        response.json().then(function (data) {
          displayLaunches(data);
        });
      } else {
        alert('Error: Api issue');
      }
    })
    .catch(function (error) {
      // .catch gets chained onto the end of the `.then()` method.
      alert('Unable to connect to TheSpaceDevs');
    });
};



//DAILY IMAGES DISPLAY
var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})

const displayLaunches = function (data) {
  console.log(data);
  //document.getElementById('launchBtn').style.display = 'none';
  console.log('displayLaunches Worked');
};

const displayImages = function (data) {
  
  console.log(data);
  console.log('displayImages Worked');
};

//SAVE IMAGE TO LOCAL STORAGE AND RETRIEVE