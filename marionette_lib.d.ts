// Generated by dts-bundle v0.2.0
// Dependencies for this module:
//   ../typings/marionette/marionette.d.ts
//   ../typings/q/Q.d.ts
//   ../typings/backbone/backbone.d.ts
//   ../typings/spin/spin.d.ts

declare module 'marionette_lib' {
    import _config = require('__marionette_lib/config/client');
    export import config = _config.config;
    export function configure(options: any): void;
    export import behaviors = require('__marionette_lib/behaviors/index');
    export import components = require('__marionette_lib/components/index');
    import _Api = require('__marionette_lib/controllers/Api');
    import _App = require('__marionette_lib/controllers/App');
    import _Base = require('__marionette_lib/controllers/Base');
    import _Component = require('__marionette_lib/controllers/Component');
    import _Router = require('__marionette_lib/controllers/RouterController');
    import _Static = require('__marionette_lib/controllers/Static');
    export module controllers {
        export import Api = _Api;
        export import App = _App;
        export import Base = _Base;
        export import Component = _Component;
        export import Router = _Router;
        export import Static = _Static;
    }
    export import handlebars = require('__marionette_lib/handlebars/index');
    export import routers = require('__marionette_lib/routers/index');
    export import stickit = require('__marionette_lib/stickit/index');
    import _whenFetched = require('__marionette_lib/utilities/whenFetched');
    export import whenFetched = _whenFetched.whenFetched;
    export import navigation = require('__marionette_lib/utilities/navigation');
    export import registry = require('__marionette_lib/utilities/registry');
    export import views = require('__marionette_lib/views/index');
}

declare module '__marionette_lib/config/client' {
    import Marionette = require('backbone.marionette');
    export interface IConfigureOptions {
        app?: Marionette.Application;
        handlebars: HandlebarsStatic;
        componentsPath: string;
    }
    export class MarionetteLibConfiguration {
        app: Marionette.Application;
        handlebars: HandlebarsStatic;
        componentsPath: string;
        configure(options: IConfigureOptions): void;
    }
    export var config: MarionetteLibConfiguration;
}

declare module '__marionette_lib/behaviors/index' {
    import modifiers = require('__marionette_lib/behaviors/Modifiers');
    export import Modifiers = modifiers.ModifiersBehavior;
}

declare module '__marionette_lib/components/index' {
    import _Alert = require('__marionette_lib/components/alert/Alert');
    import _Loading = require('__marionette_lib/components/loading/LoadingController');
    export import Alert = _Alert.AlertComponent;
    export import Loading = _Loading.LoadingController;
}

declare module '__marionette_lib/controllers/Api' {
    import BaseController = require('__marionette_lib/controllers/Base');
    export interface IApiControllerOptions {
    }
    export class ApiController extends BaseController.BaseController {
    }
}

declare module '__marionette_lib/controllers/App' {
    import Q = require('q');
    import BaseController = require('__marionette_lib/controllers/Base');
    export interface IMonitorReadyState {
        (): Q.Promise<any>;
    }
    export interface ILoadingOptions {
    }
    export interface IShowOptions {
        region?: Marionette.Region;
        controller?: AppController;
        monitorReadyState?: IMonitorReadyState;
        loading?: ILoadingOptions;
        immediate?: boolean;
    }
    export interface IShowOutcome {
        view: Backbone.View<Backbone.Model>;
        options: IShowOptions;
    }
    export class AppController extends BaseController.BaseController {
        constructor(options?: any);
        _managedRegions: Marionette.Region[];
        _mainView: Backbone.View<Backbone.Model>;
        showController(controller: AppController, options?: IShowOptions): IShowOutcome;
        show(view: Backbone.View<Backbone.Model>, options?: IShowOptions): IShowOutcome;
        getMainView(): Backbone.View<Backbone.Model>;
        setMainView(view: any): any;
        manageRegion(region: any): number;
        _manageView(view: any, options: any): any;
        destroy(): void;
    }
}

declare module '__marionette_lib/controllers/Base' {
    import Marionette = require('backbone.marionette');
    export class BaseController extends Marionette.Controller {
        constructor(options?: any);
        _instance_id: string;
        region: Marionette.Region;
        destroy(): void;
        proxyEvents(instance: any, prefix: any): any;
    }
}

