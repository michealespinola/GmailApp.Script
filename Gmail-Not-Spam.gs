function GmailNotSpam() {

  var searches = [                                          // SEARCH MATCHES
    'in:spam AND is:unread AND label:Patching',             // False Positives for PatchManagement lists
    'in:spam AND is:unread AND label:UGs',                  // False Positives for User Group lists
  ];                                                        //

  var threads = [];                                         // WORK WITH GROUPS OF 250 ITEMS
  for (var i = 0; i < searches.length; i++) {               //
    var tmp_threads = GmailApp.search(searches[i], 0, 249); //
    var threads = threads.concat(tmp_threads);              //
  }                                                         //

  for (var i = 0; i < threads.length; i++) {                // MOVE TO INBOX
    threads[i].moveToInbox();                               //
  }                                                         //

}
