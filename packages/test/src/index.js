"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saludar = void 0;
exports.greet = greet;
var saludar = function (nombre) {
    console.log("Hola ".concat(nombre));
};
exports.saludar = saludar;
function greet(name) {
    return "Hola, ".concat(name);
}
(0, exports.saludar)("Turborepo 2");
