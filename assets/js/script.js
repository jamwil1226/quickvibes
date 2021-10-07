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
  const apiUrlLaunches =
    'https://lldev.thespacedevs.com/2.2.0/launch/?limit=200';

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
  const apiUrlAstronaut = 'https://lldev.thespacedevs.com/2.2.0/astronaut';

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

// LIST OF ASTRONAUTS WHEN CLICKING BUTTON
const displayAstronaut = function (data) {
  console.log(data);
};

//

//SAVE IMAGE TO LOCAL STORAGE AND RETRIEVE

// call getAstronautApi temporarly until a from element is made
const getSave = function (imageUrl) {
  localStorage.setItem('savedimage', imageUrl);
  console.log(getSave);
};

var saveBtn = document.querySelector('#save');
saveBtn.addEventListener('click', getSave);

function imageOfTheDay() {
  var input = document.getElementById('displayImage');
  var storedValue = localStorage.getItem('displayImage');
}

// call getAstronautApi temporarly until a from element is made
//getAstronautApi();
