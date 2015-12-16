// Generated by dts-bundle v0.2.0
// Dependencies for this module:
//   ../typings/marionette/marionette.d.ts
//   ../typings/q/Q.d.ts
//   ../typings/backbone/backbone.d.ts
//   ../typings/backbone-forms/backbone-forms.d.ts
//   ../typings/spin.js/spin.d.ts
//   ../typings/flux/flux.d.ts

declare module 'marionette_lib' {
    export import config = require('__marionette_lib/config/client');
    export function configure(options: config.IConfigureOptions): void;
    import behaviorsLookup = require('__marionette_lib/behaviors/behaviorsLookup');
    export import behaviors = behaviorsLookup.behaviors;
    export import components = require('__marionette_lib/components/index');
    export import constants = require('__marionette_lib/constants');
    export import Exceptions = require('__marionette_lib/Exceptions');
    export import interfaces = require('__marionette_lib/interfaces');
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
    export import flux = require('__marionette_lib/flux/index');
    export import DebouncedDocContainer = require('__marionette_lib/utilities/DebouncedDocContainer');
    import _whenFetched = require('__marionette_lib/utilities/whenFetched');
    export import whenFetched = _whenFetched.whenFetched;
    export import navigation = require('__marionette_lib/utilities/navigation');
    export import registry = require('__marionette_lib/utilities/registry');
    export import urlUtils = require('__marionette_lib/utilities/url');
    export import preventSelectionCallout = require('__marionette_lib/utilities/preventSelectionCallout');
    export import views = require('__marionette_lib/views/index');
}

declare module '__marionette_lib/config/client' {
    import Marionette = require('backbone.marionette');
    import AnimatedRegion = require('__marionette_lib/components/AnimatedRegion/AnimatedRegion');
    export interface IConfigureOptions {
        app?: Marionette.Application;
        handlebars: HandlebarsStatic;
        defaultRegion: AnimatedRegion.AnimatedRegion;
        componentsPath: string;
    }
    export class MarionetteLibConfiguration {
        app: Marionette.Application;
        handlebars: HandlebarsStatic;
        defaultRegion: AnimatedRegion.AnimatedRegion;
        componentsPath: string;
        configure(options: IConfigureOptions): void;
    }
    export var config: MarionetteLibConfiguration;
}

declare module '__marionette_lib/behaviors/behaviorsLookup' {
    export import behaviors = require('__marionette_lib/behaviors/index');
}

declare module '__marionette_lib/components/index' {
    import _Alert = require('__marionette_lib/components/alert/Alert');
    import _Loading = require('__marionette_lib/components/LoadingComponent/LoadingController');
    export import Alert = _Alert.AlertComponent;
    export import AnimatedRegion = require('__marionette_lib/components/AnimatedRegion/AnimatedRegion');
    export import Button = require('__marionette_lib/components/Button/Button');
    export import FormView = require('__marionette_lib/components/FormView/FormView');
    export import SpinnerView = require('__marionette_lib/components/SpinnerView/SpinnerView');
    export import Loading = _Loading.LoadingController;
    export import NoticeView = require('__marionette_lib/components/NoticeView/NoticeView');
}

declare module '__marionette_lib/constants' {
    export class StringConstant {
        val: string;
        constructor(val: string);
        toString(): string;
        matches(value: string): boolean;
        static allConstants<T extends StringConstant>(): T[];
        static fromKey<T extends StringConstant>(key: string): T;
        static fromValue<T extends StringConstant>(key: string): T;
    }
    export class EVENT_TYPES extends StringConstant {
        static Change: EVENT_TYPES;
    }
    export class ACTION_SOURCES extends StringConstant {
        static ServerAction: ACTION_SOURCES;
        static ViewAction: ACTION_SOURCES;
        static DeviceAction: ACTION_SOURCES;
    }
    export class DOC_STATUSES extends StringConstant {
        static empty: DOC_STATUSES;
        static fetchingFromServer: DOC_STATUSES;
        static fetchingLocal: DOC_STATUSES;
        static fetched: DOC_STATUSES;
        static creatingOnServer: DOC_STATUSES;
        static updatingOnServer: DOC_STATUSES;
        static deletingOnServer: DOC_STATUSES;
        static deletedOnServer: DOC_STATUSES;
        static deletedLocal: DOC_STATUSES;
        static deleted: DOC_STATUSES;
    }
}

