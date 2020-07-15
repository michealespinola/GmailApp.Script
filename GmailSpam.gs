function GmailSpam() {

  var searches = [                                                                                                                              // SEARCH MATCHES
    'in:spam AND is:unread AND (from:michealespinola@gmail.com OR from:micheal.espinola@gmail.com)',                                            // Super Obvious Spam 0.0
    'in:spam AND is:unread AND (from:michealespinola OR from:micheal.espinola) AND -from:@gmail.com',                                           // Super Obvious Spam 0.1
    'in:spam AND is:unread AND (subject:michealespinola OR subject:"micheal espinola")',                                                        // Super Obvious Spam 0.2
    'in:spam AND is:unread AND bcc:me',                                                                                                         // Super Obvious Spam 0.3
    'in:spam AND is:unread AND -to:@gmail.com AND -has:userlabels',                                                                             // Super Obvious Spam 1
    'in:spam AND is:unread AND from:("hi" OR "hello" OR "hey")',                                                                                // Super Obvious Spam 2
    'in:spam AND is:unread AND from:("please" OR "confirm")',                                                                                   // Super Obvious Spam 3
    'in:spam AND is:unread AND "delivery has failed because"',                                                                                  // Super Obvious Spam 4
    'in:spam AND is:unread AND ("your unsubscribe" OR "your confirmation" OR "remove yourself")',                                               // Super Obvious Spam 5
    'in:spam AND is:unread AND "action required"',                                                                                              // Super Obvious Spam 6
    'in:spam AND is:unread AND "final notice"',                                                                                                 // Super Obvious Spam 7
    'in:spam AND is:unread AND "free quote"',                                                                                                   // Super Obvious Spam 8
    'in:spam AND is:unread AND "stop future offers"',                                                                                           // Super Obvious Spam 9
    'in:spam AND is:unread AND "gay"',                                                                                                          // Super Obvious Spam 10
    'in:spam AND is:unread AND "this is an advertisement"',                                                                                     // Super Obvious Spam 11
    'in:spam AND is:unread AND "amazonaws.com"',                                                                                                // Super Obvious Spam 12
    'in:spam AND is:unread AND "need boyfriend" OR "sexy photo" OR "dating"',                                                                   // Super Obvious Spam 13
    'in:spam AND is:unread AND "co.za"',                                                                                                        // Super Obvious Spam 14
    'in:spam AND is:unread AND "To be Removed from"',                                                                                           // Super Obvious Spam 15
    'in:spam AND is:unread AND "new notification"',                                                                                             // Super Obvious Spam 16
    'in:spam AND is:unread AND "This offer is brought to you"',                                                                                 // Super Obvious Spam 17
    'in:spam AND is:unread AND "If you do not wish to continue"',                                                                               // Super Obvious Spam 18
    'in:spam AND is:unread AND "update or remove" AND "your contact information"',                                                              // Super Obvious Spam 19
    'in:spam AND is:unread AND "Can\'t Load Image? CLICK HERE To See it!"',                                                                     // Super Obvious Spam 20
  ];

//  var threads = [];                                                                                                                             // WORK WITH GROUPS OF 250 ITEMS
//  for (var i = 0; i < searches.length; i++) {                                                                                                   //
//    var tmp_threads = GmailApp.search(searches[i], 0, 249);                                                                                     //
//    var threads = threads.concat(tmp_threads);                                                                                                  //
//  }                                                                                                                                             //
//
//  for (var i = 0; i < threads.length; i++) {                                                                                                    // MARK AS READ 
//    threads[i].markRead();                                                                                                                      //
//    var label = GmailApp.getUserLabelByName("me");                                                                                              //
//    threads[i].removeLabel(label);                                                                                                              // REMOVE LABEL "ME"
//  }                                                                                                                                             //

}
