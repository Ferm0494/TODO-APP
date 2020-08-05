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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/project */ \"./src/js/project.js\");\n/* harmony import */ var _js_libraries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/libraries */ \"./src/js/libraries.js\");\n/* harmony import */ var _js_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components */ \"./src/js/components.js\");\n/* harmony import */ var _js_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/task */ \"./src/js/task.js\");\n/* harmony import */ var _js_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/tasks */ \"./src/js/tasks.js\");\n\n\n\n\n\nconst createProject = () => {\n\n    const projectName = document.getElementById(\"projectNameField\")\n    Object(_js_project__WEBPACK_IMPORTED_MODULE_0__[\"project\"])(projectName)\n    populateSelect(Object(_js_libraries__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n}\n\n\nconst validate = (arr) => {\n    if (arr.length > 0) {\n        _js_components__WEBPACK_IMPORTED_MODULE_2__[\"taskForm\"].classList.remove('d-none');\n        _js_components__WEBPACK_IMPORTED_MODULE_2__[\"deleteProjectBtn\"].classList.remove('d-none');\n        return true;\n    } else {\n        if (_js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].hasChildNodes) {\n            _js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].remove(_js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].firstChild);\n        }\n        console.log(`children: ${_js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].childElementCount}`);\n        _js_components__WEBPACK_IMPORTED_MODULE_2__[\"taskForm\"].classList.add('d-none');\n        _js_components__WEBPACK_IMPORTED_MODULE_2__[\"deleteProjectBtn\"].classList.add('d-none');\n        return false;\n    }\n}\n\nconst populateSelect = (arr) => {\n    if (validate(arr)) {\n        while (_js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].firstChild) {\n            _js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].removeChild(_js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].firstChild);\n        }\n        arr.forEach(element => {\n            const option = document.createElement('option');\n            option.innerHTML = element;\n            _js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].appendChild(option);\n        });\n        Object(_js_tasks__WEBPACK_IMPORTED_MODULE_4__[\"renderTasks\"])(Object(_js_tasks__WEBPACK_IMPORTED_MODULE_4__[\"tasks\"])(_js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].value))\n\n    }\n}\n\n\ndocument.getElementById('createProject').addEventListener('click', function(a) {\n    a.preventDefault();\n    createProject();\n});\n\ndocument.getElementById('addTask').addEventListener('click', function(e) {\n    e.preventDefault();\n    const inputs = document.getElementsByTagName('form')[2].getElementsByClassName('form2')\n    const project = document.getElementById('projects').value\n\n    Object(_js_task__WEBPACK_IMPORTED_MODULE_3__[\"task\"])(inputs, project);\n})\n\n_js_components__WEBPACK_IMPORTED_MODULE_2__[\"deleteProjectBtn\"].addEventListener('click', function(e) {\n    e.preventDefault();\n    populateSelect(Object(_js_project__WEBPACK_IMPORTED_MODULE_0__[\"deleteProject\"])(_js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].value));\n    Object(_js_tasks__WEBPACK_IMPORTED_MODULE_4__[\"renderTasks\"])(Object(_js_tasks__WEBPACK_IMPORTED_MODULE_4__[\"tasks\"])(_js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].value))\n\n});\n\n_js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].addEventListener('change', function(e) {\n    let arr = Object(_js_tasks__WEBPACK_IMPORTED_MODULE_4__[\"tasks\"])(_js_components__WEBPACK_IMPORTED_MODULE_2__[\"selectProjects\"].value);\n    Object(_js_tasks__WEBPACK_IMPORTED_MODULE_4__[\"renderTasks\"])(arr)\n})\n\n//localStorage.clear()\npopulateSelect(Object(_js_libraries__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIHByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdFxufSBmcm9tICcuL2pzL3Byb2plY3QnXG5pbXBvcnQgbGlicmFyeSBmcm9tICcuL2pzL2xpYnJhcmllcydcbmltcG9ydCB7XG4gICAgdGFza0Zvcm0sXG4gICAgZGVsZXRlUHJvamVjdEJ0bixcbiAgICBzZWxlY3RQcm9qZWN0c1xufSBmcm9tICcuL2pzL2NvbXBvbmVudHMnXG5pbXBvcnQge1xuICAgIHRhc2ssXG59IGZyb20gJy4vanMvdGFzaydcbmltcG9ydCB7XG4gICAgcmVuZGVyVGFza3MsXG4gICAgdGFza3Ncbn0gZnJvbSAnLi9qcy90YXNrcydcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVGaWVsZFwiKVxuICAgIHByb2plY3QocHJvamVjdE5hbWUpXG4gICAgcG9wdWxhdGVTZWxlY3QobGlicmFyeSgpKTtcbn1cblxuXG5jb25zdCB2YWxpZGF0ZSA9IChhcnIpID0+IHtcbiAgICBpZiAoYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzZWxlY3RQcm9qZWN0cy5oYXNDaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBzZWxlY3RQcm9qZWN0cy5yZW1vdmUoc2VsZWN0UHJvamVjdHMuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYGNoaWxkcmVuOiAke3NlbGVjdFByb2plY3RzLmNoaWxkRWxlbWVudENvdW50fWApO1xuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuY29uc3QgcG9wdWxhdGVTZWxlY3QgPSAoYXJyKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRlKGFycikpIHtcbiAgICAgICAgd2hpbGUgKHNlbGVjdFByb2plY3RzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHNlbGVjdFByb2plY3RzLnJlbW92ZUNoaWxkKHNlbGVjdFByb2plY3RzLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gZWxlbWVudDtcbiAgICAgICAgICAgIHNlbGVjdFByb2plY3RzLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICByZW5kZXJUYXNrcyh0YXNrcyhzZWxlY3RQcm9qZWN0cy52YWx1ZSkpXG5cbiAgICB9XG59XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZVByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGEpIHtcbiAgICBhLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3JlYXRlUHJvamVjdCgpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMl0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybTInKVxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKS52YWx1ZVxuXG4gICAgdGFzayhpbnB1dHMsIHByb2plY3QpO1xufSlcblxuZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcG9wdWxhdGVTZWxlY3QoZGVsZXRlUHJvamVjdChzZWxlY3RQcm9qZWN0cy52YWx1ZSkpO1xuICAgIHJlbmRlclRhc2tzKHRhc2tzKHNlbGVjdFByb2plY3RzLnZhbHVlKSlcblxufSk7XG5cbnNlbGVjdFByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgYXJyID0gdGFza3Moc2VsZWN0UHJvamVjdHMudmFsdWUpO1xuICAgIHJlbmRlclRhc2tzKGFycilcbn0pXG5cbi8vbG9jYWxTdG9yYWdlLmNsZWFyKClcbnBvcHVsYXRlU2VsZWN0KGxpYnJhcnkoKSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFLQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/components.js":
/*!******************************!*\
  !*** ./src/js/components.js ***!
  \******************************/
