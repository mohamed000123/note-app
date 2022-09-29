"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
let cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
app.listen(8000, () => {
    console.log("server is listening on port 8000");
});
app.use(body_parser_1.default.json());
