/*!
 * Main.js - Hearth of Application
 * Copyright 2013-2017 CPACodex.com, Inc.
 * Licensed under the MIT license
 */

 
$( document ).ready( function() {  


    setInterval( newActivity, 2000 );
	

    function newActivity() {

        var flags   = [ 'ad', 'ae', 'af', 'us', 'al', 'am', 'ar', 'au', 'gf', 'gb', 'ph', 'ba', 'us', 're', 'ro', 'pe', 'lv', 'mk', 'us', 'pt', 'europeanunion',
                        'it', 'jp', 'ne', 'nl', 'no', 'ua', 'um'];
        var users   = [ '441Binder','Johnny', 'Attacklord_bro', 'pewdiepie', "Marko", "PesaJajar", "Ivan", "xxMine", "9814Bind", "P!xel", "haxhack", "EarthHacker", "9/4gen", "ClashHacker", 'new_kid',
                  'BloodMaster', 'lovegaming', 'Johnny', 'NaneK', 'Marko_991', 'JackHammer9999', 'fuzzzy', 'tester', 'yearboy1007', 'Ministar', 'Haxajmo', 'Pottato', 'GirlHackingxD', 'Alex',
                  'Coder', 'Hillck23', 'Creeper', 'zaCk', 'only123', 'gunshaxer', 'MyNameIsShoost' ];

        var flag         = flags[ Math.floor( Math.random() * flags.length ) ];
        var avatar       = "avatar.png";
        var user         = users[ Math.floor( Math.random() * users.length ) ];
        var GemsRand     = Math.floor( ( Math.random() * 20 ) + 2 );
		var CoinsRand     = Math.floor( ( Math.random() * 9 ) + 1 );

        $( '.live-stats' ).last().remove();

        $( '.activityContent' ).hide().prepend('<div class="live-stats">' +
            '<div class="avatar"><img src="'+avatar+'" alt="" /></div>' +
            '<div class="flag"><img class="imgborder" src="'+flag+'.png" alt="" /></div>' +
           '<div class="info">' +
              '<ul>' +
                 '<li><b class="username-color">'+user+',</b> generated now:</li>' +
                 '<li><img class="item-gen" src="gems.png" alt="gems" /> vBucks: <span class="resources-color">' + GemsRand + '00</span> </li>' +
				 '<li><img class="item-gen" src="coins.png" alt="coins" /> Battle Pass Tier: <span class="resources-color">' + CoinsRand + '</span> </li>' +
              '</ul>' +
           '</div>' +
        '</div>').fadeIn();
    }

    /* GEMS */
    var $gen_gems = $( '.gems-input' );
        $gen_gems.updown ({

        	step: 200,
            min: 200,
            max: 2000,

        });

    var $updown_gems = $gen_gems.data( 'updown');
        $( '.plus-gems' ).click( function( event ) {

            $updown_gems.increase( event );
            $updown_gems.triggerEvents();

        });
        $( '.minus-gems' ).click( function( event ) {

            $updown_gems.decrease( event );
            $updown_gems.triggerEvents();

        }); 
		
		/* COINS */
    var $gen_coins = $( '.coins-input' );
        $gen_coins.updown ({

        	step: 1,
            min: 1,
            max: 10,

        });

    var $updown_coins = $gen_coins.data( 'updown');
        $( '.plus-coins' ).click( function( event ) {

            $updown_coins.increase( event );
            $updown_coins.triggerEvents();

        });
        $( '.minus-coins' ).click( function( event ) {

            $updown_coins.decrease( event );
            $updown_coins.triggerEvents();

        }); 


    function progressBar() {

        var width = 1;
        var intervalProgress = setInterval( frame, 200 );

        goToByScroll( 'generatorJS' );

        function frame() {

            if( width == 20 ) $( '.load-textJS' ).html( 'Connecting' );
            if( width == 30 ) $( '.load-textJS' ).html( 'Fetching data' );
            if( width == 40 ) $( '.load-textJS' ).html( 'GET = Variables' );
            if( width == 50 ) $( '.load-textJS' ).html( 'GET -> Username' );
            if( width == 60 ) $( '.load-textJS' ).html( 'GET -> IP Address' );
            if( width == 70 ) $( '.load-textJS' ).html( 'GET -> vBucks' );
			if( width == 80 ) $( '.load-textJS' ).html( 'GET -> Battle Pass Tiers' );
            if( width == 90 ) $( '.load-textJS' ).html( 'POST => DATA' );

            if ( width >= 100 ) {

                clearInterval( intervalProgress );
                $( '.generator-step2' ).slideUp();
                $( '.generator-step3' ).slideDown();

                $( '.userJS' ).html( $( '.username-input' ).val() );

                            $('.gemsJS').countTo({

                                from: 10,
                                to: $( '.gems-input' ).val(),
                                speed: 700,
                                refreshInterval: 1,
                                onComplete: function ( value) {

                                    $( '.gemsJSthick' ).css('opacity', '1');

                                        setTimeout( function() { 

                                            $( '.generator-step3' ).fadeOut( function() {

                                                $( '.generator-offers' ).fadeIn();

                                            });
                                            
                                        }, 2000);    
                                }
							});    
							$('.coinsJS').countTo({

                                from: 1,
                                to: $( '.coins-input' ).val(),
                                speed: 1000,
                                refreshInterval: 1,
                                onComplete: function ( value) {

                                    $( '.coinsJSthick' ).css('opacity', '1');

                                        setTimeout( function() { 

                                            $( '.generator-step3' ).fadeOut( function() {

                                                $( '.generator-offers' ).fadeIn();

                                            });
                                            
                                        }, 2000);    
                                }
							});  

            } else {

                width++; 
                $( ".progress-bar" ).css( "width", width + '%' );
                $( ".progress-bar" ).html( width * 1 + '%' );

            }

        }

    }   

    /* Generator Starts Here */

    $( ".btnGenerator" ).click( function() {

    	var $player_name = $( '.username-input' ).val();

    	if( $player_name == "" || $player_name.replace(/ /g,'').length < 4 ) {

    		$( ".username-input" ).css( { border: '1px solid #F00' } );
			goToByScroll( 'generator' );
			$( ".error" ).remove();
			$('#UsernameGenerator').append('<span class="error"><br>This user is not exist</span>');
			$( ".error" ).css( { 'color' : '#F00', 'font-weight' : 'bold'});

    	} else {

    		$( ".username-input" ).css( { border: '1px solid #111319' } );	// Change border to default

    		$( '.generator' ).slideUp( function() {

    			$( '.generator-step2' ).slideDown();
                progressBar();

    		});

    	}

    });
    // .btngenerator end

    /* Button to scroll to Generator */

    $( '.btn-GoGenerator' ).click( function() {

        goToByScroll( 'generator' );

    });
	
	
});