declare module '__marionette_lib/Exceptions' {
    export interface IException extends Error {
        stack: string;
    }
    export class Exception {
        constructor(error: Error);
        error: Error;
        name: string;
        message: string;
        stack: string;
        toString(): string;
    }
    export class DocumentExistsException extends Exception {
    }
    export class NotImplementedException extends Exception {
    }
}

declare module '__marionette_lib/interfaces' {
    export interface IFetchResolution {
        response: any;
        status: number;
        failed: boolean;
    }
    export interface IFetchModelResolution extends IFetchResolution {
        options: Backbone.ModelFetchOptions;
    }
    export interface IFetchCollectionResolution extends IFetchResolution {
        options: Backbone.CollectionFetchOptions;
    }
    export interface IFetchableModel {
        _fetch: Q.Promise<IFetchModelResolution>;
    }
    export interface IFetchableCollection {
        _fetch: Q.Promise<IFetchCollectionResolution>;
    }
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
    import AnimatedRegion = require('__marionette_lib/components/AnimatedRegion/AnimatedRegion');
    export interface IMonitorReadyState {
        (realView: Backbone.View<Backbone.Model>, loadingView: Backbone.View<Backbone.Model>, readyCallback: (errors?: any) => void): Q.Promise<any>;
    }
    export interface ILoadingOptions {
    }
    export interface IConstructorOptions {
        region?: AnimatedRegion.AnimatedRegion;
    }
    export interface IShowOptions {
        region?: AnimatedRegion.AnimatedRegion;
        controller?: AppController;
        monitorReadyState?: (realView: Backbone.View<Backbone.Model>, loadingView: Backbone.View<Backbone.Model>, readyCallback: (errors?: any) => void) => void;
        loading?: ILoadingOptions;
        immediate?: boolean;
    }
    export interface IShowOutcome {
        view: Backbone.View<Backbone.Model>;
        options: IShowOptions;
    }
    export class AppController extends BaseController.BaseController {
        constructor(options?: IConstructorOptions);
        _managedRegions: Marionette.Region[];
        _mainView: Marionette.View<Backbone.Model>;
        showController(controller: AppController, options?: IShowOptions): IShowOutcome;
        show(view: Marionette.View<Backbone.Model>, options?: IShowOptions): IShowOutcome;
        getMainView(): Marionette.View<Backbone.Model>;
        setMainView(view: Marionette.View<Backbone.Model>): any;
        manageRegion(region: Marionette.Region): number;
        _manageView(view: Marionette.View<Backbone.Model>, options: IShowOptions): void;
        destroy(): void;
    }
}

declare module '__marionette_lib/controllers/Base' {
    import Marionette = require('backbone.marionette');
    import AnimatedRegion = require('__marionette_lib/components/AnimatedRegion/AnimatedRegion');
    export class BaseController extends Marionette.Controller {
        constructor(options?: any);
        _instance_id: string;
        region: AnimatedRegion.AnimatedRegion;
        destroy(): void;
        proxyEvents(instance: any, prefix?: string): void;
    }
}

declare module '__marionette_lib/controllers/Component' {
    import AppController = require('__marionette_lib/controllers/App');
    export class ComponentController extends AppController.AppController {
        show(view: Marionette.View<Backbone.Model>, options: AppController.IShowOptions): AppController.IShowOutcome;
    }
}

