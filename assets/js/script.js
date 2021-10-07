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
  console.log(data);
  let launchName = data.results[0].name;
  let statusName = data.results[0].status.abbrev;
  let launchDesc = data.results[0].mission.description;
  let launchImage = data.results[0].image;

  document.querySelector('#name').innerHTML = `${launchName}`;
  document.querySelector('#description').innerHTML = `${launchDesc}`;
  document.querySelector('#status').innerHTML = `${statusName}`;
  document.querySelector('#launch-pic').src = `${launchImage}`;
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
