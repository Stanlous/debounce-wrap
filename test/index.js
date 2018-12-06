const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfig({
  "spec_dir": "test",
  "spec_files": [
    "**/*[sS]pec.js"
  ],
  "helpers": [
    "helpers/**/*.js"
  ],
  "stopSpecOnExpectationFailure": false,
});

// jasmine.configureDefaultReporter({
//   // The `timer` passed to the reporter will determine the mechanism for seeing how long the suite takes to run.
//   timer: new jasmine.jasmine.Timer(),
//   // The `print` function passed the reporter will be called to print its results.
//   print: function() {
//       // process.stdout.write(arguments);
//       console.log.apply(console, arguments)
//   },
//   // `showColors` determines whether or not the reporter should use ANSI color codes.
//   showColors: true
// });


// jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));
// jasmine.onComplete(function(passed) {
//   if(passed) {
//       console.log('All specs have passed');
//   }
//   else {
//       console.log('At least one spec has failed');
//   }
// });
jasmine.execute()