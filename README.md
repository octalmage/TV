TV
==

tv.js is a node.js app. Install node and npm, then in the same directroy as tv.js run:

```
npm install socket.io
```

Then start tv.js

Once that is up and running replace [serverip] in the html files with the server's IP. Then edit the [videolink] with the link to your movie. Personally I use Amazon S3!

Use broadcast.html to stream and tv.html to watch. 

Soon I'll work on bundling this into one script so tv.js will include everything, but currently you need a seperate webserver for the html. 

