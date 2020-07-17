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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _console;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nvar arr = [1, 3, 4, 5, 6, 7];\nvar newArr = arr.map(function (item) {\n  // percorrer o vetor todo e fazer algo (quase igual ao for)\n  return item + 1;\n});\nvar sum = arr.reduce(function (total, next) {\n  // reduzir o vetor para um unico valor de acordo com a regra passado dentro da function\n  return total + next;\n});\nvar filter = arr.filter(function (item) {\n  //filtra um valor dentro do vetor\n  return item % 2 === 0; //encontra os valores pares dentro do vetor arr.\n});\nvar find = arr.find(function (item) {\n  //encontra algum valor dentro do array\n  return item === 1;\n});\nconsole.log(newArr);\nconsole.log(sum);\nconsole.log(filter);\nconsole.log(find);\n/*AGORA O MESMO CÓDIGO SÓ QUE COM ARROW FUNCTIONS*/\n\nvar arr2 = [1, 3, 5, 6, 7, 8, 9];\nvar newArr2 = arr.map(function (item) {\n  return item + 1;\n});\nconsole.log('função 2' + newArr);\n/*DESESTRUTURAÇÃO*/\n\nvar user = {\n  nome: 'Lucas',\n  idade: 24,\n  endereco: {\n    rua: 'Afonso Lopes Vieira',\n    numero: 500\n  }\n};\n/*chamando as propriedades do objeto utilizando desestruturação*/\n\nvar nome = user.nome,\n    idade = user.idade,\n    _user$endereco = user.endereco,\n    rua = _user$endereco.rua,\n    numero = _user$endereco.numero;\nconsole.log(nome);\nconsole.log(idade);\nconsole.log(rua);\nconsole.log(numero);\n/*função passando como parâmetros as variáveis do objeto utilizando desestruturação*/\n\nfunction mostraUser(_ref) {\n  var nome = _ref.nome,\n      idade = _ref.idade,\n      _ref$endereco = _ref.endereco,\n      rua = _ref$endereco.rua,\n      numero = _ref$endereco.numero;\n  console.log(nome, idade, rua, numero);\n}\n\nmostraUser(user);\n/* REST E SPREAD */\n\n/* REST */\n\nvar usuario = {\n  nome2: 'Lucas',\n  idade2: 24,\n  empresa: 'Nenhuma'\n};\n\nvar nome2 = usuario.nome2,\n    resto = _objectWithoutProperties(usuario, [\"nome2\"]); // este \"...\" na declaração da variável serve para obter o RESTO das informações\n\n\n(_console = console).log.apply(_console, [nome].concat(_toConsumableArray(resto)));\n/*  SPREAD  */\n\n\nvar array1 = [1, 2, 3];\nvar array2 = [2, 3, 4];\nvar array3 = [].concat(array1, array2); // faz o papel de propagação, de repasse dos dados para outra estrutura.\n\nconsole.log(array3);\nvar usuario2 = {\n  nome3: 'Lucas',\n  idade3: 24,\n  empresa2: 'Nenhuma'\n};\n\nvar usuario3 = _objectSpread(_objectSpread({}, usuario2), {}, {\n  nome3: 'João'\n}); //repeti todas as propriedades de usuario2 no usuario3 mas fiz uma modificação em um valor de uma propriedade\n\n\nconsole.log(usuario3);\n/*TEMPLATE LITERALS*/\n\nvar nomeLiteral = 'Lucas';\nvar idadeLiteral = 24;\nconsole.log(\"Meu nome \\xE9 \".concat(nome, \" e tenho \").concat(idade, \" anos\")); // utilização de ${} para concatenação de variáveis em strings, tudo dentro de crase `` ao invés de aspas ou apóstrofo\n\n/*OBJECT SHORT SYNTAX*/\n\nvar nomeObject = 'Lucas';\nvar idadeObject = 24;\nvar userObject = {\n  // NÃO PRECISAMOS COLOCAR nomeobject = nomeobject, o ES6 já interpreta de forma simples que a variavel mencionada dentro do objeto se refere a variavel dentro do escopo.\n  nomeObject: nomeObject,\n  idadeObject: idadeObject\n};\nconsole.log(userObject);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });