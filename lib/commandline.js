(function() {
    var yargs = require('yargs');
    var dc = require('./dc.js');

    var argv = yargs
        .usage('Usage: $0 -f "0400 [EST]" -t "UTC"')
        .options({
            format: {
                description: "Formatting options for output date",
                default: 'YYYY-MM-DD HH:mm',
                required: false
            },
            from: {
                alias: 'f',
                description: "Input date/time",
                requiresArg: true,
                required: true
            },
            to: {
                alias: 't',
                description: "Timezone to output to",
                requiresArg: true,
                required: true
            }
        })
        .argv;

    module.exports = {
        run: function run() {
            convertedTime = dc(argv.from, argv.to);
            console.log(convertedTime.format(argv.format));
        }
    };
})();