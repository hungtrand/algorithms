var bigInt = require('big-integer');

var mergeTracks = function(tracks) {
    // sort the vectors, assuming start < end
    tracks.sort(function(left, right) {
        if (left.start > right.start) return 1;
        if (left.start < right.start) return -1;

        // ==> left.start === right.start

        if (left.end > right.end) return 1;
        if (left.end < right.end) return -1;

        // ==> left.start === right.start && left.end === right.end
        return 0;
    });

    var newTracks = [];
    newTracks.push(tracks.shift());
    while (tracks.length > 0) {
        var nxt = tracks.shift();
        var last = newTracks[newTracks.length - 1];

        if (nxt.start > last.end + 1) {
            newTracks.push(nxt);
            continue;
        }

        // merge
        if (nxt.end >= last.end) {
            last.end = nxt.end;
        }
    }

    return newTracks;
}

function parseLines(lines) {
    var tracksByRow = {};

    for (var i = 0, l = lines.length; i < l; i++) {
        var line = lines[i];
        var rse = line.split(' ');
        var r = rse[0];
        var s = parseInt(rse[1]);
        var e = parseInt(rse[2]);

        if (!tracksByRow.hasOwnProperty(r)) {
            tracksByRow[r] = [];
        }

        var track = { start : Math.min(s, e), end: Math.max(s, e) };
        tracksByRow[r].push(track);
    };

    return tracksByRow;
}

var solve = function(input) {
    var lines = input.split('\n');

    var nmk = lines.shift().split(' ');
    var n = bigInt(nmk[0]), m = bigInt(nmk[1]), k = parseInt(nmk[2]);

    var tracksByRow = parseLines(lines);

    var rows = Object.keys(tracksByRow);

    var cntLampPost = (n.times(m));
    for (var i = 0, l = rows.length; i < l; i++) {
        var mergedTracks = mergeTracks(tracksByRow[rows[i]]);

        for (var j = 0; j < mergedTracks.length; j++) {
            var track = mergedTracks[j];
            var occupied = track.end - track.start + 1;
            cntLampPost = cntLampPost.subtract(bigInt(occupied));
        }

    }

    return cntLampPost.toString();
}

module.exports = solve;