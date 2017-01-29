define( [ 'jquery', 'core/theme-app', 'core/modules/authentication' ], function( $, App, Auth ) {

	/**
	 * User authentication theme module example that handles :
	 * - a user page, where user data can be displayed, using the user-page.html template
	 * - a login page, where the login form is implemented, using the login-page.html template
	 * - authentication feedback messages customization
	 * - user authentication validation on app launch
	 * 
	 * Login and authentication validation are handled with the WP-AppKit Authentication API.
	 */

	/**************************************************************************
	 * User page
	 */

	/**
	 * Create the "User page" custom route : 
	 * tells the app that #user-page will lead to the user page, using the "user-page.html" template
	 */
	 App.addCustomRoute( 'chat', 'chat-template' ); 
	/**
	 * If we try to go to the user page without being connected, we
	 * redirect to the homepage.
	 */
	App.filter( 'redirect', function( redirect, queried_screen ) {
		if ( queried_screen.item_id == 'chat' ) {
			var user = Auth.getCurrentUser();
			if ( !user ) {
				alert('devi loggarti per accedere alla chat');
				App.navigate( '#' );
				redirect = true;
			}
		}
		return redirect;
	} );
	
	/**
	 * Set the data that we want to be available in the user-page.html template :
	 * user login, role and capabilities.
	 */
	App.filter( 'template-args', function( template_args, view_type, view_template ) { 
	if( view_template == 'chat-template' ){
			var current_user = Auth.getCurrentUser();
			if ( current_user ) {
				template_args.user = { 
					login: current_user.login,
					gravatar_image_link: current_user.info.gravatar_image_link,
					role: current_user.permissions.roles.pop(),
					capabilities: current_user.permissions.capabilities
				};
			}
		}
	return template_args;
} );
	
	
	
} );




