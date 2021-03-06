/// <reference path="../../../typings/tsd.d.ts" />
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
function configureBackboneSync(app) {
    var _sync = Backbone.sync;
    Backbone.sync = function (method, entity, options) {
        if (options === void 0) { options = {}; }
        _.defaults(options, {
            beforeSend: _.bind(beforeSend, entity),
            complete: _.bind(complete, entity)
        });
        if (!entity._fetch && method === "read") {
            addFetchPromise(entity, options);
        }
        return _sync(method, entity, options);
    };
    function beforeSend() {
        return this.trigger("sync:start", this);
    }
    function complete() {
        return this.trigger("sync:stop", this);
    }
    function addFetchPromise(entity, options) {
        var d = $.Deferred();
        entity._fetch = d.promise();
        var _success = options.success;
        var _error = options.error;
        options.success = function (resp, status, xhr) {
            _success.apply(this, arguments);
            d.resolve({
                response: resp,
                options: options,
                status: xhr ? xhr.status : 0,
                failed: false
            });
        };
        options.error = function (resp, status) {
            if (resp.status === 0) {
                entity.trigger('error:offline');
                app.vent.trigger('fetch:offline', entity);
            }
            else if (_.contains([401, 403], resp.status)) {
                entity.trigger('unauthorised');
                app.vent.trigger('fetch:unauthorised', entity);
            }
            else if (Math.floor(resp.status / 100) === 5) {
                entity.trigger('error:server');
                app.vent.trigger('fetch:error:server');
            }
            _error.apply(this, arguments);
            d.resolve({
                response: resp,
                options: options,
                status: resp.status,
                failed: true
            });
        };
    }
}
exports.configureBackboneSync = configureBackboneSync;
//# sourceMappingURL=sync.js.map