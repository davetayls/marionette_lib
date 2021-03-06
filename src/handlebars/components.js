/// <reference path="../../typings/tsd.d.ts" />
var _ = require('underscore');
var config = require('../config/client');
function initComponents(components) {
    if (!config.config.handlebars) {
        throw new Error('This requires handlebars to have been passed in to configure');
    }
    function getComponentController(name, context) {
        var Controller = components[name];
        if (Controller) {
            return new Controller({
                model: context
            });
        }
        else {
            throw new Error("Cannot find " + name + " component");
        }
    }
    function getAttributes(attributes) {
        if (attributes === void 0) { attributes = {}; }
        var attr = _.map(attributes || {}, function (val, key) {
            if (_.isString(val || _.isFinite(val))) {
                return "" + key + "=\"" + val + "\"";
            }
            else {
                return '';
            }
        });
        if (attr.length) {
            return ' ' + attr.join(' ');
        }
        else {
            return '';
        }
    }
    function className(name, hash) {
        var classes;
        if (hash == null) {
            hash = {};
        }
        if (!name) {
            throw new Error('className must specify a name');
        }
        if (hash["class"]) {
            classes = hash["class"].split(' ');
        }
        else {
            classes = [];
        }
        classes.unshift(name);
        return hash["class"] = classes.join(' ');
    }
    config.config.handlebars.registerHelper('c', function (name, options) {
        var controller = getComponentController(name, this);
        return controller.render(options);
    });
    config.config.handlebars.registerHelper('in_region', function (name, options) {
        return this._regions[name] = {
            fn: options.fn
        };
    });
    config.config.handlebars.registerHelper('region', function (name, options) {
        var componentPath = "" + this._componentName + "__" + name;
        var in_region = this._regions[name];
        var content = in_region ? in_region.fn(this) : '';
        var hash = options.hash || {};
        className("" + componentPath + "-region", hash);
        var attributes = getAttributes(hash);
        return ['<div', attributes, '>', content, "</div>"].join('');
    });
}
exports.initComponents = initComponents;
;
//# sourceMappingURL=components.js.map