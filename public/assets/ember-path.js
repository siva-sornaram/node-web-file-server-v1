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
;define("ember-path/controllers/getfilesall/file", ["exports", "@ember/controller", "@ember/object", "@glimmer/tracking"], function (_exports, _controller, _object, _tracking) {
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

  let GetfilesallFileController = (_class = class GetfilesallFileController extends _controller.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "filepathtitle", _descriptor, this);

      function getURL() {
        var prevPathArr = window.location.pathname.split('/');
        console.log('prevpatharr : ', prevPathArr);
        var prevPath = prevPathArr.splice(2, prevPathArr.length).join('/');
        console.log('prevpath : ', prevPath);
        return prevPath;
      }

      $(window).on('popstate', function (e) {
        this.filepathtitle = getURL();
      });
      this.filepathtitle = getURL();
      console.log('upload js constructor filepath : ', this.filepathtitle);
    }

    save_filepath(filePathName) {
      console.log('before save : ', this.filepathtitle);
      this.filepathtitle = filePathName;
      console.log('after save : ', this.filepathtitle);
      console.log('upload js action filepath : ', this.filepathtitle);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "filepathtitle", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "save_filepath", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "save_filepath"), _class.prototype)), _class);
  _exports.default = GetfilesallFileController;
});
;define("ember-path/controllers/getfilesall/files", ["exports", "@ember/controller", "@ember/object", "@glimmer/tracking"], function (_exports, _controller, _object, _tracking) {
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

  let GetfilesallFilesController = (_class = class GetfilesallFilesController extends _controller.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "filepathtitle", _descriptor, this);

      function getURL() {
        var prevPathArr = window.location.pathname.split('/');
        console.log('prevpatharr : ', prevPathArr);
        var prevPath = prevPathArr.splice(2, prevPathArr.length).join('/');
        console.log('prevpath : ', prevPath);
        return prevPath;
      }

      this.filepathtitle = getURL();
      $(window).on('popstate', function (e) {
        this.filepathtitle = getURL();
      });
      console.log('upload js constructor filepath : ', this.filepathtitle);
    }

    save_filepath(filePathName) {
      console.log('before save : ', this.filepathtitle);
      this.filepathtitle = filePathName;
      console.log('after save : ', this.filepathtitle);
      console.log('upload js action filepath : ', this.filepathtitle);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "filepathtitle", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "save_filepath", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "save_filepath"), _class.prototype)), _class);
  _exports.default = GetfilesallFilesController;
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
;define("ember-path/helpers/filepathvar", ["exports", "@ember/component/helper"], function (_exports, _helper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _helper.helper)(function
    /*, named*/
  filepathvar() {
    return localStorage.getItem('filepath');
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
;define("ember-path/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
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
    this.route('getfilesall', function () {
      this.route('files', {
        path: '/*path'
      });
      this.route('file', {
        path: '/'
      });
    });
  });
});
;define("ember-path/routes/getfilesall", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class GetfilesallRoute extends _route.default {}

  _exports.default = GetfilesallRoute;
});
;define("ember-path/routes/getfilesall/file", ["exports", "@ember/routing/route", "@ember/service", "@glimmer/tracking"], function (_exports, _route, _service, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let GetfilesallFileRoute = (_class = class GetfilesallFileRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "session", _descriptor2, this);

      _initializerDefineProperty(this, "files", _descriptor3, this);
    }

    model(params) {
      console.log('params : ', params); // localStorage.setItem('filepath', params.path);

      if (params.path == undefined || params.path == '') {
        this.files = fetch('http://localhost:8081/getfiles/').then(response => response.json()).then(data => {
          console.log(data);
          return data;
        });
      } else {
        this.files = fetch('http://localhost:8081/getfiles/' + params.path).then(response => response.json()).then(data => {
          console.log(data);
          return data;
        });
      }

      console.log(this.files);
      return this.files;
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
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "files", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = GetfilesallFileRoute;
});
;define("ember-path/routes/getfilesall/files", ["exports", "@ember/routing/route", "@ember/service", "@glimmer/tracking"], function (_exports, _route, _service, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let GetfilesallFilesRoute = (_class = class GetfilesallFilesRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "session", _descriptor2, this);

      _initializerDefineProperty(this, "files", _descriptor3, this);
    }

    model(params) {
      console.log('params : ', params); // localStorage.setItem('filepath', params.path);

      if (params.path == undefined || params.path == '') {
        this.files = fetch('http://localhost:8081/getfiles/').then(response => response.json()).then(data => {
          console.log(data);
          return data;
        });
      } else {
        this.files = fetch('http://localhost:8081/getfiles/' + params.path).then(response => response.json()).then(data => {
          console.log(data);
          return data;
        });
      }

      console.log(this.files);
      return this.files;
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
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "files", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = GetfilesallFilesRoute;
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
    "id": "qNYKGLVp",
    "block": "[[[1,[28,[35,0],[\"EmberPath\"],null]],[1,\"\\n\\n\"],[10,0],[12],[10,\"strong\"],[12],[1,\" Web File Server\"],[13],[13],[1,\"\\n\"],[8,[39,1],null,[[\"@route\"],[\"getfilesall\"]],[[\"default\"],[[[[1,\"Folders and Files\"]],[]]]]],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null]],[],false,[\"page-title\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "ember-path/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-path/templates/getfilesall", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "zF1ZBjI9",
    "block": "[[[1,[28,[35,0],[\"Getfilesall\"],null]],[1,\"\\n\\n\"],[10,\"h2\"],[12],[1,\"Files and Folders\"],[13],[1,\"\\n\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "ember-path/templates/getfilesall.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-path/templates/getfilesall/file", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "r6Sfil5F",
    "block": "[[[1,[28,[35,0],[\"File\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[10,\"table\"],[14,5,\"border: 1px solid; margin-left: 100px;\"],[12],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"Sl.No\"],[13],[1,\"\\n    \"],[10,\"th\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"File Name\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,1]],null]],null],null,[[[1,\"        \"],[10,\"tr\"],[15,1,[29,[[36,5]]]],[12],[1,\"\\n          \"],[10,\"td\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,[30,2,[\"id\"]]],[13],[1,\"\\n\"],[41,[30,2,[\"isDir\"]],[[[1,\"                \"],[8,[39,7],null,[[\"@route\",\"@model\",\"@invokeAction\"],[\"getfilesall.files\",[30,2,[\"filePath\"]],[28,[37,8],[[30,0,[\"save_filepath\"]],[30,2,[\"filePath\"]]],null]]],[[\"default\"],[[[[1,\"/\"],[1,[30,2,[\"fname\"]]]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"              \"],[10,\"td\"],[14,5,\"padding: 5px 10px 5px 10px\"],[15,1,[29,[\"fname-\",[30,2,[\"fname\"]]]]],[12],[10,3],[15,6,[29,[\"http://localhost:8081/downloadfiles?filename=\",[30,2,[\"filePath\"]]]]],[12],[1,[30,2,[\"fname\"]]],[13],[13],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n\"]],[2]],null],[13],[1,\"\\n\\n\"],[1,\"\\n\"],[10,\"table\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,\"form\"],[14,\"action\",\"http://localhost:8081/uploadfiles\"],[14,\"method\",\"post\"],[14,\"enctype\",\"multipart/form-data\"],[12],[1,\"\\n        \"],[10,2],[12],[1,\"Select File : \"],[13],[1,\" \"],[10,\"input\"],[14,3,\"file\"],[14,\"multiple\",\"\"],[14,4,\"file\"],[12],[13],[1,\"\\n        \"],[10,\"input\"],[14,3,\"relpath\"],[15,2,[30,0,[\"filepathtitle\"]]],[14,4,\"hidden\"],[12],[13],[1,\"\\n        \"],[10,\"input\"],[14,1,\"uploadbutton\"],[14,2,\"Upload Files\"],[14,4,\"submit\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@model\",\"file\"],false,[\"page-title\",\"component\",\"-outlet\",\"each\",\"-track-array\",\"file-id\",\"if\",\"link-to\",\"fn\"]]",
    "moduleName": "ember-path/templates/getfilesall/file.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-path/templates/getfilesall/files", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "YUSMKkNo",
    "block": "[[[1,[28,[35,0],[\"Files\"],null]],[1,\"\\n\"],[10,\"table\"],[14,5,\"border: 1px solid; margin-left: 100px;\"],[12],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"Sl.No\"],[13],[1,\"\\n    \"],[10,\"th\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"File Name\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1]],null]],null],null,[[[1,\"        \"],[10,\"tr\"],[15,1,[29,[[36,3]]]],[12],[1,\"\\n          \"],[10,\"td\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,[30,2,[\"id\"]]],[13],[1,\"\\n\"],[41,[30,2,[\"isDir\"]],[[[1,\"                \"],[8,[39,5],null,[[\"@route\",\"@model\",\"@invokeAction\"],[\"getfilesall.files\",[29,[[30,2,[\"filePath\"]]]],[28,[37,6],[[30,0,[\"save_filepath\"]],[30,2,[\"filePath\"]]],null]]],[[\"default\"],[[[[1,\"/\"],[1,[30,2,[\"fname\"]]]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"              \"],[10,\"td\"],[14,5,\"padding: 5px 10px 5px 10px\"],[15,1,[29,[\"fname-\",[30,2,[\"fname\"]]]]],[12],[10,3],[15,6,[29,[\"http://localhost:8081/downloadfiles?filename=\",[30,2,[\"filePath\"]]]]],[12],[1,[30,2,[\"fname\"]]],[13],[13],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n\"]],[2]],null],[13],[1,\"\\n\\n\"],[1,\"\\n\\n\"],[10,\"table\"],[14,5,\"padding: 5px 10px 5px 10px\"],[12],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,\"form\"],[14,\"action\",\"http://localhost:8081/uploadfiles\"],[14,\"method\",\"post\"],[14,\"enctype\",\"multipart/form-data\"],[12],[1,\"\\n        \"],[10,2],[12],[1,\"Select File : \"],[13],[1,\" \"],[10,\"input\"],[14,3,\"file\"],[14,\"multiple\",\"\"],[14,4,\"file\"],[12],[13],[1,\"\\n        \"],[10,\"input\"],[14,3,\"relpath\"],[15,2,[36,7]],[14,4,\"hidden\"],[12],[13],[1,\"\\n        \"],[10,\"input\"],[14,1,\"uploadbutton\"],[14,2,\"Upload Files\"],[14,4,\"submit\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@model\",\"file\"],false,[\"page-title\",\"each\",\"-track-array\",\"file-id\",\"if\",\"link-to\",\"fn\",\"filepathtitle\"]]",
    "moduleName": "ember-path/templates/getfilesall/files.hbs",
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
            require("ember-path/app")["default"].create({"name":"ember-path","version":"0.0.0+41c05cfd"});
          }
        
//# sourceMappingURL=ember-path.map
