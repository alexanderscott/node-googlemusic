"use strict";

var util = require('util'),
    events = require('events'),
    http = require('http'),
    _und = require('underscore'),
    async = require('async'),
    request = require('request'),
    querystring = require('querystring'),

    protocol = require('../protocol/web'),

    WebSession = require('../session/WebSession').WebSession,
    gmErrors = require('../errors'),
    Client = require('./Client').Client;


function WebClient(opts) {
    if (!(this instanceof WebClient)) return new WebClient(opts);

    this._session = new WebSession(opts); 

    this.init(opts);
    return this;
}

WebClient.prototype.addSongsToPlaylist = function(playlistId, songIds, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

WebClient.prototype.removeSongsFromPlaylist = function(playlistId, songIds, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

WebClient.prototype._removeEntriesFromPlaylist = function(playlistId, entryIds, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

util.inherits(WebClient, Client);

exports.WebClient = WebClient;