/*! exports provided: parentTaskCard, cards, taskContainerList, taskCard, taskForm, deleteProjectBtn, selectProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parentTaskCard\", function() { return parentTaskCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cards\", function() { return cards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskContainerList\", function() { return taskContainerList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskCard\", function() { return taskCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskForm\", function() { return taskForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProjectBtn\", function() { return deleteProjectBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectProjects\", function() { return selectProjects; });\nconst taskForm = document.getElementsByTagName('form')[2]; \nconst deleteProjectBtn = document.getElementById('deleteProjectBtn');\nconst selectProjects = document.getElementById('projects');\nconst cards = document.getElementsByClassName('real-task')\nconst taskCard = document.getElementsByTagName('li')[0]\nconst parentTaskCard = taskCard.parentNode\nconst taskContainerList = document.getElementsByClassName('col-6')[1]\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzLmpzPzc3NDYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzJdOyBcbmNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlUHJvamVjdEJ0bicpO1xuY29uc3Qgc2VsZWN0UHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbmNvbnN0IGNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVhbC10YXNrJylcbmNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJylbMF1cbmNvbnN0IHBhcmVudFRhc2tDYXJkID0gdGFza0NhcmQucGFyZW50Tm9kZVxuY29uc3QgdGFza0NvbnRhaW5lckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2wtNicpWzFdXG5leHBvcnQge1xuICBwYXJlbnRUYXNrQ2FyZCxcbiAgY2FyZHMsXG4gIHRhc2tDb250YWluZXJMaXN0LFxuICB0YXNrQ2FyZCxcbiAgdGFza0Zvcm0sXG4gIGRlbGV0ZVByb2plY3RCdG4sXG4gIHNlbGVjdFByb2plY3RzXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/components.js\n");

/***/ }),

