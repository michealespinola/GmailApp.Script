function GmailArchive() {

  var searches = [                                                                       // SEARCH MATCHES
    'older_than:7d AND is:read AND in:inbox AND has:userlabels',                         // All labeled messages
    'older_than:3d AND is:read AND in:inbox AND has:userlabels AND category:updates',    // Updates category
    'older_than:3d AND is:read AND in:inbox AND has:userlabels AND category:social',     // Social category
    'older_than:3d AND is:read AND in:inbox AND has:userlabels AND category:promotions', // Promotions category
    'older_than:1d AND is:read AND in:inbox AND has:userlabels AND category:forums',     // Forums category
    'older_than:1d AND is:read AND in:inbox AND label:Google/Voice',                     // Google Voice messages
//  'older_than:1d AND                          label:me',                               // From me to me (VERY SLOW FOR SOME REASON)
    '                              in:inbox AND in:chats',                               // Google chat sessions
  ];                                                                                     //

  var threads = [];                                                                      // WORK WITH GROUPS OF 250 ITEMS
  for (var i = 0; i < searches.length; i++) {                                            //
    var tmp_threads = GmailApp.search(searches[i], 0, 249);                              //
    var threads = threads.concat(tmp_threads);                                           //
  }                                                                                      //

  for (var i = 0; i < threads.length; i++) {                                             // MOVE TO ARCHIVE
    threads[i].moveToArchive();                                                          //
  }                                                                                      //

}
