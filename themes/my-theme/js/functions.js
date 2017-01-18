define(['jquery','core/theme-app','core/theme-tpl-tags','core/modules/storage','theme/js/bootstrap.min','theme/js/auth/auth-pages','theme/js/auth/simple-login','theme/js/comments','theme/js/auth/chat-pages'],function($,App,TemplateTags,Storage){
   //Your functions.js content here, where :
   // - $ = jQuery
   
   
   
   
document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
  };
  window.plugins.OneSignal.init("74dacbd8-af1e-4d05-aabf-fb85cb2804c7",
                                 {googleProjectNumber: "905211826236"},
                                 notificationOpenedCallback);
  
  // Show an alert box if a notification comes in when the user is in your app.
  window.plugins.OneSignal.enableInAppAlertNotification(true);
}, false);

		
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   // - the theme-app core module is accessed through "App"
   
   $(document).ready(function(){$("a.transition").click(function(event){event.preventDefault();linkLocation=this.href;$("body").fadeOut(500, redirectPage);});function redirectPage(){window.location=linkLocation;}});$(function(){$('#search').on('keyup', function(){var pattern=$(this).val(); $('.searchable-container .search-items').hide(); $('.searchable-container .search-items').filter(function(){return $(this).text().match(new RegExp(pattern, 'i'));}).show();});}); $("document").ready(function($){var nav=$('#nextprviewsoptions'); $(window).scroll(function (){if ($(this).scrollTop() > 2){nav.addClass("f-nav");}else{nav.removeClass("f-nav"); document.getElementById('nextprviewsoptions').style.Display='none';}});}); $(document).ready(function(){var overlay=$('.sidebar-overlay'); $('.sidebar-toggle').on('click', function(){var sidebar=$('#sidebar'); sidebar.toggleClass('open'); if ((sidebar.hasClass('sidebar-fixed-left') || sidebar.hasClass('sidebar-fixed-right')) && sidebar.hasClass('open')){overlay.addClass('active');}else{overlay.removeClass('active');}}); overlay.on('click', function(){$(this).removeClass('active'); $('#sidebar').removeClass('open');});});$(document).ready(function(){var sidebar=$('#sidebar'); var sidebarHeader=$('#sidebar .sidebar-header'); var toggleButtons=$('.sidebar-toggle'); $('#sidebar-position').change(function(){var value=$( this ).val(); sidebar.removeClass('sidebar-fixed-left sidebar-fixed-right sidebar-stacked').addClass(value).addClass('open'); if (value=='sidebar-fixed-left' || value=='sidebar-fixed-right'){$('.sidebar-overlay').addClass('active');}});});

$(document).ready(function () {
    $('.material-button-toggle').click(function () {
        $(this).toggleClass('open');
        $('.option').toggleClass('scale-on');
    });
	
	
	$('#sidebar').click(function () {
        $(this).removeClass('open');
		$('.sidebar-overlay').removeClass('active');
        
    });
	
});
   

 
 
 
 
 
 
 
 
 
 var $refresh_button = $( '#refresh-button' );

	/**
	 * Launch app contents refresh when clicking the refresh button :
	 */
	$refresh_button.click( function( e ) {
		e.preventDefault();
		
		App.refresh();
	} );

	/**
	 * Animate refresh button when the app starts refreshing
	 */
	App.on( 'refresh:start', function() {
		$refresh_button.addClass( 'opa' );
	} );

	/**
	 * When the app stops refreshing :
	 * - scroll to top
	 * - stop refresh button animation
	 * - display success or error message
	 *
	 * Callback param : result : object {
	 *		ok: boolean : true if refresh is successful,
	 *		message: string : empty if success, error message if refresh fails,
	 *		data: object : empty if success, error object if refresh fails :
	 *					   use result.data to get more info about the error
	 *					   if needed.
	 * }
	 */
	App.on( 'refresh:end', function( result ) {
		
		$refresh_button.removeClass( 'opa' );
		
	} );

	/**
	 * When an error occurs, display it in the feedback box
	 */
	App.on( 'error', function( error ) {
		$( '#provah' ).addClass( 'error' ).html( error.message ).slideDown();
	} );

	/**
	 * Hide the feedback box when clicking anywhere in the body
	 */
	$( 'body' ).click( function( e ) {
		$( '#provah' ).slideUp();
	} );

	/**
	 * Back button 
	 */
	 var $meiu = $( '#meiu' );
	var $back_button = $( '#go-back' );
	
	//Show/Hide back button (in place of refresh button) according to current screen:
	App.on( 'screen:showed', function () {
		var display = App.getBackButtonDisplay();
		if ( display === 'show' ) {
			$meiu.hide();
			$back_button.show();
		} else if ( display === 'hide' ) {
			$back_button.hide();
			$meiu.show();
		}
	} );

	//Go to previous screen when clicking back button:
	$back_button.click( function ( e ) {
		e.preventDefault();
		App.navigateToPreviousScreen();
	} );
 
 
 
 
 
 
 
 $(document).ready(function () {
 
  $("#vegeta").click(function(){
	 $("#goku").css({
		 "display": "block"
		  
	    
	  });
$(".spaziooo").addClass('active');

	});
 

 
 
 $("#goku").click(function(){
	 $(this).css({
		 "display": "none"
		  
	    
	  });
$(".spaziooo").removeClass('active');

	});
	
	
	$(".spaziooo").click(function(){
	 $('#goku').css({
		 "display": "none"
		  
	    
	  });
	  $(".spaziooo").removeClass('active');


	});
	
	
	
	});
 
 
 
 
 

 
 
 
 $(document).ready(function () {
 
  $("#class-search").click(function(){
	 $(".search-container").css({
		 "display": "block"
		  
	    
	  });
	  	$(".spazioo").addClass('active');


	});

 
 
 
  $(".spazioo").click(function(){
	 $('.search-container').css({
		 "display": "none"
		  
	    
	  });
	  $(".spazioo").removeClass('active');


	});
 
 
 

 

	});
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 