/***/ "./src/js/libraries.js":
/*!*****************************!*\
  !*** ./src/js/libraries.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst library = () => {\n    const projects = JSON.parse(localStorage.getItem('projects')) || [];\n    return projects\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (library);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGlicmFyaWVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYnJhcmllcy5qcz84MDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpYnJhcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcbiAgICByZXR1cm4gcHJvamVjdHNcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlicmFyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/libraries.js\n");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/*! exports provided: project, deleteProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"project\", function() { return project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProject\", function() { return deleteProject; });\n/* harmony import */ var _libraries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libraries */ \"./src/js/libraries.js\");\n\n\nconst project = (obj) => {\n  const projects = Object(_libraries__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  const validate = () =>{\n    const title = obj.value.trim()\n\n    if (projects.includes(title)) {\n      obj.setCustomValidity('Element already exists')\n      obj.reportValidity();\n      return false\n    } else if (title === \"\") {\n      obj.setCustomValidity('Can\\'t be empty')\n      obj.reportValidity();\n      return false;\n    }\n    return true;\n}\n\n    const addProject = () => {\n       const title = obj.value.trim()\n        if (validate()){\n          projects.push(title);\n          localStorage.setItem('projects', JSON.stringify(projects));\n          alert(\"Project successfully added!\")\n        }\n    }\n\n    addProject()\n\n}\n\nconst deleteProject = (value) => {\n  const newLibrary = Object(_libraries__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().filter(e => e !== value); \n  localStorage.setItem('projects', JSON.stringify(newLibrary));\n  localStorage.removeItem(value);\n  return newLibrary;\n}\n\n //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcHJvamVjdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9wcm9qZWN0LmpzP2VmNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxpYnJhcnkgZnJvbSBcIi4vbGlicmFyaWVzXCJcblxuY29uc3QgcHJvamVjdCA9IChvYmopID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBsaWJyYXJ5KClcbiAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PntcbiAgICBjb25zdCB0aXRsZSA9IG9iai52YWx1ZS50cmltKClcblxuICAgIGlmIChwcm9qZWN0cy5pbmNsdWRlcyh0aXRsZSkpIHtcbiAgICAgIG9iai5zZXRDdXN0b21WYWxpZGl0eSgnRWxlbWVudCBhbHJlYWR5IGV4aXN0cycpXG4gICAgICBvYmoucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSBpZiAodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgIG9iai5zZXRDdXN0b21WYWxpZGl0eSgnQ2FuXFwndCBiZSBlbXB0eScpXG4gICAgICBvYmoucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgIGNvbnN0IHRpdGxlID0gb2JqLnZhbHVlLnRyaW0oKVxuICAgICAgICBpZiAodmFsaWRhdGUoKSl7XG4gICAgICAgICAgcHJvamVjdHMucHVzaCh0aXRsZSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICAgICAgICBhbGVydChcIlByb2plY3Qgc3VjY2Vzc2Z1bGx5IGFkZGVkIVwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdCgpXG5cbn1cblxuY29uc3QgZGVsZXRlUHJvamVjdCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBuZXdMaWJyYXJ5ID0gbGlicmFyeSgpLmZpbHRlcihlID0+IGUgIT09IHZhbHVlKTsgXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KG5ld0xpYnJhcnkpKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odmFsdWUpO1xuICByZXR1cm4gbmV3TGlicmFyeTtcbn1cblxuZXhwb3J0IHtcbiAgcHJvamVjdCxcbiAgZGVsZXRlUHJvamVjdCxcbn0gIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/project.js\n");

