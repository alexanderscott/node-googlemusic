"use strict";

var util = require('util'),
    events = require('events'),
    http = require('http'),
    _und = require('underscore'),
    async = require('async'),
    request = require('request'),
    querystring = require('querystring'),

    gmErrors = require('../errors'), 
    GoogleClientLogin = require('googleclientlogin'),

    //GMProtocol = require('protocols/GM'),
    //MMProtocol = require('protocols/MM'),
    //Session = require('session/Session').Session,
    gmErrors = require('errors'); 

function GMusicClient(opts) {
    if (!(this instanceof GMusicClient)) return new GMusicClient(opts);

    if(!_und.isObject(opts) || !_und.isString(opts.email) || !_und.isString(opts.password)) throw new Error("Must supply Google Music email + password.");

    this._defaults = {
        callTimeout: (1000 * 10),               
        authTimeout: (1000 * 60 * 60 * 24),     
        maxResults: 50,
        service: 'sj',
        isAuthenticated: false,
        userAgent: "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"
    };


    this._androidUrl = 'http://android.clients.google.com';
    this._jumperUrl = 'http://uploadsj.clients.google.com';


    return this;
}

util.inherits(GMusicClient, events.EventEmitter);




/*************************
      USER & AUTH
**************************/

GMusicClient.prototype.login = function(cb){
    var self = this;
    this._auth.on( GoogleClientLogin.events.login, function(){
        self._getCookies(function(err){
            self._isAuthenticated = true;
            if(cb) cb(null);
        });
    });
    this._auth.on( GoogleClientLogin.events.error, function(err){
        if(err.message === GoogleClientLogin.errors.loginFailed){
            if(this.isCaptchaRequired()) return cb("Captcha required");
        }
        self._isAuthenticated = false;
        self.emit(gmErrors.authError, err);
        if(cb) return cb(err);
    });
};

GMusicClient.prototype.logout = function(cb){
    var self = this;
    this._auth.logout(function(err){
        self._isAuthenticated = false;
    });
};

GMusicClient.prototype.getUserStatus = function(cb){
    this._sj_call('getStatus', cb);
});

GMusicClient.prototype.getNewAndRecent = function(cb){
    this._sj_call('newandrecent', cb);
});





/*************************
        SONGS
**************************/

GMusicClient.prototype.getAllSongs = function(contToken, cb){
    this._sjCall('loadalltracks', { continuationToken : contToken }, cb);
});

GMusicClient.prototype.getSongs = function(trackIds, cb){
    cb(null);
});

GMusicClient.prototype.updateSong = function(songId, cb){
    cb(null);
});

GMusicClient.prototype.deleteSongs = function(songIds, cb){
    this._sj_call('deletesong', cb);
});



/*************************
        PLAYLISTS
**************************/

GMusicClient.prototype.getAllPlaylists = function(contToken, cb){
    this._sj_call('loadallplaylists', { continuationToken: contToken }, cb);
});

GMusicClient.prototype.getPlaylists = function(trackIds, cb){
    this._sj_call('loadplaylists', cb);
});

GMusicClient.prototype.createPlaylist = function(trackIds, cb){
    cb(null);
});

GMusicClient.prototype.deletePlaylist = function(trackIds, cb){
    cb(null);
});
GMusicClient.prototype.getMixEntries = function(cb){
    this._sj_call('getmixentries', cb);
});




/*************************
   STREAMS & DOWNLOADS
**************************/

GMusicClient.prototype.getStreamUrl = function(songId, cb){
    cb(null);
});

GMusicClient.prototype.getDownloadInfo = function(songId, cb){
    cb(null);
});


GMusicClient.prototype.upload = function(files, cb){
    cb(null);
});



exports.GMusicClient = GMusicClient;
