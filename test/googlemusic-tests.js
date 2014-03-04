"use strict";

var assert = require('assert'),
    GMusicClient = require('../lib/googlemusic'),
    playlistFixtures = require('./fixtures/playlists'),
    trackFixtures = require('./fixtures/tracks'),
    artistFixtures = require('./fixtures/artists'),
    readline = require('readline'),
    _und = require('underscore');

var rl, creds = {};

var timeout = 120000;    // timeout needed for async tests

var musicClient;

var tmpPlaylists = [],
    tmpArtists = [],
    tmpTracks = [];

describe('GMusicClient', function() {

    function _getCred(rl, question, req, cb){
        rl.question( question, function(answer){
            if(!answer && req) _getCred(rl, question, req, cb);      // recurse
            else cb(null, answer);
        });
    }

    function _readlineCreds(cb){
        if(!rl) rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        
        _getCred(rl, "Google Client ID: ", true, function(inClientId){
            creds.clientId = inClientId;
            _getCred(rl, "Google Client Secret: ", true, function(inClientSecret){
                creds.clientSecret = inClientSecret;
                _getCred(rl, "Redirect URI: ", true, function(inRedirectUri){
                    creds.redirectUri = inRedirectUri;
                    _getCred(rl, "Scope: ", false, function(inScope){
                        creds.scope = inScope;
                        cb(null, creds);
                    });
                });
            });
        });
    }

    function _readlineAuthCode(cb){
        var authUrl = musicClient.getAuthUrl();
        console.log("Copy and paste the following URL into your browser: \n"+ authUrl);
        if(!rl) rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        rl.question("\nPaste the returned code query string: ", function(inCode){
            console.log("Attempting to authorize with code: " + inCode.trim());
            musicClient.authorize(inCode.trim(), function(err, res){
                if(err){
                    console.log("Error authorizing:", err);
                    assert.ifError(err);
                    return cb(err);
                }
                //console.log("Authorize returned creds: ", res);
                cb();
            });
        });

    }

    before(function(cb) {
        this.timeout(timeout);

        var creds;
        try {
            var config = require('../config');
            creds = {
                clientId: config.googleApis.clientId,
                clientSecret: config.googleApis.clientSecret,
                redirectUri: config.googleApis.redirectUris[0],
                scope: config.googleApis.scope
            }
            musicClient = require('../lib/googlemusic')( creds );
            _readlineAuthCode(cb);
        } catch(err){
            console.log("Could not find local config.  Using readline.");
            _readlineCreds(function(err, inCreds){
                creds = inCreds; 
                try {
                    musicClient = require('../lib/googlemusic')( creds );
                    _readlineAuthCode(cb);
                } catch(err){
                    console.log("Error initializing GMusicClient: ", err);
                    return cb(err);
                }
            });
        }
    });

    beforeEach(function(cb) {
        cb();
    });

    afterEach(function(cb) {
        cb();
    });

    after(function(cb) {
        //tmpTimelineItems = [];
        //tmpContacts = [];
        //tmpLocations = [];
        cb();
    });

});