declare module '__marionette_lib/controllers/RouterController' {
    import BaseController = require('__marionette_lib/controllers/Base');
    export interface IRouterOptions {
        authorizeAnAction?: (actionName: string, actionConfig: IActionConfig) => boolean;
        actions: {
            [key: string]: IActionConfig;
        };
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
        _setupActions(actions: {
            [key: string]: IActionConfig;
        }): void;
        _getActionConfig(actionConfig: IActionConfig): IActionConfig;
        _getActionConfigFromFn(fn: any): IActionConfig;
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
        templateFn?: (data: any) => string;
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
        getInnerBody(context: any, fn: (data: any) => string): string;
        render(options?: any): string;
        renderOuterHtml(context: any, options?: any): string;
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

declare module '__marionette_lib/flux/index' {
    export import actions = require('__marionette_lib/flux/actions');
    export import interfaces = require('__marionette_lib/flux/interfaces');
    export import Dispatcher = require('__marionette_lib/flux/Dispatcher');
    export import Store = require('__marionette_lib/flux/Store');
}

declare module '__marionette_lib/utilities/DebouncedDocContainer' {
    export interface IMergeDocResult<TDoc extends IDocContainerItem> {
            added: boolean;
            merged: boolean;
            changedProperties: string[];
            doc: TDoc;
    }
    export interface IDebouncedDocItem<T extends IDocContainerItem> {
            id: any;
            doc: T;
            expires?: number;
    }
    export interface IDocContainerItem {
            id: any;
    }
    export class DebouncedDocContainer<T extends IDocContainerItem> {
            constructor();
            docs: IDebouncedDocItem<T>[];
            docTimeToLive: number;
            length: number;
            clearExpiredDocs(): void;
            clearAllDocs(): void;
            /**
                * Puts a document in to the array if it is not there
                * @param doc
                */
            put(doc: T): void;
            /**
                * Return the entry with details about the doc with an id
                * @param id
                */
            entryById(id: any): IDebouncedDocItem<T>;
            /**
                * Return all the docs
                * @returns {IDebouncedDocItem<T>[]}
                */
            all(): T[];
            /**
                * Return the saved document by its id
                * @param id
                * @returns {T}
                */
            byId(id: any): T;
            /**
                * Merges a doc in to the store, if it exists
                * otherwise adds it
                * @param doc
                */
            mergeDoc(doc: T): IMergeDocResult<T>;
            mergeMultiple(docs: T[]): IMergeDocResult<T>[];
    }
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
    import NavigationController = require('__marionette_lib/utilities/NavigationController');
    var navigation: NavigationController.NavigationController;
    export = navigation;
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

declare module '__marionette_lib/utilities/url' {
    /**
        * Extract a query string value
        * @param searchString
        * @param key
        * @returns {*}
        */
    export function getQuery(searchString: string, key: string): string;
    /**
        * Extract the searchString query string values from a url
        * @param url
        * @returns {string}
        */
    export function searchString(url: string): string;
    /**
        * Get the correct separator for a url and a query string
        * @param url
        * @returns {string}
        */
    export function separator(url: string): string;
    /**
        * Joins url query string values
        * @param urls
        * @returns {string}
        */
    export function join(...urls: string[]): string;
    /**
        * Join url paths
        * @param urls
        * @returns {string}
        */
    export function joinPaths(...urls: string[]): string;
    export function param(obj: Object, separator?: string, joiner?: string): string;
}

declare module '__marionette_lib/utilities/preventSelectionCallout' {
    export function preventGlobally(): void;
}

declare module '__marionette_lib/views/index' {
    export import ChildHolderView = require('__marionette_lib/views/ChildHolderView');
    export import View = require('__marionette_lib/views/View');
    export import ItemView = require('__marionette_lib/views/ItemView');
    export import Layout = require('__marionette_lib/views/Layout');
    export import List = require('__marionette_lib/views/List');
}

declare module '__marionette_lib/components/AnimatedRegion/AnimatedRegion' {
    import Marionette = require('backbone.marionette');
    export interface IAnimatableView extends Marionette.View<Backbone.Model> {
        animateOut(cb: () => void): void;
    }
    export class AnimatedRegion extends Marionette.Region {
        currentView: IAnimatableView;
        _nextView: IAnimatableView;
        animateOut(cb: () => void): void;
        animateEmpty(cb: () => void): void;
    }
}

declare module '__marionette_lib/behaviors/index' {
    import _Modifiers = require('__marionette_lib/behaviors/Modifiers');
    import _Scrollables = require('__marionette_lib/behaviors/Scrollables');
    export import Modifiers = _Modifiers.ModifiersBehavior;
    export import Scrollables = _Scrollables.ScrollablesBehavior;
}

declare module '__marionette_lib/components/alert/Alert' {
    import Backbone = require('backbone');
    import ItemView = require('__marionette_lib/views/ItemView');
    export interface IAlertOptions extends Backbone.ViewOptions<Backbone.Model> {
        message: string;
        alertType: string;
    }
    export class AlertComponent extends ItemView.ItemView<Backbone.Model> {
        constructor(options: IAlertOptions);
        templateHelpers(): {
            message: any;
        };
        onShow(): void;
    }
}

declare module '__marionette_lib/components/LoadingComponent/LoadingController' {
    import AppController = require('__marionette_lib/controllers/App');
    export interface ILoadingOptions extends AppController.IConstructorOptions {
        view: Marionette.View<Backbone.Model>;
        loadingType: string;
        monitorReadyState?: (realView: Backbone.View<Backbone.Model>, loadingController: LoadingController, readyCallback: (errors?: any) => void) => void;
        debug?: boolean;
        entities?: any;
    }
    export class LoadingController extends AppController.AppController {
        constructor(options: ILoadingOptions);
        options: ILoadingOptions;
        entities: any;
        loadingView: Marionette.View<Backbone.Model>;
        getLoadingView(): Marionette.View<Backbone.Model>;
        monitorReadyState(realView: Marionette.View<Backbone.Model>, loadingView: Marionette.View<Backbone.Model>): void;
        showError(realView: Marionette.View<Backbone.Model>, loadingView: Marionette.View<Backbone.Model>): JQuery;
        showRealView(realView: Marionette.View<Backbone.Model>, loadingView: Marionette.View<Backbone.Model>): void;
        getEntities(view: Marionette.View<Backbone.Model>): Marionette.View<Backbone.Model>[];
    }
}

declare module '__marionette_lib/components/Button/Button' {
    import Backbone = require('backbone');
    import constants = require('__marionette_lib/constants');
    import ItemView = require('__marionette_lib/views/ItemView');
    export class BUTTON_EVENTS extends constants.StringConstant {
        static navigate: BUTTON_EVENTS;
    }
    export class BUTTON_THEME extends constants.StringConstant {
        static default: BUTTON_THEME;
        static inverse: BUTTON_THEME;
        static action: BUTTON_THEME;
        static link: BUTTON_THEME;
        static primary: BUTTON_THEME;
        static secondary: BUTTON_THEME;
    }
    export class BUTTON_SIZE extends constants.StringConstant {
        static default: BUTTON_SIZE;
        static small: BUTTON_SIZE;
        static large: BUTTON_SIZE;
    }
    export class ButtonModel extends Backbone.Model {
        constructor(attributes?: any, options?: any);
        defaults(): {
            name: string;
            icon: string;
            text: string;
            block: boolean;
            theme: BUTTON_THEME;
            size: BUTTON_SIZE;
        };
        name: string;
        icon: string;
        text: string;
        block: boolean;
        theme: BUTTON_THEME;
        size: BUTTON_SIZE;
    }
    export interface IButtonOptions extends Backbone.ViewOptions<ButtonModel> {
        name: string;
        icon?: string;
        text?: string;
        block?: boolean;
        submit?: boolean;
        theme?: BUTTON_THEME;
        size?: BUTTON_SIZE;
    }
    export class Button extends ItemView.ItemView<ButtonModel> {
        constructor(options?: IButtonOptions);
        className: string;
        getIconClass(iconName: string): string;
        text: string;
        serializeData(): any;
        navigate(): void;
        setProperties(options: IButtonOptions): void;
        unsetClassNames(): void;
        setClassNames(): void;
    }
}

declare module '__marionette_lib/components/FormView/FormView' {
    import BackboneForms = require('backbone-forms');
    import constants = require('__marionette_lib/constants');
    import views = require('__marionette_lib/views/index');
    import Layout = views.Layout;
    import ChildHolderView = views.ChildHolderView;
    export class FORMVIEW_EVENTS extends constants.StringConstant {
        static submitted: FORMVIEW_EVENTS;
    }
    export interface IFormSchemaItem extends Backbone.IFormSchemaItem {
        icon?: string;
    }
    export interface IFormSchema {
        [property: string]: IFormSchemaItem;
    }
    export interface IFormOptions extends Backbone.IFormOptions {
        schema: IFormSchema;
    }
    export class FormView extends Layout.Layout<Backbone.Model> {
        constructor(options: IFormOptions);
        onDestroy(): void;
        static DISABLED_CLASS: string;
        fields: BackboneForms;
        protected fieldsRegion: Marionette.Region;
        protected buttonsRegion: Marionette.Region;
        buttonsHolder: ChildHolderView.GenericChildHolderView;
        onShow(): void;
        protected parseIconProperties(schema: Backbone.IFormSchema): void;
        protected onFormSubmit(e: JQueryEventObject): boolean;
        disableForm(): void;
        enableForm(): void;
        validate(): Backbone.IFormErrors;
        getValue(property?: string): any;
        setValue(properties?: any): any;
    }
}

declare module '__marionette_lib/components/SpinnerView/SpinnerView' {
    import View = require('__marionette_lib/views/View');
    import Spin = require('spin.js');
    export class SpinnerView extends View.View<Backbone.Model> {
        constructor(options?: Backbone.ViewOptions<Backbone.Model>);
        onDestroy(): void;
        loadingDelay: number;
        loadingClass: string;
        loadingTimeout: number;
        loadingSpinner: Spin;
        static spinOptions: {
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

declare module '__marionette_lib/components/NoticeView/NoticeView' {
    import Backbone = require('backbone');
    import ItemView = require('__marionette_lib/views/ItemView');
    import SpinnerView = require('__marionette_lib/components/SpinnerView/SpinnerView');
    export interface INoticeProperties {
        header?: string;
        body?: string;
        buttons?: Marionette.View<Backbone.Model>[];
        canDismiss?: boolean;
        loading?: boolean;
    }
    export interface INoticeViewOptions extends INoticeProperties, Backbone.ViewOptions<NoticeViewModel> {
    }
    export class NoticeViewModel extends Backbone.Model {
        defaults(): INoticeProperties;
        header: string;
        body: string;
        buttons: Marionette.View<Backbone.Model>[];
        canDismiss: boolean;
        loading: boolean;
    }
    export class NoticeView extends ItemView.ItemView<NoticeViewModel> {
        constructor(options?: INoticeViewOptions);
        _loadingView: SpinnerView.SpinnerView;
        options: INoticeViewOptions;
        onRender(): void;
        canDismiss(): any;
        hide(): void;
        hideView(): void;
        show(): void;
        set(properties: INoticeProperties): void;
        destroyButtons(): void;
        onButtonClicked(): any;
    }
}

declare module '__marionette_lib/handlebars/components' {
    import StaticController = require('__marionette_lib/controllers/Static');
    export function initComponents(components: {
        [key: string]: typeof StaticController.StaticController;
    }): void;
}

declare module '__marionette_lib/handlebars/i18next' {
    export function init(): void;
}

declare module '__marionette_lib/routers/App' {
    import Marionette = require('backbone.marionette');
    import constants = require('__marionette_lib/constants');
    export interface AppRouterOptions extends Marionette.AppRouterOptions {
        name: string;
    }
    export class APP_ROUTER_EVENTS extends constants.StringConstant {
        static firstRoute: APP_ROUTER_EVENTS;
    }
    export class AppRouter extends Marionette.AppRouter {
        constructor(options: AppRouterOptions);
        static _firstRouteTriggered: boolean;
        onRoute(routeName: string, routePath: string, routeArgs: any): void;
    }
}

declare module '__marionette_lib/stickit/mdown' {
    export var selector: string;
    export var updateMethod: string;
}

declare module '__marionette_lib/flux/actions' {
    import Dispatcher = require('__marionette_lib/flux/Dispatcher');
    export class Action {
        constructor(type?: any);
        type: any;
        is(ActionClass: typeof Action): boolean;
    }
    export class ActionCreator {
        constructor(dispatcher: Dispatcher.Dispatcher);
        dispatcher: Dispatcher.Dispatcher;
    }
}

declare module '__marionette_lib/flux/interfaces' {
    import constants = require('__marionette_lib/constants');
    import actions = require('__marionette_lib/flux/actions');
    export interface IPayload {
        source: constants.StringConstant;
        action: actions.Action;
    }
}

declare module '__marionette_lib/flux/Dispatcher' {
    import flux = require('flux');
    import fluxInterfaces = require('__marionette_lib/flux/interfaces');
    import IPayload = fluxInterfaces.IPayload;
    import actions = require('__marionette_lib/flux/actions');
    import Store = require('__marionette_lib/flux/Store');
    export class Dispatcher extends flux.Dispatcher<IPayload> {
        constructor();
        stores: Store.Store[];
        payloadQueue: IPayload[];
        dispatching: boolean;
        registerStore(store: Store.Store): string;
        dispatchPayload(): void;
        notifyStoreListeners(): void;
        handlePayload(payload: IPayload): void;
        handleServerAction(action: actions.Action): void;
        handleDeviceAction(action: actions.Action): void;
        handleViewAction(action: actions.Action): void;
    }
}

declare module '__marionette_lib/flux/Store' {
    import EventedClass = require('__marionette_lib/utilities/EventedClass');
    import fluxInterfaces = require('__marionette_lib/flux/interfaces');
    import Dispatcher = require('__marionette_lib/flux/Dispatcher');
    export class Store extends EventedClass.EventedClass {
        constructor(dispatcher: Dispatcher.Dispatcher);
        protected stateHasChanged: boolean;
        protected dispatcher: Dispatcher.Dispatcher;
        dispatchToken: string;
        dispatch(payload: fluxInterfaces.IPayload): void;
        protected stateChanged(): void;
        notifyIfStateChanged(): void;
        addChangeListener(callback: () => void): void;
        removeChangeListener(callback: () => void): void;
    }
}

declare module '__marionette_lib/utilities/NavigationController' {
    import Backbone = require('backbone');
    import Marionette = require('backbone.marionette');
    export class NavigationController extends Marionette.Controller {
        constructor();
        historyIsStarted: boolean;
        to(route: string, options?: any): void;
        getCurrentRoute(): string;
        startHistory(options?: Backbone.HistoryOptions): void;
    }
}

declare module '__marionette_lib/views/ChildHolderView' {
    import Backbone = require('backbone');
    import View = require('__marionette_lib/views/View');
    export class ChildHolderView<T extends Backbone.Model> extends View.View<T> {
        constructor(options?: Backbone.ViewOptions<T>);
        children: Backbone.ChildViewContainer<T>;
        add(view: Backbone.View<T>, index?: number): void;
        protected renderChildView(view: Backbone.View<T>, index?: number): void;
        protected viewDestroyed(view: Backbone.View<T>): void;
        protected attachHtml(view: Backbone.View<T>, index?: number): void;
        render(): ChildHolderView<T>;
        empty(): void;
        onDestroy(): void;
        animateOut(cb: () => void): any;
    }
    export class GenericChildHolderView extends ChildHolderView<Backbone.Model> {
    }
}

declare module '__marionette_lib/views/View' {
    import Marionette = require('backbone.marionette');
    export class View<T extends Backbone.Model> extends Marionette.View<T> {
        constructor(options?: Backbone.ViewOptions<T>);
        name: string;
        className: string;
        getUi(key: string): JQuery;
        hideView(): void;
        showView(show?: boolean): void;
    }
}

declare module '__marionette_lib/views/ItemView' {
    import Backbone = require('backbone');
    import Marionette = require('backbone.marionette');
    export class ItemView<T extends Backbone.Model> extends Marionette.ItemView<T> {
        constructor(options?: Backbone.ViewOptions<T>);
        name: string;
        defaults(): any;
        options: any;
        ui: any;
        template: any;
        className: string;
        hideView(): void;
        showView(show?: boolean): void;
    }
}

declare module '__marionette_lib/views/Layout' {
    import Backbone = require('backbone');
    import Marionette = require('backbone.marionette');
    export class Layout<T extends Backbone.Model> extends Marionette.LayoutView<T> {
        constructor(options?: Backbone.ViewOptions<T>);
        name: string;
        template: (data: any) => string;
        regions: {
            [key: string]: any;
        };
        className: string;
        hideView(): void;
        showView(show?: boolean): void;
    }
}

declare module '__marionette_lib/views/List' {
    import Backbone = require('backbone');
    import Marionette = require('backbone.marionette');
    export class List<T extends Backbone.Model> extends Marionette.CompositeView<T> {
        constructor(options?: Backbone.ViewOptions<T>);
        name: string;
        template: (data: any) => string;
        className: string;
        animateOut(cb: () => void): any;
        hideView(): void;
        showView(show?: boolean): void;
    }
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

declare module '__marionette_lib/behaviors/Scrollables' {
    import Marionette = require('backbone.marionette');
    export interface IScrollablesOptions {
        [key: string]: string;
    }
    export class ScrollablesBehavior extends Marionette.Behavior {
        options: IScrollablesOptions;
        onShow(): void;
    }
}

declare module '__marionette_lib/utilities/EventedClass' {
    import Backbone = require('backbone');
    export class EventedClass implements Backbone.Events {
        on: (eventName: string, callback?: Function, context?: any) => any;
        off: (eventName?: string, callback?: Function, context?: any) => any;
        trigger: (eventName: string, ...args: any[]) => any;
        bind: (eventName: string, callback: Function, context?: any) => any;
        unbind: (eventName?: string, callback?: Function, context?: any) => any;
        once: (events: string, callback: Function, context?: any) => any;
        listenTo: (object: any, events: string, callback: Function) => any;
        listenToOnce: (object: any, events: string, callback: Function) => any;
        stopListening: (object?: any, events?: string, callback?: Function) => any;
    }
}

