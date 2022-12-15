"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Seller_1 = __importDefault(require("./routes/Seller"));
const app = (0, express_1.default)();
const PORT = (process.env.PORT || 5000);
app.use("/api/book", Seller_1.default);
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started succesfully");
        });
    }
    catch (err) {
        console.log(err);
    }
};
start();