declare module '__marionette_lib/controllers/Component' {
    import AppController = require('__marionette_lib/controllers/App');
    export class ComponentController extends AppController.AppController {
        show(view: Backbone.View<Backbone.Model>, options: any): AppController.IShowOutcome;
    }
}

declare module '__marionette_lib/controllers/RouterController' {
    import BaseController = require('__marionette_lib/controllers/Base');
    export interface IRouterOptions {
        actions: IActionConfig[];
    }
    export interface IActionConfig {
        fn: Function;
        policy?: ActionPolicy;
        unauthorized?: (actionName: string, actionConfig: IActionConfig) => void;
        internalActionError?: IActionUnauthorizedError;
    }
    export interface IActionUnauthorizedError extends Error {
        actionName: string;
        actionConfig: IActionConfig;
    }
    export class RouterController extends BaseController.BaseController {
        initialize(options: IRouterOptions): void;
        authorizeAnAction(actionName: string, actionConfig: IActionConfig): boolean;
        actionUnauthorized(actionName: string, actionConfig: IActionConfig): void;
        callActionUnauthorized(actionName: string, actionConfig: IActionConfig): any;
        defaultPolicy(): ActionPolicy;
        _setupActions(actions: IActionConfig[]): void;
        _getActionConfig(actionConfig: any): any;
        _getActionFunction(actionConfig: any): Function;
        _getActionPolicy(actionConfig: IActionConfig): ActionPolicy;
        addAction(actionName: string, actionConfig: IActionConfig): void;
    }
    export interface IActionPolicyOptions {
        isAuthorized(actionName: string, actionConfig: IActionConfig): boolean;
    }
    export class ActionPolicy extends BaseController.BaseController {
        constructor(options?: IActionPolicyOptions);
        options: IActionPolicyOptions;
        isAuthorized(actionName: string, actionConfig: IActionConfig): boolean;
    }
}

declare module '__marionette_lib/controllers/Static' {
    export interface IStaticControllerOptions {
        model?: any;
    }
    export class StaticController {
        constructor(options?: IStaticControllerOptions);
        name: string;
        options: IStaticControllerOptions;
        model: any;
        tagName: string;
        cloneContext: boolean;
        context: any;
        attributes(hash: any): {
            [index: string]: string;
        };
        contextProperties(): {
            [index: string]: any;
        };
        template(): Function;
        className(hash?: any): string;
        getContext(): any;
        getChildContext(): any;
        mixinHash(context: any, hash: any): any;
        getComponentTemplate(): Function;
        getAttributes(hash: any): string;
        getInnerBody(context: any, fn: any): any;
        render(options: any): string;
        renderOuterHtml(context: any, _arg: any): string;
        renderContentTemplate(context: any): any;
    }
}

declare module '__marionette_lib/handlebars/index' {
    export import components = require('__marionette_lib/handlebars/components');
    export import i18next = require('__marionette_lib/handlebars/i18next');
}

declare module '__marionette_lib/routers/index' {
    export import App = require('__marionette_lib/routers/App');
}

declare module '__marionette_lib/stickit/index' {
    export import mdown = require('__marionette_lib/stickit/mdown');
}

declare module '__marionette_lib/utilities/whenFetched' {
    import Q = require('q');
    export interface IWhenFetchedEntity {
        _fetch: Q.Promise<IFetchResolution>;
    }
    export interface IFetchResolution {
        response: any;
        options: any;
        status: number;
        failed: boolean;
    }
    export function whenFetched(entities: IWhenFetchedEntity[], callback: (errors?: any[]) => any): void;
}

declare module '__marionette_lib/utilities/navigation' {
    import Backbone = require('backbone');
    export var historyIsStarted: boolean;
    export function to(route: any, options?: any): boolean;
    export function getCurrentRoute(): string;
    export function startHistory(options: Backbone.HistoryOptions): void;
}

declare module '__marionette_lib/utilities/registry' {
    export interface IRegistryDestroyable {
        destroy(): any;
    }
    export interface IRegistryItem {
        region: IRegistryDestroyable;
    }
    export var _registry: {
        [index: string]: IRegistryItem;
    };
    export function register(instance: IRegistryItem, id: string): void;
    export function unregister(instance: IRegistryItem, id: string): void;
    export interface IRegistryState {
        count: number;
        previous: number;
        msg: string;
    }
    export function resetRegistry(): IRegistryState;
    export function getRegistrySize(): number;
}

