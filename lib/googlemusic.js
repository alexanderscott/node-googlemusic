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
    //OAuth2Client = googleApis.OAuth2Client;

function GMusicClient(opts) {
    if (!(this instanceof GMusicClient)) return new GMusicClient(opts);

    if(!_und.isObject(opts) || !_und.isString(opts.email) || !_und.isString(opts.password)) throw new Error("Must supply Google Music email + password.");

    this._defaults = {
        callTimeout: (1000 * 10),               
        authTimeout: (1000 * 60 * 60 * 24),     
        maxResults: 50,
        userAgent: "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"
    };

    // Extend optional keys onto defaults, bind to this
    for(var i = 0; i < Object.keys(this._defaults).length; i++){
        var key = Object.keys(this._defaults)[i];
        this['_'+key] = opts[key] || this._defaults[key];
    }

    this._androidUrl = 'http://android.clients.google.com';
    this._jumperUrl = 'http://uploadsj.clients.google.com';

    this._auth = opts.authClient || new GoogleClientLogin({
        email: opts.email,
        password: opts.password,
        service: 'sj'
        userAgent: self._userAgent
    });

    this._auth.login();

    return this;
}

util.inherits(GMusicClient, events.EventEmitter);


GMusicClient.prototype._request = function(type, url, opt, body, cb){
    var self = this;
    if(!cb && _und.isFunction(body)){
        cb = body;
        body = {};
    }
    if(!cb && _und.isFunction(opt)){
        cb = opt;
        opt = {};
    }

    if(!_und.isFunction(cb)) cb = function(){};

    opt = opt || {};
    body = body || {};


    body = _und.isObject(body) ? JSON.stringify(body) : body;

};

GMusicClient.prototype._sj_call = function(serviceName, opts, cb){
    if(!cb && _und.isFunction(opts)){
        cb = opts;
        opts = null;
    }

    return this._request('post', 'https://play.google.com/music/services/'+serviceName.toLowerCase(), opts, null, cb);
});

GMusicClient.prototype._wc_call = function(serviceName, args, cb){
    cb(null);
});

GMusicClient.prototype._mm_pb_call = function(serviceName, args, cb){
    cb(null);
});


/*************************
      USER & AUTH
**************************/

GMusicClient.prototype.login = function(cb){
    this._auth.on( GoogleClientLogin.events.login, function(){
        self._getCookies(cb);
    });
    this._auth.on( GoogleClientLogin.events.error, function(err){
        if(err.message === GoogleClientLogin.errors.loginFailed){
            if(this.isCaptchaRequired()) return cb("Captcha required");
        }
        self.emit(err);
    });
    this._auth.login();
};

GMusicClient.prototype.logout = function(cb){
    this._auth.logout(cb);
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
