"use strict";

var util = require('util'),
    events = require('events'),
    http = require('http'),
    _und = require('underscore'),
    async = require('async'),
    request = require('request'),
    querystring = require('querystring'),

    protocol = require('../protocol/mobile'),

    MobileSession = require('../session/MobileSession').MobileSession,
    gmErrors = require('../errors'), 
    Client = require('Client').Client;

    //GMProtocol = require('protocols/GM'),
    //MMProtocol = require('protocols/MM');

function MobileClient(opts) {
    if (!(this instanceof MobileClient)) return new MobileClient(opts);

    this._session = new MobileSession(opts); 

    this.init(opts);
    return this;
}

// opts.incremental
// opts.includeDeleted
MobileClient.prototype.getAllSongs = function(opts, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.changeSongMetadata = function(songs, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.deleteSongs = function(songIds, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.getStreamUrl = function(songId, deviceId, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.getAllPlaylists = function(opts, cb){
    //incremental, includeDeleted,
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.createPlaylist = function(name, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.changePlaylistName = function(playlistId, newName, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.deletePlaylist = function(playlistId, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.getAllUserPlaylistContents = function(cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.getSharedPlaylistContents = function(shareToken, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.addSongsToPlaylist = function(playlistId, songIds, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.removeSongsFromPlaylist = function(playlistId, songIds, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.reorderPlaylistEntry = function(entry, toFollowEntry, toPrecedeEntry, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.createStation = function(name, opts, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.getAllStations = function(opts, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.getStationTracks = function(stationId, opts, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.searchAllAccess = function(query, opts, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.getArtistInfo = function(artistId, opts, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.getAlbumInfo = function(albumId, opts, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.getTrackInfo = function(trackId, opts, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

MobileClient.prototype.getGenres = function(opts, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};

// PRIVATE METHODS

MobileClient.prototype._removeEntriesFromPlaylist = function(playlistId, entryIds, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};


MobileClient.prototype._getAllItems = function(opts, cb){
    var self = this;
    return cb(gmErrors.featureNotImplemented);
};


util.inherits(MobileClient, Client);

exports.MobileClient = MobileClient;
