"use strict";

var util = require('util'),
    events = require('events'),
    http = require('http'),
    _und = require('underscore'),
    async = require('async'),
    request = require('request'),
    querystring = require('querystring'),
    //connect = require('connect'),
    GoogleClientLogin = require('googleclientlogin'),
    GMProtocol = require('protocols/GM'),
    MMProtocol = require('protocols/MM'),

function GMSession(opts) {

}

exports.GMSession = GMSession;
