function GmailSpam() {

  var searches = [                                          // SEARCH MATCHES
    'in:spam AND is:read',                                  // All spam marked as read
  ];                                                        //

  var threads = [];                                         // WORK WITH GROUPS OF 250 ITEMS
  for (var i = 0; i < searches.length; i++) {               //
    var tmp_threads = GmailApp.search(searches[i], 0, 249); //
    var threads = threads.concat(tmp_threads);              //
  }                                                         //

  for (var i = 0; i < threads.length; i++) {                // REMOVAL ALL LABELS
    var labels = threads[i].getLabels();                    //
    for (var j = 0; j < labels.length; j++) {               //
      threads[i].removeLabel(labels[j]);                    //
    }                                                       //
  }                                                         //

}