declare module '__marionette_lib/views/index' {
    export import View = require('__marionette_lib/views/View');
    export import ItemView = require('__marionette_lib/views/ItemView');
    export import Layout = require('__marionette_lib/views/Layout');
    export import List = require('__marionette_lib/views/List');
}

declare module '__marionette_lib/behaviors/Modifiers' {
    import Marionette = require('backbone.marionette');
    export interface IModifiedOptions {
        remove?: boolean;
        toggle?: boolean;
    }
    export class ModifiersBehavior extends Marionette.Behavior {
        addModifier(modifier: string): boolean;
        removeModifier(modifier: string): boolean;
        toggleModifier(modifier: string): boolean;
        onModified(modifier: string, options?: IModifiedOptions): void;
    }
}

declare module '__marionette_lib/components/alert/Alert' {
    import Backbone = require('backbone');
    import ItemView = require('__marionette_lib/views/ItemView');
    export class AlertComponent extends ItemView.ItemView<Backbone.Model> {
        name: string;
        template: any;
        templateHelpers(): {
            message: any;
        };
        onShow(): void;
    }
}

declare module '__marionette_lib/components/loading/LoadingController' {
    import AppController = require('__marionette_lib/controllers/App');
    import SpinnerView = require('__marionette_lib/components/spinner/SpinnerView');
    export class LoadingController extends AppController.AppController {
        initialize(options: any): any;
        options: any;
        entities: any;
        loadingView: Backbone.View<Backbone.Model>;
        getLoadingView(): SpinnerView.SpinnerView;
        monitorReadyState(realView: any, loadingView: any): any;
        showError(realView: any, loadingView: any): any;
        showRealView(realView: any, loadingView: any): any;
        getEntities(view: any): any[];
    }
}

declare module '__marionette_lib/handlebars/components' {
    import StaticController = require('__marionette_lib/controllers/Static');
    export function initComponents(components: {
        [key: string]: StaticController.StaticController;
    }): void;
}

declare module '__marionette_lib/handlebars/i18next' {
    export function init(): void;
}

declare module '__marionette_lib/routers/App' {
    import Marionette = require('backbone.marionette');
    export class AppRouter extends Marionette.AppRouter {
    }
}

declare module '__marionette_lib/stickit/mdown' {
    export var selector: string;
    export var updateMethod: string;
}

declare module '__marionette_lib/views/View' {
    import Marionette = require('backbone.marionette');
    export class View<T extends Backbone.Model> extends Marionette.View<T> {
        name: string;
        behaviors(): any;
        getUi(key: string): JQuery;
    }
}

declare module '__marionette_lib/views/ItemView' {
    import Backbone = require('backbone');
    import Marionette = require('backbone.marionette');
    export class ItemView<T extends Backbone.Model> extends Marionette.ItemView<T> {
        name: string;
        defaults(): any;
        options: any;
        ui: any;
        template: any;
        behaviors(): any;
    }
}

declare module '__marionette_lib/views/Layout' {
    import Backbone = require('backbone');
    import Marionette = require('backbone.marionette');
    export class Layout<T extends Backbone.Model> extends Marionette.LayoutView<T> {
        name: string;
        behaviors(): any;
    }
}

declare module '__marionette_lib/views/List' {
    import Backbone = require('backbone');
    import Marionette = require('backbone.marionette');
    export class List<T extends Backbone.Model> extends Marionette.CompositeView<T> {
        name: string;
        behaviors(): any;
        animateOut(cb: any): any;
    }
}

declare module '__marionette_lib/components/spinner/SpinnerView' {
    import View = require('__marionette_lib/views/View');
    import Spin = require('spin');
    export class SpinnerView extends View.View<Backbone.Model> {
        name: string;
        loadingDelay: number;
        loadingClass: string;
        loadingTimeout: number;
        loadingSpinner: Spin;
        spinOptions: {
            lines: number;
            length: number;
            width: number;
            radius: number;
            corners: number;
            rotate: number;
            direction: number;
            color: string;
            speed: number;
            trail: number;
            shadow: boolean;
            hwaccel: boolean;
            className: string;
            zIndex: number;
            top: string;
            left: string;
        };
        start(): void;
        stop(): JQuery;
    }
}

