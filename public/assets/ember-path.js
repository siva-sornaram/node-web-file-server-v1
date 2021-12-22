'use strict';



;define("ember-path/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("ember-path/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "ember-path/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ember-path/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("ember-path/components/notification-container", ["exports", "ember-cli-notifications/components/notification-container"], function (_exports, _notificationContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notificationContainer.default;
    }
  });
});
;define("ember-path/components/notification-message", ["exports", "ember-cli-notifications/components/notification-message", "ember-get-config"], function (_exports, _notificationMessage, _emberGetConfig) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint-disable ember/require-tagless-components, prettier/prettier */
  const globals = _emberGetConfig.default['ember-cli-notifications'] || {}; // Import app config object

  var _default = _notificationMessage.default.extend({
    init() {
      this._super(...arguments);

      this.icons = globals.icons || 'svg';
      this.svgs = {
        'success': 'success',
        'warning': 'warning',
        'info': 'info',
        'error': 'error'
      };
    }

  });

  _exports.default = _default;
});
;define("ember-path/components/upload", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking"], function (_exports, _component, _templateFactory, _component2, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <h3>{{filepathvar}}</h3>
  
  <table style="padding: 5px 10px 5px 10px">
    <tr>
      <td>
        <form action="http://localhost:8081/uploadfiles" method="post" enctype="multipart/form-data">
          <p>Select File : </p> <input type="file" name="file" multiple />
          <input type="hidden" name="relpath" value={{filepathvar}}>
          <input id="uploadbutton" type="submit" value="Upload Files"/>
        </form>
      </td>
    </tr>
  </table>
  */
  {
    "id": "bkDezcHq",
    "block": "[[[10,\"h3\"],[12],[1,[34,0]],[13],[1,\"\\n\\n\"],[10,\"table\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,\"form\"],[14,\"action\",\"http://localhost:8081/uploadfiles\"],[14,\"method\",\"post\"],[14,\"enctype\",\"multipart/form-data\"],[12],[1,\"\\n        \"],[10,2],[12],[1,\"Select File : \"],[13],[1,\" \"],[10,\"input\"],[14,3,\"file\"],[14,\"multiple\",\"\"],[14,4,\"file\"],[12],[13],[1,\"\\n        \"],[10,\"input\"],[14,3,\"relpath\"],[15,2,[36,0]],[14,4,\"hidden\"],[12],[13],[1,\"\\n        \"],[10,\"input\"],[14,1,\"uploadbutton\"],[14,2,\"Upload Files\"],[14,4,\"submit\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"filepathvar\"]]",
    "moduleName": "ember-path/components/upload.hbs",
    "isStrictMode": false
  });

  class UploadComponent extends _component2.default {//   @tracked filepath = localStorage.getItem('filepath');
    //   constructor() {
    // super(...arguments);
    //   $(window).on('popstate', function(e) {
    //     // console.log("Hash URL is " + window.location.pathname);
    //     var prevPathArr = window.location.pathname.split('/');
    //     var prevPath = prevPathArr.splice(2, prevPathArr.length).join('/');
    //     this.filepath = prevPath;
    //     console.log('upload js filepath : ', this.filepath);
    //   });
    // console.log('upload js filepath : ', this.filepath);
    //   }
  }

  _exports.default = UploadComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, UploadComponent);
});
;define("ember-path/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("ember-path/controllers/files", ["exports", "@ember/controller", "@ember/service"], function (_exports, _controller, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let FilesController = (_class = class FilesController extends _controller.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "notifications", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "notifications", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = FilesController;
});
;define("ember-path/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("ember-path/helpers/app-version", ["exports", "@ember/component/helper", "ember-path/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("ember-path/helpers/equal", ["exports", "ember-cli-notifications/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
});
;define("ember-path/helpers/goback", ["exports", "@ember/component/helper"], function (_exports, _helper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _helper.helper)(function goback(filepathtitle
  /*, named*/
  ) {
    // return positional;
    var oldFilePath = JSON.parse(JSON.stringify(filepathtitle))[0];

    if (oldFilePath != '/') {
      console.log('backfilepath : ', oldFilePath);
      let pathArr = oldFilePath.split('/');
      console.log('patharr in go_back : ', pathArr);
      pathArr.pop();
      console.log('patharr in go_back : ', pathArr);
      let newPath = pathArr.join('/');
      newPath.replaceAll('//', '/');
      console.log('newPath : ', newPath);
      return newPath == '' ? '#' : newPath;
    }
  });

  _exports.default = _default;
});
;define("ember-path/helpers/isfilepath", ["exports", "@ember/component/helper"], function (_exports, _helper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _helper.helper)(function isfilepath(filepathtitle
  /*, named*/
  ) {
    // return positional;
    var filepath = JSON.parse(JSON.stringify(filepathtitle))[0];
    console.log('filepath in isfilepath helper : ', filepath);

    if (filepath == undefined || filepath == '' || filepath == '/') {
      return false;
    }

    return true;
  });

  _exports.default = _default;
});
;define("ember-path/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("ember-path/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ember-path/helpers/prevent-default", ["exports", "ember-on-modifier/helpers/prevent-default"], function (_exports, _preventDefault) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _preventDefault.default;
    }
  });
  Object.defineProperty(_exports, "preventDefault", {
    enumerable: true,
    get: function () {
      return _preventDefault.preventDefault;
    }
  });
});
;define("ember-path/helpers/route-action", ["exports", "ember-route-action-helper/helpers/route-action"], function (_exports, _routeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeAction.default;
    }
  });
});
;define("ember-path/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-path/helpers/sizer", ["exports", "@ember/component/helper"], function (_exports, _helper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _helper.helper)(function sizer(size
  /*, named*/
  ) {
    // return positional;
    function formatBytes(bytes) {
      let decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    return formatBytes(size);
  });

  _exports.default = _default;
});
;define("ember-path/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-path/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-path/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("ember-path/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("ember-path/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-path/initializers/export-application-global", ["exports", "ember", "ember-path/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-path/initializers/link-action-enhancer", ["exports", "ember-link-action/initializers/link-action-enhancer"], function (_exports, _linkActionEnhancer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkActionEnhancer.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _linkActionEnhancer.initialize;
    }
  });
});
;define("ember-path/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("ember-path/router", ["exports", "@ember/routing/router", "ember-path/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('files', {
      path: '/'
    });
    this.route('files', {
      path: '/*path'
    });
  });
});
;define("ember-path/routes/application", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationIndexRoute extends _route.default {
    beforeModel() {
      this.transitionTo('files');
    }

  }

  _exports.default = ApplicationIndexRoute;
});
;define("ember-path/routes/files", ["exports", "@ember/routing/route", "@ember/service", "@glimmer/tracking", "@ember/object"], function (_exports, _route, _service, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let FilesRoute = (_class = class FilesRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "session", _descriptor2, this);

      _initializerDefineProperty(this, "notifications", _descriptor3, this);

      _initializerDefineProperty(this, "files", _descriptor4, this);

      _initializerDefineProperty(this, "filepathtitle", _descriptor5, this);
    }

    model(params) {
      var _dec, _class3;

      console.log('params : ', params);
      console.log('params.path : ', params.path);
      console.log('history : ', window.history);
      let file = (_dec = (0, _object.computed)('filePathTitle'), (_class3 = class file {
        constructor() {
          let filePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
          (0, _object.set)(this, 'filePathTitle', filePath);
        }

        get filePath() {
          console.log('get filepath in class : ', this.filePathTitle);
          return this.filePathTitle;
        }

        set filePath(path) {
          let pathArr = path.split('/');
          console.log('set filepath in class : ', pathArr);
        }

      }, (_applyDecoratedDescriptor(_class3.prototype, "filePath", [_dec], Object.getOwnPropertyDescriptor(_class3.prototype, "filePath"), _class3.prototype)), _class3));
      let File = new file(params.path);
      this.filepathtitle = File.filePath;
      this.filepathtitle.split('//').join('/');
      console.log('File.filepath : ', File.filePath);
      console.log('filepathtitle from file class : ', this.filepathtitle);

      if (params.path == undefined || params.path == '') {
        this.files = fetch('/getfiles').then(response => response.json()).then(data => {
          console.log(data);
          return data;
        });
      } else if (params.path == '/') {
        console.log('in else if : ', params.path);
        this.files = fetch('/getfiles').then(response => response.json()).then(data => {
          console.log(data);
          return data;
        });
      } else {
        this.files = fetch('/getfiles/' + params.path).then(response => response.json()).then(data => {
          console.log(data);
          return data;
        });
      }

      console.log(this.files);
      return this.files;
    }

    setupController(controller, model) {
      super.setupController(controller, model);
      window.scrollTo(0, 0);

      if (this.filepathtitle !== undefined) {
        controller.set('filepathtitle', this.filepathtitle);
        controller.set('filepathdisplay', this.filepathtitle.replace('#', '/'));
        console.log('controller filepath : ', this.filepathtitle);
      } else {//   controller.set('filepathtitle', '/');
        //   console.log('controller filepath : ', this.filepathtitle);
      }
    }

    create_folder() {
      var folname = foldername.value;
      var relPath = this.filepathtitle;

      if (relPath == '' || relPath == '/') {
        relPath = 'root';
      }

      if (relPath == '#') relPath = 'root';
      console.log('folname : ', folname, 'relpath : ', relPath);
      var result = $.ajax({
        type: 'POST',
        url: '/createfolder/',
        data: {
          foldername: folname,
          relpath: relPath
        },
        global: false,
        async: false,
        success: function (dat) {
          return dat;
        },
        error: function (err) {
          console.log(err);
        }
      }).responseText;
      const rsObj = JSON.parse(result);
      console.log('rsObj in create_folder : ', rsObj);

      if (rsObj.status == 'success') {
        this.refresh();
        this.notifications.success('Folder has been created successfully', {
          autoClear: true,
          clearDuration: 3000
        });
      }

      if (rsObj.status == 'already-present') {
        this.notifications.info('Folder is already present', {
          autoClear: true,
          clearDuration: 3000
        });
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "notifications", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "files", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "filepathtitle", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '/';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "create_folder", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "create_folder"), _class.prototype)), _class);
  _exports.default = FilesRoute;
});
;define("ember-path/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("ember-path/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("ember-path/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("ember-path/services/notifications", ["exports", "ember-cli-notifications/services/notifications"], function (_exports, _notifications) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notifications.default;
    }
  });
});
;define("ember-path/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("ember-path/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("ember-path/services/session", ["exports", "@ember/service", "@glimmer/tracking"], function (_exports, _service, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let SessionService = (_class = class SessionService extends _service.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "filepath", _descriptor, this);
    }

    getFilePath() {
      return this.filepath;
    }

    setFilePath(filePath) {
      this.filepath = filePath;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "filepath", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = SessionService;
});
;define("ember-path/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("ember-path/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "5Me5uJAl",
    "block": "[[[1,[28,[35,0],[\"Application\"],null]],[1,\"\\n\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "ember-path/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-path/templates/files", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "mTNbes1t",
    "block": "[[[1,[28,[35,0],[\"Files\"],null]],[1,\"\\n\\n\"],[1,[28,[35,1],null,[[\"position\",\"zindex\"],[\"top\",\"9999\"]]]],[1,\"\\n\\n\"],[10,\"h1\"],[12],[1,\"Index of \"],[1,[34,2]],[13],[1,\"\\n\\n\"],[10,\"hr\"],[12],[13],[1,\"\\n\\n\"],[10,\"table\"],[14,5,\"margin-left: 30px;\"],[12],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"Sl.No\"],[13],[1,\"\\n    \"],[10,\"th\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"File Name\"],[13],[1,\"\\n    \"],[10,\"th\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"Size\"],[13],[1,\"\\n    \"],[10,\"th\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"Last Modified\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[41,[28,[37,4],[[33,5]],null],[[[1,\"  \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"0\"],[13],[1,\"\\n\"],[1,\"      \"],[10,\"td\"],[12],[8,[39,6],[[24,0,\"button-link\"],[24,5,\"padding-left: 10px;\"]],[[\"@route\",\"@model\"],[\"files\",[29,[[28,[37,7],[[33,5]],null]]]]],[[\"default\"],[[[[10,\"img\"],[14,\"src\",\"/assets/images/back-ios.png\"],[14,5,\"width: 25px; height: auto; padding: 0px 5px 0px;\"],[12],[13],[10,\"strong\"],[12],[1,\"Parent Folder\"],[13]],[]]]]],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null],[42,[28,[37,9],[[28,[37,9],[[30,1]],null]],null],null,[[[1,\"        \"],[10,\"tr\"],[15,1,[29,[[30,2,[\"id\"]]]]],[12],[1,\" \\n          \"],[10,\"td\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,[30,2,[\"id\"]]],[13],[1,\"\\n\"],[41,[30,2,[\"isDir\"]],[[[1,\"                \"],[8,[39,6],[[24,0,\"button-link\"],[24,5,\"padding-left: 10px;\"]],[[\"@route\",\"@model\"],[\"files\",[29,[[30,2,[\"filePath\"]]]]]],[[\"default\"],[[[[10,\"img\"],[14,\"src\",\"/assets/images/folder-ios.png\"],[14,5,\"width: 25px; height: auto; padding: 0px 5px 0px;\"],[12],[13],[10,\"strong\"],[12],[1,[30,2,[\"fname\"]]],[1,\"/\"],[13]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"              \"],[10,\"td\"],[14,5,\"padding: 5px 10px 5px 10px\"],[15,1,[29,[\"fname-\",[30,2,[\"fname\"]]]]],[12],[10,\"img\"],[14,\"src\",\"/assets/images/file-ios.png\"],[14,5,\"width: 25px; height: auto; padding: 0px 5px 0px;\"],[12],[13],[10,3],[15,6,[29,[\"/downloadfiles?filename=\",[30,2,[\"filePath\"]]]]],[12],[10,\"strong\"],[12],[1,[30,2,[\"fname\"]]],[13],[13],[13],[1,\"\\n\"]],[]]],[1,\"            \"],[10,\"td\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,[28,[35,10],[[30,2,[\"size\"]]],null]],[13],[1,\"\\n            \"],[10,\"td\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,[30,2,[\"lmod\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[2]],null],[13],[1,\"\\n\\n\"],[10,\"h3\"],[12],[1,[34,2]],[13],[1,\"\\n\\n\"],[10,\"hr\"],[12],[13],[1,\"\\n\\n\\n\"],[10,\"table\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,\"form\"],[14,\"action\",\"/uploadfiles\"],[14,\"method\",\"post\"],[14,\"enctype\",\"multipart/form-data\"],[12],[1,\"\\n        \"],[10,2],[12],[1,\"Select File : \"],[13],[1,\" \"],[10,\"input\"],[14,3,\"file\"],[14,\"multiple\",\"\"],[14,4,\"file\"],[12],[13],[1,\"\\n        \"],[10,\"input\"],[14,3,\"relpath\"],[15,2,[36,5]],[14,4,\"hidden\"],[12],[13],[1,\"\\n        \"],[10,\"input\"],[14,1,\"uploadbutton\"],[14,2,\"Upload Files\"],[14,4,\"submit\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,\"table\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"\\n        \"],[10,\"tr\"],[12],[1,\"\\n            \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,\"label\"],[12],[1,\"Folder Name : \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"td\"],[12],[1,\"\\n                \"],[1,[28,[35,11],null,[[\"type\",\"id\",\"value\",\"name\"],[\"text\",\"foldername\",[33,12],\"foldername\"]]]],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"td\"],[12],[1,\"\\n                \"],[1,[28,[35,11],null,[[\"type\",\"id\",\"value\",\"name\"],[\"hidden\",\"relpath\",[28,[30,0,[\"filepathtitle\"]],null,null],\"relpath\"]]]],[1,\"\\n            \"],[13],[1,\"\\n            \"],[11,\"button\"],[24,0,\"button\"],[24,4,\"submit\"],[4,[38,13],[\"click\",[28,[37,14],[\"create_folder\"],null]],null],[12],[1,\"Create Folder\"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\\n\"],[10,\"hr\"],[12],[13]],[\"@model\",\"file\"],false,[\"page-title\",\"notification-container\",\"filepathdisplay\",\"if\",\"isfilepath\",\"filepathtitle\",\"link-to\",\"goback\",\"each\",\"-track-array\",\"sizer\",\"input\",\"foldername\",\"on\",\"route-action\"]]",
    "moduleName": "ember-path/templates/files.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-path/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("ember-path/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("ember-path/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("ember-path/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('ember-path/config/environment', [], function() {
  var prefix = 'ember-path';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ember-path/app")["default"].create({"name":"ember-path","version":"0.0.0+82754639"});
          }
        
//# sourceMappingURL=ember-path.map
