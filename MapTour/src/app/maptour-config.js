APPCFG = {
	//
	// UI
	//

	// Header Logo
	HEADER_LOGO_URL: "resources/icons/esri-logo.png",
	HEADER_LOGO_TARGET: "http://www.esri.com",
	// Header top right link
	HEADER_LINK_TEXT: "A story map",
	HEADER_LINK_URL: "http://storymaps.esri.com/home/",
	// Header, Picture Panel and Carousel colors
	COLORS: ["#444", "#797979", "#c2c2c2"],
	// Map popup colors
	POPUP_BACKGROUND_COLOR: "#444444",
	POPUP_BORDER_COLOR: "#444444",
	POPUP_ARROW_COLOR: "#444444",

	MINIMUM_MAP_WIDTH: 450,
	TIMEOUT_VIEWER_LOAD: 12000,
	TIMEOUT_VIEWER_REQUEST: 8000,
	TIMEOUT_BUILDER_REQUEST: 20000,

	//
	// DATA
	//

	// Case insensitive prioritized list of fields name to be used
	FIELDS_CANDIDATE: {
		objectid: ['__objectid', 'objectid', 'id', 'fid'],
		name: ['name', 'title', 'name-short', 'name-long'],
		description: ['description', 'caption', 'snippet', 'comment'],
		color: ['icon_color', 'color', 'style'],
		pic_url: ['pic_url', 'url', 'pic', 'picture'],
		thumb_url: ['thumb_url', 'thumb', 'thumbnail']
	},

	// Pin has to be numbered from 1 to that value
	MAX_ALLOWED_POINTS: 99,
	// Ordered list of pin configuration (has to be lower case)
	PIN_CFG: {
		r: {
			iconPath: 'resources/markers/red/NumberIcon',
			// A css class that define the color to be used for the Desktop carousel and builder organize popup
			cssClass: 'number-red'
		},
		b: {
			iconPath: 'resources/markers/blue/NumberIconb',
			cssClass: 'number-blue'
		},
		g: {
			iconPath: 'resources/markers/green/NumberIcong',
			cssClass: 'number-green'
		},
		p: {
			iconPath: 'resources/markers/purple/IconPurple',
			cssClass: 'number-purple'
		}
	},
	// Default color
	PIN_DEFAULT_CFG: 'r',
	// Pin states
	ICON_CFG: {
		normal: {
			width: 22,
			height: 28,
			offsetX: 3,
			offsetY: 8,
			// Normal state has to define the clip information for mobile components
			clipRules: "clip: rect(0px, 22px, 22px, 0px); left: 13px; top: 13px; height:40px;"
		},
		hover: {
			width: 24,
			height: 30,
			offsetX: 3,
			offsetY: 8
		},
		selected: {
			width: 32,
			height: 40,
			offsetX: 3,
			offsetY: 11
		}
	},
	//
	// Time Enabled Options
	// 

	// Start and End times to use
	TIME_SPAN: {
		start: "1/2/1989 UTC", // needs to be thought out... if you use 1/1/1989, timeStops[0] is 1988, which makes it more difficult to define TIME_VALUES below...
		end: "1/1/2014 UTC"
	},

	// Type of selection, 1 = cumulative, 2 = range
	TIME_TYPE: 2,

	// Define interval length and unit (i.e. interval every 1 year)
	TIME_INTERVAL: {
		length: 1,
		units: "esriTimeUnitsYears"
	},

	// Hash of Tour Points and their time value
	// 
	// NOTE: These values are increments from the start of your TIME_SPAN - NOT actual dates
	// i.e. if start is 1989 and you want to represent 1999, the value 
	// should be 10 (assuming your TIME_INTERVAL.length is 1 and units are years)
	// 
	// Can be single points in time or an array representing a time range (i.e 05 vs [05, 12])
	// HealthyVegetation imageservice (ee04455d49ee4d718f4587785e32afe6)
	TIME_VALUES: {
		0: null, // Intro slide
		1: [0, 3], //89-92
		2: [9, 12], //98-01
		3: [12, 15], //01-04
		4: [15, 18], //04-07
		5: [18, 21], //07-10
		6: [21, 24]  //10-13
	},

/*	TIME_VALUES: {
		0: null, // Intro slide
		1: 04,
		2: 30,
		3: 53,
		4: 67,
		5: 96,
		6: 112
	},
*/

	//
	// Builder
	//

	// Online photo sharing services connection parameters
	FLICKR_API_KEY: "750b36a2ac65a72e03cf9cef06d79f45",
	FACEBOOK_APP_ID: "471023926309627",

	DEFAULT_SHARING_URL: "//www.arcgis.com/sharing/content/items",
	COLOR_SCHEMES: [
		// COLORS is added as the first item at runtime
		{
			name: "Black",
			headerColor: "#000",
			middleColor: "#797979",
			footerColor: "#c2c2c2"
		}, {
			name: "Blue",
			headerColor: "#0e3867",
			middleColor: "#5d6f89",
			footerColor: "#9096a9"
		}, {
			name: "Green",
			headerColor: "#1a3606",
			middleColor: "#737c6c",
			footerColor: "#a8b09e"
		}
	],
	// Optional array of server that will leverage CORS (for developement or specific cross domain deployment)
	CORS_SERVER: []
};