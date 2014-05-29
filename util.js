/*
 * Copyright(c) 2014 Yuki Kurata <yuki.kurata@gmail.com>
 * MIT Licensed
 */

define({
  /**
   * @method inherits
   * @param  {Function} ctor
   * @param  {Function} superCtor
   */
  inherits: function inherits(ctor, superCtor) {
    'use strict';
    if (typeof Object.create === 'function') {

      // es5~
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });

    } else {

      // legacy
      ctor.super_ = superCtor;
      var Pr = function () {};
      Pr.prototype = superCtor.prototype;
      ctor.prototype = new Pr();
      ctor.prototype.constructor = ctor;

    }
  }
});