/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/*! exports provided: task, renderTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"task\", function() { return task; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTask\", function() { return renderTask; });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/js/tasks.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./src/js/components.js\");\n\n\n\n\n\nconst deleteTask = (task) => {\n    let idProject = task.project\n    let arr = Object(_tasks__WEBPACK_IMPORTED_MODULE_0__[\"tasks\"])(idProject)\n    \n    let newArr = arr.filter( x =>\n        x.title !== task.title\n    )\n        \n    console.log(`New arr ${JSON.stringify(newArr)}`)\n    localStorage.setItem(idProject, JSON.stringify(newArr));\n    Object(_tasks__WEBPACK_IMPORTED_MODULE_0__[\"renderTasks\"])(newArr);\n}\n\nconst createDeleteButton = (task) => {\n    let deleteButton = document.createElement(\"button\");\n    deleteButton.innerHTML = \"Delete task\"\n    deleteButton.id = task.title;\n    deleteButton.addEventListener('click', function(e) {\n        deleteTask(task)\n    })\n    return deleteButton\n}\n\nconst renderTask = (task) => {\n\n    if (_components__WEBPACK_IMPORTED_MODULE_1__[\"taskContainerList\"].classList.contains('d-none')) {\n        _components__WEBPACK_IMPORTED_MODULE_1__[\"taskContainerList\"].classList.remove('d-none')\n    }\n    \n    const card = _components__WEBPACK_IMPORTED_MODULE_1__[\"taskCard\"].cloneNode(true);\n    switch(parseInt(task.priority)) {\n        case 1:\n            card.classList.add('bg-danger');\n        break;\n        case 2:\n            card.classList.add('bg-warning');\n        break;\n        default:\n            card.classList.add('bg-info');\n    } \n\n    let children = card.children[0].children;\n    children[0].innerHTML = task.title;\n    children[1].innerHTML = `Description: ${task.description}`\n    children[2].innerHTML = `Due Date : ${task.dueDate}`\n    children[3].innerHTML = `Priority : ${task.priority}`\n    children[4].innerHTML = `Notes : ${task.notes}`\n    let deleteButton = createDeleteButton(task);\n    card.appendChild(deleteButton);\n    _components__WEBPACK_IMPORTED_MODULE_1__[\"parentTaskCard\"].appendChild(card)\n\n    card.classList.add(\"real-task\")\n    card.classList.remove('d-none');\n}\n\nconst task = (inputs, project) => {\n\n    let newTask = {\n        project,\n        title: inputs[0].value,\n        description: inputs[1].value,\n        dueDate: inputs[2].value,\n        priority: inputs[3].value,\n        notes: inputs[4].value,\n    }\n\n    const taskList = Object(_tasks__WEBPACK_IMPORTED_MODULE_0__[\"tasks\"])(project);\n\n    const validate = () => {\n        const title = newTask.title.trim()\n        let flag = true;\n        taskList.forEach(element => {\n            if (element.title === title) {\n                inputs[0].setCustomValidity('Task already exists')\n                inputs[0].reportValidity();\n                flag = false;\n            }\n        });\n        if (title === \"\") {\n\n            inputs[0].setCustomValidity('Can\\'t be empty');\n            inputs[0].reportValidity();\n            flag = false\n        }\n        return flag;\n    }\n\n    const addTask = () => {\n        if (validate()) {\n            taskList.push(newTask);\n            localStorage.setItem(newTask.project, JSON.stringify(taskList));\n            renderTask(newTask);\n        }\n    }\n\n    addTask()\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGFzay5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy90YXNrLmpzPzRlYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICB0YXNrcyxcbiAgICByZW5kZXJUYXNrcyxcbn0gZnJvbSAnLi90YXNrcyc7XG5pbXBvcnQge1xuICAgIHRhc2tDYXJkLFxuICAgIHRhc2tDb250YWluZXJMaXN0LFxuICAgIHBhcmVudFRhc2tDYXJkXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5cblxuXG5jb25zdCBkZWxldGVUYXNrID0gKHRhc2spID0+IHtcbiAgICBsZXQgaWRQcm9qZWN0ID0gdGFzay5wcm9qZWN0XG4gICAgbGV0IGFyciA9IHRhc2tzKGlkUHJvamVjdClcbiAgICBcbiAgICBsZXQgbmV3QXJyID0gYXJyLmZpbHRlciggeCA9PlxuICAgICAgICB4LnRpdGxlICE9PSB0YXNrLnRpdGxlXG4gICAgKVxuICAgICAgICBcbiAgICBjb25zb2xlLmxvZyhgTmV3IGFyciAke0pTT04uc3RyaW5naWZ5KG5ld0Fycil9YClcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZFByb2plY3QsIEpTT04uc3RyaW5naWZ5KG5ld0FycikpO1xuICAgIHJlbmRlclRhc2tzKG5ld0Fycik7XG59XG5cbmNvbnN0IGNyZWF0ZURlbGV0ZUJ1dHRvbiA9ICh0YXNrKSA9PiB7XG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IFwiRGVsZXRlIHRhc2tcIlxuICAgIGRlbGV0ZUJ1dHRvbi5pZCA9IHRhc2sudGl0bGU7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBkZWxldGVUYXNrKHRhc2spXG4gICAgfSlcbiAgICByZXR1cm4gZGVsZXRlQnV0dG9uXG59XG5cbmNvbnN0IHJlbmRlclRhc2sgPSAodGFzaykgPT4ge1xuXG4gICAgaWYgKHRhc2tDb250YWluZXJMaXN0LmNsYXNzTGlzdC5jb250YWlucygnZC1ub25lJykpIHtcbiAgICAgICAgdGFza0NvbnRhaW5lckxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY2FyZCA9IHRhc2tDYXJkLmNsb25lTm9kZSh0cnVlKTtcbiAgICBzd2l0Y2gocGFyc2VJbnQodGFzay5wcmlvcml0eSkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdiZy1kYW5nZXInKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnYmctd2FybmluZycpO1xuICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnYmctaW5mbycpO1xuICAgIH0gXG5cbiAgICBsZXQgY2hpbGRyZW4gPSBjYXJkLmNoaWxkcmVuWzBdLmNoaWxkcmVuO1xuICAgIGNoaWxkcmVuWzBdLmlubmVySFRNTCA9IHRhc2sudGl0bGU7XG4gICAgY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gYERlc2NyaXB0aW9uOiAke3Rhc2suZGVzY3JpcHRpb259YFxuICAgIGNoaWxkcmVuWzJdLmlubmVySFRNTCA9IGBEdWUgRGF0ZSA6ICR7dGFzay5kdWVEYXRlfWBcbiAgICBjaGlsZHJlblszXS5pbm5lckhUTUwgPSBgUHJpb3JpdHkgOiAke3Rhc2sucHJpb3JpdHl9YFxuICAgIGNoaWxkcmVuWzRdLmlubmVySFRNTCA9IGBOb3RlcyA6ICR7dGFzay5ub3Rlc31gXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZURlbGV0ZUJ1dHRvbih0YXNrKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgcGFyZW50VGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZClcblxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInJlYWwtdGFza1wiKVxuICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG59XG5cbmNvbnN0IHRhc2sgPSAoaW5wdXRzLCBwcm9qZWN0KSA9PiB7XG5cbiAgICBsZXQgbmV3VGFzayA9IHtcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgdGl0bGU6IGlucHV0c1swXS52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGlucHV0c1sxXS52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZTogaW5wdXRzWzJdLnZhbHVlLFxuICAgICAgICBwcmlvcml0eTogaW5wdXRzWzNdLnZhbHVlLFxuICAgICAgICBub3RlczogaW5wdXRzWzRdLnZhbHVlLFxuICAgIH1cblxuICAgIGNvbnN0IHRhc2tMaXN0ID0gdGFza3MocHJvamVjdCk7XG5cbiAgICBjb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBuZXdUYXNrLnRpdGxlLnRyaW0oKVxuICAgICAgICBsZXQgZmxhZyA9IHRydWU7XG4gICAgICAgIHRhc2tMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHNbMF0uc2V0Q3VzdG9tVmFsaWRpdHkoJ1Rhc2sgYWxyZWFkeSBleGlzdHMnKVxuICAgICAgICAgICAgICAgIGlucHV0c1swXS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aXRsZSA9PT0gXCJcIikge1xuXG4gICAgICAgICAgICBpbnB1dHNbMF0uc2V0Q3VzdG9tVmFsaWRpdHkoJ0NhblxcJ3QgYmUgZW1wdHknKTtcbiAgICAgICAgICAgIGlucHV0c1swXS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgZmxhZyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZsYWc7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZhbGlkYXRlKCkpIHtcbiAgICAgICAgICAgIHRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdUYXNrLnByb2plY3QsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG4gICAgICAgICAgICByZW5kZXJUYXNrKG5ld1Rhc2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkVGFzaygpXG59XG5cblxuZXhwb3J0IHtcbiAgICB0YXNrLFxuICAgIHJlbmRlclRhc2ssXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/task.js\n");

/***/ }),

