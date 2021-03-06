/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import Q = require('q');
import BaseController = require('./Base');
import clientConfig = require('../config/client');
import AnimatedRegion = require('../components/AnimatedRegion/AnimatedRegion');

export interface IMonitorReadyState {
  (
    realView:Backbone.View<Backbone.Model>,
    loadingView:Backbone.View<Backbone.Model>,
    readyCallback:(errors?:any)=>void):Q.Promise<any>;
}

export interface ILoadingOptions {

}

export interface IConstructorOptions {
  region?:AnimatedRegion.AnimatedRegion;
}

export interface IShowOptions {
  region?:AnimatedRegion.AnimatedRegion;
  controller?:AppController;
  monitorReadyState?:(
    realView:Backbone.View<Backbone.Model>,
    loadingView:Backbone.View<Backbone.Model>,
    readyCallback:(errors?:any)=>void) => void;
  loading?:ILoadingOptions;
  immediate?:boolean;
}

export interface IShowOutcome {
  view:Backbone.View<Backbone.Model>;
  options:IShowOptions;
}

export class AppController extends BaseController.BaseController {

  constructor(options:IConstructorOptions = {}) {
    this._managedRegions = [];
    this.region = this.region || options.region || clientConfig.config.defaultRegion;
    super(options);
  }

  _managedRegions:Marionette.Region[];
  _mainView:Marionette.View<Backbone.Model>;

  showController(controller:AppController, options:IShowOptions = {}):IShowOutcome {
    options.controller = controller;
    options.monitorReadyState = controller.getOption('monitorReadyState');
    return this.show(controller.getMainView(), options);
  }

  show(view:Marionette.View<Backbone.Model>, options:IShowOptions = {}):IShowOutcome {
    _.defaults(options, {
      loading: null,
      immediate: false,
      region: this.region
    });
    if (!view) {
      throw new Error("A view instance is required");
    }
    this.setMainView(view);
    this._manageView(view, options);
    return {
      view: view,
      options: options
    };
  }

  getMainView():Marionette.View<Backbone.Model> {
    return this._mainView;
  }

  setMainView(view:Marionette.View<Backbone.Model>) {
    if (this._mainView) {
      return;
    }
    this._mainView = view;
    if (view) {
      return this.listenTo(view, "destroy", this.destroy);
    }
  }

  manageRegion(region:Marionette.Region) {
    return this._managedRegions.push(region);
  }

  _manageView(view:Marionette.View<Backbone.Model>, options:IShowOptions):void {
    if (options.loading) {
      if (_.isBoolean(options.loading)) {
        options.loading = {};
      }
      _.defaults(options.loading, {
        loadingHeader: _.result(this, 'loadingHeader'),
        loadingBody: _.result(this, 'loadingBody'),
        monitorReadyState: options.monitorReadyState
      });
      clientConfig.config.app.execute("show:loading", view, options);
    } else {
      options.region.show(view, options.immediate);
    }
  }

  destroy() {
    _.invoke(this._managedRegions, 'animateEmpty');
    this._managedRegions = null;
    super.destroy();
  }

}

