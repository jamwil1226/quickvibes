//     'https://api.nasa.gov/planetary/apod?api_key=nndUMOcl1g9pH4trtcU5C4Reha8gBSZ4cOfJrlWU'

// Api for NASA APOD https://api.nasa.gov/planetary/apod?api_key=nndUMOcl1g9pH4trtcU5C4Reha8gBSZ4cOfJrlWU

//MODAL DISPLAY FOR LAUNCH
class BulmaModalLaunch {
  constructor(selector) {
    this.elem = document.querySelector(selector);
    this.close_data();
  }

  show() {
    this.elem.classList.toggle('is-active');
    this.on_show();
  }

  close() {
    this.elem.classList.toggle('is-active');
    this.on_close();
  }

  close_data() {
    var modalClose = this.elem.querySelectorAll(
      "[data-bulma-modal='close'], .modal-background"
    );
    var that = this;
    modalClose.forEach(function (e) {
      e.addEventListener('click', function () {
        that.elem.classList.toggle('is-active');

        var event = new Event('modal:close');

        that.elem.dispatchEvent(event);
      });
    });
  }

  on_show() {
    var event = new Event('modal:show');
    this.elem.dispatchEvent(event);
  }

  on_close() {
    var event = new Event('modal:close');

    this.elem.dispatchEvent(event);
  }

  addEventListener(event, callback) {
    this.elem.addEventListener(event, callback);
  }
}

var launchBtn = document.querySelector('#launchBtn');
var launchMdl = new BulmaModalLaunch('#launchModal');

launchBtn.addEventListener('click', function () {
  launchMdl.show();
});

launchMdl.addEventListener('modal:show', function () {
  console.log('opened');
});

launchMdl.addEventListener('modal:close', function () {
  console.log('closed');
});

//END OF LAUNCH MODAL

//MODAL DISPLAY FOR IMAGE OF THE DAY
class BulmaModal {
  constructor(selector) {
    this.elem = document.querySelector(selector);
    this.close_data();
  }

  show() {
    this.elem.classList.toggle('is-active');
    this.on_show();
  }

  close() {
    this.elem.classList.toggle('is-active');
    this.on_close();
  }

  close_data() {
    var modalClose = this.elem.querySelectorAll(
      "[data-bulma-modal='close'], .modal-background"
    );
    var that = this;
    modalClose.forEach(function (e) {
      e.addEventListener('click', function () {
        that.elem.classList.toggle('is-active');

        var event = new Event('modal:close');

        that.elem.dispatchEvent(event);
      });
    });
  }

  on_show() {
    var event = new Event('modal:show');

    this.elem.dispatchEvent(event);
  }

  on_close() {
    var event = new Event('modal:close');

    this.elem.dispatchEvent(event);
  }

  addEventListener(event, callback) {
    this.elem.addEventListener(event, callback);
  }
}

var btn = document.querySelector('#btn');
var mdl = new BulmaModal('#imageModal');

btn.addEventListener('click', function () {
  mdl.show();
});

mdl.addEventListener('modal:show', function () {
  console.log('opened');
});

mdl.addEventListener('modal:close', function () {
  console.log('closed');
});
//END OF IMAGE MODAL

//MODAL DISPLAY FOR ASTRONAUT
class BulmaModalAstronaut {
  constructor(selector) {
    this.elem = document.querySelector(selector);
    this.close_data();
  }

  show() {
    this.elem.classList.toggle('is-active');
    this.on_show();
  }

  close() {
    this.elem.classList.toggle('is-active');
    this.on_close();
  }

  close_data() {
    var modalClose = this.elem.querySelectorAll(
      "[data-bulma-modal='close'], .modal-background"
    );
    var that = this;
    modalClose.forEach(function (e) {
      e.addEventListener('click', function () {
        that.elem.classList.toggle('is-active');

        var event = new Event('modal:close');

        that.elem.dispatchEvent(event);
      });
    });
  }

  on_show() {
    var event = new Event('modal:show');

    this.elem.dispatchEvent(event);
  }

  on_close() {
    var event = new Event('modal:close');

    this.elem.dispatchEvent(event);
  }

  addEventListener(event, callback) {
    this.elem.addEventListener(event, callback);
  }
}

var astronautBtn = document.querySelector('#astronautBtn');
var astronautMdl = new BulmaModalAstronaut('#astronautModal');

astronautBtn.addEventListener('click', function () {
  astronautMdl.show();
});

astronautMdl.addEventListener('modal:show', function () {
  console.log('opened');
});

astronautMdl.addEventListener('modal:close', function () {
  console.log('closed');
});
//END OF ASTRONAUT MODAL