/***/ "./src/js/tasks.js":
/*!*************************!*\
  !*** ./src/js/tasks.js ***!
  \*************************/
/*! exports provided: tasks, renderTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tasks\", function() { return tasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTasks\", function() { return renderTasks; });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/js/task.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./src/js/components.js\");\n\n\nconst tasks = (project) => {\n\n    const tasks = localStorage.getItem(project)\n\n\n\n    if (tasks === null || tasks === \"\") {\n        return []\n    } else {\n\n        return JSON.parse(tasks);\n    }\n}\n\nconst renderTasks = (arr) => {\n    let size = _components__WEBPACK_IMPORTED_MODULE_1__[\"cards\"].length;\n    for (let i = 0; i < size; i++) {\n\n        _components__WEBPACK_IMPORTED_MODULE_1__[\"parentTaskCard\"].removeChild(_components__WEBPACK_IMPORTED_MODULE_1__[\"cards\"][0])\n    }\n    arr.forEach(x => {\n        Object(_task__WEBPACK_IMPORTED_MODULE_0__[\"renderTask\"])(x)\n    })\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGFza3MuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdGFza3MuanM/NzliOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIHJlbmRlclRhc2tcbn0gZnJvbSAnLi90YXNrJ1xuaW1wb3J0IHtcbiAgICBjYXJkcyxcbiAgICBwYXJlbnRUYXNrQ2FyZFxufSBmcm9tICcuL2NvbXBvbmVudHMnXG5jb25zdCB0YXNrcyA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICBjb25zdCB0YXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpXG5cblxuXG4gICAgaWYgKHRhc2tzID09PSBudWxsIHx8IHRhc2tzID09PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGFza3MpO1xuICAgIH1cbn1cblxuY29uc3QgcmVuZGVyVGFza3MgPSAoYXJyKSA9PiB7XG4gICAgbGV0IHNpemUgPSBjYXJkcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcblxuICAgICAgICBwYXJlbnRUYXNrQ2FyZC5yZW1vdmVDaGlsZChjYXJkc1swXSlcbiAgICB9XG4gICAgYXJyLmZvckVhY2goeCA9PiB7XG4gICAgICAgIHJlbmRlclRhc2soeClcbiAgICB9KVxufVxuXG5leHBvcnQge1xuICAgIHRhc2tzLFxuICAgIHJlbmRlclRhc2tzXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/tasks.js\n");

/***/ })

/******/ });