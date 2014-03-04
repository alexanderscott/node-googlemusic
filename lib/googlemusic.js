"use strict";

var util = require('util'),
    events = require('events'),
    http = require('http'),
    _und = require('underscore'),
    async = require('async'),
    request = require('request'),
    querystring = require('querystring'),
    //connect = require('connect'),
    googleApis = require('googleapis'),
    OAuth2Client = googleApis.OAuth2Client;

function GMusicClient(opts) {
    if (!(this instanceof GMusicClient)) return new GMusicClient(opts);

    if(!opts) throw new Error("Must supply Google Music API client ID + secret");

    opts = opts || {};
    this.gClient = opts.gClient || {};
    this.oauth2Client = opts.oauth2Client || new OAuth2Client( opts.clientId, opts.clientSecret, opts.redirectUri || '' );
    this.scope = (opts.scope || 
                    [ 'https://www.googleapis.com/auth/userinfo.profile' ]).join(' ');
    //this.authorize(opts);

    this._defaults = {
        maxResults: 50
    };

    return this;
}

util.inherits(GMusicClient, events.EventEmitter);

GMusicClient.prototype.authorize = function(code, cb){
    var self = this;
    this.oauth2Client.getToken(code, function(err, credentials){
        if(err){
            if(cb) return cb(err);
            else return false;
        }
        self.oauth2Client.credentials = credentials;
        googleApis
            .discover('oauth2', 'v2')
            .withAuthClient(self.oauth2Client)
            .execute(function(err, client){
                if(err){ 
                    if(cb) return cb(err);
                    else return false;
                }
                self.gClient = client;
                if(cb) return cb(null, credentials);
                else return credentials;
            });
    });
};

GMusicClient.prototype.getUserInfo = function(cb){
    var self = this;
    if(!self.gClient.oauth2) return cb(new Error("Client not authorized to get user info."));

    self.gClient
        .oauth2
        .userinfo
        .get()
        .withAuthClient( self.oauth2Client )
        .execute(function(err, info){
            if(err) return cb(err);
            cb(null, info);
        });
};

GMusicClient.prototype.connect = function(cb){
    var self = this;
    googleApis
        .discover('oauth2', 'v2')
        .withAuthClient(self.oauth2Client)
        .execute(function(err, client){
            if(err) return cb(err);
            self.gClient = client;
            cb(null, client);
        });
};

