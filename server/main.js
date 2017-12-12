import { Meteor } from 'meteor/meteor'
import '../imports/api/hunts.js'
import '../imports/api/huntings.js'
import '../imports/api/scores.js'

Meteor.startup(() => {
  // code to run on server at startup
  Inject.rawModHtml("addLanguage", function(html) {
  	return html.replace(/<html>/, '<!-- HTML 5 -->\n<html lang="en">');
})