const getLaunches = document.querySelector('#launchBtn');
const getAstronaut = document.querySelector('#astronautBtn');

// FETCH LAUNCHES API
const getLaunchesApi = function (user) {
  // format the github api url
  const apiUrlLaunches = 'https://lldev.thespacedevs.com/2.2.0/launch/?';

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

// FETCH IMAGES API
// format the github api url
const displayImage = function () {
  const apiUrlImages =
    'https://api.nasa.gov/planetary/apod?api_key=nndUMOcl1g9pH4trtcU5C4Reha8gBSZ4cOfJrlWU';

  //make a request to the url
  fetch(apiUrlImages)
    .then(function (response) {
      // request was succesful
      if (response.ok) {
        response.json().then(function (data) {
          getImageData(data);
          saveImageData(data);
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

// FETCH ASTRONAUTS API
const getAstronautApi = function (user) {
  const apiUrlAstronaut = 'https://lldev.thespacedevs.com/2.2.0/astronaut/';

  fetch(apiUrlAstronaut)
    .then(function (response) {
      // request was successful
      if (response.ok) {
        response.json().then(function (data) {
          displayAstronaut(data);
        });
      } else {
        alert('No Astronauts found');
      }
    })
    .catch(function (error) {
      // .catch gets chained onto the end of the `.then()` method.
      alert('Unable to connect to TheSpaceDevs');
    });
};

// function for passing in data from displayImage fetch
const getImageData = function (data) {
  console.log(data);
  document.getElementById('title').textContent = data.title;
  document.getElementById('date').textContent = data.date;
  document.getElementById('pic').src = data.hdurl;
  document.getElementById('explanation').textContent = data.explanation;
};

// ------------------------------------------------------------------------

// LIST OF LAUNCHES WHEN CLICKING BUTTON
var displayLaunches = function (data) {
  // Launch Data 1
  console.log(data);
  let launchName = data.results[0].name;
  let launchDate = data.results[0].net.substring(0, 10);
  let statusName = data.results[0].status.abbrev;
  let launchDesc = data.results[0].mission.description;

  document.querySelector('#name').innerHTML = `${launchName}`;
  document.querySelector('#date-text').innerHTML = `${launchDate}`;
  document.querySelector('#description').innerHTML = `${launchDesc}`;
  document.querySelector('#status').innerHTML = `${statusName}`;
  // Launch Data 2
  let launchName2 = data.results[1].name;
  let launchDate2 = data.results[1].net.substring(0, 10);
  let statusName2 = data.results[1].status.abbrev;
  let launchDesc2 = data.results[1].mission.description;

  document.querySelector('#name2').innerHTML = `${launchName2}`;
  document.querySelector('#date-text2').innerHTML = `${launchDate2}`;
  document.querySelector('#description2').innerHTML = `${launchDesc2}`;
  document.querySelector('#status2').innerHTML = `${statusName2}`;
  // Launch Data 3
  let launchName3 = data.results[2].name;
  let launchDate3 = data.results[2].net.substring(0, 10);
  let statusName3 = data.results[2].status.abbrev;
  let launchDesc3 = data.results[2].mission.description;

  document.querySelector('#name3').innerHTML = `${launchName3}`;
  document.querySelector('#date-text3').innerHTML = `${launchDate3}`;
  document.querySelector('#description3').innerHTML = `${launchDesc3}`;
  document.querySelector('#status3').innerHTML = `${statusName3}`;
  // Launch Data 4
  let launchName4 = data.results[3].name;
  let launchDate4 = data.results[3].net.substring(0, 10);
  let statusName4 = data.results[3].status.abbrev;
  let launchDesc4 = data.results[3].mission.description;

  document.querySelector('#name4').innerHTML = `${launchName4}`;
  document.querySelector('#date-text4').innerHTML = `${launchDate4}`;
  document.querySelector('#description4').innerHTML = `${launchDesc4}`;
  document.querySelector('#status4').innerHTML = `${statusName4}`;
  // Launch Data 5
  let launchName5 = data.results[4].name;
  let launchDate5 = data.results[4].net.substring(0, 10);
  let statusName5 = data.results[4].status.abbrev;
  let launchDesc5 = data.results[4].mission.description;

  document.querySelector('#name5').innerHTML = `${launchName5}`;
  document.querySelector('#date-text5').innerHTML = `${launchDate5}`;
  document.querySelector('#description5').innerHTML = `${launchDesc5}`;
  document.querySelector('#status5').innerHTML = `${statusName5}`;
  // Launch Data 6
  let launchName6 = data.results[5].name;
  let launchDate6 = data.results[5].net.substring(0, 10);
  let statusName6 = data.results[5].status.abbrev;
  let launchDesc6 = data.results[5].mission.description;

  document.querySelector('#name6').innerHTML = `${launchName6}`;
  document.querySelector('#date-text6').innerHTML = `${launchDate6}`;
  document.querySelector('#description6').innerHTML = `${launchDesc6}`;
  document.querySelector('#status6').innerHTML = `${statusName6}`;
  // Launch Data 7
  let launchName7 = data.results[6].name;
  let launchDate7 = data.results[6].net.substring(0, 10);
  let statusName7 = data.results[6].status.abbrev;
  let launchDesc7 = data.results[6].mission.description;

  document.querySelector('#name7').innerHTML = `${launchName7}`;
  document.querySelector('#date-text7').innerHTML = `${launchDate7}`;
  document.querySelector('#description7').innerHTML = `${launchDesc7}`;
  document.querySelector('#status7').innerHTML = `${statusName7}`;
  // Launch Data 8
  let launchName8 = data.results[7].name;
  let launchDate8 = data.results[7].net.substring(0, 10);
  let statusName8 = data.results[7].status.abbrev;
  let launchDesc8 = data.results[7].mission.description;

  document.querySelector('#name8').innerHTML = `${launchName8}`;
  document.querySelector('#date-text8').innerHTML = `${launchDate8}`;
  document.querySelector('#description8').innerHTML = `${launchDesc8}`;
  document.querySelector('#status8').innerHTML = `${statusName8}`;
  // Launch Data 9
  let launchName9 = data.results[8].name;
  let launchDate9 = data.results[8].net.substring(0, 10);
  let statusName9 = data.results[8].status.abbrev;
  let launchDesc9 = data.results[8].mission.description;

  document.querySelector('#name9').innerHTML = `${launchName9}`;
  document.querySelector('#date-text9').innerHTML = `${launchDate9}`;
  document.querySelector('#description9').innerHTML = `${launchDesc9}`;
  document.querySelector('#status9').innerHTML = `${statusName9}`;
  // Launch Data 10
  let launchName10 = data.results[9].name;
  let launchDate10 = data.results[9].net.substring(0, 10);
  let statusName10 = data.results[9].status.abbrev;
  let launchDesc10 = data.results[9].mission.description;

  document.querySelector('#name10').innerHTML = `${launchName10}`;
  document.querySelector('#date-text10').innerHTML = `${launchDate10}`;
  document.querySelector('#description10').innerHTML = `${launchDesc10}`;
  document.querySelector('#status10').innerHTML = `${statusName10}`;
};
// -----------------------------------------------------------------------------

// LIST OF ASTRONAUTS WHEN CLICKING BUTTON
const displayAstronaut = function (data) {
  console.log(data);
  // Astronaut Data 1
  let astName = data.results[0].name;
  let astNat = data.results[0].nationality;
  let astStatus = data.results[0].status.name;
  let astLast = data.results[0].last_flight.substring(0, 10);
  let astWiki = data.results[0].wiki;
  let astBio = data.results[0].bio;
  let astPic = data.results[0].profile_image;

  document.querySelector('#ast-name').innerHTML = `${astName}`;
  document.querySelector('#ast-pic').src = `${astPic}`;
  document.querySelector('#ast-nat').innerHTML = `${astNat}`;
  document.querySelector('#ast-bio').innerHTML = `${astBio}`;
  document.querySelector('#ast-status').innerHTML = `${astStatus}`;
  document.querySelector('#ast-last').innerHTML = `${astLast}`;
  document.querySelector('#ast-wiki').setAttribute('href', astWiki);
  document.querySelector('#ast-wiki').innerHTML = `${astName}`;

  // Astronaut Data 2
  let astName2 = data.results[1].name;
  let astNat2 = data.results[1].nationality;
  let astStatus2 = data.results[1].status.name;
  let astLast2 = data.results[1].last_flight.substring(0, 10);
  let astWiki2 = data.results[1].wiki;
  let astBio2 = data.results[1].bio;
  let astPic2 = data.results[1].profile_image;

  document.querySelector('#ast-name2').innerHTML = `${astName2}`;
  document.querySelector('#ast-pic2').src = `${astPic2}`;
  document.querySelector('#ast-nat2').innerHTML = `${astNat2}`;
  document.querySelector('#ast-bio2').innerHTML = `${astBio2}`;
  document.querySelector('#ast-status2').innerHTML = `${astStatus2}`;
  document.querySelector('#ast-last2').innerHTML = `${astLast2}`;
  document.querySelector('#ast-wiki2').setAttribute('href', astWiki2);
  document.querySelector('#ast-wiki2').innerHTML = `${astName2}`;

  // Astronaut Data 3
  let astName3 = data.results[2].name;
  let astNat3 = data.results[2].nationality;
  let astStatus3 = data.results[2].status.name;
  let astLast3 = data.results[2].last_flight.substring(0, 10);
  let astWiki3 = data.results[2].wiki;
  let astBio3 = data.results[2].bio;
  let astPic3 = data.results[2].profile_image;

  document.querySelector('#ast-name3').innerHTML = `${astName3}`;
  document.querySelector('#ast-pic3').src = `${astPic3}`;
  document.querySelector('#ast-nat3').innerHTML = `${astNat3}`;
  document.querySelector('#ast-bio3').innerHTML = `${astBio3}`;
  document.querySelector('#ast-status3').innerHTML = `${astStatus3}`;
  document.querySelector('#ast-last3').innerHTML = `${astLast3}`;
  document.querySelector('#ast-wiki3').setAttribute('href', astWiki3);
  document.querySelector('#ast-wiki3').innerHTML = `${astName3}`;
  // Astronaut Data 4
  let astName4 = data.results[3].name;
  let astNat4 = data.results[3].nationality;
  let astStatus4 = data.results[3].status.name;
  let astLast4 = data.results[3].last_flight.substring(0, 10);
  let astWiki4 = data.results[3].wiki;
  let astBio4 = data.results[3].bio;
  let astPic4 = data.results[3].profile_image;

  document.querySelector('#ast-name4').innerHTML = `${astName4}`;
  document.querySelector('#ast-pic4').src = `${astPic4}`;
  document.querySelector('#ast-nat4').innerHTML = `${astNat4}`;
  document.querySelector('#ast-bio4').innerHTML = `${astBio4}`;
  document.querySelector('#ast-status4').innerHTML = `${astStatus4}`;
  document.querySelector('#ast-last4').innerHTML = `${astLast4}`;
  document.querySelector('#ast-wiki4').setAttribute('href', astWiki4);
  document.querySelector('#ast-wiki4').innerHTML = `${astName4}`;
  // // Astronaut Data 5
  let astName5 = data.results[4].name;
  let astNat5 = data.results[4].nationality;
  let astStatus5 = data.results[4].status.name;
  let astWiki5 = data.results[4].wiki;
  let astBio5 = data.results[4].bio;
  let astPic5 = data.results[4].profile_image;

  document.querySelector('#ast-name5').innerHTML = `${astName5}`;
  document.querySelector('#ast-pic5').src = `${astPic5}`;
  document.querySelector('#ast-nat5').innerHTML = `${astNat5}`;
  document.querySelector('#ast-bio5').innerHTML = `${astBio5}`;
  document.querySelector('#ast-status5').innerHTML = `${astStatus5}`;
  document.querySelector('#ast-last5').innerHTML = `${'none'}`;
  document.querySelector('#ast-wiki5').setAttribute('href', astWiki5);
  document.querySelector('#ast-wiki5').innerHTML = `${astName5}`;
  // // Astronaut Data 6
  let astName6 = data.results[5].name;
  let astNat6 = data.results[5].nationality;
  let astStatus6 = data.results[5].status.name;
  let astLast6 = data.results[5].last_flight.substring(0, 10);
  let astWiki6 = data.results[5].wiki;
  let astBio6 = data.results[5].bio;
  let astPic6 = data.results[5].profile_image;

  document.querySelector('#ast-name6').innerHTML = `${astName6}`;
  document.querySelector('#ast-pic6').src = `${astPic6}`;
  document.querySelector('#ast-nat6').innerHTML = `${astNat6}`;
  document.querySelector('#ast-bio6').innerHTML = `${astBio6}`;
  document.querySelector('#ast-status6').innerHTML = `${astStatus6}`;
  document.querySelector('#ast-last6').innerHTML = `${astLast6}`;
  document.querySelector('#ast-wiki6').setAttribute('href', astWiki6);
  document.querySelector('#ast-wiki6').innerHTML = `${astName6}`;
  // // Astronaut Data 7
  let astName7 = data.results[6].name;
  let astNat7 = data.results[6].nationality;
  let astStatus7 = data.results[6].status.name;
  let astLast7 = data.results[6].last_flight.substring(0, 10);
  let astWiki7 = data.results[6].wiki;
  let astBio7 = data.results[6].bio;
  let astPic7 = data.results[6].profile_image;

  document.querySelector('#ast-name7').innerHTML = `${astName7}`;
  document.querySelector('#ast-pic7').src = `${astPic7}`;
  document.querySelector('#ast-nat7').innerHTML = `${astNat7}`;
  document.querySelector('#ast-bio7').innerHTML = `${astBio7}`;
  document.querySelector('#ast-status7').innerHTML = `${astStatus7}`;
  document.querySelector('#ast-last7').innerHTML = `${astLast7}`;
  document.querySelector('#ast-wiki7').setAttribute('href', astWiki7);
  document.querySelector('#ast-wiki7').innerHTML = `${astName7}`;
  // // Astronaut Data 8
  let astName8 = data.results[7].name;
  let astNat8 = data.results[7].nationality;
  let astStatus8 = data.results[7].status.name;
  let astLast8 = data.results[7].last_flight.substring(0, 10);
  let astWiki8 = data.results[7].wiki;
  let astBio8 = data.results[7].bio;
  let astPic8 = data.results[7].profile_image;

  document.querySelector('#ast-name8').innerHTML = `${astName8}`;
  document.querySelector('#ast-pic8').src = `${astPic8}`;
  document.querySelector('#ast-nat8').innerHTML = `${astNat8}`;
  document.querySelector('#ast-bio8').innerHTML = `${astBio8}`;
  document.querySelector('#ast-status8').innerHTML = `${astStatus8}`;
  document.querySelector('#ast-last8').innerHTML = `${astLast8}`;
  document.querySelector('#ast-wiki8').setAttribute('href', astWiki8);
  document.querySelector('#ast-wiki8').innerHTML = `${astName8}`;
  // // Astronaut Data 9
  let astName9 = data.results[8].name;
  let astNat9 = data.results[8].nationality;
  let astStatus9 = data.results[8].status.name;
  let astLast9 = data.results[8].last_flight.substring(0, 10);
  let astWiki9 = data.results[8].wiki;
  let astBio9 = data.results[8].bio;
  let astPic9 = data.results[8].profile_image;

  document.querySelector('#ast-name9').innerHTML = `${astName9}`;
  document.querySelector('#ast-pic9').src = `${astPic9}`;
  document.querySelector('#ast-nat9').innerHTML = `${astNat9}`;
  document.querySelector('#ast-bio9').innerHTML = `${astBio9}`;
  document.querySelector('#ast-status9').innerHTML = `${astStatus9}`;
  document.querySelector('#ast-last9').innerHTML = `${astLast9}`;
  document.querySelector('#ast-wiki9').setAttribute('href', astWiki9);
  document.querySelector('#ast-wiki9').innerHTML = `${astName9}`;
  // // Astronaut Data 10
  let astName10 = data.results[9].name;
  let astNat10 = data.results[9].nationality;
  let astStatus10 = data.results[9].status.name;
  let astLast10 = data.results[9].last_flight.substring(0, 10);
  let astWiki10 = data.results[9].wiki;
  let astBio10 = data.results[9].bio;
  let astPic10 = data.results[9].profile_image;

  document.querySelector('#ast-name10').innerHTML = `${astName10}`;
  document.querySelector('#ast-pic10').src = `${astPic10}`;
  document.querySelector('#ast-nat10').innerHTML = `${astNat10}`;
  document.querySelector('#ast-bio10').innerHTML = `${astBio10}`;
  document.querySelector('#ast-status10').innerHTML = `${astStatus10}`;
  document.querySelector('#ast-last10').innerHTML = `${astLast10}`;
  document.querySelector('#ast-wiki10').setAttribute('href', astWiki10);
  document.querySelector('#ast-wiki10').innerHTML = `${astName10}`;
};

//

//SAVE IMAGE TO LOCAL STORAGE AND RETRIEVE

// call getAstronautApi temporarly until a from element is made

// empty array for save
let saveArray = [];

const saveImageData = function (data) {
  let imageSrc = data.url;
  let savedImg = document.createElement('img');
  savedImg.src = imageSrc;
  savedImages.appendChild(savedImg);
  saveArray.push(imageSrc);
  localStorage.setItem('savedImage', JSON.stringify(saveArray));
};

const loadSavedImages = function () {
  let retrieveSavedImages = localStorage.getItem('savedImage');
  let retrieveSavedImages2 = JSON.parse(retrieveSavedImages);
  console.log(retrieveSavedImages2);
  if (retrieveSavedImages2) {
    retrieveSavedImages = retrieveSavedImages2;
  } else {
    retrieveSavedImages = [];
  }
};

loadSavedImages();
var saveBtn = document.querySelector('#save');
saveBtn.addEventListener('click', saveImageData);

// call getAstronautApi temporarly until a from element is made
//getAstronautApi();
