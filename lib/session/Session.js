"use strict";

var util = require('util'),
    events = require('events'),
    http = require('http'),
    _und = require('underscore'),
    async = require('async'),
    request = require('request'),
    querystring = require('querystring'),

    GoogleClientLogin = require('googleclientlogin'),
    gmErrors = require('errors'); 



function Session(opts) {
    var self = this;

    if(!_und.isObject(opts) || !_und.isString(opts.email) || !_und.isString(opts.password)) throw new Error("Must supply Google Music email + password.");

    this._defaults = {
        callTimeout: (1000 * 10),               
        authTimeout: (1000 * 60 * 60 * 24),     
        maxResults: 50,
        service: 'sj',
        isAuthenticated: false,
        userAgent: "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"
    };

    this._auth = null;

    return this;
}

util.inherits(Session, events.EventEmitter);

Session.prototype.init = function(opts){

    // Extend optional keys onto defaults, bind to this
    for(var i = 0; i < Object.keys(this._defaults).length; i++){
        var key = Object.keys(this._defaults)[i];
        this['_'+key] = opts[key] || this._defaults[key];
    }

    this._auth = opts.authClient || new GoogleClientLogin({
        email: opts.email,
        password: opts.password,
        service: self._service,
        userAgent: self._userAgent
    });

    this._auth.login();

    return this;
};

Session.prototype.logout = function(opts, cb){
    var self = this;
    this._auth.logout(function(err){
        self._isAuthenticated = false;
    });
};


exports.Session = Session;
