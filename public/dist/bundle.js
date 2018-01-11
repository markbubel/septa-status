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

var allRegionalRails = [];
var allBuses = [];
var allTrolleyLines = [];
fetch('/api/status')
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
    renderAlertMessage(alertCount);
    renderBus(allBuses);
    renderRail(allRegionalRails);
    renderTrolley(allTrolleyLines);
});
function renderBus(transportModeArray) {
    var problemBusLines = [];
    var busAlertCount = 0;
    var busAlertMessage = document.querySelector('.bus-alert-message');
    var busAlertList = document.querySelector('.bus-alert-list');
    transportModeArray.forEach(function (element) {
        if (element.isalert === 'Y') {
            busAlertCount++;
            problemBusLines.push(element);
        }
    });
    if (busAlertCount >= 1) {
        busAlertMessage.innerHTML = "There are " + busAlertCount + " alerts!";
        problemBusLines.forEach(function (el) {
            var singleBus = document.createElement('p');
            singleBus.className = "single-bus";
            singleBus.innerHTML = "Route number " + el.route_name + ". This is the " + el.description + " route.";
            busAlertList.appendChild(singleBus);
        });
    }
}
function renderRail(transportModeArray) {
    var problemRailLines = [];
    var railAlertCount = 0;
    var railAlertMessage = document.querySelector('.rail-alert-message');
    var railAlertList = document.querySelector('.rail-alert-list');
    transportModeArray.forEach(function (element) {
        if (element.isalert === 'Y') {
            railAlertCount++;
            problemRailLines.push(element);
        }
    });
    if (railAlertCount >= 1) {
        railAlertMessage.innerHTML = "There are " + railAlertCount + " alerts!";
        problemRailLines.forEach(function (el) {
            var singleRail = document.createElement('p');
            singleRail.className = "single-rail";
            singleRail.innerHTML = "Route number " + el.route_name + ". This is the " + el.description + " route.";
            railAlertList.appendChild(singleRail);
        });
    }
}
function renderTrolley(transportModeArray) {
    var problemTrolleyLines = [];
    var trolleyAlertCount = 0;
    var trolleyAlertMessage = document.querySelector('.trolley-alert-message');
    var trolleyAlertList = document.querySelector('.trolley-alert-list');
    transportModeArray.forEach(function (element) {
        if (element.isalert === 'Y') {
            trolleyAlertCount++;
            problemTrolleyLines.push(element);
        }
    });
    if (trolleyAlertCount >= 1) {
        trolleyAlertMessage.innerHTML = "There are " + trolleyAlertCount + " alerts!";
        problemTrolleyLines.forEach(function (el) {
            var singleTrolley = document.createElement('p');
            singleTrolley.className = "single-trolley";
            singleTrolley.innerHTML = "Route number " + el.route_name + ". This is the " + el.description + " route.";
            trolleyAlertList.appendChild(singleTrolley);
        });
    }
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
// function searchTransit() {
//     alert("Searching...");
// }
// var searchForm = document.getElementById("searchButton");
// searchForm.addEventListener('click', function() {
//     searchTransit();
// }); 


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map