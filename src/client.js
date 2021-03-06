/// <reference path="../typings/tsd.d.ts" />
exports.config = require('./config/client');
function configure(options) {
    return exports.config.config.configure(options);
}
exports.configure = configure;
;
var behaviorsLookup = require('./behaviors/behaviorsLookup');
exports.behaviors = behaviorsLookup.behaviors;
exports.components = require('./components/index');
exports.constants = require('./constants');
exports.Exceptions = require('./Exceptions');
exports.interfaces = require('./interfaces');
var _Api = require('./controllers/Api');
var _App = require('./controllers/App');
var _Base = require('./controllers/Base');
var _Component = require('./controllers/Component');
var _Router = require('./controllers/RouterController');
var _Static = require('./controllers/Static');
var controllers;
(function (controllers) {
    controllers.Api = _Api;
    controllers.App = _App;
    controllers.Base = _Base;
    controllers.Component = _Component;
    controllers.Router = _Router;
    controllers.Static = _Static;
})(controllers = exports.controllers || (exports.controllers = {}));
exports.handlebars = require('./handlebars/index');
exports.routers = require('./routers/index');
exports.stickit = require('./stickit/index');
exports.flux = require('./flux/index');
exports.DebouncedDocContainer = require('./utilities/DebouncedDocContainer');
var _whenFetched = require('./utilities/whenFetched');
exports.whenFetched = _whenFetched.whenFetched;
exports.navigation = require('./utilities/navigation');
exports.registry = require('./utilities/registry');
exports.urlUtils = require('./utilities/url');
exports.preventSelectionCallout = require('./utilities/preventSelectionCallout');
exports.views = require('./views/index');
//# sourceMappingURL=client.js.map