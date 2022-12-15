"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
(0, mongoose_1.set)('strictQuery', true);
const connectDB = () => {
    return (0, mongoose_1.connect)(process.env.MONGO_URI, () => {
        console.log("Connected to database successfully");
    });
};
exports.default = connectDB;
