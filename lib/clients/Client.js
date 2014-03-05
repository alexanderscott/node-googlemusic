"use strict";

var util = require('util'),
    events = require('events'),
    http = require('http'),
    _und = require('underscore'),
    async = require('async'),
    request = require('request'),
    querystring = require('querystring'),

    gmErrors = require('../errors'); 



function Client(opts) {
    this._defaults = {
        callTimeout: (1000 * 10),               
        maxResults: 50,
        service: 'sj',
        userAgent: "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"
    };

    return this;
}

Client.prototype.init = function(opts){

    // Extend optional keys onto defaults, bind to this
    for(var i = 0; i < Object.keys(this._defaults).length; i++){
        var key = Object.keys(this._defaults)[i];
        this['_'+key] = opts[key] || this._defaults[key];
    }

    return this;
}

Client.prototype.login = function(opts, cb){
    return this._session.login(opts, cb);
};

Client.prototype.logout = function(opts, cb){
    return this._session.logout(opts, cb);
};

Client.prototype._call = function(protocol, opts, cb){

};

Client.prototype.isAuthenticated = function(){
    return this._session.isAuthenticated;
};

util.inherits(Client, events.EventEmitter);

exports.Client = Client;
