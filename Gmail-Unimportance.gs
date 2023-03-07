function GmailUnimportance() {

  var searches = [                                          // SEARCH MATCHES
    'is:important AND category:promotions',                 // Promotions category
    'is:important AND category:updates',                    // Updates category
    'is:important AND in:spam',                             // In Spam
    'is:important AND in:trash',                            // In Trash
  ];                                                        //

  var threads = [];                                         // WORK WITH GROUPS OF 250 ITEMS
  for (var i = 0; i < searches.length; i++) {               //
    var tmp_threads = GmailApp.search(searches[i], 0, 249); //
    var threads = threads.concat(tmp_threads);              //
  }                                                         //

  for (var i = 0; i < threads.length; i++) {                // MARK UNIMPORTANT
    threads[i].markUnimportant();                           //
  }                                                         //

}
