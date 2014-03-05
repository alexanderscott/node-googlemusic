"use strict";

var util = require('util'),
    events = require('events'),
    http = require('http'),
    _und = require('underscore'),
    async = require('async'),
    request = require('request'),
    querystring = require('querystring'),

    protocol = require('../protocol/musicmanager'),

    MusicManagerSession = require('../session/MusicManagerSession').MusicManagerSession,
    Client = require('Client').Client;

function MusicManagerClient(opts) {
    if (!(this instanceof MusicManagerClient)) return new MusicManagerClient(opts);

    this._session = new MusicManagerSession(opts); 

    this.init(opts);
    return this;
}

MusicManagerClient.prototype.getUploadedSongs = function(opts, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MusicManagerClient.prototype.upload = function(filepaths, opts, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

util.inherits(MusicManagerClient, Client);

exports.MusicManagerClient = MusicManagerClient;

