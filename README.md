# node-googlemusic

Unofficial Google Music API Client for Node.js

## Installation
Install via npm:

    npm install googlemusic

Or clone the repo and link: 

    git clone https://github.com/alexanderscott/node-googlemusic
    cd node-googlemusic
    npm link

## Usage
    
    // Client credentials from the Google API Projects site
    // https://code.google.com/apis/console/?pli=1
    var musicClient = require('googlemusic')({ 
        clientId: '',
        clientSecret: '',
        redirectUri: '',
        scope: ''
    });

    // Auth code stored in back-end or retrieved from auth redirect
    var code = '';      

    // Authorize the client and list timeline items to console
    musicClient.authorize(code, function(err){
        musicClient.listTracks(50, function(err, tracks){
            for(var i = 0; i < tracks.length; i++) { 
                console.log("Track: " + tracks[i].name + ", Artist: " + tracks[i].artist);
            }
        });
    });


        
## API Methods


#### getAuthUrl()
 * Returns a URL for the user to log in via browser.
 * If log-in successful, will return a code in query param of redirectURL for client authorization

#### authorize( [optional code], callback(error, response) ) 
 * Authorizes the Mirror Client, creating auth_token from the code stored or retrieved above


### Tracks
### Playlists
### Artists



## Running Tests

To run the test suite, first invoke the following command within the repo, installing the development dependencies:

    $ npm install

Then run the tests with:

    $ npm test

The easiest way to pass app credentials into the tests is to create a config.js file in the project root and gitignore it.  It must contain clientId, clientSecret, and redirectUris[].

If this file is missing, readline is used for credentials.  You will be given a URL to copy/paste into your browser, then must copy/paste back into node the code query parameter after authenticating.


## TODO
a lot...

## License

MIT License

Copyright (c) 2014 Alex Ehrnschwender (http://alexehrnschwender.com/)
 
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
