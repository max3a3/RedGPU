/******/ var __webpack_modules__ = ({

/***/ "./node_modules/dat.gui/build/dat.gui.module.js":
/*!******************************************************!*\
  !*** ./node_modules/dat.gui/build/dat.gui.module.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GUI: () => (/* binding */ GUI$1),
/* harmony export */   color: () => (/* binding */ color),
/* harmony export */   controllers: () => (/* binding */ controllers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   dom: () => (/* binding */ dom$1),
/* harmony export */   gui: () => (/* binding */ gui)
/* harmony export */ });
/**
 * dat-gui JavaScript Controller Library
 * https://github.com/dataarts/dat.gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

function colorToString (color, forceCSSHex) {
  var colorFormat = color.__state.conversionName.toString();
  var r = Math.round(color.r);
  var g = Math.round(color.g);
  var b = Math.round(color.b);
  var a = color.a;
  var h = Math.round(color.h);
  var s = color.s.toFixed(1);
  var v = color.v.toFixed(1);
  if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
    var str = color.hex.toString(16);
    while (str.length < 6) {
      str = '0' + str;
    }
    return '#' + str;
  } else if (colorFormat === 'CSS_RGB') {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  } else if (colorFormat === 'CSS_RGBA') {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  } else if (colorFormat === 'HEX') {
    return '0x' + color.hex.toString(16);
  } else if (colorFormat === 'RGB_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ']';
  } else if (colorFormat === 'RGBA_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ',' + a + ']';
  } else if (colorFormat === 'RGB_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + '}';
  } else if (colorFormat === 'RGBA_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
  } else if (colorFormat === 'HSV_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + '}';
  } else if (colorFormat === 'HSVA_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
  }
  return 'unknown format';
}

var ARR_EACH = Array.prototype.forEach;
var ARR_SLICE = Array.prototype.slice;
var Common = {
  BREAK: {},
  extend: function extend(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (!this.isUndefined(obj[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  defaults: function defaults(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (this.isUndefined(target[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  compose: function compose() {
    var toCall = ARR_SLICE.call(arguments);
    return function () {
      var args = ARR_SLICE.call(arguments);
      for (var i = toCall.length - 1; i >= 0; i--) {
        args = [toCall[i].apply(this, args)];
      }
      return args[0];
    };
  },
  each: function each(obj, itr, scope) {
    if (!obj) {
      return;
    }
    if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
      obj.forEach(itr, scope);
    } else if (obj.length === obj.length + 0) {
      var key = void 0;
      var l = void 0;
      for (key = 0, l = obj.length; key < l; key++) {
        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
          return;
        }
      }
    } else {
      for (var _key in obj) {
        if (itr.call(scope, obj[_key], _key) === this.BREAK) {
          return;
        }
      }
    }
  },
  defer: function defer(fnc) {
    setTimeout(fnc, 0);
  },
  debounce: function debounce(func, threshold, callImmediately) {
    var timeout = void 0;
    return function () {
      var obj = this;
      var args = arguments;
      function delayed() {
        timeout = null;
        if (!callImmediately) func.apply(obj, args);
      }
      var callNow = callImmediately || !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(delayed, threshold);
      if (callNow) {
        func.apply(obj, args);
      }
    };
  },
  toArray: function toArray(obj) {
    if (obj.toArray) return obj.toArray();
    return ARR_SLICE.call(obj);
  },
  isUndefined: function isUndefined(obj) {
    return obj === undefined;
  },
  isNull: function isNull(obj) {
    return obj === null;
  },
  isNaN: function (_isNaN) {
    function isNaN(_x) {
      return _isNaN.apply(this, arguments);
    }
    isNaN.toString = function () {
      return _isNaN.toString();
    };
    return isNaN;
  }(function (obj) {
    return isNaN(obj);
  }),
  isArray: Array.isArray || function (obj) {
    return obj.constructor === Array;
  },
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },
  isNumber: function isNumber(obj) {
    return obj === obj + 0;
  },
  isString: function isString(obj) {
    return obj === obj + '';
  },
  isBoolean: function isBoolean(obj) {
    return obj === false || obj === true;
  },
  isFunction: function isFunction(obj) {
    return obj instanceof Function;
  }
};

var INTERPRETATIONS = [
{
  litmus: Common.isString,
  conversions: {
    THREE_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
        };
      },
      write: colorToString
    },
    SIX_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9]{6})$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString(), 0)
        };
      },
      write: colorToString
    },
    CSS_RGB: {
      read: function read(original) {
        var test = original.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3])
        };
      },
      write: colorToString
    },
    CSS_RGBA: {
      read: function read(original) {
        var test = original.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3]),
          a: parseFloat(test[4])
        };
      },
      write: colorToString
    }
  }
},
{
  litmus: Common.isNumber,
  conversions: {
    HEX: {
      read: function read(original) {
        return {
          space: 'HEX',
          hex: original,
          conversionName: 'HEX'
        };
      },
      write: function write(color) {
        return color.hex;
      }
    }
  }
},
{
  litmus: Common.isArray,
  conversions: {
    RGB_ARRAY: {
      read: function read(original) {
        if (original.length !== 3) {
          return false;
        }
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b];
      }
    },
    RGBA_ARRAY: {
      read: function read(original) {
        if (original.length !== 4) return false;
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2],
          a: original[3]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b, color.a];
      }
    }
  }
},
{
  litmus: Common.isObject,
  conversions: {
    RGBA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b,
          a: color.a
        };
      }
    },
    RGB_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b
        };
      }
    },
    HSVA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v,
          a: color.a
        };
      }
    },
    HSV_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v
        };
      }
    }
  }
}];
var result = void 0;
var toReturn = void 0;
var interpret = function interpret() {
  toReturn = false;
  var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
  Common.each(INTERPRETATIONS, function (family) {
    if (family.litmus(original)) {
      Common.each(family.conversions, function (conversion, conversionName) {
        result = conversion.read(original);
        if (toReturn === false && result !== false) {
          toReturn = result;
          result.conversionName = conversionName;
          result.conversion = conversion;
          return Common.BREAK;
        }
      });
      return Common.BREAK;
    }
  });
  return toReturn;
};

var tmpComponent = void 0;
var ColorMath = {
  hsv_to_rgb: function hsv_to_rgb(h, s, v) {
    var hi = Math.floor(h / 60) % 6;
    var f = h / 60 - Math.floor(h / 60);
    var p = v * (1.0 - s);
    var q = v * (1.0 - f * s);
    var t = v * (1.0 - (1.0 - f) * s);
    var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
    return {
      r: c[0] * 255,
      g: c[1] * 255,
      b: c[2] * 255
    };
  },
  rgb_to_hsv: function rgb_to_hsv(r, g, b) {
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h = void 0;
    var s = void 0;
    if (max !== 0) {
      s = delta / max;
    } else {
      return {
        h: NaN,
        s: 0,
        v: 0
      };
    }
    if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else {
      h = 4 + (r - g) / delta;
    }
    h /= 6;
    if (h < 0) {
      h += 1;
    }
    return {
      h: h * 360,
      s: s,
      v: max / 255
    };
  },
  rgb_to_hex: function rgb_to_hex(r, g, b) {
    var hex = this.hex_with_component(0, 2, r);
    hex = this.hex_with_component(hex, 1, g);
    hex = this.hex_with_component(hex, 0, b);
    return hex;
  },
  component_from_hex: function component_from_hex(hex, componentIndex) {
    return hex >> componentIndex * 8 & 0xFF;
  },
  hex_with_component: function hex_with_component(hex, componentIndex, value) {
    return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Color = function () {
  function Color() {
    classCallCheck(this, Color);
    this.__state = interpret.apply(this, arguments);
    if (this.__state === false) {
      throw new Error('Failed to interpret color arguments');
    }
    this.__state.a = this.__state.a || 1;
  }
  createClass(Color, [{
    key: 'toString',
    value: function toString() {
      return colorToString(this);
    }
  }, {
    key: 'toHexString',
    value: function toHexString() {
      return colorToString(this, true);
    }
  }, {
    key: 'toOriginal',
    value: function toOriginal() {
      return this.__state.conversion.write(this);
    }
  }]);
  return Color;
}();
function defineRGBComponent(target, component, componentHexIndex) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'RGB') {
        return this.__state[component];
      }
      Color.recalculateRGB(this, component, componentHexIndex);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'RGB') {
        Color.recalculateRGB(this, component, componentHexIndex);
        this.__state.space = 'RGB';
      }
      this.__state[component] = v;
    }
  });
}
function defineHSVComponent(target, component) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'HSV') {
        return this.__state[component];
      }
      Color.recalculateHSV(this);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'HSV') {
        Color.recalculateHSV(this);
        this.__state.space = 'HSV';
      }
      this.__state[component] = v;
    }
  });
}
Color.recalculateRGB = function (color, component, componentHexIndex) {
  if (color.__state.space === 'HEX') {
    color.__state[component] = ColorMath.component_from_hex(color.__state.hex, componentHexIndex);
  } else if (color.__state.space === 'HSV') {
    Common.extend(color.__state, ColorMath.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
  } else {
    throw new Error('Corrupted color state');
  }
};
Color.recalculateHSV = function (color) {
  var result = ColorMath.rgb_to_hsv(color.r, color.g, color.b);
  Common.extend(color.__state, {
    s: result.s,
    v: result.v
  });
  if (!Common.isNaN(result.h)) {
    color.__state.h = result.h;
  } else if (Common.isUndefined(color.__state.h)) {
    color.__state.h = 0;
  }
};
Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
defineRGBComponent(Color.prototype, 'r', 2);
defineRGBComponent(Color.prototype, 'g', 1);
defineRGBComponent(Color.prototype, 'b', 0);
defineHSVComponent(Color.prototype, 'h');
defineHSVComponent(Color.prototype, 's');
defineHSVComponent(Color.prototype, 'v');
Object.defineProperty(Color.prototype, 'a', {
  get: function get$$1() {
    return this.__state.a;
  },
  set: function set$$1(v) {
    this.__state.a = v;
  }
});
Object.defineProperty(Color.prototype, 'hex', {
  get: function get$$1() {
    if (this.__state.space !== 'HEX') {
      this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
      this.__state.space = 'HEX';
    }
    return this.__state.hex;
  },
  set: function set$$1(v) {
    this.__state.space = 'HEX';
    this.__state.hex = v;
  }
});

var Controller = function () {
  function Controller(object, property) {
    classCallCheck(this, Controller);
    this.initialValue = object[property];
    this.domElement = document.createElement('div');
    this.object = object;
    this.property = property;
    this.__onChange = undefined;
    this.__onFinishChange = undefined;
  }
  createClass(Controller, [{
    key: 'onChange',
    value: function onChange(fnc) {
      this.__onChange = fnc;
      return this;
    }
  }, {
    key: 'onFinishChange',
    value: function onFinishChange(fnc) {
      this.__onFinishChange = fnc;
      return this;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      this.object[this.property] = newValue;
      if (this.__onChange) {
        this.__onChange.call(this, newValue);
      }
      this.updateDisplay();
      return this;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.object[this.property];
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      return this;
    }
  }, {
    key: 'isModified',
    value: function isModified() {
      return this.initialValue !== this.getValue();
    }
  }]);
  return Controller;
}();

var EVENT_MAP = {
  HTMLEvents: ['change'],
  MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
  KeyboardEvents: ['keydown']
};
var EVENT_MAP_INV = {};
Common.each(EVENT_MAP, function (v, k) {
  Common.each(v, function (e) {
    EVENT_MAP_INV[e] = k;
  });
});
var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
function cssValueToPixels(val) {
  if (val === '0' || Common.isUndefined(val)) {
    return 0;
  }
  var match = val.match(CSS_VALUE_PIXELS);
  if (!Common.isNull(match)) {
    return parseFloat(match[1]);
  }
  return 0;
}
var dom = {
  makeSelectable: function makeSelectable(elem, selectable) {
    if (elem === undefined || elem.style === undefined) return;
    elem.onselectstart = selectable ? function () {
      return false;
    } : function () {};
    elem.style.MozUserSelect = selectable ? 'auto' : 'none';
    elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
    elem.unselectable = selectable ? 'on' : 'off';
  },
  makeFullscreen: function makeFullscreen(elem, hor, vert) {
    var vertical = vert;
    var horizontal = hor;
    if (Common.isUndefined(horizontal)) {
      horizontal = true;
    }
    if (Common.isUndefined(vertical)) {
      vertical = true;
    }
    elem.style.position = 'absolute';
    if (horizontal) {
      elem.style.left = 0;
      elem.style.right = 0;
    }
    if (vertical) {
      elem.style.top = 0;
      elem.style.bottom = 0;
    }
  },
  fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
    var params = pars || {};
    var className = EVENT_MAP_INV[eventType];
    if (!className) {
      throw new Error('Event type ' + eventType + ' not supported.');
    }
    var evt = document.createEvent(className);
    switch (className) {
      case 'MouseEvents':
        {
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0,
          0,
          clientX,
          clientY,
          false, false, false, false, 0, null);
          break;
        }
      case 'KeyboardEvents':
        {
          var init = evt.initKeyboardEvent || evt.initKeyEvent;
          Common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
          break;
        }
      default:
        {
          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
          break;
        }
    }
    Common.defaults(evt, aux);
    elem.dispatchEvent(evt);
  },
  bind: function bind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.addEventListener) {
      elem.addEventListener(event, func, bool);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + event, func);
    }
    return dom;
  },
  unbind: function unbind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.removeEventListener) {
      elem.removeEventListener(event, func, bool);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + event, func);
    }
    return dom;
  },
  addClass: function addClass(elem, className) {
    if (elem.className === undefined) {
      elem.className = className;
    } else if (elem.className !== className) {
      var classes = elem.className.split(/ +/);
      if (classes.indexOf(className) === -1) {
        classes.push(className);
        elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
      }
    }
    return dom;
  },
  removeClass: function removeClass(elem, className) {
    if (className) {
      if (elem.className === className) {
        elem.removeAttribute('class');
      } else {
        var classes = elem.className.split(/ +/);
        var index = classes.indexOf(className);
        if (index !== -1) {
          classes.splice(index, 1);
          elem.className = classes.join(' ');
        }
      }
    } else {
      elem.className = undefined;
    }
    return dom;
  },
  hasClass: function hasClass(elem, className) {
    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
  },
  getWidth: function getWidth(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
  },
  getHeight: function getHeight(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
  },
  getOffset: function getOffset(el) {
    var elem = el;
    var offset = { left: 0, top: 0 };
    if (elem.offsetParent) {
      do {
        offset.left += elem.offsetLeft;
        offset.top += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    return offset;
  },
  isActive: function isActive(elem) {
    return elem === document.activeElement && (elem.type || elem.href);
  }
};

var BooleanController = function (_Controller) {
  inherits(BooleanController, _Controller);
  function BooleanController(object, property) {
    classCallCheck(this, BooleanController);
    var _this2 = possibleConstructorReturn(this, (BooleanController.__proto__ || Object.getPrototypeOf(BooleanController)).call(this, object, property));
    var _this = _this2;
    _this2.__prev = _this2.getValue();
    _this2.__checkbox = document.createElement('input');
    _this2.__checkbox.setAttribute('type', 'checkbox');
    function onChange() {
      _this.setValue(!_this.__prev);
    }
    dom.bind(_this2.__checkbox, 'change', onChange, false);
    _this2.domElement.appendChild(_this2.__checkbox);
    _this2.updateDisplay();
    return _this2;
  }
  createClass(BooleanController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      this.__prev = this.getValue();
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (this.getValue() === true) {
        this.__checkbox.setAttribute('checked', 'checked');
        this.__checkbox.checked = true;
        this.__prev = true;
      } else {
        this.__checkbox.checked = false;
        this.__prev = false;
      }
      return get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return BooleanController;
}(Controller);

var OptionController = function (_Controller) {
  inherits(OptionController, _Controller);
  function OptionController(object, property, opts) {
    classCallCheck(this, OptionController);
    var _this2 = possibleConstructorReturn(this, (OptionController.__proto__ || Object.getPrototypeOf(OptionController)).call(this, object, property));
    var options = opts;
    var _this = _this2;
    _this2.__select = document.createElement('select');
    if (Common.isArray(options)) {
      var map = {};
      Common.each(options, function (element) {
        map[element] = element;
      });
      options = map;
    }
    Common.each(options, function (value, key) {
      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);
    });
    _this2.updateDisplay();
    dom.bind(_this2.__select, 'change', function () {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });
    _this2.domElement.appendChild(_this2.__select);
    return _this2;
  }
  createClass(OptionController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (dom.isActive(this.__select)) return this;
      this.__select.value = this.getValue();
      return get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return OptionController;
}(Controller);

var StringController = function (_Controller) {
  inherits(StringController, _Controller);
  function StringController(object, property) {
    classCallCheck(this, StringController);
    var _this2 = possibleConstructorReturn(this, (StringController.__proto__ || Object.getPrototypeOf(StringController)).call(this, object, property));
    var _this = _this2;
    function onChange() {
      _this.setValue(_this.__input.value);
    }
    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'keyup', onChange);
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(StringController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (!dom.isActive(this.__input)) {
        this.__input.value = this.getValue();
      }
      return get(StringController.prototype.__proto__ || Object.getPrototypeOf(StringController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return StringController;
}(Controller);

function numDecimals(x) {
  var _x = x.toString();
  if (_x.indexOf('.') > -1) {
    return _x.length - _x.indexOf('.') - 1;
  }
  return 0;
}
var NumberController = function (_Controller) {
  inherits(NumberController, _Controller);
  function NumberController(object, property, params) {
    classCallCheck(this, NumberController);
    var _this = possibleConstructorReturn(this, (NumberController.__proto__ || Object.getPrototypeOf(NumberController)).call(this, object, property));
    var _params = params || {};
    _this.__min = _params.min;
    _this.__max = _params.max;
    _this.__step = _params.step;
    if (Common.isUndefined(_this.__step)) {
      if (_this.initialValue === 0) {
        _this.__impliedStep = 1;
      } else {
        _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
      }
    } else {
      _this.__impliedStep = _this.__step;
    }
    _this.__precision = numDecimals(_this.__impliedStep);
    return _this;
  }
  createClass(NumberController, [{
    key: 'setValue',
    value: function setValue(v) {
      var _v = v;
      if (this.__min !== undefined && _v < this.__min) {
        _v = this.__min;
      } else if (this.__max !== undefined && _v > this.__max) {
        _v = this.__max;
      }
      if (this.__step !== undefined && _v % this.__step !== 0) {
        _v = Math.round(_v / this.__step) * this.__step;
      }
      return get(NumberController.prototype.__proto__ || Object.getPrototypeOf(NumberController.prototype), 'setValue', this).call(this, _v);
    }
  }, {
    key: 'min',
    value: function min(minValue) {
      this.__min = minValue;
      return this;
    }
  }, {
    key: 'max',
    value: function max(maxValue) {
      this.__max = maxValue;
      return this;
    }
  }, {
    key: 'step',
    value: function step(stepValue) {
      this.__step = stepValue;
      this.__impliedStep = stepValue;
      this.__precision = numDecimals(stepValue);
      return this;
    }
  }]);
  return NumberController;
}(Controller);

function roundToDecimal(value, decimals) {
  var tenTo = Math.pow(10, decimals);
  return Math.round(value * tenTo) / tenTo;
}
var NumberControllerBox = function (_NumberController) {
  inherits(NumberControllerBox, _NumberController);
  function NumberControllerBox(object, property, params) {
    classCallCheck(this, NumberControllerBox);
    var _this2 = possibleConstructorReturn(this, (NumberControllerBox.__proto__ || Object.getPrototypeOf(NumberControllerBox)).call(this, object, property, params));
    _this2.__truncationSuspended = false;
    var _this = _this2;
    var prevY = void 0;
    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!Common.isNaN(attempted)) {
        _this.setValue(attempted);
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onBlur() {
      onFinish();
    }
    function onMouseDrag(e) {
      var diff = prevY - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
      prevY = e.clientY;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      onFinish();
    }
    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prevY = e.clientY;
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'mousedown', onMouseDown);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
        onFinish();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(NumberControllerBox, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
      return get(NumberControllerBox.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerBox;
}(NumberController);

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}
var NumberControllerSlider = function (_NumberController) {
  inherits(NumberControllerSlider, _NumberController);
  function NumberControllerSlider(object, property, min, max, step) {
    classCallCheck(this, NumberControllerSlider);
    var _this2 = possibleConstructorReturn(this, (NumberControllerSlider.__proto__ || Object.getPrototypeOf(NumberControllerSlider)).call(this, object, property, { min: min, max: max, step: step }));
    var _this = _this2;
    _this2.__background = document.createElement('div');
    _this2.__foreground = document.createElement('div');
    dom.bind(_this2.__background, 'mousedown', onMouseDown);
    dom.bind(_this2.__background, 'touchstart', onTouchStart);
    dom.addClass(_this2.__background, 'slider');
    dom.addClass(_this2.__foreground, 'slider-fg');
    function onMouseDown(e) {
      document.activeElement.blur();
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      onMouseDrag(e);
    }
    function onMouseDrag(e) {
      e.preventDefault();
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
      return false;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onTouchStart(e) {
      if (e.touches.length !== 1) {
        return;
      }
      dom.bind(window, 'touchmove', onTouchMove);
      dom.bind(window, 'touchend', onTouchEnd);
      onTouchMove(e);
    }
    function onTouchMove(e) {
      var clientX = e.touches[0].clientX;
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
    }
    function onTouchEnd() {
      dom.unbind(window, 'touchmove', onTouchMove);
      dom.unbind(window, 'touchend', onTouchEnd);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.updateDisplay();
    _this2.__background.appendChild(_this2.__foreground);
    _this2.domElement.appendChild(_this2.__background);
    return _this2;
  }
  createClass(NumberControllerSlider, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
      this.__foreground.style.width = pct * 100 + '%';
      return get(NumberControllerSlider.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerSlider;
}(NumberController);

var FunctionController = function (_Controller) {
  inherits(FunctionController, _Controller);
  function FunctionController(object, property, text) {
    classCallCheck(this, FunctionController);
    var _this2 = possibleConstructorReturn(this, (FunctionController.__proto__ || Object.getPrototypeOf(FunctionController)).call(this, object, property));
    var _this = _this2;
    _this2.__button = document.createElement('div');
    _this2.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(_this2.__button, 'click', function (e) {
      e.preventDefault();
      _this.fire();
      return false;
    });
    dom.addClass(_this2.__button, 'button');
    _this2.domElement.appendChild(_this2.__button);
    return _this2;
  }
  createClass(FunctionController, [{
    key: 'fire',
    value: function fire() {
      if (this.__onChange) {
        this.__onChange.call(this);
      }
      this.getValue().call(this.object);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
    }
  }]);
  return FunctionController;
}(Controller);

var ColorController = function (_Controller) {
  inherits(ColorController, _Controller);
  function ColorController(object, property) {
    classCallCheck(this, ColorController);
    var _this2 = possibleConstructorReturn(this, (ColorController.__proto__ || Object.getPrototypeOf(ColorController)).call(this, object, property));
    _this2.__color = new Color(_this2.getValue());
    _this2.__temp = new Color(0);
    var _this = _this2;
    _this2.domElement = document.createElement('div');
    dom.makeSelectable(_this2.domElement, false);
    _this2.__selector = document.createElement('div');
    _this2.__selector.className = 'selector';
    _this2.__saturation_field = document.createElement('div');
    _this2.__saturation_field.className = 'saturation-field';
    _this2.__field_knob = document.createElement('div');
    _this2.__field_knob.className = 'field-knob';
    _this2.__field_knob_border = '2px solid ';
    _this2.__hue_knob = document.createElement('div');
    _this2.__hue_knob.className = 'hue-knob';
    _this2.__hue_field = document.createElement('div');
    _this2.__hue_field.className = 'hue-field';
    _this2.__input = document.createElement('input');
    _this2.__input.type = 'text';
    _this2.__input_textShadow = '0 1px 1px ';
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        onBlur.call(this);
      }
    });
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__selector, 'mousedown', function () {
      dom.addClass(this, 'drag').bind(window, 'mouseup', function () {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    dom.bind(_this2.__selector, 'touchstart', function () {
      dom.addClass(this, 'drag').bind(window, 'touchend', function () {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    var valueField = document.createElement('div');
    Common.extend(_this2.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });
    Common.extend(_this2.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    Common.extend(_this2.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });
    Common.extend(_this2.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });
    Common.extend(valueField.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
    Common.extend(_this2.__hue_field.style, {
      width: '15px',
      height: '100px',
      border: '1px solid #555',
      cursor: 'ns-resize',
      position: 'absolute',
      top: '3px',
      right: '3px'
    });
    hueGradient(_this2.__hue_field);
    Common.extend(_this2.__input.style, {
      outline: 'none',
      textAlign: 'center',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
    });
    dom.bind(_this2.__saturation_field, 'mousedown', fieldDown);
    dom.bind(_this2.__saturation_field, 'touchstart', fieldDown);
    dom.bind(_this2.__field_knob, 'mousedown', fieldDown);
    dom.bind(_this2.__field_knob, 'touchstart', fieldDown);
    dom.bind(_this2.__hue_field, 'mousedown', fieldDownH);
    dom.bind(_this2.__hue_field, 'touchstart', fieldDownH);
    function fieldDown(e) {
      setSV(e);
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'touchmove', setSV);
      dom.bind(window, 'mouseup', fieldUpSV);
      dom.bind(window, 'touchend', fieldUpSV);
    }
    function fieldDownH(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'touchmove', setH);
      dom.bind(window, 'mouseup', fieldUpH);
      dom.bind(window, 'touchend', fieldUpH);
    }
    function fieldUpSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'touchmove', setSV);
      dom.unbind(window, 'mouseup', fieldUpSV);
      dom.unbind(window, 'touchend', fieldUpSV);
      onFinish();
    }
    function fieldUpH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'touchmove', setH);
      dom.unbind(window, 'mouseup', fieldUpH);
      dom.unbind(window, 'touchend', fieldUpH);
      onFinish();
    }
    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.__color.toOriginal());
      }
    }
    _this2.__saturation_field.appendChild(valueField);
    _this2.__selector.appendChild(_this2.__field_knob);
    _this2.__selector.appendChild(_this2.__saturation_field);
    _this2.__selector.appendChild(_this2.__hue_field);
    _this2.__hue_field.appendChild(_this2.__hue_knob);
    _this2.domElement.appendChild(_this2.__input);
    _this2.domElement.appendChild(_this2.__selector);
    _this2.updateDisplay();
    function setSV(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__saturation_field.getBoundingClientRect();
      var _ref = e.touches && e.touches[0] || e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;
      var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
      var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (v > 1) {
        v = 1;
      } else if (v < 0) {
        v = 0;
      }
      if (s > 1) {
        s = 1;
      } else if (s < 0) {
        s = 0;
      }
      _this.__color.v = v;
      _this.__color.s = s;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    function setH(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__hue_field.getBoundingClientRect();
      var _ref2 = e.touches && e.touches[0] || e,
          clientY = _ref2.clientY;
      var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (h > 1) {
        h = 1;
      } else if (h < 0) {
        h = 0;
      }
      _this.__color.h = h * 360;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    return _this2;
  }
  createClass(ColorController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var i = interpret(this.getValue());
      if (i !== false) {
        var mismatch = false;
        Common.each(Color.COMPONENTS, function (component) {
          if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
            mismatch = true;
            return {};
          }
        }, this);
        if (mismatch) {
          Common.extend(this.__color.__state, i);
        }
      }
      Common.extend(this.__temp.__state, this.__color.__state);
      this.__temp.a = 1;
      var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
      var _flip = 255 - flip;
      Common.extend(this.__field_knob.style, {
        marginLeft: 100 * this.__color.s - 7 + 'px',
        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
        backgroundColor: this.__temp.toHexString(),
        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
      });
      this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
      this.__temp.s = 1;
      this.__temp.v = 1;
      linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());
      this.__input.value = this.__color.toString();
      Common.extend(this.__input.style, {
        backgroundColor: this.__color.toHexString(),
        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
      });
    }
  }]);
  return ColorController;
}(Controller);
var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
function linearGradient(elem, x, a, b) {
  elem.style.background = '';
  Common.each(vendors, function (vendor) {
    elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
  });
}
function hueGradient(elem) {
  elem.style.background = '';
  elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
  elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
}

var css = {
  load: function load(url, indoc) {
    var doc = indoc || document;
    var link = doc.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    doc.getElementsByTagName('head')[0].appendChild(link);
  },
  inject: function inject(cssContent, indoc) {
    var doc = indoc || document;
    var injected = document.createElement('style');
    injected.type = 'text/css';
    injected.innerHTML = cssContent;
    var head = doc.getElementsByTagName('head')[0];
    try {
      head.appendChild(injected);
    } catch (e) {
    }
  }
};

var saveDialogContents = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

var ControllerFactory = function ControllerFactory(object, property) {
  var initialValue = object[property];
  if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) {
    return new OptionController(object, property, arguments[2]);
  }
  if (Common.isNumber(initialValue)) {
    if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
      if (Common.isNumber(arguments[4])) {
        return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
      }
      return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
    }
    if (Common.isNumber(arguments[4])) {
      return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
    }
    return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });
  }
  if (Common.isString(initialValue)) {
    return new StringController(object, property);
  }
  if (Common.isFunction(initialValue)) {
    return new FunctionController(object, property, '');
  }
  if (Common.isBoolean(initialValue)) {
    return new BooleanController(object, property);
  }
  return null;
};

function requestAnimationFrame(callback) {
  setTimeout(callback, 1000 / 60);
}
var requestAnimationFrame$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;

var CenteredDiv = function () {
  function CenteredDiv() {
    classCallCheck(this, CenteredDiv);
    this.backgroundElement = document.createElement('div');
    Common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear',
      transition: 'opacity 0.2s linear'
    });
    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';
    this.domElement = document.createElement('div');
    Common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
      transition: 'transform 0.2s ease-out, opacity 0.2s linear'
    });
    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);
    var _this = this;
    dom.bind(this.backgroundElement, 'click', function () {
      _this.hide();
    });
  }
  createClass(CenteredDiv, [{
    key: 'show',
    value: function show() {
      var _this = this;
      this.backgroundElement.style.display = 'block';
      this.domElement.style.display = 'block';
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
      this.layout();
      Common.defer(function () {
        _this.backgroundElement.style.opacity = 1;
        _this.domElement.style.opacity = 1;
        _this.domElement.style.webkitTransform = 'scale(1)';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this = this;
      var hide = function hide() {
        _this.domElement.style.display = 'none';
        _this.backgroundElement.style.display = 'none';
        dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
        dom.unbind(_this.domElement, 'transitionend', hide);
        dom.unbind(_this.domElement, 'oTransitionEnd', hide);
      };
      dom.bind(this.domElement, 'webkitTransitionEnd', hide);
      dom.bind(this.domElement, 'transitionend', hide);
      dom.bind(this.domElement, 'oTransitionEnd', hide);
      this.backgroundElement.style.opacity = 0;
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
      this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
    }
  }]);
  return CenteredDiv;
}();

var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

css.inject(styleSheet);
var CSS_NAMESPACE = 'dg';
var HIDE_KEY_CODE = 72;
var CLOSE_BUTTON_HEIGHT = 20;
var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
var SUPPORTS_LOCAL_STORAGE = function () {
  try {
    return !!window.localStorage;
  } catch (e) {
    return false;
  }
}();
var SAVE_DIALOGUE = void 0;
var autoPlaceVirgin = true;
var autoPlaceContainer = void 0;
var hide = false;
var hideableGuis = [];
var GUI = function GUI(pars) {
  var _this = this;
  var params = pars || {};
  this.domElement = document.createElement('div');
  this.__ul = document.createElement('ul');
  this.domElement.appendChild(this.__ul);
  dom.addClass(this.domElement, CSS_NAMESPACE);
  this.__folders = {};
  this.__controllers = [];
  this.__rememberedObjects = [];
  this.__rememberedObjectIndecesToControllers = [];
  this.__listening = [];
  params = Common.defaults(params, {
    closeOnTop: false,
    autoPlace: true,
    width: GUI.DEFAULT_WIDTH
  });
  params = Common.defaults(params, {
    resizable: params.autoPlace,
    hideable: params.autoPlace
  });
  if (!Common.isUndefined(params.load)) {
    if (params.preset) {
      params.load.preset = params.preset;
    }
  } else {
    params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
  }
  if (Common.isUndefined(params.parent) && params.hideable) {
    hideableGuis.push(this);
  }
  params.resizable = Common.isUndefined(params.parent) && params.resizable;
  if (params.autoPlace && Common.isUndefined(params.scrollable)) {
    params.scrollable = true;
  }
  var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
  var saveToLocalStorage = void 0;
  var titleRow = void 0;
  Object.defineProperties(this,
  {
    parent: {
      get: function get$$1() {
        return params.parent;
      }
    },
    scrollable: {
      get: function get$$1() {
        return params.scrollable;
      }
    },
    autoPlace: {
      get: function get$$1() {
        return params.autoPlace;
      }
    },
    closeOnTop: {
      get: function get$$1() {
        return params.closeOnTop;
      }
    },
    preset: {
      get: function get$$1() {
        if (_this.parent) {
          return _this.getRoot().preset;
        }
        return params.load.preset;
      },
      set: function set$$1(v) {
        if (_this.parent) {
          _this.getRoot().preset = v;
        } else {
          params.load.preset = v;
        }
        setPresetSelectIndex(this);
        _this.revert();
      }
    },
    width: {
      get: function get$$1() {
        return params.width;
      },
      set: function set$$1(v) {
        params.width = v;
        setWidth(_this, v);
      }
    },
    name: {
      get: function get$$1() {
        return params.name;
      },
      set: function set$$1(v) {
        params.name = v;
        if (titleRow) {
          titleRow.innerHTML = params.name;
        }
      }
    },
    closed: {
      get: function get$$1() {
        return params.closed;
      },
      set: function set$$1(v) {
        params.closed = v;
        if (params.closed) {
          dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
        } else {
          dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
        }
        this.onResize();
        if (_this.__closeButton) {
          _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
        }
      }
    },
    load: {
      get: function get$$1() {
        return params.load;
      }
    },
    useLocalStorage: {
      get: function get$$1() {
        return useLocalStorage;
      },
      set: function set$$1(bool) {
        if (SUPPORTS_LOCAL_STORAGE) {
          useLocalStorage = bool;
          if (bool) {
            dom.bind(window, 'unload', saveToLocalStorage);
          } else {
            dom.unbind(window, 'unload', saveToLocalStorage);
          }
          localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
        }
      }
    }
  });
  if (Common.isUndefined(params.parent)) {
    this.closed = params.closed || false;
    dom.addClass(this.domElement, GUI.CLASS_MAIN);
    dom.makeSelectable(this.domElement, false);
    if (SUPPORTS_LOCAL_STORAGE) {
      if (useLocalStorage) {
        _this.useLocalStorage = true;
        var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
        if (savedGui) {
          params.load = JSON.parse(savedGui);
        }
      }
    }
    this.__closeButton = document.createElement('div');
    this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
    dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
    if (params.closeOnTop) {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
      this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
    } else {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
      this.domElement.appendChild(this.__closeButton);
    }
    dom.bind(this.__closeButton, 'click', function () {
      _this.closed = !_this.closed;
    });
  } else {
    if (params.closed === undefined) {
      params.closed = true;
    }
    var titleRowName = document.createTextNode(params.name);
    dom.addClass(titleRowName, 'controller-name');
    titleRow = addRow(_this, titleRowName);
    var onClickTitle = function onClickTitle(e) {
      e.preventDefault();
      _this.closed = !_this.closed;
      return false;
    };
    dom.addClass(this.__ul, GUI.CLASS_CLOSED);
    dom.addClass(titleRow, 'title');
    dom.bind(titleRow, 'click', onClickTitle);
    if (!params.closed) {
      this.closed = false;
    }
  }
  if (params.autoPlace) {
    if (Common.isUndefined(params.parent)) {
      if (autoPlaceVirgin) {
        autoPlaceContainer = document.createElement('div');
        dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
        dom.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
        document.body.appendChild(autoPlaceContainer);
        autoPlaceVirgin = false;
      }
      autoPlaceContainer.appendChild(this.domElement);
      dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
    }
    if (!this.parent) {
      setWidth(_this, params.width);
    }
  }
  this.__resizeHandler = function () {
    _this.onResizeDebounced();
  };
  dom.bind(window, 'resize', this.__resizeHandler);
  dom.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
  dom.bind(this.__ul, 'transitionend', this.__resizeHandler);
  dom.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
  this.onResize();
  if (params.resizable) {
    addResizeHandle(this);
  }
  saveToLocalStorage = function saveToLocalStorage() {
    if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }
  };
  this.saveToLocalStorageIfPossible = saveToLocalStorage;
  function resetWidth() {
    var root = _this.getRoot();
    root.width += 1;
    Common.defer(function () {
      root.width -= 1;
    });
  }
  if (!params.parent) {
    resetWidth();
  }
};
GUI.toggleHide = function () {
  hide = !hide;
  Common.each(hideableGuis, function (gui) {
    gui.domElement.style.display = hide ? 'none' : '';
  });
};
GUI.CLASS_AUTO_PLACE = 'a';
GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
GUI.CLASS_MAIN = 'main';
GUI.CLASS_CONTROLLER_ROW = 'cr';
GUI.CLASS_TOO_TALL = 'taller-than-window';
GUI.CLASS_CLOSED = 'closed';
GUI.CLASS_CLOSE_BUTTON = 'close-button';
GUI.CLASS_CLOSE_TOP = 'close-top';
GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
GUI.CLASS_DRAG = 'drag';
GUI.DEFAULT_WIDTH = 245;
GUI.TEXT_CLOSED = 'Close Controls';
GUI.TEXT_OPEN = 'Open Controls';
GUI._keydownHandler = function (e) {
  if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
    GUI.toggleHide();
  }
};
dom.bind(window, 'keydown', GUI._keydownHandler, false);
Common.extend(GUI.prototype,
{
  add: function add(object, property) {
    return _add(this, object, property, {
      factoryArgs: Array.prototype.slice.call(arguments, 2)
    });
  },
  addColor: function addColor(object, property) {
    return _add(this, object, property, {
      color: true
    });
  },
  remove: function remove(controller) {
    this.__ul.removeChild(controller.__li);
    this.__controllers.splice(this.__controllers.indexOf(controller), 1);
    var _this = this;
    Common.defer(function () {
      _this.onResize();
    });
  },
  destroy: function destroy() {
    if (this.parent) {
      throw new Error('Only the root GUI should be removed with .destroy(). ' + 'For subfolders, use gui.removeFolder(folder) instead.');
    }
    if (this.autoPlace) {
      autoPlaceContainer.removeChild(this.domElement);
    }
    var _this = this;
    Common.each(this.__folders, function (subfolder) {
      _this.removeFolder(subfolder);
    });
    dom.unbind(window, 'keydown', GUI._keydownHandler, false);
    removeListeners(this);
  },
  addFolder: function addFolder(name) {
    if (this.__folders[name] !== undefined) {
      throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
    }
    var newGuiParams = { name: name, parent: this };
    newGuiParams.autoPlace = this.autoPlace;
    if (this.load &&
    this.load.folders &&
    this.load.folders[name]) {
      newGuiParams.closed = this.load.folders[name].closed;
      newGuiParams.load = this.load.folders[name];
    }
    var gui = new GUI(newGuiParams);
    this.__folders[name] = gui;
    var li = addRow(this, gui.domElement);
    dom.addClass(li, 'folder');
    return gui;
  },
  removeFolder: function removeFolder(folder) {
    this.__ul.removeChild(folder.domElement.parentElement);
    delete this.__folders[folder.name];
    if (this.load &&
    this.load.folders &&
    this.load.folders[folder.name]) {
      delete this.load.folders[folder.name];
    }
    removeListeners(folder);
    var _this = this;
    Common.each(folder.__folders, function (subfolder) {
      folder.removeFolder(subfolder);
    });
    Common.defer(function () {
      _this.onResize();
    });
  },
  open: function open() {
    this.closed = false;
  },
  close: function close() {
    this.closed = true;
  },
  hide: function hide() {
    this.domElement.style.display = 'none';
  },
  show: function show() {
    this.domElement.style.display = '';
  },
  onResize: function onResize() {
    var root = this.getRoot();
    if (root.scrollable) {
      var top = dom.getOffset(root.__ul).top;
      var h = 0;
      Common.each(root.__ul.childNodes, function (node) {
        if (!(root.autoPlace && node === root.__save_row)) {
          h += dom.getHeight(node);
        }
      });
      if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
        dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
      } else {
        dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = 'auto';
      }
    }
    if (root.__resize_handle) {
      Common.defer(function () {
        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
      });
    }
    if (root.__closeButton) {
      root.__closeButton.style.width = root.width + 'px';
    }
  },
  onResizeDebounced: Common.debounce(function () {
    this.onResize();
  }, 50),
  remember: function remember() {
    if (Common.isUndefined(SAVE_DIALOGUE)) {
      SAVE_DIALOGUE = new CenteredDiv();
      SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
    }
    if (this.parent) {
      throw new Error('You can only call remember on a top level GUI.');
    }
    var _this = this;
    Common.each(Array.prototype.slice.call(arguments), function (object) {
      if (_this.__rememberedObjects.length === 0) {
        addSaveMenu(_this);
      }
      if (_this.__rememberedObjects.indexOf(object) === -1) {
        _this.__rememberedObjects.push(object);
      }
    });
    if (this.autoPlace) {
      setWidth(this, this.width);
    }
  },
  getRoot: function getRoot() {
    var gui = this;
    while (gui.parent) {
      gui = gui.parent;
    }
    return gui;
  },
  getSaveObject: function getSaveObject() {
    var toReturn = this.load;
    toReturn.closed = this.closed;
    if (this.__rememberedObjects.length > 0) {
      toReturn.preset = this.preset;
      if (!toReturn.remembered) {
        toReturn.remembered = {};
      }
      toReturn.remembered[this.preset] = getCurrentPreset(this);
    }
    toReturn.folders = {};
    Common.each(this.__folders, function (element, key) {
      toReturn.folders[key] = element.getSaveObject();
    });
    return toReturn;
  },
  save: function save() {
    if (!this.load.remembered) {
      this.load.remembered = {};
    }
    this.load.remembered[this.preset] = getCurrentPreset(this);
    markPresetModified(this, false);
    this.saveToLocalStorageIfPossible();
  },
  saveAs: function saveAs(presetName) {
    if (!this.load.remembered) {
      this.load.remembered = {};
      this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
    }
    this.load.remembered[presetName] = getCurrentPreset(this);
    this.preset = presetName;
    addPresetOption(this, presetName, true);
    this.saveToLocalStorageIfPossible();
  },
  revert: function revert(gui) {
    Common.each(this.__controllers, function (controller) {
      if (!this.getRoot().load.remembered) {
        controller.setValue(controller.initialValue);
      } else {
        recallSavedValue(gui || this.getRoot(), controller);
      }
      if (controller.__onFinishChange) {
        controller.__onFinishChange.call(controller, controller.getValue());
      }
    }, this);
    Common.each(this.__folders, function (folder) {
      folder.revert(folder);
    });
    if (!gui) {
      markPresetModified(this.getRoot(), false);
    }
  },
  listen: function listen(controller) {
    var init = this.__listening.length === 0;
    this.__listening.push(controller);
    if (init) {
      updateDisplays(this.__listening);
    }
  },
  updateDisplay: function updateDisplay() {
    Common.each(this.__controllers, function (controller) {
      controller.updateDisplay();
    });
    Common.each(this.__folders, function (folder) {
      folder.updateDisplay();
    });
  }
});
function addRow(gui, newDom, liBefore) {
  var li = document.createElement('li');
  if (newDom) {
    li.appendChild(newDom);
  }
  if (liBefore) {
    gui.__ul.insertBefore(li, liBefore);
  } else {
    gui.__ul.appendChild(li);
  }
  gui.onResize();
  return li;
}
function removeListeners(gui) {
  dom.unbind(window, 'resize', gui.__resizeHandler);
  if (gui.saveToLocalStorageIfPossible) {
    dom.unbind(window, 'unload', gui.saveToLocalStorageIfPossible);
  }
}
function markPresetModified(gui, modified) {
  var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
  if (modified) {
    opt.innerHTML = opt.value + '*';
  } else {
    opt.innerHTML = opt.value;
  }
}
function augmentController(gui, li, controller) {
  controller.__li = li;
  controller.__gui = gui;
  Common.extend(controller, {
    options: function options(_options) {
      if (arguments.length > 1) {
        var nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: nextSibling,
          factoryArgs: [Common.toArray(arguments)]
        });
      }
      if (Common.isArray(_options) || Common.isObject(_options)) {
        var _nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: _nextSibling,
          factoryArgs: [_options]
        });
      }
    },
    name: function name(_name) {
      controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
      return controller;
    },
    listen: function listen() {
      controller.__gui.listen(controller);
      return controller;
    },
    remove: function remove() {
      controller.__gui.remove(controller);
      return controller;
    }
  });
  if (controller instanceof NumberControllerSlider) {
    var box = new NumberControllerBox(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });
    Common.each(['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'], function (method) {
      var pc = controller[method];
      var pb = box[method];
      controller[method] = box[method] = function () {
        var args = Array.prototype.slice.call(arguments);
        pb.apply(box, args);
        return pc.apply(controller, args);
      };
    });
    dom.addClass(li, 'has-slider');
    controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
  } else if (controller instanceof NumberControllerBox) {
    var r = function r(returned) {
      if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
        var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
        var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
        controller.remove();
        var newController = _add(gui, controller.object, controller.property, {
          before: controller.__li.nextElementSibling,
          factoryArgs: [controller.__min, controller.__max, controller.__step]
        });
        newController.name(oldName);
        if (wasListening) newController.listen();
        return newController;
      }
      return returned;
    };
    controller.min = Common.compose(r, controller.min);
    controller.max = Common.compose(r, controller.max);
  } else if (controller instanceof BooleanController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__checkbox, 'click');
    });
    dom.bind(controller.__checkbox, 'click', function (e) {
      e.stopPropagation();
    });
  } else if (controller instanceof FunctionController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__button, 'click');
    });
    dom.bind(li, 'mouseover', function () {
      dom.addClass(controller.__button, 'hover');
    });
    dom.bind(li, 'mouseout', function () {
      dom.removeClass(controller.__button, 'hover');
    });
  } else if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
    controller.updateDisplay = Common.compose(function (val) {
      li.style.borderLeftColor = controller.__color.toString();
      return val;
    }, controller.updateDisplay);
    controller.updateDisplay();
  }
  controller.setValue = Common.compose(function (val) {
    if (gui.getRoot().__preset_select && controller.isModified()) {
      markPresetModified(gui.getRoot(), true);
    }
    return val;
  }, controller.setValue);
}
function recallSavedValue(gui, controller) {
  var root = gui.getRoot();
  var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
  if (matchedIndex !== -1) {
    var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
    if (controllerMap === undefined) {
      controllerMap = {};
      root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
    }
    controllerMap[controller.property] = controller;
    if (root.load && root.load.remembered) {
      var presetMap = root.load.remembered;
      var preset = void 0;
      if (presetMap[gui.preset]) {
        preset = presetMap[gui.preset];
      } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
        preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
      } else {
        return;
      }
      if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
        var value = preset[matchedIndex][controller.property];
        controller.initialValue = value;
        controller.setValue(value);
      }
    }
  }
}
function _add(gui, object, property, params) {
  if (object[property] === undefined) {
    throw new Error('Object "' + object + '" has no property "' + property + '"');
  }
  var controller = void 0;
  if (params.color) {
    controller = new ColorController(object, property);
  } else {
    var factoryArgs = [object, property].concat(params.factoryArgs);
    controller = ControllerFactory.apply(gui, factoryArgs);
  }
  if (params.before instanceof Controller) {
    params.before = params.before.__li;
  }
  recallSavedValue(gui, controller);
  dom.addClass(controller.domElement, 'c');
  var name = document.createElement('span');
  dom.addClass(name, 'property-name');
  name.innerHTML = controller.property;
  var container = document.createElement('div');
  container.appendChild(name);
  container.appendChild(controller.domElement);
  var li = addRow(gui, container, params.before);
  dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
  if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
  } else {
    dom.addClass(li, _typeof(controller.getValue()));
  }
  augmentController(gui, li, controller);
  gui.__controllers.push(controller);
  return controller;
}
function getLocalStorageHash(gui, key) {
  return document.location.href + '.' + key;
}
function addPresetOption(gui, name, setSelected) {
  var opt = document.createElement('option');
  opt.innerHTML = name;
  opt.value = name;
  gui.__preset_select.appendChild(opt);
  if (setSelected) {
    gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
  }
}
function showHideExplain(gui, explain) {
  explain.style.display = gui.useLocalStorage ? 'block' : 'none';
}
function addSaveMenu(gui) {
  var div = gui.__save_row = document.createElement('li');
  dom.addClass(gui.domElement, 'has-save');
  gui.__ul.insertBefore(div, gui.__ul.firstChild);
  dom.addClass(div, 'save-row');
  var gears = document.createElement('span');
  gears.innerHTML = '&nbsp;';
  dom.addClass(gears, 'button gears');
  var button = document.createElement('span');
  button.innerHTML = 'Save';
  dom.addClass(button, 'button');
  dom.addClass(button, 'save');
  var button2 = document.createElement('span');
  button2.innerHTML = 'New';
  dom.addClass(button2, 'button');
  dom.addClass(button2, 'save-as');
  var button3 = document.createElement('span');
  button3.innerHTML = 'Revert';
  dom.addClass(button3, 'button');
  dom.addClass(button3, 'revert');
  var select = gui.__preset_select = document.createElement('select');
  if (gui.load && gui.load.remembered) {
    Common.each(gui.load.remembered, function (value, key) {
      addPresetOption(gui, key, key === gui.preset);
    });
  } else {
    addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
  }
  dom.bind(select, 'change', function () {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
    }
    gui.preset = this.value;
  });
  div.appendChild(select);
  div.appendChild(gears);
  div.appendChild(button);
  div.appendChild(button2);
  div.appendChild(button3);
  if (SUPPORTS_LOCAL_STORAGE) {
    var explain = document.getElementById('dg-local-explain');
    var localStorageCheckBox = document.getElementById('dg-local-storage');
    var saveLocally = document.getElementById('dg-save-locally');
    saveLocally.style.display = 'block';
    if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
      localStorageCheckBox.setAttribute('checked', 'checked');
    }
    showHideExplain(gui, explain);
    dom.bind(localStorageCheckBox, 'change', function () {
      gui.useLocalStorage = !gui.useLocalStorage;
      showHideExplain(gui, explain);
    });
  }
  var newConstructorTextArea = document.getElementById('dg-new-constructor');
  dom.bind(newConstructorTextArea, 'keydown', function (e) {
    if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
      SAVE_DIALOGUE.hide();
    }
  });
  dom.bind(gears, 'click', function () {
    newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
    SAVE_DIALOGUE.show();
    newConstructorTextArea.focus();
    newConstructorTextArea.select();
  });
  dom.bind(button, 'click', function () {
    gui.save();
  });
  dom.bind(button2, 'click', function () {
    var presetName = prompt('Enter a new preset name.');
    if (presetName) {
      gui.saveAs(presetName);
    }
  });
  dom.bind(button3, 'click', function () {
    gui.revert();
  });
}
function addResizeHandle(gui) {
  var pmouseX = void 0;
  gui.__resize_handle = document.createElement('div');
  Common.extend(gui.__resize_handle.style, {
    width: '6px',
    marginLeft: '-3px',
    height: '200px',
    cursor: 'ew-resize',
    position: 'absolute'
  });
  function drag(e) {
    e.preventDefault();
    gui.width += pmouseX - e.clientX;
    gui.onResize();
    pmouseX = e.clientX;
    return false;
  }
  function dragStop() {
    dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.unbind(window, 'mousemove', drag);
    dom.unbind(window, 'mouseup', dragStop);
  }
  function dragStart(e) {
    e.preventDefault();
    pmouseX = e.clientX;
    dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.bind(window, 'mousemove', drag);
    dom.bind(window, 'mouseup', dragStop);
    return false;
  }
  dom.bind(gui.__resize_handle, 'mousedown', dragStart);
  dom.bind(gui.__closeButton, 'mousedown', dragStart);
  gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
}
function setWidth(gui, w) {
  gui.domElement.style.width = w + 'px';
  if (gui.__save_row && gui.autoPlace) {
    gui.__save_row.style.width = w + 'px';
  }
  if (gui.__closeButton) {
    gui.__closeButton.style.width = w + 'px';
  }
}
function getCurrentPreset(gui, useInitialValues) {
  var toReturn = {};
  Common.each(gui.__rememberedObjects, function (val, index) {
    var savedValues = {};
    var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
    Common.each(controllerMap, function (controller, property) {
      savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
    });
    toReturn[index] = savedValues;
  });
  return toReturn;
}
function setPresetSelectIndex(gui) {
  for (var index = 0; index < gui.__preset_select.length; index++) {
    if (gui.__preset_select[index].value === gui.preset) {
      gui.__preset_select.selectedIndex = index;
    }
  }
}
function updateDisplays(controllerArray) {
  if (controllerArray.length !== 0) {
    requestAnimationFrame$1.call(window, function () {
      updateDisplays(controllerArray);
    });
  }
  Common.each(controllerArray, function (c) {
    c.updateDisplay();
  });
}

var color = {
  Color: Color,
  math: ColorMath,
  interpret: interpret
};
var controllers = {
  Controller: Controller,
  BooleanController: BooleanController,
  OptionController: OptionController,
  StringController: StringController,
  NumberController: NumberController,
  NumberControllerBox: NumberControllerBox,
  NumberControllerSlider: NumberControllerSlider,
  FunctionController: FunctionController,
  ColorController: ColorController
};
var dom$1 = { dom: dom };
var gui = { GUI: GUI };
var GUI$1 = GUI;
var index = {
  color: color,
  controllers: controllers,
  dom: dom$1,
  gui: gui,
  GUI: GUI$1
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
//# sourceMappingURL=dat.gui.module.js.map


/***/ }),

/***/ "./src/light/pointLightCluster/PassLightClusters.wgsl":
/*!************************************************************!*\
  !*** ./src/light/pointLightCluster/PassLightClusters.wgsl ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_SYSTEM_UNIFORMS\r\n@group(1) @binding(0) var<storage> pointLight_Clusters : PointLight_Clusters;\r\n\r\nfn pointLight_testSphereAABB(light:u32,  tile:u32) -> bool {\r\n   // 라이트와 타일의 정보를 한 번만 획득합니다.\r\n   let targetLight = pointLightList.lights[light];\r\n   let targetTile = pointLight_Clusters.cubeList[tile];\r\n\r\n   // 라이트의 반지름과 위치를 획득하고, 위치는 World Space에서 View Space로 변환합니다.\r\n   let radius:f32 = targetLight.radius;\r\n   let position:vec3<f32> = targetLight.position;\r\n   let center:vec3<f32> = (systemUniforms.cameraMatrix *  vec4<f32>(position, 1.0)).xyz;\r\n\r\n   // AABB와 라이트 사이의 제곱 거리를 계산합니다.\r\n   let squaredDistance:f32 = pointLight_sqDistPointAABB(center, tile, targetTile.minAABB.xyz, targetTile.maxAABB.xyz);\r\n\r\n   return squaredDistance <= (radius * radius);\r\n}\r\n\r\nfn pointLight_sqDistPointAABB(targetPoint:vec3<f32>, tile:u32, minAABB:vec3<f32>, maxAABB:vec3<f32>) -> f32 {\r\n    var sqDist = 0.0;\r\n    for(var i = 0u; i < 3u; i = i + 1u) {\r\n      // 해당 축에 대한 좌표를 하나씩 확인합니다.\r\n      let v = targetPoint[i];\r\n      let _minAABB = minAABB[i];\r\n      let _maxAABB = maxAABB[i];\r\n\r\n      if(v < _minAABB){\r\n        sqDist +=  (_minAABB - v) * (_minAABB - v);\r\n      }\r\n      if(v > _maxAABB){\r\n        sqDist += (v - _maxAABB) * (v - _maxAABB);\r\n      }\r\n    }\r\n\r\n    return sqDist;\r\n}\r\n\r\n@compute @workgroup_size(REDGPU_DEFINE_WORKGROUP_SIZE_X,REDGPU_DEFINE_WORKGROUP_SIZE_Y, REDGPU_DEFINE_WORKGROUP_SIZE_Z)\r\nfn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\r\n    // 현재 타일의 인덱스를 계산합니다.\r\n    let tileIndex = global_id.x +\r\n                    global_id.y * pointLight_tileCount.x +\r\n                    global_id.z * pointLight_tileCount.x * pointLight_tileCount.y;\r\n    // 현재 클러스터의 라이트 수를 0으로 초기화합니다.\r\n    var clusterLightCount = 0u;\r\n    // 현재 클러스터의 라이트 인덱스를 담을 배열을 초기화합니다.\r\n    var clusterPointLightIndices : array<u32, REDGPU_DEFINE_MAX_LIGHTS_PER_CLUSTERu>;\r\n\r\n    // 각 라이트에 대해 반복합니다.\r\n    for (var i = 0u; i < u32(pointLightList.count[0]); i = i + 1u) {\r\n        // 현재 라이트가 클러스터 내부에 있는지 검사합니다.\r\n        let lightInCluster = pointLight_testSphereAABB(i,tileIndex);\r\n\r\n        // 라이트가 클러스터 안에 있다면\r\n        if (lightInCluster) {\r\n            // 라이트 인덱스를 배열에 추가하고\r\n            clusterPointLightIndices[clusterLightCount] = i;\r\n            // 라이트 수를 증가시킵니다.\r\n            clusterLightCount = clusterLightCount + 1u;\r\n        }\r\n\r\n        // 라이트의 수가 클러스터의 최대 용량에 도달하면 루프를 종료합니다.\r\n        if (clusterLightCount == REDGPU_DEFINE_MAX_LIGHTS_PER_CLUSTERu) {\r\n            break;\r\n        }\r\n    }\r\n\r\n    // 현재 클러스터의 라이트들을 전체 라이트 그룹에 추가합니다.\r\n    var offset = atomicAdd(&pointLight_clusterLightGroup.offset, clusterLightCount);\r\n\r\n    // 추가된 각 라이트에 대해\r\n    for(var i = 0u; i < clusterLightCount; i = i + 1u) {\r\n        // 그룹에 인덱스를 추가합니다.\r\n        pointLight_clusterLightGroup.indices[offset + i] = clusterPointLightIndices[i];\r\n    }\r\n\r\n    // 현재 클러스터의 라이트 정보를 업데이트합니다.\r\n    pointLight_clusterLightGroup.lights[tileIndex].offset = offset;\r\n    pointLight_clusterLightGroup.lights[tileIndex].count = clusterLightCount;\r\n}\r\n");

/***/ }),

/***/ "./src/light/pointLightCluster/PassLightClustersBound.wgsl":
/*!*****************************************************************!*\
  !*** ./src/light/pointLightCluster/PassLightClustersBound.wgsl ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_SYSTEM_UNIFORMS\r\n@group(1) @binding(0) var<storage, read_write> pointLight_Clusters : PointLight_Clusters;\r\n\r\nfn lineIntersectionToZPlane(a : vec3<f32>, b : vec3<f32>, zDistance : f32) -> vec3<f32> {\r\n    let normal = vec3<f32>(0.0, 0.0, 0.5);\r\n    let ab = b - a;\r\n    let t = (zDistance - dot(normal, a)) / dot(normal, ab);\r\n    return a + t * ab;\r\n}\r\n\r\nfn clipToView(clip : vec4<f32>) -> vec4<f32> {\r\n    let view = systemUniforms.inverseProjectionMatrix * clip;\r\n    return view / vec4<f32>(view.w, view.w, view.w, view.w);\r\n}\r\n\r\nfn screen2View(screen : vec4<f32>) -> vec4<f32> {\r\n    let texCoord = screen.xy / systemUniforms.resolution.xy;\r\n    let clip = vec4<f32>(vec2<f32>(texCoord.x, 1.0 - texCoord.y) * 2.0 - vec2<f32>(1.0, 1.0), screen.z, screen.w );\r\n    return clipToView(clip);\r\n}\r\n\r\nconst eyePos = vec3<f32>(0.0);\r\n\r\n@compute @workgroup_size(REDGPU_DEFINE_WORKGROUP_SIZE_X,REDGPU_DEFINE_WORKGROUP_SIZE_Y, REDGPU_DEFINE_WORKGROUP_SIZE_Z)\r\n\r\nfn main(@builtin(global_invocation_id) global_id : vec3<u32>) {\r\n    // 전역 호출 ID에 기반한 현재 타일 인덱스를 계산합니다.\r\n    let tileIndex = global_id.x +\r\n                    global_id.y * pointLight_tileCount.x +\r\n                    global_id.z * pointLight_tileCount.x * pointLight_tileCount.y;\r\n\r\n    // 타일의 크기를 계산합니다.\r\n    let tileSize = vec2<f32>(\r\n              systemUniforms.resolution.x / f32(pointLight_tileCount.x),\r\n              systemUniforms.resolution.y / f32(pointLight_tileCount.y)\r\n          );\r\n\r\n    // 스크린 공간(Screen-Space)의 최대와 최소 좌표를 계산하고 View Space로 변환합니다.\r\n    let global_id_x_pos_one = vec2<f32>(f32(global_id.x + 1u), f32(global_id.y + 1u)) * tileSize;\r\n    let global_id_x_y = vec2<f32>(f32(global_id.x), f32(global_id.y)) * tileSize;\r\n\r\n    let maxPoint_sS = vec4<f32>(global_id_x_pos_one, 0.0, 1.0);\r\n    let minPoint_sS = vec4<f32>(global_id_x_y, 0.0, 1.0);\r\n\r\n    let maxPoint_vS = screen2View(maxPoint_sS).xyz;\r\n    let minPoint_vS = screen2View(minPoint_sS).xyz;\r\n\r\n    // 전역 Z 인덱스에 기반하여 Near 와 Far의 Z 평면을 계산합니다.\r\n    let nearFarX = systemUniforms.nearFar.x;\r\n    let nearFarY = systemUniforms.nearFar.y;\r\n\r\n    let tileZ = f32(global_id.z) / f32(pointLight_tileCount.z);\r\n    let tileZ_plus_one = f32(global_id.z + 1u) / f32(pointLight_tileCount.z);\r\n\r\n    let tileNear = -nearFarX * pow(nearFarY / nearFarX, tileZ);\r\n    let tileFar = -nearFarX * pow(nearFarY / nearFarX, tileZ_plus_one);\r\n\r\n    // View Space의 선들과 Near 와 Far의 Z 평면의 교점을 계산합니다.\r\n    let minPointNear = lineIntersectionToZPlane(eyePos, minPoint_vS, tileNear);\r\n    let minPointFar = lineIntersectionToZPlane(eyePos, minPoint_vS, tileFar);\r\n    let maxPointNear = lineIntersectionToZPlane(eyePos, maxPoint_vS, tileNear);\r\n    let maxPointFar = lineIntersectionToZPlane(eyePos, maxPoint_vS, tileFar);\r\n\r\n    // AABB(Axis-Aligned Bounding Box)의 최소 및 최대 좌표를 저장합니다.\r\n    let minAABB = min(min(minPointNear, minPointFar), min(maxPointNear, maxPointFar));\r\n    let maxAABB = max(max(minPointNear, minPointFar), max(maxPointNear, maxPointFar));\r\n\r\n    pointLight_Clusters.cubeList[tileIndex].minAABB = vec4<f32>(minAABB, 0.0);\r\n    pointLight_Clusters.cubeList[tileIndex].maxAABB = vec4<f32>(maxAABB, 0.0);\r\n}\r\n");

/***/ }),

/***/ "./src/main/render/renderFinal/fragment.wgsl":
/*!***************************************************!*\
  !*** ./src/main/render/renderFinal/fragment.wgsl ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@group(0) @binding(1) var _Sampler: sampler;\r\n@group(0) @binding(2) var _Texture: texture_2d<f32>;\r\n@fragment\r\nfn main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {\r\n  return textureSample(_Texture,_Sampler, uv);\r\n}\r\n");

/***/ }),

/***/ "./src/main/render/renderFinal/vertex.wgsl":
/*!*************************************************!*\
  !*** ./src/main/render/renderFinal/vertex.wgsl ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// define Struct\r\nstruct Uniforms {\r\n  modelMatrix : mat4x4<f32>,\r\n};\r\n// define Struct OutData\r\nstruct OutData {\r\n  @builtin(position) position : vec4<f32>,\r\n  @location(0) uv: vec2<f32>,\r\n};\r\n// define Struct InputData\r\nstruct InputData {\r\n    @location(0) position : vec3<f32>,\r\n    @location(1) uv : vec2<f32>,\r\n};\r\n// define Uniform binding\r\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\r\n@vertex\r\n\r\nfn main(inputData : InputData) -> OutData {\r\n  var outData : OutData;\r\n  outData.position = uniforms.modelMatrix * vec4<f32>(inputData.position,1.0);\r\n  outData.uv = inputData.uv;\r\n  return outData;\r\n}\r\n");

/***/ }),

/***/ "./src/main/scene/sceneHelper/grid/fragment.wgsl":
/*!*******************************************************!*\
  !*** ./src/main/scene/sceneHelper/grid/fragment.wgsl ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_SYSTEM_UNIFORMS\r\nstruct InputData {\r\n    @location(0) vVertexColor : vec4<f32>,\r\n};\r\n@fragment\r\nfn main(inputData:InputData) -> @location(0) vec4<f32> {\r\n  return inputData.vVertexColor;\r\n}");

/***/ }),

/***/ "./src/main/scene/sceneHelper/grid/vertex.wgsl":
/*!*****************************************************!*\
  !*** ./src/main/scene/sceneHelper/grid/vertex.wgsl ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_SYSTEM_UNIFORMS\r\n#REDGPU_DEFINE_MODEL_UNIFORMS_STRUCT\r\n\r\nstruct InputData {\r\n    @location(0) position : vec3<f32>,\r\n    @location(1) vertexColor : vec4<f32>,\r\n};\r\nstruct OutData {\r\n  @builtin(position) position : vec4<f32>,\r\n  @location(0) vVertexColor: vec4<f32>,\r\n};\r\n\r\n@vertex\r\nfn main(inputData : InputData) -> OutData {\r\n    var outData : OutData;\r\n    outData.position = systemUniforms.projectionMatrix * systemUniforms.cameraMatrix * modelUniforms.modelMatrix * vec4<f32>(inputData.position, 1.0);\r\n    outData.vVertexColor = inputData.vertexColor;\r\n    return outData;\r\n}\r\n");

/***/ }),

/***/ "./src/main/scene/sceneHelper/normalHelper/fragment.wgsl":
/*!***************************************************************!*\
  !*** ./src/main/scene/sceneHelper/normalHelper/fragment.wgsl ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_SYSTEM_UNIFORMS\r\nstruct InputData {\r\n    @location(0) vVertexColor : vec4<f32>,\r\n};\r\n@fragment\r\nfn main(inputData:InputData) -> @location(0) vec4<f32> {\r\n  return inputData.vVertexColor;\r\n}");

/***/ }),

/***/ "./src/main/scene/sceneHelper/normalHelper/vertex.wgsl":
/*!*************************************************************!*\
  !*** ./src/main/scene/sceneHelper/normalHelper/vertex.wgsl ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_SYSTEM_UNIFORMS\r\n#REDGPU_DEFINE_MODEL_UNIFORMS_STRUCT\r\nstruct InputData {\r\n    @location(0) position : vec3<f32>,\r\n    @location(1) vertexColor : vec4<f32>,\r\n};\r\nstruct OutData {\r\n  @builtin(position) position : vec4<f32>,\r\n  @location(0) vVertexColor: vec4<f32>,\r\n};\r\n\r\n@vertex\r\nfn main(inputData : InputData) -> OutData {\r\n    var outData : OutData;\r\n    outData.position = systemUniforms.projectionMatrix * systemUniforms.cameraMatrix * modelUniforms.modelMatrix * vec4<f32>(inputData.position, 1.0);\r\n    outData.vVertexColor = inputData.vertexColor;\r\n    return outData;\r\n}\r\n");

/***/ }),

/***/ "./src/material/bitmapMaterial/fragment.wgsl":
/*!***************************************************!*\
  !*** ./src/material/bitmapMaterial/fragment.wgsl ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_SYSTEM_UNIFORMS\r\n#REDGPU_DEFINE_SYSTEM_AMBIENT_DIRECTIONAL_LIGHTS\r\n#REDGPU_DEFINE_POINT_LIGHT_CLUSTER\r\n#REDGPU_DEFINE_POINT_LIGHT_CLUSTER_LIGHT_GROUP\r\n#REDGPU_DEFINE_SYSTEM_CALC_LIGHT_FUNCTIONS\r\nstruct MaterialUniforms {\r\n    alpha : f32,\r\n};\r\n\r\n@group(2) @binding(0) var<uniform> materialUniforms : MaterialUniforms;\r\n@group(2) @binding(1) var _sampler: sampler;\r\n@group(2) @binding(2) var _texture: texture_2d<f32>;\r\n\r\nstruct InputData {\r\n    @builtin(position) position : vec4<f32>,\r\n    @location(0) vertexPosition : vec3<f32>,\r\n    @location(1) vertexNormal : vec3<f32>,\r\n    @location(2) uv : vec2<f32>,\r\n};\r\n\r\n@fragment\r\n\r\nfn main(inputData:InputData) -> @location(0) vec4<f32> {\r\n    var diffuseColor:vec4<f32> = textureSample(_texture,_sampler, inputData.uv);\r\n    // result color\r\n    diffuseColor = vec4<f32>(diffuseColor.rgb, diffuseColor.a * materialUniforms.alpha);\r\n    if(diffuseColor.a == 0.0) {\r\n     discard;\r\n    }\r\n    return diffuseColor;\r\n}\r\n");

/***/ }),

/***/ "./src/material/bitmapMaterial/vertex.wgsl":
/*!*************************************************!*\
  !*** ./src/material/bitmapMaterial/vertex.wgsl ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_VERTEX_BASE\r\n#REDGPU_DEFINE_MODEL_UNIFORMS_STRUCT\r\n\r\n// define Struct InputData\r\nstruct InputData {\r\n    @location(0) position : vec3<f32>,\r\n    @location(1) vertexNormal : vec3<f32>,\r\n    @location(2) uv : vec2<f32>,\r\n};\r\n// define Struct OutData\r\nstruct OutData {\r\n  @builtin(position) position : vec4<f32>,\r\n  @location(0) vertexPosition: vec3<f32>,\r\n  @location(1) vertexNormal: vec3<f32>,\r\n  @location(2) uv: vec2<f32>,\r\n};\r\n@vertex\r\nfn main(inputData:InputData) -> OutData {\r\n  var outData : OutData;\r\n  var position:vec4<f32> = modelUniforms.modelMatrix * vec4<f32>(inputData.position, 1.0);\r\n  outData.position = systemUniforms.projectionMatrix * systemUniforms.cameraMatrix * position;\r\n  outData.vertexPosition = position.xyz;\r\n  outData.vertexNormal = (modelUniforms.normalMatrix * vec4<f32>(inputData.vertexNormal, 1.0)).xyz;\r\n  outData.uv = inputData.uv;\r\n  return outData;\r\n}\r\n");

/***/ }),

/***/ "./src/material/bitmapPhoneMaterial/fragment.wgsl":
/*!********************************************************!*\
  !*** ./src/material/bitmapPhoneMaterial/fragment.wgsl ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_SYSTEM_UNIFORMS\r\n#REDGPU_DEFINE_SYSTEM_AMBIENT_DIRECTIONAL_LIGHTS\r\n#REDGPU_DEFINE_SYSTEM_CALC_LIGHT_FUNCTIONS\r\n\r\n\r\nstruct MaterialUniforms {\r\n    alpha : f32,\r\n    shininess : f32,\r\n    specularPower : f32,\r\n    specularColor : vec3<f32>,\r\n};\r\n\r\n@group(2) @binding(0) var<uniform> materialUniforms : MaterialUniforms;\r\n@group(2) @binding(1) var _sampler: sampler;\r\n@group(2) @binding(2) var _texture: texture_2d<f32>;\r\n\r\nstruct InputData {\r\n    @builtin(position) position : vec4<f32>,\r\n    @location(0) vertexPosition : vec3<f32>,\r\n    @location(1) vertexNormal : vec3<f32>,\r\n    @location(2) uv : vec2<f32>,\r\n};\r\n\r\n@fragment\r\n\r\nfn main(inputData:InputData) -> @location(0) vec4<f32> {\r\n    var diffuseColor:vec4<f32> = textureSample(_texture,_sampler, inputData.uv);\r\n    var lightColorSum = calcLights(\r\n        systemLightUniforms,\r\n        inputData.position,\r\n        normalize(inputData.vertexNormal),\r\n        inputData.vertexPosition,\r\n        //\r\n        materialUniforms.shininess,\r\n        materialUniforms.specularPower,\r\n        materialUniforms.specularColor\r\n      );\r\n    // result color\r\n    diffuseColor = vec4<f32>(diffuseColor.rgb * lightColorSum, diffuseColor.a * materialUniforms.alpha);\r\n    if(diffuseColor.a == 0.0) {\r\n     discard;\r\n    }\r\n    return diffuseColor;\r\n}\r\n");

/***/ }),

/***/ "./src/material/bitmapPhoneMaterial/vertex.wgsl":
/*!******************************************************!*\
  !*** ./src/material/bitmapPhoneMaterial/vertex.wgsl ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_VERTEX_BASE\r\n#REDGPU_DEFINE_MODEL_UNIFORMS_STRUCT\r\n\r\n// define Struct InputData\r\nstruct InputData {\r\n    @location(0) position : vec3<f32>,\r\n    @location(1) vertexNormal : vec3<f32>,\r\n    @location(2) uv : vec2<f32>,\r\n};\r\n// define Struct OutData\r\nstruct OutData {\r\n  @builtin(position) position : vec4<f32>,\r\n  @location(0) vertexPosition: vec3<f32>,\r\n  @location(1) vertexNormal: vec3<f32>,\r\n  @location(2) uv: vec2<f32>,\r\n};\r\n@vertex\r\nfn main(inputData:InputData) -> OutData {\r\n  var outData : OutData;\r\n  var position:vec4<f32> = modelUniforms.modelMatrix * vec4<f32>(inputData.position, 1.0);\r\n  outData.position = systemUniforms.projectionMatrix * systemUniforms.cameraMatrix * position;\r\n  outData.vertexPosition = position.xyz;\r\n  outData.vertexNormal = (modelUniforms.normalMatrix * vec4<f32>(inputData.vertexNormal, 1.0)).xyz;\r\n  outData.uv = inputData.uv;\r\n  return outData;\r\n}\r\n");

/***/ }),

/***/ "./src/material/colorMaterial/fragment.wgsl":
/*!**************************************************!*\
  !*** ./src/material/colorMaterial/fragment.wgsl ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_SYSTEM_UNIFORMS\r\nstruct MaterialUniforms {\r\n  color : vec4<f32>,\r\n  alpha : f32,\r\n};\r\n@group(2) @binding(0) var<uniform> materialUniforms : MaterialUniforms;\r\n@fragment\r\nfn main() -> @location(0) vec4<f32> {\r\n  return materialUniforms.color;\r\n}");

/***/ }),

/***/ "./src/material/colorMaterial/vertex.wgsl":
/*!************************************************!*\
  !*** ./src/material/colorMaterial/vertex.wgsl ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_SYSTEM_UNIFORMS\r\n#REDGPU_DEFINE_MODEL_UNIFORMS_STRUCT\r\n\r\n// define Struct InputData\r\nstruct InputData {\r\n    @location(0) position : vec3<f32>\r\n};\r\n// define Struct OutData\r\nstruct OutData {\r\n  @builtin(position) position : vec4<f32>,\r\n};\r\n\r\n\r\n\r\n@vertex\r\nfn main(inputData:InputData) -> OutData {\r\n  var outData : OutData;\r\n  outData.position = systemUniforms.projectionMatrix * systemUniforms.cameraMatrix * modelUniforms.modelMatrix * vec4<f32>(inputData.position, 1.0);\r\n  return outData;\r\n}\r\n");

/***/ }),

/***/ "./src/material/skyboxMaterial/fragment.wgsl":
/*!***************************************************!*\
  !*** ./src/material/skyboxMaterial/fragment.wgsl ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_SYSTEM_UNIFORMS\r\nstruct MaterialUniforms {\r\n    opacity : f32\r\n};\r\n@group(2) @binding(0) var<uniform> materialUniforms : MaterialUniforms;\r\n@group(2) @binding(1) var _sampler: sampler;\r\n@group(2) @binding(2) var _texture: texture_cube<f32>;\r\n\r\nstruct InputData {\r\n    @location(0) vertexNormal : vec3<f32>,\r\n    @location(1) uv : vec2<f32>,\r\n    @location(2) vPosition : vec4<f32>,\r\n};\r\n@fragment\r\nfn main(inputData:InputData) -> @location(0) vec4<f32> {\r\n  var cubemapVec = inputData.vPosition.xyz - vec3<f32>(0.5, 0.5, 0.5);\r\n  var outColor:vec4<f32> = textureSample(_texture,_sampler, cubemapVec);\r\n  if(outColor.a == 0.0) {\r\n    discard;\r\n  }\r\n  return outColor;\r\n}");

/***/ }),

/***/ "./src/material/skyboxMaterial/vertex.wgsl":
/*!*************************************************!*\
  !*** ./src/material/skyboxMaterial/vertex.wgsl ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#REDGPU_DEFINE_SYSTEM_UNIFORMS\r\n#REDGPU_DEFINE_MODEL_UNIFORMS_STRUCT\r\n\r\n// define Struct InputData\r\nstruct InputData {\r\n    @location(0) position : vec3<f32>,\r\n    @location(1) vertexNormal : vec3<f32>,\r\n    @location(2) uv : vec2<f32>,\r\n};\r\n// define Struct OutData\r\nstruct OutData {\r\n  @builtin(position) position : vec4<f32>,\r\n  @location(0) vertexNormal: vec3<f32>,\r\n  @location(1) uv: vec2<f32>,\r\n  @location(2) vPosition: vec4<f32>,\r\n};\r\n@vertex\r\nfn main(inputData:InputData) -> OutData {\r\n  var outData : OutData;\r\n  outData.position = systemUniforms.projectionMatrix * systemUniforms.cameraMatrix * modelUniforms.modelMatrix * vec4<f32>(inputData.position, 1.0);\r\n  outData.uv = inputData.uv;\r\n  outData.vPosition = 0.5 * (vec4<f32>(inputData.position, 1.0) + vec4<f32>(1.0, 1.0, 1.0, 1.0));\r\n  return outData;\r\n}\r\n");

/***/ }),

/***/ "./src/material/wgsl/ShaderDefine_ModelUniformStruct.wgsl":
/*!****************************************************************!*\
  !*** ./src/material/wgsl/ShaderDefine_ModelUniformStruct.wgsl ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("struct ModelUniforms {\r\n  modelMatrix : mat4x4<f32>,\r\n  normalMatrix : mat4x4<f32>,\r\n};\r\n@group(1) @binding(0) var<uniform> modelUniforms : ModelUniforms;\r\n");

/***/ }),

/***/ "./src/material/wgsl/ShaderDefine_SystemAmbientDirectionalLights.wgsl":
/*!****************************************************************************!*\
  !*** ./src/material/wgsl/ShaderDefine_SystemAmbientDirectionalLights.wgsl ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("struct DirectionalLightUniforms {\r\n  color : vec3<f32>,\r\n  intensity:f32,\r\n  direction : vec3<f32>,\r\n};\r\nstruct SystemLightUniforms {\r\n  ambientLight : vec4<f32>,\r\n  directionalLightCount : vec4<f32>,\r\n  directionalLight : array<DirectionalLightUniforms,REDGPU_CONST_MAX_DIRECTIONAL_LIGHT_NUM>,\r\n};\r\n@group(0) @binding(1) var<uniform> systemLightUniforms : SystemLightUniforms;");

/***/ }),

/***/ "./src/material/wgsl/ShaderDefine_SystemCalcLightFunctions.wgsl":
/*!**********************************************************************!*\
  !*** ./src/material/wgsl/ShaderDefine_SystemCalcLightFunctions.wgsl ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\nfn calcDirectionalLight(\r\n    light:DirectionalLightUniforms,normal:vec3<f32>,\r\n    ///\r\n    shininess:f32,\r\n    specularPower:f32,\r\n    specularColor:vec3<f32>,\r\n) -> vec3<f32> {\r\n    var direction:vec3<f32> = normalize(light.direction);\r\n    var ld:vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);\r\n    var ls:vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);\r\n    var lightDot:f32 ;\r\n    ld = vec3<f32>(light.color) * light.intensity;\r\n    lightDot = dot(normal,-direction);\r\n    if(lightDot>0.0){\r\n        var specularTextureValue:f32  = 1.0; // TODO\r\n        var specular:f32 = pow( max(dot(reflect(direction, normal), -direction), 0.0), shininess) * specularPower * specularTextureValue;\r\n        ls = specularColor * specular * light.intensity;\r\n    }\r\n    return  vec3<f32>(ld * lightDot) + ls;\r\n\r\n};\r\n\r\nfn calcPointLight(\r\n    light:PointLight, normal:vec3<f32>,\r\n    vertexPosition:vec3<f32>,\r\n    ///\r\n    shininess:f32,\r\n    specularPower:f32,\r\n    specularColor:vec3<f32>,\r\n)-> vec3<f32>{\r\n    //TODO specular, etc...\r\n    var lightPosition:vec3<f32> = light.position;\r\n    var vertexPosition2:vec3<f32> = vertexPosition.xyz;\r\n    var lightConstant:f32 = 1.0f;\r\n    var lightLinear:f32 = 0.4f;\r\n    var lightQuadratic:f32 = 0.07f;\r\n\r\n    var direction:vec3<f32>;\r\n    var lightDot:f32 ;\r\n    var radius:f32 = light.radius ;\r\n    var intensity:f32 = light.intensity ;\r\n    direction = normalize(-lightPosition + vertexPosition2);\r\n    lightDot = ((dot(normal,-direction)));\r\n    //\r\n    var distance:f32 = (length( -lightPosition + vertexPosition2) );\r\n    var lp:vec3<f32> ;\r\n    var ls:vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);\r\n    if(radius> distance){\r\n        if(lightDot>0.0){\r\n            lp = vec3<f32>(light.color)  ;\r\n            var attenuation:f32 = 1.0 / (lightConstant + lightLinear * distance +\r\n            lightQuadratic * (distance * distance));\r\n            lp *= intensity;\r\n            lp *= lightDot;\r\n            lp *= attenuation;\r\n            var specularTextureValue:f32  = 1.0; // TODO\r\n            var specular:f32 = pow( max(dot(reflect(direction, normal), -direction), 0.0), shininess) * specularPower * specularTextureValue;\r\n            ls = specularColor * specular * light.intensity * attenuation;\r\n        }else{\r\n        }\r\n    }\r\n     return  vec3<f32>(lp) + ls;\r\n}\r\n\r\nfn calcLights(\r\n    systemLightUniforms : SystemLightUniforms,\r\n    position : vec4<f32>,\r\n    normal : vec3<f32>,\r\n    vertexPosition : vec3<f32>,\r\n    ///\r\n    shininess:f32,\r\n    specularPower:f32,\r\n    specularColor:vec3<f32>,\r\n    )->vec3<f32>{\r\n        var lightColorSum   = vec3<f32>(0.0,0.0,0.0);\r\n        // directional light\r\n        for (var i = 0u; i<u32(systemLightUniforms.directionalLightCount[0]); i = i + 1u) {\r\n            lightColorSum = lightColorSum + calcDirectionalLight(\r\n                systemLightUniforms.directionalLight[i],\r\n                normal,\r\n                shininess,\r\n                specularPower,\r\n                specularColor\r\n                );\r\n        }\r\n        // point light\r\n        let clusterIndex = getPointLightClusterIndex(position);\r\n        let lightOffset  = pointLight_clusterLightGroup.lights[clusterIndex].offset;\r\n        let lightCount:u32   = pointLight_clusterLightGroup.lights[clusterIndex].count;\r\n        for (var lightIndex = 0u; lightIndex < lightCount; lightIndex = lightIndex + 1u) {\r\n            let i = pointLight_clusterLightGroup.indices[lightOffset + lightIndex];\r\n            lightColorSum = lightColorSum + (calcPointLight(\r\n                pointLightList.lights[i],\r\n                normal,\r\n                vertexPosition,\r\n                shininess,\r\n                specularPower,\r\n                specularColor\r\n            ));\r\n        }\r\n        // ambient light\r\n        var ALIntensity:f32 = systemLightUniforms.ambientLight.a;\r\n        var ALColor:vec3<f32> = (systemLightUniforms.ambientLight.rgb) * ALIntensity;\r\n        lightColorSum = ALColor + lightColorSum;\r\n        return lightColorSum;\r\n    }\r\n");

/***/ }),

/***/ "./src/material/wgsl/ShaderDefine_SystemUniforms.wgsl":
/*!************************************************************!*\
  !*** ./src/material/wgsl/ShaderDefine_SystemUniforms.wgsl ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("struct SystemUniforms {\r\n  projectionMatrix : mat4x4<f32>,\r\n  inverseProjectionMatrix: mat4x4<f32>,\r\n  cameraMatrix: mat4x4<f32>,\r\n  resolution: vec2<f32>,\r\n  nearFar: vec2<f32>,\r\n};\r\n\r\nconst pointLight_indicesLength:u32 = REDGPU_DEFINE_MAX_LIGHTS_PER_CLUSTER * REDGPU_DEFINE_TOTAL_TILES;\r\nconst pointLight_tileCount = vec3<u32>(REDGPU_DEFINE_TILE_COUNT_Xu, REDGPU_DEFINE_TILE_COUNT_Yu, REDGPU_DEFINE_TILE_COUNT_Zu);\r\n\r\nstruct PointLight_ClusterLights  {\r\n    offset : u32,\r\n    count : u32\r\n};\r\nstruct PointLight_ClusterLightsGroup {\r\n    offset : atomic<u32>,\r\n    lights : array<PointLight_ClusterLights , REDGPU_DEFINE_TOTAL_TILES>,\r\n    indices : array<u32, pointLight_indicesLength>\r\n};\r\nstruct PointLight_ClusterCube {\r\n    minAABB : vec4<f32>,\r\n    maxAABB : vec4<f32>\r\n  };\r\nstruct PointLight_Clusters {\r\n    cubeList : array<PointLight_ClusterCube, REDGPU_DEFINE_TOTAL_TILES>\r\n};\r\n\r\nfn linearDepth(depthSample : f32) -> f32 {\r\n    return systemUniforms.nearFar.y*systemUniforms.nearFar.x / fma(depthSample, systemUniforms.nearFar.x-systemUniforms.nearFar.y, systemUniforms.nearFar.y);\r\n}\r\nfn getPointLightClusterIndex(fragCoord : vec4<f32>) -> u32 {\r\n    let tile = getPointLightTile(fragCoord);\r\n    return tile.x +\r\n           tile.y * pointLight_tileCount.x +\r\n           tile.z * pointLight_tileCount.x * pointLight_tileCount.y;\r\n\r\n}\r\nfn getPointLightTile(fragCoord : vec4<f32>) -> vec3<u32> {\r\n    // TODO: scale and bias calculation can be moved outside the shader to save cycles.\r\n    let sliceScale = f32(pointLight_tileCount.z) / log2(systemUniforms.nearFar.y / systemUniforms.nearFar.x);\r\n    let sliceBias = -(f32(pointLight_tileCount.z) * log2(systemUniforms.nearFar.x) / log2(systemUniforms.nearFar.y / systemUniforms.nearFar.x));\r\n    let zTile = u32(max(log2(linearDepth(fragCoord.z)) * sliceScale + sliceBias, 0.0));\r\n    return vec3<u32>(u32(fragCoord.x / (systemUniforms.resolution.x / f32(pointLight_tileCount.x))),\r\n                     u32(fragCoord.y / (systemUniforms.resolution.y / f32(pointLight_tileCount.y))),\r\n                     zTile);\r\n}\r\n\r\nstruct PointLight {\r\n    position : vec3<f32>,\r\n    radius : f32,\r\n    color : vec3<f32>,\r\n    intensity : f32\r\n};\r\nstruct PointLightList {\r\n    count:vec4<f32>,\r\n    lights : array<PointLight>\r\n};\r\n\r\n@group(0) @binding(0) var<uniform> systemUniforms : SystemUniforms;\r\n@group(0) @binding(2) var<storage> pointLightList : PointLightList;\r\n@group(0) @binding(3) var<storage, read_write> pointLight_clusterLightGroup : PointLight_ClusterLightsGroup;\r\n");

/***/ }),

/***/ "./src/postEffect/effects/wgslFragment/brightnessContrastFragment.wgsl":
/*!*****************************************************************************!*\
  !*** ./src/postEffect/effects/wgslFragment/brightnessContrastFragment.wgsl ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// define Struct\r\nstruct Uniforms {\r\n  brightness:f32,\r\n  contrast : f32\r\n};\r\n@group(0) @binding(0) var<uniform> uniforms : Uniforms;\r\n@group(0) @binding(1) var _Sampler: sampler;\r\n@group(0) @binding(2) var _Texture: texture_2d<f32>;\r\n@fragment\r\nfn main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {\r\n    var diffuseColor:vec4<f32> = textureSample(_Texture,_Sampler, uv);\r\n\r\n\r\n    var t0:f32;\r\n    if (uniforms.contrast > 0.0) {\r\n        t0 = (1.0 - uniforms.contrast);\r\n        diffuseColor = vec4<f32>(\r\n            diffuseColor.r + (diffuseColor.r - 0.5) / t0 + 0.5,\r\n            diffuseColor.g + (diffuseColor.g - 0.5) / t0 + 0.5,\r\n            diffuseColor.b + (diffuseColor.b - 0.5) / t0 + 0.5,\r\n            diffuseColor.a\r\n        );\r\n    } else {\r\n        t0 = (1.0 + uniforms.contrast);\r\n        diffuseColor = vec4<f32>(\r\n            diffuseColor.r + (diffuseColor.r - 0.5) * t0 + 0.5,\r\n            diffuseColor.g + (diffuseColor.g - 0.5) * t0 + 0.5,\r\n            diffuseColor.b + (diffuseColor.b - 0.5) * t0 + 0.5,\r\n            diffuseColor.a\r\n        );\r\n    }\r\n    diffuseColor.r += uniforms.brightness;\r\n    diffuseColor.g += uniforms.brightness;\r\n    diffuseColor.b += uniforms.brightness;\r\n  return diffuseColor;\r\n}\r\n");

/***/ }),

/***/ "./src/postEffect/effects/wgslFragment/grayFragment.wgsl":
/*!***************************************************************!*\
  !*** ./src/postEffect/effects/wgslFragment/grayFragment.wgsl ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@group(0) @binding(0) var _Sampler: sampler;\r\n@group(0) @binding(1) var _Texture: texture_2d<f32>;\r\n@fragment\r\nfn main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {\r\n  let diffuseColor:vec4<f32> = textureSample(_Texture,_Sampler, uv);\r\n  let gray:f32 = (diffuseColor.r  + diffuseColor.g + diffuseColor.b)/3.0;\r\n  return vec4<f32>(gray,gray,gray, diffuseColor.a);\r\n}\r\n");

/***/ }),

/***/ "./src/postEffect/effects/wgslFragment/hueSaturationFragment.wgsl":
/*!************************************************************************!*\
  !*** ./src/postEffect/effects/wgslFragment/hueSaturationFragment.wgsl ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// define Struct\r\nstruct Uniforms {\r\n  hue : f32,\r\n  saturation:f32\r\n};\r\n@group(0) @binding(0) var<uniform> uniforms : Uniforms;\r\n@group(0) @binding(1) var _Sampler: sampler;\r\n@group(0) @binding(2) var _Texture: texture_2d<f32>;\r\n@fragment\r\nfn main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {\r\n    var diffuseColor:vec4<f32> = textureSample(_Texture,_Sampler, uv);\r\n\r\n    let angle:f32 = uniforms.hue * 3.1415926535897932384626433832795;\r\n    let s:f32  = sin(angle);\r\n    let c:f32 = cos(angle);\r\n    let weights:vec3<f32> = (vec3<f32>(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;\r\n    let len:f32 = length(diffuseColor.rgb);\r\n\r\n    diffuseColor = vec4<f32>(\r\n        dot(diffuseColor.rgb, weights.xyz),\r\n        dot(diffuseColor.rgb, weights.zxy),\r\n        dot(diffuseColor.rgb, weights.yzx),\r\n        diffuseColor.a\r\n    );\r\n\r\n    let average:f32 = (diffuseColor.r + diffuseColor.g + diffuseColor.b) / 3.0;\r\n    if (uniforms.saturation > 0.0) {\r\n        let t0:f32 = (1.0 - 1.0 / (1.001 - uniforms.saturation));\r\n        diffuseColor = vec4<f32>(\r\n           diffuseColor.r + (average - diffuseColor.r) * t0,\r\n           diffuseColor.g + (average - diffuseColor.g) * t0,\r\n           diffuseColor.b + (average - diffuseColor.b) * t0,\r\n           diffuseColor.a\r\n        );\r\n    } else {\r\n        diffuseColor = vec4<f32>(\r\n            diffuseColor.r + (average - diffuseColor.r) * -uniforms.saturation,\r\n            diffuseColor.g + (average - diffuseColor.g) * -uniforms.saturation,\r\n            diffuseColor.b + (average - diffuseColor.b) * -uniforms.saturation,\r\n            diffuseColor.a\r\n        );\r\n    }\r\n  return diffuseColor;\r\n}\r\n");

/***/ }),

/***/ "./src/postEffect/effects/wgslFragment/invertFragment.wgsl":
/*!*****************************************************************!*\
  !*** ./src/postEffect/effects/wgslFragment/invertFragment.wgsl ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@group(0) @binding(0) var _Sampler: sampler;\r\n@group(0) @binding(1) var _Texture: texture_2d<f32>;\r\n@fragment\r\nfn main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {\r\n  let diffuseColor:vec4<f32> = textureSample(_Texture,_Sampler, uv);\r\n  return vec4<f32>(1.0 - diffuseColor.rgb, diffuseColor.a);\r\n}\r\n");

/***/ }),

/***/ "./src/postEffect/effects/wgslFragment/pixelizeFragment.wgsl":
/*!*******************************************************************!*\
  !*** ./src/postEffect/effects/wgslFragment/pixelizeFragment.wgsl ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// define Struct\r\nstruct Uniforms {\r\n  resolution:vec2<f32>,\r\n  width:f32,\r\n  height : f32\r\n};\r\n@group(0) @binding(0) var<uniform> uniforms : Uniforms;\r\n@group(0) @binding(1) var _Sampler: sampler;\r\n@group(0) @binding(2) var _Texture: texture_2d<f32>;\r\n@fragment\r\nfn main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {\r\n    let dx:f32 = 1.0/uniforms.resolution.x * uniforms.width;\r\n    let dy:f32 = 1.0/uniforms.resolution.y * uniforms.height;\r\n    let coord:vec2<f32> = vec2<f32>(\r\n        dx * (floor(uv.x / dx) + 0.5),\r\n        dy * (floor(uv.y / dy) + 0.5)\r\n    );\r\n    var diffuseColor:vec4<f32> = textureSample(_Texture, _Sampler,coord);\r\n    return diffuseColor;\r\n}\r\n");

/***/ }),

/***/ "./src/postEffect/effects/wgslVertex/baseVertex.wgsl":
/*!***********************************************************!*\
  !*** ./src/postEffect/effects/wgslVertex/baseVertex.wgsl ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// define Struct OutData\r\nstruct OutData {\r\n  @builtin(position) position : vec4<f32>,\r\n  @location(0) uv: vec2<f32>,\r\n};\r\n// define Struct InputData\r\nstruct InputData {\r\n    @location(0) position : vec3<f32>,\r\n    @location(1) uv : vec2<f32>,\r\n};\r\n@vertex\r\n\r\nfn main(inputData : InputData) -> OutData {\r\n  var outData : OutData;\r\n  outData.position = vec4<f32>(inputData.position,1.0);\r\n  outData.uv = inputData.uv;\r\n  return outData;\r\n}\r\n");

/***/ }),

/***/ "./src/resource/texture/mipmapGenerator/fragment.wgsl":
/*!************************************************************!*\
  !*** ./src/resource/texture/mipmapGenerator/fragment.wgsl ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@binding(0) @group(0) var imgSampler : sampler;\r\n@binding(1) @group(0) var img : texture_2d<f32>;\r\n@fragment\r\nfn main(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {\r\n    return textureSample(img, imgSampler, texCoord);\r\n}");

/***/ }),

/***/ "./src/resource/texture/mipmapGenerator/vertex.wgsl":
/*!**********************************************************!*\
  !*** ./src/resource/texture/mipmapGenerator/vertex.wgsl ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("var<private> pos:array<vec2<f32>,4> = array<vec2<f32>,4>(\r\n    vec2<f32>(-1.0, 1.0), vec2<f32>(1.0, 1.0),\r\n    vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0)\r\n);\r\n\r\nstruct VertexOutput {\r\n    @builtin(position) position : vec4<f32>,\r\n    @location(0) texCoord : vec2<f32>,\r\n};\r\n\r\n@vertex\r\nfn main(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {\r\n    var output : VertexOutput;\r\n    output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);\r\n    output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);\r\n    return output;\r\n}\r\n");

/***/ }),

/***/ "./src/temp/qurd/fragment.wgsl":
/*!*************************************!*\
  !*** ./src/temp/qurd/fragment.wgsl ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@fragment\r\nfn main() -> @location(0) vec4<f32> {\r\n  return vec4<f32>(1.0, 0.0, 0.0, 0.5);\r\n}");

/***/ }),

/***/ "./src/temp/qurd/vertex.wgsl":
/*!***********************************!*\
  !*** ./src/temp/qurd/vertex.wgsl ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@vertex\r\nfn main(\r\n  @builtin(vertex_index) VertexIndex : u32\r\n) -> @builtin(position) vec4<f32> {\r\n  var pos = array<vec2<f32>, 6>(\r\n    vec2<f32>(-1, 1),\r\n    vec2<f32>(-1, -1),\r\n    vec2<f32>(1, 1),\r\n    //\r\n   vec2<f32>(1, 1),\r\n   vec2<f32>(1, -1),\r\n   vec2<f32>(-1, -1),\r\n  );\r\n\r\n  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\r\n}\r\n");

/***/ }),

/***/ "./src/camera/BasicCamera.ts":
/*!***********************************!*\
  !*** ./src/camera/BasicCamera.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object3d_base_BaseObject3DTransform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object3d/base/BaseObject3DTransform */ "./src/object3d/base/BaseObject3DTransform.ts");
/* harmony import */ var _object3d_base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object3d/base/CONST_DIRTY_TRANSFORM_STATE */ "./src/object3d/base/CONST_DIRTY_TRANSFORM_STATE.ts");
/* harmony import */ var _util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/errorFunc/throwError */ "./src/util/errorFunc/throwError.js");
/* harmony import */ var _util_getConstructorName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/getConstructorName */ "./src/util/getConstructorName.ts");
/* harmony import */ var _util_gl_matrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/gl-matrix */ "./src/util/gl-matrix/index.js");





class BasicCamera extends _object3d_base_BaseObject3DTransform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static MODE_3D = '3d';
    static MODE_2D = '2d';
    #mode = BasicCamera.MODE_3D;
    #farClipping = 100000;
    #nearClipping = 0.1;
    #fov = 60;
    constructor(x = 0, y = 0, z = 10, mode = BasicCamera.MODE_3D) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
        this.mode = mode;
    }
    get farClipping() {
        return this.#farClipping;
    }
    set farClipping(value) {
        this.#farClipping = value;
        this.dirtyTransformState = _object3d_base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    get nearClipping() {
        return this.#nearClipping;
    }
    set nearClipping(value) {
        this.#nearClipping = value;
        this.dirtyTransformState = _object3d_base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    get fov() {
        return this.#fov;
    }
    set fov(value) {
        this.#fov = value;
        this.dirtyTransformState = _object3d_base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    get mode() {
        return this.#mode;
    }
    set mode(value) {
        if (value === BasicCamera.MODE_2D || value === BasicCamera.MODE_3D)
            this.#mode = value;
        else
            (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_util_getConstructorName__WEBPACK_IMPORTED_MODULE_3__["default"])(value), 'only allow BasicCamera.MODE_2D or BasicCamera.MODE_3D');
        this.dirtyTransformState = _object3d_base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    update() {
        const eye = [this.x, this.y, this.z];
        const center = [0, 0, 0];
        const up = [0, 1, 0];
        _util_gl_matrix__WEBPACK_IMPORTED_MODULE_4__.mat4.identity(this.matrix);
        _util_gl_matrix__WEBPACK_IMPORTED_MODULE_4__.mat4.translate(this.matrix, this.matrix, [this.x, this.y, this.z]);
        _util_gl_matrix__WEBPACK_IMPORTED_MODULE_4__.mat4.rotateX(this.matrix, this.matrix, this.rotationX);
        _util_gl_matrix__WEBPACK_IMPORTED_MODULE_4__.mat4.rotateY(this.matrix, this.matrix, this.rotationY);
        _util_gl_matrix__WEBPACK_IMPORTED_MODULE_4__.mat4.rotateZ(this.matrix, this.matrix, this.rotationZ);
        _util_gl_matrix__WEBPACK_IMPORTED_MODULE_4__.mat4.lookAt(this.matrix, eye, center, up);
        this.dirtyTransformState = _object3d_base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].NONE;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicCamera);


/***/ }),

/***/ "./src/camera/index.ts":
/*!*****************************!*\
  !*** ./src/camera/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicCamera: () => (/* reexport safe */ _BasicCamera__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _BasicCamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicCamera */ "./src/camera/BasicCamera.ts");




/***/ }),

/***/ "./src/context/RedGPUContext.ts":
/*!**************************************!*\
  !*** ./src/context/RedGPUContext.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_view_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/view/View */ "./src/main/view/View.ts");
/* harmony import */ var _resource_resourceManager_RedGPUContextResourceManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource/resourceManager/RedGPUContextResourceManager */ "./src/resource/resourceManager/RedGPUContextResourceManager.ts");
/* harmony import */ var _util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/errorFunc/throwError */ "./src/util/errorFunc/throwError.js");
/* harmony import */ var _util_errorFunc_throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/errorFunc/throwErrorInstanceOf */ "./src/util/errorFunc/throwErrorInstanceOf.js");
/* harmony import */ var _util_getConstructorName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/getConstructorName */ "./src/util/getConstructorName.ts");
/* harmony import */ var _debugger_RedGPUContextDebugger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debugger/RedGPUContextDebugger */ "./src/context/debugger/RedGPUContextDebugger.ts");






/**
 * RedGPU.initialize 초기화 이후 성공했을때 생성되는 Context
 */
class RedGPUContext {
    dirtyMultiSample = false;
    // --------------------------------------------------
    #gpuAdapter;
    #gpuContext;
    #gpuDevice;
    #configurationDescription;
    #alphaMode;
    // --------------------------------------------------
    #debugger;
    #useMultiSample = true;
    #resourceManager;
    #htmlCanvas;
    // --------------------------------------------------
    #renderScale = 1;
    #width = '100%';
    #height = '100%';
    #pixelSizeInt = { width: 0, height: 0 };
    // --------------------------------------------------
    #viewList = [];
    /**
     * @param {HTMLCanvasElement} htmlCanvas
     * @param {GPUAdapter} gpuAdapter
     * @param {GPUDevice} gpuDevice
     * @param {GPUCanvasContext} gpuContext
     * @param {GPUCanvasAlphaMode=} alphaMode
     */
    constructor(htmlCanvas, gpuAdapter, gpuDevice, gpuContext, alphaMode = 'premultiplied') {
        this.#gpuAdapter = gpuAdapter;
        this.#gpuDevice = gpuDevice;
        this.#gpuContext = gpuContext;
        this.#debugger = new _debugger_RedGPUContextDebugger__WEBPACK_IMPORTED_MODULE_5__["default"](this);
        this.#resourceManager = new _resource_resourceManager_RedGPUContextResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.#alphaMode = alphaMode;
        this.#htmlCanvas = htmlCanvas;
        window.addEventListener('resize', this.#resize);
        this.#configure();
        this.#resize();
    }
    /**
     * @category gpu
     */
    get gpuAdapter() {
        return this.#gpuAdapter;
    }
    /**
     * @category gpu
     */
    get gpuContext() {
        return this.#gpuContext;
    }
    /**
     * @category gpu
     */
    get gpuDevice() {
        return this.#gpuDevice;
    }
    /**
     * @category gpu
     */
    get configurationDescription() {
        return this.#configurationDescription;
    }
    /**
     * @category gpu
     */
    get alphaMode() {
        return this.#alphaMode;
    }
    get debugger() {
        return this.#debugger;
    }
    get useMultiSample() {
        return this.#useMultiSample;
    }
    set useMultiSample(value) {
        if (this.#useMultiSample !== value)
            this.dirtyMultiSample = true;
        this.#useMultiSample = value;
    }
    get resourceManager() {
        return this.#resourceManager;
    }
    get htmlCanvas() {
        return this.#htmlCanvas;
    }
    get renderScale() {
        return this.#renderScale;
    }
    set renderScale(value) {
        if (value <= 0)
            value = 0.01;
        this.#renderScale = value;
        this.setSize();
    }
    /**
     * @category size
     * @defaultValue 100%
     */
    get width() {
        return this.#width;
    }
    /**
     * @category size
     * @defaultValue 100%
     */
    get height() {
        return this.#height;
    }
    /**
     * @category size
     */
    get pixelSizeInt() {
        return this.#pixelSizeInt;
    }
    get label() {
        return this.#gpuDevice.label;
    }
    /**
     * 소유한 View List 반환
     * @readonly
     */
    get viewList() {
        return this.#viewList;
    }
    /**
     * destroy WebGPU device
     * @example
     * (RedGPUContext Instance).destroy()
     */
    destroy() {
        this.#gpuContext.unconfigure();
        this.#gpuDevice.destroy();
    }
    /**
     * addView
     * RedGPU에서 렌더링할 View를 추가합니다.
     *
     * @example
     * (RedGPUContext Instance).addView(View Instance)
     *
     * @category view management
     * @param view
     */
    addView(view) {
        if (!(view instanceof _main_view_View__WEBPACK_IMPORTED_MODULE_0__["default"]))
            (0,_util_errorFunc_throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this, 'view', 'View');
        this.#viewList.push(view);
        this.#setDirtyMultiSample();
    }
    /**
     * TODO addViewAt
     * @param view
     * @param index
     */
    addViewAt(view, index) {
        this.#setDirtyMultiSample();
    }
    /**
     * RedGPU에서 View를 제거합니다.
     *
     * @example
     * (RedGPUContext Instance).removeView(View Instance)
     * @category view management
     * @param view
     */
    removeView(view) {
        if (!(view instanceof _main_view_View__WEBPACK_IMPORTED_MODULE_0__["default"]))
            (0,_util_errorFunc_throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this, 'view', 'View');
        const index = this.#viewList.indexOf(view);
        if (index > -1)
            this.#viewList.splice(index, 1);
        else {
            console.log('viewList 에 존재하지 않는 view 입니다.');
        }
        this.#setDirtyMultiSample();
    }
    /**
     * TODO removeViewAt
     * @param label
     */
    removeViewAt(index) {
        //TODO
        this.#setDirtyMultiSample();
    }
    /**
     * TODO removeViewByLabel
     * @param label
     */
    removeViewByLabel(label) {
        //TODO
        this.#setDirtyMultiSample();
    }
    /**
     * setSize
     * @param w
     * @param h
     */
    setSize(w = this.#width, h = this.#height) {
        this.#width = w;
        this.#height = h;
        let tW, tH;
        let rect = (this.#htmlCanvas.parentNode || document.body)['getBoundingClientRect']();
        // const devicePixelRatio = window['devicePixelRatio'] || 1;
        tW = this.#checkAbleValue('width', w, rect);
        tH = this.#checkAbleValue('height', h, rect);
        this.#htmlCanvas.width = tW * this.#renderScale;
        this.#htmlCanvas.height = tH * this.#renderScale;
        this.#htmlCanvas.style.width = tW + 'px';
        this.#htmlCanvas.style.height = tH + 'px';
        this.#pixelSizeInt.width = Math.floor(tW * this.#renderScale);
        this.#pixelSizeInt.height = Math.floor(tH * this.#renderScale);
        this.viewList.forEach(view => {
            view.setSize();
            // redView.setLocation();
        });
        console.log(`${(0,_util_getConstructorName__WEBPACK_IMPORTED_MODULE_4__["default"])(this)}.setSize - input : ${w},${h} / result : ${tW}, ${tH}`);
    }
    /**
     * gpuContext configure method
     * @private
     */
    #configure() {
        const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
        this.#configurationDescription = {
            device: this.#gpuDevice,
            format: presentationFormat,
            alphaMode: this.#alphaMode
        };
        console.log(`${(0,_util_getConstructorName__WEBPACK_IMPORTED_MODULE_4__["default"])(this)}.configurationDescription`, this.#configurationDescription);
        this.#gpuContext.configure(this.#configurationDescription);
    }
    /**
     * window resize handler
     * @private
     */
    #resize = () => {
        this.setSize();
    };
    /**
     * parameter value verification of setsize method.
     * @param key
     * @param value
     * @param rect
     * @private
     */
    #checkAbleValue(key, value, rect) {
        let result;
        const fireError = () => {
            this.setSize(0, 0);
            (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_2__["default"])(`${value}는 ${key}값으로 사용 될수 없습니다.`);
        };
        switch (typeof value) {
            case 'number':
                if (value >= 0) {
                    result = value;
                    break;
                }
                fireError();
                break;
            case 'string':
                if (value.includes('%')) {
                    result = Math.floor(rect[key] * (+value.replace('%', '')) / 100);
                    break;
                }
                if (value.includes('px')) {
                    result = +value.replace('px', '');
                    break;
                }
                fireError();
                break;
            default:
                fireError();
                break;
        }
        if (result < 0)
            result = 0;
        return result;
    }
    ;
    #setDirtyMultiSample() {
        this.dirtyMultiSample = true;
        window.dispatchEvent(new Event('changeViewList'));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedGPUContext);


/***/ }),

/***/ "./src/context/RedGPUContextBase.ts":
/*!******************************************!*\
  !*** ./src/context/RedGPUContextBase.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_errorFunc_throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/errorFunc/throwErrorInstanceOf */ "./src/util/errorFunc/throwErrorInstanceOf.js");
/* harmony import */ var _RedGPUContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RedGPUContext */ "./src/context/RedGPUContext.ts");


class RedGPUContextBase {
    #redGPUContext;
    constructor(redGPUContext) {
        if (!(redGPUContext instanceof _RedGPUContext__WEBPACK_IMPORTED_MODULE_1__["default"]))
            (0,_util_errorFunc_throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_0__["default"])(this, 'redGPUContext', 'RedGPUContext');
        this.#redGPUContext = redGPUContext;
    }
    get redGPUContext() {
        return this.#redGPUContext;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedGPUContextBase);


/***/ }),

/***/ "./src/context/debugger/RedGPUContextDebugger.ts":
/*!*******************************************************!*\
  !*** ./src/context/debugger/RedGPUContextDebugger.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");
/* harmony import */ var _RedGPUContextBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _category_systemStatePanels_setActiveDebugger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category/systemStatePanels/setActiveDebugger */ "./src/context/debugger/category/systemStatePanels/setActiveDebugger.ts");
/* harmony import */ var _category_systemStatePanels_setStatePanels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/systemStatePanels/setStatePanels */ "./src/context/debugger/category/systemStatePanels/setStatePanels.ts");
/* harmony import */ var _draw_debuggerRenderResourceManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draw/debuggerRenderResourceManager */ "./src/context/debugger/draw/debuggerRenderResourceManager.ts");
/* harmony import */ var _draw_debuggerRenderViewList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./draw/debuggerRenderViewList */ "./src/context/debugger/draw/debuggerRenderViewList.ts");
/* harmony import */ var _funcs_gui_setItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./funcs/gui_setItem */ "./src/context/debugger/funcs/gui_setItem.ts");
/* harmony import */ var _funcs_gui_setItemBooleanNameSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./funcs/gui_setItemBooleanNameSize */ "./src/context/debugger/funcs/gui_setItemBooleanNameSize.ts");
/* harmony import */ var _funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./funcs/gui_setItemDisableInput */ "./src/context/debugger/funcs/gui_setItemDisableInput.ts");









class RedGPUContextDebugger extends _RedGPUContextBase__WEBPACK_IMPORTED_MODULE_1__["default"] {
    __gui_setItemDisableInput = _funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_8__["default"];
    __gui_setItemBooleanNameSize = _funcs_gui_setItemBooleanNameSize__WEBPACK_IMPORTED_MODULE_7__["default"];
    __gui_setItem = _funcs_gui_setItem__WEBPACK_IMPORTED_MODULE_6__["default"];
    #gui;
    #activeViewDebugger = false;
    #activeResourceDebugger = false;
    #useDebugger = false;
    #__temp_HD_ViewList;
    #userDebugSet;
    #adapterInfo = {};
    #dat = dat_gui__WEBPACK_IMPORTED_MODULE_0__;
    constructor(context) {
        super(context);
        this.#update();
    }
    get activeViewDebugger() {
        return this.#activeViewDebugger;
    }
    set activeViewDebugger(value) {
        this.#activeViewDebugger = value;
        let debugView = document.getElementById('___debugView___');
        if (value) {
            if (!debugView) {
                debugView = document.createElement('div');
                debugView.setAttribute('id', '___debugView___');
                debugView.style.cssText = `
                        position: absolute;
                        max-height: 100%;
                        bottom: 0;
                        left:0;
                        box-sizing: border-box;
                        background: rgba(0,0,0,0.5);
                        color : #fff;
                        font-size: 10px;
                        display: flex;
                        flex-direction: column;
                        gap : 4px;
                        overflow: hidden;
                        overflow-y:auto;
                    `;
                document.body.appendChild(debugView);
            }
        }
        else {
            if (debugView)
                document.body.removeChild(debugView);
        }
    }
    get activeResourceDebugger() {
        return this.#activeResourceDebugger;
    }
    set activeResourceDebugger(value) {
        this.#activeResourceDebugger = value;
        let debugResource = document.getElementById('___debugResource___');
        if (value) {
            {
                if (!debugResource) {
                    debugResource = document.createElement('div');
                    debugResource.setAttribute('id', '___debugResource___');
                    debugResource.style.cssText = `
                         position: absolute;
                    bottom: 0;
                    right: 0;
                    padding:16px;
                    background: rgba(0,0,0,0.5);
                    color : #fff;
                    font-size: 10px;
                    overflow-y: auto;
                    `;
                    document.body.appendChild(debugResource);
                }
            }
        }
        else {
            if (debugResource)
                document.body.removeChild(debugResource);
        }
    }
    get useDebugger() {
        return this.#useDebugger;
    }
    set useDebugger(value) {
        const redGPUContext = this.redGPUContext;
        this.#useDebugger = value;
        if (value) {
            if (!this.#gui) {
                console.log(redGPUContext);
                const gui = this.#gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__.GUI();
                this.#userDebugSet?.(gui, redGPUContext, this);
                (0,_category_systemStatePanels_setActiveDebugger__WEBPACK_IMPORTED_MODULE_2__["default"])(gui, this);
                (0,_category_systemStatePanels_setStatePanels__WEBPACK_IMPORTED_MODULE_3__["default"])(gui, redGPUContext, this, !this.userDebugSet);
                this.#gui.show();
            }
        }
        else {
            this.temp_HD_ViewList = null;
            this.#gui.hide();
        }
        /////
    }
    get userDebugSet() {
        return this.#userDebugSet;
    }
    set userDebugSet(value) {
        this.#userDebugSet = value;
        if (this.#gui) {
            this.temp_HD_ViewList = null;
            this.#gui.destroy();
            this.#gui = null;
        }
        if (value && this.#useDebugger)
            this.useDebugger = true;
    }
    set temp_HD_ViewList(value) {
        if (this.#__temp_HD_ViewList)
            window.removeEventListener('changeViewList', this.#__temp_HD_ViewList);
        this.#__temp_HD_ViewList = value;
    }
    get adapterInfo() {
        return this.#adapterInfo;
    }
    get limit() {
        return this.redGPUContext.gpuAdapter.limits;
    }
    get dat() {
        return this.#dat;
    }
    render() {
        if (!this.#useDebugger)
            return;
        const redGPUContext = this.redGPUContext;
        if (this.#activeViewDebugger) {
            (0,_draw_debuggerRenderViewList__WEBPACK_IMPORTED_MODULE_5__["default"])(redGPUContext.viewList);
        }
        if (this.#activeResourceDebugger) {
            (0,_draw_debuggerRenderResourceManager__WEBPACK_IMPORTED_MODULE_4__["default"])(redGPUContext.resourceManager);
        }
    }
    #update() {
        this.redGPUContext.gpuAdapter.requestAdapterInfo().then(v => {
            console.log('requestAdapterInfo', v);
            this.#adapterInfo = v;
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedGPUContextDebugger);


/***/ }),

/***/ "./src/context/debugger/category/systemStatePanels/setActiveDebugger.ts":
/*!******************************************************************************!*\
  !*** ./src/context/debugger/category/systemStatePanels/setActiveDebugger.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _funcs_gui_setItemBooleanNameSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../funcs/gui_setItemBooleanNameSize */ "./src/context/debugger/funcs/gui_setItemBooleanNameSize.ts");

const setActiveDebugger = (gui, targetDebugger) => {
    const activeDebuggerFolder = gui.addFolder('Active Debugger');
    (0,_funcs_gui_setItemBooleanNameSize__WEBPACK_IMPORTED_MODULE_0__["default"])(activeDebuggerFolder.add(targetDebugger, 'activeViewDebugger'));
    (0,_funcs_gui_setItemBooleanNameSize__WEBPACK_IMPORTED_MODULE_0__["default"])(activeDebuggerFolder.add(targetDebugger, 'activeResourceDebugger'));
    activeDebuggerFolder.open();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setActiveDebugger);


/***/ }),

/***/ "./src/context/debugger/category/systemStatePanels/setAdapterInfo.ts":
/*!***************************************************************************!*\
  !*** ./src/context/debugger/category/systemStatePanels/setAdapterInfo.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../funcs/gui_setItemDisableInput */ "./src/context/debugger/funcs/gui_setItemDisableInput.ts");

const setAdapterInfo = (gui, targetDebugger) => {
    const { adapterInfo } = targetDebugger;
    const tFolder = gui.addFolder('Adapter Info');
    tFolder.open();
    for (const key in adapterInfo)
        (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_0__["default"])(tFolder.add(adapterInfo, key));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setAdapterInfo);


/***/ }),

/***/ "./src/context/debugger/category/systemStatePanels/setLightClusterInfo.ts":
/*!********************************************************************************!*\
  !*** ./src/context/debugger/category/systemStatePanels/setLightClusterInfo.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _light_pointLightCluster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../light/pointLightCluster */ "./src/light/pointLightCluster/index.ts");
/* harmony import */ var _funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../funcs/gui_setItemDisableInput */ "./src/context/debugger/funcs/gui_setItemDisableInput.ts");


const setLightClusterInfo = (gui) => {
    const tFolder = gui.addFolder('light Cluster Info');
    (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__["default"])(tFolder.add(_light_pointLightCluster__WEBPACK_IMPORTED_MODULE_0__.PassLightClustersHelper, 'TILE_COUNT_X'));
    (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__["default"])(tFolder.add(_light_pointLightCluster__WEBPACK_IMPORTED_MODULE_0__.PassLightClustersHelper, 'TILE_COUNT_Y'));
    (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__["default"])(tFolder.add(_light_pointLightCluster__WEBPACK_IMPORTED_MODULE_0__.PassLightClustersHelper, 'TILE_COUNT_Z'));
    (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__["default"])(tFolder.add(_light_pointLightCluster__WEBPACK_IMPORTED_MODULE_0__.PassLightClustersHelper, 'WORKGROUP_SIZE_X'));
    (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__["default"])(tFolder.add(_light_pointLightCluster__WEBPACK_IMPORTED_MODULE_0__.PassLightClustersHelper, 'WORKGROUP_SIZE_Y'));
    (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__["default"])(tFolder.add(_light_pointLightCluster__WEBPACK_IMPORTED_MODULE_0__.PassLightClustersHelper, 'WORKGROUP_SIZE_Z'));
    (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__["default"])(tFolder.add(_light_pointLightCluster__WEBPACK_IMPORTED_MODULE_0__.PassLightClustersHelper, 'MAX_POINT_LIGHTS_PER_CLUSTER'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLightClusterInfo);


/***/ }),

/***/ "./src/context/debugger/category/systemStatePanels/setRedGPUContext.ts":
/*!*****************************************************************************!*\
  !*** ./src/context/debugger/category/systemStatePanels/setRedGPUContext.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _funcs_gui_setItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../funcs/gui_setItem */ "./src/context/debugger/funcs/gui_setItem.ts");
/* harmony import */ var _funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../funcs/gui_setItemDisableInput */ "./src/context/debugger/funcs/gui_setItemDisableInput.ts");


const setRedGPUContext = (gui, redGPUContext) => {
    const redGPUContextFolder = gui.addFolder('redGPUContext');
    {
        const configurationDescriptionFolder = redGPUContextFolder.addFolder('configurationDescription');
        const t0 = redGPUContext.configurationDescription;
        for (const key in t0) {
            if (typeof t0[key] === 'string')
                (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__["default"])(configurationDescriptionFolder.add(t0, key));
        }
    }
    (0,_funcs_gui_setItem__WEBPACK_IMPORTED_MODULE_0__["default"])(redGPUContextFolder.add(redGPUContext, 'renderScale', 0.01, 1, 0.01));
    (0,_funcs_gui_setItem__WEBPACK_IMPORTED_MODULE_0__["default"])(redGPUContextFolder.add(redGPUContext, 'useMultiSample'));
    // size
    (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__["default"])(redGPUContextFolder.add(redGPUContext, 'width'));
    (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__["default"])(redGPUContextFolder.add(redGPUContext, 'height'));
    (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__["default"])(redGPUContextFolder.add(redGPUContext.pixelSizeInt, 'width').name('pixelSizeInt.width'));
    (0,_funcs_gui_setItemDisableInput__WEBPACK_IMPORTED_MODULE_1__["default"])(redGPUContextFolder.add(redGPUContext.pixelSizeInt, 'height').name('pixelSizeInt.height'));
    redGPUContextFolder.open();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setRedGPUContext);


/***/ }),

/***/ "./src/context/debugger/category/systemStatePanels/setStatePanels.ts":
/*!***************************************************************************!*\
  !*** ./src/context/debugger/category/systemStatePanels/setStatePanels.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setAdapterInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAdapterInfo */ "./src/context/debugger/category/systemStatePanels/setAdapterInfo.ts");
/* harmony import */ var _setLightClusterInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLightClusterInfo */ "./src/context/debugger/category/systemStatePanels/setLightClusterInfo.ts");
/* harmony import */ var _setRedGPUContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setRedGPUContext */ "./src/context/debugger/category/systemStatePanels/setRedGPUContext.ts");



const setStatePanels = (gui, redGPUContext, targetDebugger, openYn = true) => {
    const tFolder = gui.addFolder('System State Panel');
    if (openYn)
        tFolder.open();
    (0,_setAdapterInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(tFolder, targetDebugger);
    (0,_setRedGPUContext__WEBPACK_IMPORTED_MODULE_2__["default"])(tFolder, redGPUContext);
    (0,_setLightClusterInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(tFolder);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setStatePanels);


/***/ }),

/***/ "./src/context/debugger/draw/debuggerRenderResourceManager.ts":
/*!********************************************************************!*\
  !*** ./src/context/debugger/draw/debuggerRenderResourceManager.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const debuggerRenderResourceManager = (resourceManager) => {
    // resource debug
    const debugResource = document.getElementById('___debugResource___');
    const { textureTable, cubeTextureTable, samplerTable } = resourceManager;
    let debugStr = '';
    const map = {
        textureTable,
        cubeTextureTable,
        samplerTable
    };
    const renderTitle = (title) => debugStr += `<div><b>${title}</b></div>`;
    {
        // samplerTable
        renderTitle('samplerTable');
        debugStr += `<div style="padding: 4px;font-size: 10px;background: rgba(0,0,0,0.5);max-width: 200px">`;
        Object.entries(samplerTable).forEach(v => {
            const key = v[0];
            const value = v[1];
            debugStr += `
                    <div>
<!--                        <b>${key}</b>-->
                        <div style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden">
                            ${value['optionString']}
                        </div>
                    </div>`;
        });
        debugStr += `</div>`;
        debugStr += `<div style="margin:6px 0px;height:1px;background: rgba(255,255,255,0.2)"></div>`;
    }
    {
        // textureTable
        renderTitle('textureTable');
        debugStr += `<div style="display:flex;flex-direction:column;gap:4px;padding: 4px;font-size: 10px;background: rgba(0,0,0,0.5);max-width: 200px">`;
        Object.entries(textureTable).forEach(v => {
            const key = v[0];
            const value = v[1];
            const { resource, textureView } = value;
            const info = {
                src: resource.src,
                // label: textureView?.label,
                size: resource.imgBitmap ? `${resource.imgBitmap?.width} x ${resource.imgBitmap?.height}` : '-'
            };
            debugStr += '<div style="display:flex;justify-content:space-between;gap:4px;align-category:center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden">';
            debugStr += `<div style="background:${textureView?.label ? '#00ff00' : '#ff0000'};border-radius: 50%;min-width: 10px;height:10px"></div>`;
            for (const key in info) {
                const value = info[key];
                const style = key === 'src' ? 'white-space: nowrap;text-overflow: ellipsis;overflow: hidden' : 'line-height:1;color:#000;background : rgba(255,255,255,1);padding:2px 4px 3px;border-radius:4px';
                if (value)
                    debugStr += `<span style="${style}">${key} : ${value}</span>`;
            }
            debugStr += '</div>';
        });
        debugStr += `</div>`;
        debugStr += `<div style="margin:6px 0px;height:1px;background: rgba(255,255,255,0.2)"></div>`;
    }
    {
        // textureTable
        renderTitle('cubeTextureTable');
        debugStr += `<div style="padding: 4px;font-size: 10px;background: rgba(0,0,0,0.5);max-width: 200px">`;
        Object.entries(cubeTextureTable).forEach(v => {
            const key = v[0];
            const value = v[1];
            const { resource, textureView } = value;
            const sizeList = [];
            if (resource.imgBitmapList) {
                resource.imgBitmapList.forEach(v => {
                    const t0 = `${v.width} x ${v.height}`;
                    if (sizeList.indexOf(t0) === -1)
                        sizeList.push(t0);
                });
            }
            const info = {
                src: resource.srcList,
                // label: textureView?.label,
                size: resource.imgBitmapList ? sizeList.toString() : '-'
            };
            debugStr += '<div style="display:flex;justify-content:space-between;gap:4px;align-category:center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden">';
            debugStr += `<div style="background:${textureView?.label ? '#00ff00' : '#ff0000'};border-radius: 50%;min-width: 10px;height:10px"></div>`;
            for (const key in info) {
                const value = info[key];
                const style = key === 'src' ? 'white-space: nowrap;text-overflow: ellipsis;overflow: hidden' : 'line-height:1;color:#000;background : rgba(255,255,255,1);padding:2px 4px 3px;border-radius:4px';
                if (value)
                    debugStr += `<span style="${style}">${key} : ${value}</span>`;
            }
            debugStr += '</div>';
        });
        debugStr += `</div>`;
        debugStr += `<div style="margin:6px 0px;height:1px;background: rgba(255,255,255,0.2)"></div>`;
    }
    debugResource.innerHTML = debugStr;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debuggerRenderResourceManager);


/***/ }),

/***/ "./src/context/debugger/draw/debuggerRenderViewList.ts":
/*!*************************************************************!*\
  !*** ./src/context/debugger/draw/debuggerRenderViewList.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const debuggerRenderViewList = (viewList) => {
    const debugView = document.getElementById('___debugView___');
    let debugStr = '';
    viewList.forEach(view => {
        //TODO - 정리
        let debugStr2 = '';
        {
            // view debug
            const { viewDebugger, scene } = view;
            for (const k in viewDebugger) {
                const tData = viewDebugger[k];
                if (typeof tData === 'string') {
                    debugStr2 += `<div><b>${k} : ${tData}</b></div>`;
                }
                else {
                    debugStr2 += `<div><b>${k}</b></div>`;
                    for (const key in tData) {
                        const value = tData[key];
                        const fontSize = (key === 'AVG FPS' || key === 'Frame FPS' || key === 'Render PointLight') ? '14px' : '';
                        const color = (key === 'AVG FPS' || key === 'Frame FPS' || key === 'Render PointLight') ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.5)';
                        debugStr2 += `<div style="font-size:${fontSize};color:${color}">${key} : ${typeof value === 'number' ? (+value.toFixed(2)).toLocaleString() : value}</div>`;
                    }
                    debugStr2 += `<div style="margin:6px 0px;height:1px;background: rgba(255,255,255,0.2)"></div>`;
                }
            }
            //             const renderChild = target => {
            //                 const {children} = target
            //                 return children.map(v => {
            //                     // console.log(v)
            //                     return `
            // <div>
            // 	${v.constructor.name}
            // 	<div style="padding-left: 10px">
            // 		<div>${v.geometry ? v.geometry.constructor.name : ''}</div>
            // 		<div>${v.material?.constructor.name}</div>
            // 		${v.children.length ? `<div style="padding-left: 10px">${renderChild(v.children)}</div>` : ''}
            // 	</div>
            // </div>`
            //                 }).flat().join('').trim()
            //             }
            //             // console.log(renderChild(scene))
            //             //TODO
            //             debugStr2 += `${renderChild(scene)}`
        }
        debugStr += `<div style="background: rgba(0,0,0,0.5);padding: 16px;">${debugStr2}</div>`;
    });
    debugView.innerHTML = `${debugStr}`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debuggerRenderViewList);


/***/ }),

/***/ "./src/context/debugger/funcs/gui_setItem.ts":
/*!***************************************************!*\
  !*** ./src/context/debugger/funcs/gui_setItem.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const gui_setItem = (controller) => {
    controller.listen();
    controller.domElement.parentNode.style.cssText = 'display:flex;justify-content: space-between;';
    controller.domElement.parentNode.querySelector('span').style.cssText = 'width:100%';
    return controller;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gui_setItem);


/***/ }),

/***/ "./src/context/debugger/funcs/gui_setItemBooleanNameSize.ts":
/*!******************************************************************!*\
  !*** ./src/context/debugger/funcs/gui_setItemBooleanNameSize.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const gui_setItemBooleanNameSize = (controller) => {
    controller.listen();
    controller.domElement.parentNode.style.cssText = 'display:flex;justify-content: space-between;';
    controller.domElement.parentNode.querySelector('span').style.cssText = 'width:100%';
    controller.domElement.style.width = '40px';
    return controller;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gui_setItemBooleanNameSize);


/***/ }),

/***/ "./src/context/debugger/funcs/gui_setItemDisableInput.ts":
/*!***************************************************************!*\
  !*** ./src/context/debugger/funcs/gui_setItemDisableInput.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const gui_setItemDisableInput = (controller, width, fontSize) => {
    const rightModeYn = width === 'auto';
    console.log(controller);
    const { domElement, __input, __li } = controller;
    controller.listen();
    domElement.parentNode.style.cssText = 'display:flex;justify-content: space-between;';
    domElement.parentNode.querySelector('span').style.cssText = `max-width:100%;width:auto;${rightModeYn ? 'overflow:initial;text-overflow:initial;' : ''}`;
    domElement.style.width = rightModeYn ? '100%' : (width || '40px');
    __li.style.color = '#888';
    if (__input) {
        __input.disabled = true;
        __input.style.background = 'transparent';
        __input.style.opacity = 0.75;
        __input.style.fontSize = fontSize || '10px';
        __input.style.textAlign = 'right';
    }
    return controller;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gui_setItemDisableInput);


/***/ }),

/***/ "./src/context/index.ts":
/*!******************************!*\
  !*** ./src/context/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RedGPUContext: () => (/* reexport safe */ _RedGPUContext__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   RedGPUContextBase: () => (/* reexport safe */ _RedGPUContextBase__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _RedGPUContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedGPUContext */ "./src/context/RedGPUContext.ts");
/* harmony import */ var _RedGPUContextBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");





/***/ }),

/***/ "./src/light/AmbientLight.ts":
/*!***********************************!*\
  !*** ./src/light/AmbientLight.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resource/buffers/TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource/buffers/uniformBuffer/UniformBufferDescriptor */ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts");
/* harmony import */ var _BaseLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseLight */ "./src/light/BaseLight.ts");



const bufferDefine = new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"]([
    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32x3, valueName: 'color' },
    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'intensity' },
]);
class AmbientLight extends _BaseLight__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(redGPUContext, color = 0x404040, intensity = 1) {
        super(redGPUContext, bufferDefine, color, intensity);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AmbientLight);


/***/ }),

/***/ "./src/light/BaseLight.ts":
/*!********************************!*\
  !*** ./src/light/BaseLight.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/RedGPUContext */ "./src/context/RedGPUContext.ts");
/* harmony import */ var _object3d_base_BaseObject3DTransform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object3d/base/BaseObject3DTransform */ "./src/object3d/base/BaseObject3DTransform.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource/buffers/uniformBuffer/UniformBufferFloat32 */ "./src/resource/buffers/uniformBuffer/UniformBufferFloat32.ts");
/* harmony import */ var _util_color_hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/color/hexadecimalToRgb */ "./src/util/color/hexadecimalToRgb.ts");
/* harmony import */ var _util_errorFunc_throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/errorFunc/throwErrorInstanceOf */ "./src/util/errorFunc/throwErrorInstanceOf.js");





class BaseLight extends _object3d_base_BaseObject3DTransform__WEBPACK_IMPORTED_MODULE_1__["default"] {
    // TODO - dirtyLight를 매쉬와 같이 dirtyPipeline 으로 통일 할지 결정해야함
    dirtyLight = false;
    #r;
    #g;
    #b;
    #a;
    #color;
    #intensity;
    #uniformBufferDescriptor;
    #uniformBuffer;
    #redGPUContext;
    constructor(redGPUContext, uniformBufferDescriptor, color = 0x404040, intensity = 1) {
        super();
        if (!(redGPUContext instanceof _context_RedGPUContext__WEBPACK_IMPORTED_MODULE_0__["default"]))
            (0,_util_errorFunc_throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this, 'redGPUContext', 'RedGPUContext');
        this.#redGPUContext = redGPUContext;
        this.#uniformBufferDescriptor = uniformBufferDescriptor;
        this.#uniformBuffer = new _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_2__["default"](this.redGPUContext, uniformBufferDescriptor);
        //
        this.color = color;
        this.#intensity = intensity;
        this.dirtyLight = true;
    }
    get r() {
        return this.#r;
    }
    get g() {
        return this.#g;
    }
    get b() {
        return this.#b;
    }
    get a() {
        return this.#a;
    }
    get color() {
        return this.#color;
    }
    set color(value) {
        this.#color = value;
        this.dirtyLight = true;
        const rgb = (0,_util_color_hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_3__["default"])(value);
        this.#r = rgb.r;
        this.#g = rgb.g;
        this.#b = rgb.b;
        this.#a = 1;
    }
    get intensity() {
        return this.#intensity;
    }
    set intensity(value) {
        this.#intensity = value;
        this.dirtyLight = true;
    }
    get uniformBufferDescriptor() {
        return this.#uniformBufferDescriptor;
    }
    get uniformBuffer() {
        return this.#uniformBuffer;
    }
    get redGPUContext() {
        return this.#redGPUContext;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseLight);


/***/ }),

/***/ "./src/light/DirectionalLight.ts":
/*!***************************************!*\
  !*** ./src/light/DirectionalLight.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resource/buffers/TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource/buffers/uniformBuffer/UniformBufferDescriptor */ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts");
/* harmony import */ var _BaseLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseLight */ "./src/light/BaseLight.ts");



const bufferDefine = new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"]([
    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32x3, valueName: 'color' },
    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'intensity' },
]);
class DirectionalLight extends _BaseLight__WEBPACK_IMPORTED_MODULE_2__["default"] {
    #targetX = 0;
    #targetY = 0;
    #targetZ = 0;
    constructor(redGPUContext, color = 0x404040, intensity = 1) {
        super(redGPUContext, bufferDefine, color, intensity);
        this.x = 0;
        this.y = 1;
        this.z = 0;
    }
    get targetX() {
        return this.#targetX;
    }
    set targetX(value) {
        this.#targetX = value;
    }
    get targetY() {
        return this.#targetY;
    }
    set targetY(value) {
        this.#targetY = value;
    }
    get targetZ() {
        return this.#targetZ;
    }
    set targetZ(value) {
        this.#targetZ = value;
    }
    get targetPosition() {
        return [this.#targetX, this.#targetY, this.#targetZ];
    }
    setTargetPosition(x, y, z) {
        this.#targetX = x;
        this.#targetY = y;
        this.#targetZ = z;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectionalLight);


/***/ }),

/***/ "./src/light/LightManager.ts":
/*!***********************************!*\
  !*** ./src/light/LightManager.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/errorFunc/throwError */ "./src/util/errorFunc/throwError.js");
/* harmony import */ var _AmbientLight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AmbientLight */ "./src/light/AmbientLight.ts");
/* harmony import */ var _DirectionalLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DirectionalLight */ "./src/light/DirectionalLight.ts");
/* harmony import */ var _PointLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PointLight */ "./src/light/PointLight.ts");




class LightManager {
    static #MAX_DIRECTIONAL_LIGHT_NUM = 3;
    static #MAX_POINT_LIGHT_NUM = 512;
    #ambientLight;
    #directionalLightList = [];
    #pointLightList = [];
    constructor() {
    }
    static get MAX_DIRECTIONAL_LIGHT_NUM() {
        return this.#MAX_DIRECTIONAL_LIGHT_NUM;
    }
    static get MAX_POINT_LIGHT_NUM() {
        return this.#MAX_POINT_LIGHT_NUM;
    }
    get ambientLight() {
        return this.#ambientLight;
    }
    get directionalLightList() {
        return this.#directionalLightList;
    }
    get pointLightList() {
        return this.#pointLightList;
    }
    addLight(light) {
        if (light instanceof _AmbientLight__WEBPACK_IMPORTED_MODULE_1__["default"])
            this.#ambientLight = light;
        else if (light instanceof _DirectionalLight__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            if (this.#directionalLightList.length === LightManager.MAX_DIRECTIONAL_LIGHT_NUM) {
                (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_0__["default"])('MAX_DIRECTIONAL_LIGHT_NUM :', LightManager.MAX_DIRECTIONAL_LIGHT_NUM);
            }
            this.#directionalLightList.push(light);
        }
        else if (light instanceof _PointLight__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            if (this.#pointLightList.length === LightManager.MAX_POINT_LIGHT_NUM) {
                (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_0__["default"])('MAX_POINT_LIGHT_NUM :', LightManager.MAX_POINT_LIGHT_NUM);
            }
            this.#pointLightList.push(light);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightManager);


/***/ }),

/***/ "./src/light/PointLight.ts":
/*!*********************************!*\
  !*** ./src/light/PointLight.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resource/buffers/TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource/buffers/uniformBuffer/UniformBufferDescriptor */ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts");
/* harmony import */ var _BaseLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseLight */ "./src/light/BaseLight.ts");



const bufferDefine = new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"]([
    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32x3, valueName: 'color' },
    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'intensity' },
]);
class PointLight extends _BaseLight__WEBPACK_IMPORTED_MODULE_2__["default"] {
    #radius = 1;
    constructor(redGPUContext, color = 0x404040, intensity = 1) {
        super(redGPUContext, bufferDefine, color, intensity);
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    get radius() {
        return this.#radius;
    }
    set radius(value) {
        this.#radius = value;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PointLight);


/***/ }),

/***/ "./src/light/index.ts":
/*!****************************!*\
  !*** ./src/light/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmbientLight: () => (/* reexport safe */ _AmbientLight__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   BaseLight: () => (/* reexport safe */ _BaseLight__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   DirectionalLight: () => (/* reexport safe */ _DirectionalLight__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   LightManager: () => (/* reexport safe */ _LightManager__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   PointLight: () => (/* reexport safe */ _PointLight__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _AmbientLight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AmbientLight */ "./src/light/AmbientLight.ts");
/* harmony import */ var _BaseLight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseLight */ "./src/light/BaseLight.ts");
/* harmony import */ var _DirectionalLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DirectionalLight */ "./src/light/DirectionalLight.ts");
/* harmony import */ var _LightManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LightManager */ "./src/light/LightManager.ts");
/* harmony import */ var _PointLight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PointLight */ "./src/light/PointLight.ts");








/***/ }),

/***/ "./src/light/pointLightCluster/PassLightClusters.ts":
/*!**********************************************************!*\
  !*** ./src/light/pointLightCluster/PassLightClusters.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _systemShaderDefine_shaderDefineReplace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../systemShaderDefine/shaderDefineReplace */ "./src/systemShaderDefine/shaderDefineReplace.ts");
/* harmony import */ var _PassLightClusters_wgsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PassLightClusters.wgsl */ "./src/light/pointLightCluster/PassLightClusters.wgsl");
/* harmony import */ var _PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PassLightClustersHelper */ "./src/light/pointLightCluster/PassLightClustersHelper.ts");




// Initialize empty array with 4 zeros
const emptyArray = new Uint32Array([0, 0, 0, 0]);
// Class for creating 3D pointLight_Clusters
class PassLightClusters extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #targetView;
    #clusterLightBindGroup;
    #clusterLightPipeline;
    #clusterLightsBuffer;
    // Constructor for initializing class instances
    constructor(redGPUContext, targetView) {
        super(redGPUContext);
        this.#targetView = targetView;
        this.#initPipeLine();
        console.log('PassLightClusters', this);
    }
    // Getter method for clusterLightsBuffer
    get clusterLightsBuffer() {
        return this.#clusterLightsBuffer;
    }
    // Render method for computing pass encoder and command encoder
    render(commandEncoder, passEncoder) {
        const { gpuDevice } = this.redGPUContext;
        const systemUniformBindGroup = this.#targetView.renderInfo_SystemUniformBindGroup;
        if (systemUniformBindGroup) {
            const DISPATCH_SIZE = _PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getDispatchSize();
            this.redGPUContext.gpuDevice.queue.writeBuffer(this.clusterLightsBuffer, 0, emptyArray);
            passEncoder.setPipeline(this.#clusterLightPipeline);
            passEncoder.setBindGroup(0, systemUniformBindGroup);
            passEncoder.setBindGroup(1, this.#clusterLightBindGroup);
            passEncoder.dispatchWorkgroups(DISPATCH_SIZE[0], DISPATCH_SIZE[1], DISPATCH_SIZE[2]);
        }
    }
    // Method for initializing pipeline
    #initPipeLine() {
        const { gpuDevice } = this.redGPUContext;
        const source = (0,_systemShaderDefine_shaderDefineReplace__WEBPACK_IMPORTED_MODULE_1__["default"])(_PassLightClusters_wgsl__WEBPACK_IMPORTED_MODULE_2__["default"]);
        this.#clusterLightsBuffer = gpuDevice.createBuffer({
            size: _PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getPointLight_ClusterLightsBufferSize(),
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        var clusterLightBindGroupLayout = gpuDevice.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.COMPUTE,
                    buffer: { type: 'read-only-storage' }
                }
            ]
        });
        this.#clusterLightBindGroup = gpuDevice.createBindGroup({
            label: 'clusterLightBindGroup',
            layout: clusterLightBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.#targetView.passLightClustersBound.clusterBoundBuffer
                    }
                }
            ]
        });
        this.#clusterLightPipeline = gpuDevice.createComputePipeline({
            label: 'clusterLightPipeline',
            layout: gpuDevice.createPipelineLayout({
                bindGroupLayouts: [
                    this.#targetView.systemUniformsBindGroupLayout,
                    clusterLightBindGroupLayout
                ]
            }),
            compute: {
                module: gpuDevice.createShaderModule({
                    code: source,
                    label: "Cluster Light"
                }),
                entryPoint: 'main'
            }
        });
    }
}
// Export the class as a default module
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PassLightClusters);


/***/ }),

/***/ "./src/light/pointLightCluster/PassLightClustersBound.ts":
/*!***************************************************************!*\
  !*** ./src/light/pointLightCluster/PassLightClustersBound.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _systemShaderDefine_shaderDefineReplace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../systemShaderDefine/shaderDefineReplace */ "./src/systemShaderDefine/shaderDefineReplace.ts");
/* harmony import */ var _PassLightClustersBound_wgsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PassLightClustersBound.wgsl */ "./src/light/pointLightCluster/PassLightClustersBound.wgsl");
/* harmony import */ var _PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PassLightClustersHelper */ "./src/light/pointLightCluster/PassLightClustersHelper.ts");




class PassLightClustersBound extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #targetView;
    #clusterBoundBuffer;
    #clusterBoundBindGroupLayout;
    #clusterBoundBindGroup;
    #clusterBoundPipeline;
    constructor(redGPUContext, targetView) {
        super(redGPUContext);
        this.#targetView = targetView;
        this.#initPipeLine();
    }
    // Getter for clusterBoundBuffer
    get clusterBoundBuffer() {
        return this.#clusterBoundBuffer;
    }
    render(commandEncoder, passEncoder) {
        const sysUniformBindGroup = this.#targetView.renderInfo_SystemUniformBindGroup;
        if (sysUniformBindGroup) {
            const DISPATCH_SIZE = _PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getDispatchSize();
            passEncoder.setPipeline(this.#clusterBoundPipeline);
            passEncoder.setBindGroup(0, sysUniformBindGroup);
            passEncoder.setBindGroup(1, this.#clusterBoundBindGroup);
            passEncoder.dispatchWorkgroups(DISPATCH_SIZE[0], DISPATCH_SIZE[1], DISPATCH_SIZE[2]);
        }
    }
    #initPipeLine() {
        const { gpuDevice } = this.redGPUContext;
        const source = (0,_systemShaderDefine_shaderDefineReplace__WEBPACK_IMPORTED_MODULE_1__["default"])(_PassLightClustersBound_wgsl__WEBPACK_IMPORTED_MODULE_2__["default"]);
        this.#clusterBoundBuffer = gpuDevice.createBuffer({
            size: _PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getTotalTileSize() * 32,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        this.#clusterBoundBindGroupLayout = gpuDevice.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.COMPUTE,
                    buffer: { type: 'storage' }
                }
            ]
        });
        this.#clusterBoundBindGroup = gpuDevice.createBindGroup({
            label: 'clusterBoundBindGroup',
            layout: this.#clusterBoundBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.#clusterBoundBuffer,
                    }
                }
            ],
        });
        this.#clusterBoundPipeline = gpuDevice.createComputePipeline({
            label: 'clusterBoundPipeline',
            layout: gpuDevice.createPipelineLayout({
                bindGroupLayouts: [
                    this.#targetView.systemUniformsBindGroupLayout,
                    this.#clusterBoundBindGroupLayout,
                ]
            }),
            compute: {
                module: gpuDevice.createShaderModule({
                    code: source,
                    label: "Cluster Bounds"
                }),
                entryPoint: 'main',
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PassLightClustersBound);


/***/ }),

/***/ "./src/light/pointLightCluster/PassLightClustersHelper.ts":
/*!****************************************************************!*\
  !*** ./src/light/pointLightCluster/PassLightClustersHelper.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PassLightClustersHelper = {
    TILE_COUNT_X: 32,
    TILE_COUNT_Y: 32,
    TILE_COUNT_Z: 128,
    WORKGROUP_SIZE_X: 4,
    WORKGROUP_SIZE_Y: 4,
    WORKGROUP_SIZE_Z: 16,
    MAX_POINT_LIGHTS_PER_CLUSTER: 32,
    getTotalTileSize: () => PassLightClustersHelper.TILE_COUNT_X * PassLightClustersHelper.TILE_COUNT_Y * PassLightClustersHelper.TILE_COUNT_Z,
    getPointLight_ClusterLightsBufferSize: () => {
        const totalTileSize = PassLightClustersHelper.getTotalTileSize();
        return (8 * totalTileSize) + (8 * PassLightClustersHelper.MAX_POINT_LIGHTS_PER_CLUSTER * totalTileSize) + 4;
    },
    getDispatchSize: () => [
        Math.ceil(PassLightClustersHelper.TILE_COUNT_X / PassLightClustersHelper.WORKGROUP_SIZE_X),
        Math.ceil(PassLightClustersHelper.TILE_COUNT_Y / PassLightClustersHelper.WORKGROUP_SIZE_Y),
        Math.ceil(PassLightClustersHelper.TILE_COUNT_Z / PassLightClustersHelper.WORKGROUP_SIZE_Z)
    ]
};
Object.freeze(PassLightClustersHelper);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PassLightClustersHelper);


/***/ }),

/***/ "./src/light/pointLightCluster/index.ts":
/*!**********************************************!*\
  !*** ./src/light/pointLightCluster/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassLightClusters: () => (/* reexport safe */ _PassLightClusters__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   PassLightClustersBound: () => (/* reexport safe */ _PassLightClustersBound__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   PassLightClustersHelper: () => (/* reexport safe */ _PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _PassLightClusters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PassLightClusters */ "./src/light/pointLightCluster/PassLightClusters.ts");
/* harmony import */ var _PassLightClustersBound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PassLightClustersBound */ "./src/light/pointLightCluster/PassLightClustersBound.ts");
/* harmony import */ var _PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PassLightClustersHelper */ "./src/light/pointLightCluster/PassLightClustersHelper.ts");






/***/ }),

/***/ "./src/main/render/Renderer.ts":
/*!*************************************!*\
  !*** ./src/main/render/Renderer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _renderFinal_FinalRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderFinal/FinalRenderer */ "./src/main/render/renderFinal/FinalRenderer.ts");


class Renderer extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #prevViewNum = 0;
    #prevTime;
    #requestID;
    #prevUseMultiSample;
    #finalRenderer;
    #mainRender;
    #afterRender;
    #beforeRender;
    constructor(redGPUContext) {
        super(redGPUContext);
        this.#finalRenderer = new _renderFinal_FinalRenderer__WEBPACK_IMPORTED_MODULE_1__["default"](redGPUContext);
    }
    get mainRender() {
        return this.#mainRender;
    }
    set mainRender(value) {
        this.#mainRender = value;
    }
    get afterRender() {
        return this.#afterRender;
    }
    set afterRender(value) {
        this.#afterRender = value;
    }
    get beforeRender() {
        return this.#beforeRender;
    }
    set beforeRender(value) {
        this.#beforeRender = value;
    }
    startRender() {
        this.#prevTime = performance.now();
        this.renderFrame();
    }
    stopRender() {
        this.#prevTime = performance.now();
        cancelAnimationFrame(this.#requestID);
    }
    renderFrame(nowTime = 0) {
        // nowTime = performance.now()
        const redGPUContext = this.redGPUContext;
        const targetDebugger = redGPUContext.debugger;
        const soloRenderYn = redGPUContext.viewList.length === 1;
        if (nowTime - this.#prevTime > 8) {
            let hasPostEffect = false;
            redGPUContext.viewList.forEach(view => {
                this.#renderView(view, nowTime, redGPUContext, soloRenderYn);
            });
            redGPUContext.viewList.forEach(view => {
                if (view.postEffectManager.children.length)
                    hasPostEffect = true;
            });
            if (!soloRenderYn || hasPostEffect) {
                this.#finalRenderer.render(redGPUContext.viewList);
            }
            this.#prevTime = nowTime;
            targetDebugger.render();
            redGPUContext.dirtyMultiSample = false;
        }
        this.#requestID = requestAnimationFrame((time) => {
            this.renderFrame(time);
        });
    }
    #renderView(view, nowTime, redGPUContext, soloRender = true) {
        const { scene, pixelViewRectInt } = view;
        let beforeTime = 0;
        let mainTime = 0;
        let afterTime = 0;
        let checkStartTime = nowTime;
        if (this.#beforeRender) {
            this.#beforeRender(nowTime, view, scene);
        }
        beforeTime = performance.now() - checkStartTime;
        checkStartTime = performance.now();
        if (this.#mainRender) {
            this.#mainRender(nowTime, view, scene);
        }
        if (view.camera.dirtyTransformState)
            view.camera.update();
        let renderMeshNum = 0;
        let triangleNum = 0;
        const { gpuDevice, gpuContext } = redGPUContext;
        const commandEncoder = gpuDevice.createCommandEncoder();
        const hasPostEffect = !!view.postEffectManager.children.length;
        if (soloRender && !hasPostEffect) {
            view.resolveTexture = gpuContext.getCurrentTexture();
            view.resolveTextureView = view.resolveTexture.createView();
        }
        if (redGPUContext.dirtyMultiSample
            || !view.resultTexture
            || view.resultTexture.width !== pixelViewRectInt[2]
            || view.resultTexture.height !== pixelViewRectInt[3]) {
            console.log('reset view.resultTexture');
            const size = [pixelViewRectInt[2], pixelViewRectInt[3]];
            const sampleCount = redGPUContext.useMultiSample ? 4 : 1;
            const usage = hasPostEffect ? (GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING) : soloRender ? GPUTextureUsage.RENDER_ATTACHMENT : (GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING);
            const format = navigator.gpu.getPreferredCanvasFormat();
            view.resultTexture = gpuDevice.createTexture({
                size,
                sampleCount,
                format,
                usage
            });
            view.resultTextureView = view.resultTexture.createView({ label: `${view.label}_resultTextureView` });
            ///////////
            if (soloRender && !hasPostEffect) {
            }
            else {
                view.resolveTexture = gpuDevice.createTexture({
                    size,
                    sampleCount: 1,
                    format,
                    usage,
                });
                view.resolveTextureView = view.resolveTexture.createView({ label: `${view.label}_resolveTextureView` });
            }
            ///////////
            view.depthTexture = gpuDevice.createTexture({
                size,
                sampleCount,
                format: 'depth24plus-stencil8',
                usage,
            });
            view.depthTextureView = view.depthTexture.createView();
            console.log('뷰렌더텍스쳐갱신');
        }
        const { backgroundColorRGB, backgroundAlpha } = scene;
        const renderPassDescriptor = {
            /**
             * @typedef {GPURenderPassColorAttachment}
             */
            colorAttachments: [
                {
                    view: redGPUContext.useMultiSample ? view.resultTextureView : view.resolveTextureView,
                    resolveTarget: redGPUContext.useMultiSample ? view.resolveTextureView : undefined,
                    // TODO - Scene의 색상을 받도록 수정
                    clearValue: {
                        r: backgroundColorRGB[0],
                        g: backgroundColorRGB[1],
                        b: backgroundColorRGB[2],
                        a: backgroundAlpha
                    },
                    loadOp: 'clear',
                    storeOp: 'store',
                },
            ],
            depthStencilAttachment: {
                view: view.depthTextureView,
                depthClearValue: 1.0,
                depthLoadOp: "clear",
                depthStoreOp: "store",
                stencilClearValue: 0,
                stencilLoadOp: "load",
                stencilStoreOp: "store",
            }
        };
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setBindGroup(0, view.renderInfo_SystemUniformBindGroup);
        passEncoder.setViewport(0, 0, pixelViewRectInt[2], pixelViewRectInt[3], 0, 1);
        passEncoder.setScissorRect(0, 0, pixelViewRectInt[2], pixelViewRectInt[3]);
        view.updateSystemUniform();
        view.updateClusters();
        /////////
        scene.skyBox?.render(view, passEncoder, nowTime);
        scene.grid?.render(view, passEncoder, nowTime);
        scene.axis?.render(view, passEncoder, nowTime);
        /////////
        {
            const list = view.scene.children;
            let i = view.scene.children.length;
            while (i--) {
                const t0 = list[i].render(view, passEncoder, nowTime);
                renderMeshNum += t0 ? 1 : 0;
                if (t0.geometry)
                    triangleNum += t0.geometry.indexBuffer.indexNum / 3;
            }
        }
        //
        passEncoder.end();
        gpuDevice.queue.submit([commandEncoder.finish()]);
        {
            if (view.postEffectManager.children.length) {
                view.resolveTextureView = view.postEffectManager.render();
            }
        }
        mainTime = performance.now() - checkStartTime;
        checkStartTime = performance.now();
        if (this.#afterRender) {
            this.#afterRender(nowTime, view, scene);
        }
        afterTime = performance.now() - checkStartTime;
        {
            view.viewDebugger.update(view, scene, nowTime, this.#prevTime, beforeTime, mainTime, afterTime, renderMeshNum, triangleNum);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Renderer);


/***/ }),

/***/ "./src/main/render/index.ts":
/*!**********************************!*\
  !*** ./src/main/render/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Renderer: () => (/* reexport safe */ _Renderer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ "./src/main/render/Renderer.ts");




/***/ }),

/***/ "./src/main/render/renderFinal/FinalRenderer.ts":
/*!******************************************************!*\
  !*** ./src/main/render/renderFinal/FinalRenderer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _resource_buffers_buffer_VertexBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../resource/buffers/buffer/VertexBuffer */ "./src/resource/buffers/buffer/VertexBuffer.ts");
/* harmony import */ var _resource_buffers_interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../resource/buffers/interleaveInfo/InterleaveInfo */ "./src/resource/buffers/interleaveInfo/InterleaveInfo.ts");
/* harmony import */ var _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../resource/buffers/interleaveInfo/InterleaveUnit */ "./src/resource/buffers/interleaveInfo/InterleaveUnit.ts");
/* harmony import */ var _resource_makeShaderModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../resource/makeShaderModule */ "./src/resource/makeShaderModule.ts");
/* harmony import */ var _resource_texture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../resource/texture */ "./src/resource/texture/index.ts");
/* harmony import */ var _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/gl-matrix */ "./src/util/gl-matrix/index.js");
/* harmony import */ var _fragment_wgsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fragment.wgsl */ "./src/main/render/renderFinal/fragment.wgsl");
/* harmony import */ var _vertex_wgsl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vertex.wgsl */ "./src/main/render/renderFinal/vertex.wgsl");









class FinalRenderer extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    vertexBuffer;
    sampler;
    uniformsBindGroupLayout;
    uniformBindGroup;
    pipeline;
    #matrix;
    constructor(redGPUContext) {
        super(redGPUContext);
        const { gpuDevice } = redGPUContext;
        const vShaderModule = (0,_resource_makeShaderModule__WEBPACK_IMPORTED_MODULE_4__["default"])(gpuDevice, _vertex_wgsl__WEBPACK_IMPORTED_MODULE_8__["default"], 'FinalRenderer_vShaderModule');
        const fShaderModule = (0,_resource_makeShaderModule__WEBPACK_IMPORTED_MODULE_4__["default"])(gpuDevice, _fragment_wgsl__WEBPACK_IMPORTED_MODULE_7__["default"], 'FinalRenderer_fShaderModule');
        console.log(vShaderModule, fShaderModule);
        this.#matrix = _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.mat4.create();
        ////////////////////////////////////////////////////////////////////////
        // make vertexBuffer
        this.vertexBuffer = new _resource_buffers_buffer_VertexBuffer__WEBPACK_IMPORTED_MODULE_1__["default"](redGPUContext, new Float32Array([
            //x,y,z, u,v
            -1.0, -1.0, 0.0, 0.0, 1.0,
            1.0, -1.0, 0.0, 1.0, 1.0,
            -1.0, 1.0, 0.0, 0.0, 0.0,
            -1.0, 1.0, 0.0, 0.0, 0.0,
            1.0, -1.0, 0.0, 1.0, 1.0,
            1.0, 1.0, 0.0, 1.0, 0.0
        ]), new _resource_buffers_interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_2__["default"]([
            new _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_3__["default"](_resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_3__["default"].VERTEX_POSITION, "float32x3"),
            new _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_3__["default"](_resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_3__["default"].TEXCOORD, 'float32x2')
        ]));
        this.uniformsBindGroupLayout = gpuDevice.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.VERTEX,
                    buffer: {
                        type: 'uniform',
                    },
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {
                        type: 'filtering',
                    },
                },
                {
                    binding: 2,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {}
                }
            ]
        });
        this.sampler = new _resource_texture__WEBPACK_IMPORTED_MODULE_5__.TextureSampler(redGPUContext, {
            magFilter: "linear",
            minFilter: "linear",
            mipmapFilter: "nearest"
        });
        /////
        console.log(this.vertexBuffer);
        const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
        const pipeLineDescriptor = {
            // set bindGroupLayouts
            layout: gpuDevice.createPipelineLayout({ bindGroupLayouts: [this.uniformsBindGroupLayout] }),
            vertex: {
                module: vShaderModule,
                entryPoint: 'main',
                buffers: [
                    {
                        arrayStride: this.vertexBuffer.arrayStride,
                        attributes: this.vertexBuffer.attributes.map((v, index) => {
                            return {
                                // position
                                shaderLocation: index,
                                offset: v.offset,
                                format: v.format
                            };
                        })
                    }
                ]
            },
            fragment: {
                module: fShaderModule,
                entryPoint: 'main',
                targets: [
                    {
                        format: presentationFormat,
                        blend: {
                            color: {
                                srcFactor: "src-alpha",
                                dstFactor: "one-minus-src-alpha",
                                operation: "add"
                            },
                            alpha: {
                                srcFactor: "one",
                                dstFactor: "one-minus-src-alpha",
                                operation: "add"
                            }
                        }
                    },
                ],
            },
        };
        this.pipeline = gpuDevice.createRenderPipeline(pipeLineDescriptor);
        /////
    }
    render(viewList) {
        const redGPUContext = this.redGPUContext;
        const { gpuDevice, gpuContext, pixelSizeInt } = redGPUContext;
        const commandEncoder = gpuDevice.createCommandEncoder();
        const textureView = gpuContext.getCurrentTexture().createView();
        const renderPassDescriptor = {
            /**
             * @typedef {GPURenderPassColorAttachment}
             */
            colorAttachments: [
                {
                    view: textureView,
                    clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 0.0 },
                    loadOp: 'clear',
                    storeOp: 'store',
                },
            ],
            // depthStencilAttachment: {
            //     view: this.depthTextureView,
            //     depthClearValue: 1.0,
            //     depthLoadOp: "clear",
            //     depthStoreOp: "store",
            //     stencilClearValue: 0,
            //     stencilLoadOp: "load",
            //     stencilStoreOp: "store",
            // }
        };
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(this.pipeline);
        //
        passEncoder.setViewport(0, 0, pixelSizeInt.width, pixelSizeInt.height, 0, 1);
        passEncoder.setScissorRect(0, 0, pixelSizeInt.width, pixelSizeInt.height);
        viewList.forEach((view) => {
            const { pixelViewRect } = view;
            // console.log(view.resolveTextureView,view.resultTextureView.label)
            const uniformBindGroupDescriptor = {
                layout: this.uniformsBindGroupLayout,
                entries: [
                    {
                        binding: 0,
                        resource: {
                            buffer: view.finalRenderUniformBuffer,
                            offset: 0,
                            size: 4 * 4 * Float32Array.BYTES_PER_ELEMENT
                        }
                    },
                    {
                        binding: 1,
                        resource: this.sampler.gpuSampler,
                    },
                    {
                        binding: 2,
                        resource: view.resolveTextureView,
                    }
                ]
            };
            this.uniformBindGroup = gpuDevice.createBindGroup(uniformBindGroupDescriptor);
            passEncoder.setVertexBuffer(0, this.vertexBuffer.gpuBuffer);
            passEncoder.setBindGroup(0, this.uniformBindGroup);
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.mat4.identity(this.#matrix);
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.mat4.ortho(this.#matrix, 0., // left
            1., // right
            0., // bottom
            1., // top,
            -1000, 1000);
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.mat4.scale(this.#matrix, this.#matrix, [
                1 / pixelSizeInt.width,
                1 / pixelSizeInt.height,
                1
            ]);
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.mat4.translate(this.#matrix, this.#matrix, [
                (pixelViewRect[2] / 2),
                (pixelSizeInt.height - pixelViewRect[3] / 2),
                0
            ]);
            const temp = _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.mat4.create();
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.mat4.scale(temp, temp, [
                pixelViewRect[2] / 2,
                pixelViewRect[3] / 2,
                1
            ]);
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.mat4.translate(this.#matrix, this.#matrix, [
                (pixelViewRect[0]),
                (-pixelViewRect[1]),
                0
            ]);
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.mat4.multiply(this.#matrix, this.#matrix, temp);
            gpuDevice.queue.writeBuffer(view.finalRenderUniformBuffer, 0, this.#matrix);
            ///////////////////////////////////////////////////////////////////
            // setVertexBuffer
            passEncoder.draw(6, 1, 0, 0);
        });
        passEncoder.setViewport(0, 0, pixelSizeInt.width, pixelSizeInt.height, 0, 1);
        passEncoder.setScissorRect(0, 0, pixelSizeInt.width, pixelSizeInt.height);
        //
        passEncoder.end();
        gpuDevice.queue.submit([commandEncoder.finish()]);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinalRenderer);


/***/ }),

/***/ "./src/main/scene/Scene.ts":
/*!*********************************!*\
  !*** ./src/main/scene/Scene.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _light_LightManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../light/LightManager */ "./src/light/LightManager.ts");
/* harmony import */ var _object3d_base_DisplayContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../object3d/base/DisplayContainer */ "./src/object3d/base/DisplayContainer.ts");
/* harmony import */ var _util_color_hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/color/hexadecimalToRgb */ "./src/util/color/hexadecimalToRgb.ts");



let UUID = 0;
/**
 * @description
 * - 장면을 구상하는 Scene 객체입니다.
 * - 메쉬와 같은 각종 오브젝트를 설정하고 배치하는 공간입니다.
 */
class Scene extends _object3d_base_DisplayContainer__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Scene의 axis 값
     * @private
     */
    #axis;
    /**
     * Scene의 skyBox 값
     * @private
     */
    #skyBox;
    /**
     * Scene의 grid 값
     * @private
     */
    #grid;
    /**
     * Scene의 label 값
     * @private
     */
    #label;
    /**
     * lightManager
     * Scene에 사용되는 Light 객체를 관리하는 매니저 객체
     * @private
     */
    #lightManager;
    #backgroundColorRGB = [0, 0, 0];
    /**
     * Scene의 배경 색상
     * @private
     */
    #backgroundColor = 0x000000;
    /**
     * Scene의 배경 색상 알파 값
     * @private
     */
    #backgroundAlpha = 1;
    /**
     * @constructor 새로운 Scene 오브젝트를 생성합니다.
     * @param label
     */
    constructor(label) {
        super();
        this.#label = label || `Scene${UUID++}`;
        this.#lightManager = new _light_LightManager__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    /**
     * Scene에 설정된 axis 값을 반환 합니다.
     */
    get axis() {
        return this.#axis;
    }
    /**
     * Scene에 Axis 객체를 설정합니다.
     * @param value
     */
    set axis(value) {
        this.#axis = value;
    }
    /**
     * Scene에 설정된 skybox 값을 반환 합니다.
     */
    get skyBox() {
        return this.#skyBox;
    }
    /**
     * Scene에 SkyBox 객체를 설정합니다.
     * @param value
     */
    set skyBox(value) {
        this.#skyBox = value;
    }
    /**
     * Scene에 설정된 grid 값을 반환 합니다.
     */
    get grid() {
        return this.#grid;
    }
    /**
     * Scene에 Grid 객체를 설정합니다.
     * @param value
     */
    set grid(value) {
        this.#grid = value;
    }
    /**
     * Scene의 label을 반환 합니다.
     */
    get label() {
        return this.#label;
    }
    /**
     * Scene에 label을 설정합니다.
     * @param value
     */
    set label(value) {
        this.#label = value;
    }
    /**
     * lightManager 반환
     */
    get lightManager() {
        return this.#lightManager;
    }
    /**
     * backgroundColor 설정시 세팅되는 RGB값 반환
     * GPU 렌더링시 사용됨
     */
    get backgroundColorRGB() {
        return this.#backgroundColorRGB;
    }
    /**
     * Scene의 배경 색상을 반환
     */
    get backgroundColor() {
        return this.#backgroundColor;
    }
    /**
     * Scene의  배경 색상을 값을 설정 합니다.
     * 렌더링시 Scene의 배경 색상이 됩니다.
     * 값을 입력하고 조건을 통과하면 backgroundColorRGB를 자동으로 생성합니다.
     * ex) 0xffffff
     * @param value
     */
    set backgroundColor(value) {
        this.#backgroundColor = value;
        let rgb = (0,_util_color_hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
        this.#backgroundColorRGB[0] = rgb.r;
        this.#backgroundColorRGB[1] = rgb.g;
        this.#backgroundColorRGB[2] = rgb.b;
    }
    /**
     * Scene의 배경 색상 알파값을 반환 합니다.
     * 렌더링시 Scene의 배경색상의 알파값으로 사용됩니다
     * ```ex) backgroundColor가 0x000000 이고 backgroundAlpha 값이 0.5일 경우 rgba(0,0,0,0.5)로 배경색상이 결정됩니다.```
     */
    get backgroundAlpha() {
        return this.#backgroundAlpha;
    }
    /**
     * Scene의 배경 색상 알파 값을 설정합니다.
     * @param value
     */
    set backgroundAlpha(value) {
        this.#backgroundAlpha = value;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scene);


/***/ }),

/***/ "./src/main/scene/index.ts":
/*!*********************************!*\
  !*** ./src/main/scene/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Axis: () => (/* reexport safe */ _sceneHelper__WEBPACK_IMPORTED_MODULE_2__.Axis),
/* harmony export */   Grid: () => (/* reexport safe */ _sceneHelper__WEBPACK_IMPORTED_MODULE_2__.Grid),
/* harmony export */   NormalHelper: () => (/* reexport safe */ _sceneHelper__WEBPACK_IMPORTED_MODULE_2__.NormalHelper),
/* harmony export */   Scene: () => (/* reexport safe */ _Scene__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   SkyBox: () => (/* reexport safe */ _skyBox_SkyBox__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene */ "./src/main/scene/Scene.ts");
/* harmony import */ var _skyBox_SkyBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skyBox/SkyBox */ "./src/main/scene/skyBox/SkyBox.ts");
/* harmony import */ var _sceneHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sceneHelper */ "./src/main/scene/sceneHelper/index.ts");






/***/ }),

/***/ "./src/main/scene/sceneHelper/asix/Axis.ts":
/*!*************************************************!*\
  !*** ./src/main/scene/sceneHelper/asix/Axis.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_colorMaterial_ColorMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../material/colorMaterial/ColorMaterial */ "./src/material/colorMaterial/ColorMaterial.ts");
/* harmony import */ var _object3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../object3d */ "./src/object3d/index.ts");
/* harmony import */ var _resource_geometry_primitives_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../resource/geometry/primitives/Box */ "./src/resource/geometry/primitives/Box.ts");
/* harmony import */ var _resource_geometry_primitives_Sphere__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../resource/geometry/primitives/Sphere */ "./src/resource/geometry/primitives/Sphere.ts");




class Axis extends _object3d__WEBPACK_IMPORTED_MODULE_1__.Mesh {
    constructor(redGPUContext) {
        super(redGPUContext, null, null);
        const centerMesh = new _object3d__WEBPACK_IMPORTED_MODULE_1__.Mesh(redGPUContext, new _resource_geometry_primitives_Sphere__WEBPACK_IMPORTED_MODULE_3__["default"](redGPUContext, 0.5), new _material_colorMaterial_ColorMaterial__WEBPACK_IMPORTED_MODULE_0__["default"](redGPUContext));
        this.addChild(centerMesh);
        let tAxis;
        const tGeo = new _resource_geometry_primitives_Box__WEBPACK_IMPORTED_MODULE_2__["default"](redGPUContext);
        const tMatX = new _material_colorMaterial_ColorMaterial__WEBPACK_IMPORTED_MODULE_0__["default"](redGPUContext, 0xff0000);
        const tMatY = new _material_colorMaterial_ColorMaterial__WEBPACK_IMPORTED_MODULE_0__["default"](redGPUContext, 0x00ff00);
        const tMatZ = new _material_colorMaterial_ColorMaterial__WEBPACK_IMPORTED_MODULE_0__["default"](redGPUContext, 0x0000ff);
        // xAxis
        tAxis = new _object3d__WEBPACK_IMPORTED_MODULE_1__.Mesh(redGPUContext, tGeo, tMatX);
        tAxis.setScale(5, 0.1, 0.1);
        tAxis.x = 2.5;
        this.addChild(tAxis);
        ////////////////////////////////////////////
        // yAxis
        tAxis = new _object3d__WEBPACK_IMPORTED_MODULE_1__.Mesh(redGPUContext, tGeo, tMatY);
        tAxis.setScale(0.1, 5, 0.1);
        tAxis.y = 2.5;
        this.addChild(tAxis);
        ////////////////////////////////////////////
        // zAxis
        tAxis = new _object3d__WEBPACK_IMPORTED_MODULE_1__.Mesh(redGPUContext, tGeo, tMatZ);
        tAxis.setScale(0.1, 0.1, 5);
        tAxis.z = 2.5;
        this.addChild(tAxis);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axis);


/***/ }),

/***/ "./src/main/scene/sceneHelper/grid/Grid.ts":
/*!*************************************************!*\
  !*** ./src/main/scene/sceneHelper/grid/Grid.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../object3d */ "./src/object3d/index.ts");
/* harmony import */ var _resource_buffers_interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../resource/buffers/interleaveInfo/InterleaveInfo */ "./src/resource/buffers/interleaveInfo/InterleaveInfo.ts");
/* harmony import */ var _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../resource/buffers/interleaveInfo/InterleaveUnit */ "./src/resource/buffers/interleaveInfo/InterleaveUnit.ts");
/* harmony import */ var _resource_geometry_Geometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../resource/geometry/Geometry */ "./src/resource/geometry/Geometry.ts");
/* harmony import */ var _util_color_hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/color/hexadecimalToRgb */ "./src/util/color/hexadecimalToRgb.ts");
/* harmony import */ var _GridMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GridMaterial */ "./src/main/scene/sceneHelper/grid/GridMaterial.ts");






class Grid extends _object3d__WEBPACK_IMPORTED_MODULE_0__.Mesh {
    #size = 100;
    #divisions = 100;
    #centerColor = 0xcccccc;
    #color = 0x666666;
    constructor(redGPUContext, size = 100, divisions = 100, centerColor = 0xcccccc, color = 0x666666) {
        super(redGPUContext);
        this.#size = size;
        this.#divisions = divisions;
        this.#centerColor = centerColor;
        this.#color = color;
        this.topology = 'line-list';
        this.#update();
    }
    get size() {
        return this.#size;
    }
    set size(value) {
        this.#size = value;
        this.#update();
    }
    get divisions() {
        return this.#divisions;
    }
    set divisions(value) {
        this.#divisions = value;
        this.#update();
    }
    get centerColor() {
        return this.#centerColor;
    }
    set centerColor(value) {
        this.#centerColor = value;
        this.#update();
    }
    get color() {
        return this.#color;
    }
    set color(value) {
        this.#color = value;
        this.#update();
    }
    #update() {
        let redGPUContext = this.redGPUContext;
        let center, step, halfSize;
        let i, k, tColor;
        let interleaveData = [];
        center = this.divisions / 2;
        step = this.size / this.divisions;
        halfSize = this.size / 2;
        for (i = 0, k = -halfSize; i <= this.divisions; i++, k += step) {
            tColor = i === center ? (0,_util_color_hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_4__["default"])(this.centerColor) : (0,_util_color_hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_4__["default"])(this.color);
            interleaveData.push(-halfSize, 0, k, tColor.r, tColor.g, tColor.b, 1, halfSize, 0, k, tColor.r, tColor.g, tColor.b, 1, k, 0, -halfSize, tColor.r, tColor.g, tColor.b, 1, k, 0, halfSize, tColor.r, tColor.g, tColor.b, 1);
        }
        this.geometry = new _resource_geometry_Geometry__WEBPACK_IMPORTED_MODULE_3__["default"](redGPUContext, new Float32Array(interleaveData), new _resource_buffers_interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_1__["default"]([
            new _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"](_resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"].VERTEX_POSITION, 'float32x3'),
            new _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"](_resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"].VERTEX_COLOR, 'float32x4')
        ]));
        this.material = new _GridMaterial__WEBPACK_IMPORTED_MODULE_5__["default"](redGPUContext);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);


/***/ }),

/***/ "./src/main/scene/sceneHelper/grid/GridMaterial.ts":
/*!*********************************************************!*\
  !*** ./src/main/scene/sceneHelper/grid/GridMaterial.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_BaseMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../material/BaseMaterial */ "./src/material/BaseMaterial.ts");
/* harmony import */ var _fragment_wgsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragment.wgsl */ "./src/main/scene/sceneHelper/grid/fragment.wgsl");
/* harmony import */ var _vertex_wgsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertex.wgsl */ "./src/main/scene/sceneHelper/grid/vertex.wgsl");



const fragmentUniformBufferDescriptor = [];
const fragmentUniformBindGroupLayoutDescriptor = {
    entries: []
};
class GridMaterial extends _material_BaseMaterial__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     *
     * @param redGPUContext
     */
    constructor(redGPUContext) {
        super(redGPUContext, _vertex_wgsl__WEBPACK_IMPORTED_MODULE_2__["default"], _fragment_wgsl__WEBPACK_IMPORTED_MODULE_1__["default"], fragmentUniformBufferDescriptor, fragmentUniformBindGroupLayoutDescriptor);
        this.#initFragmentUniformInfo();
        // console.log(this)
    }
    updateBindGroup() {
        this.updateFragmentUniformBindGroup({
            layout: this.renderInfo_FragmentUniformsBindGroupLayout,
            entries: []
        });
    }
    /**
     * @constructs
     * @private
     */
    #initFragmentUniformInfo() {
        this.updateBindGroup();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridMaterial);


/***/ }),

/***/ "./src/main/scene/sceneHelper/index.ts":
/*!*********************************************!*\
  !*** ./src/main/scene/sceneHelper/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Axis: () => (/* reexport safe */ _asix_Axis__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Grid: () => (/* reexport safe */ _grid_Grid__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   NormalHelper: () => (/* reexport safe */ _normalHelper_NormalHelper__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _asix_Axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asix/Axis */ "./src/main/scene/sceneHelper/asix/Axis.ts");
/* harmony import */ var _grid_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/Grid */ "./src/main/scene/sceneHelper/grid/Grid.ts");
/* harmony import */ var _normalHelper_NormalHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalHelper/NormalHelper */ "./src/main/scene/sceneHelper/normalHelper/NormalHelper.ts");






/***/ }),

/***/ "./src/main/scene/sceneHelper/normalHelper/NormalHelper.ts":
/*!*****************************************************************!*\
  !*** ./src/main/scene/sceneHelper/normalHelper/NormalHelper.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../object3d */ "./src/object3d/index.ts");
/* harmony import */ var _resource_buffers_interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../resource/buffers/interleaveInfo/InterleaveInfo */ "./src/resource/buffers/interleaveInfo/InterleaveInfo.ts");
/* harmony import */ var _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../resource/buffers/interleaveInfo/InterleaveUnit */ "./src/resource/buffers/interleaveInfo/InterleaveUnit.ts");
/* harmony import */ var _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../resource/buffers/TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../resource/buffers/uniformBuffer/UniformBufferDescriptor */ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts");
/* harmony import */ var _resource_geometry_Geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../resource/geometry/Geometry */ "./src/resource/geometry/Geometry.ts");
/* harmony import */ var _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/gl-matrix */ "./src/util/gl-matrix/index.js");
/* harmony import */ var _NormalHelperMaterial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NormalHelperMaterial */ "./src/main/scene/sceneHelper/normalHelper/NormalHelperMaterial.ts");








const vertexUniformBufferDescriptor = new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"]([
    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_3__["default"].mat4, valueName: 'modelMatrix' },
]);
const vertexUniformBindGroupLayoutDescriptor = {
    entries: [
        {
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
                type: 'uniform',
            },
        }
    ]
};
class NormalHelper extends _object3d__WEBPACK_IMPORTED_MODULE_0__.Mesh {
    #targetMesh;
    constructor(mesh, scale = 1) {
        super(mesh.redGPUContext, null, null, vertexUniformBufferDescriptor, vertexUniformBindGroupLayoutDescriptor);
        const device = mesh.redGPUContext.gpuDevice;
        this.#targetMesh = mesh;
        const data = [];
        //
        let i = 0;
        const len = mesh.geometry.data.length;
        console.log(mesh.geometry);
        console.log(mesh.geometry.vertexBuffer);
        const normalInfo = mesh.geometry.vertexBuffer.attributes.filter(v => v['attributeHint'] === _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"].VERTEX_NORMAL);
        if (normalInfo.length) {
            const normalOffset = normalInfo[0]['offset'] / Float32Array.BYTES_PER_ELEMENT;
            const stride = mesh.geometry.vertexBuffer.arrayStride / Float32Array.BYTES_PER_ELEMENT;
            for (i; i < len; i = i + stride) {
                const position = [
                    mesh.geometry.data[i],
                    mesh.geometry.data[i + 1],
                    mesh.geometry.data[i + 2],
                ];
                const normal = [
                    mesh.geometry.data[i + normalOffset],
                    mesh.geometry.data[i + 1 + normalOffset],
                    mesh.geometry.data[i + 2 + normalOffset],
                ];
                _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.vec3.normalize(normal, normal);
                const resultVec = _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.vec3.create();
                const distance = _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.vec3.length(position) * scale * 0.5;
                _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.vec3.add(resultVec, position, _util_gl_matrix__WEBPACK_IMPORTED_MODULE_6__.vec3.scale(normal, normal, distance));
                data.push(...position, 1, 0, 0, 1, ...resultVec, 1, 1, 0, 1);
            }
            //
            this.geometry = new _resource_geometry_Geometry__WEBPACK_IMPORTED_MODULE_5__["default"](mesh.redGPUContext, new Float32Array(data), new _resource_buffers_interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_1__["default"]([
                new _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"](_resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"].VERTEX_POSITION, 'float32x3'),
                new _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"](_resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"].VERTEX_COLOR, 'float32x4')
            ]));
            this.material = new _NormalHelperMaterial__WEBPACK_IMPORTED_MODULE_7__["default"](mesh.redGPUContext);
            this.topology = 'line-list';
        }
    }
    updateBindGroup() {
        // TODO 유니포내용중 텍스쳐 등이 변화하면 업데이트 해야함
        this.updateVertexUniformBindGroup({
            layout: this.renderInfo_VertexUniformBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.vertexUniformBuffer.gpuBuffer,
                        offset: 0,
                        size: this.vertexUniformBuffer.gpuBufferSize
                    }
                }
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NormalHelper);


/***/ }),

/***/ "./src/main/scene/sceneHelper/normalHelper/NormalHelperMaterial.ts":
/*!*************************************************************************!*\
  !*** ./src/main/scene/sceneHelper/normalHelper/NormalHelperMaterial.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_BaseMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../material/BaseMaterial */ "./src/material/BaseMaterial.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../resource/buffers/uniformBuffer/UniformBufferDescriptor */ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts");
/* harmony import */ var _fragment_wgsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragment.wgsl */ "./src/main/scene/sceneHelper/normalHelper/fragment.wgsl");
/* harmony import */ var _vertex_wgsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vertex.wgsl */ "./src/main/scene/sceneHelper/normalHelper/vertex.wgsl");




const fragmentUniformBufferDescriptor = new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"]([]);
const fragmentUniformBindGroupLayoutDescriptor = {
    entries: []
};
class NormalHelperMaterial extends _material_BaseMaterial__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     *
     * @param redGPUContext
     */
    constructor(redGPUContext) {
        super(redGPUContext, _vertex_wgsl__WEBPACK_IMPORTED_MODULE_3__["default"], _fragment_wgsl__WEBPACK_IMPORTED_MODULE_2__["default"], fragmentUniformBufferDescriptor, fragmentUniformBindGroupLayoutDescriptor);
        const gpuDevice = this.redGPUContext.gpuDevice;
        this.#initFragmentUniformInfo(gpuDevice);
        // console.log(this)
    }
    updateBindGroup() {
        this.updateFragmentUniformBindGroup({
            layout: this.renderInfo_FragmentUniformsBindGroupLayout,
            entries: []
        });
    }
    /**
     * @constructs
     * @private
     */
    #initFragmentUniformInfo(gpuDevice) {
        this.updateBindGroup();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NormalHelperMaterial);


/***/ }),

/***/ "./src/main/scene/skyBox/SkyBox.ts":
/*!*****************************************!*\
  !*** ./src/main/scene/skyBox/SkyBox.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_skyboxMaterial_SkyBoxMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material/skyboxMaterial/SkyBoxMaterial */ "./src/material/skyboxMaterial/SkyBoxMaterial.ts");
/* harmony import */ var _object3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../object3d */ "./src/object3d/index.ts");
/* harmony import */ var _resource_geometry_primitives_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../resource/geometry/primitives/Box */ "./src/resource/geometry/primitives/Box.ts");
/* harmony import */ var _resource_texture_BitmapCubeTexture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../resource/texture/BitmapCubeTexture */ "./src/resource/texture/BitmapCubeTexture.ts");




class SkyBox extends _object3d__WEBPACK_IMPORTED_MODULE_1__.Mesh {
    constructor(redGPUContext, srcList) {
        const scale = 100000; //TODO 이거 카메라에서 받아와야함
        super(redGPUContext, new _resource_geometry_primitives_Box__WEBPACK_IMPORTED_MODULE_2__["default"](redGPUContext, scale, scale, scale), new _material_skyboxMaterial_SkyBoxMaterial__WEBPACK_IMPORTED_MODULE_0__["default"](redGPUContext, new _resource_texture_BitmapCubeTexture__WEBPACK_IMPORTED_MODULE_3__["default"](redGPUContext, srcList)));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkyBox);


/***/ }),

/***/ "./src/main/view/View.ts":
/*!*******************************!*\
  !*** ./src/main/view/View.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _camera_BasicCamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../camera/BasicCamera */ "./src/camera/BasicCamera.ts");
/* harmony import */ var _light_LightManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../light/LightManager */ "./src/light/LightManager.ts");
/* harmony import */ var _light_pointLightCluster_PassLightClusters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../light/pointLightCluster/PassLightClusters */ "./src/light/pointLightCluster/PassLightClusters.ts");
/* harmony import */ var _light_pointLightCluster_PassLightClustersBound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../light/pointLightCluster/PassLightClustersBound */ "./src/light/pointLightCluster/PassLightClustersBound.ts");
/* harmony import */ var _object3d_base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../object3d/base/CONST_DIRTY_TRANSFORM_STATE */ "./src/object3d/base/CONST_DIRTY_TRANSFORM_STATE.ts");
/* harmony import */ var _postEffect_PostEffectManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../postEffect/PostEffectManager */ "./src/postEffect/PostEffectManager.ts");
/* harmony import */ var _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resource/buffers/TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resource/buffers/uniformBuffer/UniformBufferDescriptor */ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../resource/buffers/uniformBuffer/UniformBufferFloat32 */ "./src/resource/buffers/uniformBuffer/UniformBufferFloat32.ts");
/* harmony import */ var _util_computeViewFrustumPlanes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util/computeViewFrustumPlanes */ "./src/util/computeViewFrustumPlanes.ts");
/* harmony import */ var _util_errorFunc_throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../util/errorFunc/throwErrorInstanceOf */ "./src/util/errorFunc/throwErrorInstanceOf.js");
/* harmony import */ var _util_gl_matrix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/gl-matrix */ "./src/util/gl-matrix/index.js");
/* harmony import */ var _scene_Scene__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scene/Scene */ "./src/main/scene/Scene.ts");
/* harmony import */ var _ViewBase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ViewBase */ "./src/main/view/ViewBase.ts");














let UUID = 0;
/**
 * ## View 객체는 Scene과 Camera를 소유하는 객체입니다.
 * postEffectManager를 통해 View에 후처리 이펙트를 적용할수 있습니다.
 */
class View extends _ViewBase__WEBPACK_IMPORTED_MODULE_13__["default"] {
    #postEffectManager;
    #resultTexture;
    #resolveTexture;
    #depthTexture;
    #resultTextureView;
    #resolveTextureView;
    #depthTextureView;
    #label;
    #scene;
    #camera;
    #renderPointLightNum = 0;
    #renderDirectionalLightNum = 0;
    #frustumPlanes = [];
    #systemBufferInfo;
    #systemUniformsBindGroupLayout;
    #renderInfo_SystemUniformBindGroup;
    #passLightClusters;
    #systemPointLight_ClusterLightsBufferInfo;
    #systemAmbientDirectionalLightBufferInfo;
    #finalRenderUniformBuffer;
    #passLightClustersBound;
    #prevWidth;
    #prevHeight;
    get passLightClustersBound() {
        return this.#passLightClustersBound;
    }
    /**
     * 생성자
     * @param redGPUContext
     * @param scene
     * @param label
     */
    constructor(redGPUContext, scene, label) {
        super(redGPUContext);
        this.#label = label || `View${UUID++} (Label input is recommended.)`;
        this.scene = scene;
        this.#camera = new _camera_BasicCamera__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.#postEffectManager = new _postEffect_PostEffectManager__WEBPACK_IMPORTED_MODULE_5__["default"](this);
        this.#init();
        console.log('View', this);
    }
    get postEffectManager() {
        return this.#postEffectManager;
    }
    get resultTexture() {
        return this.#resultTexture;
    }
    set resultTexture(value) {
        this.#resultTexture = value;
    }
    get resolveTexture() {
        return this.#resolveTexture;
    }
    set resolveTexture(value) {
        this.#resolveTexture = value;
    }
    get depthTexture() {
        return this.#depthTexture;
    }
    set depthTexture(value) {
        this.#depthTexture = value;
    }
    get resultTextureView() {
        return this.#resultTextureView;
    }
    set resultTextureView(value) {
        this.#resultTextureView = value;
    }
    get resolveTextureView() {
        return this.#resolveTextureView;
    }
    set resolveTextureView(value) {
        this.#resolveTextureView = value;
    }
    get depthTextureView() {
        return this.#depthTextureView;
    }
    set depthTextureView(value) {
        this.#depthTextureView = value;
    }
    get label() {
        return this.#label;
    }
    set label(value) {
        this.#label = value;
    }
    get scene() {
        return this.#scene;
    }
    set scene(value) {
        if (!(value instanceof _scene_Scene__WEBPACK_IMPORTED_MODULE_12__["default"]))
            (0,_util_errorFunc_throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this, 'scene', 'Scene');
        this.#scene = value;
        window.dispatchEvent(new Event('changeViewList'));
    }
    get camera() {
        return this.#camera;
    }
    get renderPointLightNum() {
        return this.#renderPointLightNum;
    }
    get renderDirectionalLightNum() {
        return this.#renderDirectionalLightNum;
    }
    get frustumPlanes() {
        return this.#frustumPlanes;
    }
    get systemBufferInfo() {
        return this.#systemBufferInfo;
    }
    get systemUniformsBindGroupLayout() {
        return this.#systemUniformsBindGroupLayout;
    }
    get renderInfo_SystemUniformBindGroup() {
        return this.#renderInfo_SystemUniformBindGroup;
    }
    get passLightClusters() {
        return this.#passLightClusters;
    }
    get systemPointLight_ClusterLightsBufferInfo() {
        return this.#systemPointLight_ClusterLightsBufferInfo;
    }
    get systemAmbientDirectionalLightBufferInfo() {
        return this.#systemAmbientDirectionalLightBufferInfo;
    }
    get finalRenderUniformBuffer() {
        return this.#finalRenderUniformBuffer;
    }
    updateSystemUniform() {
        const pixelViewRect = this.pixelViewRect;
        const aspect = Math.abs(pixelViewRect[2] / pixelViewRect[3]);
        const projectionMatrix = this.projectionMatrix;
        const camera = this.#camera;
        const { fov, nearClipping, farClipping, matrix: cameraMTX, mode } = camera;
        if (mode === _camera_BasicCamera__WEBPACK_IMPORTED_MODULE_0__["default"].MODE_3D) {
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_11__.mat4.perspective(projectionMatrix, (Math.PI / 180) * fov, aspect, nearClipping, farClipping);
        }
        else {
            // TODO 2D 모드
        }
        this.#frustumPlanes = (0,_util_computeViewFrustumPlanes__WEBPACK_IMPORTED_MODULE_9__["default"])(projectionMatrix, cameraMTX);
        const { redStructOffsetMap: offsetMap } = this.#systemBufferInfo.descriptor;
        const systemBufferInfoData = this.#systemBufferInfo.data;
        systemBufferInfoData.set(projectionMatrix, offsetMap['projectionMatrix']);
        systemBufferInfoData.set(this.inverseProjectionMatrix, offsetMap['inverseProjectionMatrix']);
        // TODO resolution 을  viewRect로 변경할까?
        systemBufferInfoData.set([pixelViewRect[2], pixelViewRect[3]], offsetMap['resolution']);
        systemBufferInfoData.set(cameraMTX, offsetMap['cameraMatrix']);
        systemBufferInfoData.set([nearClipping, farClipping], offsetMap['nearFar']);
        this.#systemBufferInfo.update(systemBufferInfoData);
    }
    updateClusters() {
        const { redGPUContext, scene } = this;
        const { gpuDevice } = redGPUContext;
        this.#renderDirectionalLightNum = 0;
        this.#renderPointLightNum = 0;
        if (!this.#passLightClustersBound)
            this.#passLightClustersBound = new _light_pointLightCluster_PassLightClustersBound__WEBPACK_IMPORTED_MODULE_3__["default"](redGPUContext, this);
        if (this.#prevWidth !== this.pixelViewRect[2] || this.#prevHeight !== this.pixelViewRect[3]) {
            console.log('재계산');
            {
                const commandEncoder = gpuDevice.createCommandEncoder();
                const passEncoder = commandEncoder.beginComputePass({
                    label: 'Bound cluster'
                });
                this.#passLightClustersBound.render(commandEncoder, passEncoder);
                passEncoder.end();
                gpuDevice.queue.submit([commandEncoder.finish()]);
            }
        }
        this.#prevWidth = this.pixelViewRect[2];
        this.#prevHeight = this.pixelViewRect[3];
        if (scene) {
            if (!this.#passLightClusters) {
                this.#passLightClusters = new _light_pointLightCluster_PassLightClusters__WEBPACK_IMPORTED_MODULE_2__["default"](redGPUContext, this);
            }
            const { ambientLight, pointLightList, directionalLightList } = scene.lightManager;
            //ambient
            {
                const { redStructOffsetMap: offsetMap } = this.#systemAmbientDirectionalLightBufferInfo.descriptor;
                const systemAmbientDirectionalLightBufferInfoData = this.#systemAmbientDirectionalLightBufferInfo.data;
                const newData = ambientLight ? [
                    scene.lightManager.ambientLight.r,
                    scene.lightManager.ambientLight.g,
                    scene.lightManager.ambientLight.b,
                    scene.lightManager.ambientLight.intensity
                ] : [0, 0, 0, 0];
                systemAmbientDirectionalLightBufferInfoData.set(newData, offsetMap['ambientLight']);
                this.redGPUContext.gpuDevice.queue.writeBuffer(this.#systemAmbientDirectionalLightBufferInfo.gpuBuffer, offsetMap['ambientLight'], new Float32Array(newData));
            }
            //directional
            {
                const { redStructOffsetMap: offsetMap } = this.#systemAmbientDirectionalLightBufferInfo.descriptor;
                const systemAmbientDirectionalLightBufferInfoData = this.#systemAmbientDirectionalLightBufferInfo.data;
                const directionalNum = directionalLightList.length;
                let i = directionalNum;
                while (i--) {
                    const tLight = directionalLightList[i];
                    const stride = (_resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x4 / Float32Array.BYTES_PER_ELEMENT
                        + _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x4 / Float32Array.BYTES_PER_ELEMENT);
                    const offset = offsetMap['directionalLights'] + stride * i;
                    const direction = _util_gl_matrix__WEBPACK_IMPORTED_MODULE_11__.vec3.subtract(_util_gl_matrix__WEBPACK_IMPORTED_MODULE_11__.vec3.create(), tLight.position, tLight.targetPosition);
                    const newData = [
                        tLight.r, tLight.g, tLight.b, tLight.intensity,
                        direction[0], direction[1], direction[2]
                    ];
                    systemAmbientDirectionalLightBufferInfoData.set(newData, offset);
                    this.#renderDirectionalLightNum++;
                }
                systemAmbientDirectionalLightBufferInfoData.set([directionalNum, 0, 0, 0], offsetMap['directionalLightCount']);
                this.#systemAmbientDirectionalLightBufferInfo.update(systemAmbientDirectionalLightBufferInfoData);
            }
            //pointLight
            {
                const clusterLightBufferInfoData = this.#systemPointLight_ClusterLightsBufferInfo.data;
                const { redStructOffsetMap: offsetMap } = this.#systemPointLight_ClusterLightsBufferInfo.descriptor;
                const frustumPlanes = (0,_util_computeViewFrustumPlanes__WEBPACK_IMPORTED_MODULE_9__["default"])(this.projectionMatrix, this.camera.matrix);
                let frustumPlanes0, frustumPlanes1, frustumPlanes2, frustumPlanes3, frustumPlanes4, frustumPlanes5;
                frustumPlanes0 = frustumPlanes[0];
                frustumPlanes1 = frustumPlanes[1];
                frustumPlanes2 = frustumPlanes[2];
                frustumPlanes3 = frustumPlanes[3];
                frustumPlanes4 = frustumPlanes[4];
                frustumPlanes5 = frustumPlanes[5];
                const pointLightNum = pointLightList.length;
                let dirtyLightNum = 0;
                if (pointLightNum) {
                    let i = pointLightNum;
                    while (i--) {
                        const tLight = pointLightList[i];
                        const tLightMTX = tLight.matrix;
                        let inViewPortYn = true;
                        // 라이트 매트릭스 계산
                        if (tLight.dirtyTransformState === _object3d_base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_4__["default"].DIRTY || tLight.dirtyLight) {
                            dirtyLightNum++;
                        }
                        if (tLight.dirtyTransformState === _object3d_base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_4__["default"].DIRTY) {
                            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_11__.mat4.identity(tLightMTX);
                            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_11__.mat4.translate(tLightMTX, tLightMTX, [tLight.x, tLight.y, tLight.z]);
                            tLight.dirtyTransformState = _object3d_base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_4__["default"].NONE;
                        }
                        // frustum culling
                        {
                            let a00, a01, a02;
                            let radius = tLight.radius;
                            a00 = tLightMTX[12], a01 = tLightMTX[13], a02 = tLightMTX[14],
                                frustumPlanes0[0] * a00 + frustumPlanes0[1] * a01 + frustumPlanes0[2] * a02 + frustumPlanes0[3] <= -radius ? inViewPortYn = false
                                    : frustumPlanes1[0] * a00 + frustumPlanes1[1] * a01 + frustumPlanes1[2] * a02 + frustumPlanes1[3] <= -radius ? inViewPortYn = false
                                        : frustumPlanes2[0] * a00 + frustumPlanes2[1] * a01 + frustumPlanes2[2] * a02 + frustumPlanes2[3] <= -radius ? inViewPortYn = false
                                            : frustumPlanes3[0] * a00 + frustumPlanes3[1] * a01 + frustumPlanes3[2] * a02 + frustumPlanes3[3] <= -radius ? inViewPortYn = false
                                                : frustumPlanes4[0] * a00 + frustumPlanes4[1] * a01 + frustumPlanes4[2] * a02 + frustumPlanes4[3] <= -radius ? inViewPortYn = false
                                                    : frustumPlanes5[0] * a00 + frustumPlanes5[1] * a01 + frustumPlanes5[2] * a02 + frustumPlanes5[3] <= -radius ? inViewPortYn = false : 0;
                        }
                        // updateData
                        if (inViewPortYn || tLight.dirtyLight) {
                            const stride = (_resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x4 / Float32Array.BYTES_PER_ELEMENT
                                + _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x4 / Float32Array.BYTES_PER_ELEMENT);
                            const offset = offsetMap['pointLights'] + stride * i;
                            clusterLightBufferInfoData.set([
                                ...tLight.position, tLight.radius,
                                tLight.r, tLight.g, tLight.b, tLight.intensity,
                            ], offset);
                            this.#renderPointLightNum++;
                        }
                        tLight.dirtyLight = false;
                    }
                }
                else {
                }
                // updatePointLightCount
                clusterLightBufferInfoData.set([pointLightNum, 0, 0, 0], offsetMap['pointLightCount']);
                this.redGPUContext.gpuDevice.queue.writeBuffer(this.#systemPointLight_ClusterLightsBufferInfo.gpuBuffer, offsetMap['pointLightCount'], new Float32Array([pointLightNum, 0, 0, 0]));
                // send data to GPU
                // if (dirtyLightNum)
                this.#systemPointLight_ClusterLightsBufferInfo.update(clusterLightBufferInfoData);
            }
            //TODO - dirtyViewRect 기반으로 변경
            // if (this.#dirtyViewRect) {
            // }
            {
                const commandEncoder = gpuDevice.createCommandEncoder();
                const passEncoder = commandEncoder.beginComputePass({
                    label: 'PointLight cluster'
                });
                this.#passLightClusters.render(commandEncoder, passEncoder);
                passEncoder.end();
                gpuDevice.queue.submit([commandEncoder.finish()]);
            }
        }
    }
    #init() {
        this.#systemUniformsBindGroupLayout = this.redGPUContext.gpuDevice.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
                    buffer: {
                        type: 'uniform',
                    },
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    buffer: { type: 'uniform' }
                },
                {
                    binding: 2,
                    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
                    buffer: { type: 'read-only-storage' }
                },
                {
                    binding: 3,
                    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
                    buffer: { type: 'storage' }
                },
            ]
        });
        this.#makeBuffer();
        this.calcPixelViewRect();
        this.updateClusters();
        const renderInfo_SystemUniformBindGroupDescriptor = {
            label: 'systemUniformsBindGroup',
            layout: this.#systemUniformsBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.#systemBufferInfo.gpuBuffer,
                        offset: 0,
                        size: this.#systemBufferInfo.gpuBufferSize
                    }
                },
                {
                    binding: 1,
                    resource: {
                        buffer: this.#systemAmbientDirectionalLightBufferInfo.gpuBuffer,
                        offset: 0,
                        size: this.#systemAmbientDirectionalLightBufferInfo.gpuBufferSize
                    }
                },
                {
                    binding: 2,
                    resource: {
                        buffer: this.#systemPointLight_ClusterLightsBufferInfo.gpuBuffer,
                        offset: 0,
                        size: this.#systemPointLight_ClusterLightsBufferInfo.gpuBufferSize
                    }
                },
                {
                    binding: 3,
                    resource: {
                        buffer: this.#passLightClusters.clusterLightsBuffer,
                        offset: 0,
                        size: this.#passLightClusters.clusterLightsBuffer.size
                    }
                }
            ]
        };
        this.#renderInfo_SystemUniformBindGroup = this.redGPUContext.gpuDevice.createBindGroup(renderInfo_SystemUniformBindGroupDescriptor);
    }
    #makeBuffer() {
        this.#finalRenderUniformBuffer = this.redGPUContext.gpuDevice.createBuffer({
            size: 4 * 4 * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });
        this.#systemBufferInfo = new _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_8__["default"](this.redGPUContext, new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_7__["default"]([
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].mat4, valueName: 'projectionMatrix' },
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].mat4, valueName: 'inverseProjectionMatrix' },
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].mat4, valueName: 'cameraMatrix' },
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x2, valueName: 'resolution' },
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x2, valueName: 'nearFar' },
        ]));
        this.#systemAmbientDirectionalLightBufferInfo = new _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_8__["default"](this.redGPUContext, new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_7__["default"]([
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x4, valueName: 'ambientLight' },
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x4, valueName: 'directionalLightCount' },
            {
                valueName: 'directionalLights',
                struct: [
                    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x3, valueName: 'directionalLightColor' },
                    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32, valueName: 'directionalLightIntensity' },
                    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x3, valueName: 'directionalLightDirection' },
                ],
                num: _light_LightManager__WEBPACK_IMPORTED_MODULE_1__["default"].MAX_DIRECTIONAL_LIGHT_NUM,
            }
        ]), GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST);
        this.#systemPointLight_ClusterLightsBufferInfo = new _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_8__["default"](this.redGPUContext, new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_7__["default"]([
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x4, valueName: 'pointLightCount' },
            {
                valueName: 'pointLights',
                struct: [
                    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x3, valueName: 'pointLightPosition' },
                    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32, valueName: 'pointLightRange' },
                    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32x3, valueName: 'pointLightColor' },
                    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_6__["default"].float32, valueName: 'pointLightIntensity' },
                ],
                num: _light_LightManager__WEBPACK_IMPORTED_MODULE_1__["default"].MAX_POINT_LIGHT_NUM,
            }
        ]), GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);


/***/ }),

/***/ "./src/main/view/ViewBase.ts":
/*!***********************************!*\
  !*** ./src/main/view/ViewBase.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/errorFunc/throwError */ "./src/util/errorFunc/throwError.js");
/* harmony import */ var _util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/gl-matrix */ "./src/util/gl-matrix/index.js");
/* harmony import */ var _ViewDebugger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewDebugger */ "./src/main/view/ViewDebugger.ts");




class ViewBase extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #dirtyViewRect = true;
    #x = 0;
    #y = 0;
    #width = '100%';
    #height = '100%';
    #pixelViewRect = [0, 0, 0, 0];
    #projectionMatrix = _util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__.mat4.create();
    #viewDebugger = new _ViewDebugger__WEBPACK_IMPORTED_MODULE_3__["default"]();
    /**
     *
     * @param redGPUContext
     */
    constructor(redGPUContext) {
        super(redGPUContext);
    }
    get x() {
        return this.#x;
    }
    set x(value) {
        switch (typeof value) {
            case 'number':
                this.#x = value;
                break;
            case 'string':
                if (value.includes('%')) {
                    this.#x = value;
                    break;
                }
            default:
                (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_1__["default"])('x : ', '숫자나 %모델만 허용됩니다.');
        }
        this.calcPixelViewRect();
    }
    get y() {
        return this.#y;
    }
    set y(value) {
        switch (typeof value) {
            case 'number':
                this.#y = value;
                break;
            case 'string':
                if (value.includes('%')) {
                    this.#y = value;
                    break;
                }
            default:
                (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_1__["default"])('y : ', '숫자 or %모델 만 허용됩니다.');
        }
        this.calcPixelViewRect();
    }
    get width() {
        return this.#width;
    }
    set width(value) {
        const msg = 'width : 음수가 아닌 숫자 or %모델 만 허용됩니다.';
        switch (typeof value) {
            case 'number':
                if (value >= 0) {
                    this.#width = value;
                    break;
                }
                (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_1__["default"])(msg);
                break;
            case 'string':
                if (value.includes('%')) {
                    if (+value.replace('%', '') >= 0) {
                        this.#width = value;
                        break;
                    }
                }
            default:
                (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_1__["default"])(msg);
        }
        this.calcPixelViewRect();
    }
    get height() {
        return this.#height;
    }
    set height(value) {
        const msg = 'width : 음수가 아닌 숫자 or %모델 만 허용됩니다.';
        switch (typeof value) {
            case 'number':
                if (value >= 0) {
                    this.#height = value;
                    break;
                }
                (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_1__["default"])(msg);
                break;
            case 'string':
                if (value.includes('%')) {
                    if (+value.replace('%', '') >= 0) {
                        this.#height = value;
                        break;
                    }
                }
            default:
                (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_1__["default"])(msg);
        }
        this.calcPixelViewRect();
    }
    get pixelViewRect() {
        return this.#pixelViewRect;
    }
    get pixelViewRectInt() {
        return [
            Math.floor(this.#pixelViewRect[0]),
            Math.floor(this.#pixelViewRect[1]),
            Math.floor(this.#pixelViewRect[2]),
            Math.floor(this.#pixelViewRect[3])
        ];
    }
    get projectionMatrix() {
        return this.#projectionMatrix;
    }
    get inverseProjectionMatrix() {
        return _util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__.mat4.invert(_util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__.mat4.create(), this.#projectionMatrix);
    }
    get viewDebugger() {
        return this.#viewDebugger;
    }
    calcPixelViewRect() {
        const parentPixelSize = this.redGPUContext.pixelSizeInt;
        const { renderScale } = this.redGPUContext;
        this.#pixelViewRect = [
            ((typeof this.#x === 'number' ? renderScale * this.#x : parentPixelSize.width * parseFloat(this.#x) / 100)),
            ((typeof this.#y === 'number' ? renderScale * this.#y : parentPixelSize.height * parseFloat(this.#y) / 100)),
            ((typeof this.#width === 'number' ? renderScale * this.#width : parentPixelSize.width * parseFloat(this.#width) / 100)),
            ((typeof this.#height === 'number' ? renderScale * this.#height : parentPixelSize.height * parseFloat(this.#height) / 100)),
        ];
        this.#dirtyViewRect = true;
    }
    setSize(w = this.#width, h = this.#height) {
        this.width = w;
        this.height = h;
    }
    setLocation(x = this.#x, y = this.#y) {
        this.x = x;
        this.y = y;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewBase);


/***/ }),

/***/ "./src/main/view/ViewDebugger.ts":
/*!***************************************!*\
  !*** ./src/main/view/ViewDebugger.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ViewDebugger {
    ViewRect = {};
    Frame = {};
    Render = {};
    Light = {};
    constructor() {
    }
    update(view, scene, startTime, prevTime, beforeTime, mainTime, afterTime, renderMeshNum, triangleNum) {
        const { Frame, Render, Light, ViewRect } = this;
        //
        this['View Label'] = view['label'];
        this['scene Label'] = scene['label'];
        ViewRect['size'] = `${view.width} x ${view.height} (${view.pixelViewRect[2]}px x ${view.pixelViewRect[3]}px)`;
        ViewRect['location'] = `${view.x} x ${view.y} (${view.pixelViewRect[0]}px x ${view.pixelViewRect[1]}px)`;
        //
        Frame['FrameNum'] = (Frame['FrameNum'] || 0) + 1;
        //
        // const fps: number = 1000 / (beforeTime + mainTime + afterTime)
        // console.log(startTime - prevTime)
        const fps = 1000 / (startTime - prevTime);
        Frame['Before render time'] = +beforeTime.toFixed(2);
        Frame['Main render time'] = +mainTime.toFixed(2);
        Frame['After render time'] = +afterTime.toFixed(2);
        Frame['Frame render time'] = +(beforeTime + mainTime + afterTime).toFixed(2);
        Frame['Frame FPS'] = +(fps).toFixed(0);
        Frame['Total Frame FPS'] = +(Frame['Total Frame FPS'] || 0) + fps;
        Frame['AVG FPS'] = +(Frame['Total Frame FPS'] / Frame['FrameNum']).toFixed(2);
        //
        Render['Total Mesh'] = scene.children.length;
        Render['Render Mesh'] = renderMeshNum;
        Render['Triangle Num'] = triangleNum;
        //
        Light['Total PointLight'] = scene.lightManager.pointLightList.length;
        Light['Render PointLight'] = view.renderPointLightNum;
        Light['Render DirectionalLight'] = view.renderDirectionalLightNum;
        //
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewDebugger);


/***/ }),

/***/ "./src/main/view/index.ts":
/*!********************************!*\
  !*** ./src/main/view/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   View: () => (/* reexport safe */ _View__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ViewDebugger: () => (/* reexport safe */ _ViewDebugger__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/main/view/View.ts");
/* harmony import */ var _ViewDebugger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewDebugger */ "./src/main/view/ViewDebugger.ts");





/***/ }),

/***/ "./src/material/BaseMaterial.ts":
/*!**************************************!*\
  !*** ./src/material/BaseMaterial.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource/buffers/uniformBuffer/UniformBufferDescriptor */ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource/buffers/uniformBuffer/UniformBufferFloat32 */ "./src/resource/buffers/uniformBuffer/UniformBufferFloat32.ts");
/* harmony import */ var _resource_makeShaderModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource/makeShaderModule */ "./src/resource/makeShaderModule.ts");
/* harmony import */ var _util_makeUUID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/makeUUID */ "./src/util/makeUUID.ts");





class BaseMaterial extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #vShaderModule;
    #fShaderModule;
    #fragmentUniformBuffer;
    //////////////////////////
    #renderInfo_FragmentUniformBindGroup;
    #renderInfo_pipeline_Fragment;
    #renderInfo_FragmentUniformBindGroupDescriptor;
    #renderInfo_FragmentUniformsBindGroupLayout;
    //////////////////////////
    #bindGroupID = (0,_util_makeUUID__WEBPACK_IMPORTED_MODULE_4__["default"])();
    #dirtyTexture = true;
    /**
     *
     * @param redGPUContext
     * @param vertexSource
     * @param fragmentSource
     * @param fragmentUniformBufferDescriptor
     * @param fragmentUniformBindGroupLayoutDescriptor
     */
    constructor(redGPUContext, vertexSource, fragmentSource, fragmentUniformBufferDescriptor, fragmentUniformBindGroupLayoutDescriptor) {
        super(redGPUContext);
        const gpuDevice = this.redGPUContext.gpuDevice;
        this.#vShaderModule = (0,_resource_makeShaderModule__WEBPACK_IMPORTED_MODULE_3__["default"])(gpuDevice, vertexSource, `vertex_${this.constructor.name}`);
        this.#fShaderModule = (0,_resource_makeShaderModule__WEBPACK_IMPORTED_MODULE_3__["default"])(gpuDevice, fragmentSource, `fragment_${this.constructor.name}`);
        this.#fragmentUniformBuffer = new _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_2__["default"](this.redGPUContext, new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"](fragmentUniformBufferDescriptor));
        // console.log(this,this.#fragmentUniformBuffer)
        this.#updateRenderInfo_FragmentUniformsBindGroupLayout(fragmentUniformBindGroupLayoutDescriptor);
        // console.log(this)
    }
    get vShaderModule() {
        return this.#vShaderModule;
    }
    get fShaderModule() {
        return this.#fShaderModule;
    }
    get fragmentUniformBuffer() {
        return this.#fragmentUniformBuffer;
    }
    get renderInfo_FragmentUniformBindGroup() {
        return this.#renderInfo_FragmentUniformBindGroup;
    }
    get renderInfo_pipeline_Fragment() {
        return this.#renderInfo_pipeline_Fragment;
    }
    get renderInfo_FragmentUniformsBindGroupLayout() {
        return this.#renderInfo_FragmentUniformsBindGroupLayout;
    }
    get bindGroupID() {
        return this.#bindGroupID;
    }
    set bindGroupID(value) {
        this.#bindGroupID = value;
    }
    get dirtyTexture() {
        return this.#dirtyTexture;
    }
    set dirtyTexture(value) {
        this.#dirtyTexture = value;
    }
    updateRenderInfo_pipeline_Fragment() {
        // TODO 속성이 변경되면 아래 정보가 변경되니 업데이트 해줘야함
        const preferredCanvasFormat = navigator.gpu.getPreferredCanvasFormat();
        this.#renderInfo_pipeline_Fragment = {
            module: this.fShaderModule,
            entryPoint: 'main',
            targets: [
                {
                    format: preferredCanvasFormat,
                    blend: {
                        color: {
                            srcFactor: "src-alpha",
                            dstFactor: "one-minus-src-alpha",
                            operation: "add"
                        },
                        alpha: {
                            srcFactor: "one",
                            dstFactor: "one-minus-src-alpha",
                            operation: "add"
                        }
                    }
                },
            ],
        };
    }
    updateFragmentUniformBindGroup(renderInfo_FragmentUniformBindGroupDescriptor) {
        const gpuDevice = this.redGPUContext.gpuDevice;
        // 유니폼 바인딩 레이아웃에 맞는 디스크립터를 생성한다.
        // console.log(renderInfo_FragmentUniformBindGroupDescriptor)
        this.#renderInfo_FragmentUniformBindGroupDescriptor = renderInfo_FragmentUniformBindGroupDescriptor;
        // 재질 유니폼
        this.#renderInfo_FragmentUniformBindGroup = gpuDevice.createBindGroup(this.#renderInfo_FragmentUniformBindGroupDescriptor);
    }
    updateBindGroup() {
        throw 'updateBindGroup 재정의해야함';
    }
    initUniformValue() {
        throw 'initUniformValue 재정의해야함';
    }
    #updateRenderInfo_FragmentUniformsBindGroupLayout(fragmentUniformBindGroupLayoutDescriptor) {
        const gpuDevice = this.redGPUContext.gpuDevice;
        this.#renderInfo_FragmentUniformsBindGroupLayout = gpuDevice.createBindGroupLayout(fragmentUniformBindGroupLayoutDescriptor);
        this.updateRenderInfo_pipeline_Fragment();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseMaterial);


/***/ }),

/***/ "./src/material/MaterialMix.ts":
/*!*************************************!*\
  !*** ./src/material/MaterialMix.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resource/buffers/TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _util_color_hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/color/hexadecimalToRgb */ "./src/util/color/hexadecimalToRgb.ts");



let float32Array_1 = new Float32Array(1);
const MaterialMix = (Base, ...texture) => {
    return [Base, ...texture].reduce((parent, extender) => {
        return extender(parent);
    });
};
const alpha = Base => class extends Base {
    #alpha = 1;
    get alpha() {
        return this.#alpha;
    }
    set alpha(value) {
        this.#alpha = value;
        float32Array_1[0] = value;
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.fragmentUniformBuffer.gpuBuffer, this.fragmentUniformBuffer.descriptor.redGpuStructOffsetMap['alpha'], float32Array_1);
    }
};
const lightProperty = Base => class extends Base {
    #shininess = 32;
    #specularPower = 1;
    #specularColor = 0xffffff;
    #specularColorRGB = new Float32Array([1, 1, 1]);
    get shininess() {
        return this.#shininess;
    }
    set shininess(value) {
        this.#shininess = value;
        float32Array_1[0] = this.#shininess;
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.fragmentUniformBuffer.gpuBuffer, this.fragmentUniformBuffer.descriptor.redGpuStructOffsetMap['shininess'], float32Array_1);
    }
    get specularPower() {
        return this.#specularPower;
    }
    set specularPower(value) {
        this.#specularPower = value;
        float32Array_1[0] = this.#specularPower;
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.fragmentUniformBuffer.gpuBuffer, this.fragmentUniformBuffer.descriptor.redGpuStructOffsetMap['specularPower'], float32Array_1);
    }
    get specularColor() {
        return this.#specularColor;
    }
    set specularColor(value) {
        this.#specularColor = value;
        let rgb = (0,_util_color_hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
        this.#specularColorRGB[0] = rgb.r;
        this.#specularColorRGB[1] = rgb.g;
        this.#specularColorRGB[2] = rgb.b;
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.fragmentUniformBuffer.gpuBuffer, this.fragmentUniformBuffer.descriptor.redGpuStructOffsetMap['specularColor'], this.#specularColorRGB);
    }
    get specularColorRGB() {
        return this.#specularColorRGB;
    }
};
// texture
const diffuseTexture = Base => class extends Base {
    #diffuseTexture;
    #diffuseTextureSampler;
    get diffuseTexture() {
        return this.#diffuseTexture;
    }
    set diffuseTexture(value) {
        this.#diffuseTexture = value;
        if (this.#diffuseTexture) {
            this.#diffuseTexture.addTargetMaterial(this);
        }
        this.dirtyTexture = true;
    }
    get diffuseTextureSampler() {
        return this.#diffuseTextureSampler;
    }
    set diffuseTextureSampler(value) {
        this.#diffuseTextureSampler = value;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    mix: MaterialMix,
    alpha,
    alphaUniformDefine: [{ size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'alpha' }],
    lightProperty,
    lightPropertyUniformDefine: [
        { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'shininess' },
        { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'specularPower' },
        { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32x3, valueName: 'specularColor' }
    ],
    //
    diffuseTexture
});


/***/ }),

/***/ "./src/material/bitmapMaterial/BitmapMaterial.ts":
/*!*******************************************************!*\
  !*** ./src/material/bitmapMaterial/BitmapMaterial.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resource_texture_TextureSampler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource/texture/TextureSampler */ "./src/resource/texture/TextureSampler.ts");
/* harmony import */ var _BaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseMaterial */ "./src/material/BaseMaterial.ts");
/* harmony import */ var _MaterialMix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MaterialMix */ "./src/material/MaterialMix.ts");
/* harmony import */ var _fragment_wgsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fragment.wgsl */ "./src/material/bitmapMaterial/fragment.wgsl");
/* harmony import */ var _vertex_wgsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertex.wgsl */ "./src/material/bitmapMaterial/vertex.wgsl");





const fragmentUniformBindGroupLayoutDescriptor = {
    entries: [
        {
            binding: 0,
            visibility: GPUShaderStage.FRAGMENT,
            buffer: {
                type: 'uniform',
            },
        },
        {
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {
                type: 'filtering',
            },
        },
        {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {}
        }
    ]
};
const fragmentUniformBufferDescriptor = [
    ..._MaterialMix__WEBPACK_IMPORTED_MODULE_2__["default"].alphaUniformDefine,
];
class BitmapMaterial extends _MaterialMix__WEBPACK_IMPORTED_MODULE_2__["default"].mix(_BaseMaterial__WEBPACK_IMPORTED_MODULE_1__["default"], _MaterialMix__WEBPACK_IMPORTED_MODULE_2__["default"].diffuseTexture, _MaterialMix__WEBPACK_IMPORTED_MODULE_2__["default"].alpha) {
    /**
     *
     * @param redGPUContext
     * @param diffuseTexture
     */
    constructor(redGPUContext, diffuseTexture) {
        super(redGPUContext, _vertex_wgsl__WEBPACK_IMPORTED_MODULE_4__["default"], _fragment_wgsl__WEBPACK_IMPORTED_MODULE_3__["default"], fragmentUniformBufferDescriptor, fragmentUniformBindGroupLayoutDescriptor);
        const gpuDevice = this.redGPUContext.gpuDevice;
        this.diffuseTextureSampler = new _resource_texture_TextureSampler__WEBPACK_IMPORTED_MODULE_0__["default"](redGPUContext);
        this.#initFragmentUniformInfo(gpuDevice);
        this.diffuseTexture = diffuseTexture;
        console.log(this);
    }
    updateBindGroup() {
        if (this.dirtyTexture) {
            this.updateFragmentUniformBindGroup({
                layout: this.renderInfo_FragmentUniformsBindGroupLayout,
                entries: [
                    {
                        binding: 0,
                        resource: {
                            buffer: this.fragmentUniformBuffer.gpuBuffer,
                            offset: 0,
                            size: this.fragmentUniformBuffer.gpuBufferSize
                        }
                    },
                    {
                        binding: 1,
                        resource: this.diffuseTextureSampler.gpuSampler,
                    },
                    {
                        binding: 2,
                        resource: this.diffuseTexture?.gpuTextureView || (this.redGPUContext.resourceManager.emptyTextureInfo.textureView)
                    }
                ]
            });
            this.dirtyTexture = false;
            console.log(this);
        }
    }
    /**
     *
     * @param gpuDevice
     * @private
     */
    #initFragmentUniformInfo(gpuDevice) {
        this.#initUniformValue();
        this.updateBindGroup();
    }
    #initUniformValue() {
        const offsetMap = this.fragmentUniformBuffer.descriptor.redStructOffsetMap;
        for (const k in offsetMap) {
            this[k] = this[k];
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BitmapMaterial);


/***/ }),

/***/ "./src/material/bitmapPhoneMaterial/BitmapPhongMaterial.ts":
/*!*****************************************************************!*\
  !*** ./src/material/bitmapPhoneMaterial/BitmapPhongMaterial.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resource_texture_TextureSampler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource/texture/TextureSampler */ "./src/resource/texture/TextureSampler.ts");
/* harmony import */ var _BaseMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseMaterial */ "./src/material/BaseMaterial.ts");
/* harmony import */ var _MaterialMix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MaterialMix */ "./src/material/MaterialMix.ts");
/* harmony import */ var _fragment_wgsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fragment.wgsl */ "./src/material/bitmapPhoneMaterial/fragment.wgsl");
/* harmony import */ var _vertex_wgsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertex.wgsl */ "./src/material/bitmapPhoneMaterial/vertex.wgsl");





const fragmentUniformBindGroupLayoutDescriptor = {
    entries: [
        {
            binding: 0,
            visibility: GPUShaderStage.FRAGMENT,
            buffer: {
                type: 'uniform',
            },
        },
        {
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {
                type: 'filtering',
            },
        },
        {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {}
        }
    ]
};
const fragmentUniformBufferDescriptor = [
    ..._MaterialMix__WEBPACK_IMPORTED_MODULE_2__["default"].alphaUniformDefine,
    ..._MaterialMix__WEBPACK_IMPORTED_MODULE_2__["default"].lightPropertyUniformDefine
];
class BitmapPhongMaterial extends _MaterialMix__WEBPACK_IMPORTED_MODULE_2__["default"].mix(_BaseMaterial__WEBPACK_IMPORTED_MODULE_1__["default"], _MaterialMix__WEBPACK_IMPORTED_MODULE_2__["default"].diffuseTexture, _MaterialMix__WEBPACK_IMPORTED_MODULE_2__["default"].alpha, _MaterialMix__WEBPACK_IMPORTED_MODULE_2__["default"].lightProperty) {
    /**
     *
     * @param redGPUContext
     * @param diffuseTexture
     */
    constructor(redGPUContext, diffuseTexture) {
        super(redGPUContext, _vertex_wgsl__WEBPACK_IMPORTED_MODULE_4__["default"], _fragment_wgsl__WEBPACK_IMPORTED_MODULE_3__["default"], fragmentUniformBufferDescriptor, fragmentUniformBindGroupLayoutDescriptor);
        const gpuDevice = this.redGPUContext.gpuDevice;
        this.diffuseTextureSampler = new _resource_texture_TextureSampler__WEBPACK_IMPORTED_MODULE_0__["default"](redGPUContext);
        this.#initFragmentUniformInfo(gpuDevice);
        this.diffuseTexture = diffuseTexture;
        console.log(this);
    }
    updateBindGroup() {
        if (this.dirtyTexture) {
            this.updateFragmentUniformBindGroup({
                layout: this.renderInfo_FragmentUniformsBindGroupLayout,
                entries: [
                    {
                        binding: 0,
                        resource: {
                            buffer: this.fragmentUniformBuffer.gpuBuffer,
                            offset: 0,
                            size: this.fragmentUniformBuffer.gpuBufferSize
                        }
                    },
                    {
                        binding: 1,
                        resource: this.diffuseTextureSampler.gpuSampler,
                    },
                    {
                        binding: 2,
                        resource: this.diffuseTexture?.gpuTextureView || (this.redGPUContext.resourceManager.emptyTextureInfo.textureView)
                    }
                ]
            });
            this.dirtyTexture = false;
            console.log(this);
        }
    }
    /**
     *
     * @param gpuDevice
     * @private
     */
    #initFragmentUniformInfo(gpuDevice) {
        this.#initUniformValue();
        this.updateBindGroup();
    }
    #initUniformValue() {
        const offsetMap = this.fragmentUniformBuffer.descriptor.redStructOffsetMap;
        for (const k in offsetMap) {
            this[k] = this[k];
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BitmapPhongMaterial);


/***/ }),

/***/ "./src/material/colorMaterial/ColorMaterial.ts":
/*!*****************************************************!*\
  !*** ./src/material/colorMaterial/ColorMaterial.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource/buffers/TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _util_color_hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/color/hexadecimalToRgb */ "./src/util/color/hexadecimalToRgb.ts");
/* harmony import */ var _BaseMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseMaterial */ "./src/material/BaseMaterial.ts");
/* harmony import */ var _fragment_wgsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fragment.wgsl */ "./src/material/colorMaterial/fragment.wgsl");
/* harmony import */ var _vertex_wgsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertex.wgsl */ "./src/material/colorMaterial/vertex.wgsl");





const fragmentUniformBufferDescriptor = [
    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32x4, valueName: 'color' },
    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'alpha' },
];
const fragmentUniformBindGroupLayoutDescriptor = {
    entries: [
        {
            binding: 0,
            visibility: GPUShaderStage.FRAGMENT,
            buffer: {
                type: 'uniform',
            },
        }
    ]
};
class ColorMaterial extends _BaseMaterial__WEBPACK_IMPORTED_MODULE_2__["default"] {
    // TODO - 컬러는 color, rgba로 무조건 구성하도록 때려야하나?
    #color;
    #rgb;
    #alpha = 1;
    /**
     *
     * @param redGPUContext
     */
    constructor(redGPUContext, color, alpha = 1) {
        super(redGPUContext, _vertex_wgsl__WEBPACK_IMPORTED_MODULE_4__["default"], _fragment_wgsl__WEBPACK_IMPORTED_MODULE_3__["default"], fragmentUniformBufferDescriptor, fragmentUniformBindGroupLayoutDescriptor);
        const t0 = color || `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
        this.color = t0;
        // console.log(this)
        this.#alpha = alpha;
        this.#initFragmentUniformInfo();
        // console.log(this)
    }
    get color() {
        return this.#color;
    }
    set color(value) {
        this.#color = value;
        this.#rgb = (0,_util_color_hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_1__["default"])(value, true);
    }
    get rgb() {
        return this.#rgb;
    }
    get alpha() {
        return this.#alpha;
    }
    set alpha(value) {
        this.#alpha = value;
    }
    initUniformValue() {
        const gpuDevice = this.redGPUContext.gpuDevice;
        gpuDevice.queue.writeBuffer(this.fragmentUniformBuffer.gpuBuffer, 0, new Float32Array([
            this.rgb[0],
            this.rgb[1],
            this.rgb[2],
            this.alpha
        ]));
    }
    updateBindGroup() {
        this.updateFragmentUniformBindGroup({
            layout: this.renderInfo_FragmentUniformsBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.fragmentUniformBuffer.gpuBuffer,
                        offset: 0,
                        size: this.fragmentUniformBuffer.gpuBufferSize
                    }
                },
            ]
        });
    }
    #initFragmentUniformInfo() {
        this.initUniformValue();
        this.updateBindGroup();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorMaterial);


/***/ }),

/***/ "./src/material/index.ts":
/*!*******************************!*\
  !*** ./src/material/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitmapMaterial: () => (/* reexport safe */ _bitmapMaterial_BitmapMaterial__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   BitmapPhongMaterial: () => (/* reexport safe */ _bitmapPhoneMaterial_BitmapPhongMaterial__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ColorMaterial: () => (/* reexport safe */ _colorMaterial_ColorMaterial__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   SkyBoxMaterial: () => (/* reexport safe */ _skyboxMaterial_SkyBoxMaterial__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _bitmapMaterial_BitmapMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bitmapMaterial/BitmapMaterial */ "./src/material/bitmapMaterial/BitmapMaterial.ts");
/* harmony import */ var _bitmapPhoneMaterial_BitmapPhongMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bitmapPhoneMaterial/BitmapPhongMaterial */ "./src/material/bitmapPhoneMaterial/BitmapPhongMaterial.ts");
/* harmony import */ var _colorMaterial_ColorMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorMaterial/ColorMaterial */ "./src/material/colorMaterial/ColorMaterial.ts");
/* harmony import */ var _skyboxMaterial_SkyBoxMaterial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skyboxMaterial/SkyBoxMaterial */ "./src/material/skyboxMaterial/SkyBoxMaterial.ts");







/***/ }),

/***/ "./src/material/skyboxMaterial/SkyBoxMaterial.ts":
/*!*******************************************************!*\
  !*** ./src/material/skyboxMaterial/SkyBoxMaterial.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource/buffers/TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _resource_texture_TextureSampler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resource/texture/TextureSampler */ "./src/resource/texture/TextureSampler.ts");
/* harmony import */ var _BaseMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseMaterial */ "./src/material/BaseMaterial.ts");
/* harmony import */ var _fragment_wgsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fragment.wgsl */ "./src/material/skyboxMaterial/fragment.wgsl");
/* harmony import */ var _vertex_wgsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertex.wgsl */ "./src/material/skyboxMaterial/vertex.wgsl");





const fragmentUniformBufferDescriptor = [
    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'opacity' },
];
const fragmentUniformBindGroupLayoutDescriptor = {
    entries: [
        {
            binding: 0,
            visibility: GPUShaderStage.FRAGMENT,
            buffer: {
                type: 'uniform',
            },
        },
        {
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {
                type: 'filtering',
            },
        },
        {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
                viewDimension: 'cube'
            }
        }
    ]
};
class SkyBoxMaterial extends _BaseMaterial__WEBPACK_IMPORTED_MODULE_2__["default"] {
    #texture;
    #sampler;
    /**
     *
     * @param redGPUContext
     * @param texture
     */
    constructor(redGPUContext, texture) {
        super(redGPUContext, _vertex_wgsl__WEBPACK_IMPORTED_MODULE_4__["default"], _fragment_wgsl__WEBPACK_IMPORTED_MODULE_3__["default"], fragmentUniformBufferDescriptor, fragmentUniformBindGroupLayoutDescriptor);
        const gpuDevice = this.redGPUContext.gpuDevice;
        this.#sampler = new _resource_texture_TextureSampler__WEBPACK_IMPORTED_MODULE_1__["default"](redGPUContext, { magFilter: 'linear', minFilter: 'linear', });
        this.#initFragmentUniformInfo(gpuDevice);
        this.texture = texture;
        // console.log(this)
    }
    get texture() {
        return this.#texture;
    }
    set texture(value) {
        this.#texture = value;
        if (this.#texture) {
            this.#texture.addTargetMaterial(this);
        }
        this.dirtyTexture = true;
    }
    updateBindGroup() {
        if (this.dirtyTexture) {
            this.updateFragmentUniformBindGroup({
                layout: this.renderInfo_FragmentUniformsBindGroupLayout,
                entries: [
                    {
                        binding: 0,
                        resource: {
                            buffer: this.fragmentUniformBuffer.gpuBuffer,
                            offset: 0,
                            size: this.fragmentUniformBuffer.gpuBufferSize
                        }
                    },
                    {
                        binding: 1,
                        resource: this.#sampler.gpuSampler,
                    },
                    {
                        binding: 2,
                        resource: this.#texture?.gpuTextureView || (this.redGPUContext.resourceManager.emptyCubeTextureInfo.textureView)
                    }
                ]
            });
            this.dirtyTexture = false;
        }
    }
    /**
     *
     * @param gpuDevice
     * @private
     */
    #initFragmentUniformInfo(gpuDevice) {
        this.updateBindGroup();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkyBoxMaterial);


/***/ }),

/***/ "./src/object3d/base/BaseObject3D.ts":
/*!*******************************************!*\
  !*** ./src/object3d/base/BaseObject3D.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseObject3DPipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseObject3DPipeline */ "./src/object3d/base/BaseObject3DPipeline.ts");

class BaseObject3D extends _BaseObject3DPipeline__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #vertexUniformBufferDescriptor;
    #vertexUniformBindGroupLayoutDescriptor;
    constructor(redGPUContext, vertexUniformBufferDescriptor, vertexUniformBindGroupLayoutDescriptor) {
        super(redGPUContext, vertexUniformBufferDescriptor, vertexUniformBindGroupLayoutDescriptor);
        this.#vertexUniformBufferDescriptor = vertexUniformBufferDescriptor;
        this.#vertexUniformBindGroupLayoutDescriptor = vertexUniformBindGroupLayoutDescriptor;
    }
    get vertexUniformBufferDescriptor() {
        return this.#vertexUniformBufferDescriptor;
    }
    get vertexUniformBindGroupLayoutDescriptor() {
        return this.#vertexUniformBindGroupLayoutDescriptor;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseObject3D);


/***/ }),

/***/ "./src/object3d/base/BaseObject3DPipeline.ts":
/*!***************************************************!*\
  !*** ./src/object3d/base/BaseObject3DPipeline.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/RedGPUContext */ "./src/context/RedGPUContext.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resource/buffers/uniformBuffer/UniformBufferFloat32 */ "./src/resource/buffers/uniformBuffer/UniformBufferFloat32.ts");
/* harmony import */ var _util_errorFunc_throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/errorFunc/throwErrorInstanceOf */ "./src/util/errorFunc/throwErrorInstanceOf.js");
/* harmony import */ var _mesh_MeshPipeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mesh/MeshPipeline */ "./src/object3d/mesh/MeshPipeline.ts");
/* harmony import */ var _BaseObject3DTransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseObject3DTransform */ "./src/object3d/base/BaseObject3DTransform.ts");





class BaseObject3DPipeline extends _BaseObject3DTransform__WEBPACK_IMPORTED_MODULE_4__["default"] {
    dirtyPipeline = false;
    materialBindGroupID;
    ///////////////
    #geometry;
    #material;
    ///////////////
    #vertexUniformBuffer;
    #renderInfo_VertexUniformBindGroupLayout;
    #renderInfo_pipeline_VertexBuffersInfo;
    #renderInfo_VertexUniformBindGroup;
    #renderInfo_VertexUniformBindGroupDescriptor;
    #renderInfo_pipeline;
    ///////////////////////////////////////////////////
    #topology = 'triangle-list';
    #cullMode = 'none';
    #frontFace = 'ccw';
    #depthWriteEnabled = true;
    #depthCompare = 'less-equal';
    #depthStencilFormat = "depth24plus-stencil8";
    ///////////////////////////////////////////////////
    #redGPUContext;
    constructor(redGPUContext, vertexUniformBufferDescriptor, vertexUniformBindGroupLayoutDescriptor) {
        super();
        if (!(redGPUContext instanceof _context_RedGPUContext__WEBPACK_IMPORTED_MODULE_0__["default"]))
            (0,_util_errorFunc_throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'redGPUContext', 'RedGPUContext');
        this.#redGPUContext = redGPUContext;
        const { gpuDevice } = redGPUContext;
        this.#vertexUniformBuffer = new _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_1__["default"](this.redGPUContext, vertexUniformBufferDescriptor);
        this.#renderInfo_VertexUniformBindGroupLayout = gpuDevice.createBindGroupLayout(vertexUniformBindGroupLayoutDescriptor);
    }
    get geometry() {
        return this.#geometry;
    }
    set geometry(value) {
        this.#geometry = value;
        this.dirtyPipeline = true;
        if (this.#geometry) {
            this.#renderInfo_pipeline_VertexBuffersInfo = [
                {
                    arrayStride: this.geometry.vertexBuffer.arrayStride,
                    attributes: this.geometry.vertexBuffer.attributes
                }
            ];
        }
    }
    get material() {
        return this.#material;
    }
    set material(value) {
        this.#material = value;
        this.materialBindGroupID = this.material?.bindGroupID;
        this.dirtyPipeline = true;
    }
    get vertexUniformBuffer() {
        return this.#vertexUniformBuffer;
    }
    get renderInfo_VertexUniformBindGroupLayout() {
        return this.#renderInfo_VertexUniformBindGroupLayout;
    }
    get renderInfo_pipeline_VertexBuffersInfo() {
        return this.#renderInfo_pipeline_VertexBuffersInfo;
    }
    get renderInfo_VertexUniformBindGroup() {
        return this.#renderInfo_VertexUniformBindGroup;
    }
    get renderInfo_pipeline() {
        return this.#renderInfo_pipeline;
    }
    get topology() {
        return this.#topology;
    }
    set topology(value) {
        this.#topology = value;
        this.dirtyPipeline = true;
    }
    get cullMode() {
        return this.#cullMode;
    }
    set cullMode(value) {
        this.#cullMode = value;
        this.dirtyPipeline = true;
    }
    get frontFace() {
        return this.#frontFace;
    }
    set frontFace(value) {
        this.#frontFace = value;
        this.dirtyPipeline = true;
    }
    get depthWriteEnabled() {
        return this.#depthWriteEnabled;
    }
    set depthWriteEnabled(value) {
        this.#depthWriteEnabled = value;
        this.dirtyPipeline = true;
    }
    get depthCompare() {
        return this.#depthCompare;
    }
    set depthCompare(value) {
        this.#depthCompare = value;
        this.dirtyPipeline = true;
    }
    get depthStencilFormat() {
        return this.#depthStencilFormat;
    }
    set depthStencilFormat(value) {
        this.#depthStencilFormat = value;
        this.dirtyPipeline = true;
    }
    get redGPUContext() {
        return this.#redGPUContext;
    }
    updateVertexUniformBindGroup(renderInfo_VertexUniformBindGroupDescriptor) {
        const { gpuDevice } = this.redGPUContext;
        // TODO 유니포내용중 텍스쳐 등이 변화하면 업데이트 해야함
        this.#renderInfo_VertexUniformBindGroupDescriptor = renderInfo_VertexUniformBindGroupDescriptor;
        // 모델유니폼
        this.#renderInfo_VertexUniformBindGroup = gpuDevice.createBindGroup(this.#renderInfo_VertexUniformBindGroupDescriptor);
    }
    updatePipeline(targetSystemUniformsBindGroupLayout) {
        // 재질 바인드 그룹이 변경되었나 체크
        if (this.materialBindGroupID !== this.material?.bindGroupID) {
            this.materialBindGroupID = this.material?.bindGroupID;
            this.dirtyPipeline = true;
        }
        if (this.dirtyPipeline) {
            if (this.material) {
                this.material.updateBindGroup();
            }
            if (this.geometry && this.material) {
                this.#renderInfo_pipeline = new _mesh_MeshPipeline__WEBPACK_IMPORTED_MODULE_3__["default"](this.redGPUContext, this, targetSystemUniformsBindGroupLayout);
            }
            this.dirtyPipeline = false;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseObject3DPipeline);


/***/ }),

/***/ "./src/object3d/base/BaseObject3DTransform.ts":
/*!****************************************************!*\
  !*** ./src/object3d/base/BaseObject3DTransform.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/gl-matrix */ "./src/util/gl-matrix/index.js");
/* harmony import */ var _CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CONST_DIRTY_TRANSFORM_STATE */ "./src/object3d/base/CONST_DIRTY_TRANSFORM_STATE.ts");
/* harmony import */ var _DisplayContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayContainer */ "./src/object3d/base/DisplayContainer.ts");



class BaseObject3DTransform extends _DisplayContainer__WEBPACK_IMPORTED_MODULE_2__["default"] {
    dirtyTransformState = _CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    ///////////////
    matrix = _util_gl_matrix__WEBPACK_IMPORTED_MODULE_0__.mat4.create();
    normalMatrix = _util_gl_matrix__WEBPACK_IMPORTED_MODULE_0__.mat4.create();
    ///////////////
    #scaleX = 1;
    #scaleY = 1;
    #scaleZ = 1;
    #x = 0;
    #y = 0;
    #z = 0;
    ///////////////
    #rotationX = 0;
    #rotationY = 0;
    #rotationZ = 0;
    constructor() {
        super();
    }
    get scaleX() {
        return this.#scaleX;
    }
    set scaleX(value) {
        this.#scaleX = value;
        this.dirtyTransformState = _CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    get scaleY() {
        return this.#scaleY;
    }
    set scaleY(value) {
        this.#scaleY = value;
        this.dirtyTransformState = _CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    get scaleZ() {
        return this.#scaleZ;
    }
    set scaleZ(value) {
        this.#scaleZ = value;
        this.dirtyTransformState = _CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    get x() {
        return this.#x;
    }
    set x(value) {
        this.#x = value;
        this.dirtyTransformState = _CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    get y() {
        return this.#y;
    }
    set y(value) {
        this.#y = value;
        this.dirtyTransformState = _CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    get z() {
        return this.#z;
    }
    set z(value) {
        this.#z = value;
        this.dirtyTransformState = _CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    get position() {
        return [this.#x, this.#y, this.#z];
    }
    get rotationX() {
        return this.#rotationX;
    }
    set rotationX(value) {
        this.#rotationX = value;
        this.dirtyTransformState = _CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    get rotationY() {
        return this.#rotationY;
    }
    set rotationY(value) {
        this.#rotationY = value;
        this.dirtyTransformState = _CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    get rotationZ() {
        return this.#rotationZ;
    }
    set rotationZ(value) {
        this.#rotationZ = value;
        this.dirtyTransformState = _CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    setScale(x, y, z) {
        this.#scaleX = x;
        this.#scaleY = y;
        this.#scaleZ = z;
        this.dirtyTransformState = _CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_1__["default"].DIRTY;
    }
    setPosition(x, y, z) {
        this.#x = x;
        this.#y = y;
        this.#z = z;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseObject3DTransform);


/***/ }),

/***/ "./src/object3d/base/CONST_DIRTY_TRANSFORM_STATE.ts":
/*!**********************************************************!*\
  !*** ./src/object3d/base/CONST_DIRTY_TRANSFORM_STATE.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CONST_DIRTY_TRANSFORM_STATE = {
    NONE: 0,
    DIRTY: 1,
    NEED_GPU_UPDATE: 2
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONST_DIRTY_TRANSFORM_STATE);


/***/ }),

/***/ "./src/object3d/base/DisplayContainer.ts":
/*!***********************************************!*\
  !*** ./src/object3d/base/DisplayContainer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * DisplayContainer는 자식/부모 객체 관리기능을 담당하는 객체입니다.
 */
class DisplayContainer {
    /**
     * 자식객체 리스트
     * @private
     */
    #children = [];
    /**
     * 부모객체 값
     * @private
     */
    #parent;
    constructor() {
    }
    /**
     * 자식객체 리스트를 반환힙니다.
     */
    get children() {
        return this.#children;
    }
    /**
     * 설정된 부모 객체값을 반환합니다.
     */
    get parent() {
        return this.#parent;
    }
    /**
     * 부모 객체를 설정합니다.
     * @param value
     */
    set parent(value) {
        this.#parent = value;
    }
    /**
     * 자식 객체를 등록합니다.
     * * 추가하려는 객체에 parent 값이 존재할경우 해당 parent에서 삭제후 추가합니다.
     * @param child
     */
    addChild(child) {
        if (child.parent)
            child.parent.remove(child);
        child.parent = this;
        this.#children.push(child);
        return this;
    }
    /**
     *  원하는 index 위치에 자식 객체를 등록합니다.
     * * 추가하려는 객체에 parent 값이 존재할경우 해당 parent에서 삭제후 추가합니다.
     * * index가 children 길이보다 길경우 제일 마지막에 push됩니다.
     * @param child
     * @param index
     */
    addChildAt(child, index) {
        if (child.parent)
            child.parent.remove(child);
        child.parent = this;
        if (this.#children.length < index)
            index = this.#children.length;
        this.#children.splice(index, 0, child);
        return this;
    }
    /**
     * 대상객체를 자식목록에서 삭제합니다.
     * * 존재하지 않는 객체를 지우려고 할떄는 무시됩니다.
     * @param child
     */
    removeChild(child) {
        const index = this.#children.indexOf(child);
        if (index > -1) {
            child.parent = null;
            this.#children.splice(index, 1);
        }
        return this;
    }
    /**
     * index 기반으로 자식을  삭제합니다.
     * @param index
     */
    removeChildAt(index) {
        const child = this.#children[index];
        if (child) {
            child.parent = null;
            this.#children.splice(index, 1);
        }
        return this;
    }
    /**
     * 등록된 모든 자식을 삭제합니다.
     */
    removeAllChild() {
        let i = this.#children.length;
        while (i--) {
            this.#children[i].parent = null;
        }
        this.#children.length = 0;
        return this;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayContainer);


/***/ }),

/***/ "./src/object3d/index.ts":
/*!*******************************!*\
  !*** ./src/object3d/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseObject3D: () => (/* reexport safe */ _base_BaseObject3D__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   BaseObject3DPipeline: () => (/* reexport safe */ _base_BaseObject3DPipeline__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   CONST_DIRTY_TRANSFORM_STATE: () => (/* reexport safe */ _base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   DisplayContainer: () => (/* reexport safe */ _base_DisplayContainer__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Mesh: () => (/* reexport safe */ _mesh_Mesh__WEBPACK_IMPORTED_MODULE_4__.Mesh)
/* harmony export */ });
/* harmony import */ var _base_BaseObject3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/BaseObject3D */ "./src/object3d/base/BaseObject3D.ts");
/* harmony import */ var _base_BaseObject3DPipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/BaseObject3DPipeline */ "./src/object3d/base/BaseObject3DPipeline.ts");
/* harmony import */ var _base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/CONST_DIRTY_TRANSFORM_STATE */ "./src/object3d/base/CONST_DIRTY_TRANSFORM_STATE.ts");
/* harmony import */ var _base_DisplayContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/DisplayContainer */ "./src/object3d/base/DisplayContainer.ts");
/* harmony import */ var _mesh_Mesh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mesh/Mesh */ "./src/object3d/mesh/Mesh.ts");








/***/ }),

/***/ "./src/object3d/mesh/Mesh.ts":
/*!***********************************!*\
  !*** ./src/object3d/mesh/Mesh.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mesh: () => (/* binding */ Mesh)
/* harmony export */ });
/* harmony import */ var _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource/buffers/TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resource/buffers/uniformBuffer/UniformBufferDescriptor */ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts");
/* harmony import */ var _util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/gl-matrix */ "./src/util/gl-matrix/index.js");
/* harmony import */ var _base_BaseObject3D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/BaseObject3D */ "./src/object3d/base/BaseObject3D.ts");
/* harmony import */ var _base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/CONST_DIRTY_TRANSFORM_STATE */ "./src/object3d/base/CONST_DIRTY_TRANSFORM_STATE.ts");





const define_vertexUniformBufferDescriptor = new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"]([
    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].mat4, valueName: 'modelMatrix' },
    { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].mat4, valueName: 'normalMatrix' },
]);
const define_vertexUniformBindGroupLayoutDescriptor = {
    entries: [
        {
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
                type: 'uniform',
            },
        }
    ]
};
class Mesh extends _base_BaseObject3D__WEBPACK_IMPORTED_MODULE_3__["default"] {
    renderBundle;
    constructor(redGPUContext, geometry, material, vertexUniformBufferDescriptor = define_vertexUniformBufferDescriptor, vertexUniformBindGroupLayoutDescriptor = define_vertexUniformBindGroupLayoutDescriptor) {
        super(redGPUContext, vertexUniformBufferDescriptor, vertexUniformBindGroupLayoutDescriptor);
        const device = redGPUContext.gpuDevice;
        this.geometry = geometry;
        this.material = material;
        // 유니폼 정보를 초기화함
        this.#initVertexUniformBindGroupLayout(device);
        // 파이프 라인을 생성함
        // this.updatePipeline()
        // console.log(this)
    }
    updateBindGroup() {
        this.updateVertexUniformBindGroup({
            layout: this.renderInfo_VertexUniformBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.vertexUniformBuffer.gpuBuffer,
                        offset: 0,
                        size: this.vertexUniformBuffer.gpuBufferSize
                    }
                }
            ]
        });
    }
    updateTransform() {
        const { redStructOffsetMap, redGpuStructOffsetMap } = this.vertexUniformBuffer.descriptor;
        // mat4.identity(this.matrix);
        // mat4.translate(this.matrix, this.matrix, [this.x, this.y, this.z]);
        // mat4.rotateX(this.matrix, this.matrix, this.rotationX);
        // mat4.rotateY(this.matrix, this.matrix, this.rotationY);
        // mat4.rotateZ(this.matrix, this.matrix, this.rotationZ);
        // mat4.scale(this.matrix, this.matrix, [this.scaleX, this.scaleY, this.scaleZ]);
        // update Uniform
        // this.vertexUniformBuffer.data.set(this.matrix,redStructOffsetMap['modelMatrix'])
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.vertexUniformBuffer.gpuBuffer, redGpuStructOffsetMap['modelMatrix'], this.matrix);
        // this.vertexUniformBuffer.update(0, this.matrix)
        /////////////////////////////////////////////////////////
        if (this.vertexUniformBufferDescriptor.redStructOffsetMap['normalMatrix']) {
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__.mat4.transpose(this.normalMatrix, _util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__.mat4.invert(this.normalMatrix, this.matrix));
            // this.vertexUniformBuffer.data.set(this.normalMatrix,redStructOffsetMap['normalMatrix'])
            this.redGPUContext.gpuDevice.queue.writeBuffer(this.vertexUniformBuffer.gpuBuffer, redGpuStructOffsetMap['normalMatrix'], this.normalMatrix);
        }
        // this.vertexUniformBuffer.update()
        /////////////////////////////////////////////////////////
        this.dirtyTransformState = _base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_4__["default"].NONE;
    }
    render(view, passEncoder, time) {
        if (this.redGPUContext.dirtyMultiSample)
            this.dirtyPipeline = true;
        // dirty 계산
        if (this.materialBindGroupID !== this.material?.bindGroupID) {
            this.materialBindGroupID = this.material?.bindGroupID;
            this.dirtyPipeline = true;
        }
        const tempDirtyPipeline = this.dirtyPipeline;
        const frustumPlanes = view.frustumPlanes;
        let frustumCulling = true;
        // GPU렌더링
        if (this.dirtyTransformState === _base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_4__["default"].DIRTY) {
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__.mat4.identity(this.matrix);
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__.mat4.translate(this.matrix, this.matrix, [this.x, this.y, this.z]);
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__.mat4.rotateX(this.matrix, this.matrix, this.rotationX);
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__.mat4.rotateY(this.matrix, this.matrix, this.rotationY);
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__.mat4.rotateZ(this.matrix, this.matrix, this.rotationZ);
            _util_gl_matrix__WEBPACK_IMPORTED_MODULE_2__.mat4.scale(this.matrix, this.matrix, [this.scaleX, this.scaleY, this.scaleZ]);
            this.dirtyTransformState = _base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_4__["default"].NEED_GPU_UPDATE;
        }
        if (this.geometry && this.material) {
            // if(!this.renderBundle || tempDirtyPipeline){
            //     const des : GPURenderBundleEncoderDescriptor = {
            //         colorFormats: [navigator.gpu.getPreferredCanvasFormat()],
            //         depthStencilFormat : 'depth24plus-stencil8',
            //         sampleCount:4,
            //     }
            //     const renderBundleEncoder:GPURenderBundleEncoder = this.redGPUContext.gpuDevice.createRenderBundleEncoder(des)
            //     //
            //     renderBundleEncoder.setBindGroup(0, view.renderInfo_SystemUniformBindGroup);
            //     //
            //     renderBundleEncoder.setPipeline(this.renderInfo_pipeline.gpuPipeline); // 무조건갱신
            //     renderBundleEncoder.setVertexBuffer(0, this.geometry.vertexGpuBuffer); // 줄일수있으면 줄이면 좋음
            //     renderBundleEncoder.setBindGroup(1, this.renderInfo_VertexUniformBindGroup); // 버텍스 유니폼 버퍼 1번 고정
            //     renderBundleEncoder.setBindGroup(2, this.material.renderInfo_FragmentUniformBindGroup); // 프래그 먼트 유니폼 버퍼 2번 고정
            //     if (this.geometry.indexGpuBuffer) {
            //         //TODO 더 유연하게
            //         renderBundleEncoder.setIndexBuffer(this.geometry.indexGpuBuffer, 'uint32')
            //         renderBundleEncoder.drawIndexed(this.geometry.indexBuffer.indexNum, 1, 0, 0, 0);
            //     } else {
            //         renderBundleEncoder.draw(this.geometry.vertexBuffer.vertexCount, 1, 0, 0);
            //     }
            //     this.renderBundle = renderBundleEncoder.finish();
            // }else{
            //     // console.log(this.renderBundle)
            // }
            //
            // passEncoder.executeBundles([this.renderBundle])
            {
                let frustumPlanes0, frustumPlanes1, frustumPlanes2, frustumPlanes3, frustumPlanes4, frustumPlanes5;
                frustumPlanes0 = frustumPlanes[0];
                frustumPlanes1 = frustumPlanes[1];
                frustumPlanes2 = frustumPlanes[2];
                frustumPlanes3 = frustumPlanes[3];
                frustumPlanes4 = frustumPlanes[4];
                frustumPlanes5 = frustumPlanes[5];
                let a00, a01, a02;
                const geoVolume = this.geometry.volume;
                let geometryRadius = geoVolume.geometryRadius;
                let radius = Math.max(geometryRadius, Math.max(geometryRadius * this.matrix[0], Math.max(geometryRadius * this.matrix[5], geometryRadius * this.matrix[10])));
                // let radiusTemp: number = geometryRadius * this.matrix[5];
                // radius = radius < radiusTemp ? radiusTemp : radius;
                // radiusTemp = geometryRadius * this.matrix[10];
                // radius = radius < radiusTemp ? radiusTemp : radius;
                // console.log(radius)
                a00 = this.matrix[12], a01 = this.matrix[13], a02 = this.matrix[14],
                    frustumPlanes0[0] * a00 + frustumPlanes0[1] * a01 + frustumPlanes0[2] * a02 + frustumPlanes0[3] <= -radius ? frustumCulling = false
                        : frustumPlanes1[0] * a00 + frustumPlanes1[1] * a01 + frustumPlanes1[2] * a02 + frustumPlanes1[3] <= -radius ? frustumCulling = false
                            : frustumPlanes2[0] * a00 + frustumPlanes2[1] * a01 + frustumPlanes2[2] * a02 + frustumPlanes2[3] <= -radius ? frustumCulling = false
                                : frustumPlanes3[0] * a00 + frustumPlanes3[1] * a01 + frustumPlanes3[2] * a02 + frustumPlanes3[3] <= -radius ? frustumCulling = false
                                    : frustumPlanes4[0] * a00 + frustumPlanes4[1] * a01 + frustumPlanes4[2] * a02 + frustumPlanes4[3] <= -radius ? frustumCulling = false
                                        : frustumPlanes5[0] * a00 + frustumPlanes5[1] * a01 + frustumPlanes5[2] * a02 + frustumPlanes5[3] <= -radius ? frustumCulling = false : 0;
            }
            if (frustumCulling) {
                if (this.dirtyPipeline)
                    this.updatePipeline(view.systemUniformsBindGroupLayout);
                if (this.dirtyTransformState === _base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_4__["default"].NEED_GPU_UPDATE)
                    this.updateTransform();
                passEncoder.setPipeline(this.renderInfo_pipeline.gpuPipeline); // 무조건갱신
                passEncoder.setVertexBuffer(0, this.geometry.vertexGpuBuffer); // 줄일수있으면 줄이면 좋음
                passEncoder.setBindGroup(1, this.renderInfo_VertexUniformBindGroup); // 버텍스 유니폼 버퍼 1번 고정
                passEncoder.setBindGroup(2, this.material.renderInfo_FragmentUniformBindGroup); // 프래그 먼트 유니폼 버퍼 2번 고정
                if (this.geometry.indexGpuBuffer) {
                    //TODO 더 유연하게
                    passEncoder.setIndexBuffer(this.geometry.indexGpuBuffer, 'uint32');
                    passEncoder.drawIndexed(this.geometry.indexBuffer.indexNum, 1, 0, 0, 0);
                }
                else {
                    passEncoder.draw(this.geometry.vertexBuffer.vertexCount, 1, 0, 0);
                }
            }
        }
        else {
            this.dirtyTransformState = _base_CONST_DIRTY_TRANSFORM_STATE__WEBPACK_IMPORTED_MODULE_4__["default"].NONE;
        }
        //
        const children = this.children;
        let i = children.length;
        while (i--)
            children[i].render(view, passEncoder, time);
        return frustumCulling ? 0 : this;
        //
    }
    #initVertexUniformBindGroupLayout(device) {
        this.updateBindGroup();
    }
}



/***/ }),

/***/ "./src/object3d/mesh/MeshPipeline.ts":
/*!*******************************************!*\
  !*** ./src/object3d/mesh/MeshPipeline.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MeshPipeline {
    #gpuPipeline;
    constructor(redGPUContext, mesh, targetSystemUniformsBindGroupLayout) {
        const gpuDevice = redGPUContext.gpuDevice;
        const { material, renderInfo_VertexUniformBindGroupLayout } = mesh;
        const { topology, cullMode, frontFace } = mesh;
        const { depthWriteEnabled, depthCompare, depthStencilFormat } = mesh;
        const { renderInfo_FragmentUniformsBindGroupLayout } = material;
        // 유니폼이 어떻게 바인딩 되어있는지 알려주는 파이프라인 레이아웃을 생성함
        // console.log(renderInfo_VertexUniformBindGroupLayout, renderInfo_FragmentUniformsBindGroupLayout)
        const gpuPipeline_Layout = gpuDevice.createPipelineLayout({
            // maxBindGroups의 영향을 받는다
            bindGroupLayouts: [
                targetSystemUniformsBindGroupLayout,
                renderInfo_VertexUniformBindGroupLayout,
                renderInfo_FragmentUniformsBindGroupLayout
            ]
        });
        const gpuPipeline_Vertex = {
            module: material.vShaderModule,
            entryPoint: 'main',
            buffers: mesh.renderInfo_pipeline_VertexBuffersInfo // maxVertexBuffer에 영향을 받는다.
        };
        const pipeLineDescriptor = {
            layout: gpuPipeline_Layout,
            vertex: gpuPipeline_Vertex,
            fragment: material.renderInfo_pipeline_Fragment,
            multisample: {
                count: redGPUContext.useMultiSample ? 4 : 1
            },
            //TODO 여기서 결국 관리해야함
            primitive: {
                topology,
                cullMode,
                frontFace,
            },
            depthStencil: {
                depthWriteEnabled,
                depthCompare,
                format: depthStencilFormat,
            }
        };
        // 실제로 GPU에 들어갈 파이프 라인을 만듬
        // 이를 토대로 그리기명령을 실행함
        this.#gpuPipeline = gpuDevice.createRenderPipeline(pipeLineDescriptor);
        // // console.log(this)
    }
    get gpuPipeline() {
        return this.#gpuPipeline;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeshPipeline);


/***/ }),

/***/ "./src/postEffect/PostEffectBase.ts":
/*!******************************************!*\
  !*** ./src/postEffect/PostEffectBase.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _resource_makeShaderModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource/makeShaderModule */ "./src/resource/makeShaderModule.ts");
/* harmony import */ var _util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/errorFunc/throwError */ "./src/util/errorFunc/throwError.js");



class PostEffectBase extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    uniformsBindGroupLayout;
    uniformBindGroup;
    pipeline;
    #subPassList = [];
    #effectRenderTime = 0;
    #vShaderModule;
    #fShaderModule;
    #renderTexture;
    #renderTextureView;
    constructor(redGPUContext, vertexSource, fragmentSource) {
        super(redGPUContext);
        const { gpuDevice } = this.redGPUContext;
        this.#vShaderModule = (0,_resource_makeShaderModule__WEBPACK_IMPORTED_MODULE_1__["default"])(gpuDevice, vertexSource, `vertex_${this.constructor.name}`);
        this.#fShaderModule = (0,_resource_makeShaderModule__WEBPACK_IMPORTED_MODULE_1__["default"])(gpuDevice, fragmentSource, `fragment_${this.constructor.name}`);
    }
    get effectRenderTime() {
        return this.#effectRenderTime;
    }
    set effectRenderTime(value) {
        this.#effectRenderTime = value;
    }
    get effectRenderTimeString() {
        return this.#effectRenderTime.toString().substring(0, 7);
    }
    get subPassList() {
        return this.#subPassList;
    }
    get vShaderModule() {
        return this.#vShaderModule;
    }
    get fShaderModule() {
        return this.#fShaderModule;
    }
    setPipeline(postEffectManager) {
        const { gpuDevice } = this.redGPUContext;
        const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
        const pipeLineDescriptor = {
            // set bindGroupLayouts
            layout: gpuDevice.createPipelineLayout({ bindGroupLayouts: [this.uniformsBindGroupLayout] }),
            vertex: {
                module: this.#vShaderModule,
                entryPoint: 'main',
                buffers: [
                    {
                        arrayStride: postEffectManager.vertexBuffer.arrayStride,
                        attributes: postEffectManager.vertexBuffer.attributes.map((v, index) => {
                            return {
                                // position
                                shaderLocation: index,
                                offset: v.offset,
                                format: v.format
                            };
                        })
                    }
                ]
            },
            fragment: {
                module: this.#fShaderModule,
                entryPoint: 'main',
                targets: [
                    {
                        format: presentationFormat,
                        blend: {
                            color: {
                                srcFactor: "src-alpha",
                                dstFactor: "one-minus-src-alpha",
                                operation: "add"
                            },
                            alpha: {
                                srcFactor: "one",
                                dstFactor: "one-minus-src-alpha",
                                operation: "add"
                            }
                        }
                    },
                ],
            },
        };
        this.pipeline = gpuDevice.createRenderPipeline(pipeLineDescriptor);
    }
    getRenderInfo(postEffectManager) {
        const redGPUContext = this.redGPUContext;
        const { gpuDevice } = redGPUContext;
        const { view } = postEffectManager;
        const { pixelViewRectInt } = view;
        if (this.#renderTexture) {
            if (this.#renderTexture.width !== pixelViewRectInt[2]
                || this.#renderTexture.height !== pixelViewRectInt[3]) {
                this.#renderTexture.destroy();
                this.#renderTexture = null;
            }
        }
        this.#renderTexture = gpuDevice.createTexture({
            label: `${this.constructor.name}_texture`,
            size: {
                width: pixelViewRectInt[2],
                height: pixelViewRectInt[3],
                depthOrArrayLayers: 1
            },
            sampleCount: 1,
            format: navigator.gpu.getPreferredCanvasFormat(),
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
        });
        this.#renderTextureView = this.#renderTexture.createView();
        const renderPassDescriptor = {
            /**
             * @typedef {GPURenderPassColorAttachment}
             */
            colorAttachments: [
                {
                    view: this.#renderTextureView,
                    clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 0.0 },
                    loadOp: 'clear',
                    storeOp: 'store',
                },
            ]
        };
        return {
            texture: this.#renderTexture,
            textureView: this.#renderTextureView,
            renderPassDescriptor
        };
    }
    render(postEffectManager, sourceTextureView) {
        (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_2__["default"])('Must Override');
        return;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostEffectBase);


/***/ }),

/***/ "./src/postEffect/PostEffectManager.ts":
/*!*********************************************!*\
  !*** ./src/postEffect/PostEffectManager.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _resource_buffers_buffer_VertexBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource/buffers/buffer/VertexBuffer */ "./src/resource/buffers/buffer/VertexBuffer.ts");
/* harmony import */ var _resource_buffers_interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource/buffers/interleaveInfo/InterleaveInfo */ "./src/resource/buffers/interleaveInfo/InterleaveInfo.ts");
/* harmony import */ var _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource/buffers/interleaveInfo/InterleaveUnit */ "./src/resource/buffers/interleaveInfo/InterleaveUnit.ts");
/* harmony import */ var _resource_texture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resource/texture */ "./src/resource/texture/index.ts");





/**
 * PostEffect 를 관리하는 매니저
 */
class PostEffectManager extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #vertexBuffer;
    #sampler;
    #children = [];
    #view;
    /**
     * 생성자
     * @param view
     */
    constructor(view) {
        super(view.redGPUContext);
        this.#view = view;
        this.#init(view.redGPUContext);
    }
    get vertexBuffer() {
        return this.#vertexBuffer;
    }
    get sampler() {
        return this.#sampler;
    }
    get children() {
        return this.#children;
    }
    get view() {
        return this.#view;
    }
    render() {
        // console.log('PostEffect Render')
        let lastSourceTextureView = this.#view.resolveTextureView;
        let startTime;
        let endTime;
        this.#children.forEach((effect) => {
            startTime = performance.now();
            lastSourceTextureView = effect.render(this, lastSourceTextureView);
            endTime = performance.now();
            // console.log(endTime - startTime)
            effect.effectRenderTime = (endTime - startTime);
            startTime = endTime;
        });
        return lastSourceTextureView;
    }
    /**
     * 포스트 이펙트를 추가합니다.
     * @param postEffect
     */
    addEffect(postEffect) {
        this.#children.push(postEffect);
    }
    /**
     * 포스트 이펙트를 제거합니다.
     * @param postEffect
     */
    removeEffect(postEffect) {
        const index = this.#children.indexOf(postEffect);
        if (index > -1) {
            this.#children.splice(index, 1);
        }
    }
    #init(redGPUContext) {
        this.#vertexBuffer = new _resource_buffers_buffer_VertexBuffer__WEBPACK_IMPORTED_MODULE_1__["default"](redGPUContext, new Float32Array([
            //x,y,z, u,v
            -1.0, -1.0, 0.0, 0.0, 1.0,
            1.0, -1.0, 0.0, 1.0, 1.0,
            -1.0, 1.0, 0.0, 0.0, 0.0,
            -1.0, 1.0, 0.0, 0.0, 0.0,
            1.0, -1.0, 0.0, 1.0, 1.0,
            1.0, 1.0, 0.0, 1.0, 0.0
        ]), new _resource_buffers_interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_2__["default"]([
            new _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_3__["default"](_resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_3__["default"].VERTEX_POSITION, "float32x3"),
            new _resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_3__["default"](_resource_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_3__["default"].TEXCOORD, 'float32x2')
        ]));
        this.#sampler = new _resource_texture__WEBPACK_IMPORTED_MODULE_4__.TextureSampler(redGPUContext, {
            magFilter: "linear",
            minFilter: "linear",
            mipmapFilter: "nearest"
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostEffectManager);


/***/ }),

/***/ "./src/postEffect/effects/PostEffectBrightnessContrast.ts":
/*!****************************************************************!*\
  !*** ./src/postEffect/effects/PostEffectBrightnessContrast.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource/buffers/TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resource/buffers/uniformBuffer/UniformBufferDescriptor */ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resource/buffers/uniformBuffer/UniformBufferFloat32 */ "./src/resource/buffers/uniformBuffer/UniformBufferFloat32.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/postEffect/index.ts");
/* harmony import */ var _wgslFragment_brightnessContrastFragment_wgsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wgslFragment/brightnessContrastFragment.wgsl */ "./src/postEffect/effects/wgslFragment/brightnessContrastFragment.wgsl");
/* harmony import */ var _wgslVertex_baseVertex_wgsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wgslVertex/baseVertex.wgsl */ "./src/postEffect/effects/wgslVertex/baseVertex.wgsl");






let float32Array_1 = new Float32Array(1);
class PostEffectBrightnessContrast extends _index__WEBPACK_IMPORTED_MODULE_3__.PostEffectBase {
    uniformBuffer;
    #brightness = 0;
    #contrast = 0;
    constructor(redGPUContext) {
        super(redGPUContext, _wgslVertex_baseVertex_wgsl__WEBPACK_IMPORTED_MODULE_5__["default"], _wgslFragment_brightnessContrastFragment_wgsl__WEBPACK_IMPORTED_MODULE_4__["default"]);
    }
    get brightness() {
        return this.#brightness;
    }
    set brightness(value) {
        if (value < -150)
            value = -150;
        if (value > 150)
            value = 150;
        this.#brightness = value;
        float32Array_1[0] = value / 255;
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.uniformBuffer.gpuBuffer, this.uniformBuffer.descriptor.redGpuStructOffsetMap['brightness'], float32Array_1);
    }
    get contrast() {
        return this.#contrast;
    }
    set contrast(value) {
        if (value < -50)
            value = -50;
        if (value > 100)
            value = 100;
        this.#contrast = value;
        float32Array_1[0] = value / 255;
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.uniformBuffer.gpuBuffer, this.uniformBuffer.descriptor.redGpuStructOffsetMap['contrast'], float32Array_1);
    }
    render(postEffectManager, sourceTextureView) {
        const redGPUContext = this.redGPUContext;
        const { gpuDevice } = redGPUContext;
        const { textureView, renderPassDescriptor } = this.getRenderInfo(postEffectManager);
        if (!this.pipeline)
            this.#init(postEffectManager);
        //
        const uniformBindGroupDescriptor = {
            layout: this.uniformsBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.uniformBuffer.gpuBuffer,
                        offset: 0,
                        size: this.uniformBuffer.gpuBuffer.size
                    }
                },
                {
                    binding: 1,
                    resource: postEffectManager.sampler.gpuSampler,
                },
                {
                    binding: 2,
                    resource: sourceTextureView,
                }
            ]
        };
        this.uniformBindGroup = gpuDevice.createBindGroup(uniformBindGroupDescriptor);
        //
        const commandEncoder = gpuDevice.createCommandEncoder();
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setVertexBuffer(0, postEffectManager.vertexBuffer.gpuBuffer);
        passEncoder.setBindGroup(0, this.uniformBindGroup);
        passEncoder.draw(6, 1, 0, 0);
        passEncoder.end();
        gpuDevice.queue.submit([commandEncoder.finish()]);
        return textureView;
    }
    #init(postEffectManager) {
        const { gpuDevice } = this.redGPUContext;
        this.uniformBuffer = new _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_2__["default"](this.redGPUContext, new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"]([
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'brightness' },
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'contrast' },
        ]));
        this.brightness = 0;
        this.contrast = 0;
        this.uniformsBindGroupLayout = gpuDevice.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    buffer: {
                        type: 'uniform',
                    },
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {
                        type: 'filtering',
                    },
                },
                {
                    binding: 2,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {}
                }
            ]
        });
        this.setPipeline(postEffectManager);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostEffectBrightnessContrast);


/***/ }),

/***/ "./src/postEffect/effects/PostEffectGray.ts":
/*!**************************************************!*\
  !*** ./src/postEffect/effects/PostEffectGray.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/postEffect/index.ts");
/* harmony import */ var _wgslFragment_grayFragment_wgsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wgslFragment/grayFragment.wgsl */ "./src/postEffect/effects/wgslFragment/grayFragment.wgsl");
/* harmony import */ var _wgslVertex_baseVertex_wgsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wgslVertex/baseVertex.wgsl */ "./src/postEffect/effects/wgslVertex/baseVertex.wgsl");



class PostEffectGray extends _index__WEBPACK_IMPORTED_MODULE_0__.PostEffectBase {
    constructor(redGPUContext) {
        super(redGPUContext, _wgslVertex_baseVertex_wgsl__WEBPACK_IMPORTED_MODULE_2__["default"], _wgslFragment_grayFragment_wgsl__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
    render(postEffectManager, sourceTextureView) {
        const redGPUContext = this.redGPUContext;
        const { gpuDevice } = redGPUContext;
        const { textureView, renderPassDescriptor } = this.getRenderInfo(postEffectManager);
        if (!this.pipeline)
            this.#init(postEffectManager);
        //
        const uniformBindGroupDescriptor = {
            layout: this.uniformsBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: postEffectManager.sampler.gpuSampler,
                },
                {
                    binding: 1,
                    resource: sourceTextureView,
                }
            ]
        };
        this.uniformBindGroup = gpuDevice.createBindGroup(uniformBindGroupDescriptor);
        //
        const commandEncoder = gpuDevice.createCommandEncoder();
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setVertexBuffer(0, postEffectManager.vertexBuffer.gpuBuffer);
        passEncoder.setBindGroup(0, this.uniformBindGroup);
        passEncoder.draw(6, 1, 0, 0);
        passEncoder.end();
        gpuDevice.queue.submit([commandEncoder.finish()]);
        return textureView;
    }
    #init(postEffectManager) {
        const { gpuDevice } = this.redGPUContext;
        this.uniformsBindGroupLayout = gpuDevice.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {
                        type: 'filtering',
                    },
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {}
                }
            ]
        });
        this.setPipeline(postEffectManager);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostEffectGray);


/***/ }),

/***/ "./src/postEffect/effects/PostEffectHueSaturation.ts":
/*!***********************************************************!*\
  !*** ./src/postEffect/effects/PostEffectHueSaturation.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource/buffers/TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resource/buffers/uniformBuffer/UniformBufferDescriptor */ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resource/buffers/uniformBuffer/UniformBufferFloat32 */ "./src/resource/buffers/uniformBuffer/UniformBufferFloat32.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/postEffect/index.ts");
/* harmony import */ var _wgslFragment_hueSaturationFragment_wgsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wgslFragment/hueSaturationFragment.wgsl */ "./src/postEffect/effects/wgslFragment/hueSaturationFragment.wgsl");
/* harmony import */ var _wgslVertex_baseVertex_wgsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wgslVertex/baseVertex.wgsl */ "./src/postEffect/effects/wgslVertex/baseVertex.wgsl");






let float32Array_1 = new Float32Array(1);
class PostEffectHueSaturation extends _index__WEBPACK_IMPORTED_MODULE_3__.PostEffectBase {
    uniformBuffer;
    #saturation = 0;
    #hue = 0;
    constructor(redGPUContext) {
        super(redGPUContext, _wgslVertex_baseVertex_wgsl__WEBPACK_IMPORTED_MODULE_5__["default"], _wgslFragment_hueSaturationFragment_wgsl__WEBPACK_IMPORTED_MODULE_4__["default"]);
    }
    get saturation() {
        return this.#saturation;
    }
    set saturation(value) {
        if (value < -100)
            value = -100;
        if (value > 100)
            value = 100;
        this.#saturation = value;
        float32Array_1[0] = value / 100;
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.uniformBuffer.gpuBuffer, this.uniformBuffer.descriptor.redGpuStructOffsetMap['saturation'], float32Array_1);
    }
    get hue() {
        return this.#hue;
    }
    set hue(value) {
        if (value < -180)
            value = -180;
        if (value > 180)
            value = 180;
        this.#hue = value;
        float32Array_1[0] = value / 180;
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.uniformBuffer.gpuBuffer, this.uniformBuffer.descriptor.redGpuStructOffsetMap['hue'], float32Array_1);
    }
    render(postEffectManager, sourceTextureView) {
        const redGPUContext = this.redGPUContext;
        const { gpuDevice } = redGPUContext;
        const { textureView, renderPassDescriptor } = this.getRenderInfo(postEffectManager);
        if (!this.pipeline)
            this.#init(postEffectManager);
        //
        const uniformBindGroupDescriptor = {
            layout: this.uniformsBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.uniformBuffer.gpuBuffer,
                        offset: 0,
                        size: this.uniformBuffer.gpuBuffer.size
                    }
                },
                {
                    binding: 1,
                    resource: postEffectManager.sampler.gpuSampler,
                },
                {
                    binding: 2,
                    resource: sourceTextureView,
                }
            ]
        };
        this.uniformBindGroup = gpuDevice.createBindGroup(uniformBindGroupDescriptor);
        //
        const commandEncoder = gpuDevice.createCommandEncoder();
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setVertexBuffer(0, postEffectManager.vertexBuffer.gpuBuffer);
        passEncoder.setBindGroup(0, this.uniformBindGroup);
        passEncoder.draw(6, 1, 0, 0);
        passEncoder.end();
        gpuDevice.queue.submit([commandEncoder.finish()]);
        return textureView;
    }
    #init(postEffectManager) {
        const { gpuDevice } = this.redGPUContext;
        this.uniformBuffer = new _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_2__["default"](this.redGPUContext, new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"]([
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'hue' },
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'saturation' },
        ]));
        this.uniformsBindGroupLayout = gpuDevice.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    buffer: {
                        type: 'uniform',
                    },
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {
                        type: 'filtering',
                    },
                },
                {
                    binding: 2,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {}
                }
            ]
        });
        this.setPipeline(postEffectManager);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostEffectHueSaturation);


/***/ }),

/***/ "./src/postEffect/effects/PostEffectInvert.ts":
/*!****************************************************!*\
  !*** ./src/postEffect/effects/PostEffectInvert.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/postEffect/index.ts");
/* harmony import */ var _wgslFragment_invertFragment_wgsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wgslFragment/invertFragment.wgsl */ "./src/postEffect/effects/wgslFragment/invertFragment.wgsl");
/* harmony import */ var _wgslVertex_baseVertex_wgsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wgslVertex/baseVertex.wgsl */ "./src/postEffect/effects/wgslVertex/baseVertex.wgsl");



class PostEffectInvert extends _index__WEBPACK_IMPORTED_MODULE_0__.PostEffectBase {
    constructor(redGPUContext) {
        debugger;
        super(redGPUContext, _wgslVertex_baseVertex_wgsl__WEBPACK_IMPORTED_MODULE_2__["default"], _wgslFragment_invertFragment_wgsl__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
    render(postEffectManager, sourceTextureView) {
        const redGPUContext = this.redGPUContext;
        const { gpuDevice } = redGPUContext;
        const { textureView, renderPassDescriptor } = this.getRenderInfo(postEffectManager);
        if (!this.pipeline)
            this.#init(postEffectManager);
        //
        const uniformBindGroupDescriptor = {
            layout: this.uniformsBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: postEffectManager.sampler.gpuSampler,
                },
                {
                    binding: 1,
                    resource: sourceTextureView,
                }
            ]
        };
        this.uniformBindGroup = gpuDevice.createBindGroup(uniformBindGroupDescriptor);
        //
        const commandEncoder = gpuDevice.createCommandEncoder();
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setVertexBuffer(0, postEffectManager.vertexBuffer.gpuBuffer);
        passEncoder.setBindGroup(0, this.uniformBindGroup);
        passEncoder.draw(6, 1, 0, 0);
        passEncoder.end();
        gpuDevice.queue.submit([commandEncoder.finish()]);
        return textureView;
    }
    #init(postEffectManager) {
        const { gpuDevice } = this.redGPUContext;
        this.uniformsBindGroupLayout = gpuDevice.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {
                        type: 'filtering',
                    },
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {}
                }
            ]
        });
        this.setPipeline(postEffectManager);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostEffectInvert);


/***/ }),

/***/ "./src/postEffect/effects/PostEffectPixelize.ts":
/*!******************************************************!*\
  !*** ./src/postEffect/effects/PostEffectPixelize.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource/buffers/TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resource/buffers/uniformBuffer/UniformBufferDescriptor */ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts");
/* harmony import */ var _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resource/buffers/uniformBuffer/UniformBufferFloat32 */ "./src/resource/buffers/uniformBuffer/UniformBufferFloat32.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/postEffect/index.ts");
/* harmony import */ var _wgslFragment_pixelizeFragment_wgsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wgslFragment/pixelizeFragment.wgsl */ "./src/postEffect/effects/wgslFragment/pixelizeFragment.wgsl");
/* harmony import */ var _wgslVertex_baseVertex_wgsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wgslVertex/baseVertex.wgsl */ "./src/postEffect/effects/wgslVertex/baseVertex.wgsl");






let float32Array_1 = new Float32Array(1);
let float32Array_2 = new Float32Array(2);
class PostEffectPixelize extends _index__WEBPACK_IMPORTED_MODULE_3__.PostEffectBase {
    uniformBuffer;
    #width = 5;
    #height = 5;
    constructor(redGPUContext) {
        super(redGPUContext, _wgslVertex_baseVertex_wgsl__WEBPACK_IMPORTED_MODULE_5__["default"], _wgslFragment_pixelizeFragment_wgsl__WEBPACK_IMPORTED_MODULE_4__["default"]);
    }
    get width() {
        return this.#width;
    }
    set width(value) {
        this.#width = value;
        float32Array_1[0] = value;
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.uniformBuffer.gpuBuffer, this.uniformBuffer.descriptor.redGpuStructOffsetMap['width'], float32Array_1);
    }
    get height() {
        return this.#height;
    }
    set height(value) {
        this.#height = value;
        float32Array_1[0] = value;
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.uniformBuffer.gpuBuffer, this.uniformBuffer.descriptor.redGpuStructOffsetMap['height'], float32Array_1);
    }
    render(postEffectManager, sourceTextureView) {
        const redGPUContext = this.redGPUContext;
        const { gpuDevice } = redGPUContext;
        const { textureView, renderPassDescriptor } = this.getRenderInfo(postEffectManager);
        if (!this.pipeline)
            this.#init(postEffectManager);
        //
        const uniformBindGroupDescriptor = {
            layout: this.uniformsBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.uniformBuffer.gpuBuffer,
                        offset: 0,
                        size: this.uniformBuffer.gpuBuffer.size
                    }
                },
                {
                    binding: 1,
                    resource: postEffectManager.sampler.gpuSampler,
                },
                {
                    binding: 2,
                    resource: sourceTextureView,
                }
            ]
        };
        this.uniformBindGroup = gpuDevice.createBindGroup(uniformBindGroupDescriptor);
        float32Array_2[0] = postEffectManager.view.pixelViewRect[2] / this.redGPUContext.renderScale;
        float32Array_2[1] = postEffectManager.view.pixelViewRect[3] / this.redGPUContext.renderScale;
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.uniformBuffer.gpuBuffer, this.uniformBuffer.descriptor.redGpuStructOffsetMap['resolution'], float32Array_2);
        //
        const commandEncoder = gpuDevice.createCommandEncoder();
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setVertexBuffer(0, postEffectManager.vertexBuffer.gpuBuffer);
        passEncoder.setBindGroup(0, this.uniformBindGroup);
        passEncoder.draw(6, 1, 0, 0);
        passEncoder.end();
        gpuDevice.queue.submit([commandEncoder.finish()]);
        return textureView;
    }
    #init(postEffectManager) {
        const { gpuDevice } = this.redGPUContext;
        this.uniformBuffer = new _resource_buffers_uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_2__["default"](this.redGPUContext, new _resource_buffers_uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"]([
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32x2, valueName: 'resolution' },
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'width' },
            { size: _resource_buffers_TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"].float32, valueName: 'height' },
        ]));
        this.width = 25;
        this.height = 25;
        this.uniformsBindGroupLayout = gpuDevice.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    buffer: {
                        type: 'uniform',
                    },
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {
                        type: 'filtering',
                    },
                },
                {
                    binding: 2,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {}
                }
            ]
        });
        this.setPipeline(postEffectManager);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostEffectPixelize);


/***/ }),

/***/ "./src/postEffect/index.ts":
/*!*********************************!*\
  !*** ./src/postEffect/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostEffectBase: () => (/* reexport safe */ _PostEffectBase__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   PostEffectBrightnessContrast: () => (/* reexport safe */ _effects_PostEffectBrightnessContrast__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   PostEffectGray: () => (/* reexport safe */ _effects_PostEffectGray__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   PostEffectHueSaturation: () => (/* reexport safe */ _effects_PostEffectHueSaturation__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   PostEffectInvert: () => (/* reexport safe */ _effects_PostEffectInvert__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   PostEffectManager: () => (/* reexport safe */ _PostEffectManager__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   PostEffectPixelize: () => (/* reexport safe */ _effects_PostEffectPixelize__WEBPACK_IMPORTED_MODULE_6__["default"])
/* harmony export */ });
/* harmony import */ var _PostEffectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostEffectManager */ "./src/postEffect/PostEffectManager.ts");
/* harmony import */ var _PostEffectBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostEffectBase */ "./src/postEffect/PostEffectBase.ts");
/* harmony import */ var _effects_PostEffectInvert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects/PostEffectInvert */ "./src/postEffect/effects/PostEffectInvert.ts");
/* harmony import */ var _effects_PostEffectGray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects/PostEffectGray */ "./src/postEffect/effects/PostEffectGray.ts");
/* harmony import */ var _effects_PostEffectHueSaturation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects/PostEffectHueSaturation */ "./src/postEffect/effects/PostEffectHueSaturation.ts");
/* harmony import */ var _effects_PostEffectBrightnessContrast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effects/PostEffectBrightnessContrast */ "./src/postEffect/effects/PostEffectBrightnessContrast.ts");
/* harmony import */ var _effects_PostEffectPixelize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/PostEffectPixelize */ "./src/postEffect/effects/PostEffectPixelize.ts");










/***/ }),

/***/ "./src/resource/buffers/TypeSize.ts":
/*!******************************************!*\
  !*** ./src/resource/buffers/TypeSize.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

let TypeSize = {
    'float32': Float32Array.BYTES_PER_ELEMENT,
    'float32x2': 2 * Float32Array.BYTES_PER_ELEMENT,
    "float32x3": 3 * Float32Array.BYTES_PER_ELEMENT,
    'float32x4': 4 * Float32Array.BYTES_PER_ELEMENT,
    'mat2': 4 * 2 * Float32Array.BYTES_PER_ELEMENT,
    'mat3': 4 * 3 * Float32Array.BYTES_PER_ELEMENT,
    'mat4': 4 * 4 * Float32Array.BYTES_PER_ELEMENT
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeSize);


/***/ }),

/***/ "./src/resource/buffers/buffer/IndexBuffer.ts":
/*!****************************************************!*\
  !*** ./src/resource/buffers/buffer/IndexBuffer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");

/**
 * IndexBuffer
 */
class IndexBuffer extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #gpuBuffer;
    #indexNum;
    #byteLength;
    #descriptor;
    #usage;
    /**
     * IndexBuffer
     */
    constructor(redGPUContext, data, usage = GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST) {
        super(redGPUContext);
        this.#indexNum = data.length;
        this.#byteLength = data.byteLength;
        this.#usage = usage;
        this.#descriptor = {
            size: data.byteLength,
            usage: this.#usage
        };
        this.#gpuBuffer = this.redGPUContext.gpuDevice.createBuffer(this.#descriptor);
        this.update(0, data);
        // console.log(this)
    }
    get gpuBuffer() {
        return this.#gpuBuffer;
    }
    get indexNum() {
        return this.#indexNum;
    }
    get byteLength() {
        return this.#byteLength;
    }
    get descriptor() {
        return this.#descriptor;
    }
    get usage() {
        return this.#usage;
    }
    update(gpuBufferOffset, data, dataOffset, size) {
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.#gpuBuffer, gpuBufferOffset, data, dataOffset, size);
    }
    destroy() {
        //TODO
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexBuffer);


/***/ }),

/***/ "./src/resource/buffers/buffer/VertexBuffer.ts":
/*!*****************************************************!*\
  !*** ./src/resource/buffers/buffer/VertexBuffer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
// import VertexBufferDescriptor from "./VertexBufferDescriptor";

/**
 * VertexBuffer
 */
class VertexBuffer extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #gpuBuffer;
    #byteLength;
    #descriptor;
    #usage;
    #vertexCount = 0;
    #interleaveInfo;
    constructor(redGPUContext, data, interleaveInfo, usage = GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST) {
        super(redGPUContext);
        this.#interleaveInfo = interleaveInfo;
        this.#vertexCount = data.length / this.#interleaveInfo.stride;
        this.#byteLength = data.byteLength;
        this.#usage = usage;
        this.#descriptor = {
            size: this.#byteLength,
            usage: usage
        };
        this.#gpuBuffer = this.redGPUContext.gpuDevice.createBuffer(this.#descriptor);
        this.update(0, data);
        // console.log(this)
    }
    get gpuBuffer() {
        return this.#gpuBuffer;
    }
    get byteLength() {
        return this.#byteLength;
    }
    get descriptor() {
        return this.#descriptor;
    }
    get usage() {
        return this.#usage;
    }
    get vertexCount() {
        return this.#vertexCount;
    }
    get interleaveInfo() {
        return this.#interleaveInfo;
    }
    get arrayStride() {
        return this.#interleaveInfo.arrayStride;
    }
    get attributes() {
        return this.#interleaveInfo.attributes;
    }
    update(gpuBufferOffset, data, dataOffset, size) {
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.#gpuBuffer, gpuBufferOffset, data, dataOffset, size);
    }
    destroy() {
        //TODO
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VertexBuffer);


/***/ }),

/***/ "./src/resource/buffers/index.ts":
/*!***************************************!*\
  !*** ./src/resource/buffers/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndexBuffer: () => (/* reexport safe */ _buffer_IndexBuffer__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   InterleaveInfo: () => (/* reexport safe */ _interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   InterleaveUnit: () => (/* reexport safe */ _interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   TypeSize: () => (/* reexport safe */ _TypeSize__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   UniformBufferDescriptor: () => (/* reexport safe */ _uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   UniformBufferFloat32: () => (/* reexport safe */ _uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   VertexBuffer: () => (/* reexport safe */ _buffer_VertexBuffer__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _buffer_IndexBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer/IndexBuffer */ "./src/resource/buffers/buffer/IndexBuffer.ts");
/* harmony import */ var _buffer_VertexBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer/VertexBuffer */ "./src/resource/buffers/buffer/VertexBuffer.ts");
/* harmony import */ var _interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interleaveInfo/InterleaveInfo */ "./src/resource/buffers/interleaveInfo/InterleaveInfo.ts");
/* harmony import */ var _interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interleaveInfo/InterleaveUnit */ "./src/resource/buffers/interleaveInfo/InterleaveUnit.ts");
/* harmony import */ var _TypeSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TypeSize */ "./src/resource/buffers/TypeSize.ts");
/* harmony import */ var _uniformBuffer_UniformBufferDescriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uniformBuffer/UniformBufferDescriptor */ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts");
/* harmony import */ var _uniformBuffer_UniformBufferFloat32__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uniformBuffer/UniformBufferFloat32 */ "./src/resource/buffers/uniformBuffer/UniformBufferFloat32.ts");










/***/ }),

/***/ "./src/resource/buffers/interleaveInfo/InterleaveInfo.ts":
/*!***************************************************************!*\
  !*** ./src/resource/buffers/interleaveInfo/InterleaveInfo.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class InterleaveInfo {
    #stride = 0;
    #arrayStride = 0;
    #attributes = [];
    constructor(dataList) {
        dataList.forEach((v, index) => {
            this.#stride += v.stride / Float32Array.BYTES_PER_ELEMENT;
            //
            this.#attributes.push({
                attributeHint: v['attributeHint'],
                shaderLocation: index,
                offset: this.#arrayStride,
                format: v['format']
            });
            this.#arrayStride += v['stride'];
        });
    }
    get stride() {
        return this.#stride;
    }
    get arrayStride() {
        return this.#arrayStride;
    }
    get attributes() {
        return this.#attributes;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterleaveInfo);


/***/ }),

/***/ "./src/resource/buffers/interleaveInfo/InterleaveUnit.ts":
/*!***************************************************************!*\
  !*** ./src/resource/buffers/interleaveInfo/InterleaveUnit.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TypeSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TypeSize */ "./src/resource/buffers/TypeSize.ts");

class InterleaveUnit {
    static #VERTEX_POSITION = 'vertexPosition';
    static #VERTEX_NORMAL = 'vertexNormal';
    static #VERTEX_COLOR = 'vertexColor';
    static #TEXCOORD = 'texcoord';
    #attributeHint;
    #format;
    #stride;
    constructor(attributeHint, format) {
        this.#attributeHint = attributeHint;
        this.#format = format;
        this.#stride = _TypeSize__WEBPACK_IMPORTED_MODULE_0__["default"][format];
    }
    static get VERTEX_POSITION() {
        return this.#VERTEX_POSITION;
    }
    static get VERTEX_NORMAL() {
        return this.#VERTEX_NORMAL;
    }
    static get VERTEX_COLOR() {
        return this.#VERTEX_COLOR;
    }
    static get TEXCOORD() {
        return this.#TEXCOORD;
    }
    get attributeHint() {
        return this.#attributeHint;
    }
    get format() {
        return this.#format;
    }
    get stride() {
        return this.#stride;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterleaveUnit);


/***/ }),

/***/ "./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts":
/*!***********************************************************************!*\
  !*** ./src/resource/buffers/uniformBuffer/UniformBufferDescriptor.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/errorFunc/throwError */ "./src/util/errorFunc/throwError.js");
/* harmony import */ var _TypeSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TypeSize */ "./src/resource/buffers/TypeSize.ts");


/**
 * UniformBufferDescriptor
 */
class UniformBufferDescriptor {
    #redStruct;
    #redStructOffsetMap;
    #redGpuStructOffsetMap;
    #typeArraySize;
    #gpuBufferSize;
    constructor(redStruct = []) {
        if (!Array.isArray(redStruct))
            (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_0__["default"])(`${this.constructor.name} - only allow Array Instance. / inputValue : ${redStruct} { type : ${typeof redStruct} }`);
        this.#redStruct = JSON.parse(JSON.stringify(redStruct));
        this.#redStructOffsetMap = {};
        this.#redGpuStructOffsetMap = {};
        let offset = 0;
        let FLOAT4_SIZE = _TypeSize__WEBPACK_IMPORTED_MODULE_1__["default"].float32x4;
        const parser = (redStruct) => {
            redStruct.map((v) => {
                if (v['struct']) {
                    parseStruct(v);
                }
                else {
                    if (!v.valueName)
                        (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_0__["default"])(`${this.constructor.name} - need valueName / inputValue : ${v.valueName} { type : ${typeof v.valueName} }`);
                    if (!v.hasOwnProperty('size'))
                        (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_0__["default"])(`${this.constructor.name} - need size / inputValue : ${v.size} { type : ${typeof v.size} }`);
                    if (v.size <= FLOAT4_SIZE) {
                        let t0 = Math.floor(offset / FLOAT4_SIZE);
                        let t1 = Math.floor((offset + v.size - 1) / FLOAT4_SIZE);
                        if (t0 != t1)
                            offset += FLOAT4_SIZE - offset % FLOAT4_SIZE;
                        v.offset = offset;
                        // console.log(v.valueName, '결정된 오프셋', offset)
                        offset += v.size;
                    }
                    else {
                        if (offset % FLOAT4_SIZE)
                            offset += FLOAT4_SIZE - offset % FLOAT4_SIZE;
                        v.offset = offset;
                        offset += v.size;
                    }
                    this.#redStructOffsetMap[v['valueName']] = v.offset;
                }
                // v._UUID = v.valueName + '_' + UUID.getNextUUID();
            });
        };
        const parseStruct = (redStruct) => {
            let startOffset = offset;
            let i = 0;
            const len = redStruct['num'];
            for (i; i < len; i++) {
                redStruct['struct'].map((v, index) => {
                    if (!v.valueName)
                        (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_0__["default"])(`${this.constructor.name} - need valueName / inputValue : ${v.valueName} { type : ${typeof v.valueName} }`);
                    if (!v.hasOwnProperty('size'))
                        (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_0__["default"])(`${this.constructor.name} - need size / inputValue : ${v.size} { type : ${typeof v.size} }`);
                    if (v.size <= FLOAT4_SIZE) {
                        let t0 = Math.floor(offset / FLOAT4_SIZE);
                        let t1 = Math.floor((offset + v.size - 1) / FLOAT4_SIZE);
                        if (t0 != t1) {
                            offset += FLOAT4_SIZE - offset % FLOAT4_SIZE;
                        }
                        if (i === 0 && index === 0)
                            startOffset = offset;
                        if (i === 0)
                            v.offset = offset;
                        offset += v.size;
                    }
                    else {
                        if (offset % FLOAT4_SIZE)
                            offset += FLOAT4_SIZE - offset % FLOAT4_SIZE;
                        if (i === 0 && index === 0)
                            startOffset = offset;
                        if (i === 0)
                            v.offset = offset;
                        offset += v.size;
                    }
                    if (i === 0) {
                        // this.#redStructOffsetMap[v['valueName']] = v.offset;
                    }
                    if (i === 0 && index === 0) {
                        this.#redStructOffsetMap[redStruct['valueName']] = startOffset;
                        redStruct['offset'] = startOffset;
                    }
                });
            }
        };
        parser(this.#redStruct);
        let t0 = offset % FLOAT4_SIZE;
        this.#gpuBufferSize = (this.#redStruct.length ? (offset + (t0 ? (FLOAT4_SIZE - t0) : 0)) : FLOAT4_SIZE);
        this.#typeArraySize = this.#gpuBufferSize / Float32Array.BYTES_PER_ELEMENT;
        Object.keys(this.#redStructOffsetMap).forEach(key => {
            this.#redGpuStructOffsetMap[key] = this.#redStructOffsetMap[key];
            this.#redStructOffsetMap[key] = this.#redStructOffsetMap[key] / Float32Array.BYTES_PER_ELEMENT;
        });
        // console.log(this)
    }
    get redStruct() {
        return this.#redStruct;
    }
    get redStructOffsetMap() {
        return this.#redStructOffsetMap;
    }
    get redGpuStructOffsetMap() {
        return this.#redGpuStructOffsetMap;
    }
    get typeArraySize() {
        return this.#typeArraySize;
    }
    get gpuBufferSize() {
        return this.#gpuBufferSize;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UniformBufferDescriptor);


/***/ }),

/***/ "./src/resource/buffers/uniformBuffer/UniformBufferFloat32.ts":
/*!********************************************************************!*\
  !*** ./src/resource/buffers/uniformBuffer/UniformBufferFloat32.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/errorFunc/throwError */ "./src/util/errorFunc/throwError.js");


/**
 * 유니폼 버퍼
 */
class UniformBufferFloat32 extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #gpuBuffer;
    #typeArraySize;
    #gpuBufferSize;
    #descriptor;
    #usage;
    #data;
    constructor(redGPUContext, descriptor, usage = GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST) {
        super(redGPUContext);
        this.#descriptor = descriptor;
        this.#typeArraySize = descriptor.typeArraySize;
        this.#gpuBufferSize = descriptor.gpuBufferSize;
        this.#usage = usage;
        this.#data = new Float32Array(this.#typeArraySize);
        this.#gpuBuffer = this.redGPUContext.gpuDevice.createBuffer({
            size: this.#gpuBufferSize,
            usage: this.#usage,
        });
        // console.log(this)
    }
    get gpuBuffer() {
        return this.#gpuBuffer;
    }
    get typeArraySize() {
        return this.#typeArraySize;
    }
    get gpuBufferSize() {
        return this.#gpuBufferSize;
    }
    get descriptor() {
        return this.#descriptor;
    }
    get usage() {
        return this.#usage;
    }
    get data() {
        return this.#data;
    }
    set data(value) {
        this.#data = value;
    }
    update(data, gpuBufferOffset = 0, dataOffset, size) {
        if (!data)
            (0,_util_errorFunc_throwError__WEBPACK_IMPORTED_MODULE_1__["default"])('반드시 데이터가 있어야함');
        this.#data = data;
        this.redGPUContext.gpuDevice.queue.writeBuffer(this.#gpuBuffer, gpuBufferOffset, data, dataOffset, size);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UniformBufferFloat32);


/***/ }),

/***/ "./src/resource/geometry/Geometry.ts":
/*!*******************************************!*\
  !*** ./src/resource/geometry/Geometry.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _buffers_buffer_IndexBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buffers/buffer/IndexBuffer */ "./src/resource/buffers/buffer/IndexBuffer.ts");
/* harmony import */ var _buffers_buffer_VertexBuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buffers/buffer/VertexBuffer */ "./src/resource/buffers/buffer/VertexBuffer.ts");



class Geometry extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #data;
    #indexData;
    #vertexGpuBuffer;
    #vertexBuffer;
    #indexGpuBuffer;
    #indexBuffer;
    //TODO - LOD Generator
    #volume;
    constructor(redGPUContext, data, interleaveInfo, indexData) {
        super(redGPUContext);
        this.#data = data;
        this.#indexData = indexData;
        this.#vertexBuffer = new _buffers_buffer_VertexBuffer__WEBPACK_IMPORTED_MODULE_2__["default"](redGPUContext, data, interleaveInfo);
        this.#vertexGpuBuffer = this.#vertexBuffer.gpuBuffer;
        // console.log('보자', this.#vertexBuffer.interleaveInfo)
        if (indexData) {
            this.#indexBuffer = new _buffers_buffer_IndexBuffer__WEBPACK_IMPORTED_MODULE_1__["default"](redGPUContext, indexData);
            this.#indexGpuBuffer = this.#indexBuffer.gpuBuffer;
        }
        // console.log(this)
    }
    get data() {
        return this.#data;
    }
    get indexData() {
        return this.#indexData;
    }
    get vertexGpuBuffer() {
        return this.#vertexGpuBuffer;
    }
    get vertexBuffer() {
        return this.#vertexBuffer;
    }
    get indexGpuBuffer() {
        return this.#indexGpuBuffer;
    }
    get indexBuffer() {
        return this.#indexBuffer;
    }
    get volume() {
        if (!this.#volume)
            this.volumeCalculate();
        return this.#volume;
    }
    volumeCalculate() {
        // console.time('volumeCalculate');
        let minX, minY, minZ, maxX, maxY, maxZ, t0, t1, t2, t, i, len;
        let stride = this.#vertexBuffer.interleaveInfo.stride;
        // console.log('stride',this.#vertexBuffer.interleaveInfo)
        // if (!volume[this]) {
        minX = minY = minZ = maxX = maxY = maxZ = 0;
        t = this.#data;
        i = 0;
        len = this.#vertexBuffer['vertexCount'];
        for (i; i < len; i++) {
            t0 = i * stride, t1 = t0 + 1, t2 = t0 + 2,
                minX = t[t0] < minX ? t[t0] : minX,
                maxX = t[t0] > maxX ? t[t0] : maxX,
                minY = t[t1] < minY ? t[t1] : minY,
                maxY = t[t1] > maxY ? t[t1] : maxY,
                minZ = t[t2] < minZ ? t[t2] : minZ,
                maxZ = t[t2] > maxZ ? t[t2] : maxZ;
        }
        this.#volume = {};
        this.#volume.volume = [maxX - minX, maxY - minY, maxZ - minZ];
        this.#volume.minX = minX;
        this.#volume.maxX = maxX;
        this.#volume.minY = minY;
        this.#volume.maxY = maxY;
        this.#volume.minZ = minZ;
        this.#volume.maxZ = maxZ;
        this.#volume.xSize = Math.max(Math.abs(minX), Math.abs(maxX));
        this.#volume.ySize = Math.max(Math.abs(minY), Math.abs(maxY));
        this.#volume.zSize = Math.max(Math.abs(minZ), Math.abs(maxZ));
        // this.#volume.xSize = Math.max(Math.abs(minX), Math.abs(maxX)) - Math.min(Math.abs(minX), Math.abs(maxX)) ;
        // this.#volume.ySize = Math.max(Math.abs(minY), Math.abs(maxY)) - Math.min(Math.abs(minY), Math.abs(maxY));
        // this.#volume.zSize = Math.max(Math.abs(minZ), Math.abs(maxZ)) - Math.min(Math.abs(minZ), Math.abs(maxZ));
        this.#volume.geometryRadius = Math.max(this.#volume.xSize, this.#volume.ySize, this.#volume.zSize);
        // }
        // console.timeEnd('volumeCalculate');
        return this.#volume;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Geometry);


/***/ }),

/***/ "./src/resource/geometry/index.ts":
/*!****************************************!*\
  !*** ./src/resource/geometry/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Box: () => (/* reexport safe */ _primitives_Box__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Geometry: () => (/* reexport safe */ _Geometry__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Sphere: () => (/* reexport safe */ _primitives_Sphere__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _Geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Geometry */ "./src/resource/geometry/Geometry.ts");
/* harmony import */ var _primitives_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primitives/Box */ "./src/resource/geometry/primitives/Box.ts");
/* harmony import */ var _primitives_Sphere__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./primitives/Sphere */ "./src/resource/geometry/primitives/Sphere.ts");






/***/ }),

/***/ "./src/resource/geometry/primitives/Box.ts":
/*!*************************************************!*\
  !*** ./src/resource/geometry/primitives/Box.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Box)
/* harmony export */ });
/* harmony import */ var _buffers_interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../buffers/interleaveInfo/InterleaveInfo */ "./src/resource/buffers/interleaveInfo/InterleaveInfo.ts");
/* harmony import */ var _buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../buffers/interleaveInfo/InterleaveUnit */ "./src/resource/buffers/interleaveInfo/InterleaveUnit.ts");
/* harmony import */ var _Geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Geometry */ "./src/resource/geometry/Geometry.ts");




class Box extends _Geometry__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(redGPUContext, width = 1, height = 1, depth = 1, wSegments = 1, hSegments = 1, dSegments = 1, uvSize = 1) {
        const tData = makeData(redGPUContext, width, height, depth, wSegments, hSegments, dSegments, uvSize);
        // console.log('tData', tData)
        const data = tData['vertexData'];
        const interleaveInfo = tData['interleaveInfo'];
        const indexData = tData['indexData'];
        super(redGPUContext, data, interleaveInfo, indexData);
    }
}
const makeData = (function () {
    let numberOfVertices;
    let groupStart;
    let buildPlane;
    buildPlane = function (interleaveData, indexData, u, v, w, udir, vdir, width, height, depth, gridX, gridY, uvSize) {
        let segmentWidth = width / gridX;
        let segmentHeight = height / gridY;
        let widthHalf = width / 2, heightHalf = height / 2;
        let depthHalf = depth / 2;
        let gridX1 = gridX + 1, gridY1 = gridY + 1;
        let vertexCounter = 0;
        let groupCount = 0;
        let ix, iy;
        let vector = [];
        for (iy = 0; iy < gridY1; iy++) {
            let y = iy * segmentHeight - heightHalf;
            for (ix = 0; ix < gridX1; ix++) {
                let x = ix * segmentWidth - widthHalf;
                // set values to correct vector component
                vector[u] = x * udir, vector[v] = y * vdir, vector[w] = depthHalf,
                    interleaveData.push(vector['x'], vector['y'], vector['z']), // position
                    vector[u] = 0, vector[v] = 0, vector[w] = depth > 0 ? 1 : -1,
                    interleaveData.push(vector['x'], vector['y'], vector['z']), // normal
                    interleaveData.push(ix / gridX * uvSize, (iy / gridY * uvSize)), // texcoord
                    vertexCounter += 1; // counters
            }
        }
        // indices
        for (iy = 0; iy < gridY; iy++) {
            for (ix = 0; ix < gridX; ix++) {
                let a = numberOfVertices + ix + gridX1 * iy;
                let b = numberOfVertices + ix + gridX1 * (iy + 1);
                let c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
                let d = numberOfVertices + (ix + 1) + gridX1 * iy;
                indexData.push(a, b, d, b, c, d);
                groupCount += 6;
            }
        }
        groupStart += groupCount;
        numberOfVertices += vertexCounter;
    };
    return function (redGPUContext, width, height, depth, wSegments, hSegments, dSegments, uvSize) {
        ////////////////////////////////////////////////////////////////////////////
        // 데이터 생성!
        // buffers Data
        let interleaveData = [];
        let indexData = [];
        numberOfVertices = 0;
        groupStart = 0;
        buildPlane(interleaveData, indexData, 'z', 'y', 'x', -1, -1, depth, height, width, dSegments, hSegments, uvSize); // px
        buildPlane(interleaveData, indexData, 'z', 'y', 'x', 1, -1, depth, height, -width, dSegments, hSegments, uvSize); // nx
        buildPlane(interleaveData, indexData, 'x', 'z', 'y', 1, 1, width, depth, height, wSegments, dSegments, uvSize); // py
        buildPlane(interleaveData, indexData, 'x', 'z', 'y', 1, -1, width, depth, -height, wSegments, dSegments, uvSize); // ny
        buildPlane(interleaveData, indexData, 'x', 'y', 'z', 1, -1, width, height, depth, wSegments, hSegments, uvSize); // pz
        buildPlane(interleaveData, indexData, 'x', 'y', 'z', -1, -1, width, height, -depth, wSegments, hSegments, uvSize); // nz
        return {
            vertexData: new Float32Array(interleaveData),
            interleaveInfo: new _buffers_interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_0__["default"]([
                new _buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_1__["default"](_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_1__["default"].VERTEX_POSITION, "float32x3"),
                new _buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_1__["default"](_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_1__["default"].VERTEX_NORMAL, "float32x3"),
                new _buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_1__["default"](_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_1__["default"].TEXCOORD, 'float32x2')
            ]),
            indexData: new Uint32Array(indexData)
        };
    };
})();


/***/ }),

/***/ "./src/resource/geometry/primitives/Sphere.ts":
/*!****************************************************!*\
  !*** ./src/resource/geometry/primitives/Sphere.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sphere)
/* harmony export */ });
/* harmony import */ var _util_gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/gl-matrix */ "./src/util/gl-matrix/index.js");
/* harmony import */ var _buffers_interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../buffers/interleaveInfo/InterleaveInfo */ "./src/resource/buffers/interleaveInfo/InterleaveInfo.ts");
/* harmony import */ var _buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../buffers/interleaveInfo/InterleaveUnit */ "./src/resource/buffers/interleaveInfo/InterleaveUnit.ts");
/* harmony import */ var _Geometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Geometry */ "./src/resource/geometry/Geometry.ts");





class Sphere extends _Geometry__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(redGPUContext, radius = 1, widthSegments = 16, heightSegments = 16, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI, uvSize = 1) {
        const tData = makeData(redGPUContext, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength, uvSize);
        // console.log('tData', tData)
        const data = tData['vertexData'];
        const interleaveInfo = tData['interleaveInfo'];
        const indexData = tData['indexData'];
        super(redGPUContext, data, interleaveInfo, indexData);
    }
}
const makeData = (function () {
    let thetaEnd;
    let ix, iy;
    let index;
    let grid = [];
    let a, b, c, d;
    let vertex = new Float32Array([0, 0, 0]);
    let normal = new Float32Array([0, 0, 0]);
    return function (redGPUContext, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength, uvSize) {
        thetaEnd = thetaStart + thetaLength;
        index = 0;
        grid.length = 0;
        vertex[0] = 0, vertex[1] = 0, vertex[2] = 0;
        normal[0] = 0, normal[1] = 0, normal[2] = 0;
        ////////////////////////////////////////////////////////////////////////////
        // 데이터 생성!
        // buffers Data
        let interleaveData = [];
        let indexData = [];
        // generate vertices, normals and uvs
        for (iy = 0; iy <= heightSegments; iy++) {
            let verticesRow = [];
            let v = iy / heightSegments;
            for (ix = 0; ix <= widthSegments; ix++) {
                let u = ix / widthSegments;
                // vertex
                vertex['x'] = -radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
                vertex['y'] = radius * Math.cos(thetaStart + v * thetaLength);
                vertex['z'] = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
                interleaveData.push(vertex['x'], vertex['y'], vertex['z']);
                // normal
                normal[0] = vertex['x'];
                normal[1] = vertex['y'];
                normal[2] = vertex['z'];
                _util_gl_matrix__WEBPACK_IMPORTED_MODULE_0__.vec3.normalize(normal, normal);
                interleaveData.push(normal[0], normal[1], normal[2]);
                // uv
                interleaveData.push(u * uvSize, v * uvSize);
                verticesRow.push(index++);
            }
            grid.push(verticesRow);
        }
        // indices
        for (iy = 0; iy < heightSegments; iy++) {
            for (ix = 0; ix < widthSegments; ix++) {
                a = grid[iy][ix + 1];
                b = grid[iy][ix];
                c = grid[iy + 1][ix];
                d = grid[iy + 1][ix + 1];
                if (iy !== 0 || thetaStart > 0)
                    indexData.push(a, b, d);
                if (iy !== heightSegments - 1 || thetaEnd < Math.PI)
                    indexData.push(b, c, d);
            }
        }
        return {
            vertexData: new Float32Array(interleaveData),
            interleaveInfo: new _buffers_interleaveInfo_InterleaveInfo__WEBPACK_IMPORTED_MODULE_1__["default"]([
                new _buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"](_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"].VERTEX_POSITION, "float32x3"),
                new _buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"](_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"].VERTEX_NORMAL, "float32x3"),
                new _buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"](_buffers_interleaveInfo_InterleaveUnit__WEBPACK_IMPORTED_MODULE_2__["default"].TEXCOORD, 'float32x2')
            ]),
            indexData: new Uint32Array(indexData)
        };
    };
})();


/***/ }),

/***/ "./src/resource/makeShaderModule.ts":
/*!******************************************!*\
  !*** ./src/resource/makeShaderModule.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _systemShaderDefine_shaderDefineReplace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../systemShaderDefine/shaderDefineReplace */ "./src/systemShaderDefine/shaderDefineReplace.ts");

const draftCache = new Map();
const makeShaderModule = (device, source, label = '') => {
    if (draftCache.has(source)) {
        // console.log('이미 생성된 모듈을 사용',label)
        return draftCache.get(source);
    }
    const shaderModuleDescriptor = {
        code: (0,_systemShaderDefine_shaderDefineReplace__WEBPACK_IMPORTED_MODULE_0__["default"])(source),
        label
    };
    const t0 = device.createShaderModule(shaderModuleDescriptor);
    draftCache.set(source, t0);
    // console.log('신규 생성 모듈을 사용',label)
    // console.log('draftCache', draftCache, t0)
    // console.log(t0)
    return t0;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeShaderModule);


/***/ }),

/***/ "./src/resource/resourceManager/CubeTextureInfo.ts":
/*!*********************************************************!*\
  !*** ./src/resource/resourceManager/CubeTextureInfo.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CubeTextureInfo {
    resource;
    textureView;
    constructor(resource, textureView = null) {
        this.resource = resource;
        this.textureView = textureView;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CubeTextureInfo);


/***/ }),

/***/ "./src/resource/resourceManager/RedGPUContextResourceManager.ts":
/*!**********************************************************************!*\
  !*** ./src/resource/resourceManager/RedGPUContextResourceManager.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _util_makeUUID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/makeUUID */ "./src/util/makeUUID.ts");
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../texture */ "./src/resource/texture/index.ts");
/* harmony import */ var _CubeTextureInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CubeTextureInfo */ "./src/resource/resourceManager/CubeTextureInfo.ts");
/* harmony import */ var _TextureInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextureInfo */ "./src/resource/resourceManager/TextureInfo.ts");





class RedGPUContextResourceManager extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #uuidTable = {};
    #textureTable = {};
    #cubeTextureTable = {};
    #samplerTable = {};
    #emptyTextureInfo;
    #emptyCubeTextureInfo;
    constructor(context) {
        super(context);
        const emptyTextureInfo = this.redGPUContext.gpuDevice.createTexture({
            label: 'emptyTexture',
            size: { width: 1, height: 1, depthOrArrayLayers: 1 },
            format: navigator.gpu.getPreferredCanvasFormat(),
            usage: GPUTextureUsage.TEXTURE_BINDING || GPUTextureUsage.RENDER_ATTACHMENT,
        });
        const emptyCubeTextureInfo = this.redGPUContext.gpuDevice.createTexture({
            label: 'emptyCubeTexture',
            size: { width: 1, height: 1, depthOrArrayLayers: 6, },
            dimension: '2d',
            // arrayLayerCount: 6,
            mipLevelCount: 1,
            sampleCount: 1,
            format: navigator.gpu.getPreferredCanvasFormat(),
            usage: GPUTextureUsage.TEXTURE_BINDING,
        });
        this.#emptyTextureInfo = new _TextureInfo__WEBPACK_IMPORTED_MODULE_4__["default"](emptyTextureInfo, emptyTextureInfo.createView());
        this.#emptyCubeTextureInfo = new _CubeTextureInfo__WEBPACK_IMPORTED_MODULE_3__["default"](emptyCubeTextureInfo, emptyCubeTextureInfo.createView({
            dimension: 'cube',
            aspect: 'all',
            baseMipLevel: 0,
            mipLevelCount: 1,
            baseArrayLayer: 0,
            arrayLayerCount: 6
        }));
        console.log(this, this.#textureTable);
    }
    get textureTable() {
        return this.#textureTable;
    }
    get cubeTextureTable() {
        return this.#cubeTextureTable;
    }
    get samplerTable() {
        return this.#samplerTable;
    }
    get emptyTextureInfo() {
        return this.#emptyTextureInfo;
    }
    get emptyCubeTextureInfo() {
        return this.#emptyCubeTextureInfo;
    }
    delResource(resource) {
        const uuid = this.#getUUID(resource);
        if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.BitmapTexture) {
            delete this.#textureTable[uuid];
        }
        else if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.BitmapCubeTexture) {
            delete this.#cubeTextureTable[uuid];
        }
        else if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.TextureSampler) {
            delete this.#samplerTable[uuid];
        }
        else {
        }
    }
    getResource(resource) {
        const uuid = this.#getUUID(resource);
        if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.BitmapTexture) {
            return this.#textureTable[uuid];
        }
        else if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.BitmapCubeTexture) {
            return this.#cubeTextureTable[uuid];
        }
        else if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.TextureSampler) {
            return this.#samplerTable[uuid];
        }
        else {
        }
    }
    addResource(resource) {
        console.log('addResource', resource);
        let uuid;
        const label = this.#getLabel(resource);
        if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.BitmapTexture) {
            uuid = this.#uuidTable[label] = (0,_util_makeUUID__WEBPACK_IMPORTED_MODULE_1__["default"])();
            this.#textureTable[uuid] = new _TextureInfo__WEBPACK_IMPORTED_MODULE_4__["default"](resource);
        }
        else if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.BitmapCubeTexture) {
            uuid = this.#uuidTable[label] = (0,_util_makeUUID__WEBPACK_IMPORTED_MODULE_1__["default"])();
            this.#cubeTextureTable[uuid] = new _CubeTextureInfo__WEBPACK_IMPORTED_MODULE_3__["default"](resource, null);
        }
        else if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.TextureSampler) {
            uuid = this.#uuidTable[label] = (0,_util_makeUUID__WEBPACK_IMPORTED_MODULE_1__["default"])();
            this.#samplerTable[uuid] = resource;
        }
        else {
            alert('등록할수 없는 타입');
        }
    }
    #getUUID(resource) {
        let tableID;
        const label = this.#getLabel(resource);
        if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.BitmapTexture) {
            tableID = this.#uuidTable[label];
        }
        else if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.BitmapCubeTexture) {
            tableID = this.#uuidTable[label];
        }
        else if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.TextureSampler) {
            tableID = this.#uuidTable[label];
        }
        else {
            alert('리소스로 관리 할수 없는 타입');
        }
        return tableID;
    }
    #getLabel(resource) {
        let label;
        if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.BitmapTexture) {
            label = resource.src;
        }
        else if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.BitmapCubeTexture) {
            label = resource.srcList.toString();
        }
        else if (resource instanceof _texture__WEBPACK_IMPORTED_MODULE_2__.TextureSampler) {
            label = resource.optionString;
        }
        else {
            alert('리소스로 관리 할수 없는 타입');
        }
        return label;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedGPUContextResourceManager);


/***/ }),

/***/ "./src/resource/resourceManager/TextureInfo.ts":
/*!*****************************************************!*\
  !*** ./src/resource/resourceManager/TextureInfo.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class TextureInfo {
    resource;
    textureView;
    constructor(resource, textureView = null) {
        this.resource = resource;
        this.textureView = textureView;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextureInfo);


/***/ }),

/***/ "./src/resource/texture/BitmapCubeTexture.ts":
/*!***************************************************!*\
  !*** ./src/resource/texture/BitmapCubeTexture.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _util_makeUUID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/makeUUID */ "./src/util/makeUUID.ts");
/* harmony import */ var _mipmapGenerator_generateWebGPUTextureMipmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mipmapGenerator/generateWebGPUTextureMipmap */ "./src/resource/texture/mipmapGenerator/generateWebGPUTextureMipmap.ts");



class BitmapCubeTexture extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #srcList;
    #imgBitmapList;
    #gpuTexture;
    #targetList = new Set();
    constructor(redGPUContext, srcList) {
        super(redGPUContext);
        this.#srcList = srcList;
        if (this.#srcList) {
            const resource = redGPUContext.resourceManager.getResource(this);
            if (resource) {
                console.log('BitmapCubeTexture 캐시된 녀석을씀');
                // console.log('캐시된 녀석을씀',redGPUContext.resourceManager,redGPUContext.resourceManager.getResource(this))
                return resource.resource;
            }
            else {
                console.log('BitmapCubeTexture 캐시된 녀석을안씀');
                redGPUContext.resourceManager.addResource(this);
                this.#webGPUTextureFromImageUrl(this.#srcList);
            }
        }
    }
    get srcList() {
        return this.#srcList;
    }
    get imgBitmapList() {
        return this.#imgBitmapList;
    }
    get gpuTexture() {
        return this.#gpuTexture;
    }
    get gpuTextureView() {
        const tResource = this.redGPUContext.resourceManager.getResource(this);
        if (this.#gpuTexture) {
            if (tResource.textureView) {
                console.log('BitmapCubeTexture 캐시된 녀석의 뷰를 사용함');
                return tResource.textureView;
            }
            else {
                console.log('BitmapCubeTexture 캐시된 녀석의 뷰를 만듬');
                tResource.textureView = this.#gpuTexture?.createView({
                    dimension: 'cube',
                    aspect: 'all',
                    baseMipLevel: 0,
                    mipLevelCount: 1,
                    baseArrayLayer: 0,
                    arrayLayerCount: 6,
                    label: (this.#srcList || []).toString()
                });
                return tResource.textureView;
            }
        }
        else {
            return this.redGPUContext.resourceManager['emptyCubeTextureInfo'].textureView;
        }
    }
    destroy() {
        //TODO destroy
    }
    addTargetMaterial(target) {
        this.#targetList.add(target);
    }
    #webGPUTextureFromImageUrl(srcList) {
        const { redGPUContext } = this;
        const { gpuDevice } = redGPUContext;
        console.log('srcList', srcList);
        Promise.all(srcList.map(url => {
            console.log('url', url);
            return fetch(url).then(response => response.blob().then(blob => createImageBitmap(blob)));
        })).then(imgBitmapList => {
            this.#gpuTexture = makeWebGPUTexture(gpuDevice, imgBitmapList, true, (srcList || []).toString());
            this.#imgBitmapList = imgBitmapList;
            this.#resolve();
        }).catch(e => {
            this.#gpuTexture = null;
            this.#resolve();
        });
    }
    #resolve() {
        const temp = this.#targetList;
        this.#targetList = new Set();
        console.log('#targetList', temp);
        for (const value of temp) {
            temp.delete(value);
            value['bindGroupID'] = (0,_util_makeUUID__WEBPACK_IMPORTED_MODULE_1__["default"])();
            value['dirtyTexture'] = true;
        }
        console.log('#targetList', temp);
        // temp.clear()
    }
}
function makeWebGPUTexture(gpuDevice, sourceList, generateMipmaps = true, label) {
    console.log('sourceList', sourceList);
    // 텍스쳐에 대한 정의를 내리고
    const textureDescriptor = {
        size: { width: sourceList[0].width, height: sourceList[0].height, depthOrArrayLayers: 6 },
        format: 'rgba8unorm',
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
        label
    };
    // 밉맵을 생성할꺼면 소스를 계산해서... 밉맵 카운트를 추가 정의한다.
    // if (generateMipmaps) {
    //     // Compute how many mip levels are needed for a full chain.
    //     textureDescriptor.mipLevelCount = Math.floor(Math.log2(Math.max(sourceList[0].width, sourceList[0].height))) + 1;
    //     // Needed in order to use render passes to generate the mipmaps.
    //     textureDescriptor.usage |= GPUTextureUsage.RENDER_ATTACHMENT;
    // }
    // 생성할 원본 소스를 생성한다.
    const cubeMapTexture2 = gpuDevice.createTexture(textureDescriptor);
    console.log('cubeMapTexture1', cubeMapTexture2);
    sourceList.forEach((imageBitmap, i) => {
        gpuDevice.queue.copyExternalImageToTexture({ source: imageBitmap }, { texture: cubeMapTexture2, origin: [0, 0, i] }, [imageBitmap.width, imageBitmap.height]);
    });
    if (generateMipmaps) {
        // 밉맵생성을 한다.
        (0,_mipmapGenerator_generateWebGPUTextureMipmap__WEBPACK_IMPORTED_MODULE_2__["default"])(gpuDevice, cubeMapTexture2, textureDescriptor);
    }
    // // 생성한 텍스쳐에 데이터를 밀어넣는다.
    // console.log('cubeTexture1', cubeTexture)
    // sourceList.forEach((source, face) => {
    //     console.log(source)
    //     gpuDevice.queue.copyExternalImageToTexture({source}, {
    //         texture: cubeTexture,
    //         mipLevel: face,
    //         origin: {z: face},
    //         textureExtent: {
    //             width: source.width,
    //             height: source.height,
    //             depthOrArrayLayers: 1
    //         }
    //     }, textureDescriptor.size);
    //
    // })
    // console.log('cubeTexture2', cubeTexture)
    // if (generateMipmaps) {
    //     // 밉맵생성을 한다.
    //     generateWebGPUTextureMipmap(gpuDevice, cubeTexture, textureDescriptor);
    // }
    console.log('cubeMapTexture2', cubeMapTexture2);
    return cubeMapTexture2;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BitmapCubeTexture);


/***/ }),

/***/ "./src/resource/texture/BitmapTexture.ts":
/*!***********************************************!*\
  !*** ./src/resource/texture/BitmapTexture.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");
/* harmony import */ var _util_makeUUID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/makeUUID */ "./src/util/makeUUID.ts");
/* harmony import */ var _mipmapGenerator_generateWebGPUTextureMipmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mipmapGenerator/generateWebGPUTextureMipmap */ "./src/resource/texture/mipmapGenerator/generateWebGPUTextureMipmap.ts");



class BitmapTexture extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #src;
    #imgBitmap;
    #gpuTexture;
    #targetList = new Set();
    constructor(redGPUContext, src) {
        super(redGPUContext);
        this.#src = src;
        if (this.#src) {
            const resource = redGPUContext.resourceManager.getResource(this);
            if (resource) {
                console.log('BitmapTexture 캐시된 녀석을씀');
                // console.log('캐시된 녀석을씀',redGPUContext.resourceManager,redGPUContext.resourceManager.getResource(this))
                return resource.resource;
            }
            else {
                console.log('BitmapTexture 캐시된 녀석을안씀');
                redGPUContext.resourceManager.addResource(this);
                this.#webGPUTextureFromImageUrl(this.#src);
            }
        }
    }
    get src() {
        return this.#src;
    }
    get imgBitmap() {
        return this.#imgBitmap;
    }
    get gpuTexture() {
        return this.#gpuTexture;
    }
    get gpuTextureView() {
        const tResource = this.redGPUContext.resourceManager.getResource(this);
        if (this.#gpuTexture) {
            if (tResource.textureView) {
                console.log('BitmapTexture 캐시된 녀석의 뷰를 사용함');
                return tResource.textureView;
            }
            else {
                console.log('BitmapTexture 캐시된 녀석의 뷰를 만듬');
                tResource.textureView = this.#gpuTexture.createView({
                    label: this.#src
                });
                return tResource.textureView;
            }
        }
        else {
            return this.redGPUContext.resourceManager['emptyTextureInfo'].textureView;
        }
    }
    destroy() {
        if (this.#gpuTexture) {
            this.#gpuTexture.destroy();
            this.#gpuTexture = null;
            this.redGPUContext.resourceManager.delResource(this);
        }
    }
    addTargetMaterial(target) {
        this.#targetList.add(target);
    }
    #webGPUTextureFromImageUrl(url) {
        const { redGPUContext } = this;
        const { gpuDevice } = redGPUContext;
        fetch(url).then(response => response.blob().then(blob => createImageBitmap(blob))).then(imgBitmap => {
            console.log(imgBitmap);
            this.#imgBitmap = imgBitmap;
            this.#gpuTexture = makeWebGPUTexture(gpuDevice, imgBitmap, true, url);
            this.#resolve();
        }).catch(e => {
            this.#gpuTexture = null;
            this.#resolve();
        });
    }
    #resolve() {
        const temp = this.#targetList;
        this.#targetList = new Set();
        console.log('#targetList', temp);
        for (const value of temp) {
            temp.delete(value);
            value['bindGroupID'] = (0,_util_makeUUID__WEBPACK_IMPORTED_MODULE_1__["default"])();
            value['dirtyTexture'] = true;
        }
        console.log('#targetList', temp);
        // temp.clear()
    }
}
function makeWebGPUTexture(gpuDevice, source, generateMipmaps = true, label) {
    // 텍스쳐에 대한 정의를 내리고
    const textureDescriptor = {
        size: { width: source.width, height: source.height },
        format: 'rgba8unorm',
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
        label
    };
    // 밉맵을 생성할꺼면 소스를 계산해서... 밉맵 카운트를 추가 정의한다.
    if (generateMipmaps) {
        // Compute how many mip levels are needed for a full chain.
        textureDescriptor.mipLevelCount = Math.floor(Math.log2(Math.max(source.width, source.height))) + 1;
        // Needed in order to use render passes to generate the mipmaps.
        textureDescriptor.usage |= GPUTextureUsage.RENDER_ATTACHMENT;
    }
    // 생성할 원본 소스를 생성한다.
    const texture = gpuDevice.createTexture(textureDescriptor);
    // 생성한 텍스쳐에 데이터를 밀어넣는다.
    gpuDevice.queue.copyExternalImageToTexture({ source }, { texture }, textureDescriptor.size);
    if (generateMipmaps) {
        // 밉맵생성을 한다.
        (0,_mipmapGenerator_generateWebGPUTextureMipmap__WEBPACK_IMPORTED_MODULE_2__["default"])(gpuDevice, texture, textureDescriptor);
    }
    return texture;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BitmapTexture);


/***/ }),

/***/ "./src/resource/texture/TextureSampler.ts":
/*!************************************************!*\
  !*** ./src/resource/texture/TextureSampler.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/RedGPUContextBase */ "./src/context/RedGPUContextBase.ts");

class TextureSampler extends _context_RedGPUContextBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #optionString;
    #gpuSampler;
    constructor(redGPUContext, option = {}) {
        super(redGPUContext);
        const { resourceManager } = redGPUContext;
        option = {
            ...option,
            magFilter: option['magFilter'] || "linear",
            minFilter: option['minFilter'] || "linear",
            mipmapFilter: option['mipmapFilter'] || "linear",
            addressModeU: option['addressModeU'] || "repeat",
            addressModeV: option['addressModeV'] || "repeat",
            addressModeW: option['addressModeW'] || "repeat",
        };
        this.#optionString = Object.keys(option).map(key => {
            return `${key}:${option[key]}`;
        }, []).join(' ');
        const resource = resourceManager.getResource(this);
        if (resource) {
            console.log('TextureSampler 캐시된 녀석을씀', resource);
            return resource;
        }
        else {
            option['label'] = this.#optionString;
            this.#gpuSampler = redGPUContext.gpuDevice.createSampler(option);
            resourceManager.addResource(this);
        }
    }
    get optionString() {
        return this.#optionString;
    }
    get gpuSampler() {
        return this.#gpuSampler;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextureSampler);


/***/ }),

/***/ "./src/resource/texture/index.ts":
/*!***************************************!*\
  !*** ./src/resource/texture/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitmapCubeTexture: () => (/* reexport safe */ _BitmapCubeTexture__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   BitmapTexture: () => (/* reexport safe */ _BitmapTexture__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   RedGPUContextResourceManager: () => (/* reexport safe */ _resourceManager_RedGPUContextResourceManager__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   TextureSampler: () => (/* reexport safe */ _TextureSampler__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _resourceManager_RedGPUContextResourceManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resourceManager/RedGPUContextResourceManager */ "./src/resource/resourceManager/RedGPUContextResourceManager.ts");
/* harmony import */ var _BitmapCubeTexture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BitmapCubeTexture */ "./src/resource/texture/BitmapCubeTexture.ts");
/* harmony import */ var _BitmapTexture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BitmapTexture */ "./src/resource/texture/BitmapTexture.ts");
/* harmony import */ var _TextureSampler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextureSampler */ "./src/resource/texture/TextureSampler.ts");







/***/ }),

/***/ "./src/resource/texture/mipmapGenerator/generateWebGPUTextureMipmap.ts":
/*!*****************************************************************************!*\
  !*** ./src/resource/texture/mipmapGenerator/generateWebGPUTextureMipmap.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fragment_wgsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment.wgsl */ "./src/resource/texture/mipmapGenerator/fragment.wgsl");
/* harmony import */ var _vertex_wgsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertex.wgsl */ "./src/resource/texture/mipmapGenerator/vertex.wgsl");


const generateWebGPUTextureMipmap = (gpuDevice, texture, textureDescriptor) => {
    console.log('generateWebGPUTextureMipmap');
    //TODO 재생성 안되게 처리
    const vShaderModule = gpuDevice.createShaderModule({
        code: _vertex_wgsl__WEBPACK_IMPORTED_MODULE_1__["default"],
        label: 'vertex_generateWebGPUTextureMipmap'
    });
    const fShaderModule = gpuDevice.createShaderModule({
        code: _fragment_wgsl__WEBPACK_IMPORTED_MODULE_0__["default"],
        label: 'fragment_generateWebGPUTextureMipmap'
    });
    const pipelineDescriptor = {
        layout: gpuDevice.createPipelineLayout({
            // maxBindGroups의 영향을 받는다
            bindGroupLayouts: [
                gpuDevice.createBindGroupLayout({
                    entries: [
                        {
                            binding: 0,
                            visibility: GPUShaderStage.FRAGMENT,
                            sampler: {
                                type: 'filtering',
                            },
                        },
                        {
                            binding: 1,
                            visibility: GPUShaderStage.FRAGMENT,
                            texture: {}
                        }
                    ]
                })
            ]
        }),
        vertex: {
            module: vShaderModule,
            entryPoint: 'main',
        },
        fragment: {
            module: fShaderModule,
            entryPoint: 'main',
            targets: [{
                    format: textureDescriptor.format // Make sure to use the same format as the texture
                }],
        },
        primitive: {
            topology: 'triangle-strip',
            stripIndexFormat: 'uint32',
        },
    };
    const pipeline = gpuDevice.createRenderPipeline(pipelineDescriptor);
    // We'll ALWAYS be rendering minified here, so that's the only filter mode we need to set.
    // const gpuSampler = sampler?.gpuSampler || gpuDevice.createSampler( {minFilter: 'linear'});
    const gpuSampler = gpuDevice.createSampler({ minFilter: 'linear' });
    let srcView = texture.createView({
        baseMipLevel: 0,
        mipLevelCount: 1
    });
    // Loop through each mip level and renders the previous level's contents into it.
    const commandEncoder = gpuDevice.createCommandEncoder({});
    for (let i = 1; i < textureDescriptor.mipLevelCount; ++i) {
        const dstView = texture.createView({
            baseMipLevel: i,
            mipLevelCount: 1, // And only selecting one mip level
        });
        const passEncoder = commandEncoder.beginRenderPass({
            colorAttachments: [{
                    view: dstView,
                    clearValue: { r: 1.0, g: 0.0, b: 0.0, a: 1.0 },
                    loadOp: 'clear',
                    storeOp: 'store'
                }],
        });
        // Need a separate bind group for each level to ensure
        // we're only sampling from the previous level.
        const bindGroup = gpuDevice.createBindGroup({
            layout: pipeline.getBindGroupLayout(0),
            entries: [{
                    binding: 0,
                    resource: gpuSampler,
                }, {
                    binding: 1,
                    resource: srcView,
                }],
        });
        // Render
        passEncoder.setPipeline(pipeline);
        passEncoder.setBindGroup(0, bindGroup);
        passEncoder.draw(4);
        passEncoder.end();
        // The source texture view for the next iteration of the loop is the
        // destination view for this one.
        srcView = dstView;
    }
    gpuDevice.queue.submit([commandEncoder.finish()]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateWebGPUTextureMipmap);


/***/ }),

/***/ "./src/systemShaderDefine/index.ts":
/*!*****************************************!*\
  !*** ./src/systemShaderDefine/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SHADER_DEFINE: () => (/* binding */ SHADER_DEFINE)
/* harmony export */ });
/* harmony import */ var _shaderDefineReplace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaderDefineReplace */ "./src/systemShaderDefine/shaderDefineReplace.ts");
/* harmony import */ var _material_wgsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material/wgsl */ "./src/material/wgsl/index.js");


const SHADER_DEFINE = {
    shaderDefineReplace: _shaderDefineReplace__WEBPACK_IMPORTED_MODULE_0__["default"],
    ..._material_wgsl__WEBPACK_IMPORTED_MODULE_1__["default"]
};



/***/ }),

/***/ "./src/systemShaderDefine/shaderDefineReplace.ts":
/*!*******************************************************!*\
  !*** ./src/systemShaderDefine/shaderDefineReplace.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../light */ "./src/light/index.ts");
/* harmony import */ var _light_pointLightCluster_PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../light/pointLightCluster/PassLightClustersHelper */ "./src/light/pointLightCluster/PassLightClustersHelper.ts");
/* harmony import */ var _material_wgsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/wgsl */ "./src/material/wgsl/index.js");



const shaderDefineReplace = (source) => {
    return source
        .replace(/#+\bREDGPU_DEFINE_VERTEX_BASE\b/g, `#REDGPU_DEFINE_SYSTEM_UNIFORMS`)
        .replace(/#+\bREDGPU_DEFINE_SYSTEM_UNIFORMS\b/g, _material_wgsl__WEBPACK_IMPORTED_MODULE_2__["default"].ShaderDefine_SystemUniforms)
        .replace(/#+\bREDGPU_DEFINE_MODEL_UNIFORMS_STRUCT\b/g, _material_wgsl__WEBPACK_IMPORTED_MODULE_2__["default"].ShaderDefine_ModelUniformStruct)
        .replace(/#+\bREDGPU_DEFINE_SYSTEM_AMBIENT_DIRECTIONAL_LIGHTS\b/g, _material_wgsl__WEBPACK_IMPORTED_MODULE_2__["default"].ShaderDefine_SystemAmbientDirectionalLights)
        .replace(/#+\bREDGPU_DEFINE_SYSTEM_CALC_LIGHT_FUNCTIONS\b/g, _material_wgsl__WEBPACK_IMPORTED_MODULE_2__["default"].ShaderDefine_SystemCalcLightFunctions)
        .replace(/REDGPU_DEFINE_TILE_COUNT_X/g, _light_pointLightCluster_PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_1__["default"].TILE_COUNT_X.toString())
        .replace(/REDGPU_DEFINE_TILE_COUNT_Y/g, _light_pointLightCluster_PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_1__["default"].TILE_COUNT_Y.toString())
        .replace(/REDGPU_DEFINE_TILE_COUNT_Z/g, _light_pointLightCluster_PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_1__["default"].TILE_COUNT_Z.toString())
        .replace(/REDGPU_DEFINE_TOTAL_TILES/g, _light_pointLightCluster_PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getTotalTileSize().toString())
        .replace(/REDGPU_DEFINE_WORKGROUP_SIZE_X/g, _light_pointLightCluster_PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_1__["default"].WORKGROUP_SIZE_X.toString())
        .replace(/REDGPU_DEFINE_WORKGROUP_SIZE_Y/g, _light_pointLightCluster_PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_1__["default"].WORKGROUP_SIZE_Y.toString())
        .replace(/REDGPU_DEFINE_WORKGROUP_SIZE_Z/g, _light_pointLightCluster_PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_1__["default"].WORKGROUP_SIZE_Z.toString())
        .replace(/REDGPU_DEFINE_WORKGROUP_SIZE_Z/g, _light_pointLightCluster_PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_1__["default"].WORKGROUP_SIZE_Z.toString())
        .replace(/REDGPU_DEFINE_MAX_LIGHTS_PER_CLUSTER/g, _light_pointLightCluster_PassLightClustersHelper__WEBPACK_IMPORTED_MODULE_1__["default"].MAX_POINT_LIGHTS_PER_CLUSTER.toString())
        .replace(/REDGPU_CONST_MAX_DIRECTIONAL_LIGHT_NUM/g, _light__WEBPACK_IMPORTED_MODULE_0__.LightManager.MAX_DIRECTIONAL_LIGHT_NUM.toString());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shaderDefineReplace);


/***/ }),

/***/ "./src/temp/qurd/Quad.ts":
/*!*******************************!*\
  !*** ./src/temp/qurd/Quad.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fragment_wgsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment.wgsl */ "./src/temp/qurd/fragment.wgsl");
/* harmony import */ var _vertex_wgsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertex.wgsl */ "./src/temp/qurd/vertex.wgsl");


class Quad {
    #pipeline;
    constructor(redGPUContext) {
        const { gpuDevice } = redGPUContext;
        this.#pipeline = gpuDevice.createRenderPipeline({
            layout: 'auto',
            vertex: {
                module: gpuDevice.createShaderModule({
                    code: _vertex_wgsl__WEBPACK_IMPORTED_MODULE_1__["default"],
                }),
                entryPoint: 'main',
            },
            fragment: {
                module: gpuDevice.createShaderModule({
                    code: _fragment_wgsl__WEBPACK_IMPORTED_MODULE_0__["default"],
                }),
                entryPoint: 'main',
                targets: [
                    {
                        format: navigator.gpu.getPreferredCanvasFormat(),
                        blend: {
                            color: {
                                srcFactor: "src-alpha",
                                dstFactor: "one-minus-src-alpha",
                                operation: "add"
                            },
                            alpha: {
                                srcFactor: "one",
                                dstFactor: "one-minus-src-alpha",
                                operation: "add"
                            }
                        }
                    },
                ],
            },
            multisample: {
                count: redGPUContext.useMultiSample ? 4 : 1
            },
            depthStencil: {
                depthWriteEnabled: false,
                depthCompare: 'less-equal',
                format: "depth24plus-stencil8",
            },
            primitive: {
                topology: 'triangle-list',
                cullMode: 'none',
                frontFace: "ccw"
            },
        });
    }
    render(passEncoder, gpuBuffer) {
        passEncoder.setPipeline(this.#pipeline);
        passEncoder.draw(6, 1, 0, 0);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quad);


/***/ }),

/***/ "./src/util/color/hexadecimalToRgb.ts":
/*!********************************************!*\
  !*** ./src/util/color/hexadecimalToRgb.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getConstructorName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getConstructorName */ "./src/util/getConstructorName.ts");

const hexadecimalToRgb = (hexadecimal, returnArrayYn = false) => {
    // console.log(hexadecimal, typeof hexadecimal)
    if (typeof hexadecimal === 'number') {
        hexadecimal = Math.floor(+hexadecimal);
        if (returnArrayYn) {
            return [
                (hexadecimal >> 16 & 255) / 255,
                (hexadecimal >> 8 & 255) / 255,
                (hexadecimal & 255) / 255,
                1
            ];
        }
        else {
            return {
                r: (hexadecimal >> 16 & 255) / 255,
                g: (hexadecimal >> 8 & 255) / 255,
                b: (hexadecimal & 255) / 255,
                a: 1,
            };
        }
    }
    else if (typeof hexadecimal === 'string' && (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexadecimal)
        || /^(0x)([A-Fa-f0-9]{3}){1,2}$/.test(hexadecimal))) {
        const result = [];
        let temp = (hexadecimal.substring(0, 2) === '0x' ? hexadecimal.substring(2) : hexadecimal.substring(1)).split('');
        if (temp.length === 3)
            temp = [temp[0], temp[0], temp[1], temp[1], temp[2], temp[2]];
        const temp2 = '0x' + temp.join('');
        result[0] = ((temp2 >> 16) & 255) / 255;
        result[1] = ((temp2 >> 8) & 255) / 255;
        result[2] = (temp2 & 255) / 255;
        if (returnArrayYn) {
            return [
                ...result,
                1
            ];
        }
        else {
            return {
                r: result[0],
                g: result[1],
                b: result[2],
                a: 1,
            };
        }
    }
    else {
        throw Error(`from ${(0,_getConstructorName__WEBPACK_IMPORTED_MODULE_0__["default"])(hexadecimalToRgb)} : input value - ${hexadecimal} / Only hexadecimal number or hex string allowed`);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hexadecimalToRgb);


/***/ }),

/***/ "./src/util/color/index.ts":
/*!*********************************!*\
  !*** ./src/util/color/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hexadecimalToRgb: () => (/* reexport safe */ _hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _hexadecimalToRgb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hexadecimalToRgb */ "./src/util/color/hexadecimalToRgb.ts");




/***/ }),

/***/ "./src/util/computeViewFrustumPlanes.ts":
/*!**********************************************!*\
  !*** ./src/util/computeViewFrustumPlanes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gl-matrix */ "./src/util/gl-matrix/index.js");

const computeViewFrustumPlanes = (projectionMatrix, cameraMatrix) => {
    let tMTX = _gl_matrix__WEBPACK_IMPORTED_MODULE_0__.mat4.create();
    _gl_matrix__WEBPACK_IMPORTED_MODULE_0__.mat4.multiply(tMTX, projectionMatrix, cameraMatrix);
    let planes = [];
    planes[0] = [tMTX[3] - tMTX[0], tMTX[7] - tMTX[4], tMTX[11] - tMTX[8], tMTX[15] - tMTX[12]];
    planes[1] = [tMTX[3] + tMTX[0], tMTX[7] + tMTX[4], tMTX[11] + tMTX[8], tMTX[15] + tMTX[12]];
    planes[2] = [tMTX[3] + tMTX[1], tMTX[7] + tMTX[5], tMTX[11] + tMTX[9], tMTX[15] + tMTX[13]];
    planes[3] = [tMTX[3] - tMTX[1], tMTX[7] - tMTX[5], tMTX[11] - tMTX[9], tMTX[15] - tMTX[13]];
    planes[4] = [tMTX[3] - tMTX[2], tMTX[7] - tMTX[6], tMTX[11] - tMTX[10], tMTX[15] - tMTX[14]];
    planes[5] = [tMTX[3] + tMTX[2], tMTX[7] + tMTX[6], tMTX[11] + tMTX[10], tMTX[15] + tMTX[14]];
    for (let i = 0; i < planes.length; i++) {
        let plane = planes[i];
        let norm = Math.sqrt(plane[0] * plane[0] + plane[1] * plane[1] + plane[2] * plane[2]);
        plane[0] /= norm;
        plane[1] /= norm;
        plane[2] /= norm;
        plane[3] /= norm;
    }
    return planes;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computeViewFrustumPlanes);


/***/ }),

/***/ "./src/util/errorFunc/index.ts":
/*!*************************************!*\
  !*** ./src/util/errorFunc/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throwError: () => (/* reexport safe */ _throwError__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   throwErrorInstanceOf: () => (/* reexport safe */ _throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   throwErrorNumberType: () => (/* reexport safe */ _throwErrorNumberType__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _throwError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./throwError */ "./src/util/errorFunc/throwError.js");
/* harmony import */ var _throwErrorInstanceOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throwErrorInstanceOf */ "./src/util/errorFunc/throwErrorInstanceOf.js");
/* harmony import */ var _throwErrorNumberType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throwErrorNumberType */ "./src/util/errorFunc/throwErrorNumberType.js");






/***/ }),

/***/ "./src/util/getConstructorName.ts":
/*!****************************************!*\
  !*** ./src/util/getConstructorName.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getConstructorName = function (target) {
    return `${target.constructor.name}`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getConstructorName);


/***/ }),

/***/ "./src/util/makeUUID.ts":
/*!******************************!*\
  !*** ./src/util/makeUUID.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeUUID = function () {
    let u = '', m = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', i = 0, rb = Math.random() * 0xffffffff | 0;
    while (i++ < 36) {
        let c = m[i - 1], r = rb & 0xf, v = c == 'x' ? r : (r & 0x3 | 0x8);
        u += (c == '-' || c == '4') ? c : v.toString(16);
        rb = i % 8 == 0 ? Math.random() * 0xffffffff | 0 : rb >> 4;
    }
    return u;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeUUID);


/***/ }),

/***/ "./src/material/wgsl/index.js":
/*!************************************!*\
  !*** ./src/material/wgsl/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShaderDefine_ModelUniformStruct_wgsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShaderDefine_ModelUniformStruct.wgsl */ "./src/material/wgsl/ShaderDefine_ModelUniformStruct.wgsl");
/* harmony import */ var _ShaderDefine_SystemAmbientDirectionalLights_wgsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShaderDefine_SystemAmbientDirectionalLights.wgsl */ "./src/material/wgsl/ShaderDefine_SystemAmbientDirectionalLights.wgsl");
/* harmony import */ var _ShaderDefine_SystemCalcLightFunctions_wgsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShaderDefine_SystemCalcLightFunctions.wgsl */ "./src/material/wgsl/ShaderDefine_SystemCalcLightFunctions.wgsl");
/* harmony import */ var _ShaderDefine_SystemUniforms_wgsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShaderDefine_SystemUniforms.wgsl */ "./src/material/wgsl/ShaderDefine_SystemUniforms.wgsl");





const ShaderDefine = {
	ShaderDefine_SystemUniforms: _ShaderDefine_SystemUniforms_wgsl__WEBPACK_IMPORTED_MODULE_3__["default"],
	ShaderDefine_ModelUniformStruct: _ShaderDefine_ModelUniformStruct_wgsl__WEBPACK_IMPORTED_MODULE_0__["default"],
	ShaderDefine_SystemAmbientDirectionalLights: _ShaderDefine_SystemAmbientDirectionalLights_wgsl__WEBPACK_IMPORTED_MODULE_1__["default"],
	ShaderDefine_SystemCalcLightFunctions: _ShaderDefine_SystemCalcLightFunctions_wgsl__WEBPACK_IMPORTED_MODULE_2__["default"]
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShaderDefine);


/***/ }),

/***/ "./src/util/errorFunc/throwError.js":
/*!******************************************!*\
  !*** ./src/util/errorFunc/throwError.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const throwError = function () {
	console.log('------ throwError! ------')
	throw new Error(Array.prototype.slice.call(arguments).join(' '))
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throwError);

/***/ }),

/***/ "./src/util/errorFunc/throwErrorInstanceOf.js":
/*!****************************************************!*\
  !*** ./src/util/errorFunc/throwErrorInstanceOf.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getConstructorName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getConstructorName */ "./src/util/getConstructorName.ts");
/**
 * 에러 생성
 */


const throwErrorInstanceOf = function (target, key, wantClassName) {
	console.log('------ throwErrorInstanceOf! ------')
	throw Error(`from ${(0,_getConstructorName__WEBPACK_IMPORTED_MODULE_0__["default"])(target)} : ${key}는 ${wantClassName}의 instance 만 허용`)
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throwErrorInstanceOf);

/***/ }),

/***/ "./src/util/errorFunc/throwErrorNumberType.js":
/*!****************************************************!*\
  !*** ./src/util/errorFunc/throwErrorNumberType.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getConstructorName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getConstructorName */ "./src/util/getConstructorName.ts");
/**
 * 에러 생성
 */


const throwErrorNumberType = function (target, key) {
	console.log('------ throwErrorNumberType! ------')
	throw Error(`from ${(0,_getConstructorName__WEBPACK_IMPORTED_MODULE_0__["default"])(target)} : ${key} - Only number type allowed`)
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throwErrorNumberType);

/***/ }),

/***/ "./src/util/gl-matrix/common.js":
/*!**************************************!*\
  !*** ./src/util/gl-matrix/common.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANGLE_ORDER: () => (/* binding */ ANGLE_ORDER),
/* harmony export */   ARRAY_TYPE: () => (/* binding */ ARRAY_TYPE),
/* harmony export */   EPSILON: () => (/* binding */ EPSILON),
/* harmony export */   RANDOM: () => (/* binding */ RANDOM),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   setMatrixArrayType: () => (/* binding */ setMatrixArrayType),
/* harmony export */   toRadian: () => (/* binding */ toRadian)
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
var RANDOM = Math.random;
var ANGLE_ORDER = "zyx";

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
	ARRAY_TYPE = type;
}

var degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
	return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of gl-matrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
	return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}

if (!Math.hypot) Math.hypot = function () {
	var y = 0,
		i = arguments.length;
	while (i--) {
		y += arguments[i] * arguments[i];
	}
	return Math.sqrt(y);
};

/***/ }),

/***/ "./src/util/gl-matrix/index.js":
/*!*************************************!*\
  !*** ./src/util/gl-matrix/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glMatrix: () => (/* reexport module object */ _common_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   mat2: () => (/* reexport module object */ _mat2_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   mat2d: () => (/* reexport module object */ _mat2d_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   mat3: () => (/* reexport module object */ _mat3_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   mat4: () => (/* reexport module object */ _mat4_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   quat: () => (/* reexport module object */ _quat_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   quat2: () => (/* reexport module object */ _quat2_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   vec2: () => (/* reexport module object */ _vec2_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   vec3: () => (/* reexport module object */ _vec3_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   vec4: () => (/* reexport module object */ _vec4_js__WEBPACK_IMPORTED_MODULE_9__)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/util/gl-matrix/common.js");
/* harmony import */ var _mat2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat2.js */ "./src/util/gl-matrix/mat2.js");
/* harmony import */ var _mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat2d.js */ "./src/util/gl-matrix/mat2d.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3.js */ "./src/util/gl-matrix/mat3.js");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat4.js */ "./src/util/gl-matrix/mat4.js");
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quat.js */ "./src/util/gl-matrix/quat.js");
/* harmony import */ var _quat2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quat2.js */ "./src/util/gl-matrix/quat2.js");
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vec2.js */ "./src/util/gl-matrix/vec2.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vec3.js */ "./src/util/gl-matrix/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vec4.js */ "./src/util/gl-matrix/vec4.js");













/***/ }),

/***/ "./src/util/gl-matrix/mat2.js":
/*!************************************!*\
  !*** ./src/util/gl-matrix/mat2.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LDU: () => (/* binding */ LDU),
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   adjoint: () => (/* binding */ adjoint),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/util/gl-matrix/common.js");


/**
 * 2x2 Matrix
 * @module mat2
 */
/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */

function create() {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
	if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
		out[1] = 0;
		out[2] = 0;
	}
	out[0] = 1;
	out[3] = 1;
	return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */

function clone(a) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function copy(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */

function identity(out) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */

function fromValues(m00, m01, m10, m11) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
	out[0] = m00;
	out[1] = m01;
	out[2] = m10;
	out[3] = m11;
	return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */

function set(out, m00, m01, m10, m11) {
	out[0] = m00;
	out[1] = m01;
	out[2] = m10;
	out[3] = m11;
	return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function transpose(out, a) {
	// If we are transposing ourselves we can skip a few steps but have to cache
	// some values
	if (out === a) {
		var a1 = a[1];
		out[1] = a[2];
		out[2] = a1;
	} else {
		out[0] = a[0];
		out[1] = a[2];
		out[2] = a[1];
		out[3] = a[3];
	}
	return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function invert(out, a) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3]; // Calculate the determinant
	var det = a0 * a3 - a2 * a1;
	if (!det) {
		return null;
	}
	det = 1.0 / det;
	out[0] = a3 * det;
	out[1] = -a1 * det;
	out[2] = -a2 * det;
	out[3] = a0 * det;
	return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function adjoint(out, a) {
	// Caching this value is necessary if out == a
	var a0 = a[0];
	out[0] = a[3];
	out[1] = -a[1];
	out[2] = -a[2];
	out[3] = a0;
	return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
	return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function multiply(out, a, b) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3];
	var b0 = b[0],
		b1 = b[1],
		b2 = b[2],
		b3 = b[3];
	out[0] = a0 * b0 + a2 * b1;
	out[1] = a1 * b0 + a3 * b1;
	out[2] = a0 * b2 + a2 * b3;
	out[3] = a1 * b2 + a3 * b3;
	return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function rotate(out, a, rad) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3];
	var s = Math.sin(rad);
	var c = Math.cos(rad);
	out[0] = a0 * c + a2 * s;
	out[1] = a1 * c + a3 * s;
	out[2] = a0 * -s + a2 * c;
	out[3] = a1 * -s + a3 * c;
	return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/

function scale(out, a, v) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3];
	var v0 = v[0],
		v1 = v[1];
	out[0] = a0 * v0;
	out[1] = a1 * v0;
	out[2] = a2 * v1;
	out[3] = a3 * v1;
	return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function fromRotation(out, rad) {
	var s = Math.sin(rad);
	var c = Math.cos(rad);
	out[0] = c;
	out[1] = s;
	out[2] = -s;
	out[3] = c;
	return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2} out
 */

function fromScaling(out, v) {
	out[0] = v[0];
	out[1] = 0;
	out[2] = 0;
	out[3] = v[1];
	return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
	return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
	return Math.hypot(a[0], a[1], a[2], a[3]);
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
	L[2] = a[2] / a[0];
	U[0] = a[0];
	U[1] = a[1];
	U[3] = a[3] - L[2] * U[1];
	return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function add(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	out[3] = a[3] + b[3];
	return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function subtract(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	out[3] = a[3] - b[3];
	return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3];
	var b0 = b[0],
		b1 = b[1],
		b2 = b[2],
		b3 = b[3];
	return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */

function multiplyScalar(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	out[3] = a[3] * b;
	return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
	out[0] = a[0] + b[0] * scale;
	out[1] = a[1] + b[1] * scale;
	out[2] = a[2] + b[2] * scale;
	out[3] = a[3] + b[3] * scale;
	return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./src/util/gl-matrix/mat2d.js":
/*!*************************************!*\
  !*** ./src/util/gl-matrix/mat2d.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/util/gl-matrix/common.js");


/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */
/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */

function create() {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(6);
	if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
		out[1] = 0;
		out[2] = 0;
		out[4] = 0;
		out[5] = 0;
	}
	out[0] = 1;
	out[3] = 1;
	return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */

function clone(a) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(6);
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function copy(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */

function identity(out) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	out[4] = 0;
	out[5] = 0;
	return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */

function fromValues(a, b, c, d, tx, ty) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(6);
	out[0] = a;
	out[1] = b;
	out[2] = c;
	out[3] = d;
	out[4] = tx;
	out[5] = ty;
	return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */

function set(out, a, b, c, d, tx, ty) {
	out[0] = a;
	out[1] = b;
	out[2] = c;
	out[3] = d;
	out[4] = tx;
	out[5] = ty;
	return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function invert(out, a) {
	var aa = a[0],
		ab = a[1],
		ac = a[2],
		ad = a[3];
	var atx = a[4],
		aty = a[5];
	var det = aa * ad - ab * ac;
	if (!det) {
		return null;
	}
	det = 1.0 / det;
	out[0] = ad * det;
	out[1] = -ab * det;
	out[2] = -ac * det;
	out[3] = aa * det;
	out[4] = (ac * aty - ad * atx) * det;
	out[5] = (ab * atx - aa * aty) * det;
	return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
	return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function multiply(out, a, b) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3],
		a4 = a[4],
		a5 = a[5];
	var b0 = b[0],
		b1 = b[1],
		b2 = b[2],
		b3 = b[3],
		b4 = b[4],
		b5 = b[5];
	out[0] = a0 * b0 + a2 * b1;
	out[1] = a1 * b0 + a3 * b1;
	out[2] = a0 * b2 + a2 * b3;
	out[3] = a1 * b2 + a3 * b3;
	out[4] = a0 * b4 + a2 * b5 + a4;
	out[5] = a1 * b4 + a3 * b5 + a5;
	return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function rotate(out, a, rad) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3],
		a4 = a[4],
		a5 = a[5];
	var s = Math.sin(rad);
	var c = Math.cos(rad);
	out[0] = a0 * c + a2 * s;
	out[1] = a1 * c + a3 * s;
	out[2] = a0 * -s + a2 * c;
	out[3] = a1 * -s + a3 * c;
	out[4] = a4;
	out[5] = a5;
	return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/

function scale(out, a, v) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3],
		a4 = a[4],
		a5 = a[5];
	var v0 = v[0],
		v1 = v[1];
	out[0] = a0 * v0;
	out[1] = a1 * v0;
	out[2] = a2 * v1;
	out[3] = a3 * v1;
	out[4] = a4;
	out[5] = a5;
	return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/

function translate(out, a, v) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3],
		a4 = a[4],
		a5 = a[5];
	var v0 = v[0],
		v1 = v[1];
	out[0] = a0;
	out[1] = a1;
	out[2] = a2;
	out[3] = a3;
	out[4] = a0 * v0 + a2 * v1 + a4;
	out[5] = a1 * v0 + a3 * v1 + a5;
	return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function fromRotation(out, rad) {
	var s = Math.sin(rad),
		c = Math.cos(rad);
	out[0] = c;
	out[1] = s;
	out[2] = -s;
	out[3] = c;
	out[4] = 0;
	out[5] = 0;
	return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2d} out
 */

function fromScaling(out, v) {
	out[0] = v[0];
	out[1] = 0;
	out[2] = 0;
	out[3] = v[1];
	out[4] = 0;
	out[5] = 0;
	return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat2d} out
 */

function fromTranslation(out, v) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	out[4] = v[0];
	out[5] = v[1];
	return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
	return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
	return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function add(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	out[3] = a[3] + b[3];
	out[4] = a[4] + b[4];
	out[5] = a[5] + b[5];
	return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function subtract(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	out[3] = a[3] - b[3];
	out[4] = a[4] - b[4];
	out[5] = a[5] - b[5];
	return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */

function multiplyScalar(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	out[3] = a[3] * b;
	out[4] = a[4] * b;
	out[5] = a[5] * b;
	return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
	out[0] = a[0] + b[0] * scale;
	out[1] = a[1] + b[1] * scale;
	out[2] = a[2] + b[2] * scale;
	out[3] = a[3] + b[3] * scale;
	out[4] = a[4] + b[4] * scale;
	out[5] = a[5] + b[5] * scale;
	return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3],
		a4 = a[4],
		a5 = a[5];
	var b0 = b[0],
		b1 = b[1],
		b2 = b[2],
		b3 = b[3],
		b4 = b[4],
		b5 = b[5];
	return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./src/util/gl-matrix/mat3.js":
/*!************************************!*\
  !*** ./src/util/gl-matrix/mat3.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   adjoint: () => (/* binding */ adjoint),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromMat2d: () => (/* binding */ fromMat2d),
/* harmony export */   fromMat4: () => (/* binding */ fromMat4),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   normalFromMat4: () => (/* binding */ normalFromMat4),
/* harmony export */   projection: () => (/* binding */ projection),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/util/gl-matrix/common.js");


/**
 * 3x3 Matrix
 * @module mat3
 */
/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
	if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
		out[1] = 0;
		out[2] = 0;
		out[3] = 0;
		out[5] = 0;
		out[6] = 0;
		out[7] = 0;
	}
	out[0] = 1;
	out[4] = 1;
	out[8] = 1;
	return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[4];
	out[4] = a[5];
	out[5] = a[6];
	out[6] = a[8];
	out[7] = a[9];
	out[8] = a[10];
	return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
	out[0] = m00;
	out[1] = m01;
	out[2] = m02;
	out[3] = m10;
	out[4] = m11;
	out[5] = m12;
	out[6] = m20;
	out[7] = m21;
	out[8] = m22;
	return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	out[0] = m00;
	out[1] = m01;
	out[2] = m02;
	out[3] = m10;
	out[4] = m11;
	out[5] = m12;
	out[6] = m20;
	out[7] = m21;
	out[8] = m22;
	return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 1;
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	out[8] = 1;
	return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
	// If we are transposing ourselves we can skip a few steps but have to cache some values
	if (out === a) {
		var a01 = a[1],
			a02 = a[2],
			a12 = a[5];
		out[1] = a[3];
		out[2] = a[6];
		out[3] = a01;
		out[5] = a[7];
		out[6] = a02;
		out[7] = a12;
	} else {
		out[0] = a[0];
		out[1] = a[3];
		out[2] = a[6];
		out[3] = a[1];
		out[4] = a[4];
		out[5] = a[7];
		out[6] = a[2];
		out[7] = a[5];
		out[8] = a[8];
	}
	return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
	var a00 = a[0],
		a01 = a[1],
		a02 = a[2];
	var a10 = a[3],
		a11 = a[4],
		a12 = a[5];
	var a20 = a[6],
		a21 = a[7],
		a22 = a[8];
	var b01 = a22 * a11 - a12 * a21;
	var b11 = -a22 * a10 + a12 * a20;
	var b21 = a21 * a10 - a11 * a20; // Calculate the determinant
	var det = a00 * b01 + a01 * b11 + a02 * b21;
	if (!det) {
		return null;
	}
	det = 1.0 / det;
	out[0] = b01 * det;
	out[1] = (-a22 * a01 + a02 * a21) * det;
	out[2] = (a12 * a01 - a02 * a11) * det;
	out[3] = b11 * det;
	out[4] = (a22 * a00 - a02 * a20) * det;
	out[5] = (-a12 * a00 + a02 * a10) * det;
	out[6] = b21 * det;
	out[7] = (-a21 * a00 + a01 * a20) * det;
	out[8] = (a11 * a00 - a01 * a10) * det;
	return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
	var a00 = a[0],
		a01 = a[1],
		a02 = a[2];
	var a10 = a[3],
		a11 = a[4],
		a12 = a[5];
	var a20 = a[6],
		a21 = a[7],
		a22 = a[8];
	out[0] = a11 * a22 - a12 * a21;
	out[1] = a02 * a21 - a01 * a22;
	out[2] = a01 * a12 - a02 * a11;
	out[3] = a12 * a20 - a10 * a22;
	out[4] = a00 * a22 - a02 * a20;
	out[5] = a02 * a10 - a00 * a12;
	out[6] = a10 * a21 - a11 * a20;
	out[7] = a01 * a20 - a00 * a21;
	out[8] = a00 * a11 - a01 * a10;
	return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
	var a00 = a[0],
		a01 = a[1],
		a02 = a[2];
	var a10 = a[3],
		a11 = a[4],
		a12 = a[5];
	var a20 = a[6],
		a21 = a[7],
		a22 = a[8];
	return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
	var a00 = a[0],
		a01 = a[1],
		a02 = a[2];
	var a10 = a[3],
		a11 = a[4],
		a12 = a[5];
	var a20 = a[6],
		a21 = a[7],
		a22 = a[8];
	var b00 = b[0],
		b01 = b[1],
		b02 = b[2];
	var b10 = b[3],
		b11 = b[4],
		b12 = b[5];
	var b20 = b[6],
		b21 = b[7],
		b22 = b[8];
	out[0] = b00 * a00 + b01 * a10 + b02 * a20;
	out[1] = b00 * a01 + b01 * a11 + b02 * a21;
	out[2] = b00 * a02 + b01 * a12 + b02 * a22;
	out[3] = b10 * a00 + b11 * a10 + b12 * a20;
	out[4] = b10 * a01 + b11 * a11 + b12 * a21;
	out[5] = b10 * a02 + b11 * a12 + b12 * a22;
	out[6] = b20 * a00 + b21 * a10 + b22 * a20;
	out[7] = b20 * a01 + b21 * a11 + b22 * a21;
	out[8] = b20 * a02 + b21 * a12 + b22 * a22;
	return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
	var a00 = a[0],
		a01 = a[1],
		a02 = a[2],
		a10 = a[3],
		a11 = a[4],
		a12 = a[5],
		a20 = a[6],
		a21 = a[7],
		a22 = a[8],
		x = v[0],
		y = v[1];
	out[0] = a00;
	out[1] = a01;
	out[2] = a02;
	out[3] = a10;
	out[4] = a11;
	out[5] = a12;
	out[6] = x * a00 + y * a10 + a20;
	out[7] = x * a01 + y * a11 + a21;
	out[8] = x * a02 + y * a12 + a22;
	return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
	var a00 = a[0],
		a01 = a[1],
		a02 = a[2],
		a10 = a[3],
		a11 = a[4],
		a12 = a[5],
		a20 = a[6],
		a21 = a[7],
		a22 = a[8],
		s = Math.sin(rad),
		c = Math.cos(rad);
	out[0] = c * a00 + s * a10;
	out[1] = c * a01 + s * a11;
	out[2] = c * a02 + s * a12;
	out[3] = c * a10 - s * a00;
	out[4] = c * a11 - s * a01;
	out[5] = c * a12 - s * a02;
	out[6] = a20;
	out[7] = a21;
	out[8] = a22;
	return out;
}

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
	var x = v[0],
		y = v[1];
	out[0] = x * a[0];
	out[1] = x * a[1];
	out[2] = x * a[2];
	out[3] = y * a[3];
	out[4] = y * a[4];
	out[5] = y * a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 1;
	out[5] = 0;
	out[6] = v[0];
	out[7] = v[1];
	out[8] = 1;
	return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
	var s = Math.sin(rad),
		c = Math.cos(rad);
	out[0] = c;
	out[1] = s;
	out[2] = 0;
	out[3] = -s;
	out[4] = c;
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	out[8] = 1;
	return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
	out[0] = v[0];
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = v[1];
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	out[8] = 1;
	return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = 0;
	out[3] = a[2];
	out[4] = a[3];
	out[5] = 0;
	out[6] = a[4];
	out[7] = a[5];
	out[8] = 1;
	return out;
}

/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
	var x = q[0],
		y = q[1],
		z = q[2],
		w = q[3];
	var x2 = x + x;
	var y2 = y + y;
	var z2 = z + z;
	var xx = x * x2;
	var yx = y * x2;
	var yy = y * y2;
	var zx = z * x2;
	var zy = z * y2;
	var zz = z * z2;
	var wx = w * x2;
	var wy = w * y2;
	var wz = w * z2;
	out[0] = 1 - yy - zz;
	out[3] = yx - wz;
	out[6] = zx + wy;
	out[1] = yx + wz;
	out[4] = 1 - xx - zz;
	out[7] = zy - wx;
	out[2] = zx - wy;
	out[5] = zy + wx;
	out[8] = 1 - xx - yy;
	return out;
}

/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
	var a00 = a[0],
		a01 = a[1],
		a02 = a[2],
		a03 = a[3];
	var a10 = a[4],
		a11 = a[5],
		a12 = a[6],
		a13 = a[7];
	var a20 = a[8],
		a21 = a[9],
		a22 = a[10],
		a23 = a[11];
	var a30 = a[12],
		a31 = a[13],
		a32 = a[14],
		a33 = a[15];
	var b00 = a00 * a11 - a01 * a10;
	var b01 = a00 * a12 - a02 * a10;
	var b02 = a00 * a13 - a03 * a10;
	var b03 = a01 * a12 - a02 * a11;
	var b04 = a01 * a13 - a03 * a11;
	var b05 = a02 * a13 - a03 * a12;
	var b06 = a20 * a31 - a21 * a30;
	var b07 = a20 * a32 - a22 * a30;
	var b08 = a20 * a33 - a23 * a30;
	var b09 = a21 * a32 - a22 * a31;
	var b10 = a21 * a33 - a23 * a31;
	var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
	var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (!det) {
		return null;
	}
	det = 1.0 / det;
	out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
	out[0] = 2 / width;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = -2 / height;
	out[5] = 0;
	out[6] = -1;
	out[7] = 1;
	out[8] = 1;
	return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
	return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
	return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	out[3] = a[3] + b[3];
	out[4] = a[4] + b[4];
	out[5] = a[5] + b[5];
	out[6] = a[6] + b[6];
	out[7] = a[7] + b[7];
	out[8] = a[8] + b[8];
	return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	out[3] = a[3] - b[3];
	out[4] = a[4] - b[4];
	out[5] = a[5] - b[5];
	out[6] = a[6] - b[6];
	out[7] = a[7] - b[7];
	out[8] = a[8] - b[8];
	return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	out[3] = a[3] * b;
	out[4] = a[4] * b;
	out[5] = a[5] * b;
	out[6] = a[6] * b;
	out[7] = a[7] * b;
	out[8] = a[8] * b;
	return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
	out[0] = a[0] + b[0] * scale;
	out[1] = a[1] + b[1] * scale;
	out[2] = a[2] + b[2] * scale;
	out[3] = a[3] + b[3] * scale;
	out[4] = a[4] + b[4] * scale;
	out[5] = a[5] + b[5] * scale;
	out[6] = a[6] + b[6] * scale;
	out[7] = a[7] + b[7] * scale;
	out[8] = a[8] + b[8] * scale;
	return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3],
		a4 = a[4],
		a5 = a[5],
		a6 = a[6],
		a7 = a[7],
		a8 = a[8];
	var b0 = b[0],
		b1 = b[1],
		b2 = b[2],
		b3 = b[3],
		b4 = b[4],
		b5 = b[5],
		b6 = b[6],
		b7 = b[7],
		b8 = b[8];
	return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./src/util/gl-matrix/mat4.js":
/*!************************************!*\
  !*** ./src/util/gl-matrix/mat4.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   adjoint: () => (/* binding */ adjoint),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   decompose: () => (/* binding */ decompose),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   fromQuat2: () => (/* binding */ fromQuat2),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromRotationTranslation: () => (/* binding */ fromRotationTranslation),
/* harmony export */   fromRotationTranslationScale: () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   fromRotationTranslationScaleOrigin: () => (/* binding */ fromRotationTranslationScaleOrigin),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   fromXRotation: () => (/* binding */ fromXRotation),
/* harmony export */   fromYRotation: () => (/* binding */ fromYRotation),
/* harmony export */   fromZRotation: () => (/* binding */ fromZRotation),
/* harmony export */   frustum: () => (/* binding */ frustum),
/* harmony export */   getRotation: () => (/* binding */ getRotation),
/* harmony export */   getScaling: () => (/* binding */ getScaling),
/* harmony export */   getTranslation: () => (/* binding */ getTranslation),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   lookAt: () => (/* binding */ lookAt),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   ortho: () => (/* binding */ ortho),
/* harmony export */   orthoNO: () => (/* binding */ orthoNO),
/* harmony export */   orthoZO: () => (/* binding */ orthoZO),
/* harmony export */   perspective: () => (/* binding */ perspective),
/* harmony export */   perspectiveFromFieldOfView: () => (/* binding */ perspectiveFromFieldOfView),
/* harmony export */   perspectiveNO: () => (/* binding */ perspectiveNO),
/* harmony export */   perspectiveZO: () => (/* binding */ perspectiveZO),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   targetTo: () => (/* binding */ targetTo),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/util/gl-matrix/common.js");


/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */
/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
	if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
		out[1] = 0;
		out[2] = 0;
		out[3] = 0;
		out[4] = 0;
		out[6] = 0;
		out[7] = 0;
		out[8] = 0;
		out[9] = 0;
		out[11] = 0;
		out[12] = 0;
		out[13] = 0;
		out[14] = 0;
	}
	out[0] = 1;
	out[5] = 1;
	out[10] = 1;
	out[15] = 1;
	return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	out[9] = a[9];
	out[10] = a[10];
	out[11] = a[11];
	out[12] = a[12];
	out[13] = a[13];
	out[14] = a[14];
	out[15] = a[15];
	return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	out[9] = a[9];
	out[10] = a[10];
	out[11] = a[11];
	out[12] = a[12];
	out[13] = a[13];
	out[14] = a[14];
	out[15] = a[15];
	return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
	out[0] = m00;
	out[1] = m01;
	out[2] = m02;
	out[3] = m03;
	out[4] = m10;
	out[5] = m11;
	out[6] = m12;
	out[7] = m13;
	out[8] = m20;
	out[9] = m21;
	out[10] = m22;
	out[11] = m23;
	out[12] = m30;
	out[13] = m31;
	out[14] = m32;
	out[15] = m33;
	return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	out[0] = m00;
	out[1] = m01;
	out[2] = m02;
	out[3] = m03;
	out[4] = m10;
	out[5] = m11;
	out[6] = m12;
	out[7] = m13;
	out[8] = m20;
	out[9] = m21;
	out[10] = m22;
	out[11] = m23;
	out[12] = m30;
	out[13] = m31;
	out[14] = m32;
	out[15] = m33;
	return out;
}

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = 1;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 1;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
	// If we are transposing ourselves we can skip a few steps but have to cache some values
	if (out === a) {
		var a01 = a[1],
			a02 = a[2],
			a03 = a[3];
		var a12 = a[6],
			a13 = a[7];
		var a23 = a[11];
		out[1] = a[4];
		out[2] = a[8];
		out[3] = a[12];
		out[4] = a01;
		out[6] = a[9];
		out[7] = a[13];
		out[8] = a02;
		out[9] = a12;
		out[11] = a[14];
		out[12] = a03;
		out[13] = a13;
		out[14] = a23;
	} else {
		out[0] = a[0];
		out[1] = a[4];
		out[2] = a[8];
		out[3] = a[12];
		out[4] = a[1];
		out[5] = a[5];
		out[6] = a[9];
		out[7] = a[13];
		out[8] = a[2];
		out[9] = a[6];
		out[10] = a[10];
		out[11] = a[14];
		out[12] = a[3];
		out[13] = a[7];
		out[14] = a[11];
		out[15] = a[15];
	}
	return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
	var a00 = a[0],
		a01 = a[1],
		a02 = a[2],
		a03 = a[3];
	var a10 = a[4],
		a11 = a[5],
		a12 = a[6],
		a13 = a[7];
	var a20 = a[8],
		a21 = a[9],
		a22 = a[10],
		a23 = a[11];
	var a30 = a[12],
		a31 = a[13],
		a32 = a[14],
		a33 = a[15];
	var b00 = a00 * a11 - a01 * a10;
	var b01 = a00 * a12 - a02 * a10;
	var b02 = a00 * a13 - a03 * a10;
	var b03 = a01 * a12 - a02 * a11;
	var b04 = a01 * a13 - a03 * a11;
	var b05 = a02 * a13 - a03 * a12;
	var b06 = a20 * a31 - a21 * a30;
	var b07 = a20 * a32 - a22 * a30;
	var b08 = a20 * a33 - a23 * a30;
	var b09 = a21 * a32 - a22 * a31;
	var b10 = a21 * a33 - a23 * a31;
	var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
	var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (!det) {
		return null;
	}
	det = 1.0 / det;
	out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
	var a00 = a[0],
		a01 = a[1],
		a02 = a[2],
		a03 = a[3];
	var a10 = a[4],
		a11 = a[5],
		a12 = a[6],
		a13 = a[7];
	var a20 = a[8],
		a21 = a[9],
		a22 = a[10],
		a23 = a[11];
	var a30 = a[12],
		a31 = a[13],
		a32 = a[14],
		a33 = a[15];
	var b00 = a00 * a11 - a01 * a10;
	var b01 = a00 * a12 - a02 * a10;
	var b02 = a00 * a13 - a03 * a10;
	var b03 = a01 * a12 - a02 * a11;
	var b04 = a01 * a13 - a03 * a11;
	var b05 = a02 * a13 - a03 * a12;
	var b06 = a20 * a31 - a21 * a30;
	var b07 = a20 * a32 - a22 * a30;
	var b08 = a20 * a33 - a23 * a30;
	var b09 = a21 * a32 - a22 * a31;
	var b10 = a21 * a33 - a23 * a31;
	var b11 = a22 * a33 - a23 * a32;
	out[0] = a11 * b11 - a12 * b10 + a13 * b09;
	out[1] = a02 * b10 - a01 * b11 - a03 * b09;
	out[2] = a31 * b05 - a32 * b04 + a33 * b03;
	out[3] = a22 * b04 - a21 * b05 - a23 * b03;
	out[4] = a12 * b08 - a10 * b11 - a13 * b07;
	out[5] = a00 * b11 - a02 * b08 + a03 * b07;
	out[6] = a32 * b02 - a30 * b05 - a33 * b01;
	out[7] = a20 * b05 - a22 * b02 + a23 * b01;
	out[8] = a10 * b10 - a11 * b08 + a13 * b06;
	out[9] = a01 * b08 - a00 * b10 - a03 * b06;
	out[10] = a30 * b04 - a31 * b02 + a33 * b00;
	out[11] = a21 * b02 - a20 * b04 - a23 * b00;
	out[12] = a11 * b07 - a10 * b09 - a12 * b06;
	out[13] = a00 * b09 - a01 * b07 + a02 * b06;
	out[14] = a31 * b01 - a30 * b03 - a32 * b00;
	out[15] = a20 * b03 - a21 * b01 + a22 * b00;
	return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
	var a00 = a[0],
		a01 = a[1],
		a02 = a[2],
		a03 = a[3];
	var a10 = a[4],
		a11 = a[5],
		a12 = a[6],
		a13 = a[7];
	var a20 = a[8],
		a21 = a[9],
		a22 = a[10],
		a23 = a[11];
	var a30 = a[12],
		a31 = a[13],
		a32 = a[14],
		a33 = a[15];
	var b0 = a00 * a11 - a01 * a10;
	var b1 = a00 * a12 - a02 * a10;
	var b2 = a01 * a12 - a02 * a11;
	var b3 = a20 * a31 - a21 * a30;
	var b4 = a20 * a32 - a22 * a30;
	var b5 = a21 * a32 - a22 * a31;
	var b6 = a00 * b5 - a01 * b4 + a02 * b3;
	var b7 = a10 * b5 - a11 * b4 + a12 * b3;
	var b8 = a20 * b2 - a21 * b1 + a22 * b0;
	var b9 = a30 * b2 - a31 * b1 + a32 * b0; // Calculate the determinant
	return a13 * b6 - a03 * b7 + a33 * b8 - a23 * b9;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
	var a00 = a[0],
		a01 = a[1],
		a02 = a[2],
		a03 = a[3];
	var a10 = a[4],
		a11 = a[5],
		a12 = a[6],
		a13 = a[7];
	var a20 = a[8],
		a21 = a[9],
		a22 = a[10],
		a23 = a[11];
	var a30 = a[12],
		a31 = a[13],
		a32 = a[14],
		a33 = a[15]; // Cache only the current line of the second matrix
	var b0 = b[0],
		b1 = b[1],
		b2 = b[2],
		b3 = b[3];
	out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[4];
	b1 = b[5];
	b2 = b[6];
	b3 = b[7];
	out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[8];
	b1 = b[9];
	b2 = b[10];
	b3 = b[11];
	out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[12];
	b1 = b[13];
	b2 = b[14];
	b3 = b[15];
	out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
	var x = v[0],
		y = v[1],
		z = v[2];
	var a00, a01, a02, a03;
	var a10, a11, a12, a13;
	var a20, a21, a22, a23;
	if (a === out) {
		out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
		out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
		out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
		out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
	} else {
		a00 = a[0];
		a01 = a[1];
		a02 = a[2];
		a03 = a[3];
		a10 = a[4];
		a11 = a[5];
		a12 = a[6];
		a13 = a[7];
		a20 = a[8];
		a21 = a[9];
		a22 = a[10];
		a23 = a[11];
		out[0] = a00;
		out[1] = a01;
		out[2] = a02;
		out[3] = a03;
		out[4] = a10;
		out[5] = a11;
		out[6] = a12;
		out[7] = a13;
		out[8] = a20;
		out[9] = a21;
		out[10] = a22;
		out[11] = a23;
		out[12] = a00 * x + a10 * y + a20 * z + a[12];
		out[13] = a01 * x + a11 * y + a21 * z + a[13];
		out[14] = a02 * x + a12 * y + a22 * z + a[14];
		out[15] = a03 * x + a13 * y + a23 * z + a[15];
	}
	return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
	var x = v[0],
		y = v[1],
		z = v[2];
	out[0] = a[0] * x;
	out[1] = a[1] * x;
	out[2] = a[2] * x;
	out[3] = a[3] * x;
	out[4] = a[4] * y;
	out[5] = a[5] * y;
	out[6] = a[6] * y;
	out[7] = a[7] * y;
	out[8] = a[8] * z;
	out[9] = a[9] * z;
	out[10] = a[10] * z;
	out[11] = a[11] * z;
	out[12] = a[12];
	out[13] = a[13];
	out[14] = a[14];
	out[15] = a[15];
	return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
	var x = axis[0],
		y = axis[1],
		z = axis[2];
	var len = Math.hypot(x, y, z);
	var s, c, t;
	var a00, a01, a02, a03;
	var a10, a11, a12, a13;
	var a20, a21, a22, a23;
	var b00, b01, b02;
	var b10, b11, b12;
	var b20, b21, b22;
	if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
		return null;
	}
	len = 1 / len;
	x *= len;
	y *= len;
	z *= len;
	s = Math.sin(rad);
	c = Math.cos(rad);
	t = 1 - c;
	a00 = a[0];
	a01 = a[1];
	a02 = a[2];
	a03 = a[3];
	a10 = a[4];
	a11 = a[5];
	a12 = a[6];
	a13 = a[7];
	a20 = a[8];
	a21 = a[9];
	a22 = a[10];
	a23 = a[11]; // Construct the elements of the rotation matrix
	b00 = x * x * t + c;
	b01 = y * x * t + z * s;
	b02 = z * x * t - y * s;
	b10 = x * y * t - z * s;
	b11 = y * y * t + c;
	b12 = z * y * t + x * s;
	b20 = x * z * t + y * s;
	b21 = y * z * t - x * s;
	b22 = z * z * t + c; // Perform rotation-specific matrix multiplication
	out[0] = a00 * b00 + a10 * b01 + a20 * b02;
	out[1] = a01 * b00 + a11 * b01 + a21 * b02;
	out[2] = a02 * b00 + a12 * b01 + a22 * b02;
	out[3] = a03 * b00 + a13 * b01 + a23 * b02;
	out[4] = a00 * b10 + a10 * b11 + a20 * b12;
	out[5] = a01 * b10 + a11 * b11 + a21 * b12;
	out[6] = a02 * b10 + a12 * b11 + a22 * b12;
	out[7] = a03 * b10 + a13 * b11 + a23 * b12;
	out[8] = a00 * b20 + a10 * b21 + a20 * b22;
	out[9] = a01 * b20 + a11 * b21 + a21 * b22;
	out[10] = a02 * b20 + a12 * b21 + a22 * b22;
	out[11] = a03 * b20 + a13 * b21 + a23 * b22;
	if (a !== out) {
		// If the source and destination differ, copy the unchanged last row
		out[12] = a[12];
		out[13] = a[13];
		out[14] = a[14];
		out[15] = a[15];
	}
	return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
	var s = Math.sin(rad);
	var c = Math.cos(rad);
	var a10 = a[4];
	var a11 = a[5];
	var a12 = a[6];
	var a13 = a[7];
	var a20 = a[8];
	var a21 = a[9];
	var a22 = a[10];
	var a23 = a[11];
	if (a !== out) {
		// If the source and destination differ, copy the unchanged rows
		out[0] = a[0];
		out[1] = a[1];
		out[2] = a[2];
		out[3] = a[3];
		out[12] = a[12];
		out[13] = a[13];
		out[14] = a[14];
		out[15] = a[15];
	} // Perform axis-specific matrix multiplication
	out[4] = a10 * c + a20 * s;
	out[5] = a11 * c + a21 * s;
	out[6] = a12 * c + a22 * s;
	out[7] = a13 * c + a23 * s;
	out[8] = a20 * c - a10 * s;
	out[9] = a21 * c - a11 * s;
	out[10] = a22 * c - a12 * s;
	out[11] = a23 * c - a13 * s;
	return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
	var s = Math.sin(rad);
	var c = Math.cos(rad);
	var a00 = a[0];
	var a01 = a[1];
	var a02 = a[2];
	var a03 = a[3];
	var a20 = a[8];
	var a21 = a[9];
	var a22 = a[10];
	var a23 = a[11];
	if (a !== out) {
		// If the source and destination differ, copy the unchanged rows
		out[4] = a[4];
		out[5] = a[5];
		out[6] = a[6];
		out[7] = a[7];
		out[12] = a[12];
		out[13] = a[13];
		out[14] = a[14];
		out[15] = a[15];
	} // Perform axis-specific matrix multiplication
	out[0] = a00 * c - a20 * s;
	out[1] = a01 * c - a21 * s;
	out[2] = a02 * c - a22 * s;
	out[3] = a03 * c - a23 * s;
	out[8] = a00 * s + a20 * c;
	out[9] = a01 * s + a21 * c;
	out[10] = a02 * s + a22 * c;
	out[11] = a03 * s + a23 * c;
	return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
	var s = Math.sin(rad);
	var c = Math.cos(rad);
	var a00 = a[0];
	var a01 = a[1];
	var a02 = a[2];
	var a03 = a[3];
	var a10 = a[4];
	var a11 = a[5];
	var a12 = a[6];
	var a13 = a[7];
	if (a !== out) {
		// If the source and destination differ, copy the unchanged last row
		out[8] = a[8];
		out[9] = a[9];
		out[10] = a[10];
		out[11] = a[11];
		out[12] = a[12];
		out[13] = a[13];
		out[14] = a[14];
		out[15] = a[15];
	} // Perform axis-specific matrix multiplication
	out[0] = a00 * c + a10 * s;
	out[1] = a01 * c + a11 * s;
	out[2] = a02 * c + a12 * s;
	out[3] = a03 * c + a13 * s;
	out[4] = a10 * c - a00 * s;
	out[5] = a11 * c - a01 * s;
	out[6] = a12 * c - a02 * s;
	out[7] = a13 * c - a03 * s;
	return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = 1;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 1;
	out[11] = 0;
	out[12] = v[0];
	out[13] = v[1];
	out[14] = v[2];
	out[15] = 1;
	return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
	out[0] = v[0];
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = v[1];
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = v[2];
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
	var x = axis[0],
		y = axis[1],
		z = axis[2];
	var len = Math.hypot(x, y, z);
	var s, c, t;
	if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
		return null;
	}
	len = 1 / len;
	x *= len;
	y *= len;
	z *= len;
	s = Math.sin(rad);
	c = Math.cos(rad);
	t = 1 - c; // Perform rotation-specific matrix multiplication
	out[0] = x * x * t + c;
	out[1] = y * x * t + z * s;
	out[2] = z * x * t - y * s;
	out[3] = 0;
	out[4] = x * y * t - z * s;
	out[5] = y * y * t + c;
	out[6] = z * y * t + x * s;
	out[7] = 0;
	out[8] = x * z * t + y * s;
	out[9] = y * z * t - x * s;
	out[10] = z * z * t + c;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
	var s = Math.sin(rad);
	var c = Math.cos(rad); // Perform axis-specific matrix multiplication
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = c;
	out[6] = s;
	out[7] = 0;
	out[8] = 0;
	out[9] = -s;
	out[10] = c;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
	var s = Math.sin(rad);
	var c = Math.cos(rad); // Perform axis-specific matrix multiplication
	out[0] = c;
	out[1] = 0;
	out[2] = -s;
	out[3] = 0;
	out[4] = 0;
	out[5] = 1;
	out[6] = 0;
	out[7] = 0;
	out[8] = s;
	out[9] = 0;
	out[10] = c;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
	var s = Math.sin(rad);
	var c = Math.cos(rad); // Perform axis-specific matrix multiplication
	out[0] = c;
	out[1] = s;
	out[2] = 0;
	out[3] = 0;
	out[4] = -s;
	out[5] = c;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 1;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
	// Quaternion math
	var x = q[0],
		y = q[1],
		z = q[2],
		w = q[3];
	var x2 = x + x;
	var y2 = y + y;
	var z2 = z + z;
	var xx = x * x2;
	var xy = x * y2;
	var xz = x * z2;
	var yy = y * y2;
	var yz = y * z2;
	var zz = z * z2;
	var wx = w * x2;
	var wy = w * y2;
	var wz = w * z2;
	out[0] = 1 - (yy + zz);
	out[1] = xy + wz;
	out[2] = xz - wy;
	out[3] = 0;
	out[4] = xy - wz;
	out[5] = 1 - (xx + zz);
	out[6] = yz + wx;
	out[7] = 0;
	out[8] = xz + wy;
	out[9] = yz - wx;
	out[10] = 1 - (xx + yy);
	out[11] = 0;
	out[12] = v[0];
	out[13] = v[1];
	out[14] = v[2];
	out[15] = 1;
	return out;
}

/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
	var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
	var bx = -a[0],
		by = -a[1],
		bz = -a[2],
		bw = a[3],
		ax = a[4],
		ay = a[5],
		az = a[6],
		aw = a[7];
	var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense
	if (magnitude > 0) {
		translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
		translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
		translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
	} else {
		translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
		translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
		translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
	}
	fromRotationTranslation(out, a, translation);
	return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
	out[0] = mat[12];
	out[1] = mat[13];
	out[2] = mat[14];
	return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
	var m11 = mat[0];
	var m12 = mat[1];
	var m13 = mat[2];
	var m21 = mat[4];
	var m22 = mat[5];
	var m23 = mat[6];
	var m31 = mat[8];
	var m32 = mat[9];
	var m33 = mat[10];
	out[0] = Math.hypot(m11, m12, m13);
	out[1] = Math.hypot(m21, m22, m23);
	out[2] = Math.hypot(m31, m32, m33);
	return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
	var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
	getScaling(scaling, mat);
	var is1 = 1 / scaling[0];
	var is2 = 1 / scaling[1];
	var is3 = 1 / scaling[2];
	var sm11 = mat[0] * is1;
	var sm12 = mat[1] * is2;
	var sm13 = mat[2] * is3;
	var sm21 = mat[4] * is1;
	var sm22 = mat[5] * is2;
	var sm23 = mat[6] * is3;
	var sm31 = mat[8] * is1;
	var sm32 = mat[9] * is2;
	var sm33 = mat[10] * is3;
	var trace = sm11 + sm22 + sm33;
	var S = 0;
	if (trace > 0) {
		S = Math.sqrt(trace + 1.0) * 2;
		out[3] = 0.25 * S;
		out[0] = (sm23 - sm32) / S;
		out[1] = (sm31 - sm13) / S;
		out[2] = (sm12 - sm21) / S;
	} else if (sm11 > sm22 && sm11 > sm33) {
		S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
		out[3] = (sm23 - sm32) / S;
		out[0] = 0.25 * S;
		out[1] = (sm12 + sm21) / S;
		out[2] = (sm31 + sm13) / S;
	} else if (sm22 > sm33) {
		S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
		out[3] = (sm31 - sm13) / S;
		out[0] = (sm12 + sm21) / S;
		out[1] = 0.25 * S;
		out[2] = (sm23 + sm32) / S;
	} else {
		S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
		out[3] = (sm12 - sm21) / S;
		out[0] = (sm31 + sm13) / S;
		out[1] = (sm23 + sm32) / S;
		out[2] = 0.25 * S;
	}
	return out;
}

/**
 * Decomposes a transformation matrix into its rotation, translation
 * and scale components. Returns only the rotation component
 * @param  {quat} out_r Quaternion to receive the rotation component
 * @param  {vec3} out_t Vector to receive the translation vector
 * @param  {vec3} out_s Vector to receive the scaling factor
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @returns {quat} out_r
 */

function decompose(out_r, out_t, out_s, mat) {
	out_t[0] = mat[12];
	out_t[1] = mat[13];
	out_t[2] = mat[14];
	var m11 = mat[0];
	var m12 = mat[1];
	var m13 = mat[2];
	var m21 = mat[4];
	var m22 = mat[5];
	var m23 = mat[6];
	var m31 = mat[8];
	var m32 = mat[9];
	var m33 = mat[10];
	out_s[0] = Math.hypot(m11, m12, m13);
	out_s[1] = Math.hypot(m21, m22, m23);
	out_s[2] = Math.hypot(m31, m32, m33);
	var is1 = 1 / out_s[0];
	var is2 = 1 / out_s[1];
	var is3 = 1 / out_s[2];
	var sm11 = m11 * is1;
	var sm12 = m12 * is2;
	var sm13 = m13 * is3;
	var sm21 = m21 * is1;
	var sm22 = m22 * is2;
	var sm23 = m23 * is3;
	var sm31 = m31 * is1;
	var sm32 = m32 * is2;
	var sm33 = m33 * is3;
	var trace = sm11 + sm22 + sm33;
	var S = 0;
	if (trace > 0) {
		S = Math.sqrt(trace + 1.0) * 2;
		out_r[3] = 0.25 * S;
		out_r[0] = (sm23 - sm32) / S;
		out_r[1] = (sm31 - sm13) / S;
		out_r[2] = (sm12 - sm21) / S;
	} else if (sm11 > sm22 && sm11 > sm33) {
		S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
		out_r[3] = (sm23 - sm32) / S;
		out_r[0] = 0.25 * S;
		out_r[1] = (sm12 + sm21) / S;
		out_r[2] = (sm31 + sm13) / S;
	} else if (sm22 > sm33) {
		S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
		out_r[3] = (sm31 - sm13) / S;
		out_r[0] = (sm12 + sm21) / S;
		out_r[1] = 0.25 * S;
		out_r[2] = (sm23 + sm32) / S;
	} else {
		S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
		out_r[3] = (sm12 - sm21) / S;
		out_r[0] = (sm31 + sm13) / S;
		out_r[1] = (sm23 + sm32) / S;
		out_r[2] = 0.25 * S;
	}
	return out_r;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
	// Quaternion math
	var x = q[0],
		y = q[1],
		z = q[2],
		w = q[3];
	var x2 = x + x;
	var y2 = y + y;
	var z2 = z + z;
	var xx = x * x2;
	var xy = x * y2;
	var xz = x * z2;
	var yy = y * y2;
	var yz = y * z2;
	var zz = z * z2;
	var wx = w * x2;
	var wy = w * y2;
	var wz = w * z2;
	var sx = s[0];
	var sy = s[1];
	var sz = s[2];
	out[0] = (1 - (yy + zz)) * sx;
	out[1] = (xy + wz) * sx;
	out[2] = (xz - wy) * sx;
	out[3] = 0;
	out[4] = (xy - wz) * sy;
	out[5] = (1 - (xx + zz)) * sy;
	out[6] = (yz + wx) * sy;
	out[7] = 0;
	out[8] = (xz + wy) * sz;
	out[9] = (yz - wx) * sz;
	out[10] = (1 - (xx + yy)) * sz;
	out[11] = 0;
	out[12] = v[0];
	out[13] = v[1];
	out[14] = v[2];
	out[15] = 1;
	return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
	// Quaternion math
	var x = q[0],
		y = q[1],
		z = q[2],
		w = q[3];
	var x2 = x + x;
	var y2 = y + y;
	var z2 = z + z;
	var xx = x * x2;
	var xy = x * y2;
	var xz = x * z2;
	var yy = y * y2;
	var yz = y * z2;
	var zz = z * z2;
	var wx = w * x2;
	var wy = w * y2;
	var wz = w * z2;
	var sx = s[0];
	var sy = s[1];
	var sz = s[2];
	var ox = o[0];
	var oy = o[1];
	var oz = o[2];
	var out0 = (1 - (yy + zz)) * sx;
	var out1 = (xy + wz) * sx;
	var out2 = (xz - wy) * sx;
	var out4 = (xy - wz) * sy;
	var out5 = (1 - (xx + zz)) * sy;
	var out6 = (yz + wx) * sy;
	var out8 = (xz + wy) * sz;
	var out9 = (yz - wx) * sz;
	var out10 = (1 - (xx + yy)) * sz;
	out[0] = out0;
	out[1] = out1;
	out[2] = out2;
	out[3] = 0;
	out[4] = out4;
	out[5] = out5;
	out[6] = out6;
	out[7] = 0;
	out[8] = out8;
	out[9] = out9;
	out[10] = out10;
	out[11] = 0;
	out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
	out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
	out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
	out[15] = 1;
	return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
	var x = q[0],
		y = q[1],
		z = q[2],
		w = q[3];
	var x2 = x + x;
	var y2 = y + y;
	var z2 = z + z;
	var xx = x * x2;
	var yx = y * x2;
	var yy = y * y2;
	var zx = z * x2;
	var zy = z * y2;
	var zz = z * z2;
	var wx = w * x2;
	var wy = w * y2;
	var wz = w * z2;
	out[0] = 1 - yy - zz;
	out[1] = yx + wz;
	out[2] = zx - wy;
	out[3] = 0;
	out[4] = yx - wz;
	out[5] = 1 - xx - zz;
	out[6] = zy + wx;
	out[7] = 0;
	out[8] = zx + wy;
	out[9] = zy - wx;
	out[10] = 1 - xx - yy;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
	var rl = 1 / (right - left);
	var tb = 1 / (top - bottom);
	var nf = 1 / (near - far);
	out[0] = near * 2 * rl;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = near * 2 * tb;
	out[6] = 0;
	out[7] = 0;
	out[8] = (right + left) * rl;
	out[9] = (top + bottom) * tb;
	out[10] = (far + near) * nf;
	out[11] = -1;
	out[12] = 0;
	out[13] = 0;
	out[14] = far * near * 2 * nf;
	out[15] = 0;
	return out;
}

/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveNO(out, fovy, aspect, near, far) {
	var f = 1.0 / Math.tan(fovy / 2);
	out[0] = f / aspect;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = f;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[11] = -1;
	out[12] = 0;
	out[13] = 0;
	out[15] = 0;
	if (far != null && far !== Infinity) {
		var nf = 1 / (near - far);
		out[10] = (far + near) * nf;
		out[14] = 2 * far * near * nf;
	} else {
		out[10] = -1;
		out[14] = -2 * near;
	}
	return out;
}

/**
 * Alias for {@link mat4.perspectiveNO}
 * @function
 */

var perspective = perspectiveNO;

/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveZO(out, fovy, aspect, near, far) {
	var f = 1.0 / Math.tan(fovy / 2);
	out[0] = f / aspect;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = f;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[11] = -1;
	out[12] = 0;
	out[13] = 0;
	out[15] = 0;
	if (far != null && far !== Infinity) {
		var nf = 1 / (near - far);
		out[10] = far * nf;
		out[14] = far * near * nf;
	} else {
		out[10] = -1;
		out[14] = -near;
	}
	return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
	var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
	var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
	var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
	var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
	var xScale = 2.0 / (leftTan + rightTan);
	var yScale = 2.0 / (upTan + downTan);
	out[0] = xScale;
	out[1] = 0.0;
	out[2] = 0.0;
	out[3] = 0.0;
	out[4] = 0.0;
	out[5] = yScale;
	out[6] = 0.0;
	out[7] = 0.0;
	out[8] = -((leftTan - rightTan) * xScale * 0.5);
	out[9] = (upTan - downTan) * yScale * 0.5;
	out[10] = far / (near - far);
	out[11] = -1.0;
	out[12] = 0.0;
	out[13] = 0.0;
	out[14] = far * near / (near - far);
	out[15] = 0.0;
	return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoNO(out, left, right, bottom, top, near, far) {
	var lr = 1 / (left - right);
	var bt = 1 / (bottom - top);
	var nf = 1 / (near - far);
	out[0] = -2 * lr;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = -2 * bt;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 2 * nf;
	out[11] = 0;
	out[12] = (left + right) * lr;
	out[13] = (top + bottom) * bt;
	out[14] = (far + near) * nf;
	out[15] = 1;
	return out;
}

/**
 * Alias for {@link mat4.orthoNO}
 * @function
 */

var ortho = orthoNO;

/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoZO(out, left, right, bottom, top, near, far) {
	var lr = 1 / (left - right);
	var bt = 1 / (bottom - top);
	var nf = 1 / (near - far);
	out[0] = -2 * lr;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = -2 * bt;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = nf;
	out[11] = 0;
	out[12] = (left + right) * lr;
	out[13] = (top + bottom) * bt;
	out[14] = near * nf;
	out[15] = 1;
	return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
	var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
	var eyex = eye[0];
	var eyey = eye[1];
	var eyez = eye[2];
	var upx = up[0];
	var upy = up[1];
	var upz = up[2];
	var centerx = center[0];
	var centery = center[1];
	var centerz = center[2];
	if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
		return identity(out);
	}
	z0 = eyex - centerx;
	z1 = eyey - centery;
	z2 = eyez - centerz;
	len = 1 / Math.hypot(z0, z1, z2);
	z0 *= len;
	z1 *= len;
	z2 *= len;
	x0 = upy * z2 - upz * z1;
	x1 = upz * z0 - upx * z2;
	x2 = upx * z1 - upy * z0;
	len = Math.hypot(x0, x1, x2);
	if (!len) {
		x0 = 0;
		x1 = 0;
		x2 = 0;
	} else {
		len = 1 / len;
		x0 *= len;
		x1 *= len;
		x2 *= len;
	}
	y0 = z1 * x2 - z2 * x1;
	y1 = z2 * x0 - z0 * x2;
	y2 = z0 * x1 - z1 * x0;
	len = Math.hypot(y0, y1, y2);
	if (!len) {
		y0 = 0;
		y1 = 0;
		y2 = 0;
	} else {
		len = 1 / len;
		y0 *= len;
		y1 *= len;
		y2 *= len;
	}
	out[0] = x0;
	out[1] = y0;
	out[2] = z0;
	out[3] = 0;
	out[4] = x1;
	out[5] = y1;
	out[6] = z1;
	out[7] = 0;
	out[8] = x2;
	out[9] = y2;
	out[10] = z2;
	out[11] = 0;
	out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	out[15] = 1;
	return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
	var eyex = eye[0],
		eyey = eye[1],
		eyez = eye[2],
		upx = up[0],
		upy = up[1],
		upz = up[2];
	var z0 = eyex - target[0],
		z1 = eyey - target[1],
		z2 = eyez - target[2];
	var len = z0 * z0 + z1 * z1 + z2 * z2;
	if (len > 0) {
		len = 1 / Math.sqrt(len);
		z0 *= len;
		z1 *= len;
		z2 *= len;
	}
	var x0 = upy * z2 - upz * z1,
		x1 = upz * z0 - upx * z2,
		x2 = upx * z1 - upy * z0;
	len = x0 * x0 + x1 * x1 + x2 * x2;
	if (len > 0) {
		len = 1 / Math.sqrt(len);
		x0 *= len;
		x1 *= len;
		x2 *= len;
	}
	out[0] = x0;
	out[1] = x1;
	out[2] = x2;
	out[3] = 0;
	out[4] = z1 * x2 - z2 * x1;
	out[5] = z2 * x0 - z0 * x2;
	out[6] = z0 * x1 - z1 * x0;
	out[7] = 0;
	out[8] = z0;
	out[9] = z1;
	out[10] = z2;
	out[11] = 0;
	out[12] = eyex;
	out[13] = eyey;
	out[14] = eyez;
	out[15] = 1;
	return out;
}

/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
	return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
	return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	out[3] = a[3] + b[3];
	out[4] = a[4] + b[4];
	out[5] = a[5] + b[5];
	out[6] = a[6] + b[6];
	out[7] = a[7] + b[7];
	out[8] = a[8] + b[8];
	out[9] = a[9] + b[9];
	out[10] = a[10] + b[10];
	out[11] = a[11] + b[11];
	out[12] = a[12] + b[12];
	out[13] = a[13] + b[13];
	out[14] = a[14] + b[14];
	out[15] = a[15] + b[15];
	return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	out[3] = a[3] - b[3];
	out[4] = a[4] - b[4];
	out[5] = a[5] - b[5];
	out[6] = a[6] - b[6];
	out[7] = a[7] - b[7];
	out[8] = a[8] - b[8];
	out[9] = a[9] - b[9];
	out[10] = a[10] - b[10];
	out[11] = a[11] - b[11];
	out[12] = a[12] - b[12];
	out[13] = a[13] - b[13];
	out[14] = a[14] - b[14];
	out[15] = a[15] - b[15];
	return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	out[3] = a[3] * b;
	out[4] = a[4] * b;
	out[5] = a[5] * b;
	out[6] = a[6] * b;
	out[7] = a[7] * b;
	out[8] = a[8] * b;
	out[9] = a[9] * b;
	out[10] = a[10] * b;
	out[11] = a[11] * b;
	out[12] = a[12] * b;
	out[13] = a[13] * b;
	out[14] = a[14] * b;
	out[15] = a[15] * b;
	return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
	out[0] = a[0] + b[0] * scale;
	out[1] = a[1] + b[1] * scale;
	out[2] = a[2] + b[2] * scale;
	out[3] = a[3] + b[3] * scale;
	out[4] = a[4] + b[4] * scale;
	out[5] = a[5] + b[5] * scale;
	out[6] = a[6] + b[6] * scale;
	out[7] = a[7] + b[7] * scale;
	out[8] = a[8] + b[8] * scale;
	out[9] = a[9] + b[9] * scale;
	out[10] = a[10] + b[10] * scale;
	out[11] = a[11] + b[11] * scale;
	out[12] = a[12] + b[12] * scale;
	out[13] = a[13] + b[13] * scale;
	out[14] = a[14] + b[14] * scale;
	out[15] = a[15] + b[15] * scale;
	return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3];
	var a4 = a[4],
		a5 = a[5],
		a6 = a[6],
		a7 = a[7];
	var a8 = a[8],
		a9 = a[9],
		a10 = a[10],
		a11 = a[11];
	var a12 = a[12],
		a13 = a[13],
		a14 = a[14],
		a15 = a[15];
	var b0 = b[0],
		b1 = b[1],
		b2 = b[2],
		b3 = b[3];
	var b4 = b[4],
		b5 = b[5],
		b6 = b[6],
		b7 = b[7];
	var b8 = b[8],
		b9 = b[9],
		b10 = b[10],
		b11 = b[11];
	var b12 = b[12],
		b13 = b[13],
		b14 = b[14],
		b15 = b[15];
	return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./src/util/gl-matrix/quat.js":
/*!************************************!*\
  !*** ./src/util/gl-matrix/quat.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   calculateW: () => (/* binding */ calculateW),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   conjugate: () => (/* binding */ conjugate),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   exp: () => (/* binding */ exp),
/* harmony export */   fromEuler: () => (/* binding */ fromEuler),
/* harmony export */   fromMat3: () => (/* binding */ fromMat3),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   getAngle: () => (/* binding */ getAngle),
/* harmony export */   getAxisAngle: () => (/* binding */ getAxisAngle),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   ln: () => (/* binding */ ln),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pow: () => (/* binding */ pow),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   rotationTo: () => (/* binding */ rotationTo),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setAxes: () => (/* binding */ setAxes),
/* harmony export */   setAxisAngle: () => (/* binding */ setAxisAngle),
/* harmony export */   slerp: () => (/* binding */ slerp),
/* harmony export */   sqlerp: () => (/* binding */ sqlerp),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/util/gl-matrix/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3.js */ "./src/util/gl-matrix/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./src/util/gl-matrix/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec4.js */ "./src/util/gl-matrix/vec4.js");





/**
 * Quaternion in the format XYZW
 * @module quat
 */
/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
	if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
		out[0] = 0;
		out[1] = 0;
		out[2] = 0;
	}
	out[3] = 1;
	return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
	out[0] = 0;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
	rad = rad * 0.5;
	var s = Math.sin(rad);
	out[0] = s * axis[0];
	out[1] = s * axis[1];
	out[2] = s * axis[2];
	out[3] = Math.cos(rad);
	return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
	var rad = Math.acos(q[3]) * 2.0;
	var s = Math.sin(rad / 2.0);
	if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
		out_axis[0] = q[0] / s;
		out_axis[1] = q[1] / s;
		out_axis[2] = q[2] / s;
	} else {
		// If s is zero, return any axis (no rotation - axis does not matter)
		out_axis[0] = 1;
		out_axis[1] = 0;
		out_axis[2] = 0;
	}
	return rad;
}

/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
	var dotproduct = dot(a, b);
	return Math.acos(2 * dotproduct * dotproduct - 1);
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
	var ax = a[0],
		ay = a[1],
		az = a[2],
		aw = a[3];
	var bx = b[0],
		by = b[1],
		bz = b[2],
		bw = b[3];
	out[0] = ax * bw + aw * bx + ay * bz - az * by;
	out[1] = ay * bw + aw * by + az * bx - ax * bz;
	out[2] = az * bw + aw * bz + ax * by - ay * bx;
	out[3] = aw * bw - ax * bx - ay * by - az * bz;
	return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
	rad *= 0.5;
	var ax = a[0],
		ay = a[1],
		az = a[2],
		aw = a[3];
	var bx = Math.sin(rad),
		bw = Math.cos(rad);
	out[0] = ax * bw + aw * bx;
	out[1] = ay * bw + az * bx;
	out[2] = az * bw - ay * bx;
	out[3] = aw * bw - ax * bx;
	return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
	rad *= 0.5;
	var ax = a[0],
		ay = a[1],
		az = a[2],
		aw = a[3];
	var by = Math.sin(rad),
		bw = Math.cos(rad);
	out[0] = ax * bw - az * by;
	out[1] = ay * bw + aw * by;
	out[2] = az * bw + ax * by;
	out[3] = aw * bw - ay * by;
	return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
	rad *= 0.5;
	var ax = a[0],
		ay = a[1],
		az = a[2],
		aw = a[3];
	var bz = Math.sin(rad),
		bw = Math.cos(rad);
	out[0] = ax * bw + ay * bz;
	out[1] = ay * bw - ax * bz;
	out[2] = az * bw + aw * bz;
	out[3] = aw * bw - az * bz;
	return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
	var x = a[0],
		y = a[1],
		z = a[2];
	out[0] = x;
	out[1] = y;
	out[2] = z;
	out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
	return out;
}

/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
	var x = a[0],
		y = a[1],
		z = a[2],
		w = a[3];
	var r = Math.sqrt(x * x + y * y + z * z);
	var et = Math.exp(w);
	var s = r > 0 ? et * Math.sin(r) / r : 0;
	out[0] = x * s;
	out[1] = y * s;
	out[2] = z * s;
	out[3] = et * Math.cos(r);
	return out;
}

/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
	var x = a[0],
		y = a[1],
		z = a[2],
		w = a[3];
	var r = Math.sqrt(x * x + y * y + z * z);
	var t = r > 0 ? Math.atan2(r, w) / r : 0;
	out[0] = x * t;
	out[1] = y * t;
	out[2] = z * t;
	out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
	return out;
}

/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
	ln(out, a);
	scale(out, out, b);
	exp(out, out);
	return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
	// benchmarks:
	//    http://jsperf.com/quaternion-slerp-implementations
	var ax = a[0],
		ay = a[1],
		az = a[2],
		aw = a[3];
	var bx = b[0],
		by = b[1],
		bz = b[2],
		bw = b[3];
	var omega, cosom, sinom, scale0, scale1; // calc cosine
	cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)
	if (cosom < 0.0) {
		cosom = -cosom;
		bx = -bx;
		by = -by;
		bz = -bz;
		bw = -bw;
	} // calculate coefficients
	if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
		// standard case (slerp)
		omega = Math.acos(cosom);
		sinom = Math.sin(omega);
		scale0 = Math.sin((1.0 - t) * omega) / sinom;
		scale1 = Math.sin(t * omega) / sinom;
	} else {
		// "from" and "to" quaternions are very close
		//  ... so we can do a linear interpolation
		scale0 = 1.0 - t;
		scale1 = t;
	} // calculate final values
	out[0] = scale0 * ax + scale1 * bx;
	out[1] = scale0 * ay + scale1 * by;
	out[2] = scale0 * az + scale1 * bz;
	out[3] = scale0 * aw + scale1 * bw;
	return out;
}

/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random(out) {
	// Implementation of http://planning.cs.uiuc.edu/node198.html
	// TODO: Calling random 3 times is probably not the fastest solution
	var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
	var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
	var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
	var sqrt1MinusU1 = Math.sqrt(1 - u1);
	var sqrtU1 = Math.sqrt(u1);
	out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
	out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
	out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
	out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
	return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3];
	var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
	var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
	out[0] = -a0 * invDot;
	out[1] = -a1 * invDot;
	out[2] = -a2 * invDot;
	out[3] = a3 * invDot;
	return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	out[2] = -a[2];
	out[3] = a[3];
	return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
	// Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
	// article "Quaternion Calculus and Fast Animation".
	var fTrace = m[0] + m[4] + m[8];
	var fRoot;
	if (fTrace > 0.0) {
		// |w| > 1/2, may as well choose w > 1/2
		fRoot = Math.sqrt(fTrace + 1.0); // 2w
		out[3] = 0.5 * fRoot;
		fRoot = 0.5 / fRoot; // 1/(4w)
		out[0] = (m[5] - m[7]) * fRoot;
		out[1] = (m[6] - m[2]) * fRoot;
		out[2] = (m[1] - m[3]) * fRoot;
	} else {
		// |w| <= 1/2
		var i = 0;
		if (m[4] > m[0]) i = 1;
		if (m[8] > m[i * 3 + i]) i = 2;
		var j = (i + 1) % 3;
		var k = (i + 2) % 3;
		fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
		out[i] = 0.5 * fRoot;
		fRoot = 0.5 / fRoot;
		out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
		out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
		out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
	}
	return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z using the provided intrinsic order for the conversion.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} x Angle to rotate around X axis in degrees.
 * @param {y} y Angle to rotate around Y axis in degrees.
 * @param {z} z Angle to rotate around Z axis in degrees.
 * @param {'zyx'|'xyz'|'yxz'|'yzx'|'zxy'|'zyx'} order Intrinsic order for conversion, default is zyx.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
	var order = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _common_js__WEBPACK_IMPORTED_MODULE_0__.ANGLE_ORDER;
	var halfToRad = Math.PI / 360;
	x *= halfToRad;
	z *= halfToRad;
	y *= halfToRad;
	var sx = Math.sin(x);
	var cx = Math.cos(x);
	var sy = Math.sin(y);
	var cy = Math.cos(y);
	var sz = Math.sin(z);
	var cz = Math.cos(z);
	switch (order) {
		case "xyz":
			out[0] = sx * cy * cz + cx * sy * sz;
			out[1] = cx * sy * cz - sx * cy * sz;
			out[2] = cx * cy * sz + sx * sy * cz;
			out[3] = cx * cy * cz - sx * sy * sz;
			break;
		case "xzy":
			out[0] = sx * cy * cz - cx * sy * sz;
			out[1] = cx * sy * cz - sx * cy * sz;
			out[2] = cx * cy * sz + sx * sy * cz;
			out[3] = cx * cy * cz + sx * sy * sz;
			break;
		case "yxz":
			out[0] = sx * cy * cz + cx * sy * sz;
			out[1] = cx * sy * cz - sx * cy * sz;
			out[2] = cx * cy * sz - sx * sy * cz;
			out[3] = cx * cy * cz + sx * sy * sz;
			break;
		case "yzx":
			out[0] = sx * cy * cz + cx * sy * sz;
			out[1] = cx * sy * cz + sx * cy * sz;
			out[2] = cx * cy * sz - sx * sy * cz;
			out[3] = cx * cy * cz - sx * sy * sz;
			break;
		case "zxy":
			out[0] = sx * cy * cz - cx * sy * sz;
			out[1] = cx * sy * cz + sx * cy * sz;
			out[2] = cx * cy * sz + sx * sy * cz;
			out[3] = cx * cy * cz - sx * sy * sz;
			break;
		case "zyx":
			out[0] = sx * cy * cz - cx * sy * sz;
			out[1] = cx * sy * cz + sx * cy * sz;
			out[2] = cx * cy * sz - sx * sy * cz;
			out[3] = cx * cy * cz + sx * sy * sz;
			break;
		default:
			throw new Error('Unknown angle order ' + order);
	}
	return out;
}

/**
 * Returns a string representation of a quaternion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
	return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.clone;
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.fromValues;
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.copy;
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.add;
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.lerp;
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.length;
/**
 * Alias for {@link quat.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.squaredLength;
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.exactEquals;

/**
 * Returns whether or not the quaternions point approximately to the same direction.
 *
 * Both quaternions are assumed to be unit length.
 *
 * @param {ReadonlyQuat} a The first unit quaternion.
 * @param {ReadonlyQuat} b The second unit quaternion.
 * @returns {Boolean} True if the quaternions are equal, false otherwise.
 */

function equals(a, b) {
	return Math.abs(_vec4_js__WEBPACK_IMPORTED_MODULE_3__.dot(a, b)) >= 1 - _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON;
}

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
	var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.create();
	var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(1, 0, 0);
	var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(0, 1, 0);
	return function (out, a, b) {
		var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.dot(a, b);
		if (dot < -0.999999) {
			_vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, xUnitVec3, a);
			if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__.len(tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, yUnitVec3, a);
			_vec3_js__WEBPACK_IMPORTED_MODULE_2__.normalize(tmpvec3, tmpvec3);
			setAxisAngle(out, tmpvec3, Math.PI);
			return out;
		} else if (dot > 0.999999) {
			out[0] = 0;
			out[1] = 0;
			out[2] = 0;
			out[3] = 1;
			return out;
		} else {
			_vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, a, b);
			out[0] = tmpvec3[0];
			out[1] = tmpvec3[1];
			out[2] = tmpvec3[2];
			out[3] = 1 + dot;
			return normalize(out, out);
		}
	};
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
	var temp1 = create();
	var temp2 = create();
	return function (out, a, b, c, d, t) {
		slerp(temp1, a, d, t);
		slerp(temp2, b, c, t);
		slerp(out, temp1, temp2, 2 * t * (1 - t));
		return out;
	};
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
	var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_1__.create();
	return function (out, view, right, up) {
		matr[0] = right[0];
		matr[3] = right[1];
		matr[6] = right[2];
		matr[1] = up[0];
		matr[4] = up[1];
		matr[7] = up[2];
		matr[2] = -view[0];
		matr[5] = -view[1];
		matr[8] = -view[2];
		return normalize(out, fromMat3(out, matr));
	};
}();

/***/ }),

/***/ "./src/util/gl-matrix/quat2.js":
/*!*************************************!*\
  !*** ./src/util/gl-matrix/quat2.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   conjugate: () => (/* binding */ conjugate),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   fromMat4: () => (/* binding */ fromMat4),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromRotationTranslation: () => (/* binding */ fromRotationTranslation),
/* harmony export */   fromRotationTranslationValues: () => (/* binding */ fromRotationTranslationValues),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   getDual: () => (/* binding */ getDual),
/* harmony export */   getReal: () => (/* binding */ getReal),
/* harmony export */   getTranslation: () => (/* binding */ getTranslation),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   rotateAroundAxis: () => (/* binding */ rotateAroundAxis),
/* harmony export */   rotateByQuatAppend: () => (/* binding */ rotateByQuatAppend),
/* harmony export */   rotateByQuatPrepend: () => (/* binding */ rotateByQuatPrepend),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setDual: () => (/* binding */ setDual),
/* harmony export */   setReal: () => (/* binding */ setReal),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/util/gl-matrix/common.js");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat4.js */ "./src/util/gl-matrix/mat4.js");
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quat.js */ "./src/util/gl-matrix/quat.js");




/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */
/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */

function create() {
	var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
	if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
		dq[0] = 0;
		dq[1] = 0;
		dq[2] = 0;
		dq[4] = 0;
		dq[5] = 0;
		dq[6] = 0;
		dq[7] = 0;
	}
	dq[3] = 1;
	return dq;
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */

function clone(a) {
	var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
	dq[0] = a[0];
	dq[1] = a[1];
	dq[2] = a[2];
	dq[3] = a[3];
	dq[4] = a[4];
	dq[5] = a[5];
	dq[6] = a[6];
	dq[7] = a[7];
	return dq;
}

/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
	var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
	dq[0] = x1;
	dq[1] = y1;
	dq[2] = z1;
	dq[3] = w1;
	dq[4] = x2;
	dq[5] = y2;
	dq[6] = z2;
	dq[7] = w2;
	return dq;
}

/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
	var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
	dq[0] = x1;
	dq[1] = y1;
	dq[2] = z1;
	dq[3] = w1;
	var ax = x2 * 0.5,
		ay = y2 * 0.5,
		az = z2 * 0.5;
	dq[4] = ax * w1 + ay * z1 - az * y1;
	dq[5] = ay * w1 + az * x1 - ax * z1;
	dq[6] = az * w1 + ax * y1 - ay * x1;
	dq[7] = -ax * x1 - ay * y1 - az * z1;
	return dq;
}

/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotationTranslation(out, q, t) {
	var ax = t[0] * 0.5,
		ay = t[1] * 0.5,
		az = t[2] * 0.5,
		bx = q[0],
		by = q[1],
		bz = q[2],
		bw = q[3];
	out[0] = bx;
	out[1] = by;
	out[2] = bz;
	out[3] = bw;
	out[4] = ax * bw + ay * bz - az * by;
	out[5] = ay * bw + az * bx - ax * bz;
	out[6] = az * bw + ax * by - ay * bx;
	out[7] = -ax * bx - ay * by - az * bz;
	return out;
}

/**
 * Creates a dual quat from a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromTranslation(out, t) {
	out[0] = 0;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	out[4] = t[0] * 0.5;
	out[5] = t[1] * 0.5;
	out[6] = t[2] * 0.5;
	out[7] = 0;
	return out;
}

/**
 * Creates a dual quat from a quaternion
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotation(out, q) {
	out[0] = q[0];
	out[1] = q[1];
	out[2] = q[2];
	out[3] = q[3];
	out[4] = 0;
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	return out;
}

/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */

function fromMat4(out, a) {
	//TODO Optimize this
	var outer = _quat_js__WEBPACK_IMPORTED_MODULE_2__.create();
	_mat4_js__WEBPACK_IMPORTED_MODULE_1__.getRotation(outer, a);
	var t = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
	_mat4_js__WEBPACK_IMPORTED_MODULE_1__.getTranslation(t, a);
	fromRotationTranslation(out, outer, t);
	return out;
}

/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */

function copy(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	out[6] = a[6];
	out[7] = a[7];
	return out;
}

/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */

function identity(out) {
	out[0] = 0;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	out[4] = 0;
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	return out;
}

/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */

function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
	out[0] = x1;
	out[1] = y1;
	out[2] = z1;
	out[3] = w1;
	out[4] = x2;
	out[5] = y2;
	out[6] = z2;
	out[7] = w2;
	return out;
}

/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} real part
 */

var getReal = _quat_js__WEBPACK_IMPORTED_MODULE_2__.copy;

/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} dual part
 */

function getDual(out, a) {
	out[0] = a[4];
	out[1] = a[5];
	out[2] = a[6];
	out[3] = a[7];
	return out;
}

/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */

var setReal = _quat_js__WEBPACK_IMPORTED_MODULE_2__.copy;

/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

function setDual(out, q) {
	out[4] = q[0];
	out[5] = q[1];
	out[6] = q[2];
	out[7] = q[3];
	return out;
}

/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */

function getTranslation(out, a) {
	var ax = a[4],
		ay = a[5],
		az = a[6],
		aw = a[7],
		bx = -a[0],
		by = -a[1],
		bz = -a[2],
		bw = a[3];
	out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
	out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
	out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
	return out;
}

/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {quat2} out
 */

function translate(out, a, v) {
	var ax1 = a[0],
		ay1 = a[1],
		az1 = a[2],
		aw1 = a[3],
		bx1 = v[0] * 0.5,
		by1 = v[1] * 0.5,
		bz1 = v[2] * 0.5,
		ax2 = a[4],
		ay2 = a[5],
		az2 = a[6],
		aw2 = a[7];
	out[0] = ax1;
	out[1] = ay1;
	out[2] = az1;
	out[3] = aw1;
	out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
	out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
	out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
	out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
	return out;
}

/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateX(out, a, rad) {
	var bx = -a[0],
		by = -a[1],
		bz = -a[2],
		bw = a[3],
		ax = a[4],
		ay = a[5],
		az = a[6],
		aw = a[7],
		ax1 = ax * bw + aw * bx + ay * bz - az * by,
		ay1 = ay * bw + aw * by + az * bx - ax * bz,
		az1 = az * bw + aw * bz + ax * by - ay * bx,
		aw1 = aw * bw - ax * bx - ay * by - az * bz;
	_quat_js__WEBPACK_IMPORTED_MODULE_2__.rotateX(out, a, rad);
	bx = out[0];
	by = out[1];
	bz = out[2];
	bw = out[3];
	out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	return out;
}

/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateY(out, a, rad) {
	var bx = -a[0],
		by = -a[1],
		bz = -a[2],
		bw = a[3],
		ax = a[4],
		ay = a[5],
		az = a[6],
		aw = a[7],
		ax1 = ax * bw + aw * bx + ay * bz - az * by,
		ay1 = ay * bw + aw * by + az * bx - ax * bz,
		az1 = az * bw + aw * bz + ax * by - ay * bx,
		aw1 = aw * bw - ax * bx - ay * by - az * bz;
	_quat_js__WEBPACK_IMPORTED_MODULE_2__.rotateY(out, a, rad);
	bx = out[0];
	by = out[1];
	bz = out[2];
	bw = out[3];
	out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	return out;
}

/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateZ(out, a, rad) {
	var bx = -a[0],
		by = -a[1],
		bz = -a[2],
		bw = a[3],
		ax = a[4],
		ay = a[5],
		az = a[6],
		aw = a[7],
		ax1 = ax * bw + aw * bx + ay * bz - az * by,
		ay1 = ay * bw + aw * by + az * bx - ax * bz,
		az1 = az * bw + aw * bz + ax * by - ay * bx,
		aw1 = aw * bw - ax * bx - ay * by - az * bz;
	_quat_js__WEBPACK_IMPORTED_MODULE_2__.rotateZ(out, a, rad);
	bx = out[0];
	by = out[1];
	bz = out[2];
	bw = out[3];
	out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	return out;
}

/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {quat2} out
 */

function rotateByQuatAppend(out, a, q) {
	var qx = q[0],
		qy = q[1],
		qz = q[2],
		qw = q[3],
		ax = a[0],
		ay = a[1],
		az = a[2],
		aw = a[3];
	out[0] = ax * qw + aw * qx + ay * qz - az * qy;
	out[1] = ay * qw + aw * qy + az * qx - ax * qz;
	out[2] = az * qw + aw * qz + ax * qy - ay * qx;
	out[3] = aw * qw - ax * qx - ay * qy - az * qz;
	ax = a[4];
	ay = a[5];
	az = a[6];
	aw = a[7];
	out[4] = ax * qw + aw * qx + ay * qz - az * qy;
	out[5] = ay * qw + aw * qy + az * qx - ax * qz;
	out[6] = az * qw + aw * qz + ax * qy - ay * qx;
	out[7] = aw * qw - ax * qx - ay * qy - az * qz;
	return out;
}

/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */

function rotateByQuatPrepend(out, q, a) {
	var qx = q[0],
		qy = q[1],
		qz = q[2],
		qw = q[3],
		bx = a[0],
		by = a[1],
		bz = a[2],
		bw = a[3];
	out[0] = qx * bw + qw * bx + qy * bz - qz * by;
	out[1] = qy * bw + qw * by + qz * bx - qx * bz;
	out[2] = qz * bw + qw * bz + qx * by - qy * bx;
	out[3] = qw * bw - qx * bx - qy * by - qz * bz;
	bx = a[4];
	by = a[5];
	bz = a[6];
	bw = a[7];
	out[4] = qx * bw + qw * bx + qy * bz - qz * by;
	out[5] = qy * bw + qw * by + qz * bx - qx * bz;
	out[6] = qz * bw + qw * bz + qx * by - qy * bx;
	out[7] = qw * bw - qx * bx - qy * by - qz * bz;
	return out;
}

/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */

function rotateAroundAxis(out, a, axis, rad) {
	//Special case for rad = 0
	if (Math.abs(rad) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
		return copy(out, a);
	}
	var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
	rad = rad * 0.5;
	var s = Math.sin(rad);
	var bx = s * axis[0] / axisLength;
	var by = s * axis[1] / axisLength;
	var bz = s * axis[2] / axisLength;
	var bw = Math.cos(rad);
	var ax1 = a[0],
		ay1 = a[1],
		az1 = a[2],
		aw1 = a[3];
	out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	var ax = a[4],
		ay = a[5],
		az = a[6],
		aw = a[7];
	out[4] = ax * bw + aw * bx + ay * bz - az * by;
	out[5] = ay * bw + aw * by + az * bx - ax * bz;
	out[6] = az * bw + aw * bz + ax * by - ay * bx;
	out[7] = aw * bw - ax * bx - ay * by - az * bz;
	return out;
}

/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 * @function
 */

function add(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	out[3] = a[3] + b[3];
	out[4] = a[4] + b[4];
	out[5] = a[5] + b[5];
	out[6] = a[6] + b[6];
	out[7] = a[7] + b[7];
	return out;
}

/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 */

function multiply(out, a, b) {
	var ax0 = a[0],
		ay0 = a[1],
		az0 = a[2],
		aw0 = a[3],
		bx1 = b[4],
		by1 = b[5],
		bz1 = b[6],
		bw1 = b[7],
		ax1 = a[4],
		ay1 = a[5],
		az1 = a[6],
		aw1 = a[7],
		bx0 = b[0],
		by0 = b[1],
		bz0 = b[2],
		bw0 = b[3];
	out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
	out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
	out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
	out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
	out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
	out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
	out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
	out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
	return out;
}

/**
 * Alias for {@link quat2.multiply}
 * @function
 */

var mul = multiply;

/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

function scale(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	out[3] = a[3] * b;
	out[4] = a[4] * b;
	out[5] = a[5] * b;
	out[6] = a[6] * b;
	out[7] = a[7] * b;
	return out;
}

/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _quat_js__WEBPACK_IMPORTED_MODULE_2__.dot;

/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

function lerp(out, a, b, t) {
	var mt = 1 - t;
	if (dot(a, b) < 0) t = -t;
	out[0] = a[0] * mt + b[0] * t;
	out[1] = a[1] * mt + b[1] * t;
	out[2] = a[2] * mt + b[2] * t;
	out[3] = a[3] * mt + b[3] * t;
	out[4] = a[4] * mt + b[4] * t;
	out[5] = a[5] * mt + b[5] * t;
	out[6] = a[6] * mt + b[6] * t;
	out[7] = a[7] * mt + b[7] * t;
	return out;
}

/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */

function invert(out, a) {
	var sqlen = squaredLength(a);
	out[0] = -a[0] / sqlen;
	out[1] = -a[1] / sqlen;
	out[2] = -a[2] / sqlen;
	out[3] = a[3] / sqlen;
	out[4] = -a[4] / sqlen;
	out[5] = -a[5] / sqlen;
	out[6] = -a[6] / sqlen;
	out[7] = a[7] / sqlen;
	return out;
}

/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */

function conjugate(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	out[2] = -a[2];
	out[3] = a[3];
	out[4] = -a[4];
	out[5] = -a[5];
	out[6] = -a[6];
	out[7] = a[7];
	return out;
}

/**
 * Calculates the length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */

var length = _quat_js__WEBPACK_IMPORTED_MODULE_2__.length;
/**
 * Alias for {@link quat2.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _quat_js__WEBPACK_IMPORTED_MODULE_2__.squaredLength;
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;

/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

function normalize(out, a) {
	var magnitude = squaredLength(a);
	if (magnitude > 0) {
		magnitude = Math.sqrt(magnitude);
		var a0 = a[0] / magnitude;
		var a1 = a[1] / magnitude;
		var a2 = a[2] / magnitude;
		var a3 = a[3] / magnitude;
		var b0 = a[4];
		var b1 = a[5];
		var b2 = a[6];
		var b3 = a[7];
		var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
		out[0] = a0;
		out[1] = a1;
		out[2] = a2;
		out[3] = a3;
		out[4] = (b0 - a0 * a_dot_b) / magnitude;
		out[5] = (b1 - a1 * a_dot_b) / magnitude;
		out[6] = (b2 - a2 * a_dot_b) / magnitude;
		out[7] = (b3 - a3 * a_dot_b) / magnitude;
	}
	return out;
}

/**
 * Returns a string representation of a dual quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */

function str(a) {
	return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
}

/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */

function exactEquals(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}

/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */

function equals(a, b) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3],
		a4 = a[4],
		a5 = a[5],
		a6 = a[6],
		a7 = a[7];
	var b0 = b[0],
		b1 = b[1],
		b2 = b[2],
		b3 = b[3],
		b4 = b[4],
		b5 = b[5],
		b6 = b[6],
		b7 = b[7];
	return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}


/***/ }),

/***/ "./src/util/gl-matrix/vec2.js":
/*!************************************!*\
  !*** ./src/util/gl-matrix/vec2.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   angle: () => (/* binding */ angle),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   dist: () => (/* binding */ dist),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   sqrDist: () => (/* binding */ sqrDist),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat2: () => (/* binding */ transformMat2),
/* harmony export */   transformMat2d: () => (/* binding */ transformMat2d),
/* harmony export */   transformMat3: () => (/* binding */ transformMat3),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   zero: () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/util/gl-matrix/common.js");


/**
 * 2 Dimensional Vector
 * @module vec2
 */
/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
	if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
		out[0] = 0;
		out[1] = 0;
	}
	return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
	out[0] = a[0];
	out[1] = a[1];
	return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
	out[0] = x;
	out[1] = y;
	return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
	out[0] = x;
	out[1] = y;
	return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
	out[0] = a[0] * b[0];
	out[1] = a[1] * b[1];
	return out;
}

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
	out[0] = a[0] / b[0];
	out[1] = a[1] / b[1];
	return out;
}

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
	out[0] = Math.ceil(a[0]);
	out[1] = Math.ceil(a[1]);
	return out;
}

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
	out[0] = Math.floor(a[0]);
	out[1] = Math.floor(a[1]);
	return out;
}

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
	out[0] = Math.min(a[0], b[0]);
	out[1] = Math.min(a[1], b[1]);
	return out;
}

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
	out[0] = Math.max(a[0], b[0]);
	out[1] = Math.max(a[1], b[1]);
	return out;
}

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
	out[0] = Math.round(a[0]);
	out[1] = Math.round(a[1]);
	return out;
}

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	return out;
}

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
	out[0] = a[0] + b[0] * scale;
	out[1] = a[1] + b[1] * scale;
	return out;
}

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
	var x = b[0] - a[0],
		y = b[1] - a[1];
	return Math.hypot(x, y);
}

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
	var x = b[0] - a[0],
		y = b[1] - a[1];
	return x * x + y * y;
}

/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
	var x = a[0],
		y = a[1];
	return Math.hypot(x, y);
}

/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
	var x = a[0],
		y = a[1];
	return x * x + y * y;
}

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	return out;
}

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
	out[0] = 1.0 / a[0];
	out[1] = 1.0 / a[1];
	return out;
}

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
	var x = a[0],
		y = a[1];
	var len = x * x + y * y;
	if (len > 0) {
		//TODO: evaluate use of glm_invsqrt here?
		len = 1 / Math.sqrt(len);
	}
	out[0] = a[0] * len;
	out[1] = a[1] * len;
	return out;
}

/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
	return a[0] * b[0] + a[1] * b[1];
}

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
	var z = a[0] * b[1] - a[1] * b[0];
	out[0] = out[1] = 0;
	out[2] = z;
	return out;
}

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
	var ax = a[0],
		ay = a[1];
	out[0] = ax + t * (b[0] - ax);
	out[1] = ay + t * (b[1] - ay);
	return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
	scale = scale === undefined ? 1.0 : scale;
	var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
	out[0] = Math.cos(r) * scale;
	out[1] = Math.sin(r) * scale;
	return out;
}

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
	var x = a[0],
		y = a[1];
	out[0] = m[0] * x + m[2] * y;
	out[1] = m[1] * x + m[3] * y;
	return out;
}

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
	var x = a[0],
		y = a[1];
	out[0] = m[0] * x + m[2] * y + m[4];
	out[1] = m[1] * x + m[3] * y + m[5];
	return out;
}

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
	var x = a[0],
		y = a[1];
	out[0] = m[0] * x + m[3] * y + m[6];
	out[1] = m[1] * x + m[4] * y + m[7];
	return out;
}

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
	var x = a[0];
	var y = a[1];
	out[0] = m[0] * x + m[4] * y + m[12];
	out[1] = m[1] * x + m[5] * y + m[13];
	return out;
}

/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */

function rotate(out, a, b, rad) {
	//Translate point to the origin
	var p0 = a[0] - b[0],
		p1 = a[1] - b[1],
		sinC = Math.sin(rad),
		cosC = Math.cos(rad); //perform rotation and translate to correct position
	out[0] = p0 * cosC - p1 * sinC + b[0];
	out[1] = p0 * sinC + p1 * cosC + b[1];
	return out;
}

/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
	var x1 = a[0],
		y1 = a[1],
		x2 = b[0],
		y2 = b[1],
		// mag is the product of the magnitudes of a and b
		mag = Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2)),
		// mag &&.. short circuits if mag == 0
		cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1
	return Math.acos(Math.min(Math.max(cosine, -1), 1));
}

/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
	out[0] = 0.0;
	out[1] = 0.0;
	return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
	return "vec2(" + a[0] + ", " + a[1] + ")";
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
	return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
	var a0 = a[0],
		a1 = a[1];
	var b0 = b[0],
		b1 = b[1];
	return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
	var vec = create();
	return function (a, stride, offset, count, fn, arg) {
		var i, l;
		if (!stride) {
			stride = 2;
		}
		if (!offset) {
			offset = 0;
		}
		if (count) {
			l = Math.min(count * stride + offset, a.length);
		} else {
			l = a.length;
		}
		for (i = offset; i < l; i += stride) {
			vec[0] = a[i];
			vec[1] = a[i + 1];
			fn(vec, vec, arg);
			a[i] = vec[0];
			a[i + 1] = vec[1];
		}
		return a;
	};
}();

/***/ }),

/***/ "./src/util/gl-matrix/vec3.js":
/*!************************************!*\
  !*** ./src/util/gl-matrix/vec3.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   angle: () => (/* binding */ angle),
/* harmony export */   bezier: () => (/* binding */ bezier),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   dist: () => (/* binding */ dist),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   hermite: () => (/* binding */ hermite),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   slerp: () => (/* binding */ slerp),
/* harmony export */   sqrDist: () => (/* binding */ sqrDist),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat3: () => (/* binding */ transformMat3),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   transformQuat: () => (/* binding */ transformQuat),
/* harmony export */   zero: () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/util/gl-matrix/common.js");


/**
 * 3 Dimensional Vector
 * @module vec3
 */
/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
	if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
		out[0] = 0;
		out[1] = 0;
		out[2] = 0;
	}
	return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
	var x = a[0];
	var y = a[1];
	var z = a[2];
	return Math.hypot(x, y, z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
	out[0] = x;
	out[1] = y;
	out[2] = z;
	return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
	out[0] = x;
	out[1] = y;
	out[2] = z;
	return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
	out[0] = a[0] * b[0];
	out[1] = a[1] * b[1];
	out[2] = a[2] * b[2];
	return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
	out[0] = a[0] / b[0];
	out[1] = a[1] / b[1];
	out[2] = a[2] / b[2];
	return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
	out[0] = Math.ceil(a[0]);
	out[1] = Math.ceil(a[1]);
	out[2] = Math.ceil(a[2]);
	return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
	out[0] = Math.floor(a[0]);
	out[1] = Math.floor(a[1]);
	out[2] = Math.floor(a[2]);
	return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
	out[0] = Math.min(a[0], b[0]);
	out[1] = Math.min(a[1], b[1]);
	out[2] = Math.min(a[2], b[2]);
	return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
	out[0] = Math.max(a[0], b[0]);
	out[1] = Math.max(a[1], b[1]);
	out[2] = Math.max(a[2], b[2]);
	return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
	out[0] = Math.round(a[0]);
	out[1] = Math.round(a[1]);
	out[2] = Math.round(a[2]);
	return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
	out[0] = a[0] + b[0] * scale;
	out[1] = a[1] + b[1] * scale;
	out[2] = a[2] + b[2] * scale;
	return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
	var x = b[0] - a[0];
	var y = b[1] - a[1];
	var z = b[2] - a[2];
	return Math.hypot(x, y, z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
	var x = b[0] - a[0];
	var y = b[1] - a[1];
	var z = b[2] - a[2];
	return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
	var x = a[0];
	var y = a[1];
	var z = a[2];
	return x * x + y * y + z * z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	out[2] = -a[2];
	return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
	out[0] = 1.0 / a[0];
	out[1] = 1.0 / a[1];
	out[2] = 1.0 / a[2];
	return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
	var x = a[0];
	var y = a[1];
	var z = a[2];
	var len = x * x + y * y + z * z;
	if (len > 0) {
		//TODO: evaluate use of glm_invsqrt here?
		len = 1 / Math.sqrt(len);
	}
	out[0] = a[0] * len;
	out[1] = a[1] * len;
	out[2] = a[2] * len;
	return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
	var ax = a[0],
		ay = a[1],
		az = a[2];
	var bx = b[0],
		by = b[1],
		bz = b[2];
	out[0] = ay * bz - az * by;
	out[1] = az * bx - ax * bz;
	out[2] = ax * by - ay * bx;
	return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
	var ax = a[0];
	var ay = a[1];
	var az = a[2];
	out[0] = ax + t * (b[0] - ax);
	out[1] = ay + t * (b[1] - ay);
	out[2] = az + t * (b[2] - az);
	return out;
}

/**
 * Performs a spherical linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function slerp(out, a, b, t) {
	var angle = Math.acos(Math.min(Math.max(dot(a, b), -1), 1));
	var sinTotal = Math.sin(angle);
	var ratioA = Math.sin((1 - t) * angle) / sinTotal;
	var ratioB = Math.sin(t * angle) / sinTotal;
	out[0] = ratioA * a[0] + ratioB * b[0];
	out[1] = ratioA * a[1] + ratioB * b[1];
	out[2] = ratioA * a[2] + ratioB * b[2];
	return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
	var factorTimes2 = t * t;
	var factor1 = factorTimes2 * (2 * t - 3) + 1;
	var factor2 = factorTimes2 * (t - 2) + t;
	var factor3 = factorTimes2 * (t - 1);
	var factor4 = factorTimes2 * (3 - 2 * t);
	out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
	var inverseFactor = 1 - t;
	var inverseFactorTimesTwo = inverseFactor * inverseFactor;
	var factorTimes2 = t * t;
	var factor1 = inverseFactorTimesTwo * inverseFactor;
	var factor2 = 3 * t * inverseFactorTimesTwo;
	var factor3 = 3 * factorTimes2 * inverseFactor;
	var factor4 = factorTimes2 * t;
	out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
	scale = scale === undefined ? 1.0 : scale;
	var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
	var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
	var zScale = Math.sqrt(1.0 - z * z) * scale;
	out[0] = Math.cos(r) * zScale;
	out[1] = Math.sin(r) * zScale;
	out[2] = z * scale;
	return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
	var x = a[0],
		y = a[1],
		z = a[2];
	var w = m[3] * x + m[7] * y + m[11] * z + m[15];
	w = w || 1.0;
	out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
	out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
	out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
	return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
	var x = a[0],
		y = a[1],
		z = a[2];
	out[0] = x * m[0] + y * m[3] + z * m[6];
	out[1] = x * m[1] + y * m[4] + z * m[7];
	out[2] = x * m[2] + y * m[5] + z * m[8];
	return out;
}

/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
	// benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
	var qx = q[0],
		qy = q[1],
		qz = q[2],
		qw = q[3];
	var x = a[0],
		y = a[1],
		z = a[2]; // var qvec = [qx, qy, qz];
	// var uv = vec3.cross([], qvec, a);
	var uvx = qy * z - qz * y,
		uvy = qz * x - qx * z,
		uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);
	var uuvx = qy * uvz - qz * uvy,
		uuvy = qz * uvx - qx * uvz,
		uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);
	var w2 = qw * 2;
	uvx *= w2;
	uvy *= w2;
	uvz *= w2; // vec3.scale(uuv, uuv, 2);
	uuvx *= 2;
	uuvy *= 2;
	uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));
	out[0] = x + uvx + uuvx;
	out[1] = y + uvy + uuvy;
	out[2] = z + uvz + uuvz;
	return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
	var p = [],
		r = []; //Translate point to the origin
	p[0] = a[0] - b[0];
	p[1] = a[1] - b[1];
	p[2] = a[2] - b[2]; //perform rotation
	r[0] = p[0];
	r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
	r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position
	out[0] = r[0] + b[0];
	out[1] = r[1] + b[1];
	out[2] = r[2] + b[2];
	return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
	var p = [],
		r = []; //Translate point to the origin
	p[0] = a[0] - b[0];
	p[1] = a[1] - b[1];
	p[2] = a[2] - b[2]; //perform rotation
	r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
	r[1] = p[1];
	r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position
	out[0] = r[0] + b[0];
	out[1] = r[1] + b[1];
	out[2] = r[2] + b[2];
	return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
	var p = [],
		r = []; //Translate point to the origin
	p[0] = a[0] - b[0];
	p[1] = a[1] - b[1];
	p[2] = a[2] - b[2]; //perform rotation
	r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
	r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
	r[2] = p[2]; //translate to correct position
	out[0] = r[0] + b[0];
	out[1] = r[1] + b[1];
	out[2] = r[2] + b[2];
	return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
	var ax = a[0],
		ay = a[1],
		az = a[2],
		bx = b[0],
		by = b[1],
		bz = b[2],
		mag = Math.sqrt((ax * ax + ay * ay + az * az) * (bx * bx + by * by + bz * bz)),
		cosine = mag && dot(a, b) / mag;
	return Math.acos(Math.min(Math.max(cosine, -1), 1));
}

/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
	out[0] = 0.0;
	out[1] = 0.0;
	out[2] = 0.0;
	return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
	return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2];
	var b0 = b[0],
		b1 = b[1],
		b2 = b[2];
	return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
	var vec = create();
	return function (a, stride, offset, count, fn, arg) {
		var i, l;
		if (!stride) {
			stride = 3;
		}
		if (!offset) {
			offset = 0;
		}
		if (count) {
			l = Math.min(count * stride + offset, a.length);
		} else {
			l = a.length;
		}
		for (i = offset; i < l; i += stride) {
			vec[0] = a[i];
			vec[1] = a[i + 1];
			vec[2] = a[i + 2];
			fn(vec, vec, arg);
			a[i] = vec[0];
			a[i + 1] = vec[1];
			a[i + 2] = vec[2];
		}
		return a;
	};
}();

/***/ }),

/***/ "./src/util/gl-matrix/vec4.js":
/*!************************************!*\
  !*** ./src/util/gl-matrix/vec4.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   dist: () => (/* binding */ dist),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   sqrDist: () => (/* binding */ sqrDist),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   transformQuat: () => (/* binding */ transformQuat),
/* harmony export */   zero: () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/util/gl-matrix/common.js");


/**
 * 4 Dimensional Vector
 * @module vec4
 */
/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
	if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
		out[0] = 0;
		out[1] = 0;
		out[2] = 0;
		out[3] = 0;
	}
	return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
	var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
	out[0] = x;
	out[1] = y;
	out[2] = z;
	out[3] = w;
	return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
	out[0] = x;
	out[1] = y;
	out[2] = z;
	out[3] = w;
	return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	out[3] = a[3] + b[3];
	return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	out[3] = a[3] - b[3];
	return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
	out[0] = a[0] * b[0];
	out[1] = a[1] * b[1];
	out[2] = a[2] * b[2];
	out[3] = a[3] * b[3];
	return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
	out[0] = a[0] / b[0];
	out[1] = a[1] / b[1];
	out[2] = a[2] / b[2];
	out[3] = a[3] / b[3];
	return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
	out[0] = Math.ceil(a[0]);
	out[1] = Math.ceil(a[1]);
	out[2] = Math.ceil(a[2]);
	out[3] = Math.ceil(a[3]);
	return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
	out[0] = Math.floor(a[0]);
	out[1] = Math.floor(a[1]);
	out[2] = Math.floor(a[2]);
	out[3] = Math.floor(a[3]);
	return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
	out[0] = Math.min(a[0], b[0]);
	out[1] = Math.min(a[1], b[1]);
	out[2] = Math.min(a[2], b[2]);
	out[3] = Math.min(a[3], b[3]);
	return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
	out[0] = Math.max(a[0], b[0]);
	out[1] = Math.max(a[1], b[1]);
	out[2] = Math.max(a[2], b[2]);
	out[3] = Math.max(a[3], b[3]);
	return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
	out[0] = Math.round(a[0]);
	out[1] = Math.round(a[1]);
	out[2] = Math.round(a[2]);
	out[3] = Math.round(a[3]);
	return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	out[3] = a[3] * b;
	return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
	out[0] = a[0] + b[0] * scale;
	out[1] = a[1] + b[1] * scale;
	out[2] = a[2] + b[2] * scale;
	out[3] = a[3] + b[3] * scale;
	return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
	var x = b[0] - a[0];
	var y = b[1] - a[1];
	var z = b[2] - a[2];
	var w = b[3] - a[3];
	return Math.hypot(x, y, z, w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
	var x = b[0] - a[0];
	var y = b[1] - a[1];
	var z = b[2] - a[2];
	var w = b[3] - a[3];
	return x * x + y * y + z * z + w * w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
	var x = a[0];
	var y = a[1];
	var z = a[2];
	var w = a[3];
	return Math.hypot(x, y, z, w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
	var x = a[0];
	var y = a[1];
	var z = a[2];
	var w = a[3];
	return x * x + y * y + z * z + w * w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	out[2] = -a[2];
	out[3] = -a[3];
	return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
	out[0] = 1.0 / a[0];
	out[1] = 1.0 / a[1];
	out[2] = 1.0 / a[2];
	out[3] = 1.0 / a[3];
	return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
	var x = a[0];
	var y = a[1];
	var z = a[2];
	var w = a[3];
	var len = x * x + y * y + z * z + w * w;
	if (len > 0) {
		len = 1 / Math.sqrt(len);
	}
	out[0] = x * len;
	out[1] = y * len;
	out[2] = z * len;
	out[3] = w * len;
	return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
	var A = v[0] * w[1] - v[1] * w[0],
		B = v[0] * w[2] - v[2] * w[0],
		C = v[0] * w[3] - v[3] * w[0],
		D = v[1] * w[2] - v[2] * w[1],
		E = v[1] * w[3] - v[3] * w[1],
		F = v[2] * w[3] - v[3] * w[2];
	var G = u[0];
	var H = u[1];
	var I = u[2];
	var J = u[3];
	out[0] = H * F - I * E + J * D;
	out[1] = -(G * F) + I * C - J * B;
	out[2] = G * E - H * C + J * A;
	out[3] = -(G * D) + H * B - I * A;
	return out;
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
	var ax = a[0];
	var ay = a[1];
	var az = a[2];
	var aw = a[3];
	out[0] = ax + t * (b[0] - ax);
	out[1] = ay + t * (b[1] - ay);
	out[2] = az + t * (b[2] - az);
	out[3] = aw + t * (b[3] - aw);
	return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
	scale = scale === undefined ? 1.0 : scale; // Marsaglia, George. Choosing a Point from the Surface of a
	// Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
	// http://projecteuclid.org/euclid.aoms/1177692644;
	var v1, v2, v3, v4;
	var s1, s2;
	do {
		v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
		v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
		s1 = v1 * v1 + v2 * v2;
	} while (s1 >= 1);
	do {
		v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
		v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
		s2 = v3 * v3 + v4 * v4;
	} while (s2 >= 1);
	var d = Math.sqrt((1 - s1) / s2);
	out[0] = scale * v1;
	out[1] = scale * v2;
	out[2] = scale * v3 * d;
	out[3] = scale * v4 * d;
	return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
	var x = a[0],
		y = a[1],
		z = a[2],
		w = a[3];
	out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
	out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
	out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
	out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
	return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
	var x = a[0],
		y = a[1],
		z = a[2];
	var qx = q[0],
		qy = q[1],
		qz = q[2],
		qw = q[3]; // calculate quat * vec
	var ix = qw * x + qy * z - qz * y;
	var iy = qw * y + qz * x - qx * z;
	var iz = qw * z + qx * y - qy * x;
	var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat
	out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	out[3] = a[3];
	return out;
}

/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
	out[0] = 0.0;
	out[1] = 0.0;
	out[2] = 0.0;
	out[3] = 0.0;
	return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
	return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
	var a0 = a[0],
		a1 = a[1],
		a2 = a[2],
		a3 = a[3];
	var b0 = b[0],
		b1 = b[1],
		b2 = b[2],
		b3 = b[3];
	return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
	var vec = create();
	return function (a, stride, offset, count, fn, arg) {
		var i, l;
		if (!stride) {
			stride = 4;
		}
		if (!offset) {
			offset = 0;
		}
		if (count) {
			l = Math.min(count * stride + offset, a.length);
		} else {
			l = a.length;
		}
		for (i = offset; i < l; i += stride) {
			vec[0] = a[i];
			vec[1] = a[i + 1];
			vec[2] = a[i + 2];
			vec[3] = a[i + 3];
			fn(vec, vec, arg);
			a[i] = vec[0];
			a[i + 1] = vec[1];
			a[i + 2] = vec[2];
			a[i + 3] = vec[3];
		}
		return a;
	};
}();

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeViewFrustumPlanes: () => (/* reexport safe */ _computeViewFrustumPlanes__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   getConstructorName: () => (/* reexport safe */ _getConstructorName__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   hexadecimalToRgb: () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_3__.hexadecimalToRgb),
/* harmony export */   throwError: () => (/* reexport safe */ _errorFunc__WEBPACK_IMPORTED_MODULE_2__.throwError),
/* harmony export */   throwErrorInstanceOf: () => (/* reexport safe */ _errorFunc__WEBPACK_IMPORTED_MODULE_2__.throwErrorInstanceOf),
/* harmony export */   throwErrorNumberType: () => (/* reexport safe */ _errorFunc__WEBPACK_IMPORTED_MODULE_2__.throwErrorNumberType)
/* harmony export */ });
/* harmony import */ var _computeViewFrustumPlanes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computeViewFrustumPlanes */ "./src/util/computeViewFrustumPlanes.ts");
/* harmony import */ var _getConstructorName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getConstructorName */ "./src/util/getConstructorName.ts");
/* harmony import */ var _errorFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorFunc */ "./src/util/errorFunc/index.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color */ "./src/util/color/index.ts");








/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/RedGPU.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmbientLight: () => (/* reexport safe */ _light__WEBPACK_IMPORTED_MODULE_7__.AmbientLight),
/* harmony export */   Axis: () => (/* reexport safe */ _main_scene__WEBPACK_IMPORTED_MODULE_5__.Axis),
/* harmony export */   BaseLight: () => (/* reexport safe */ _light__WEBPACK_IMPORTED_MODULE_7__.BaseLight),
/* harmony export */   BaseObject3D: () => (/* reexport safe */ _object3d__WEBPACK_IMPORTED_MODULE_12__.BaseObject3D),
/* harmony export */   BaseObject3DPipeline: () => (/* reexport safe */ _object3d__WEBPACK_IMPORTED_MODULE_12__.BaseObject3DPipeline),
/* harmony export */   BasicCamera: () => (/* reexport safe */ _camera__WEBPACK_IMPORTED_MODULE_6__.BasicCamera),
/* harmony export */   BitmapCubeTexture: () => (/* reexport safe */ _resource_texture__WEBPACK_IMPORTED_MODULE_15__.BitmapCubeTexture),
/* harmony export */   BitmapMaterial: () => (/* reexport safe */ _material__WEBPACK_IMPORTED_MODULE_11__.BitmapMaterial),
/* harmony export */   BitmapPhongMaterial: () => (/* reexport safe */ _material__WEBPACK_IMPORTED_MODULE_11__.BitmapPhongMaterial),
/* harmony export */   BitmapTexture: () => (/* reexport safe */ _resource_texture__WEBPACK_IMPORTED_MODULE_15__.BitmapTexture),
/* harmony export */   Box: () => (/* reexport safe */ _resource_geometry__WEBPACK_IMPORTED_MODULE_14__.Box),
/* harmony export */   CONST_DIRTY_TRANSFORM_STATE: () => (/* reexport safe */ _object3d__WEBPACK_IMPORTED_MODULE_12__.CONST_DIRTY_TRANSFORM_STATE),
/* harmony export */   ColorMaterial: () => (/* reexport safe */ _material__WEBPACK_IMPORTED_MODULE_11__.ColorMaterial),
/* harmony export */   DirectionalLight: () => (/* reexport safe */ _light__WEBPACK_IMPORTED_MODULE_7__.DirectionalLight),
/* harmony export */   DisplayContainer: () => (/* reexport safe */ _object3d__WEBPACK_IMPORTED_MODULE_12__.DisplayContainer),
/* harmony export */   Geometry: () => (/* reexport safe */ _resource_geometry__WEBPACK_IMPORTED_MODULE_14__.Geometry),
/* harmony export */   Grid: () => (/* reexport safe */ _main_scene__WEBPACK_IMPORTED_MODULE_5__.Grid),
/* harmony export */   IndexBuffer: () => (/* reexport safe */ _resource_buffers__WEBPACK_IMPORTED_MODULE_13__.IndexBuffer),
/* harmony export */   InterleaveInfo: () => (/* reexport safe */ _resource_buffers__WEBPACK_IMPORTED_MODULE_13__.InterleaveInfo),
/* harmony export */   InterleaveUnit: () => (/* reexport safe */ _resource_buffers__WEBPACK_IMPORTED_MODULE_13__.InterleaveUnit),
/* harmony export */   LightManager: () => (/* reexport safe */ _light__WEBPACK_IMPORTED_MODULE_7__.LightManager),
/* harmony export */   Mesh: () => (/* reexport safe */ _object3d__WEBPACK_IMPORTED_MODULE_12__.Mesh),
/* harmony export */   NormalHelper: () => (/* reexport safe */ _main_scene__WEBPACK_IMPORTED_MODULE_5__.NormalHelper),
/* harmony export */   PassLightClusters: () => (/* reexport safe */ _light_pointLightCluster__WEBPACK_IMPORTED_MODULE_8__.PassLightClusters),
/* harmony export */   PassLightClustersBound: () => (/* reexport safe */ _light_pointLightCluster__WEBPACK_IMPORTED_MODULE_8__.PassLightClustersBound),
/* harmony export */   PassLightClustersHelper: () => (/* reexport safe */ _light_pointLightCluster__WEBPACK_IMPORTED_MODULE_8__.PassLightClustersHelper),
/* harmony export */   PointLight: () => (/* reexport safe */ _light__WEBPACK_IMPORTED_MODULE_7__.PointLight),
/* harmony export */   PostEffectBase: () => (/* reexport safe */ _postEffect__WEBPACK_IMPORTED_MODULE_3__.PostEffectBase),
/* harmony export */   PostEffectBrightnessContrast: () => (/* reexport safe */ _postEffect__WEBPACK_IMPORTED_MODULE_3__.PostEffectBrightnessContrast),
/* harmony export */   PostEffectGray: () => (/* reexport safe */ _postEffect__WEBPACK_IMPORTED_MODULE_3__.PostEffectGray),
/* harmony export */   PostEffectHueSaturation: () => (/* reexport safe */ _postEffect__WEBPACK_IMPORTED_MODULE_3__.PostEffectHueSaturation),
/* harmony export */   PostEffectInvert: () => (/* reexport safe */ _postEffect__WEBPACK_IMPORTED_MODULE_3__.PostEffectInvert),
/* harmony export */   PostEffectManager: () => (/* reexport safe */ _postEffect__WEBPACK_IMPORTED_MODULE_3__.PostEffectManager),
/* harmony export */   PostEffectPixelize: () => (/* reexport safe */ _postEffect__WEBPACK_IMPORTED_MODULE_3__.PostEffectPixelize),
/* harmony export */   RedGPUContext: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.RedGPUContext),
/* harmony export */   RedGPUContextBase: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.RedGPUContextBase),
/* harmony export */   RedGPUContextResourceManager: () => (/* reexport safe */ _resource_texture__WEBPACK_IMPORTED_MODULE_15__.RedGPUContextResourceManager),
/* harmony export */   Renderer: () => (/* reexport safe */ _main_render__WEBPACK_IMPORTED_MODULE_4__.Renderer),
/* harmony export */   SHADER_DEFINE: () => (/* reexport safe */ _systemShaderDefine__WEBPACK_IMPORTED_MODULE_1__.SHADER_DEFINE),
/* harmony export */   Scene: () => (/* reexport safe */ _main_scene__WEBPACK_IMPORTED_MODULE_5__.Scene),
/* harmony export */   SkyBox: () => (/* reexport safe */ _main_scene__WEBPACK_IMPORTED_MODULE_5__.SkyBox),
/* harmony export */   SkyBoxMaterial: () => (/* reexport safe */ _material__WEBPACK_IMPORTED_MODULE_11__.SkyBoxMaterial),
/* harmony export */   Sphere: () => (/* reexport safe */ _resource_geometry__WEBPACK_IMPORTED_MODULE_14__.Sphere),
/* harmony export */   TextureSampler: () => (/* reexport safe */ _resource_texture__WEBPACK_IMPORTED_MODULE_15__.TextureSampler),
/* harmony export */   TypeSize: () => (/* reexport safe */ _resource_buffers__WEBPACK_IMPORTED_MODULE_13__.TypeSize),
/* harmony export */   UniformBufferDescriptor: () => (/* reexport safe */ _resource_buffers__WEBPACK_IMPORTED_MODULE_13__.UniformBufferDescriptor),
/* harmony export */   UniformBufferFloat32: () => (/* reexport safe */ _resource_buffers__WEBPACK_IMPORTED_MODULE_13__.UniformBufferFloat32),
/* harmony export */   VertexBuffer: () => (/* reexport safe */ _resource_buffers__WEBPACK_IMPORTED_MODULE_13__.VertexBuffer),
/* harmony export */   View: () => (/* reexport safe */ _main_view__WEBPACK_IMPORTED_MODULE_2__.View),
/* harmony export */   ViewDebugger: () => (/* reexport safe */ _main_view__WEBPACK_IMPORTED_MODULE_2__.ViewDebugger),
/* harmony export */   computeViewFrustumPlanes: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_9__.computeViewFrustumPlanes),
/* harmony export */   getConstructorName: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_9__.getConstructorName),
/* harmony export */   glMatrix: () => (/* reexport safe */ _util_gl_matrix__WEBPACK_IMPORTED_MODULE_10__.glMatrix),
/* harmony export */   hexadecimalToRgb: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_9__.hexadecimalToRgb),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   mat2: () => (/* reexport safe */ _util_gl_matrix__WEBPACK_IMPORTED_MODULE_10__.mat2),
/* harmony export */   mat2d: () => (/* reexport safe */ _util_gl_matrix__WEBPACK_IMPORTED_MODULE_10__.mat2d),
/* harmony export */   mat3: () => (/* reexport safe */ _util_gl_matrix__WEBPACK_IMPORTED_MODULE_10__.mat3),
/* harmony export */   mat4: () => (/* reexport safe */ _util_gl_matrix__WEBPACK_IMPORTED_MODULE_10__.mat4),
/* harmony export */   quat: () => (/* reexport safe */ _util_gl_matrix__WEBPACK_IMPORTED_MODULE_10__.quat),
/* harmony export */   quat2: () => (/* reexport safe */ _util_gl_matrix__WEBPACK_IMPORTED_MODULE_10__.quat2),
/* harmony export */   throwError: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_9__.throwError),
/* harmony export */   throwErrorInstanceOf: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_9__.throwErrorInstanceOf),
/* harmony export */   throwErrorNumberType: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_9__.throwErrorNumberType),
/* harmony export */   vec2: () => (/* reexport safe */ _util_gl_matrix__WEBPACK_IMPORTED_MODULE_10__.vec2),
/* harmony export */   vec3: () => (/* reexport safe */ _util_gl_matrix__WEBPACK_IMPORTED_MODULE_10__.vec3),
/* harmony export */   vec4: () => (/* reexport safe */ _util_gl_matrix__WEBPACK_IMPORTED_MODULE_10__.vec4)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/context/index.ts");
/* harmony import */ var _systemShaderDefine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./systemShaderDefine */ "./src/systemShaderDefine/index.ts");
/* harmony import */ var _main_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/view */ "./src/main/view/index.ts");
/* harmony import */ var _postEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postEffect */ "./src/postEffect/index.ts");
/* harmony import */ var _main_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/render */ "./src/main/render/index.ts");
/* harmony import */ var _main_scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/scene */ "./src/main/scene/index.ts");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camera */ "./src/camera/index.ts");
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./light */ "./src/light/index.ts");
/* harmony import */ var _light_pointLightCluster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./light/pointLightCluster */ "./src/light/pointLightCluster/index.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util */ "./src/util/index.js");
/* harmony import */ var _util_gl_matrix__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/gl-matrix */ "./src/util/gl-matrix/index.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material */ "./src/material/index.ts");
/* harmony import */ var _object3d__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./object3d */ "./src/object3d/index.ts");
/* harmony import */ var _resource_buffers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resource/buffers */ "./src/resource/buffers/index.ts");
/* harmony import */ var _resource_geometry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resource/geometry */ "./src/resource/geometry/index.ts");
/* harmony import */ var _resource_texture__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resource/texture */ "./src/resource/texture/index.ts");
/* harmony import */ var _temp_qurd_Quad__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./temp/qurd/Quad */ "./src/temp/qurd/Quad.ts");


















const BASE_OPTION = {
    powerPreference: "high-performance",
    forceFallbackAdapter: false
};
const BASE_REQUIRED_FEATURES = {};
/**
 * test232
 * RedGPU initialization function.
 * @param {HTMLCanvasElement} canvas
 * @param label
 * @param {GPUCanvasAlphaMode=} alphaMode  알파모드 설정
 * @param {GPURequestAdapterOptions=} requestAdapterOptions
 * @param {Function=} HD_destroy GPUDevice가 lost 될 경우 발동할 핸들러
 *
 * @example
 * RedGPU.initialize(HTMLCanvasElement instance).then(
 *  (redGPUContext)=>{
 *     console.log(redGPUContext) // success!
 *  }
 * )
 */
const init = (canvas, label, alphaMode = 'premultiplied', requestAdapterOptions = BASE_OPTION, HD_destroy) => {
    alphaMode = alphaMode || 'premultiplied';
    return new Promise(async (resolve, reject) => {
        let errorInfo;
        const checkCanvas = canvas => canvas instanceof HTMLCanvasElement;
        const checkAdapter = gpu => {
            gpu.requestAdapter(requestAdapterOptions)
                .then(checkDevice)
                .catch(e => {
                errorInfo = { successYn: false, reason: e };
                reject(errorInfo);
            });
        };
        const checkDevice = adapter => {
            const gpuDeviceDescriptor = {
                ...BASE_REQUIRED_FEATURES,
                label: label || `gpuDevice : Label input is recommended.`
            };
            adapter.requestDevice(gpuDeviceDescriptor)
                .then(device => {
                console.log('device', device);
                checkContext(canvas, adapter, device);
                device.addEventListener('uncapturederror', (event) => {
                    // TODO uncapturederror 보강처리
                    // Re-surface the error, because adding an event listener may silence console logs.
                    console.error('TODO A WebGPU error was not captured:', event.error);
                });
                device.lost.then(v => {
                    console.log('GPUDevice Lost', v);
                    device.destroy();
                    HD_destroy?.(v);
                });
            })
                .catch(e => {
                errorInfo = { successYn: false, reason: e };
                reject(errorInfo);
                throw errorInfo;
            });
        };
        const checkContext = (canvas, adapter, device) => {
            const context = canvas.getContext('webgpu');
            if (context)
                resolve(new _context__WEBPACK_IMPORTED_MODULE_0__.RedGPUContext(canvas, adapter, device, context, alphaMode));
            else {
                errorInfo = { successYn: false, reason: 'canvas.getContext(\'webgpu\') is null' };
                reject(errorInfo);
            }
        };
        const { gpu } = navigator;
        if (checkCanvas(canvas)) {
            if (gpu)
                checkAdapter(gpu);
            else {
                errorInfo = {
                    successYn: false,
                    reason: 'Cannot find navigator.gpu.'
                };
                reject(errorInfo);
            }
        }
        else {
            errorInfo = {
                successYn: false,
                reason: 'canvas is not HTMLCanvasElement '
            };
            reject(errorInfo);
        }
    });
};


var __webpack_exports__AmbientLight = __webpack_exports__.AmbientLight;
var __webpack_exports__Axis = __webpack_exports__.Axis;
var __webpack_exports__BaseLight = __webpack_exports__.BaseLight;
var __webpack_exports__BaseObject3D = __webpack_exports__.BaseObject3D;
var __webpack_exports__BaseObject3DPipeline = __webpack_exports__.BaseObject3DPipeline;
var __webpack_exports__BasicCamera = __webpack_exports__.BasicCamera;
var __webpack_exports__BitmapCubeTexture = __webpack_exports__.BitmapCubeTexture;
var __webpack_exports__BitmapMaterial = __webpack_exports__.BitmapMaterial;
var __webpack_exports__BitmapPhongMaterial = __webpack_exports__.BitmapPhongMaterial;
var __webpack_exports__BitmapTexture = __webpack_exports__.BitmapTexture;
var __webpack_exports__Box = __webpack_exports__.Box;
var __webpack_exports__CONST_DIRTY_TRANSFORM_STATE = __webpack_exports__.CONST_DIRTY_TRANSFORM_STATE;
var __webpack_exports__ColorMaterial = __webpack_exports__.ColorMaterial;
var __webpack_exports__DirectionalLight = __webpack_exports__.DirectionalLight;
var __webpack_exports__DisplayContainer = __webpack_exports__.DisplayContainer;
var __webpack_exports__Geometry = __webpack_exports__.Geometry;
var __webpack_exports__Grid = __webpack_exports__.Grid;
var __webpack_exports__IndexBuffer = __webpack_exports__.IndexBuffer;
var __webpack_exports__InterleaveInfo = __webpack_exports__.InterleaveInfo;
var __webpack_exports__InterleaveUnit = __webpack_exports__.InterleaveUnit;
var __webpack_exports__LightManager = __webpack_exports__.LightManager;
var __webpack_exports__Mesh = __webpack_exports__.Mesh;
var __webpack_exports__NormalHelper = __webpack_exports__.NormalHelper;
var __webpack_exports__PassLightClusters = __webpack_exports__.PassLightClusters;
var __webpack_exports__PassLightClustersBound = __webpack_exports__.PassLightClustersBound;
var __webpack_exports__PassLightClustersHelper = __webpack_exports__.PassLightClustersHelper;
var __webpack_exports__PointLight = __webpack_exports__.PointLight;
var __webpack_exports__PostEffectBase = __webpack_exports__.PostEffectBase;
var __webpack_exports__PostEffectBrightnessContrast = __webpack_exports__.PostEffectBrightnessContrast;
var __webpack_exports__PostEffectGray = __webpack_exports__.PostEffectGray;
var __webpack_exports__PostEffectHueSaturation = __webpack_exports__.PostEffectHueSaturation;
var __webpack_exports__PostEffectInvert = __webpack_exports__.PostEffectInvert;
var __webpack_exports__PostEffectManager = __webpack_exports__.PostEffectManager;
var __webpack_exports__PostEffectPixelize = __webpack_exports__.PostEffectPixelize;
var __webpack_exports__RedGPUContext = __webpack_exports__.RedGPUContext;
var __webpack_exports__RedGPUContextBase = __webpack_exports__.RedGPUContextBase;
var __webpack_exports__RedGPUContextResourceManager = __webpack_exports__.RedGPUContextResourceManager;
var __webpack_exports__Renderer = __webpack_exports__.Renderer;
var __webpack_exports__SHADER_DEFINE = __webpack_exports__.SHADER_DEFINE;
var __webpack_exports__Scene = __webpack_exports__.Scene;
var __webpack_exports__SkyBox = __webpack_exports__.SkyBox;
var __webpack_exports__SkyBoxMaterial = __webpack_exports__.SkyBoxMaterial;
var __webpack_exports__Sphere = __webpack_exports__.Sphere;
var __webpack_exports__TextureSampler = __webpack_exports__.TextureSampler;
var __webpack_exports__TypeSize = __webpack_exports__.TypeSize;
var __webpack_exports__UniformBufferDescriptor = __webpack_exports__.UniformBufferDescriptor;
var __webpack_exports__UniformBufferFloat32 = __webpack_exports__.UniformBufferFloat32;
var __webpack_exports__VertexBuffer = __webpack_exports__.VertexBuffer;
var __webpack_exports__View = __webpack_exports__.View;
var __webpack_exports__ViewDebugger = __webpack_exports__.ViewDebugger;
var __webpack_exports__computeViewFrustumPlanes = __webpack_exports__.computeViewFrustumPlanes;
var __webpack_exports__getConstructorName = __webpack_exports__.getConstructorName;
var __webpack_exports__glMatrix = __webpack_exports__.glMatrix;
var __webpack_exports__hexadecimalToRgb = __webpack_exports__.hexadecimalToRgb;
var __webpack_exports__init = __webpack_exports__.init;
var __webpack_exports__mat2 = __webpack_exports__.mat2;
var __webpack_exports__mat2d = __webpack_exports__.mat2d;
var __webpack_exports__mat3 = __webpack_exports__.mat3;
var __webpack_exports__mat4 = __webpack_exports__.mat4;
var __webpack_exports__quat = __webpack_exports__.quat;
var __webpack_exports__quat2 = __webpack_exports__.quat2;
var __webpack_exports__throwError = __webpack_exports__.throwError;
var __webpack_exports__throwErrorInstanceOf = __webpack_exports__.throwErrorInstanceOf;
var __webpack_exports__throwErrorNumberType = __webpack_exports__.throwErrorNumberType;
var __webpack_exports__vec2 = __webpack_exports__.vec2;
var __webpack_exports__vec3 = __webpack_exports__.vec3;
var __webpack_exports__vec4 = __webpack_exports__.vec4;
export { __webpack_exports__AmbientLight as AmbientLight, __webpack_exports__Axis as Axis, __webpack_exports__BaseLight as BaseLight, __webpack_exports__BaseObject3D as BaseObject3D, __webpack_exports__BaseObject3DPipeline as BaseObject3DPipeline, __webpack_exports__BasicCamera as BasicCamera, __webpack_exports__BitmapCubeTexture as BitmapCubeTexture, __webpack_exports__BitmapMaterial as BitmapMaterial, __webpack_exports__BitmapPhongMaterial as BitmapPhongMaterial, __webpack_exports__BitmapTexture as BitmapTexture, __webpack_exports__Box as Box, __webpack_exports__CONST_DIRTY_TRANSFORM_STATE as CONST_DIRTY_TRANSFORM_STATE, __webpack_exports__ColorMaterial as ColorMaterial, __webpack_exports__DirectionalLight as DirectionalLight, __webpack_exports__DisplayContainer as DisplayContainer, __webpack_exports__Geometry as Geometry, __webpack_exports__Grid as Grid, __webpack_exports__IndexBuffer as IndexBuffer, __webpack_exports__InterleaveInfo as InterleaveInfo, __webpack_exports__InterleaveUnit as InterleaveUnit, __webpack_exports__LightManager as LightManager, __webpack_exports__Mesh as Mesh, __webpack_exports__NormalHelper as NormalHelper, __webpack_exports__PassLightClusters as PassLightClusters, __webpack_exports__PassLightClustersBound as PassLightClustersBound, __webpack_exports__PassLightClustersHelper as PassLightClustersHelper, __webpack_exports__PointLight as PointLight, __webpack_exports__PostEffectBase as PostEffectBase, __webpack_exports__PostEffectBrightnessContrast as PostEffectBrightnessContrast, __webpack_exports__PostEffectGray as PostEffectGray, __webpack_exports__PostEffectHueSaturation as PostEffectHueSaturation, __webpack_exports__PostEffectInvert as PostEffectInvert, __webpack_exports__PostEffectManager as PostEffectManager, __webpack_exports__PostEffectPixelize as PostEffectPixelize, __webpack_exports__RedGPUContext as RedGPUContext, __webpack_exports__RedGPUContextBase as RedGPUContextBase, __webpack_exports__RedGPUContextResourceManager as RedGPUContextResourceManager, __webpack_exports__Renderer as Renderer, __webpack_exports__SHADER_DEFINE as SHADER_DEFINE, __webpack_exports__Scene as Scene, __webpack_exports__SkyBox as SkyBox, __webpack_exports__SkyBoxMaterial as SkyBoxMaterial, __webpack_exports__Sphere as Sphere, __webpack_exports__TextureSampler as TextureSampler, __webpack_exports__TypeSize as TypeSize, __webpack_exports__UniformBufferDescriptor as UniformBufferDescriptor, __webpack_exports__UniformBufferFloat32 as UniformBufferFloat32, __webpack_exports__VertexBuffer as VertexBuffer, __webpack_exports__View as View, __webpack_exports__ViewDebugger as ViewDebugger, __webpack_exports__computeViewFrustumPlanes as computeViewFrustumPlanes, __webpack_exports__getConstructorName as getConstructorName, __webpack_exports__glMatrix as glMatrix, __webpack_exports__hexadecimalToRgb as hexadecimalToRgb, __webpack_exports__init as init, __webpack_exports__mat2 as mat2, __webpack_exports__mat2d as mat2d, __webpack_exports__mat3 as mat3, __webpack_exports__mat4 as mat4, __webpack_exports__quat as quat, __webpack_exports__quat2 as quat2, __webpack_exports__throwError as throwError, __webpack_exports__throwErrorInstanceOf as throwErrorInstanceOf, __webpack_exports__throwErrorNumberType as throwErrorNumberType, __webpack_exports__vec2 as vec2, __webpack_exports__vec3 as vec3, __webpack_exports__vec4 as vec4 };

//# sourceMappingURL=RedGPU.mjs.map