/** 
  The following allows to create a custom screen on app side only 
  (meaning it does not correspond to an existing WordPress page or post).
  In this example, the page is accessed at the "url" #my-page-route and 
  uses the template 'my-page-template' to render. Last arguments allows to pass 
  custom data to the template.
*/
App.addCustomRoute( 'my-page-route', 'my-page-template' ); 
App.filter( 'template-args', function( template_args, view_type, view_template ) { 
	if( view_template == 'my-page-template' ) {
		

		
		}
	return template_args;
} );


 
 
 
 
 
 
 
 App.addCustomRoute( 'reg', 'reg-template' );
 App.addCustomRoute( 'faq', 'faq-template' );
 
 
 
 
 
 
 
 
 
 
 
 
 
 App.filter( 'template', function( template, current_screen) {
      if( TemplateTags.isCategory('my-category', current_screen) ){
            template = 'archive-my-category'; //Don't need .html here.
      }
      return template;
} );
 
 
  
 
 
 
 
 
 
 
 
 
 
 
 // @desc Hyperlinks click handler
    // Relies on the InAppBrowser Cordova Core Plugin / https://build.phonegap.com/plugins/233
    // Target _blank calls an in app browser (iOS behavior)
    // Target _system calls the default browser (Android behavior)
    // @param {object} e
    function openInBrowser(e) {

        e.preventDefault();
        
        try {
            cordova.InAppBrowser.open(e.target.href, '_system', 'location=yes');        
        } catch(err) {
            window.open(e.target.href, '_blank', 'location=yes');
        }

    }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /**
 * Memorize current search so that it is always available,
 * even after changing screen
 */
var current_search = {
    search_string: ''
};








$( '#app-layout' ).on( 'click', '#search-button', function( e ) {
    e.preventDefault();
	//Set search params from HTML form:
    current_search.search_string = $('#search-field').val().trim();
 //Get updated data from server for the current component:
    App.refreshComponent({
        success: function( answer, update_results ) {
            //Server answered with a filtered list of posts. 
            //Reload current screen to see the result:
		App.reloadCurrentScreen();
			
			
			
			
        },
		
		
		
		
		
        error: function( error ) {
            //Maybe do something if filtering went wrong.
            //Note that "No network" error events are triggered automatically by core
        }
		
		
		
    });
 
} );
 
 
 /**
 * Add our search params to web services that retrieve our post list.
 * Applies to "Live Query" web service (that retrieves filtered component's post list)
 * and to "Get More Posts" web service (so that search filters apply to pagination too).
 */
App.filter( 'web-service-params', function( web_service_params ) {
 
    //If the user provided non empty search params:
    if( current_search.search_string !== '' ) {
		$('.search-container').css({
		 "display": "block"
		  
	    
	  });
		
        //Add search params to the data sent to web service:
        web_service_params.my_search_filters = current_search;
        //Those params will be retrieved with WpakWebServiceContext::getClientAppParam( 'my_search_filters' )
        //on server side.
		
		
		
		
    }
 
    return web_service_params;
} );

/**
 * Add 
 * - current search params to the archive template, so that they're available in archive.html.
 */
App.filter( 'template-args', function( template_args, view_type, view_template ) {
 
    if ( view_type === 'archive' ) {
        template_args.current_search = current_search;
    }
 
    return template_args;
} );
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


 
   
});