/**
 * Created by HocSoiCa on 5/10/2016.
 */
var async = require('async');
module.exports = function (app) {
  //data sources
  var mysqlDs = app.dataSources.mysqlDs;
  //create all models
  async.parallel({
    profile: async.apply(createProfile),
    person: async.apply(createPerson),
  }, function (err, results) {
    if (err) throw err;
    console.log(results);
  });
  //create Profile
  function createProfile(cb) {
    mysqlDs.automigrate('profile', function (err) {
      if (err) return cb(err);
      var Profile = app.models.profile;
      Profile.create([
        {email: 'hoc.nguyen@meganet.com.vn', password: '123456'},
        {email: 'anh.vy@meganet.com.vn', password: '123456'},
        {email: 'phuc.le@meganet.com.vn', password: '123456'}
      ], cb);
    });
  }
  //create Person
  function createPerson(cb) {
    mysqlDs.automigrate('person', function (err) {
      if (err) return cb(err);
      var Person = app.models.person;
      Person.create([
        {firstname: 'Hoc', lastname: 'Nguyen'},
        {firstname: 'Anh', lastname: 'Vy'},
        {firstname: 'Phuc', lastname: 'Le'}
      ], cb);
    });
  }
};
//app.dataSources.mysqlDs.automigrate('person', function (err) {
//  if (err) throw err;
//
//  app.models.person.create([
//    {firstname: 'Hoc', lastname: 'Nguyen'},
//    {firstname: 'Anh', lastname: 'Vy'},
//    {firstname: 'Phuc', lastname: 'Le'},
//  ], function (err, person) {
//    if (err) throw err;
//    console.log('Models created: \n', person);
//  });
//});

