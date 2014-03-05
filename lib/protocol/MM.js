"use strict";

var _und = require('underscore'),
    util = require('util'),
    http = require('http'),
    gmUtils = require('../utils'),
    macAddressClient = require('getmac');

function MMProtocol(opts){
    opts = opts || {};
    var self = this;

    this._defaults = {
        _mac : '',
        _hostname: '',
        _pbServices: [],
        _preDefine: []
    };

    // Bind defaults and passed in options to class
    _und.extend(this, this._defaults, opts);

    //this._mac = ''; 
    //this._hostname = '';
    //this._pbService; 
    //this._preDefine = [];


    //this.construct = function(opts){ }

    this.initProtocol = function(macAddressRaw, cb){
        macAddressClient.getMac(macAddressRaw, function(err, macAddress);
            if(err) return cb(err);
            self._mac = macAddress;

            // Recontruct preDefine array and pass in mac + hostname info
            self._preDefine = [];
            self._preDefine.push({
                name: 'upload_auth_filled',
                fields: {
                    address: self._mac,
                    hostname: self._hostname
                }
            });
            self._preDefine.push({
                name: 'metadata_request_filled',
                fields: {
                    address: self._mac,
                }
            });

            self._pbServices = [];
            self._pbServices.push({
                upload_auth: 'upauth',
                client_state: 'clientstate',
                metadata: 'metadata?version=1'
            });
            cb(null);
        });
    };

    this.makePb = function(pbName){
        var name = "PB_" + gmUtils.toCamelCase(pbName);

        


    };

    return this;
}

MMProtocol.prototype.initProtocol = function(macAddressRaw){
    var self = this;
    macAddressClient.getMac(macAddressRaw, function(err, macAddress);
        if(err) return cb(err);
        self._mac = macAddress;

};

