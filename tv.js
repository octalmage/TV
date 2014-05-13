var io = require('socket.io').listen(80);
var currentTime;
var state=0;

io.sockets.on('connection', function (socket) {
        socket.emit('update', {action: 'sync', timecode:currentTime, state: state});
        socket.on('update', function (data) {
        console.log(data.action);
        console.log(data.time);
        currentTime=data.time;
        if (data.action=="timecode")
        {
                io.sockets.emit('update', {action: 'timecode', time: data.time, state:state });
        }
        else if (data.action=="play")
        {
                state=1;
                io.sockets.emit('update', {action: 'play'});
        }
        else if (data.action=="pause")
        {
                state=0;
                io.sockets.emit('update', {action: 'pause'});
        }
  });
});