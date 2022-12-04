const express = require("express");
const mysql = require("mysql");
const { body, validationResult } = require("express-validator");
const app = express();

require("dotenv").config();
