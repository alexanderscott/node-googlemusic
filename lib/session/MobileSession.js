"use strict";

var util = require('util'),
    events = require('events'),
    http = require('http'),
    _und = require('underscore'),
    async = require('async'),
    request = require('request'),
    querystring = require('querystring'),

    GoogleClientLogin = require('googleclientlogin'),

    protocol = require('protocol/mobile'),

    gmErrors = require('../errors'); 

function MobileSession(opts) {
    if (!(this instanceof MobileSession)) return new MobileSession(opts);

    this.init(opts);
    return this;
}

util.inherits( MobileSession, Session );

MobileSession.prototype.login = function(req, auth, session, cb){ 
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileSession.prototype._sendWithAuth = function(req, auth, session, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};


exports.MobileSession = MobileSession;
