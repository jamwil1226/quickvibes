//     'https://api.nasa.gov/planetary/apod?api_key=nndUMOcl1g9pH4trtcU5C4Reha8gBSZ4cOfJrlWU'

// Api for NASA APOD https://api.nasa.gov/planetary/apod?api_key=nndUMOcl1g9pH4trtcU5C4Reha8gBSZ4cOfJrlWU

const getLaunches = document.querySelector('#launchBtn');
const getImages = document.querySelector('#imageBtn');

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

const getImagesApi = function (user) {
  // format the github api url
  const apiUrlImages =
    'https://api.nasa.gov/planetary/apod?api_key=nndUMOcl1g9pH4trtcU5C4Reha8gBSZ4cOfJrlWU';

  // make a request to the url
  fetch(apiUrlImages)
    .then(function (response) {
      // request was succesful
      if (response.ok) {
        response.json().then(function (data) {
          displayImages(data);
        });
      } else {
        alert('Error: Api issue');
      }
    })
    .catch(function (error) {
      // .catch gets chained onto the end of the `.then()` method.
      alert('Unable to connect to NASA apod');
    });
};

const displayLaunches = function (data) {
  console.log(data);
  document.getElementById('launchBtn').style.display = 'none';
  console.log('displayLaunches Worked');
  $("#dropdown-main").attr("style","display:block");
  var ddtrig=$("<div>").addClass("dropdown-trigger");
  var ddBtn=$("<button>").addClass("button").attr("aria-haspopup","true").attr("aria-controls","dropdown-menu");
  var span1=$("<span>").text("dropdownbtn")
  var span2=$("<span>").addClass("icon is-small");
  var icon=$("<i>").addClass('fas fa-angle-down').attr("aria-hidden","true");
  var ddmenu=$("<div>").addClass("dropdown-menu").attr("id","dropdown-menu").attr("role","menu")
  var ddcontent=$("<div>").addClass("dropdown-content")
  for(var i=0;i<data.results.length;i++){
    console.log(data.results[i]);
    var a=$("<a>").addClass("dropdown-item").text(data.results[i].name);
    ddcontent.append(a)
  }
  $("#dropdown-main").append(ddtrig.append(ddBtn.append(span1,span2.append(icon))),ddmenu.append(ddcontent))


};



// <div class="dropdown-menu" id="dropdown-menu" role="menu">
//   <div class="dropdown-content">
//     <a href="#" class="dropdown-item">
//       Dropdown item
//     </a>
//     <a class="dropdown-item">
//       Other dropdown item
//     </a>
//     <a href="#" class="dropdown-item is-active">
//       Active dropdown item
//     </a>
//     <a href="#" class="dropdown-item">
//       Other dropdown item
//     </a>
//     <hr class="dropdown-divider">
//     <a href="#" class="dropdown-item">
//       With a divider
//     </a>
//   </div>
// </div> */

const displayImages = function (data) {
  // console.log(data);
  // console.log('displayImages Worked');
};

getLaunches.addEventListener('click', getLaunchesApi);
getImages.addEventListener('click', getImagesApi);

