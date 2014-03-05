"use strict";

var util = require('util'),
    events = require('events'),
    http = require('http'),
    _und = require('underscore'),
    async = require('async'),
    request = require('request'),
    querystring = require('querystring'),

    GoogleClientLogin = require('googleclientlogin'),

    protocol = require('../protocol/musicmanager'),

    Session = require('./Session').Session,

    gmErrors = require('../errors'); 

function MusicManagerSession(opts) {
    if (!(this instanceof MusicManagerSession)) return new MusicManagerSession(opts);

    this.init(opts);
    return this;
}

MusicManagerSession.prototype.login = function(req, auth, session, cb){ 
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MusicManagerSession.prototype._sendWithAuth = function(req, auth, session, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

util.inherits( MusicManagerSession, Session );

exports.MusicManagerSession = MusicManagerSession;
