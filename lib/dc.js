(function() {
    var moment = require('moment-timezone');
    var abbr = {
        'EST': 'America/New_York',
        'CST': 'America/Atikokan',
        'MST': 'America/Costa_Rica',
        'PST': 'America/Santa_Isabel',
        'UTC': 'UTC'
    };

    module.exports = function(from, to) {
        if (typeof from == 'number') {
            from = "0" + from;
        }

        to   = to.toString();
        keys = Object.keys(abbr).join('|');

        // We're going to try and match a "shorthand" format (0500[timezone])
        shortHandRegex = new RegExp('(\\d{4})(?:\\s)?('+keys+')?');
        shortHand = from.match(shortHandRegex);
        if (shortHand != null) {
            now = moment();

            // Set the tz first so moment doesn't convert from the
            // default tz to the new one
            if (shortHand[2] != undefined) {
                now.tz(abbr[shortHand[2]]);
            }

            now.hour(parseInt(parseInt(shortHand[1]) / 100));
            now.minute(parseInt(parseInt(shortHand[1]) % 100));

            if (abbr.hasOwnProperty(to)) {
                now.tz(abbr[to]);
            }

            return now;
        }
    };
})();