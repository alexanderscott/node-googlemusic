"use strict";

var util = require('util'),
    events = require('events'),
    http = require('http'),
    _und = require('underscore'),
    async = require('async'),
    request = require('request'),
    querystring = require('querystring'),

    GoogleClientLogin = require('googleclientlogin'),

    GMProtocol = require('protocols/GM'),
    MMProtocol = require('protocols/MM'),
    Session = require('./Session').Session,
    gmErrors = require('../errors'); 

function WebSession(opts) {
    if (!(this instanceof WebSession)) return new WebSession(opts);

    this.init(opts);
    return this;
}

WebSession.prototype.login = function(req, auth, session, cb){ 
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

WebSession.prototype.logout = function(req, auth, session, cb){ 
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

WebSession.prototype._sendWithAuth = function(req, auth, session, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

util.inherits( WebSession, Session );

exports.WebSession = WebSession;
