"use strict";

exports.name = 'WebClientTests';

var assert = require('assert'),
    WebClient = require('../lib/clients/WebClient').WebClient,
    playlistFixtures = require('./fixtures/playlists'),
    trackFixtures = require('./fixtures/tracks'),
    artistFixtures = require('./fixtures/artists'),
    //readline = require('readline'),
    _und = require('underscore');

var rl, creds = {};

var timeout = 120000;    // timeout needed for async tests

var musicClient;

var tmpPlaylists = [],
    tmpArtists = [],
    tmpTracks = [];

describe( exports.name, function() {
    
    before(function(cb) {
        cb();
    });

    beforeEach(function(cb) {
        cb();
    });

    afterEach(function(cb) {
        cb();
    });

    after(function(cb) {
        cb();
    });

});
