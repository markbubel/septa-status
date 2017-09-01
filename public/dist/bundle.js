/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var allStatus = document.querySelector('.list-group');
var tableBody = document.querySelector('#tableBody');
var allRegionalRails = [];
var allBuses = [];
var allTrolleyLines = [];
fetch('https://us-central1-ud-course-alert.cloudfunctions.net/getSeptaAlerts')
    .then(function (response) {
    return response.json();
})
    .then(function (json) {
    var alertCount = 0;
    json.forEach(function (element) {
        if (element.route_id.startsWith('rr_')) {
            allRegionalRails.push(element);
            if (element.isalert === 'Y') {
                alertCount++;
            }
        }
        else if (element.route_id.startsWith('bus_')) {
            allBuses.push(element);
            if (element.isalert === 'Y') {
                alertCount++;
            }
        }
        else if (element.route_id.startsWith('trolley_')) {
            allTrolleyLines.push(element);
            if (element.isalert === 'Y') {
                alertCount++;
            }
        }
        else {
            console.log(element.route_name + " was not added");
        }
    });
    renderTransitLine(allBuses);
    renderTransitLine(allRegionalRails);
    renderTransitLine(allTrolleyLines);
    renderAlertMessage(alertCount);
});
function renderTransitLine(transitArray) {
    transitArray.forEach(function (element) {
        var tableRow = document.createElement('tr');
        var tdRouteName = document.createElement('td');
        var tdRouteAlert = document.createElement('td');
        var tdRouteDetour = document.createElement('td');
        var tdRouteUpdateTime = document.createElement('td');
        var tdDescription = document.createElement('td');
        tdRouteName.innerHTML = "" + element.route_name;
        tdRouteAlert.innerHTML = "" + element.isalert;
        tdRouteDetour.innerHTML = "" + element.isdetour;
        tdRouteUpdateTime.innerHTML = "" + element.last_updated;
        tdDescription.innerHTML = "" + element.description;
        if (element.isalert === 'Y') {
            tdRouteAlert.className = "table-danger";
        }
        tableRow.appendChild(tdRouteName);
        tableRow.appendChild(tdRouteAlert);
        tableRow.appendChild(tdRouteDetour);
        tableRow.appendChild(tdRouteUpdateTime);
        tableRow.appendChild(tdDescription);
        tableBody.appendChild(tableRow);
    });
}
function renderAlertMessage(alertCount) {
    var alertDiv = document.getElementsByClassName('alert')[0];
    if (alertCount === 1) {
        alertDiv.className = 'alert alert-danger';
        alertDiv.innerHTML = "There is " + alertCount + " alert across all lines.";
    }
    else if (alertCount > 1) {
        alertDiv.className = 'alert alert-danger';
        alertDiv.innerHTML = "There are " + alertCount + " alerts across all lines.";
    }
    else {
        alertDiv.className = 'alert alert-success';
        alertDiv.innerHTML = "There is a good service on all lines.";
    }
}
function searchTransit() {
    alert("Searching...");
}
var searchForm = document.getElementById("searchButton");
searchForm.addEventListener('click', function () {
    searchTransit();
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map