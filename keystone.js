/* // Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'KeyStoneS CMS',
	'brand': 'KeyStoneS CMS',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	posts: ['posts', 'post-categories'],
	users: 'users',
});

// Start Keystone to connect to your database and initialise the web server



keystone.start(); */

// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Next app
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

// Require keystone
const keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
keystone.init({
    'name': 'Keystone Next Example',
    'brand': 'Keystone Next Example',
    'auto update': true,
    'session': true,
    'auth': true,
    'user model': 'User',
});

// Load your project's Models
keystone.import('models');

// Start Next app
app.prepare()
    .then(() => {

        // Load your project's Routes
        keystone.set('routes', require('./routes')(app));

        // Configure the navigation bar in Keystone's Admin UI
        keystone.set('nav', {
            posts: ['posts', 'post-categories'],
            users: 'users',
            announcements: 'announcements',
            products: 'products',
        });

        keystone.start();
    });