const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');


// mix.js('public/js/leader-line/leader-line.min.js', 'public/js/app.js');


// mix.webpackConfig({
//     resolve: {
//         modules: [
// 	        {
//             // path.resolve(__dirname, 'vendor/laravel/spark/resources/assets/js'),
// 	    		rules: [
// 		    		{
// 		    			test: path.resolve(__dirname, 'node_modules/leader-line/'),
// 		    			// loaders: [{
// 	    				loader: 'skeleton-loader',
// 	    				options: {
// 	    					procedure: content => `${content}export default LeaderLine`
// 	    				}
// 		    			// }]
// 		    		}
// 	    		]
// 	    	}
// 		]
// 	}
// });