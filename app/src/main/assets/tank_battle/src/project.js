window.__require = (function t(e, o, n) {
  function i(r, c) {
    if (!o[r]) {
      if (!e[r]) {
        var s = r.split("/");
        if (((s = s[s.length - 1]), !e[s])) {
          var l = "function" == typeof __require && __require;
          if (!c && l) return l(s, !0);
          if (a) return a(s, !0);
          throw new Error("Cannot find module '" + r + "'");
        }
        r = s;
      }
      var d = (o[r] = { exports: {} });
      e[r][0].call(
        d.exports,
        function (t) {
          return i(e[r][1][t] || t);
        },
        d,
        d.exports,
        t,
        e,
        o,
        n
      );
    }
    return o[r].exports;
  }
  for (
    var a = "function" == typeof __require && __require, r = 0;
    r < n.length;
    r++
  )
    i(n[r]);
  return i;
})(
  {
    APPSDK: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "01ed9sD8D1AyofIsjDMGjJt", "APPSDK");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("SDK"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.apiName = "bridge"), e;
              }
              var o;
              return (
                r(e, t),
                (o = e),
                (e.prototype.initSdk = function () {
                  console.log("APPSDK initSdk"),
                    (o.instance = this),
                    (this.api = window[this.apiName]),
                    this.callJniFunc("init", ""),
                    this.api.register("hasExit", function () {});
                }),
                (e.prototype.showPrivacy = function () {
                  this.callJniFunc("showPrivacy", "");
                }),
                (e.prototype.showBannerAd = function (t) {
                  void 0 === t && (t = 100),
                    this.callJniFunc("showBannerAd", t);
                }),
                (e.prototype.hideBannerAd = function () {
                  this.callJniFunc("hideBannerAd", "");
                }),
                (e.prototype.showInsertAd = function (t) {
                  void 0 === t && (t = 200),
                    this.callJniFunc("showInsertAd", t);
                }),
                (e.prototype.showVideoAd = function (t, e) {
                  void 0 === t && (t = 300),
                    this.callJniFuncAsyn("showVideoAd", t, e);
                }),
                (e.prototype.onBegin = function (t) {
                  this.callJniFunc("onBegin", t);
                }),
                (e.prototype.onCompleted = function (t) {
                  this.callJniFunc("onCompleted", t);
                }),
                (e.prototype.onFailed = function (t) {
                  this.callJniFunc("onFailed", t);
                }),
                (e.prototype.onEvent = function (t) {
                  this.callJniFunc("onEvent", t);
                }),
                (e.prototype.callJniFunc = function (t, e) {
                  this.api.call(t, e);
                }),
                (e.prototype.callJniFuncSyn = function (t, e) {
                  return this.api.call(t, e);
                }),
                (e.prototype.callJniFuncAsyn = function (t, e, o) {
                  this.api.call(t, e, o);
                }),
                (o = c([d], e))
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    Ballista: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "bcc0dnqZzFNK55Pai/H1LPF", "Ballista");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("UI_Fight"),
          l = i("UIManager"),
          d = i("GameUtil"),
          u = i("Unit_Base"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.count = 1e3), e;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "ballista");
                }),
                (e.prototype.connectAround = function (t) {
                  if (this.node.position.sub(t.position).mag() <= 77) {
                    var e = this.node.addComponent(cc.WeldJoint);
                    (e.connectedBody = t.getComponent(cc.RigidBody)),
                      (e.collideConnected = !0),
                      this.setSelfAnchor(t, e),
                      this.setOtherAnchor(t, e),
                      (e.referenceAngle = this.node.angle - t.angle),
                      e.apply();
                  }
                }),
                (e.prototype.update = function (t) {
                  1 == s.default.instance.fightStart &&
                    ((this.count -= 1e3 * t),
                    this.count <= 0 &&
                      1 == this.alive &&
                      1 == this.isConnect &&
                      (this.fireBallista(), (this.count = 1e3)));
                }),
                (e.prototype.fireBallista = function () {
                  cc.loader.loadRes(
                    "bullet/10_arrow01",
                    cc.SpriteFrame,
                    function (t, e) {
                      var o = this;
                      if (null == t) {
                        var n = new cc.Node("arrow");
                        if (
                          ((n.group = "bullet"),
                          (n.addComponent(cc.Sprite).spriteFrame = e),
                          n.addComponent(cc.RigidBody),
                          (n.addComponent(cc.PhysicsBoxCollider).size = cc.size(
                            10,
                            15
                          )),
                          !this.node)
                        )
                          return;
                        this.node.addChild(n),
                          (n.width = 100),
                          (n.height = 15),
                          (n.x =
                            n.width / 2 +
                            n.getComponent(cc.PhysicsBoxCollider).size.width),
                          (n.getComponent(cc.PhysicsBoxCollider).offset = cc.v2(
                            1 +
                              n.width / 2 +
                              n.getComponent(cc.PhysicsBoxCollider).size.width /
                                2,
                            0
                          ));
                        var i =
                            1e3 * Math.cos((this.node.angle * Math.PI) / 180),
                          a =
                            1e3 * Math.sin((this.node.angle * Math.PI) / 180) +
                            this.node.y,
                          r = cc.v2(i * this.node.scaleX, a);
                        (n.getComponent(cc.RigidBody).fixedRotation = !0),
                          (n.getComponent(cc.RigidBody).linearVelocity = r),
                          (n.getComponent(cc.RigidBody).enabledContactListener =
                            !0),
                          (n.getComponent(cc.RigidBody).onBeginContact =
                            function (t, e, i) {
                              n.destroy(),
                                "unit" == i.node.group &&
                                  (o.addEffect(i),
                                  i.node.name.indexOf("wheel") >= 0 ||
                                  i.node.name.indexOf("spring") >= 0 ||
                                  i.node.name.indexOf("spike") >= 0 ||
                                  i.node.name.indexOf("saw") >= 0
                                    ? i.node.parent
                                        .getComponent(u.default)
                                        .be_Hit(o.damage)
                                    : i.node
                                        .getComponent(u.default)
                                        .be_Hit(o.damage));
                            });
                      }
                    }.bind(this)
                  );
                }),
                (e.prototype.addEffect = function (t) {
                  var e = d.default.GetNodeWorldPositionForUINode(t.node).x,
                    o = d.default.GetNodeWorldPositionForUINode(t.node).y;
                  cc.loader.loadRes(
                    "Effects/FX_Collision_sparks",
                    cc.Prefab,
                    function (t, n) {
                      if (null == t) {
                        var i = cc.instantiate(n);
                        i.setParent(l.default.fightNode()),
                          (i.x = e),
                          (i.y = o),
                          (i.active = !0);
                      }
                    }.bind(this)
                  );
                }),
                c([f], e)
              );
            })(u.default));
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    Cannon: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "4d6c3jpDghMeqCsFS40ynu9", "Cannon");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("UI_Fight"),
          l = i("UIManager"),
          d = i("GameUtil"),
          u = i("Unit_Base"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.count = 1e3), e;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "cannon");
                }),
                (e.prototype.connectAround = function (t) {
                  if (this.node.position.sub(t.position).mag() <= 77) {
                    var e = this.node.addComponent(cc.WeldJoint);
                    (e.connectedBody = t.getComponent(cc.RigidBody)),
                      (e.collideConnected = !0),
                      this.setSelfAnchor(t, e),
                      this.setOtherAnchor(t, e),
                      (e.referenceAngle = this.node.angle - t.angle),
                      e.apply();
                  }
                }),
                (e.prototype.update = function (t) {
                  1 == s.default.instance.fightStart &&
                    ((this.count -= 1e3 * t),
                    this.count <= 0 &&
                      1 == this.alive &&
                      1 == this.isConnect &&
                      (this.fire(), (this.count = 1e3)));
                }),
                (e.prototype.fire = function () {
                  cc.loader.loadRes(
                    "bullet/icon_bullet_1",
                    cc.SpriteFrame,
                    function (t, e) {
                      var o = this;
                      if (null == t) {
                        var n = new cc.Node("cannon");
                        if (
                          ((n.group = "bullet"),
                          (n.addComponent(cc.Sprite).spriteFrame = e),
                          n.addComponent(cc.RigidBody),
                          (n.getComponent(cc.RigidBody).gravityScale = 15),
                          (n.addComponent(cc.PhysicsBoxCollider).size = cc.size(
                            28,
                            28
                          )),
                          !this.node)
                        )
                          return;
                        this.node.addChild(n),
                          (n.width = 28),
                          (n.height = 28),
                          (n.x =
                            n.width / 2 +
                            n.getComponent(cc.PhysicsBoxCollider).size.width +
                            20),
                          (n.y = 20),
                          (n.getComponent(cc.PhysicsBoxCollider).offset = cc.v2(
                            1 +
                              n.width / 2 +
                              n.getComponent(cc.PhysicsBoxCollider).size.width /
                                2,
                            0
                          )),
                          cc.loader.loadRes(
                            "Effects/FX_Muzzle_01",
                            cc.Prefab,
                            function (t, e) {
                              if (null == t) {
                                var o = cc.instantiate(e);
                                o.setParent(this.node),
                                  (o.x = 65),
                                  (o.y = 13),
                                  (o.scale = 0.6),
                                  (o.active = !0);
                              }
                            }.bind(this)
                          );
                        var i =
                            500 * Math.cos((this.node.angle * Math.PI) / 180),
                          a =
                            500 * Math.sin((this.node.angle * Math.PI) / 180) +
                            this.node.y,
                          r = cc.v2(i * this.node.scaleX, a);
                        (n.getComponent(cc.RigidBody).fixedRotation = !1),
                          (n.getComponent(cc.RigidBody).linearVelocity = r),
                          (n.getComponent(cc.RigidBody).enabledContactListener =
                            !0),
                          (n.getComponent(cc.RigidBody).onBeginContact =
                            function (t, e, i) {
                              "wall" == i.node.group || n.destroy(),
                                "unit" == i.node.group &&
                                  (i.node.name.indexOf("wheel") >= 0 ||
                                  i.node.name.indexOf("spring") >= 0 ||
                                  i.node.name.indexOf("spike") >= 0 ||
                                  i.node.name.indexOf("saw") >= 0
                                    ? i.node.parent
                                        .getComponent(u.default)
                                        .be_Hit(o.damage)
                                    : i.node
                                        .getComponent(u.default)
                                        .be_Hit(o.damage),
                                  o.addEffect(i));
                            });
                      }
                    }.bind(this)
                  );
                }),
                (e.prototype.addEffect = function (t) {
                  var e = d.default.GetNodeWorldPositionForUINode(t.node).x,
                    o = d.default.GetNodeWorldPositionForUINode(t.node).y;
                  cc.loader.loadRes(
                    "Effects/FX_Collision_Boom",
                    cc.Prefab,
                    function (t, n) {
                      if (null == t) {
                        var i = cc.instantiate(n);
                        i.setParent(l.default.fightNode()),
                          (i.x = e),
                          (i.y = o),
                          (i.active = !0);
                      }
                    }.bind(this)
                  );
                }),
                c([f], e)
              );
            })(u.default));
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    CarManager: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "c1f978R2lFFraF+mUE0UdvT", "CarManager");
        var i = o,
          a = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          l =
            (c.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.haveEnergy = !1), (e.haveFuel = !1), e;
              }
              var o;
              return (
                a(e, t),
                (o = e),
                (e.prototype.onLoad = function () {
                  o.instance = this;
                }),
                (e.instance = null),
                (o = r([s], e))
              );
            })(cc.Component));
        (i.default = l), cc._RF.pop();
      },
      {},
    ],
    Collect_List_Unit_item: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "a204fBrXrhORY3guXZv2PDV", "Collect_List_Unit_item");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("StaticData"),
          l = i("EnumDefiner"),
          d = i("UIManager"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.num = null),
                (e.energy = null),
                (e.level = null),
                (e.icon = null),
                (e.progress = null),
                (e.progressLabel = null),
                (e.icon_Max_Small = null),
                (e.unitName = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.onLoad = function () {
                this.node.on(
                  cc.Node.EventType.TOUCH_START,
                  this.onEvent_TouchStart,
                  this
                ),
                  this.node.on(
                    cc.Node.EventType.TOUCH_END,
                    this.onEvent_TouchEnd,
                    this
                  );
              }),
              (e.prototype.onDisable = function () {
                this.node.off(
                  cc.Node.EventType.MOUSE_DOWN,
                  this.onEvent_TouchStart
                ),
                  this.node.off(
                    cc.Node.EventType.MOUSE_UP,
                    this.onEvent_TouchEnd
                  );
              }),
              (e.prototype.Show_Collect_Unit_item = function (t) {
                switch (
                  ((this.staticUnitData = s.default.GetUnitDataByIDAndLv(
                    t.id,
                    t.level
                  )),
                  (this.unitData = t),
                  this.staticUnitData.quality)
                ) {
                  case l.ENUM_UNIT_QUALITY.E_BLUE:
                    cc.loader.loadRes(
                      "UI/unit/1",
                      cc.SpriteFrame,
                      function (t, e) {
                        null == t
                          ? (this.node
                              .getChildByName("ui_pz_double")
                              .getComponent(cc.Sprite).spriteFrame = e)
                          : console.error(t);
                      }.bind(this)
                    );
                    break;
                  case l.ENUM_UNIT_QUALITY.E_PURPLE:
                    cc.loader.loadRes(
                      "UI/unit/2",
                      cc.SpriteFrame,
                      function (t, e) {
                        null == t &&
                          (this.node
                            .getChildByName("ui_pz_double")
                            .getComponent(cc.Sprite).spriteFrame = e);
                      }.bind(this)
                    );
                    break;
                  case l.ENUM_UNIT_QUALITY.E_ORANGE:
                    cc.loader.loadRes(
                      "UI/unit/3",
                      cc.SpriteFrame,
                      function (t, e) {
                        null == t &&
                          (this.node
                            .getChildByName("ui_pz_double")
                            .getComponent(cc.Sprite).spriteFrame = e);
                      }.bind(this)
                    );
                }
                this.staticUnitData.isLocked
                  ? (this.num.getComponent(cc.Label).string = "x0")
                  : (this.num.getComponent(cc.Label).string =
                      "x" + this.staticUnitData.maxCount),
                  (this.level.getComponent(cc.Label).string =
                    this.unitData.level),
                  (this.energy.getComponent(cc.Label).string =
                    this.staticUnitData.energy + ""),
                  (this.unitName.getComponent(cc.Label).string =
                    this.staticUnitData.name),
                  (this.iconUrl = this.staticUnitData.iconUrl),
                  cc.loader.loadRes(
                    "Unit/" + this.staticUnitData.iconUrl,
                    cc.SpriteFrame,
                    function (t, e) {
                      null == t &&
                        (this.icon.getComponent(cc.Sprite).spriteFrame = e);
                    }.bind(this)
                  ),
                  this.setProgress();
              }),
              (e.prototype.setProgress = function () {
                -1 != this.staticUnitData.upgrade_card
                  ? ((this.progressLabel.string =
                      this.unitData.pieceCount +
                      "/" +
                      this.staticUnitData.upgrade_card),
                    (this.progress.getComponent(cc.ProgressBar).progress =
                      (1 * this.unitData.pieceCount) /
                      this.staticUnitData.upgrade_card),
                    (this.icon_Max_Small.active = !1))
                  : ((this.progress.getComponent(cc.ProgressBar).progress = 1),
                    (this.progressLabel.node.active = !1),
                    (this.icon_Max_Small.active = !0));
              }),
              (e.prototype.onEvent_TouchStart = function () {}),
              (e.prototype.onEvent_TouchEnd = function () {
                d.default.ShowUI_CollectDetails(this.unitData);
              }),
              c([f(cc.Node)], e.prototype, "num", void 0),
              c([f(cc.Node)], e.prototype, "energy", void 0),
              c([f(cc.Node)], e.prototype, "level", void 0),
              c([f(cc.Node)], e.prototype, "icon", void 0),
              c([f(cc.Node)], e.prototype, "progress", void 0),
              c([f(cc.Label)], e.prototype, "progressLabel", void 0),
              c([f(cc.Node)], e.prototype, "icon_Max_Small", void 0),
              c([f(cc.Node)], e.prototype, "unitName", void 0),
              c([p], e)
            );
          })(cc.Component);
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    Config: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "d2491HPjb9JAoqx6KgERzNs", "Config");
        var i = o,
          a = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          s =
            (r.property,
            (function () {
              function t() {}
              return (
                Object.defineProperty(t, "DATA_COOLDOWN_LOGINREWARD", {
                  get: function () {
                    return 864e5;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.EVENT_GAMESTART = "GAMEMANAGER:START"),
                (t.EVENT_GAMEEND = "GAMEMANAGER:END"),
                (t.PREPAREITEM_MOVE = "PREPAREITEM:MOVE"),
                (t.LIST_ITEM_CHANGE = "LIST_ITEM: CHANGE"),
                (t.UNIT_UNDER_ATTACK = "UNIT_UNDER_ATTACK"),
                (t.EVENT_ADD_HP = "EVENT_ADD_HP"),
                (t.EVENT_REMOVE_HP = "EVENT_REMOVE_HP"),
                (t.DRIVER_ICON = "Unit/driver"),
                (t.GAME_OVER = "GAME_OVER"),
                (t.PERSONAL_ASSETS_CHANGE = "PERSONAL_ASSETS:CHANGE"),
                (t.ENERGY_CHANGE = "ENERGY:CHANGE"),
                (t.NATIVEAD_SHOW = "NATIVEAD_SHOW"),
                (t.UI_TITLE_BANNER = 101),
                (t.UI_GAME_BANNER = 102),
                (t.UI_FINISH_WIN_BANNER = 103),
                (t.UI_FINISH_FAIL_BANNER = 104),
                (t.UI_WHEEL_BANNER = 105),
                (t.UI_PAUSE_BANNER = 106),
                (t.UI_LOGIN_REWARD_BANNER = 107),
                (t.UI_SHOP_BANNER = 108),
                (t.UI_SEARCHING_BANNER = 109),
                (t.UI_ADD_COIN_BANNER = 110),
                (t.UI_TRY_BTN_BANNER = 111),
                (t.UI_LEVEL_REWARD_BANNER = 112),
                (t.UI_LEVEL_UP_BANNER = 113),
                (t.UI_TITLE_INSERT = 201),
                (t.UI_FINISH_WIN_INSERT = 202),
                (t.UI_FINISH_FAIL_INSERT = 203),
                (t.UI_WHEEL_INSERT = 204),
                (t.UI_PAUSE_INSERT = 205),
                (t.UI_LOGIN_REWARD_INSERT = 206),
                (t.UI_SHOP_INSERT = 207),
                (t.UI_ADD_COIN_INSERT = 208),
                (t.UI_TRY_BTN_INSERT = 209),
                (t.UI_LEVEL_REWARD_INSERT = 210),
                (t.UI_LEVEL_UP_INSERT = 211),
                (t.UI_GAME_INSERT = 212),
                (t.UI_TITLE_VIDEO = 301),
                (t.UI_FINISH_BTN_VIDEO = 302),
                (t.UI_WHEEL_BTN_VIDEO = 303),
                (t.UI_LOGIN_REWARD_BTN_VIDEO = 304),
                (t.UI_SHOP_UNLOCK_AVATAR = 305),
                (t.UI_SHOP_UNLOCK_WEAPON_VIDEO = 306),
                (t.UI_ADD_COIN_BTN_VIDEO = 307),
                (t.UI_TRY_BTN_VIDEO = 308),
                (t.UI_GAME_PROP_HP_VIDEO = 309),
                (t.UI_GAME_PROP_FREE_ZON_VIDEO = 310),
                (t.UI_GAME_PROP_SHIELD_VIDEO = 311),
                (t.UI_SHOP_UP_WEAPON_VIDEO = 312),
                (t.UI_LEVEL_REWARD_VIDEO = 313),
                (t.UI_LEVEL_UP_VIDEO = 314),
                (t.UI_LIST_ITEM_VIDEO = 315),
                (t.UI_RESOURCE_ITEM_VIDEO = 316),
                a([c], t)
              );
            })());
        (i.default = s), cc._RF.pop();
      },
      {},
    ],
    DataDefiner: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "58d8cXuQ99EBbWiJlDdftal", "DataDefiner");
        var n = o;
        Object.defineProperty(n, "__esModule", { value: !0 }), cc._RF.pop();
      },
      {},
    ],
    DataManager: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "eb0d3xdECxHKJ54DtwFZ740", "DataManager");
        var i = t,
          a = o,
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var c = i("Config"),
          s = i("EnumDefiner"),
          l = i("EventManager"),
          d = i("StaticData"),
          u = cc._decorator,
          p = u.ccclass,
          f =
            (u.property,
            (function () {
              function t() {}
              var e;
              return (
                (e = t),
                (t.resetLevelAnalysisData = function () {
                  e.levelAnalysisData = [];
                }),
                (t.createLevelAnalysisData = function (t, o, n, i) {
                  var a = {
                    isWin: t,
                    finishDuration: o,
                    unitList: n,
                    finishUnitList: i,
                  };
                  e.levelAnalysisData.push(a);
                }),
                (t.checkStar = function (t, o, n, i) {
                  for (
                    var a = 0,
                      r = 0,
                      c = 0,
                      l = 0,
                      d = 0,
                      u = 0,
                      p = 0,
                      f = 0,
                      h = 0,
                      y = {},
                      m = {},
                      _ = 0;
                    _ < e.levelAnalysisData.length;
                    _++
                  ) {
                    var g = e.levelAnalysisData[_];
                    g.isWin && a++;
                    for (var v = {}, b = 0; b < g.unitList.length; b++)
                      null != v[(S = g.unitList[b].id)] ? v[S]++ : (v[S] = 1);
                    var N = {};
                    for (b = 0; b < g.unitList.length; b++)
                      null != N[(w = g.unitList[b].group)]
                        ? N[w]++
                        : (N[w] = 1);
                    switch (t) {
                      case s.ENUM_StarCondition.E_WinCount_LeastUnit:
                        g.isWin && null != v[n] && v[n] >= i && r++;
                        break;
                      case s.ENUM_StarCondition.E_WinCount_LeastUnitGroup:
                        g.isWin && null != N[n] && N[n] >= i && l++;
                        break;
                      case s.ENUM_StarCondition.E_WinCount_MostUnit:
                        g.isWin && null != v[n] && v[n] <= i && c++;
                        break;
                      case s.ENUM_StarCondition.E_WinCount_MostUnitGroup:
                        g.isWin && null != N[n] && N[n] <= i && d++;
                        break;
                      case s.ENUM_StarCondition.E_WinCount_WithoutUnit:
                        g.isWin && v[n];
                        break;
                      case s.ENUM_StarCondition.E_WinCount_WithoutUnitGroup:
                        g.isWin && N[n];
                    }
                    var C = Object.keys(v);
                    for (b = 0; b < C.length; b++) {
                      var S;
                      null != y[(S = C[b])] ? y[S]++ : (y[S] = 1);
                    }
                    var I = Object.keys(N);
                    for (b = 0; b < I.length; b++) {
                      var w;
                      null != m[(w = I[b])] ? m[w]++ : (m[w] = 1);
                    }
                    var E =
                      ((1 * g.finishUnitList.length) / g.unitList.length) * 100;
                    switch (t) {
                      case s.ENUM_StarCondition.E_WinCount_LessTime:
                        g.isWin && g.finishDuration <= n && u++;
                        break;
                      case s.ENUM_StarCondition.E_WinCount_MoreTime:
                        g.isWin && g.finishDuration >= n && p++;
                        break;
                      case s.ENUM_StarCondition.E_WinCount_LessUnitPercent:
                        g.isWin && E >= n && f++;
                        break;
                      case s.ENUM_StarCondition.E_WinCount_MoreUnitPercent:
                        g.isWin && E >= n && h++;
                    }
                  }
                  switch (t) {
                    case s.ENUM_StarCondition.E_WinCount:
                      return a >= o;
                    case s.ENUM_StarCondition.E_WinCount_LeastUnit:
                      return r >= o;
                    case s.ENUM_StarCondition.E_WinCount_MostUnit:
                      return c >= o;
                    case s.ENUM_StarCondition.E_LeastUnit:
                      return null != y[o] && y[o] >= n;
                    case s.ENUM_StarCondition.E_MostUnit:
                      return null != y[o] && y[o] <= n;
                    case s.ENUM_StarCondition.E_WinCount_WithoutUnit:
                      return a >= o;
                    case s.ENUM_StarCondition.E_WinCount_LeastUnitGroup:
                      return l >= o;
                    case s.ENUM_StarCondition.E_WinCount_MostUnitGroup:
                      return d >= o;
                    case s.ENUM_StarCondition.E_LeastUnitGroup:
                      return null != m[o] && m[o] >= n;
                    case s.ENUM_StarCondition.E_MostUnitGroup:
                      return null != m[o] && m[o] <= n;
                    case s.ENUM_StarCondition.E_WinCount_WithoutUnitGroup:
                      return a >= o;
                    case s.ENUM_StarCondition.E_WinCount_LessTime:
                      return u >= o;
                    case s.ENUM_StarCondition.E_WinCount_MoreTime:
                      return p >= o;
                    case s.ENUM_StarCondition.E_WinCount_LessUnitPercent:
                      return f >= o;
                    case s.ENUM_StarCondition.E_WinCount_MoreUnitPercent:
                      return h >= o;
                  }
                  return !1;
                }),
                (t.InitRuntimeData = function (t) {
                  var o = this;
                  e.inited ||
                    d.default.initStaticData(function () {
                      (o.RuntimeData.avatarList = []),
                        (o.RuntimeData.levelList = []);
                      for (var n = 0; n < d.default.levelList.length; n++)
                        o.RuntimeData.levelList.push({
                          id: d.default.levelList[n].id,
                          isLocked: d.default.levelList[n].initLock,
                          star: 0,
                        });
                      for (
                        e.RuntimeData.unitLevelData = [], n = 0;
                        n < d.default.unitData.length;
                        n++
                      ) {
                        for (
                          var i = !1, a = 0;
                          a < e.RuntimeData.unitLevelData.length;
                          a++
                        )
                          if (
                            d.default.unitData[n].id ==
                            e.RuntimeData.unitLevelData[a].id
                          ) {
                            i = !0;
                            break;
                          }
                        i ||
                          e.RuntimeData.unitLevelData.push({
                            id: d.default.unitData[n].id,
                            level: 1,
                            pieceCount: 0,
                            isLocked: d.default.unitData[n].isLocked,
                          });
                      }
                      var r = cc.sys.localStorage.getItem(
                        "USERDATA_PLAYERDATA_" + d.default.pkgName
                      );
                      if (null != r && 0 != r.length) {
                        var c = JSON.parse(r);
                        (e.RuntimeData = o.getDataObj(e.RuntimeData, c)), t();
                      } else o.SaveData();
                    });
                }),
                (t.getDataObj = function (t, e) {
                  if ("string" == typeof t) return e;
                  for (
                    var o = Object.keys(t), n = Object.keys(e), i = 0;
                    i < o.length;
                    i++
                  )
                    for (var a = o[i], r = 0; r < n.length; r++)
                      if (n[r] == a) {
                        Object.keys(t[a]).length > 0
                          ? (t[a] = this.getDataObj(t[a], e[a]))
                          : (t[a] = e[a]);
                        break;
                      }
                  return t;
                }),
                (t.SaveData = function () {
                  console.error(
                    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SaveData:",
                    e.RuntimeData.carModel
                  ),
                    cc.sys.localStorage.setItem(
                      "USERDATA_PLAYERDATA_" + d.default.pkgName,
                      JSON.stringify(e.RuntimeData)
                    );
                }),
                (t.AdjustGear = function (t) {
                  (e.RuntimeData.curGears += t),
                    e.RuntimeData.curGears < 0 && (e.RuntimeData.curGears = 0),
                    l.default.emit(c.default.PERSONAL_ASSETS_CHANGE),
                    e.SaveData();
                }),
                (t.AdjustDiamond = function (t) {
                  (e.RuntimeData.curDiamonds += t),
                    e.RuntimeData.curDiamonds < 0 &&
                      (e.RuntimeData.curDiamonds = 0),
                    l.default.emit(c.default.PERSONAL_ASSETS_CHANGE),
                    e.SaveData();
                }),
                (t.UnitUpGrade = function (t) {
                  for (var o = 0; o < e.RuntimeData.unitLevelData.length; o++)
                    if (t == e.RuntimeData.unitLevelData[o].id) {
                      e.RuntimeData.unitLevelData[o].level++;
                      break;
                    }
                  e.SaveData();
                }),
                (t.AdjustdrawTimes = function (t) {
                  (e.RuntimeData.drawTimes += t),
                    e.RuntimeData.drawTimes < 0 &&
                      (e.RuntimeData.drawTimes = 0),
                    e.SaveData();
                }),
                (t.AdjustUnitPiece = function (t, o) {
                  for (var n = 0; n < e.RuntimeData.unitLevelData.length; n++)
                    if (e.RuntimeData.unitLevelData[n].id == t) {
                      e.RuntimeData.unitLevelData[n].isLocked &&
                        e.unLockUnitById(t),
                        (e.RuntimeData.unitLevelData[n].pieceCount += o),
                        e.RuntimeData.unitLevelData[n].pieceCount < 0 &&
                          (e.RuntimeData.unitLevelData[n].pieceCount = 0);
                      break;
                    }
                  e.SaveData();
                }),
                (t.unLockUnitById = function (t) {
                  for (var o = 0; o < e.RuntimeData.unitLevelData.length; o++)
                    e.RuntimeData.unitLevelData[o].id == t &&
                      (e.RuntimeData.unitLevelData[o].isLocked = !1);
                }),
                (t.CanGetLoginReward = function () {
                  return !(
                    e.RuntimeData.loginReward.step >=
                      d.default.loginReward.length ||
                    Date.now() <
                      e.RuntimeData.loginReward.lastGetTime +
                        c.default.DATA_COOLDOWN_LOGINREWARD
                  );
                }),
                (t.GetLoginReward = function () {
                  var t = d.default.loginReward[e.RuntimeData.loginReward.step];
                  switch (t.id) {
                    case d.default.REWARDID.COIN.id:
                    case d.default.REWARDID.GEARS.id:
                    case d.default.REWARDID.UNIT01.id:
                  }
                  return (
                    e.RuntimeData.loginReward.step++,
                    (e.RuntimeData.loginReward.lastGetTime = Date.now()),
                    e.SaveData(),
                    t
                  );
                }),
                (t.GetWheelReward = function (t) {
                  var o = d.default.wheelReward[t];
                  switch ((this.AdjustdrawTimes(-1), o.id)) {
                    case d.default.REWARDID.DIAMOND.id:
                      e.AdjustDiamond(o.value);
                      break;
                    case d.default.REWARDID.GEARS.id:
                      e.AdjustGear(o.value);
                      break;
                    case d.default.REWARDID.UNIT01.id:
                  }
                  e.SaveData();
                }),
                (t.GetLevelDataById = function (t) {
                  for (var e = 0; e < this.RuntimeData.levelList.length; e++)
                    if (this.RuntimeData.levelList[e].id == t)
                      return this.RuntimeData.levelList[e];
                  return null;
                }),
                (t.GetUnitLevelDataById = function (t) {
                  for (
                    var e = 0;
                    e < this.RuntimeData.unitLevelData.length;
                    e++
                  )
                    if (this.RuntimeData.unitLevelData[e].id == t)
                      return this.RuntimeData.unitLevelData[e];
                  return null;
                }),
                (t.StartLevel = function (t) {
                  (e.curLevelId = t), (e.curLevelSmallIdx = 0);
                  var o = d.default.GetLevelDataById(t);
                  (e.curHeart = o.heartCount), e.resetLevelAnalysisData();
                }),
                (t.AddLevelSmallIdx = function () {
                  e.curLevelSmallIdx++;
                }),
                (t.MinusHeart = function () {
                  e.curHeart--;
                }),
                (t.unLockLevel = function (t) {
                  for (var o = 0; o < e.RuntimeData.levelList.length; o++)
                    e.RuntimeData.levelList[o].id == t &&
                      void 0 != e.RuntimeData.levelList[o + 1] &&
                      ((e.RuntimeData.levelList[o + 1].isLocked = !1),
                      e.SaveData());
                }),
                (t.setLevelStar = function (t, o) {
                  for (var n = 0; n < e.RuntimeData.levelList.length; n++)
                    if (e.RuntimeData.levelList[n].id == t) {
                      if (e.RuntimeData.levelList[n].star >= o) return;
                      (e.RuntimeData.levelList[n].star = o), e.SaveData();
                    }
                }),
                (t.GetRandomWheelReward = function () {
                  for (
                    var t = d.default.wheelReward, e = 0, o = 0;
                    o < t.length;
                    o++
                  )
                    e += t[o].weight;
                  var n = Math.random() * e,
                    i = 0;
                  for (o = 0; o < t.length; o++)
                    if (n < (i += t[o].weight)) return o;
                }),
                (t.pakName = ""),
                (t.version = "1.0.0"),
                (t.inited = !1),
                (t.enemyCarModel = []),
                (t.judgeCarList = []),
                (t.judgeEnemyCarList = []),
                (t.destroyEnemyUnitNum = 0),
                (t.RuntimeData = {
                  curDiamonds: 0,
                  curGears: 0,
                  curAvatar: "1001",
                  curLevelId: "",
                  firstGame: !0,
                  unitLevelData: [],
                  avatarList: [{ id: "1001", isLocked: !1, unlockValue: 0 }],
                  levelList: [{ id: "level_1001", isLocked: !1, star: 0 }],
                  loginReward: { step: 0, lastGetTime: 0 },
                  drawTimes: 3,
                  curCarModelIndex: 0,
                  carModel: [[], [], []],
                }),
                (t.videoUnitList = []),
                (t.clickInLevel = !1),
                (t.isMute = !1),
                (t.levelAnalysisData = [
                  {
                    isWin: !1,
                    finishDuration: 0,
                    unitList: [
                      {
                        uniId: 0,
                        id: "1001",
                        pos: { x: 0, y: 0 },
                        hp: 100,
                        group: "frame",
                      },
                    ],
                    finishUnitList: [{ uniId: 0, hp: 50 }],
                  },
                ]),
                (t.curLevelId = ""),
                (t.curHeart = 0),
                (t.curLevelSmallIdx = 0),
                (e = r([p], t))
              );
            })());
        (a.default = f), cc._RF.pop();
      },
      {},
    ],
    Driver: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "c7a78pwgwhNPJ/TID7dLw+G", "Driver");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("Unit_Base"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "car_driver");
                }),
                (e.prototype.connectAround = function (t) {}),
                c([d], e)
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    Electric_Saw: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "ecb437P/EVMzq28K+Cv2Xmd", "Electric_Saw");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("UI_Fight"),
          l = i("UIManager"),
          d = i("GameUtil"),
          u = i("CarManager"),
          p = i("Unit_Base"),
          f = cc._decorator,
          h = f.ccclass,
          y =
            (f.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e.count = 0),
                  (e.indexX = 30),
                  (e.connect = !1),
                  (e.contactCount = 0),
                  (e.baseDamage = 20),
                  (e.contactList = []),
                  (e.beHitCount = 0),
                  (e.damageDelay = 100),
                  e
                );
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "electric_saw");
                }),
                (e.prototype.setSelfAnchor = function (t, e) {
                  var o = (t.x - this.node.x) / 2,
                    n = (t.y - this.node.y) / 2;
                  this.node.angle % 360 == 90
                    ? (e.anchor = cc.v2(n + 10, -o))
                    : this.node.angle % 360 == 180
                    ? (e.anchor = cc.v2(10 - o, -n))
                    : this.node.angle % 360 == 270
                    ? (e.anchor = cc.v2(10 - n, o))
                    : this.node.angle % 360 == 0 &&
                      (e.anchor = cc.v2(o + 10, n));
                }),
                (e.prototype.setSpecialSelfAnchor = function (t, e) {
                  var o = (t.x - e.x) / 2,
                    n = (t.y - e.y) / 2;
                  this.node.angle % 360 == 90
                    ? (e.anchor = cc.v2(n - 45, 23 - o))
                    : this.node.angle % 360 == 180
                    ? (e.anchor = cc.v2(-o - 20, -n))
                    : this.node.angle % 360 == 270
                    ? (e.anchor = cc.v2(-n - 50, o - 23))
                    : this.node.angle % 360 == 0 &&
                      (e.anchor = cc.v2(o - 500, n));
                }),
                (e.prototype.setSpecialOtherAnchor = function (t, e) {
                  var o = (t.x - e.x) / 2,
                    n = (t.y - e.y) / 2;
                  this.node.angle % 360 == 90
                    ? (e.connectedAnchor = cc.v2(n + 15, -o))
                    : this.node.angle % 360 == 180
                    ? (e.connectedAnchor = cc.v2(15 - o, -n))
                    : this.node.angle % 360 == 270
                    ? (e.connectedAnchor = cc.v2(15 - n, o))
                    : this.node.angle % 360 == 0 &&
                      (e.connectedAnchor = cc.v2(o - 500, n));
                }),
                (e.prototype.connectAround = function (t) {
                  var e = this;
                  if (this.node.position.sub(t.position).mag() <= 77) {
                    this.connect = !0;
                    var o = this.node
                      .getChildByName("saw_base")
                      .addComponent(cc.WeldJoint);
                    (o.connectedBody = t.getComponent(cc.RigidBody)),
                      (o.collideConnected = !0),
                      this.setSelfAnchor(t, o),
                      this.setOtherAnchor(t, o),
                      (o.referenceAngle = this.node.angle - t.angle),
                      o.apply();
                    var n = this.node.getChildByName("saw_saw");
                    (n.getComponent(cc.RigidBody).onBeginContact = function (
                      t,
                      o,
                      n
                    ) {
                      var i = { body: n, isFirstConnect: !0 };
                      e.contactList.push(i);
                    }),
                      (n.getComponent(cc.RigidBody).onEndContact = function (
                        t,
                        o,
                        n
                      ) {
                        if (e.contactList.length > 0)
                          for (var i = 0; i < e.contactList.length; i++)
                            e.contactList[i].body == n &&
                              e.contactList.splice(i, 1);
                      });
                  }
                }),
                (e.prototype.addEffect = function (t) {
                  if ((this.beHitCount++, 4 == this.beHitCount)) {
                    this.beHitCount = 0;
                    var e = d.default.GetNodeWorldPositionForUINode(t.node).x,
                      o = d.default.GetNodeWorldPositionForUINode(t.node).y;
                    cc.loader.loadRes(
                      "Effects/FX_Collision_sparks",
                      cc.Prefab,
                      function (t, n) {
                        if (null == t) {
                          var i = cc.instantiate(n);
                          i.setParent(l.default.fightNode()),
                            (i.x = e),
                            (i.y = o),
                            (i.active = !0);
                        }
                      }.bind(this)
                    );
                  }
                }),
                (e.prototype.update = function (t) {
                  if (1 == this.alive && 1 == this.isConnect)
                    for (var e = 0; e < this.node.children.length; e++)
                      this.node.children[e]
                        .getComponent(cc.RigidBody)
                        .syncPosition(!0);
                  if (
                    this.contactList.length > 0 &&
                    0 == s.default.instance.isOver
                  )
                    for (e = 0; e < this.contactList.length; e++) {
                      var o;
                      if (
                        ((o =
                          1 == this.contactList[e].isFirstConnect
                            ? u.default.instance.haveEnergy
                              ? this.baseDamage *
                                this.damage *
                                u.default.instance.engineNum
                              : this.baseDamage * this.damage
                            : u.default.instance.haveEnergy
                            ? this.baseDamage * u.default.instance.engineNum
                            : this.baseDamage),
                        "unit" == this.contactList[e].body.node.group)
                      ) {
                        if (
                          ((this.damageDelay -= 1e3 * t),
                          this.contactList[e].body.node.parent ==
                            this.node.parent)
                        )
                          return;
                        this.contactList[e].body.node.name.indexOf("wheel") >=
                          0 ||
                        this.contactList[e].body.node.name.indexOf("spring") >=
                          0 ||
                        this.contactList[e].body.node.name.indexOf("spike") >=
                          0 ||
                        this.contactList[e].body.node.name.indexOf("saw") >= 0
                          ? (this.addEffect(this.contactList[e].body),
                            this.damageDelay <= 0 &&
                              ((this.damageDelay = 100),
                              this.contactList[e].body.node.parent
                                .getComponent(p.default)
                                .be_Hit(o)))
                          : (this.addEffect(this.contactList[e].body),
                            this.damageDelay <= 0 &&
                              ((this.damageDelay = 100),
                              this.contactList[e].body.node
                                .getComponent(p.default)
                                .be_Hit(o)));
                      }
                    }
                }),
                c([h], e)
              );
            })(p.default));
        (a.default = y), cc._RF.pop();
      },
      {},
    ],
    Engine: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "3b209+lQipCmamt+aStq14M", "Engine");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("Unit_Base"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "engine");
                }),
                (e.prototype.connectAround = function (t) {
                  var e = this.node.addComponent(cc.WeldJoint);
                  (e.connectedBody = t.getComponent(cc.RigidBody)),
                    (e.collideConnected = !0),
                    (e.anchor = cc.v2(
                      (t.x - this.node.x) / 2,
                      (t.y - this.node.y) / 2
                    )),
                    this.setOtherAnchor(t, e),
                    (e.referenceAngle = -t.angle),
                    e.apply();
                }),
                c([d], e)
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    EnumDefiner: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "8f983GuxXZM5KE7qo+pEjPz", "EnumDefiner");
        var n = o;
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (function (t) {
            (t[(t.E_None = 0)] = "E_None"),
              (t[(t.E_WinCount = 1)] = "E_WinCount"),
              (t[(t.E_WinCount_LeastUnit = 2)] = "E_WinCount_LeastUnit"),
              (t[(t.E_WinCount_MostUnit = 3)] = "E_WinCount_MostUnit"),
              (t[(t.E_LeastUnit = 4)] = "E_LeastUnit"),
              (t[(t.E_MostUnit = 5)] = "E_MostUnit"),
              (t[(t.E_WinCount_WithoutUnit = 6)] = "E_WinCount_WithoutUnit"),
              (t[(t.E_WinCount_LessTime = 7)] = "E_WinCount_LessTime"),
              (t[(t.E_WinCount_MoreTime = 8)] = "E_WinCount_MoreTime"),
              (t[(t.E_WinCount_LessUnitPercent = 9)] =
                "E_WinCount_LessUnitPercent"),
              (t[(t.E_WinCount_MoreUnitPercent = 10)] =
                "E_WinCount_MoreUnitPercent"),
              (t[(t.E_WinCount_LeastUnitGroup = 11)] =
                "E_WinCount_LeastUnitGroup"),
              (t[(t.E_WinCount_MostUnitGroup = 12)] =
                "E_WinCount_MostUnitGroup"),
              (t[(t.E_LeastUnitGroup = 13)] = "E_LeastUnitGroup"),
              (t[(t.E_MostUnitGroup = 14)] = "E_MostUnitGroup"),
              (t[(t.E_WinCount_WithoutUnitGroup = 15)] =
                "E_WinCount_WithoutUnitGroup"),
              (t[(t.E_Type1 = 16)] = "E_Type1");
          })(n.ENUM_StarCondition || (n.ENUM_StarCondition = {})),
          (function (t) {
            (t[(t.E_RIGHT = 0)] = "E_RIGHT"),
              (t[(t.E_UP = 1)] = "E_UP"),
              (t[(t.E_LEFT = 2)] = "E_LEFT"),
              (t[(t.E_DOWN = 3)] = "E_DOWN");
          })(n.ENUM_UnitDirection || (n.ENUM_UnitDirection = {})),
          (function (t) {
            (t[(t.ENUM_ALL = 0)] = "ENUM_ALL"),
              (t[(t.ENUM_DRIVER = 1)] = "ENUM_DRIVER"),
              (t[(t.ENUM_FRAME = 2)] = "ENUM_FRAME"),
              (t[(t.ENUM_WHEEL = 3)] = "ENUM_WHEEL"),
              (t[(t.ENUM_MELEEWEAPON = 4)] = "ENUM_MELEEWEAPON"),
              (t[(t.ENUM_RANGEWEAPON = 5)] = "ENUM_RANGEWEAPON"),
              (t[(t.ENUM_TECH = 6)] = "ENUM_TECH");
          })(n.ENUM_UnitType || (n.ENUM_UnitType = {})),
          (function (t) {
            (t[(t.ENUM_DIAMOND = 0)] = "ENUM_DIAMOND"),
              (t[(t.ENUM_GEAR = 1)] = "ENUM_GEAR"),
              (t[(t.ENUM_UNITCARD = 2)] = "ENUM_UNITCARD");
          })(n.ENUM_CHESTREWARDTYPE || (n.ENUM_CHESTREWARDTYPE = {})),
          (function (t) {
            (t[(t.E_NONE = 0)] = "E_NONE"),
              (t[(t.E_BLUE = 1)] = "E_BLUE"),
              (t[(t.E_PURPLE = 2)] = "E_PURPLE"),
              (t[(t.E_ORANGE = 3)] = "E_ORANGE"),
              (t[(t.E_RED = 4)] = "E_RED");
          })(n.ENUM_UNIT_QUALITY || (n.ENUM_UNIT_QUALITY = {})),
          (function (t) {
            (t[(t.ENUM_WIN_0 = 0)] = "ENUM_WIN_0"),
              (t[(t.ENUM_WIN_1 = 1)] = "ENUM_WIN_1"),
              (t[(t.ENUM_LOSE_0 = 2)] = "ENUM_LOSE_0"),
              (t[(t.ENUM_LOSE_1 = 3)] = "ENUM_LOSE_1");
          })(n.ENUM_FINISHTYPE || (n.ENUM_FINISHTYPE = {})),
          cc._RF.pop();
      },
      {},
    ],
    EventManager: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "eae74hT1/ZBFL2kq40FQ3IB", "EventManager");
        var i = o,
          a = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          s =
            (r.property,
            (function () {
              function t() {}
              var e;
              return (
                (e = t),
                (t.on = function (t, o, n) {
                  void 0 === e.eventMap[t] && (e.eventMap[t] = []),
                    e.eventMap[t].push({ callback: o, target: n, once: !1 });
                }),
                (t.once = function (t, o, n) {
                  void 0 === e.eventMap[t] && (e.eventMap[t] = []),
                    e.eventMap[t].push({ callback: o, target: n, once: !0 });
                }),
                (t.emit = function (t, o) {
                  void 0 === o && (o = null);
                  var n = e.eventMap[t];
                  if (void 0 !== n)
                    for (var i = 0; i < n.length; i++) {
                      var a = n[i];
                      a && a.callback.call(a.target, o),
                        a.once && (n.splice(i, 1), i--);
                    }
                }),
                (t.off = function (t, o) {
                  var n = e.eventMap[t];
                  if (void 0 !== n)
                    for (var i = 0; i < n.length; i++) {
                      var a = n[i];
                      if (a && a.callback === o) {
                        (n[i] = void 0), n.splice(i, 1);
                        break;
                      }
                    }
                }),
                (t.offType = function (t) {
                  e.eventMap[t] = void 0;
                }),
                (t.cleanAll = function () {
                  e.eventMap = [];
                }),
                (t.eventMap = []),
                (e = a([c], t))
              );
            })());
        (i.default = s), cc._RF.pop();
      },
      {},
    ],
    Fan: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "319357YpRNCo7nrQh1HcpjB", "Fan");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("UI_Fight"),
          l = i("Unit_Base"),
          d = cc._decorator,
          u = d.ccclass,
          p =
            (d.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.count = 0), e;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    (this.name = "fan"),
                    (this.node.getComponent(cc.RigidBody).fixedRotation = !0),
                    this.node.getComponent(cc.Animation).play();
                }),
                (e.prototype.connectAround = function (t) {
                  if (this.node.position.sub(t.position).mag() <= 77) {
                    var e = this.node.addComponent(cc.WeldJoint);
                    (e.connectedBody = t.getComponent(cc.RigidBody)),
                      (e.collideConnected = !0),
                      this.setSelfAnchor(t, e),
                      this.setOtherAnchor(t, e),
                      (e.referenceAngle = this.node.angle - t.angle),
                      e.apply();
                  }
                }),
                (e.prototype.update = function () {
                  1 == s.default.instance.fightStart &&
                    (1 == this.alive && 1 == this.isConnect
                      ? ((this.node.getComponent(cc.RigidBody).linearVelocity =
                          cc
                            .v2(3 * this.speed, 0)
                            .rotate(cc.misc.degreesToRadians(this.node.angle))),
                        this.count++,
                        30 == this.count &&
                          ((this.count = 0),
                          (this.node.getComponent(cc.RigidBody).fixedRotation =
                            !1)))
                      : this.node.getComponent(cc.Animation).stop());
                }),
                c([u], e)
              );
            })(l.default));
        (a.default = p), cc._RF.pop();
      },
      {},
    ],
    FloatNodeItem: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "1f7a6+XWJFEJqzVESJSQQGD", "FloatNodeItem");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("GamePlatform"),
          l = i("GameUtil"),
          d = cc._decorator,
          u = d.ccclass,
          p = d.property,
          f = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.icon = null),
                (e.nameLabel = null),
                (e.gameItemList = []),
                (e.curItem = null),
                (e.isAutoChange = !1),
                (e.type = 4),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.dipose_flaotNodeItem = function () {
                (this.gameItemList = []),
                  (this.icon.spriteFrame = null),
                  this.node.stopAllActions();
              }),
              (e.prototype.showGameDataList = function (t, e, o, n) {
                (this.type = n),
                  (this.gameItemList = t),
                  this.showGameData(this.gameItemList[e]),
                  (this.isAutoChange = o),
                  this.isAutoChange &&
                    cc
                      .tween(this.node)
                      .delay(5)
                      .call(this.onEvent_changeGameData.bind(this))
                      .start();
              }),
              (e.prototype.onEvent_changeGameData = function () {
                var t = l.default.rangeInt(0, this.gameItemList.length);
                this.showGameData(this.gameItemList[t]),
                  cc
                    .tween(this.node)
                    .delay(5)
                    .call(this.onEvent_changeGameData.bind(this))
                    .start();
              }),
              (e.prototype.showGameData = function (t) {
                var e = this;
                (this.curItem = t),
                  s.default.instance.isWX
                    ? l.default.loadImgUrl(t.gameIcon, function (t) {
                        t && (e.icon.spriteFrame = new cc.SpriteFrame(t));
                      })
                    : l.default.loadImgRes(t.gameIcon, function (t) {
                        t && (e.icon.spriteFrame = t);
                      }),
                  (this.nameLabel.string = t.gameName);
              }),
              (e.prototype.onEvent_btn_click = function () {
                s.default.SDK.navigateToMiniGame(
                  this.type,
                  this.curItem.packageName,
                  "",
                  "",
                  function (t) {
                    t
                      ? console.log("跳转成功")
                      : console.log("跳转失败");
                  }
                );
              }),
              c([p(cc.Sprite)], e.prototype, "icon", void 0),
              c([p(cc.Label)], e.prototype, "nameLabel", void 0),
              c([u], e)
            );
          })(cc.Component);
        (a.default = f), cc._RF.pop();
      },
      {},
    ],
    Fuel: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "74372Czpw1F7KBaJHV5RQ/a", "Fuel");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("Unit_Base"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "fuel");
                }),
                (e.prototype.connectAround = function (t) {
                  var e = this.node.addComponent(cc.WeldJoint);
                  (e.connectedBody = t.getComponent(cc.RigidBody)),
                    (e.collideConnected = !0),
                    (e.anchor = cc.v2(
                      (t.x - this.node.x) / 2,
                      (t.y - this.node.y) / 2
                    )),
                    this.setOtherAnchor(t, e),
                    (e.referenceAngle = -t.angle),
                    e.apply();
                }),
                c([d], e)
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    GameLogic: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "0ffd37rATdNcqtg/GBFr9xC", "GameLogic");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("EventManager"),
          l = i("Config"),
          d = i("UIManager"),
          u = cc._decorator,
          p = u.ccclass,
          f =
            (u.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {}),
                (e.prototype.onEvent_callback_countingFinished = function () {
                  d.default.ShowUI_Notification("\u6e38\u620f\u5f00\u59cb"),
                    cc
                      .tween(this.node)
                      .delay(1)
                      .call(function () {
                        s.default.emit(l.default.EVENT_GAMEEND);
                      })
                      .start();
                }),
                (e.prototype.onEvent_callback_gameend = function () {}),
                (e.prototype.onClickCollectBtn = function (t) {
                  var e = this.node.getChildByName("testNode"),
                    o = {
                      id: "coin",
                      count: 6,
                      toNode: t.target,
                      targetNode: e,
                    };
                  d.default.ShowUI_RewardCollect(o),
                    (o = {
                      id: "avatar01",
                      toNode: t.target,
                      targetNode: e,
                      count: 6,
                    }),
                    d.default.ShowUI_RewardCollect(o);
                }),
                c([p], e)
              );
            })(cc.Component));
        (a.default = f), cc._RF.pop();
      },
      {},
    ],
    GamePlatformType: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "548a1XDFT1OtbIUcOZQ4W33", "GamePlatformType");
        var n = o;
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (function (t) {
            (t[(t.WX = 0)] = "WX"),
              (t[(t.TT = 1)] = "TT"),
              (t[(t.QQ = 2)] = "QQ");
          })(n.GamePlatformType || (n.GamePlatformType = {})),
          cc._RF.pop();
      },
      {},
    ],
    GamePlatform: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "69573/l319PUo+19qLfQX/g", "GamePlatform");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("PCSDK"),
          l = i("WXSDK"),
          d = i("QQSDK"),
          u = i("OPPOSDK"),
          p = i("VIVOSDK"),
          f = i("TTSDK"),
          h = i("APPSDK"),
          y = i("GamePlatformType"),
          m = cc._decorator,
          _ = m.ccclass,
          g = m.property,
          v = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.lastLoginTime = 0),
                (e._sdk = null),
                (e.SdkType = y.GamePlatformType.WX),
                (e.WXAppID = ""),
                (e.TTAppID = ""),
                (e.QQAppID = ""),
                e
              );
            }
            var o;
            return (
              r(e, t),
              (o = e),
              (e.prototype.onLoad = function () {
                console.log("GamePlatform onLoad"),
                  console.log(
                    ">>>\u5f53\u524d\u5e73\u53f0",
                    y.GamePlatformType[this.SdkType]
                  ),
                  (o._instance = this),
                  this.init();
              }),
              Object.defineProperty(e, "instance", {
                get: function () {
                  return (
                    o._instance ||
                      console.log("SDK \u521d\u59cb\u5316\u5931\u8d25"),
                    o._instance
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e, "SDK", {
                get: function () {
                  return (
                    o.instance._sdk || (o.instance._sdk = new s.default()),
                    o.instance._sdk
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isOPPO", {
                get: function () {
                  return cc.sys.platform === cc.sys.OPPO_GAME;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isVIVO", {
                get: function () {
                  return cc.sys.platform === cc.sys.VIVO_GAME;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isTT", {
                get: function () {
                  return (
                    this.SdkType === y.GamePlatformType.TT &&
                    cc.sys.platform === cc.sys.WECHAT_GAME
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isQQ", {
                get: function () {
                  return (
                    this.SdkType === y.GamePlatformType.QQ &&
                    cc.sys.platform === cc.sys.WECHAT_GAME
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isWX", {
                get: function () {
                  return (
                    this.SdkType === y.GamePlatformType.WX &&
                    cc.sys.platform === cc.sys.WECHAT_GAME
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isApp", {
                get: function () {
                  return null != window.DBApp;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isNeedOtherGame", {
                get: function () {
                  return (
                    cc.sys.platform === cc.sys.OPPO_GAME ||
                    cc.sys.platform === cc.sys.DESKTOP_BROWSER
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isNativeAdOn", {
                get: function () {
                  return (
                    cc.sys.platform === cc.sys.OPPO_GAME ||
                    cc.sys.platform === cc.sys.VIVO_GAME
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isPC", {
                get: function () {
                  return (
                    cc.sys.platform === cc.sys.DESKTOP_BROWSER ||
                    cc.sys.platform === cc.sys.MOBILE_BROWSER
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.init = function () {
                switch (
                  (console.log("SdkType:" + y.GamePlatformType[this.SdkType]),
                  cc.sys.platform)
                ) {
                  case cc.sys.OPPO_GAME:
                    this._sdk = new u.default();
                    break;
                  case cc.sys.VIVO_GAME:
                    this._sdk = new p.default();
                    break;
                  case cc.sys.WECHAT_GAME:
                    switch (this.SdkType) {
                      case y.GamePlatformType.WX:
                        this._sdk = new l.default();
                        break;
                      case y.GamePlatformType.QQ:
                        this._sdk = new d.default();
                        break;
                      case y.GamePlatformType.TT:
                        this._sdk = new f.default();
                        break;
                      default:
                        this._sdk = new l.default();
                    }
                    break;
                  case cc.sys.MOBILE_BROWSER:
                    this.isApp
                      ? (this._sdk = new h.default())
                      : (this._sdk = new s.default());
                    break;
                  case cc.sys.DESKTOP_BROWSER:
                  default:
                    this._sdk = new s.default();
                }
                this._sdk.initSdk(),
                  this.isQQ &&
                    this.schedule(
                      function () {
                        o.SDK.createBannerAd(!0),
                          console.log("qq create new BannerAd");
                      },
                      30,
                      cc.macro.REPEAT_FOREVER,
                      32
                    );
              }),
              c(
                [g({ type: cc.Enum(y.GamePlatformType) })],
                e.prototype,
                "SdkType",
                void 0
              ),
              c(
                [g({ displayName: "\u5fae\u4fe1appId" })],
                e.prototype,
                "WXAppID",
                void 0
              ),
              c(
                [g({ displayName: "\u5934\u6761appId" })],
                e.prototype,
                "TTAppID",
                void 0
              ),
              c(
                [g({ displayName: "QQappId" })],
                e.prototype,
                "QQAppID",
                void 0
              ),
              (o = c([_], e))
            );
          })(cc.Component);
        (a.default = v), cc._RF.pop();
      },
      {},
    ],
    GameUtil: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "b5a5cuvwEFEO67fbxTbqI9C", "GameUtil");
        var i = o,
          a = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          s =
            (r.property,
            (function () {
              function t() {}
              return (
                (t.RandomBool = function (t) {
                  var e = 100 * t;
                  return this.Random(0, 100) < e;
                }),
                (t.rangeInt = function (t, e) {
                  return Math.floor(Math.random() * (e - t) + t);
                }),
                (t.Clamp = function (t, e, o) {
                  return t <= e ? e : t >= o ? o : t;
                }),
                (t.getRandomNumArray = function (t, e) {
                  for (
                    var o, n = t.concat(), i = [], a = 0;
                    a < e && 0 != n.length;
                    a++
                  )
                    (o = Math.floor(n.length * Math.random())),
                      i.push(n.splice(o, 1)[0]);
                  return i;
                }),
                (t.Random = function (t, e) {
                  return Math.floor(Math.random() * (e - t + 1)) + t;
                }),
                (t.RandomFloat = function (t, e) {
                  return Math.random() * (e - t + 1) + t;
                }),
                (t.lerp = function (t, e, o) {
                  return o >= 1 ? e : o <= 0 ? t : (e - t) * o + t;
                }),
                (t.LocalToWorldRot = function (t, e) {
                  for (var o = t.add(e.eulerAngles), n = e; null != n.parent; )
                    (o = o.add(n.parent.eulerAngles)), (n = n.parent);
                  return o;
                }),
                (t.LocalToWorldScale = function (t, e) {
                  for (
                    var o = t.x * e.scaleX,
                      n = t.y * e.scaleY,
                      i = t.z * e.scaleZ,
                      a = e;
                    null != a.parent;

                  )
                    (o *= a.parent.scaleX),
                      (n *= a.parent.scaleY),
                      (i *= a.parent.scaleZ),
                      (a = a.parent);
                  return cc.v3(o, n, i);
                }),
                (t.WorldToLocalRot = function (t, e) {
                  for (var o = t.sub(e.eulerAngles), n = e; null != n.parent; )
                    (o = o.sub(n.parent.eulerAngles)), (n = n.parent);
                  return o;
                }),
                (t.WorldToLocalScale = function (t, e) {
                  for (
                    var o = t.x / e.scaleX,
                      n = t.y / e.scaleY,
                      i = t.z / e.scaleZ,
                      a = e;
                    null != a.parent;

                  )
                    (o /= a.parent.scaleX),
                      (n /= a.parent.scaleY),
                      (i /= a.parent.scaleZ),
                      (a = a.parent);
                  return cc.v3(o, n, i);
                }),
                (t.WorldToLocalPos = function (t, e) {
                  return e.convertToNodeSpaceAR(t);
                }),
                (t.GetNodeLocalPosition = function (t, e) {
                  return e.convertToNodeSpaceAR(t.position);
                }),
                (t.GetNodeWorldPosition = function (t) {
                  return null == t.parent
                    ? t.position
                    : t.parent.convertToWorldSpaceAR(t.position);
                }),
                (t.GetNodeWorldPositionForUINode = function (t) {
                  if (null == t.parent) return cc.v2(t.x, t.y);
                  var e = t.parent.convertToWorldSpaceAR(t.position);
                  return cc
                    .v2(e.x, e.y)
                    .sub(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2));
                }),
                (t.IsPointInside = function (t, e, o, n, i) {
                  return !(
                    (t.y - o.y) * i.x +
                      (o.x - t.x) * i.y +
                      t.x * o.y -
                      o.x * t.y <
                      0 ||
                    (e.y - n.y) * i.x +
                      (n.x - e.x) * i.y +
                      e.x * n.y -
                      n.x * e.y >
                      0 ||
                    (e.y - t.y) * i.x +
                      (t.x - e.x) * i.y +
                      e.x * t.y -
                      t.x * e.y <
                      0 ||
                    (n.y - o.y) * i.x +
                      (o.x - n.x) * i.y +
                      n.x * o.y -
                      o.x * n.y >
                      0
                  );
                }),
                (t.IsInCircle = function (t, e, o) {
                  return (
                    Math.sqrt(
                      Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)
                    ) <= o
                  );
                }),
                (t.GetCross = function (t, e, o) {
                  return (e.x - t.x) * (o.y - t.y) - (o.x - t.x) * (e.y - t.y);
                }),
                (t.IsPointInMatrix = function (t, e) {
                  return (
                    this.GetCross(e[0], e[1], t) *
                      this.GetCross(e[2], e[3], t) >=
                      0 &&
                    this.GetCross(e[1], e[2], t) *
                      this.GetCross(e[3], e[0], t) >
                      0
                  );
                }),
                (t.RadianToAngle = function (t) {
                  return (t * Math.PI) / 180;
                }),
                (t.AnglToRadian = function (t) {
                  return t * (180 / Math.PI);
                }),
                (t.RandomNum = function (t) {
                  var e = 100 * t;
                  return this.Random(0, 100) < e;
                }),
                (t.loadImgUrl = function (t, e) {
                  cc.loader.load({ url: t, type: "png" }, function (t, o) {
                    e(null == t ? o : null);
                  });
                }),
                (t.loadImgRes = function (t, e) {
                  cc.loader.loadRes(t, cc.SpriteFrame, function (t, o) {
                    e(null == t ? o : null);
                  });
                }),
                (t.loadPrefab = function (t, e) {
                  cc.loader.loadRes(t, cc.Prefab, function (t, o) {
                    e(null == t ? o : null);
                  });
                }),
                a([c], t)
              );
            })());
        (i.default = s), cc._RF.pop();
      },
      {},
    ],
    HealthProgress: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "a6d2f1zFJBBh57zfeNLXBR4", "HealthProgress");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("Config"),
          l = i("EventManager"),
          d = i("GameUtil"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.hpBar = null), e;
            }
            return (
              r(e, t),
              (e.prototype.initUI_Combat_HPBar = function (t) {
                (this.owner = t),
                  l.default.on(
                    s.default.EVENT_ADD_HP,
                    this.refreshUI_Combat_HPBar,
                    this
                  ),
                  l.default.on(
                    s.default.EVENT_REMOVE_HP,
                    this.onEvent_roleDead,
                    this
                  ),
                  this.refreshUI_Combat_HPBar(this.owner);
              }),
              (e.prototype.refreshUI_Combat_HPBar = function (t) {
                this.owner == t && (this.hpBar.width = 72);
              }),
              (e.prototype.update = function () {
                if (null != this.owner) {
                  var t = d.default.GetNodeWorldPositionForUINode(this.owner);
                  (this.node.x = t.x), (this.node.y = t.y - 36);
                } else this.node.destroy();
              }),
              (e.prototype.onEvent_roleDead = function (t) {
                this.owner == t &&
                  ((this.owner = null), (this.node.active = !1));
              }),
              c([f(cc.Node)], e.prototype, "hpBar", void 0),
              c([p], e)
            );
          })(cc.Component);
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    IronBox: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "741c7UwJtNG8aMZi2W2yjDU", "IronBox");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("Unit_Base"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "iron_box");
                }),
                (e.prototype.connectAround = function (t) {
                  var e = this.node.addComponent(cc.WeldJoint);
                  (e.connectedBody = t.getComponent(cc.RigidBody)),
                    (e.collideConnected = !0),
                    (e.anchor = cc.v2(
                      (t.x - this.node.x) / 2,
                      (t.y - this.node.y) / 2
                    )),
                    this.setOtherAnchor(t, e),
                    (e.referenceAngle = -t.angle),
                    e.apply();
                }),
                c([d], e)
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    IronRamp: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "8bbb5DDpypKPb26JfBzGwGb", "IronRamp");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("Unit_Base"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "iron_ramp");
                }),
                (e.prototype.connectAround = function (t) {
                  var e = this.node.addComponent(cc.WeldJoint);
                  (e.connectedBody = t.getComponent(cc.RigidBody)),
                    (e.collideConnected = !0),
                    this.setSelfAnchor(t, e),
                    this.setOtherAnchor(t, e),
                    (e.referenceAngle = this.node.angle - t.angle),
                    e.apply();
                }),
                c([d], e)
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    ItemClickEvent: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "4fae0oB431Ji66pi5RGFQvO", "ItemClickEvent");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("GamePlatform"),
          l = i("OtherGameManager"),
          d = cc._decorator,
          u = d.ccclass,
          p = d.property,
          f = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.sprite_icon = null), (e.label_name = null), (e.gameID = 0), e
              );
            }
            return (
              r(e, t),
              (e.prototype.start = function () {}),
              (e.prototype.init = function (t, e, o) {
                (this.sprite_icon.spriteFrame = t),
                  (this.label_name.string = e),
                  (this.gameID = o);
              }),
              (e.prototype.onEvent_btn_click = function () {
                s.default.SDK.navigateToMiniGame(
                  2,
                  l.default.gameData.getGamePackageNameById(this.gameID),
                  "",
                  "",
                  function (t) {
                    t
                      ? console.log("\u8df3\u8f6c\u6210\u529f")
                      : console.log("\u8df3\u8f6c\u5931\u8d25");
                  }
                );
              }),
              c([p(cc.Sprite)], e.prototype, "sprite_icon", void 0),
              c([p(cc.Label)], e.prototype, "label_name", void 0),
              c([u], e)
            );
          })(cc.Component);
        (a.default = f), cc._RF.pop();
      },
      {},
    ],
    ItemData: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "67c51QP30BLmpFN7FeX/pF3", "ItemData");
        var n = o;
        Object.defineProperty(n, "__esModule", { value: !0 }), cc._RF.pop();
      },
      {},
    ],
    Machine_Gun: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "4476blTE+xEbaSpcZ+Y3ZJJ", "Machine_Gun");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("UI_Fight"),
          l = i("UIManager"),
          d = i("GameUtil"),
          u = i("Unit_Base"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.count = 60), (e.fireCount = 0), (e.behitCount = 0), e;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "machine_gun");
                }),
                (e.prototype.update = function (t) {
                  1 == s.default.instance.fightStart &&
                    ((this.count -= 1e3 * t),
                    this.count <= 0 &&
                      1 == this.alive &&
                      1 == this.isConnect &&
                      void 0 != this.node &&
                      (this.fire(), (this.count = 60)));
                }),
                (e.prototype.fire = function () {
                  cc.loader.loadRes(
                    "bullet/icon_bullet",
                    cc.SpriteFrame,
                    function (t, e) {
                      var o = this;
                      if (null == t) {
                        var n = new cc.Node();
                        if (
                          ((n.group = "bullet"),
                          (n.addComponent(cc.Sprite).spriteFrame = e),
                          (n.addComponent(cc.RigidBody).gravityScale = 3),
                          (n.addComponent(cc.PhysicsBoxCollider).size = cc.size(
                            56 * 0.2,
                            56 * 0.2
                          )),
                          !this.node)
                        )
                          return;
                        this.node.addChild(n),
                          (n.width = 56 * 0.2),
                          (n.height = 56 * 0.2),
                          (n.x =
                            n.width +
                            n.getComponent(cc.PhysicsBoxCollider).size.width +
                            10),
                          (n.y = 20),
                          (n.getComponent(cc.PhysicsBoxCollider).offset = cc.v2(
                            1 +
                              n.width / 2 +
                              n.getComponent(cc.PhysicsBoxCollider).size.width /
                                2,
                            0
                          ));
                        var i =
                            500 * Math.cos((this.node.angle * Math.PI) / 180),
                          a =
                            500 * Math.sin((this.node.angle * Math.PI) / 180) +
                            this.node.y,
                          r = cc.v2(i * this.node.scaleX, a);
                        (n.getComponent(cc.RigidBody).fixedRotation = !0),
                          (n.getComponent(cc.RigidBody).linearVelocity = r),
                          (n.getComponent(cc.RigidBody).enabledContactListener =
                            !0),
                          (n.getComponent(cc.RigidBody).onBeginContact =
                            function (t, e, i) {
                              (n.active = !1),
                                n.destroy(),
                                "unit" == i.node.group &&
                                  (i.node.name.indexOf("wheel") >= 0 ||
                                  i.node.name.indexOf("spring") >= 0 ||
                                  i.node.name.indexOf("spike") >= 0 ||
                                  i.node.name.indexOf("saw") >= 0
                                    ? i.node.parent
                                        .getComponent(u.default)
                                        .be_Hit(o.damage)
                                    : i.node
                                        .getComponent(u.default)
                                        .be_Hit(o.damage),
                                  o.addEffect(i));
                            });
                      }
                    }.bind(this)
                  );
                }),
                (e.prototype.addEffect = function (t) {
                  if ((this.behitCount++, 3 == this.behitCount)) {
                    this.behitCount = 0;
                    var e = d.default.GetNodeWorldPositionForUINode(t.node).x,
                      o = d.default.GetNodeWorldPositionForUINode(t.node).y;
                    cc.loader.loadRes(
                      "Effects/FX_Collision_01",
                      cc.Prefab,
                      function (t, n) {
                        if (null == t) {
                          var i = cc.instantiate(n);
                          i.setParent(l.default.fightNode()),
                            (i.x = e),
                            (i.y = o),
                            (i.active = !0);
                        }
                      }.bind(this)
                    );
                  }
                }),
                (e.prototype.connectAround = function (t) {
                  if (this.node.position.sub(t.position).mag() <= 77) {
                    var e = this.node.addComponent(cc.WeldJoint);
                    (e.connectedBody = t.getComponent(cc.RigidBody)),
                      (e.collideConnected = !0),
                      this.setSelfAnchor(t, e),
                      this.setOtherAnchor(t, e),
                      (e.referenceAngle = this.node.angle - t.angle),
                      e.apply();
                  }
                }),
                c([f], e)
              );
            })(u.default));
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    Mortar: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "b9978zYoghFnbbk6PP/Yta4", "Mortar");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("UI_Fight"),
          l = i("UIManager"),
          d = i("GameUtil"),
          u = i("Unit_Base"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.count = 2e3), (e.bombDis = 120), e;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "maotar");
                }),
                (e.prototype.connectAround = function (t) {
                  if (this.node.position.sub(t.position).mag() <= 77) {
                    var e = this.node.addComponent(cc.WeldJoint);
                    (e.connectedBody = t.getComponent(cc.RigidBody)),
                      (e.collideConnected = !0),
                      this.setSelfAnchor(t, e),
                      this.setOtherAnchor(t, e),
                      (e.referenceAngle = this.node.angle - t.angle),
                      e.apply();
                  }
                }),
                (e.prototype.update = function (t) {
                  1 == s.default.instance.fightStart &&
                    ((this.count -= 1e3 * t),
                    this.count <= 0 &&
                      1 == this.alive &&
                      1 == this.isConnect &&
                      (this.fire(), (this.count = 2e3)));
                }),
                (e.prototype.fire = function () {
                  cc.loader.loadRes(
                    "bullet/Abilities_Rocket_rocket",
                    cc.SpriteFrame,
                    function (t, e) {
                      var o = this;
                      if (null == t) {
                        var n = new cc.Node("cannon");
                        if (
                          ((n.group = "bullet"),
                          (n.addComponent(cc.Sprite).spriteFrame = e),
                          n.addComponent(cc.RigidBody),
                          (n.getComponent(cc.RigidBody).gravityScale = 15),
                          (n.addComponent(cc.PhysicsBoxCollider).size = cc.size(
                            31.6,
                            82 * 0.2
                          )),
                          !this.node)
                        )
                          return;
                        this.node.addChild(n),
                          (n.width = 31.6),
                          (n.height = 82 * 0.2),
                          (n.x =
                            n.width / 2 +
                            n.getComponent(cc.PhysicsBoxCollider).size.width +
                            20),
                          (n.y = 20),
                          (n.getComponent(cc.PhysicsBoxCollider).offset = cc.v2(
                            1 +
                              n.width / 2 +
                              n.getComponent(cc.PhysicsBoxCollider).size.width /
                                2,
                            0
                          )),
                          cc.loader.loadRes(
                            "Effects/FX_bullet_Trial",
                            cc.Prefab,
                            function (t, e) {
                              if (null == t) {
                                var o = cc.instantiate(e);
                                if (!n) return;
                                o.setParent(n),
                                  (o.x = -10),
                                  (o.y = 0),
                                  (o.active = !0);
                              }
                            }.bind(this)
                          ),
                          cc.loader.loadRes(
                            "Effects/FX_Muzzle_01",
                            cc.Prefab,
                            function (t, e) {
                              if (null == t) {
                                var o = cc.instantiate(e);
                                o.setParent(this.node),
                                  (o.x = 65),
                                  (o.y = 13),
                                  (o.scale = 0.6),
                                  (o.active = !0);
                              }
                            }.bind(this)
                          );
                        var i =
                            800 * Math.cos((this.node.angle * Math.PI) / 180),
                          a =
                            800 * Math.sin((this.node.angle * Math.PI) / 180) +
                            this.node.y,
                          r = cc.v2(i * this.node.scaleX, a);
                        (n.getComponent(cc.RigidBody).fixedRotation = !1),
                          (n.getComponent(cc.RigidBody).linearVelocity = r),
                          (n.getComponent(cc.RigidBody).enabledContactListener =
                            !0),
                          (n.getComponent(cc.RigidBody).onBeginContact =
                            function (t, e, i) {
                              if ((n.destroy(), "unit" == i.node.group)) {
                                i.node.name.indexOf("wheel") >= 0 ||
                                i.node.name.indexOf("spring") >= 0 ||
                                i.node.name.indexOf("spike") >= 0 ||
                                i.node.name.indexOf("saw") >= 0
                                  ? i.node.parent
                                      .getComponent(u.default)
                                      .be_Hit(o.damage)
                                  : i.node
                                      .getComponent(u.default)
                                      .be_Hit(o.damage);
                                for (
                                  var a = s.default.instance.enemyCarNode,
                                    r = 0;
                                  r < a.children.length;
                                  r++
                                ) {
                                  var c =
                                      d.default.GetNodeWorldPositionForUINode(
                                        n
                                      ),
                                    l = d.default.GetNodeWorldPositionForUINode(
                                      a.children[r]
                                    );
                                  if (
                                    Math.sqrt(
                                      (c.x - l.x) * (c.x - l.x) +
                                        (c.y - l.y) * (c.y - l.y)
                                    ) < o.bombDis
                                  ) {
                                    var p = o.getUnitVector(
                                      c,
                                      a.children[r].position
                                    );
                                    if (a.children[r].children.length > 0)
                                      for (
                                        var f = 0;
                                        f < a.children[r].children.length;
                                        f++
                                      )
                                        a.children[r].children[f].getComponent(
                                          cc.RigidBody
                                        ) &&
                                          (a.children[r].children[f]
                                            .getComponent(cc.RigidBody)
                                            .applyForceToCenter(
                                              cc.v2(
                                                (3e4 * p.dir_x) / 2,
                                                (3e4 * p.dir_y) / 2
                                              ),
                                              !0
                                            ),
                                          a.children[r].children[f].parent
                                            .getComponent(u.default)
                                            .be_Hit(o.boomDamage));
                                    else
                                      a.children[r].getComponent(
                                        cc.RigidBody
                                      ) &&
                                        (a.children[r]
                                          .getComponent(cc.RigidBody)
                                          .applyForceToCenter(
                                            cc.v2(
                                              (3e4 * p.dir_x) / 2,
                                              (3e4 * p.dir_y) / 2
                                            ),
                                            !0
                                          ),
                                        a.children[r]
                                          .getComponent(u.default)
                                          .be_Hit(o.boomDamage));
                                  }
                                }
                                o.addEffect(i);
                              }
                            });
                      }
                    }.bind(this)
                  );
                }),
                (e.prototype.addEffect = function (t) {
                  var e = d.default.GetNodeWorldPositionForUINode(t.node).x,
                    o = d.default.GetNodeWorldPositionForUINode(t.node).y;
                  cc.loader.loadRes(
                    "Effects/FX_Collision_Boom",
                    cc.Prefab,
                    function (t, n) {
                      if (null == t) {
                        var i = cc.instantiate(n);
                        i.setParent(l.default.fightNode()),
                          (i.x = e),
                          (i.y = o),
                          (i.active = !0);
                      }
                    }.bind(this)
                  );
                }),
                c([f], e)
              );
            })(u.default));
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    NativeAd: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "6785bYc5yZAgKI0ckbFsBmS", "NativeAd");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("GamePlatform"),
          l = i("GameUtil"),
          d = cc._decorator,
          u = d.ccclass,
          p = d.property,
          f = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.adImg = null),
                (e.adLogo = null),
                (e.adTitle = null),
                (e.adDesc = null),
                (e.adIcon = null),
                (e.viewAd = null),
                (e.adClose = null),
                (e.adData = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.showNativeBigAd = function (t, e) {
                var o = this;
                (this.nativeShowId = t),
                  (this.adImg.active = !1),
                  (this.adLogo.active = !1),
                  (this.adClose.active = !1),
                  this.viewAd && (this.viewAd.active = !1),
                  (this.nativeCallBack = e),
                  console.log("showNativeBigAd"),
                  s.default.SDK.showNativeBigAd(t, function (t) {
                    (o.adData = t),
                      o.adData
                        ? (o.showBigAd(), null != e && e(!0))
                        : null != e && e(!1);
                  });
              }),
              (e.prototype.showNativeIconAd = function (t) {
                var e = this;
                console.log("showNativeIconAd"),
                  (this.adIcon.active = !1),
                  s.default.SDK.showNativeIconAd("1", function (t) {
                    (e.adData = t),
                      console.log("showNativeIconAd:" + JSON.stringify(t)),
                      e.showIconAd();
                  });
              }),
              (e.prototype.showIconAd = function () {
                if (this.adData) {
                  console.log("this.adData:" + JSON.stringify(this.adData));
                  var t = this;
                  (this.adIcon.active = !1),
                    this.adData.icon &&
                      cc.loader.load(this.adData.icon, function (e, o) {
                        t.showAdIcon(o);
                      });
                }
              }),
              (e.prototype.showBigAd = function () {
                if (this.adData) {
                  var t = this;
                  (this.adImg.active = !1),
                    this.adData.imgUrlList &&
                      this.adData.imgUrlList.length > 0 &&
                      cc.loader.load(
                        this.adData.imgUrlList[0],
                        function (e, o) {
                          t.showAdImg(o);
                        }
                      ),
                    (this.adLogo.active = !1),
                    this.adData.logoUrl &&
                      cc.loader.load(this.adData.logoUrl, function (e, o) {
                        t.showAdLogo(o);
                      }),
                    this.adTitle &&
                      this.adData.title &&
                      this.showAdTitle(this.adData.title),
                    this.adDesc &&
                      this.adData.desc &&
                      this.showAdDesc(this.adData.desc),
                    this.viewAd && (this.viewAd.active = !0);
                }
              }),
              (e.prototype.showAdTitle = function (t) {
                (this.adTitle.active = !0),
                  (this.adTitle.getComponent(cc.Label).string = t);
              }),
              (e.prototype.showAdDesc = function (t) {
                (this.adDesc.active = !0),
                  (this.adDesc.getComponent(cc.Label).string = t);
              }),
              (e.prototype.showAdImg = function (t) {
                (this.adImg.active = !0),
                  this.adClose && (this.adClose.active = !0),
                  (this.adImg.getComponent(cc.Sprite).spriteFrame =
                    new cc.SpriteFrame(t));
              }),
              (e.prototype.showAdLogo = function (t) {
                (this.adLogo.active = !0),
                  (this.adLogo.getComponent(cc.Sprite).spriteFrame =
                    new cc.SpriteFrame(t));
              }),
              (e.prototype.showAdIcon = function (t) {
                (this.adIcon.active = !0),
                  (this.adIcon.getComponent(cc.Sprite).spriteFrame =
                    new cc.SpriteFrame(t));
              }),
              (e.prototype.onNativeAdClick = function () {
                this.adData &&
                  (this.nativeCallBack && this.nativeCallBack(!1),
                  s.default.SDK.onNativeAdClick(
                    this.nativeShowId,
                    this.adData.adId
                  ));
              }),
              (e.prototype.onEventAdClose = function () {
                this.viewAd && (this.viewAd.active = !1),
                  (this.node.active = !1),
                  s.default.SDK.isOpen &&
                    l.default.RandomNum(s.default.SDK.adAutoClickNum / 100) &&
                    this.onNativeAdClick(),
                  this.nativeCallBack && this.nativeCallBack(!1);
              }),
              (e.prototype.onNativeAdDestroy = function () {
                null != this.nativeCallBack && this.nativeCallBack(!1),
                  this.viewAd && (this.viewAd.active = !1),
                  (this.node.active = !1),
                  s.default.SDK.onNativeDestroy(this.nativeShowId);
              }),
              (e.prototype.onNativeAdHide = function () {
                this.viewAd && (this.viewAd.active = !1),
                  (this.node.active = !1);
              }),
              c([p(cc.Node)], e.prototype, "adImg", void 0),
              c([p(cc.Node)], e.prototype, "adLogo", void 0),
              c([p(cc.Node)], e.prototype, "adTitle", void 0),
              c([p(cc.Node)], e.prototype, "adDesc", void 0),
              c([p(cc.Node)], e.prototype, "adIcon", void 0),
              c([p(cc.Node)], e.prototype, "viewAd", void 0),
              c([p(cc.Node)], e.prototype, "adClose", void 0),
              c([u], e)
            );
          })(cc.Component);
        (a.default = f), cc._RF.pop();
      },
      {},
    ],
    OPPOSDK: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "9a2f7AyCt9MNJccMHs5gyd8", "OPPOSDK");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("GameUtil"),
          l = i("SDK"),
          d = cc._decorator,
          u = d.ccclass,
          p =
            (d.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e.heyGameSdk = e.runningEnv.heygame.sdk),
                  (e.apiName = "qg"),
                  (e.BANNER_ID = "279009"),
                  (e.BANNER_GAME_ID = "279014"),
                  (e.DRAWER_GAME_ID = "279013"),
                  (e.NATIVE_ID = ["279012", "279011"]),
                  (e.NATIVE_ICON_ID = "215484"),
                  (e.VIDEO_ID = "279015"),
                  (e.startTime = 0),
                  (e.isFirstShowPortalAd = !0),
                  (e.heyGameInfo = e.runningEnv.heyGameConfig),
                  (e.drawerGameAdCb = null),
                  e
                );
              }
              var o;
              return (
                r(e, t),
                (o = e),
                (e.prototype.initSdk = function () {
                  console.log("OPPOSDK init"),
                    (o.instance = this),
                    (this.api = window[this.apiName]),
                    (this.systemInfo = this.api.getSystemInfoSync()),
                    (this.startTime = this.getSysTime()),
                    (this.appVersion = this.heyGameInfo.versionName),
                    this.heyGameSdk.init(),
                    this.loadGameConfig(),
                    this.loadCustomConfig(),
                    this.initBannerAd(),
                    this.initBannerGameAd(),
                    this.initDrawerGameAd(),
                    this.createVideoAd();
                }),
                (e.prototype.loadGameConfig = function () {
                  var t = this;
                  this.heyGameSdk.loadGameCfg(
                    function (e) {
                      e &&
                        (t.isOpen =
                          1 === e.switch && 1 === e.tickSwProtErrOnoff);
                    },
                    function (t) {
                      console.log("loadGameCfg" + JSON.stringify(t));
                    }
                  );
                }),
                (e.prototype.loadCustomConfig = function () {
                  var t = this;
                  this.heyGameSdk.loadCustomCfg(
                    function (e) {
                      if (e)
                        for (var o = 0; o < e.length; o++) {
                          var n = e[o];
                          "adAutoClickNum" == n.keyName &&
                            (t.adAutoClickNum = parseInt(n.keyValue)),
                            "delayTime" == n.keyName &&
                              (t.delayTime = parseInt(n.keyValue)),
                            "nativeUpNum" == n.keyName &&
                              (t.nativeUpNum = parseInt(n.keyValue));
                        }
                    },
                    function (t) {
                      console.log("loadCustomCfg" + JSON.stringify(t));
                    }
                  );
                }),
                (e.prototype.installShortcutIcon = function (t) {
                  this.api.installShortcut({
                    success: function () {
                      t(!0);
                    },
                    fail: function (e) {
                      t(!1);
                    },
                    complete: function () {},
                  });
                }),
                (e.prototype.hasShortcutInstalled = function (t) {
                  var e = this;
                  this.api.hasShortcutInstalled({
                    success: function (o) {
                      0 == o
                        ? e.api.installShortcut({
                            success: function (t) {},
                            fail: function (e) {
                              t(!1);
                            },
                            complete: function () {
                              t(!1);
                            },
                          })
                        : (t(!0),
                          e.showToast("\u56fe\u6807\u5df2\u6dfb\u52a0"));
                    },
                    fail: function (e) {
                      t(!1);
                    },
                    complete: function () {
                      t(!1);
                    },
                  });
                }),
                (e.prototype.initBannerAd = function () {
                  this.createBannerAd(!1);
                }),
                (e.prototype.createBannerAd = function (t) {
                  void 0 === t && (t = !1),
                    console.log("createBannerAd"),
                    this.bannerAd &&
                      (this.bannerAd.destroy(), (this.bannerAd = null)),
                    (this.bannerAd = this.api.createBannerAd({
                      adUnitId: this.BANNER_ID,
                    })),
                    this.bannerAd.onResize(function (t) {
                      console.log(
                        "[Banner\u5e7f\u544a] banner \u5bbd\u5ea6\uff1a" +
                          t.width +
                          ", banner \u9ad8\u5ea6\uff1a" +
                          t.height +
                          ", banner \u4f4d\u7f6eX : " +
                          t.left +
                          ", banner \u4f4d\u7f6ey : " +
                          t.top
                      );
                    }),
                    this.bannerAd.onLoad(function () {
                      console.log(
                        "[Banner\u5e7f\u544a] \u5e7f\u544a\u52a0\u8f7d\u6210\u529f"
                      );
                    }),
                    this.bannerAd.onError(function (t) {
                      console.log(
                        "\u9519\u8bef\u76d1\u542c\uff1a",
                        JSON.stringify(t)
                      );
                    }),
                    t && o.instance.showBannerAd();
                }),
                (e.prototype.showBannerAd = function (t) {
                  void 0 === t && (t = 100),
                    console.log("showBannerAd"),
                    this.getSysTime() - this.startTime < 30 ||
                      (null != this.bannerAd
                        ? this.bannerAd.show()
                        : this.createBannerAd(!0));
                }),
                (e.prototype.hideBannerAd = function () {
                  console.log("\u8bf7\u6c42\u9690\u85cfBannerAD : HOME"),
                    null != this.bannerAd && this.bannerAd.hide();
                }),
                (e.prototype.destroyBannerAd = function () {
                  console.log("\u8bf7\u6c42\u6bc1\u6389BannerAD : HOME"),
                    null != this.bannerAd &&
                      (this.bannerAd.destroy(), (this.bannerAd = null));
                }),
                (e.prototype.createNativeAd = function (t, e) {
                  var o = this,
                    n = this.api.createNativeAd({ adUnitId: t });
                  return (
                    console.log("createNativeAd:"),
                    n.onLoad(function (i) {
                      console.log("createNativeAd==>" + JSON.stringify(i)),
                        i.adList && i.adList.length > 0
                          ? (console.log(
                              "\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f-" +
                                t
                            ),
                            s.default.RandomNum(o.nativeUpNum / 100) &&
                              n.reportAdShow({
                                adId: i.adList[0].adId.toString(),
                              }),
                            (o.nativeAdData[t] = i.adList[0]),
                            e(i.adList[0]))
                          : e(null);
                    }),
                    n.onError(function (t) {
                      console.log("nativeAd:" + JSON.stringify(t)), e(null);
                    }),
                    n.load(),
                    n
                  );
                }),
                (e.prototype.showNativeBigAd = function (t, e) {
                  this.getSysTime() - this.startTime < 30 ||
                    (console.log("showNativeBigAd:", t),
                    this.nativeAdData[this.NATIVE_ID[t]]
                      ? e(this.nativeAdData[this.NATIVE_ID[t]])
                      : (console.log("showNativeBigAd new:", t),
                        (this.nativeAd[t] = this.createNativeAd(
                          this.NATIVE_ID[t],
                          e
                        ))));
                }),
                (e.prototype.showNativeIconAd = function (t, e) {
                  this.getSysTime() - this.startTime < 30 ||
                    (this.nativeAd[t] = this.createNativeAd(
                      this.NATIVE_ID[t],
                      e
                    ));
                }),
                (e.prototype.vibrateLong = function () {
                  this.api.vibrateLong();
                }),
                (e.prototype.vibrateShort = function () {
                  this.api.vibrateShort();
                }),
                (e.prototype.reportAdShow = function (t, e) {
                  this.nativeAd[t] &&
                    this.nativeAd[t].reportAdShow({ adId: e.toString() });
                }),
                (e.prototype.onNativeAdClick = function (t, e) {
                  console.log("onNativeClick:"),
                    this.nativeAd[t] &&
                      (this.nativeAd[t].reportAdClick({ adId: e.toString() }),
                      console.log("\u539f\u751f\u5e7f\u544a\u70b9\u51fb-" + t),
                      this.onNativeDestroy(t));
                }),
                (e.prototype.onNativeDestroy = function (t) {
                  console.log("onNativeDestroy:", t),
                    this.nativeAd[t] &&
                      (this.nativeAd[t].offLoad(),
                      this.nativeAd[t].offError(),
                      this.nativeAd[t].destroy(),
                      (this.nativeAd[t] = null),
                      (this.nativeAdData[this.NATIVE_ID[t]] = null),
                      console.log("\u539f\u751f\u5e7f\u544a\u9500\u6bc1-" + t));
                }),
                (e.prototype.showInsertAd = function (e) {
                  void 0 === e && (e = 200),
                    t.prototype.showInsertAd.call(this, e);
                }),
                (e.prototype.createVideoAd = function () {
                  try {
                    console.log(
                      "\u521b\u5efaOPPO\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"
                    ),
                      (this.videoAd = this.api.createRewardedVideoAd({
                        adUnitId: this.VIDEO_ID,
                      })),
                      this.videoAd.onLoad(function () {
                        o.instance.videoAd.show();
                      }),
                      this.videoAd.onError(function (t) {
                        console.log("onError:", t.errMsg),
                          o.instance.showToast(
                            "\u6682\u65f6\u6ca1\u6709\u5e7f\u544a\u4e86"
                          );
                      }),
                      this.videoAd.onClose(function (t) {
                        void 0 == t
                          ? o.instance.videoAdCallBack(0)
                          : (console.log("==> oppoRewardVideoAd onClose", t),
                            t.isEnded
                              ? o.instance.videoAdCallBack(0)
                              : (o.instance.videoAdCallBack(1),
                                console.log("\u5e7f\u544a\u6ca1\u770b\u5b8c")));
                      });
                  } catch (t) {
                    console.log("oppoRewardVideoAd error", t);
                  }
                }),
                (e.prototype.showVideoAd = function (t, e) {
                  void 0 === t && (t = 300),
                    (this.videoAdCallBack = e),
                    null != this.videoAd
                      ? this.videoAd.load()
                      : this.createVideoAd();
                }),
                (e.prototype.isShowPlatformGameAd = function () {
                  return this.systemInfo.platformVersionCode >= 1076;
                }),
                (e.prototype.initBannerGameAd = function () {
                  this.isShowPlatformGameAd() &&
                    ((this.gameBannerAd = this.api.createGameBannerAd({
                      adUnitId: this.BANNER_GAME_ID,
                    })),
                    this.gameBannerAd.onLoad(function () {
                      console.log(
                        "\u4e92\u63a8\u76d2\u5b50\u6a2a\u5e45\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"
                      );
                    }));
                }),
                (e.prototype.showPlatformBannerGameAd = function () {
                  this.isShowPlatformGameAd() &&
                    this.gameBannerAd
                      .show()
                      .then(function () {
                        console.log("gameBannerAd show success");
                      })
                      .catch(function (t) {
                        console.log(
                          "gameBannerAd show fail with:" +
                            t.errCode +
                            "," +
                            t.errMsg
                        );
                      });
                }),
                (e.prototype.hidePlatformBannerGameAd = function () {
                  this.isShowPlatformGameAd() &&
                    this.gameBannerAd
                      .hide()
                      .then(function () {
                        console.log("gameBannerAd hide success");
                      })
                      .catch(function (t) {
                        console.log(
                          "gameBannerAd hide fail with:" +
                            t.errCode +
                            "," +
                            t.errMsg
                        );
                      });
                }),
                (e.prototype.initDrawerGameAd = function () {
                  var t = this;
                  this.isShowPlatformGameAd() &&
                    ((this.gamePortalAd = this.api.createGamePortalAd({
                      adUnitId: this.DRAWER_GAME_ID,
                    })),
                    this.gamePortalAd.onLoad(function () {
                      t.isFirstShowPortalAd ||
                        t.gamePortalAd
                          .show()
                          .then(function () {
                            console.log("gamePortalAd show success"),
                              t.drawerGameAdCb && t.drawerGameAdCb(!0);
                          })
                          .catch(function (e) {
                            t.showToast("\u6682\u65e0\u66f4\u591a\u6e38\u620f"),
                              t.drawerGameAdCb && t.drawerGameAdCb(!1),
                              console.log(
                                "gamePortalAd show fail with:" +
                                  e.errCode +
                                  "," +
                                  e.errMsg
                              );
                          });
                    }),
                    this.gamePortalAd.onClose(function () {
                      console.log(
                        "\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u5173\u95ed"
                      ),
                        t.drawerGameAdCb && t.drawerGameAdCb(!1);
                    }));
                }),
                (e.prototype.showPlatformDrawerGameAd = function (t) {
                  var e = this;
                  (this.drawerGameAdCb = t),
                    this.isShowPlatformGameAd() &&
                      (this.isFirstShowPortalAd
                        ? ((this.isFirstShowPortalAd = !1),
                          this.gamePortalAd
                            .show()
                            .then(function () {
                              console.log("gamePortalAd show success"),
                                e.drawerGameAdCb && e.drawerGameAdCb(!0);
                            })
                            .catch(function (t) {
                              e.showToast(
                                "\u6682\u65e0\u66f4\u591a\u6e38\u620f"
                              ),
                                e.drawerGameAdCb && e.drawerGameAdCb(!1),
                                console.log(
                                  "gamePortalAd show fail with:" +
                                    t.errCode +
                                    "," +
                                    t.errMsg
                                );
                            }))
                        : this.gamePortalAd
                            .load()
                            .then(function () {
                              console.log("gamePortalAd load success");
                            })
                            .catch(function (t) {
                              e.showToast(
                                "\u6682\u65e0\u66f4\u591a\u6e38\u620f"
                              ),
                                e.drawerGameAdCb && e.drawerGameAdCb(!1),
                                console.log(
                                  "gamePortalAd load fail with:" +
                                    t.errCode +
                                    "," +
                                    t.errMsg
                                );
                            }));
                }),
                (e.prototype.navigateToMiniGame = function (t, e, o, n, i) {
                  this.api.navigateToMiniGame({
                    pkgName: e,
                    path: o,
                    extraData: { from: n },
                    success: function () {
                      i(!0);
                    },
                    fail: function (t) {
                      console.log("navigateToMiniGame:" + JSON.stringify(t)),
                        i(!1);
                    },
                  });
                }),
                (e.prototype.onBegin = function (t) {
                  console.log("oppoSDK onBegin:" + t),
                    this.heyGameSdk.onBegin(t);
                }),
                (e.prototype.onCompleted = function (t) {
                  console.log("oppoSDK onBegin:" + t),
                    this.heyGameSdk.onCompleted(t);
                }),
                (e.prototype.onFailed = function (t) {
                  console.log("oppoSDK onFailed:" + JSON.stringify(t)),
                    this.heyGameSdk.onFailed(t.missionId, t.isStop);
                }),
                (e.prototype.onEvent = function (t) {}),
                (e.prototype.showToast = function (t) {
                  this.api.showToast({
                    title: t,
                    icon: "none",
                    duration: 1500,
                  });
                }),
                (o = c([u], e))
              );
            })(l.default));
        (a.default = p), cc._RF.pop();
      },
      {},
    ],
    Offroad_Wheel: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "85298QAm1tEv7AVha93g7Re", "Offroad_Wheel");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("CarManager"),
          l = i("Unit_Base"),
          d = cc._decorator,
          u = d.ccclass,
          p =
            (d.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "offroad_wheel");
                }),
                (e.prototype.setOtherAnchor = function (t, e) {
                  var o = -(t.x - this.node.x),
                    n = -(t.y - this.node.y);
                  t.angle % 360 == 90
                    ? (e.connectedAnchor = cc.v2(n, -o))
                    : t.angle % 360 == 180
                    ? (e.connectedAnchor = cc.v2(-o, -n))
                    : t.angle % 360 == 270
                    ? (e.connectedAnchor = cc.v2(-n, o))
                    : t.angle % 360 == 0 && (e.connectedAnchor = cc.v2(o, n));
                }),
                (e.prototype.connectAround = function (t) {
                  if (this.node.position.sub(t.position).mag() <= 77) {
                    var e = this.node
                        .getChildByName("wheel_down")
                        .addComponent(cc.RevoluteJoint),
                      o = this.node
                        .getChildByName("wheel_up")
                        .addComponent(cc.RevoluteJoint);
                    (e.connectedBody = t.getComponent(cc.RigidBody)),
                      (e.anchor = cc.v2(0, 0)),
                      this.setOtherAnchor(t, e),
                      (e.maxMotorTorque = 1200),
                      "EnemyCarNode" == t._parent.name
                        ? (e.motorSpeed = 2 * this.speed)
                        : s.default.instance.haveEnergy
                        ? (e.motorSpeed =
                            2 * -this.speed +
                            2 * -this.speed * s.default.instance.engineNum)
                        : (e.motorSpeed = 2 * -this.speed),
                      (e.enableMotor = !0),
                      (e.collideConnected = !1),
                      e.apply(),
                      (o.connectedBody = t.getComponent(cc.RigidBody)),
                      (o.anchor = cc.v2(0, 0)),
                      this.setOtherAnchor(t, o),
                      (o.maxMotorTorque = 1200),
                      "EnemyCarNode" == t._parent.name
                        ? (o.motorSpeed = 2 * this.speed)
                        : s.default.instance.haveEnergy
                        ? (o.motorSpeed =
                            2 * -this.speed +
                            2 * -this.speed * s.default.instance.engineNum)
                        : (o.motorSpeed = 2 * -this.speed),
                      (o.enableMotor = !0),
                      (o.collideConnected = !0),
                      o.apply();
                  }
                }),
                c([u], e)
              );
            })(l.default));
        (a.default = p), cc._RF.pop();
      },
      {},
    ],
    OtherGameManager: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "50a335S42JOL4h9aCAZyFVG", "OtherGameManager");
        var i = t,
          a = o,
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var c = i("OtherGame_Data"),
          s = i("GamePlatform"),
          l = i("GameUtil"),
          d = cc._decorator,
          u = d.ccclass,
          p =
            (d.property,
            (function () {
              function t() {
                (this.floatNodePrefab = null),
                  (this.drawerPrefab = null),
                  (this.drawerGridPrefab = null),
                  (this.gridPrefab = null),
                  (this.fourPrefab = null),
                  (this.totalDataCount = 0),
                  (this.curDataIndex = 0),
                  (this.scrollHorizental = null);
              }
              var e;
              return (
                (e = t),
                Object.defineProperty(t, "instance", {
                  get: function () {
                    return e._instance || (e._instance = new e()), e._instance;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.initOtherGameData = function (t) {
                  for (var e = [], o = 0; o < t.length; o++) {
                    var n = {
                      gameName: t[o].title,
                      packageName: t[o].appid,
                      gameId: t[o].appid,
                      gameIcon: t[o].icon,
                    };
                    e.push(n);
                  }
                  return e;
                }),
                (t.prototype.init = function () {
                  (e.gameData = new c.default()),
                    s.default.instance.isWX
                      ? (this.getNewFloatNode(null),
                        this.getDrawerGrid(null),
                        this.getFour(null),
                        this.getGrid(null),
                        this.getDrawer(null))
                      : s.default.instance.isOPPO ||
                        e.gameData.initData(e.gameData.oppoGameInfo);
                }),
                (t.prototype.getNewFloatNode = function (t) {
                  var e = null;
                  this.floatNodePrefab
                    ? ((e = cc.instantiate(this.floatNodePrefab)),
                      null != t && t(e))
                    : l.default.loadPrefab(
                        "other_games/prefab/float_prefab",
                        function (o) {
                          o && (e = cc.instantiate(o)), null != t && t(e);
                        }
                      );
                }),
                (t.prototype.getDrawer = function (t) {
                  var e = null;
                  this.drawerPrefab
                    ? ((e = cc.instantiate(this.drawerPrefab)),
                      null != t && t(e))
                    : l.default.loadPrefab(
                        "other_games/prefab/drawer_prefab",
                        function (o) {
                          o && (e = cc.instantiate(o)), null != t && t(e);
                        }
                      );
                }),
                (t.prototype.getDrawerGrid = function (t) {
                  var e = null;
                  this.drawerGridPrefab
                    ? ((e = cc.instantiate(this.drawerGridPrefab)),
                      null != t && t(e))
                    : l.default.loadPrefab(
                        "other_games/prefab/drawer_grid_prefab",
                        function (o) {
                          o && (e = cc.instantiate(o)), null != t && t(e);
                        }
                      );
                }),
                (t.prototype.getScrollHorizental = function (t) {
                  var e = null;
                  this.scrollHorizental
                    ? ((e = cc.instantiate(this.scrollHorizental)),
                      null != t && t(e))
                    : l.default.loadPrefab(
                        "other_games/prefab/ScrollHorzental",
                        function (o) {
                          o && (e = cc.instantiate(o)), null != t && t(e);
                        }
                      );
                }),
                (t.prototype.getGrid = function (t) {
                  var e;
                  this.gridPrefab
                    ? ((e = cc.instantiate(this.gridPrefab)), null != t && t(e))
                    : l.default.loadPrefab(
                        "other_games/prefab/grid_prefab",
                        function (o) {
                          o && (e = cc.instantiate(o)), null != t && t(e);
                        }
                      );
                }),
                (t.prototype.getFour = function (t) {
                  var e;
                  this.fourPrefab
                    ? ((e = cc.instantiate(this.fourPrefab)), null != t && t(e))
                    : l.default.loadPrefab(
                        "other_games/prefab/four_prefab",
                        function (o) {
                          o && (e = cc.instantiate(o)), null != t && t(e);
                        }
                      );
                }),
                (t._instance = null),
                (t.gameData = null),
                (e = r([u], t))
              );
            })());
        (a.default = p), cc._RF.pop();
      },
      {},
    ],
    OtherGame_Data: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "92b9f1TQ5BDwpkjJTKwQ/IV", "OtherGame_Data");
        var i = o,
          a = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          s =
            (r.property,
            (function () {
              function t() {
                (this.gameInfo = []),
                  (this.oppoGameInfo = [
                    {
                      gameId: 30421307,
                      gameName: "\u97f3\u8dc3\u5927\u5e08",
                      packageName: "com.tiequan.yyds.nearme.gamecenter",
                      gameIcon: "other_games/icons/30421307",
                    },
                    {
                      gameId: 30410009,
                      gameName: "\u753b\u7ebf\u5927\u5934",
                      packageName: "com.heygame.hxdt.nearme.gamecenter",
                      gameIcon: "other_games/icons/30410009",
                    },
                    {
                      gameId: 30396717,
                      gameName: "\u62fc\u88c5\u673a\u5668\u4eba\u4e71\u6597",
                      packageName: "com.heygame.pzjqrld.nearme.gamecenter",
                      gameIcon: "other_games/icons/30396717",
                    },
                    {
                      gameId: 30410005,
                      gameName: "\u8ff7\u4f60\u642c\u7816",
                      packageName: "com.heygame.mnbz.nearme.gamecenter",
                      gameIcon: "other_games/icons/30410005",
                    },
                    {
                      gameId: 30352155,
                      gameName: "\u6700\u5f3a\u868a\u5b50",
                      packageName: "com.heygame.zqwz.nearme.gamecenter",
                      gameIcon: "other_games/icons/30352155",
                    },
                  ]);
              }
              return (
                (t.prototype.initData = function (t) {
                  for (var e = 0; e < t.length; e++) this.gameInfo[e] = t[e];
                }),
                (t.prototype.getGameNameById = function (t) {
                  for (var e = 0; e < this.gameInfo.length; e++)
                    if (this.gameInfo[e].gameId == t)
                      return this.gameInfo[e].gameName;
                  return "";
                }),
                (t.prototype.getGamePackageNameById = function (t) {
                  for (var e = 0; e < this.gameInfo.length; e++)
                    if (this.gameInfo[e].gameId == t)
                      return this.gameInfo[e].packageName;
                  return "";
                }),
                (t.prototype.getGameIconById = function (t) {
                  for (var e = 0; e < this.gameInfo.length; e++)
                    if (this.gameInfo[e].gameId == t)
                      return this.gameInfo[e].gameIcon;
                  return null;
                }),
                a([c], t)
              );
            })());
        (i.default = s), cc._RF.pop();
      },
      {},
    ],
    OtherGame_DrawerGridManager: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(
          e,
          "5b374fHCWZA0r16hRvxLH31",
          "OtherGame_DrawerGridManager"
        );
        var i = o,
          a = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          l = c.property,
          d = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.itemRoot = null),
                (e.itemPrefab = null),
                (e.btn_close = null),
                (e.itemList = []),
                e
              );
            }
            return (
              a(e, t),
              (e.prototype.showUI_othergame_gridmanager = function (t) {
                this.dipose_grid();
                for (var e = 0; e < t.length; e++) {
                  var o = cc.instantiate(this.itemPrefab);
                  o.setParent(this.itemRoot),
                    o
                      .getComponent("FloatNodeItem")
                      .showGameDataList([t[e]], 0, !1, 1),
                    this.itemList.push(o);
                }
              }),
              (e.prototype.dipose_grid = function () {
                for (var t = 0; t < this.itemList.length; t++)
                  this.itemList[t]
                    .getComponent("FloatNodeItem")
                    .dipose_flaotNodeItem(),
                    this.itemList[t].destroy();
                this.itemList = [];
              }),
              (e.prototype.onEventBtnClose = function () {
                this.node.getParent().active = !1;
              }),
              r([l(cc.Node)], e.prototype, "itemRoot", void 0),
              r([l(cc.Prefab)], e.prototype, "itemPrefab", void 0),
              r([l(cc.Node)], e.prototype, "btn_close", void 0),
              r([s], e)
            );
          })(cc.Component);
        (i.default = d), cc._RF.pop();
      },
      {},
    ],
    OtherGame_DrawerManager: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "1dbfe67GNBC57qz8hzI79JU", "OtherGame_DrawerManager");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("GamePlatform"),
          l = i("UIManager"),
          d = i("UI_Title"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.itemRoot = null), (e.itemPrefab = null), (e.itemList = []), e
              );
            }
            return (
              r(e, t),
              (e.prototype.showUI_othergame_drawermanager = function (t) {
                this.setbtnoffset(0), this.dipose_drawer();
                for (var e = 0; e < t.length; e++) {
                  var o = cc.instantiate(this.itemPrefab);
                  o.setParent(this.itemRoot),
                    o
                      .getComponent("FloatNodeItem")
                      .showGameDataList([t[e]], 0, !1, 1),
                    this.itemList.push(o);
                }
              }),
              (e.prototype.dipose_drawer = function () {
                for (var t = 0; t < this.itemList.length; t++)
                  this.itemList[t]
                    .getComponent("FloatNodeItem")
                    .dipose_flaotNodeItem(),
                    this.itemList[t].destroy();
                this.itemList = [];
              }),
              (e.prototype.setbtnoffset = function (t) {
                this.node.getChildByName("drawer_btn").y = t;
              }),
              (e.prototype.onevent_btn_opendrawer = function () {
                s.default.instance.isNativeAdOn &&
                  l.default.titleNode() &&
                  (l.default
                    .titleNode()
                    .getComponent(d.default).nativeAdVisible = !1),
                  this.node.getChildByName("drawer_root").stopAllActions(),
                  cc
                    .tween(this.node.getChildByName("drawer_root"))
                    .to(0.5, { x: 0 })
                    .start();
              }),
              (e.prototype.onevent_btn_closedrawer = function () {
                s.default.instance.isNativeAdOn &&
                  l.default.titleNode() &&
                  (l.default
                    .titleNode()
                    .getComponent(d.default).nativeAdVisible = !0),
                  this.node.getChildByName("drawer_root").stopAllActions(),
                  cc
                    .tween(this.node.getChildByName("drawer_root"))
                    .to(0.5, { x: -700 })
                    .start();
              }),
              c([f(cc.Node)], e.prototype, "itemRoot", void 0),
              c([f(cc.Prefab)], e.prototype, "itemPrefab", void 0),
              c([p], e)
            );
          })(cc.Component);
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    OtherGame_FourManager: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "b574ea5ECRAwaCXUizZiKK+", "OtherGame_FourManager");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("GamePlatform"),
          l = i("OtherGameManager"),
          d = i("GameUtil"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.itemRoot = null),
                (e.itemPrefab = null),
                (e.itemList = []),
                (e.type = 0),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.showUI_othergame_fourmanager = function (t) {
                (this.type = t), this.dipose_grid(), this.showItemList();
              }),
              (e.prototype.showItemList = function () {
                if ((this.dipose_grid(), s.default.instance.isWX));
                else {
                  for (
                    var t = d.default.getRandomNumArray(
                        l.default.gameData.gameInfo,
                        4
                      ),
                      e = 0;
                    e < t.length;
                    e++
                  )
                    this.addItem([t[e]]);
                  cc.tween(this.node)
                    .delay(5)
                    .call(this.showItemList.bind(this))
                    .start();
                }
              }),
              (e.prototype.addItem = function (t) {
                var e = cc.instantiate(this.itemPrefab);
                e.setParent(this.itemRoot),
                  e
                    .getComponent("FloatNodeItem")
                    .showGameDataList(t, 0, !1, this.type),
                  this.itemList.push(e);
              }),
              (e.prototype.dipose_grid = function () {
                for (var t = 0; t < this.itemList.length; t++)
                  this.itemList[t]
                    .getComponent("FloatNodeItem")
                    .dipose_flaotNodeItem(),
                    this.itemList[t].destroy();
                this.itemList = [];
              }),
              c([f(cc.Node)], e.prototype, "itemRoot", void 0),
              c([f(cc.Prefab)], e.prototype, "itemPrefab", void 0),
              c([p], e)
            );
          })(cc.Component);
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    OtherGame_GridManager: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "d7fdfyJIoNEw775azLDxrs4", "OtherGame_GridManager");
        var i = o,
          a = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          l = c.property,
          d = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.itemRoot = null), (e.itemPrefab = null), (e.itemList = []), e
              );
            }
            return (
              a(e, t),
              (e.prototype.showUI_othergame_gridmanager = function (t) {
                this.dipose_grid();
                for (var e = 0; e < t.length; e++)
                  (o = cc.instantiate(this.itemPrefab)).setParent(
                    this.itemRoot
                  ),
                    o
                      .getComponent("FloatNodeItem")
                      .showGameDataList([t[e]], 0, !1, 3),
                    this.itemList.push(o);
                for (e = 0; e < t.length; e++) {
                  var o;
                  (o = cc.instantiate(this.itemPrefab)).setParent(
                    this.itemRoot
                  ),
                    o
                      .getComponent("FloatNodeItem")
                      .showGameDataList([t[e]], 0, !1, 3),
                    this.itemList.push(o);
                }
              }),
              (e.prototype.dipose_grid = function () {
                for (var t = 0; t < this.itemList.length; t++)
                  this.itemList[t]
                    .getComponent("FloatNodeItem")
                    .dipose_flaotNodeItem(),
                    this.itemList[t].destroy();
                this.itemList = [];
              }),
              r([l(cc.Node)], e.prototype, "itemRoot", void 0),
              r([l(cc.Prefab)], e.prototype, "itemPrefab", void 0),
              r([s], e)
            );
          })(cc.Component);
        (i.default = d), cc._RF.pop();
      },
      {},
    ],
    PCSDK: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "d20b0c6LHFCaqabFHY1hriP", "PCSDK");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("SDK"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.heyGameSdk = null), e;
              }
              return (
                r(e, t),
                (e.prototype.initSdk = function () {
                  this.runningEnv.heygame &&
                    ((this.heyGameSdk = this.runningEnv.heygame.sdk),
                    this.heyGameSdk.init(),
                    this.loadGameConfig(),
                    this.loadCustomConfig()),
                    console.log("PCSDK init");
                }),
                (e.prototype.loadGameConfig = function () {
                  var t = this;
                  this.heyGameSdk.loadGameCfg(
                    function (e) {
                      console.log("loadGameCfg" + JSON.stringify(e)),
                        e && (t.isOpen = 0 === e.tickSwProtErrOnoff);
                    },
                    function (t) {
                      console.log("loadGameCfg" + JSON.stringify(t));
                    }
                  );
                }),
                (e.prototype.loadCustomConfig = function () {
                  var t = this;
                  this.heyGameSdk.loadCustomCfg(
                    function (e) {
                      if ((console.log("loadCustomCfg" + JSON.stringify(e)), e))
                        for (var o = 0; o < e.length; o++) {
                          var n = e[o];
                          "adAutoClickNum" == n.keyName &&
                            (t.adAutoClickNum = parseInt(n.keyValue)),
                            "delayTime" == n.keyName &&
                              (t.delayTime = parseInt(n.keyValue)),
                            "nativeUpNum" == n.keyName &&
                              (t.nativeUpNum = parseInt(n.keyValue));
                        }
                    },
                    function (t) {
                      console.log("loadCustomCfg" + JSON.stringify(t));
                    }
                  );
                }),
                (e.prototype.createBannerAd = function (t) {
                  console.log("PCSDK showBannerAd");
                }),
                (e.prototype.showBannerAd = function (t) {
                  void 0 === t && (t = 100),
                    console.log("PCSDK showBannerAd:" + t);
                }),
                (e.prototype.hideBannerAd = function () {
                  console.log("PCSDK hideBannerAd");
                }),
                (e.prototype.showInsertAd = function (t) {
                  void 0 === t && (t = 200), console.log("PCSDK showInsertAd");
                }),
                (e.prototype.showVideoAd = function (t, e) {
                  void 0 === t && (t = 300),
                    console.log("PCSDK showVideoAd:" + t),
                    e(0);
                }),
                (e.prototype.destroyBannerAd = function () {
                  console.log("PCSDK destroyBannerAd");
                }),
                (e.prototype.showNativeBigAd = function (t, e) {
                  console.log("pc sdk showNativeBigAd:" + t), e(!1);
                }),
                (e.prototype.onNativeAdClick = function (t, e) {
                  console.log("PCSDK onNativeAdClick:" + t);
                }),
                (e.prototype.onNativeDestroy = function (t) {
                  console.log("PCSDK onNativeDestroy:" + t);
                }),
                (e.prototype.navigateToMiniGame = function (t, e, o, n, i) {
                  console.log("PCSDK navigateToMiniGame:" + e), i(!1);
                }),
                (e.prototype.onBegin = function (t) {
                  console.log("PCSDK onBegin:" + t),
                    this.heyGameSdk && this.heyGameSdk.onBegin(t);
                }),
                (e.prototype.onCompleted = function (t) {
                  console.log("PCSDK onCompleted:" + t),
                    this.heyGameSdk && this.heyGameSdk.onCompleted(t);
                }),
                (e.prototype.onFailed = function (t) {
                  console.log("PCSDK onFailed:" + JSON.stringify(t)),
                    this.heyGameSdk &&
                      this.heyGameSdk.onFailed(t.missionId, t.isStop);
                }),
                (e.prototype.onEvent = function (t) {
                  console.log("PCSDK onEvent:" + JSON.stringify(t));
                }),
                (e.prototype.shareRecorder = function (t) {
                  console.log("PCSDK shareRecorder"), t(0);
                }),
                (e.prototype.showPrivacy = function () {
                  console.log("PCSDK showPrivacy");
                }),
                (e.prototype.showNativeIconAd = function (t, e) {
                  void 0 === t && (t = "1"),
                    console.log("pc sdk showNativeIconAd");
                }),
                (e.prototype.hasShortcutInstalled = function (t) {
                  t(!1);
                }),
                (e.prototype.installShortcutIcon = function (t) {
                  t(!0);
                }),
                c([d], e)
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    PoolManager: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "ded4cUGHJ5COJ85JHbFwka2", "PoolManager");
        var i = o,
          a = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          l =
            (c.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              var o;
              return (
                a(e, t),
                (o = e),
                (e.addPrefabToCaches = function (t, e, n) {
                  void 0 === n && (n = 1),
                    t &&
                      e &&
                      ((o.prefabCaches[t] = e), this.createToPool(t, n));
                }),
                (e.createToPool = function (t, e) {
                  if (
                    (void 0 === e && (e = 1),
                    t &&
                      t &&
                      o.prefabCaches[t] &&
                      (null == o.gamePool[t] &&
                        (o.gamePool[t] = new cc.NodePool()),
                      e > o.gamePool[t].size() &&
                        ((e -= o.gamePool[t].size()), o.prefabCaches[t])))
                  )
                    for (var n = 0; n < e; n++) {
                      var i = cc.instantiate(o.prefabCaches[t]);
                      o.gamePool[t].put(i);
                    }
                }),
                (e.putNodeToPool = function (t, e) {
                  null != t &&
                    null != e &&
                    (null == o.gamePool[t] &&
                      (o.gamePool[t] = new cc.NodePool()),
                    o.gamePool[t].put(e));
                }),
                (e.getNodeFromPool = function (t) {
                  var e = null;
                  return (
                    null == o.gamePool[t] &&
                      (o.gamePool[t] = new cc.NodePool()),
                    o.gamePool[t].size() > 0
                      ? (e = o.gamePool[t].get())
                      : o.prefabCaches[t] &&
                        (e = cc.instantiate(o.prefabCaches[t])),
                    e
                  );
                }),
                (e.getAsyncNodeFromPool = function (t, e) {
                  var n = null;
                  null == o.gamePool[t] && (o.gamePool[t] = new cc.NodePool()),
                    o.gamePool[t].size() > 0
                      ? ((n = o.gamePool[t].get()), e && e(t, n))
                      : o.prefabCaches[t]
                      ? ((n = cc.instantiate(o.prefabCaches[t])), e && e(t, n))
                      : cc.loader.loadRes(t, function (i, a) {
                          null == i &&
                            (o.addPrefabToCaches(t, a),
                            (n = cc.instantiate(o.prefabCaches[t])),
                            e && e(t, n));
                        });
                }),
                (e.prefabCaches = {}),
                (e.gamePool = {}),
                (o = r([s], e))
              );
            })(cc.Component));
        (i.default = l), cc._RF.pop();
      },
      {},
    ],
    Prepare_List_Unit_item: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "d8344QXMh1CH7ZiLlbeVW5h", "Prepare_List_Unit_item");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("StaticData"),
          d = (i("GamePlatform"), i("UI_FightPrepare")),
          u = i("UIManager"),
          p = (i("Config"), i("EnumDefiner")),
          f = cc._decorator,
          h = f.ccclass,
          y = f.property,
          m = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.num = null),
                (e.energy = null),
                (e.level = null),
                (e.icon = null),
                (e.progress = null),
                (e.progressLabel = null),
                (e.canNotTouchNode = null),
                (e.canNotTouchNodeADicon = null),
                (e.icon_Max_Small = null),
                (e.unitName = null),
                (e.dragSpellCell = null),
                e
              );
            }
            var o;
            return (
              r(e, t),
              (o = e),
              (e.prototype.onLoad = function () {
                (o.instance = this),
                  this.node.on(
                    cc.Node.EventType.TOUCH_START,
                    this.onEvent_TouchStart,
                    this
                  ),
                  this.node.on(
                    cc.Node.EventType.TOUCH_MOVE,
                    this.onEvent_TouchMove,
                    this
                  ),
                  this.node.on(
                    cc.Node.EventType.TOUCH_END,
                    this.onEvent_TouchEnd,
                    this
                  ),
                  this.node.on(
                    cc.Node.EventType.TOUCH_CANCEL,
                    this.onEvent_TouchCancel,
                    this
                  );
              }),
              (e.prototype.onDisable = function () {
                this.node.off(
                  cc.Node.EventType.TOUCH_START,
                  this.onEvent_TouchStart
                ),
                  this.node.off(
                    cc.Node.EventType.TOUCH_MOVE,
                    this.onEvent_TouchMove
                  ),
                  this.node.off(
                    cc.Node.EventType.TOUCH_END,
                    this.onEvent_TouchEnd
                  ),
                  this.node.off(
                    cc.Node.EventType.TOUCH_CANCEL,
                    this.onEvent_TouchCancel
                  );
              }),
              (e.prototype.Show_Prepare_Unit_item = function (t) {
                switch (
                  ((this.staticUnitData = l.default.GetUnitDataByIDAndLv(
                    t.id,
                    t.level
                  )),
                  (this.unitData = t),
                  s.default.GetUnitLevelDataById(t.id).isLocked
                    ? ((this.canNotTouchNode.active = !0),
                      (this.canNotTouchNodeADicon.active = !0),
                      (this.num.getComponent(cc.Label).string = "x0"))
                    : ((this.num.getComponent(cc.Label).string =
                        "x" + this.unitData.canUseNum),
                      this.unitData.canUseNum <= 0
                        ? ((this.canNotTouchNode.active = !0),
                          (this.canNotTouchNodeADicon.active = !0))
                        : ((this.canNotTouchNode.active = !1),
                          (this.canNotTouchNodeADicon.active = !1))),
                  this.staticUnitData.quality)
                ) {
                  case p.ENUM_UNIT_QUALITY.E_BLUE:
                    cc.loader.loadRes(
                      "UI/unit/1",
                      cc.SpriteFrame,
                      function (t, e) {
                        null == t
                          ? (this.node
                              .getChildByName("ui_pz_double")
                              .getComponent(cc.Sprite).spriteFrame = e)
                          : console.error(t);
                      }.bind(this)
                    );
                    break;
                  case p.ENUM_UNIT_QUALITY.E_PURPLE:
                    cc.loader.loadRes(
                      "UI/unit/2",
                      cc.SpriteFrame,
                      function (t, e) {
                        null == t &&
                          (this.node
                            .getChildByName("ui_pz_double")
                            .getComponent(cc.Sprite).spriteFrame = e);
                      }.bind(this)
                    );
                    break;
                  case p.ENUM_UNIT_QUALITY.E_ORANGE:
                    cc.loader.loadRes(
                      "UI/unit/3",
                      cc.SpriteFrame,
                      function (t, e) {
                        null == t &&
                          (this.node
                            .getChildByName("ui_pz_double")
                            .getComponent(cc.Sprite).spriteFrame = e);
                      }.bind(this)
                    );
                }
                (this.level.getComponent(cc.Label).string =
                  this.unitData.level + ""),
                  (this.energy.getComponent(cc.Label).string =
                    this.staticUnitData.energy),
                  (this.unitName.getComponent(cc.Label).string =
                    this.staticUnitData.name),
                  cc.loader.loadRes(
                    "Unit/" + this.staticUnitData.iconUrl,
                    cc.SpriteFrame,
                    function (t, e) {
                      null == t &&
                        (this.icon.getComponent(cc.Sprite).spriteFrame = e);
                    }.bind(this)
                  ),
                  this.setProgress();
              }),
              (e.prototype.setProgress = function () {
                -1 != this.staticUnitData.upgrade_card
                  ? ((this.progress.getComponent(cc.ProgressBar).progress =
                      (1 * this.unitData.pieceCount) /
                      this.staticUnitData.upgrade_card),
                    (this.progressLabel.string =
                      this.unitData.pieceCount +
                      "/" +
                      this.staticUnitData.upgrade_card),
                    (this.icon_Max_Small.active = !1))
                  : ((this.progress.getComponent(cc.ProgressBar).progress = 1),
                    (this.progressLabel.node.active = !1),
                    (this.icon_Max_Small.active = !0));
              }),
              (e.prototype.onEvent_List_Item_Change = function (t) {
                this.unitData.canUseNum <= 1 && t < 0
                  ? ((this.unitData.canUseNum = 0),
                    (this.num.getComponent(cc.Label).string =
                      "x" + this.unitData.canUseNum),
                    (this.canNotTouchNode.active = !0),
                    (this.canNotTouchNodeADicon.active = !0))
                  : ((this.unitData.canUseNum += t),
                    (this.num.getComponent(cc.Label).string =
                      "x" + this.unitData.canUseNum),
                    (this.canNotTouchNode.active = !1),
                    (this.canNotTouchNodeADicon.active = !1));
              }),
              (e.prototype.onEvent_TouchStart = function (t) {
                (this.dragSpellCell = null),
                  s.default.RuntimeData.firstGame &&
                    d.default.instance.onEvent_guide_closePoint();
              }),
              (e.prototype.onEvent_btn_watchToAddUnit = function () {
                var t = this;
                YYGplatform.showReward(function () {
                  (t.num.getComponent(cc.Label).string = "x1"),
                    (t.unitData.canUseNum = 1),
                    (t.canNotTouchNode.active = !1),
                    (t.canNotTouchNodeADicon.active = !1),
                    s.default.videoUnitList.push(t.unitData.id);
                });
              }),
              (e.prototype.onEvent_TouchMove = function (t) {
                if (null == this.dragSpellCell) {
                  var e = t.touch;
                  if (
                    e._point.sub(e._startPoint).mag() > 50 &&
                    e._point.x < e._startPoint.x - 50
                  ) {
                    (this.dragSpellCell = d.default.instance.getNewCellItem(
                      this.unitData.id,
                      0
                    )),
                      this.dragSpellCell.showAround(!0),
                      this.dragSpellCell.showNotConnectIcon(!1);
                    var o = d.default.instance.showCarNode.convertToNodeSpaceAR(
                      t.getLocation()
                    );
                    (this.dragSpellCell.node.name = "unit_item_spelling"),
                      (this.dragSpellCell.node.x = o.x),
                      (this.dragSpellCell.node.y = o.y),
                      d.default.instance.action_stopScrollView(),
                      this.onEvent_List_Item_Change(-1);
                  }
                }
                if (null != this.dragSpellCell) {
                  var n = d.default.instance.showCarNode.convertToNodeSpaceAR(
                    t.getLocation()
                  );
                  (this.dragSpellCell.node.x = n.x),
                    (this.dragSpellCell.node.y = n.y),
                    (this.dragSpellCell.node.opacity = 255);
                }
              }),
              (e.prototype.onEvent_TouchEnd = function (t) {
                null != this.dragSpellCell &&
                  (d.default.instance.checkCell(this.dragSpellCell),
                  (this.dragSpellCell = null)),
                  d.default.instance.action_activeScrollView(t);
              }),
              (e.prototype.onEvent_TouchCancel = function (t) {
                null != this.dragSpellCell &&
                  (d.default.instance.checkCell(this.dragSpellCell),
                  (this.dragSpellCell = null)),
                  d.default.instance.action_activeScrollView(t);
              }),
              (e.prototype.onEvent_btn_shouUnitCollectDetails = function () {
                u.default.ShowUI_CollectDetails(this.unitData);
              }),
              (e.instance = null),
              c([y(cc.Node)], e.prototype, "num", void 0),
              c([y(cc.Node)], e.prototype, "energy", void 0),
              c([y(cc.Node)], e.prototype, "level", void 0),
              c([y(cc.Node)], e.prototype, "icon", void 0),
              c([y(cc.Node)], e.prototype, "progress", void 0),
              c([y(cc.Label)], e.prototype, "progressLabel", void 0),
              c([y(cc.Node)], e.prototype, "canNotTouchNode", void 0),
              c([y(cc.Node)], e.prototype, "canNotTouchNodeADicon", void 0),
              c([y(cc.Node)], e.prototype, "icon_Max_Small", void 0),
              c([y(cc.Node)], e.prototype, "unitName", void 0),
              (o = c([h], e))
            );
          })(cc.Component);
        (a.default = m), cc._RF.pop();
      },
      {},
    ],
    QQSDK: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "3f57bJHUnJIpJVRUwXrpxWo", "QQSDK");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("SDK"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e.apiName = "qq"),
                  (e.BANNER_ID = "2a08538b41f26145d0ae35476c00a54e"),
                  (e.INSERT_ID = ""),
                  (e.VIDEO_ID = "af3266b688fafb0ce4a42bfdf18f0d5a"),
                  (e.BOX_ID = "4209216105baecba806495dc6f1c7ece"),
                  (e.BLOCK_AD = ["5f9a7db51be92248ca43397ef6f215e8"]),
                  (e.heyGameInfo = window.GameGlobal.heyGameConfig),
                  (e.isShowAppBoxAd = !1),
                  (e.url = ""),
                  e
                );
              }
              var o;
              return (
                r(e, t),
                (o = e),
                (e.prototype.initSdk = function () {
                  console.log("QQSDK init"),
                    (o.instance = this),
                    (this.api = window[this.apiName]),
                    (this.appVersion = this.heyGameInfo.versionName),
                    console.log("QQSDK appVersion--", this.appVersion),
                    (this.systemInfo = this.api.getSystemInfoSync()),
                    (this.screenWidth = this.systemInfo.screenWidth),
                    (this.screenHeight = this.systemInfo.screenHeight),
                    console.log(
                      "\u7cfb\u7edf\u4fe1\u606f\uff1a" +
                        JSON.stringify(this.systemInfo)
                    ),
                    this.initBannerAd(),
                    this.createVideoAd(),
                    this.initAppBoxAdConfig(),
                    this.destroyBlockAd(0),
                    this.api.showShareMenu({
                      showShareItems: [
                        "qq",
                        "qzone",
                        "wechatFriends",
                        "wechatMoment",
                      ],
                    }),
                    this.api.onShareAppMessage(function () {
                      return {
                        title:
                          "\u706b\u67f4\u4eba\u9047\u4e0a\u771f\u7231\u4e86,\u5feb\u6765\u5e2e\u4ed6\u4eec\u7275\u624b\u6210\u529f!",
                        imageUrl: "",
                      };
                    });
                }),
                (e.prototype.initAppBoxAdConfig = function () {
                  (this.url = this.url + this.getSysTime()),
                    cc.loader.load(this.url, function (t, e) {
                      null == t &&
                        e[o.instance.appVersion] &&
                        (o.instance.isShowAppBoxAd = !0);
                    });
                }),
                (e.prototype.initBannerAd = function () {
                  var t = this;
                  this.createBannerAd(!1),
                    this.api.onHide(function () {
                      console.log("qq.onhide"),
                        t.isFirstInGame || t.createBannerAd(!0);
                    });
                }),
                (e.prototype.createBannerAd = function (t) {
                  void 0 === t && (t = !1),
                    console.log("createBannerAd", t),
                    (this.bannerAd = this.api.createBannerAd({
                      adUnitId: this.BANNER_ID,
                      style: {
                        width: 200,
                        top: 0,
                        left: this.screenHeight - 112.5,
                      },
                    })),
                    this.bannerAd.onResize(function () {
                      (o.instance.bannerAd.style.left =
                        o.instance.screenWidth / 2 -
                        o.instance.bannerAd.style.realWidth / 2 +
                        0.1),
                        (o.instance.bannerAd.style.top =
                          o.instance.screenHeight -
                          o.instance.bannerAd.style.realHeight +
                          0.1);
                    }),
                    this.bannerAd.onLoad(function () {
                      t && o.instance.showBannerAd();
                    }),
                    this.bannerAd.onError(function (t) {
                      console.log(
                        "\u9519\u8bef\u76d1\u542c\uff1a",
                        JSON.stringify(t)
                      );
                    });
                }),
                (e.prototype.showBannerAd = function (t) {
                  void 0 === t && (t = 100),
                    null != this.bannerAd
                      ? (this.bannerAd.show(), (this.isFirstInGame = !1))
                      : this.createBannerAd(!0);
                }),
                (e.prototype.hideBannerAd = function () {
                  null != this.bannerAd && this.bannerAd.hide();
                }),
                (e.prototype.destroyBannerAd = function () {
                  null != this.bannerAd &&
                    (this.bannerAd.destroy(), (this.bannerAd = null));
                }),
                (e.prototype.createInsertAd = function () {
                  null != this.insertAd && this.insertAd.destroy(),
                    (this.insertAd = this.api.createInterstitialAd({
                      adUnitId: this.INSERT_ID,
                    })),
                    this.insertAd.onLoad(function () {
                      console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d");
                    }),
                    this.insertAd.onClose(function () {
                      console.log("\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed"),
                        o.instance.createInsertAd(),
                        o.instance.showBannerAd();
                    }),
                    this.insertAd.onError(function (t) {
                      console.log(
                        "\u63d2\u5c4f\u5e7f\u544a\u51fa\u9519\uff1a",
                        JSON.stringify(t)
                      );
                    });
                }),
                (e.prototype.showInsertAd = function (t) {
                  void 0 === t && (t = 200);
                }),
                (e.prototype.showNativeAd = function (t, e) {
                  void 0 === t && (t = "1");
                }),
                (e.prototype.onNativeAdClick = function (t) {}),
                (e.prototype.onNativeDestroy = function () {}),
                (e.prototype.navigateToMiniGame = function (t, e, o, n, i) {}),
                (e.prototype.createVideoAd = function () {
                  try {
                    console.log(
                      "\u521b\u5efa\u5fae\u4fe1\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"
                    ),
                      (this.videoAd = this.api.createRewardedVideoAd({
                        adUnitId: this.VIDEO_ID,
                      })),
                      this.videoAd
                        .load()
                        .then(function () {
                          console.log("ad loaded");
                        })
                        .catch(function (t) {
                          console.log(
                            "\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25"
                          );
                        }),
                      this.videoAd.onClose(function (t) {
                        void 0 == t
                          ? o.instance.videoAdCallBack(0)
                          : (console.log("==> rewardedVideoAd onClose", t),
                            t.isEnded
                              ? o.instance.videoAdCallBack(0)
                              : (o.instance.videoAdCallBack(1),
                                console.log("\u5e7f\u544a\u6ca1\u770b\u5b8c")));
                      }),
                      this.videoAd.onError(function (t) {
                        console.log("onError:", t.errMsg);
                      });
                  } catch (t) {
                    console.log("wxRewardVideoAd error", t);
                  }
                }),
                (e.prototype.showVideoAd = function (t, e) {
                  void 0 === t && (t = 300),
                    (this.videoAdCallBack = e),
                    this.videoAd &&
                      this.videoAd
                        .show()
                        .then(function () {
                          console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f");
                        })
                        .catch(function (t) {
                          console.log(
                            "\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898",
                            t
                          ),
                            o.instance.videoAd.load().then(function () {
                              console.log(
                                "\u624b\u52a8\u52a0\u8f7d\u6210\u529f"
                              ),
                                o.instance.videoAd.show();
                            });
                        });
                }),
                (e.prototype.showBlockAd = function (t, e) {
                  var n = this;
                  (this.blockAd[t] = this.api.createBlockAd({
                    adUnitId: this.BLOCK_AD[t],
                    size: e.size,
                    orientation: e.orientation,
                    style: { left: 16, top: 16 },
                  })),
                    this.blockAd[t].onLoad(function () {
                      null != n.blockAd[t] && n.blockAd[t].show();
                    }),
                    this.blockAd[t].onResize(function (i) {
                      console.log(i.width, i.height),
                        null != n.blockAd[t] &&
                          ((o.instance.blockAd[t].style.left = e.left),
                          (o.instance.blockAd[t].style.top = e.top),
                          console.log(
                            "blockAd style left",
                            o.instance.blockAd[t].style.left
                          ),
                          console.log(
                            "blockAd style top",
                            o.instance.blockAd[t].style.top
                          ));
                    });
                }),
                (e.prototype.destroyBlockAd = function (t) {
                  console.log("destroyBlockAd--" + t),
                    null != this.blockAd[t] &&
                      (console.log("destroyBlockAd--destroy"),
                      this.blockAd[t].destroy(),
                      (this.blockAd[t] = null));
                }),
                (e.prototype.showAppBoxAd = function () {
                  this.isShowAppBoxAd &&
                    ((this.appBoxAd = this.api.createAppBox({
                      adUnitId: this.BOX_ID,
                    })),
                    this.appBoxAd.load().then(function () {
                      o.instance.appBoxAd.show();
                    }));
                }),
                (e.prototype.vibrateLong = function () {
                  this.api.vibrateLong();
                }),
                (e.prototype.vibrateShort = function () {
                  this.api.vibrateShort();
                }),
                (e.prototype.onBegin = function (t) {
                  console.log("\u5f00\u59cb\u7b2c" + t + "\u5173");
                }),
                (e.prototype.onCompleted = function (t) {
                  console.log("\u7ed3\u675f\u7b2c" + t + "\u5173");
                }),
                (e.prototype.onFailed = function (t) {
                  console.log("\u5931\u8d25\u7b2c" + t.missionId + "\u5173");
                }),
                (e.prototype.onEvent = function (t) {
                  console.log("onEvent:" + JSON.stringify(t));
                }),
                (o = c([d], e))
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    Rocket: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "7fca89skv5FgodlOdQRmzb7", "Rocket");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("UI_Fight"),
          l = i("GameUtil"),
          d = i("CarManager"),
          u = i("Unit_Base"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.totalTime = 0), (e.count = 0), e;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    (this.name = "rocket"),
                    (this.node.getComponent(cc.RigidBody).fixedRotation = !0);
                }),
                (e.prototype.connectAround = function (t) {
                  if (this.node.position.sub(t.position).mag() <= 77) {
                    var e = this.node.addComponent(cc.WeldJoint);
                    (e.connectedBody = t.getComponent(cc.RigidBody)),
                      (e.collideConnected = !0),
                      this.setSelfAnchor(t, e),
                      this.setOtherAnchor(t, e),
                      (e.referenceAngle = this.node.angle - t.angle),
                      e.apply(),
                      l.default.GetNodeWorldPositionForUINode(this.node).x,
                      l.default.GetNodeWorldPositionForUINode(this.node).y,
                      cc.loader.loadRes(
                        "Effects/FX_Huojian_Trail",
                        cc.Prefab,
                        function (t, e) {
                          null == t &&
                            ((this.effect = cc.instantiate(e)),
                            this.effect.setParent(this.node),
                            (this.effect.x = -29),
                            (this.effect.y = 10),
                            (this.effect.active = !0));
                        }.bind(this)
                      );
                  }
                  (this.totalTime = this.speed),
                    1 == d.default.instance.haveFuel
                      ? (this.totalTime +=
                          this.speed * d.default.instance.fuelNum)
                      : (this.totalTime = this.speed);
                }),
                (e.prototype.update = function () {
                  1 == s.default.instance.fightStart &&
                    1 == this.alive &&
                    1 == this.isConnect &&
                    (this.totalTime > 0
                      ? ((this.speed = this.speed),
                        (this.node.getComponent(cc.RigidBody).linearVelocity =
                          cc
                            .v2(5 * this.speed, 0)
                            .rotate(cc.misc.degreesToRadians(this.node.angle))))
                      : ((this.totalTime = 0),
                        this.speed--,
                        this.speed <= 0 &&
                          ((this.speed = 0),
                          (this.node.getComponent(cc.RigidBody).enabled = !1),
                          (this.effect.active = !1))),
                    this.count++,
                    this.totalTime--,
                    40 == this.count &&
                      ((this.count = 0),
                      (this.node.getComponent(cc.RigidBody).fixedRotation =
                        !1)));
                }),
                c([f], e)
              );
            })(u.default));
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    SDK: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "867a4cWSO9BhJX4PVBNx058", "SDK");
        var i = o,
          a = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var r,
          c,
          s = cc._decorator,
          l = s.ccclass;
        s.property,
          (function (t) {
            (t[(t.NATIVE_AD_GAME = 0)] = "NATIVE_AD_GAME"),
              (t[(t.NATIVE_AD_FINISH = 1)] = "NATIVE_AD_FINISH");
          })(r || (r = {})),
          (function (t) {
            (t[(t.BLOCK_AD_GAME = 0)] = "BLOCK_AD_GAME"),
              (t[(t.BLOCK_AD_TIP = 1)] = "BLOCK_AD_TIP");
          })(c || (c = {}));
        var d = (function () {
          function t() {
            (this.runningEnv =
              "undefined" != typeof window ? window : globalThis),
              (this.nativeAd = {}),
              (this.nativeAdData = {}),
              (this.blockAd = {}),
              (this.isFirstInGame = !0),
              (this.appVersion = "1.0.0"),
              (this.NativeAdType = r),
              (this.BlockAdType = c),
              (this.isOpen = !1),
              (this.adAutoClickNum = 0),
              (this.nativeUpNum = 100),
              (this.delayTime = 30),
              (this.lastLoginTime = 0),
              (this.isTimeLoop = !1);
          }
          return (
            (t.prototype.initSdk = function () {}),
            (t.prototype.hasShortcutInstalled = function (t) {}),
            (t.prototype.installShortcutIcon = function (t) {}),
            (t.prototype.showBannerAd = function (t) {
              void 0 === t && (t = 100);
            }),
            (t.prototype.isShowPlatformGameAd = function () {
              return !1;
            }),
            (t.prototype.showPlatformBannerGameAd = function () {}),
            (t.prototype.hidePlatformBannerGameAd = function () {}),
            (t.prototype.showPlatformDrawerGameAd = function (t) {}),
            (t.prototype.hideBannerAd = function () {}),
            (t.prototype.destroyBannerAd = function () {}),
            (t.prototype.createBannerAd = function (t) {
              void 0 === t && (t = !1);
            }),
            (t.prototype.showInsertAd = function (t) {
              void 0 === t && (t = 200);
            }),
            (t.prototype.showBlockAd = function (t, e) {}),
            (t.prototype.destroyBlockAd = function (t) {}),
            (t.prototype.showAppBoxAd = function () {}),
            (t.prototype.showNativeBigAd = function (t, e) {}),
            (t.prototype.showNativeMiniAd = function (t, e) {}),
            (t.prototype.showNativeIconAd = function (t, e) {}),
            (t.prototype.onNativeAdClick = function (t, e) {}),
            (t.prototype.onNativeDestroy = function (t) {}),
            (t.prototype.showVideoAd = function (t, e) {
              void 0 === t && (t = 300);
            }),
            (t.prototype.navigateToMiniGame = function (t, e, o, n, i) {}),
            (t.prototype.shareAppMessage = function (t) {}),
            (t.prototype.startRecorder = function () {}),
            (t.prototype.stopRecorder = function () {}),
            (t.prototype.shareRecorder = function (t) {}),
            (t.prototype.onBegin = function (t) {}),
            (t.prototype.onCompleted = function (t) {}),
            (t.prototype.onFailed = function (t) {}),
            (t.prototype.onEvent = function (t) {}),
            (t.prototype.getSysTime = function () {
              return Math.floor(new Date().getTime() / 1e3);
            }),
            (t.prototype.showPrivacy = function () {}),
            (t.prototype.vibrateShort = function () {}),
            (t.prototype.vibrateLong = function () {}),
            (t.prototype.loadSubpackage = function (t, e) {}),
            (t.prototype.showToast = function (t) {}),
            (t.prototype.showBannerVisible = function (t) {}),
            (t.prototype.onEggsCallBack = function (t) {}),
            a([l], t)
          );
        })();
        (i.default = d), cc._RF.pop();
      },
      {},
    ],
    ScrollList: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "13bf0oHQdRMBbcsYV8ANRfa", "ScrollList");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("OtherGameManager"),
          l = i("ItemClickEvent"),
          d = cc._decorator,
          u = d.ccclass,
          p = d.property,
          f = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.autoScroll_Speed = 30),
                (e.dragSpeed = 100),
                (e.iconIntervalX = 40),
                (e.spriteList = []),
                (e.startIndex = 0),
                (e.rightChangePosX = 0),
                (e.leftChangePosX = 0),
                (e.isAutoScroll = !1),
                (e.isMoveToLeft = !1),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.onLoad = function () {}),
              (e.prototype.start = function () {}),
              (e.prototype.lateUpdate = function (t) {
                this.isAutoScroll &&
                  ((this.isMoveToLeft = !0),
                  this.moveItem(t * this.autoScroll_Speed));
              }),
              (e.prototype.initList = function () {
                if (this.startIndex > s.default.gameData.gameInfo.length - 1)
                  return (
                    (this.isAutoScroll = !0),
                    this.node.on(
                      cc.Node.EventType.TOUCH_START,
                      this.onTouchStart,
                      this
                    ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.onTouchMove,
                      this
                    ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_END,
                      this.onTouchEnd,
                      this
                    ),
                    void this.node.on(
                      cc.Node.EventType.TOUCH_CANCEL,
                      this.onTouchEnd,
                      this
                    )
                  );
                var t = this;
                cc.loader.loadRes(
                  "other_games/prefab/itemHorizental",
                  cc.Prefab,
                  function (e, o) {
                    var n = cc.instantiate(o);
                    n
                      .getComponent(l.default)
                      .init(
                        s.default.gameData.gameInfo[t.startIndex].gameIcon,
                        s.default.gameData.gameInfo[t.startIndex].gameName,
                        s.default.gameData.gameInfo[t.startIndex].gameId
                      ),
                      t.node.addChild(n);
                    var i =
                      (t.node.width / 2) * -1 +
                      n.width * t.startIndex +
                      n.width / 2 +
                      t.iconIntervalX * t.startIndex;
                    switch ((n.setPosition(cc.v2(i, 0)), t.startIndex)) {
                      case s.default.gameData.gameInfo.length - 1:
                        (t.rightChangePosX = -1 * i), (t.leftChangePosX = i);
                    }
                    t.spriteList.push(n), (t.startIndex += 1), t.initList();
                  }
                );
              }),
              (e.prototype.onTouchStart = function () {
                this.unschedule(this.doAutoScroll), (this.isAutoScroll = !1);
              }),
              (e.prototype.onTouchMove = function (t) {
                var e = t.getDelta();
                (this.isMoveToLeft = !(e.x > 0)),
                  this.moveItem(
                    this.isMoveToLeft ? this.dragSpeed : -this.dragSpeed
                  );
              }),
              (e.prototype.onTouchEnd = function () {
                this.scheduleOnce(this.doAutoScroll, 1.5);
              }),
              (e.prototype.doAutoScroll = function () {
                this.isAutoScroll = !0;
              }),
              (e.prototype.moveItem = function (t) {
                for (var e = 0; e < this.spriteList.length; e++) {
                  var o = this.spriteList[e].x;
                  this.spriteList[e].setPosition(cc.v2(o - t, 0));
                }
                if (this.isMoveToLeft) {
                  var n = this.spriteList[0];
                  if (n.x <= this.rightChangePosX) {
                    var i =
                      this.spriteList[this.spriteList.length - 1].x +
                      n.width +
                      this.iconIntervalX;
                    n.setPosition(cc.v2(i, 0));
                    var a = this.spriteList.shift();
                    this.spriteList.push(a);
                  }
                } else {
                  var r = this.spriteList[this.spriteList.length - 1];
                  r.x >= this.leftChangePosX &&
                    ((i = this.spriteList[0].x - r.width - this.iconIntervalX),
                    r.setPosition(cc.v2(i, 0)),
                    (a = this.spriteList.pop()),
                    this.spriteList.unshift(a));
                }
              }),
              c([p], e.prototype, "autoScroll_Speed", void 0),
              c([p], e.prototype, "dragSpeed", void 0),
              c([p], e.prototype, "iconIntervalX", void 0),
              c([u], e)
            );
          })(cc.Component);
        (a.default = f), cc._RF.pop();
      },
      {},
    ],
    ScrollVertical: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "025aaNN5i1MsK82XlbOjObS", "ScrollVertical");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("OtherGameManager"),
          l = i("ItemClickEvent"),
          d = cc._decorator,
          u = d.ccclass,
          p = d.property,
          f = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.autoScroll_Speed = 30),
                (e.dragSpeed = 100),
                (e.itemListArray = []),
                (e.tarTotal = 0),
                (e.curCount = 0),
                (e.startItemListIndex = 0),
                (e.iconIndex = 0),
                (e.curIconCount = 0),
                (e.bottomChangePos = 0),
                (e.topChangePos = 0),
                (e.isAutoScroll = !1),
                (e.isMoveToTop = !1),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.start = function () {}),
              (e.prototype.lateUpdate = function (t) {
                this.isAutoScroll &&
                  ((this.isMoveToTop = !0),
                  this.moveItem(t * this.autoScroll_Speed));
              }),
              (e.prototype.initList = function () {
                var t = s.default.gameData.gameInfo.length - 1,
                  e = t % 3,
                  o = parseInt((t / 3).toString());
                (this.tarTotal = e + o), this.createItemList();
              }),
              (e.prototype.createItemList = function () {
                if (this.curCount >= this.tarTotal) this.createItemSprite();
                else {
                  var t = this;
                  cc.loader.loadRes(
                    "other_games/prefab/itemList",
                    cc.Prefab,
                    function (e, o) {
                      var n = cc.instantiate(o);
                      (n.parent = t.node.getChildByName("listNode")),
                        n.setPosition(cc.v2(n.x, n.y - t.curCount * n.height)),
                        t.itemListArray.push(n),
                        (t.curCount += 1),
                        t.curCount >= t.tarTotal &&
                          ((t.bottomChangePos = n.y - n.height / 2),
                          (t.topChangePos = -1 * t.bottomChangePos)),
                        t.createItemList();
                    }
                  );
                }
              }),
              (e.prototype.createItemSprite = function () {
                if (this.iconIndex >= s.default.gameData.gameInfo.length - 1)
                  return (
                    (this.isAutoScroll = !0),
                    this.node.on(
                      cc.Node.EventType.TOUCH_START,
                      this.onTouchStart,
                      this
                    ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.onTouchMove,
                      this
                    ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_END,
                      this.onTouchEnd,
                      this
                    ),
                    void this.node.on(
                      cc.Node.EventType.TOUCH_CANCEL,
                      this.onTouchEnd,
                      this
                    )
                  );
                this.curIconCount >= 3 &&
                  ((this.startItemListIndex += 1), (this.curIconCount = 0)),
                  this.itemListArray[this.startItemListIndex].children[
                    this.curIconCount
                  ]
                    .getComponent(l.default)
                    .init(
                      s.default.gameData.gameInfo[this.iconIndex].gameIcon,
                      s.default.gameData.gameInfo[this.iconIndex].gameName,
                      s.default.gameData.gameInfo[this.iconIndex].gameId
                    );
                for (
                  var t = 0;
                  t <
                  this.itemListArray[this.startItemListIndex].children[
                    this.curIconCount
                  ].childrenCount;
                  t++
                )
                  this.itemListArray[this.startItemListIndex].children[
                    this.curIconCount
                  ].children[t].active = !0;
                (this.iconIndex += 1),
                  (this.curIconCount += 1),
                  this.createItemSprite();
              }),
              (e.prototype.onTouchStart = function () {
                this.unschedule(this.doAutoScroll), (this.isAutoScroll = !1);
              }),
              (e.prototype.onTouchMove = function (t) {
                var e = t.getDelta();
                (this.isMoveToTop = e.y > 0),
                  this.moveItem(
                    this.isMoveToTop ? this.dragSpeed : -this.dragSpeed
                  );
              }),
              (e.prototype.onTouchEnd = function () {
                this.scheduleOnce(this.doAutoScroll, 1.5);
              }),
              (e.prototype.doAutoScroll = function () {
                this.isAutoScroll = !0;
              }),
              (e.prototype.moveItem = function (t) {
                for (var e = 0; e < this.itemListArray.length; e++) {
                  var o = this.itemListArray[e].y;
                  this.itemListArray[e].setPosition(cc.v2(0, o + t));
                }
                if (this.isMoveToTop) {
                  var n = this.itemListArray[0];
                  if (n.y >= this.topChangePos) {
                    var i =
                      this.itemListArray[this.itemListArray.length - 1].y -
                      n.height;
                    n.setPosition(cc.v2(0, i));
                    var a = this.itemListArray.shift();
                    this.itemListArray.push(a);
                  }
                } else {
                  var r = this.itemListArray[this.itemListArray.length - 1];
                  r.y <= this.bottomChangePos &&
                    ((i = this.itemListArray[0].y + r.height),
                    r.setPosition(cc.v2(0, i)),
                    (a = this.itemListArray.pop()),
                    this.itemListArray.unshift(a));
                }
              }),
              c([p], e.prototype, "autoScroll_Speed", void 0),
              c([p], e.prototype, "dragSpeed", void 0),
              c([u], e)
            );
          })(cc.Component);
        (a.default = f), cc._RF.pop();
      },
      {},
    ],
    Shop_Box_Item: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "a06dbPjIENHb4ScyKfrrrsl", "Shop_Box_Item");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("Config"),
          d = i("EventManager"),
          u = i("UIManager"),
          p = i("StaticData"),
          f = cc._decorator,
          h = f.ccclass,
          y = f.property,
          m = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.boxName = null),
                (e.costType = null),
                (e.costNum = null),
                (e.icon = null),
                (e.effectNode = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.onLoad = function () {
                this.node.on(
                  cc.Node.EventType.TOUCH_START,
                  this.onEvent_TouchStart,
                  this
                ),
                  this.node.on(
                    cc.Node.EventType.TOUCH_END,
                    this.onEvent_TouchEnd,
                    this
                  );
              }),
              (e.prototype.onDisable = function () {
                this.node.off(
                  cc.Node.EventType.MOUSE_DOWN,
                  this.onEvent_TouchStart
                ),
                  this.node.off(
                    cc.Node.EventType.MOUSE_UP,
                    this.onEvent_TouchEnd
                  );
              }),
              (e.prototype.Show_Shop_Box_Item = function (t) {
                switch (
                  ((this.unitData = t),
                  (this.iconUrl = t.iconUrl),
                  (this.costNum.getComponent(cc.Label).string = t.costNum + ""),
                  "GEAR" == t.costType
                    ? cc.loader.loadRes(
                        "shop/ui_cl",
                        cc.SpriteFrame,
                        function (t, e) {
                          null == t &&
                            (this.costType.getComponent(cc.Sprite).spriteFrame =
                              e);
                        }.bind(this)
                      )
                    : cc.loader.loadRes(
                        "shop/icon_gems",
                        cc.SpriteFrame,
                        function (t, e) {
                          null == t &&
                            ((this.costType.getComponent(
                              cc.Sprite
                            ).spriteFrame = e),
                            (this.costType.x = -50));
                        }.bind(this)
                      ),
                  console.error(t.titleUrl),
                  t.titleUrl)
                ) {
                  case "title_ptbx":
                    this.boxName.getComponent(cc.Label).string = "Common chest";
                    break;
                  case "title_xybx":
                    this.boxName.getComponent(cc.Label).string = "Rare Chest";
                    break;
                  case "title_ssbx":
                    this.boxName.getComponent(cc.Label).string = "Epic Chest";
                }
                cc.loader.loadRes(
                  "shop/" + t.iconUrl,
                  cc.SpriteFrame,
                  function (t, e) {
                    null == t &&
                      (this.icon.getComponent(cc.Sprite).spriteFrame = e);
                  }.bind(this)
                ),
                  "\u53f2\u8bd7\u5b9d\u7bb1" == t.name
                    ? ((this.icon.y = 15),
                      cc.loader.loadRes(
                        "Effects/FX_UI_BOX_BG03",
                        cc.Prefab,
                        function (t, e) {
                          var o = cc.instantiate(e);
                          this.effectNode.addChild(o),
                            o.setSiblingIndex(this.icon.getSiblingIndex() - 1);
                        }.bind(this)
                      ))
                    : "\u666e\u901a\u5b9d\u7bb1" == t.name
                    ? cc.loader.loadRes(
                        "Effects/FX_UI_BOX_BG01",
                        cc.Prefab,
                        function (t, e) {
                          var o = cc.instantiate(e);
                          this.effectNode.addChild(o),
                            o.setSiblingIndex(this.icon.getSiblingIndex() - 1);
                        }.bind(this)
                      )
                    : "\u7a00\u6709\u5b9d\u7bb1" == t.name &&
                      cc.loader.loadRes(
                        "Effects/FX_UI_BOX_BG02",
                        cc.Prefab,
                        function (t, e) {
                          var o = cc.instantiate(e);
                          this.effectNode.addChild(o),
                            o.setSiblingIndex(this.icon.getSiblingIndex() - 1);
                        }.bind(this)
                      );
              }),
              (e.prototype.onEvent_TouchStart = function () {}),
              (e.prototype.onEvent_btn_BuyBox = function () {
                if ("DIAMOND" == this.unitData.costType)
                  if (
                    this.unitData.costNum <= s.default.RuntimeData.curDiamonds
                  ) {
                    s.default.AdjustDiamond(-this.unitData.costNum),
                      d.default.emit(l.default.PERSONAL_ASSETS_CHANGE);
                    var t = p.default.GetRandomChestReward(this.unitData.id);
                    u.default.ShowUI_RewardBox(t);
                  } else u.default.ShowUI_Notification("Not enough gems");
                else
                  this.unitData.costNum <= s.default.RuntimeData.curGears
                    ? (s.default.AdjustGear(-this.unitData.costNum),
                      d.default.emit(l.default.PERSONAL_ASSETS_CHANGE),
                      (t = p.default.GetRandomChestReward(this.unitData.id)),
                      u.default.ShowUI_RewardBox(t))
                    : u.default.ShowUI_Notification("Not enough gears");
              }),
              (e.prototype.onEvent_TouchEnd = function () {}),
              (e.prototype.onEvent_item_click = function () {
                (this.node.active = !1),
                  this.node.removeFromParent(),
                  this.node.destroy();
              }),
              c([y(cc.Node)], e.prototype, "boxName", void 0),
              c([y(cc.Node)], e.prototype, "costType", void 0),
              c([y(cc.Node)], e.prototype, "costNum", void 0),
              c([y(cc.Node)], e.prototype, "icon", void 0),
              c([y(cc.Node)], e.prototype, "effectNode", void 0),
              c([h], e)
            );
          })(cc.Component);
        (a.default = m), cc._RF.pop();
      },
      {},
    ],
    Shop_Resource_Item: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "7222emr9GJGZrZMFnXAaR8n", "Shop_Resource_Item");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = (i("GamePlatform"), i("Config")),
          d = i("EventManager"),
          u = i("UIManager"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.resourceNum = null),
                (e.costType = null),
                (e.costNum = null),
                (e.icon = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.onLoad = function () {
                this.node.on(
                  cc.Node.EventType.TOUCH_START,
                  this.onEvent_TouchStart,
                  this
                ),
                  this.node.on(
                    cc.Node.EventType.TOUCH_END,
                    this.onEvent_TouchEnd,
                    this
                  );
              }),
              (e.prototype.onDisable = function () {
                this.node.off(
                  cc.Node.EventType.MOUSE_DOWN,
                  this.onEvent_TouchStart
                ),
                  this.node.off(
                    cc.Node.EventType.MOUSE_UP,
                    this.onEvent_TouchEnd
                  );
              }),
              (e.prototype.Show_Shop_Resource_Item = function (t) {
                (this.getNum = t.resourceNum),
                  (this.getType = t.resourceType),
                  (this.unitData = t),
                  (this.iconUrl = t.iconUrl),
                  (this.costNum.getComponent(cc.Label).string = t.costNum + ""),
                  (this.resourceNum.getComponent(cc.Label).string =
                    t.resourceNum + ""),
                  "diamond" == t.costType
                    ? cc.loader.loadRes(
                        "shop/icon_gems",
                        cc.SpriteFrame,
                        function (t, e) {
                          null == t &&
                            ((this.costType.getComponent(
                              cc.Sprite
                            ).spriteFrame = e),
                            (this.costType.x = -40));
                        }.bind(this)
                      )
                    : cc.loader.loadRes(
                        "shop/icon_sp_ad",
                        cc.SpriteFrame,
                        function (t, e) {
                          null == t &&
                            ((this.costType.getComponent(
                              cc.Sprite
                            ).spriteFrame = e),
                            (this.costType.scaleX = 0.8),
                            (this.costType.scaleY = 0.8),
                            (this.costNum.y = 3));
                        }.bind(this)
                      ),
                  cc.loader.loadRes(
                    "shop/" + t.iconUrl,
                    cc.SpriteFrame,
                    function (t, e) {
                      null == t &&
                        (this.icon.getComponent(cc.Sprite).spriteFrame = e);
                    }.bind(this)
                  );
              }),
              (e.prototype.onEvent_TouchStart = function () {}),
              (e.prototype.onEvent_TouchEnd = function () {}),
              (e.prototype.onEvent_btn_BuyResource = function () {
                var t = this;
                if ("diamond" == this.unitData.costType)
                  if (
                    this.unitData.costNum <= s.default.RuntimeData.curDiamonds
                  ) {
                    var e = { id: "gear", value: this.getNum };
                    u.default.ShowUI_Rewarditem(e),
                      s.default.AdjustDiamond(-this.unitData.costNum),
                      s.default.SaveData(),
                      d.default.emit(l.default.PERSONAL_ASSETS_CHANGE);
                  } else u.default.ShowUI_Notification("Not enough gems");
                else
                  "gear" == this.unitData.costType
                    ? this.unitData.costNum <= s.default.RuntimeData.curGears
                      ? ((e = { id: "diamond", value: this.getNum }),
                        u.default.ShowUI_Rewarditem(e),
                        s.default.AdjustGear(-this.unitData.costNum),
                        d.default.emit(l.default.PERSONAL_ASSETS_CHANGE))
                      : u.default.ShowUI_Notification("Not enough gears")
                    : "video" == this.unitData.costType &&
                      YYGplatform.showReward(function () {
                        if ("gear" == t.getType) {
                          var e = { id: "gear", value: t.getNum };
                          u.default.ShowUI_Rewarditem(e),
                            d.default.emit(l.default.PERSONAL_ASSETS_CHANGE);
                        } else "diamond" == t.getType && ((e = { id: "diamond", value: t.getNum }), u.default.ShowUI_Rewarditem(e), d.default.emit(l.default.PERSONAL_ASSETS_CHANGE));
                      });
              }),
              (e.prototype.onEvent_item_click = function () {
                (this.node.active = !1),
                  this.node.removeFromParent(),
                  this.node.destroy();
              }),
              c([h(cc.Node)], e.prototype, "resourceNum", void 0),
              c([h(cc.Node)], e.prototype, "costType", void 0),
              c([h(cc.Node)], e.prototype, "costNum", void 0),
              c([h(cc.Node)], e.prototype, "icon", void 0),
              c([f], e)
            );
          })(cc.Component);
        (a.default = y), cc._RF.pop();
      },
      {},
    ],
    Small_Offroad_Wheel: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "97d76jE5IRCnrvCGjedBsn/", "Small_Offroad_Wheel");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("CarManager"),
          l = i("Unit_Base"),
          d = cc._decorator,
          u = d.ccclass,
          p =
            (d.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    (this.name = "small_offroad_wheel");
                }),
                (e.prototype.setSelfAnchor = function (t, e) {
                  var o = (t.x - this.node.x) / 2,
                    n = (t.y - this.node.y) / 2;
                  this.node.angle % 360 == 90
                    ? (e.anchor = cc.v2(n, -o - 35))
                    : this.node.angle % 360 == 180
                    ? (e.anchor = cc.v2(-o, -n - 35))
                    : this.node.angle % 360 == 270
                    ? (e.anchor = cc.v2(-n, o - 35))
                    : this.node.angle % 360 == 0 &&
                      (e.anchor = cc.v2(o, n - 35));
                }),
                (e.prototype.connectAround = function (t) {
                  if (this.node.position.sub(t.position).mag() <= 77) {
                    var e = this.node
                      .getChildByName("wheel_base")
                      .addComponent(cc.WeldJoint);
                    (e.connectedBody = t.getComponent(cc.RigidBody)),
                      (e.collideConnected = !1),
                      this.setSelfAnchor(t, e),
                      this.setOtherAnchor(t, e),
                      (e.referenceAngle = this.node.angle - t.angle),
                      e.apply();
                    var o = this.node
                        .getChildByName("wheel_down")
                        .getComponent(cc.RevoluteJoint),
                      n = this.node
                        .getChildByName("wheel_up")
                        .getComponent(cc.RevoluteJoint);
                    "EnemyCarNode" == t._parent.name
                      ? (o.motorSpeed = 2 * this.speed)
                      : s.default.instance.haveEnergy
                      ? (o.motorSpeed =
                          2 * -this.speed * s.default.instance.engineNum)
                      : (o.motorSpeed = 2 * -this.speed),
                      o.apply(),
                      "EnemyCarNode" == t._parent.name
                        ? (n.motorSpeed = 2 * this.speed)
                        : s.default.instance.haveEnergy
                        ? (n.motorSpeed =
                            2 * -this.speed * s.default.instance.engineNum)
                        : (n.motorSpeed = 2 * -this.speed),
                      n.apply();
                  }
                }),
                c([u], e)
              );
            })(l.default));
        (a.default = p), cc._RF.pop();
      },
      {},
    ],
    Small_Wooden_Wheel: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "c8840UmCIFM9a9qErwVPsTG", "Small_Wooden_Wheel");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("Unit_Base"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this),
                    (this.name = "small_wooden_wheel");
                }),
                (e.prototype.setSelfAnchor = function (t, e) {
                  var o = (t.x - this.node.x) / 2,
                    n = (t.y - this.node.y) / 2;
                  this.node.angle % 360 == 90
                    ? (e.anchor = cc.v2(n, -o - 35))
                    : this.node.angle % 360 == 180
                    ? (e.anchor = cc.v2(-o, -n - 35))
                    : this.node.angle % 360 == 270
                    ? (e.anchor = cc.v2(-n, o - 35))
                    : this.node.angle % 360 == 0 &&
                      (e.anchor = cc.v2(o, n - 35));
                }),
                (e.prototype.connectAround = function (t) {
                  if (this.node.position.sub(t.position).mag() <= 77) {
                    var e = this.node.x - t.x,
                      o = this.node.y - t.y;
                    if (
                      (Math.atan2(o, e) / Math.PI) * 180 ==
                      this.node.angle - 90
                    ) {
                      var n = this.node
                        .getChildByName("wheel_base")
                        .addComponent(cc.WeldJoint);
                      (n.connectedBody = t.getComponent(cc.RigidBody)),
                        (n.collideConnected = !1),
                        this.setSelfAnchor(t, n),
                        this.setOtherAnchor(t, n),
                        (n.referenceAngle = this.node.angle - t.angle),
                        n.apply();
                    } else this.notConnect();
                  }
                }),
                c([d], e)
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    SoundManager: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "571a2YsJzhBHorEAb5RScjM", "SoundManager");
        var i = t,
          a = o,
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var c = i("DataManager"),
          s = cc._decorator,
          l = s.ccclass,
          d =
            (s.property,
            (function () {
              function t() {}
              var e;
              return (
                (e = t),
                (t.InitSoundManager = function () {
                  var t = cc.sys.localStorage.getItem(
                    "SYSTEMDATA_SOUND_" + c.default.pakName
                  );
                  t =
                    null == t || "" == t
                      ? { isMusicEnable: 1, isEffEnable: 1, isShakeEnable: 1 }
                      : JSON.parse(t);
                  for (
                    var o = Object.keys(e.SoundData), n = Object.keys(t), i = 0;
                    i < o.length;
                    i++
                  )
                    for (var a = o[i], r = 0; r < n.length; r++)
                      if (n[r] == a) {
                        e.SoundData[a] = t[a];
                        break;
                      }
                }),
                (t.setMusicVolume = function (t) {
                  (t = e.checkNum(t)),
                    (e.SoundData.musicVolume = t),
                    (YYGGames.audioEngine.music.volume =
                      e.SoundData.musicVolume);
                }),
                (t.setEffectVolume = function (t) {
                  (t = e.checkNum(t)),
                    (e.SoundData.effVolume = t),
                    (YYGGames.audioEngine.audioEffect.volume =
                      e.SoundData.effVolume);
                }),
                (t.checkNum = function (t) {
                  return (
                    (t = parseFloat(t)),
                    isNaN(t) && (t = 0.5),
                    t < 0 ? (t = 0) : t > 1 && (t = 1),
                    t
                  );
                }),
                (t.playMusicByPath = function (t, o) {
                  void 0 === o && (o = !0),
                    e.SoundData.musicData[t]
                      ? e.playMusicByClip(e.SoundData.musicData[t], o)
                      : cc.loader.loadRes(
                          "Sounds/" + t,
                          cc.AudioClip,
                          function (n, i) {
                            null == n &&
                              ((e.SoundData.musicData[t] = i),
                              e.playMusicByClip(i, o));
                          }
                        );
                }),
                (t.playMusicByClip = function (t, o) {
                  if ((void 0 === o && (o = !0), t)) e.clip = t;
                  else {
                    if (!e.clip) return;
                    t = e.clip;
                  }
                  (this.isLoop = o),
                    o && cc.audioEngine.stopMusic(),
                    e.SoundData.isMusicEnable &&
                      YYGGames.audioEngine.playMusic(t, o);
                }),
                (t.stopMusic = function () {
                  YYGGames.audioEngine.stopMusic();
                }),
                (t.changeMusicEnable = function (t) {
                  null == t
                    ? (e.SoundData.isMusicEnable =
                        (e.SoundData.isMusicEnable + 1) % 2)
                    : (e.SoundData.isEffEnable = t),
                    e.SoundData.isMusicEnable
                      ? e.clip && e.playMusicByClip(e.clip, e.isLoop)
                      : YYGGames.audioEngine.stopMusic(),
                    e.changeEffectEnable(t),
                    e.save();
                }),
                (t.getMusicVolume = function () {
                  return e.SoundData.musicVolume;
                }),
                (t.playEffectByPath = function (t, o) {
                  void 0 === o && (o = !1),
                    e.SoundData.effData[t]
                      ? e.playEffectByClip(e.SoundData.effData[t], o)
                      : cc.loader.loadRes(
                          "sounds/" + t,
                          cc.AudioClip,
                          function (n, i) {
                            null == n &&
                              ((e.SoundData.effData[t] = i),
                              e.playEffectByClip(i, o));
                          }
                        );
                }),
                (t.playEffectByClip = function (t, o) {
                  void 0 === o && (o = !1),
                    e.SoundData.isEffEnable &&
                      YYGGames.audioEngine.playEffect(t, o);
                }),
                (t.changeEffectEnable = function (t) {
                  (e.SoundData.isEffEnable =
                    null == t ? (e.SoundData.isEffEnable + 1) % 2 : t),
                    e.SoundData.isEffEnable ||
                      YYGGames.audioEngine.audioEffect.stopAll();
                }),
                (t.changeShakeEnable = function () {
                  (e.SoundData.isShakeEnable =
                    (e.SoundData.isShakeEnable + 1) % 2),
                    e.save();
                }),
                (t.stopAllEffects = function () {
                  YYGGames.audioEngine.audioEffect.stopAll();
                }),
                (t.getEffectVolume = function () {
                  return e.SoundData.effVolume;
                }),
                (t.getMusicEnable = function () {
                  return e.SoundData.isMusicEnable;
                }),
                (t.getEffectEnable = function () {
                  return e.SoundData.isEffEnable;
                }),
                (t.getShakeEnable = function () {
                  return e.SoundData.isShakeEnable;
                }),
                (t.pauseSound = function () {
                  YYGGames.audioEngine.audioEffect.pause = !0;
                }),
                (t.resumeSound = function () {
                  YYGGames.audioEngine.audioEffect.resume();
                }),
                (t.save = function () {
                  cc.sys.localStorage.setItem(
                    "SYSTEMDATA_SOUND__" + c.default.pakName,
                    JSON.stringify(e.SoundData)
                  );
                }),
                (t.SoundData = {
                  isMusicEnable: 1,
                  isEffEnable: 1,
                  isShakeEnable: 1,
                  musicVolume: 0.5,
                  effVolume: 0.5,
                  effData: [],
                  musicData: [],
                  netWorkMusic: [],
                }),
                (e = r([l], t))
              );
            })());
        (a.default = d), cc._RF.pop();
      },
      {},
    ],
    Spell_Unit_item: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "85efbJdgzVDw7YNylrsP9+l", "Spell_Unit_item");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("UI_FightPrepare"),
          d = cc._decorator,
          u = d.ccclass,
          p = d.property,
          f = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.icon = null),
                (e.up = null),
                (e.down = null),
                (e.left = null),
                (e.right = null),
                (e.iconConnect = null),
                (e.dirType = 0),
                (e.posIntX = -1),
                (e.posIntY = -1),
                (e.isMoved = !0),
                (e.connectToDriver = !1),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.Show_Spell_Unit_item = function (t) {
                this.unitData = t;
                var e = this;
                cc.loader.loadRes(
                  "Unit/" + this.unitData.iconUrl,
                  cc.SpriteFrame,
                  function (t, o) {
                    (e.node
                      .getChildByName("icon")
                      .getComponent(cc.Sprite).spriteFrame = o),
                      (e.node.getChildByName("icon").scale = 74 / 90);
                  }
                );
              }),
              (e.prototype.onLoad = function () {
                (this.node.opacity = 0),
                  this.node
                    .getChildByName("icon")
                    .on(
                      cc.Node.EventType.TOUCH_START,
                      this.onEvent_TouchStart,
                      this
                    ),
                  this.node
                    .getChildByName("icon")
                    .on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.onEvent_TouchMove,
                      this
                    ),
                  this.node
                    .getChildByName("icon")
                    .on(
                      cc.Node.EventType.TOUCH_END,
                      this.onEvent_TouchEnd,
                      this
                    ),
                  this.node
                    .getChildByName("icon")
                    .on(
                      cc.Node.EventType.TOUCH_CANCEL,
                      this.onEvent_TouchEnd,
                      this
                    );
              }),
              (e.prototype.onDisable = function () {
                this.node
                  .getChildByName("icon")
                  .off(cc.Node.EventType.TOUCH_START, this.onEvent_TouchStart),
                  this.node
                    .getChildByName("icon")
                    .off(cc.Node.EventType.TOUCH_MOVE, this.onEvent_TouchMove),
                  this.node
                    .getChildByName("icon")
                    .off(cc.Node.EventType.TOUCH_END, this.onEvent_TouchEnd),
                  this.node
                    .getChildByName("icon")
                    .off(cc.Node.EventType.TOUCH_CANCEL, this.onEvent_TouchEnd);
              }),
              (e.prototype.onEvent_TouchStart = function (t) {
                (this.touchStartPos = cc.v2(this.node.x, this.node.y)),
                  (this.isMoved = !1);
              }),
              (e.prototype.onEvent_TouchMove = function (t) {
                var e = t.touch,
                  o = e._point.sub(e._startPoint);
                (this.node.x = this.touchStartPos.x + o.x),
                  (this.node.y = this.touchStartPos.y + o.y),
                  0 == this.isMoved &&
                    o.mag() > 10 &&
                    ((this.isMoved = !0),
                    this.showAround(!0),
                    this.showNotConnectIcon(!1),
                    this.node.setSiblingIndex(999999));
              }),
              (e.prototype.onEvent_TouchEnd = function (t) {
                if (((this.node.name = "unit_item_spelled"), 1 != this.isMoved))
                  if (
                    "car_driver" == this.unitData.prefabUrl ||
                    "Frames/wooden_box" == this.unitData.prefabUrl ||
                    "Frames/iron_box" == this.unitData.prefabUrl ||
                    "Wheels/wooden_wheel" == this.unitData.prefabUrl ||
                    "Frames/engine" == this.unitData.prefabUrl ||
                    "Frames/tnt_box" == this.unitData.prefabUrl ||
                    "Technology/fuel" == this.unitData.prefabUrl ||
                    "Wheels/offroad_wheel" == this.unitData.prefabUrl
                  );
                  else {
                    this.dirType++,
                      this.dirType > 3 && (this.dirType = 0),
                      (this.icon.angle += 90);
                    for (
                      var e = 0;
                      e <
                      s.default.RuntimeData.carModel[
                        s.default.RuntimeData.curCarModelIndex
                      ].length;
                      e++
                    )
                      this.node ==
                        s.default.RuntimeData.carModel[
                          s.default.RuntimeData.curCarModelIndex
                        ][e].showUnit &&
                        (s.default.RuntimeData.carModel[
                          s.default.RuntimeData.curCarModelIndex
                        ][e].angle = this.icon.angle);
                  }
                l.default.instance.checkCell(this);
              }),
              (e.prototype.showAround = function (t) {
                if (
                  ((this.left.active = t),
                  (this.up.active = t),
                  (this.down.active = t),
                  (this.right.active = t),
                  null != this.unitData && 1 == t)
                )
                  switch (this.dirType) {
                    case 0:
                      (this.right.active = this.unitData.connectDir.right),
                        (this.left.active = this.unitData.connectDir.left),
                        (this.up.active = this.unitData.connectDir.top),
                        (this.down.active = this.unitData.connectDir.bottom);
                      break;
                    case 1:
                      (this.right.active = this.unitData.connectDir.bottom),
                        (this.left.active = this.unitData.connectDir.top),
                        (this.up.active = this.unitData.connectDir.right),
                        (this.down.active = this.unitData.connectDir.left);
                      break;
                    case 2:
                      (this.right.active = this.unitData.connectDir.left),
                        (this.left.active = this.unitData.connectDir.right),
                        (this.up.active = this.unitData.connectDir.bottom),
                        (this.down.active = this.unitData.connectDir.top);
                      break;
                    case 3:
                      (this.right.active = this.unitData.connectDir.top),
                        (this.left.active = this.unitData.connectDir.bottom),
                        (this.up.active = this.unitData.connectDir.left),
                        (this.down.active = this.unitData.connectDir.right);
                  }
              }),
              (e.prototype.showNotConnectIcon = function (t) {
                this.iconConnect.active = t;
              }),
              (e.prototype.doDeath = function () {
                (this.node.active = !1),
                  this.node.destroy(),
                  l.default.instance.removeCellAtPos(
                    this.posIntX,
                    this.posIntY
                  ),
                  l.default.instance.judgeConnectAble(),
                  l.default.instance.removeUnitFromList(this);
              }),
              c([p(cc.Node)], e.prototype, "icon", void 0),
              c([p(cc.Node)], e.prototype, "up", void 0),
              c([p(cc.Node)], e.prototype, "down", void 0),
              c([p(cc.Node)], e.prototype, "left", void 0),
              c([p(cc.Node)], e.prototype, "right", void 0),
              c([p(cc.Node)], e.prototype, "iconConnect", void 0),
              c([u], e)
            );
          })(cc.Component);
        (a.default = f), cc._RF.pop();
      },
      {},
    ],
    Spike: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "90630ihCAhPmKlclg8MWwnE", "Spike");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("UIManager"),
          l = i("GameUtil"),
          d = i("Unit_Base"),
          u = cc._decorator,
          p = u.ccclass,
          f =
            (u.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e.count = 250),
                  (e.indexX = 30),
                  (e.connect = !1),
                  (e.contactCount = 0),
                  (e.baseDamage = 50),
                  (e.beHitCount = 0),
                  e
                );
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "spike");
                }),
                (e.prototype.setSelfAnchor = function (t, e) {
                  var o = (t.x - this.node.x) / 2,
                    n = (t.y - this.node.y) / 2;
                  this.node.angle % 360 == 90
                    ? (e.anchor = cc.v2(n + 30, -o))
                    : this.node.angle % 360 == 180
                    ? (e.anchor = cc.v2(30 - o, -n))
                    : this.node.angle % 360 == 270
                    ? (e.anchor = cc.v2(30 - n, o))
                    : this.node.angle % 360 == 0 &&
                      (e.anchor = cc.v2(o + 30, n));
                }),
                (e.prototype.setSpecialSelfAnchor = function (t, e) {
                  var o = (t.x - e.x) / 2,
                    n = (t.y - e.y) / 2;
                  this.node.angle % 360 == 90
                    ? (e.anchor = cc.v2(n - 45, 23 - o))
                    : this.node.angle % 360 == 180
                    ? (e.anchor = cc.v2(-o - 20, -n))
                    : this.node.angle % 360 == 270
                    ? (e.anchor = cc.v2(-n - 50, o - 23))
                    : this.node.angle % 360 == 0 &&
                      (e.anchor = cc.v2(o - 500, n));
                }),
                (e.prototype.setSpecialOtherAnchor = function (t, e) {
                  var o = (t.x - e.x) / 2,
                    n = (t.y - e.y) / 2;
                  this.node.angle % 360 == 90
                    ? (e.connectedAnchor = cc.v2(n + 15, -o))
                    : this.node.angle % 360 == 180
                    ? (e.connectedAnchor = cc.v2(15 - o, -n))
                    : this.node.angle % 360 == 270
                    ? (e.connectedAnchor = cc.v2(15 - n, o))
                    : this.node.angle % 360 == 0 &&
                      (e.connectedAnchor = cc.v2(o - 500, n));
                }),
                (e.prototype.connectAround = function (t) {
                  var e = this;
                  if (null == this.connectBody) {
                    this.connect = !0;
                    var o = this.node
                      .getChildByName("spike_base")
                      .addComponent(cc.WeldJoint);
                    (o.connectedBody = t.getComponent(cc.RigidBody)),
                      (o.collideConnected = !0),
                      this.setSelfAnchor(t, o),
                      this.setOtherAnchor(t, o),
                      (o.referenceAngle = this.node.angle - t.angle),
                      o.apply();
                    var n = this.node
                      .getChildByName("spike_mao")
                      .addComponent(cc.WeldJoint);
                    (n.connectedBody = o.getComponent(cc.RigidBody)),
                      (n.getComponent(cc.RigidBody).enabledContactListener =
                        !0);
                    var i = 0;
                    (n.getComponent(cc.RigidBody).onBeginContact = function (
                      t,
                      o,
                      n
                    ) {
                      e.contactCount++,
                        (i =
                          1 == e.contactCount
                            ? e.damage * e.baseDamage
                            : e.baseDamage),
                        "unit" == n.node.group &&
                          (n.node.name.indexOf("wheel") >= 0 ||
                          n.node.name.indexOf("spring") >= 0 ||
                          n.node.name.indexOf("spike") >= 0 ||
                          n.node.name.indexOf("saw") >= 0
                            ? (e.addEffect(n),
                              n.node.parent.getComponent(d.default).be_Hit(i))
                            : (e.addEffect(n),
                              n.node.getComponent(d.default).be_Hit(i)));
                    }),
                      this.setSpecialSelfAnchor(o, n),
                      this.setSpecialOtherAnchor(o, n),
                      n.apply();
                  }
                }),
                (e.prototype.addEffect = function (t) {
                  if ((this.beHitCount++, 4 == this.beHitCount)) {
                    this.beHitCount = 0;
                    var e = l.default.GetNodeWorldPositionForUINode(t.node).x,
                      o = l.default.GetNodeWorldPositionForUINode(t.node).y;
                    cc.loader.loadRes(
                      "Effects/FX_Collision_sparks",
                      cc.Prefab,
                      function (t, n) {
                        if (null == t) {
                          var i = cc.instantiate(n);
                          i.setParent(s.default.fightNode()),
                            (i.x = e),
                            (i.y = o),
                            (i.active = !0);
                        }
                      }.bind(this)
                    );
                  }
                }),
                (e.prototype.update = function (t) {
                  if (1 == this.alive && 1 == this.isConnect) {
                    (this.count -= 1e3 * t),
                      this.count <= 0 &&
                        void 0 !=
                          this.node
                            .getChildByName("spike_mao")
                            .getComponent(cc.WeldJoint) &&
                        ((this.count = 250),
                        30 == this.indexX
                          ? ((this.indexX = 45),
                            (this.node
                              .getChildByName("spike_mao")
                              .getComponent(cc.WeldJoint).connectedAnchor =
                              cc.v2(this.indexX, 0)),
                            this.node
                              .getChildByName("spike_mao")
                              .getComponent(cc.WeldJoint)
                              .apply())
                          : ((this.indexX = 30),
                            (this.node
                              .getChildByName("spike_mao")
                              .getComponent(cc.WeldJoint).connectedAnchor =
                              cc.v2(this.indexX, 0)),
                            this.node
                              .getChildByName("spike_mao")
                              .getComponent(cc.WeldJoint)
                              .apply()));
                    for (var e = 0; e < this.node.children.length; e++)
                      this.node.children[e]
                        .getComponent(cc.RigidBody)
                        .syncPosition(!0);
                  }
                }),
                c([p], e)
              );
            })(d.default));
        (a.default = f), cc._RF.pop();
      },
      {},
    ],
    Spin: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "2ee0dS3WrVORY5cApmh7on1", "Spin");
        var i = o,
          a = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          l =
            (c.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                a(e, t),
                (e.prototype.onEnable = function () {
                  this.Action_Spin();
                }),
                (e.prototype.onDisable = function () {
                  cc.Tween.stopAllByTarget(this.node);
                }),
                (e.prototype.Action_Spin = function () {
                  cc.tween(this.node)
                    .by(0.7, { angle: -340 })
                    .by(0.3, { angle: -25 })
                    .call(this.Action_Spin.bind(this))
                    .start();
                }),
                r([s], e)
              );
            })(cc.Component));
        (i.default = l), cc._RF.pop();
      },
      {},
    ],
    Spring: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "5b6aeVIP4JLsry7YA3VqSE5", "Spring");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("Unit_Base"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "spring");
                }),
                (e.prototype.setSelfAnchor = function (t, e) {
                  var o = (t.x - this.node.x) / 2,
                    n = (t.y - this.node.y) / 2;
                  this.node.angle % 360 == 90
                    ? (e.anchor = cc.v2(n + 30, -o))
                    : this.node.angle % 360 == 180
                    ? (e.anchor = cc.v2(30 - o, -n))
                    : this.node.angle % 360 == 270
                    ? (e.anchor = cc.v2(30 - n, o))
                    : this.node.angle % 360 == 0 &&
                      (e.anchor = cc.v2(o + 30, n));
                }),
                (e.prototype.connectAround = function (t) {
                  if (this.node.position.sub(t.position).mag() <= 77) {
                    var e = this.node
                      .getChildByName("spring_base")
                      .addComponent(cc.WeldJoint);
                    (e.connectedBody = t.getComponent(cc.RigidBody)),
                      (e.collideConnected = !1),
                      this.setSelfAnchor(t, e),
                      this.setOtherAnchor(t, e),
                      (e.referenceAngle = this.node.angle - t.angle),
                      e.apply();
                  }
                }),
                c([d], e)
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    Starter: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "7755fwSbC1DMo0UqLE7+dlA", "Starter");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("UIManager"),
          l = i("DataManager"),
          d = i("SoundManager"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.initScene = ""), e;
            }
            return (
              r(e, t),
              (e.prototype.onLoad = function () {
                var t = this;
                YYGplatform.init(function () {
                  (YYGGames.audioEngine.music.volume = 25),
                    l.default.InitRuntimeData(function () {}),
                    d.default.InitSoundManager(),
                    s.default.ShowUI_Loading(
                      ["Prefabs/UI/UI_Title"],
                      t.initScene,
                      t.onEvent_callback_loadingFinished.bind(t)
                    ),
                    (cc.director.getPhysicsManager().enabled = !0),
                    (cc.director.getPhysicsManager().gravity = cc.v2(0, -50));
                });
              }),
              (e.prototype.onDestroy = function () {
                cc.systemEvent.off(
                  cc.SystemEvent.EventType.DEVICEMOTION,
                  this.onDeviceMotionEvent,
                  this
                );
              }),
              (e.prototype.onDeviceMotionEvent = function (t) {
                cc.log(t.acc.x + "   " + t.acc.y);
              }),
              (e.prototype.onEvent_callback_loadingFinished = function () {
                null != this.initScene &&
                  this.initScene.length > 0 &&
                  (l.default.RuntimeData.firstGame
                    ? s.default.ShowUI_Cartoon()
                    : s.default.ShowUI_Title());
              }),
              c([f(cc.String)], e.prototype, "initScene", void 0),
              c([p], e)
            );
          })(cc.Component);
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    StaticData: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "b1ea1kHz65AH7ZtovRPr2xD", "StaticData");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("EnumDefiner"),
          l = i("DataManager"),
          d = i("GameUtil"),
          u = cc._decorator,
          p = u.ccclass,
          f =
            (u.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              var o;
              return (
                r(e, t),
                (o = e),
                (e.initStaticData = function (t) {
                  var e = 4,
                    n = function () {
                      0 == --e && null != t && t();
                    };
                  cc.loader.loadRes("data/UnitLevelData", function (t, e) {
                    var i = e.json.Sheet1;
                    cc.loader.loadRes("data/UnitData", function (t, e) {
                      for (var a = [], r = 0; r < e.json.Sheet1.length; r++) {
                        var c = e.json.Sheet1[r],
                          l = s.ENUM_UnitType.ENUM_DRIVER;
                        switch (c.group) {
                          case "FRAME":
                            l = s.ENUM_UnitType.ENUM_FRAME;
                            break;
                          case "WHEEL":
                            l = s.ENUM_UnitType.ENUM_WHEEL;
                            break;
                          case "MELEE":
                            l = s.ENUM_UnitType.ENUM_MELEEWEAPON;
                            break;
                          case "RANGE":
                            l = s.ENUM_UnitType.ENUM_RANGEWEAPON;
                            break;
                          case "TECH":
                            l = s.ENUM_UnitType.ENUM_TECH;
                        }
                        var d = s.ENUM_UNIT_QUALITY.E_NONE;
                        switch (c.quality) {
                          case "BLUE":
                            d = s.ENUM_UNIT_QUALITY.E_BLUE;
                            break;
                          case "PURPLE":
                            d = s.ENUM_UNIT_QUALITY.E_PURPLE;
                            break;
                          case "ORANGE":
                            d = s.ENUM_UNIT_QUALITY.E_ORANGE;
                        }
                        a.push({
                          id: c.unitId,
                          name: c.name,
                          description: c.description,
                          energy: Number.parseInt(c.energy),
                          weight: Number.parseFloat(c.weight),
                          group: l,
                          iconUrl: c.iconUrl,
                          prefabUrl: c.prefabUrl,
                          connectDir: {
                            right: "TRUE" == c.c_r,
                            left: "TRUE" == c.c_l,
                            top: "TRUE" == c.c_t,
                            bottom: "TRUE" == c.c_b,
                          },
                          quality: d,
                          isLocked: "TRUE" == c.isLocked,
                        });
                      }
                      var u = function (t) {
                        for (var e = 0; e < a.length; e++)
                          if (a[e].id == t) return a[e];
                        return null;
                      };
                      for (o.unitData = [], r = 0; r < i.length; r++) {
                        var p =
                            null != (c = i[r]).param01
                              ? Number.parseFloat(c.param01)
                              : null,
                          f =
                            null != c.param02
                              ? Number.parseFloat(c.param02)
                              : null,
                          h = u(c.unitId);
                        o.unitData.push({
                          id: c.unitId,
                          level: Number.parseInt(c.level),
                          maxCount: Number.parseInt(c.maxCount),
                          hp: Number.parseInt(c.hp),
                          param01: p,
                          param02: f,
                          upgrade_card: Number.parseInt(c.upd_card),
                          upgrade_gear: Number.parseInt(c.upd_gear),
                          name: h.name,
                          description: h.description,
                          energy: h.energy,
                          weight: h.weight,
                          group: h.group,
                          iconUrl: h.iconUrl,
                          prefabUrl: h.prefabUrl,
                          connectDir: h.connectDir,
                          quality: h.quality,
                          isLocked: h.isLocked,
                        });
                      }
                      n();
                    });
                  }),
                    cc.loader.loadRes("data/EnemyData", function (t, e) {
                      (o.enemyList = e.json.enemyList), n();
                    }),
                    cc.loader.loadRes("data/LevelData", function (t, e) {
                      var i = e.json.Sheet1,
                        a = function (t) {
                          switch (t) {
                            case "1":
                              return s.ENUM_StarCondition.E_WinCount;
                            case "2":
                              return s.ENUM_StarCondition.E_WinCount_LeastUnit;
                            case "3":
                              return s.ENUM_StarCondition.E_WinCount_MostUnit;
                            case "4":
                              return s.ENUM_StarCondition.E_LeastUnit;
                            case "5":
                              return s.ENUM_StarCondition.E_MostUnit;
                            case "6":
                              return s.ENUM_StarCondition
                                .E_WinCount_WithoutUnit;
                            case "7":
                              return s.ENUM_StarCondition.E_WinCount_LessTime;
                            case "8":
                              return s.ENUM_StarCondition.E_WinCount_MoreTime;
                            case "9":
                              return s.ENUM_StarCondition
                                .E_WinCount_LessUnitPercent;
                            case "10":
                              return s.ENUM_StarCondition
                                .E_WinCount_MoreUnitPercent;
                            case "11":
                              return s.ENUM_StarCondition
                                .E_WinCount_LeastUnitGroup;
                            case "12":
                              return s.ENUM_StarCondition
                                .E_WinCount_MostUnitGroup;
                            case "13":
                              return s.ENUM_StarCondition.E_LeastUnitGroup;
                            case "14":
                              return s.ENUM_StarCondition.E_MostUnitGroup;
                            case "15":
                              return s.ENUM_StarCondition
                                .E_WinCount_WithoutUnitGroup;
                          }
                          return s.ENUM_StarCondition.E_None;
                        },
                        r = function (t, e, o, n) {
                          switch (t) {
                            case s.ENUM_StarCondition.E_WinCount:
                              return { param1: Number.parseInt(e) };
                            case s.ENUM_StarCondition.E_WinCount_LeastUnit:
                            case s.ENUM_StarCondition.E_WinCount_MostUnit:
                              return {
                                param1: Number.parseInt(e),
                                param2: o,
                                param3: Number.parseInt(n),
                              };
                            case s.ENUM_StarCondition.E_LeastUnit:
                            case s.ENUM_StarCondition.E_MostUnit:
                              return { param1: e, param2: Number.parseInt(o) };
                            case s.ENUM_StarCondition.E_WinCount_WithoutUnit:
                              return { param1: Number.parseInt(e), param2: o };
                            case s.ENUM_StarCondition.E_WinCount_LessTime:
                            case s.ENUM_StarCondition.E_WinCount_MoreTime:
                            case s.ENUM_StarCondition
                              .E_WinCount_LessUnitPercent:
                            case s.ENUM_StarCondition
                              .E_WinCount_MoreUnitPercent:
                              return {
                                param1: Number.parseInt(e),
                                param2: Number.parseInt(o),
                              };
                            case s.ENUM_StarCondition.E_WinCount_LeastUnitGroup:
                            case s.ENUM_StarCondition.E_WinCount_MostUnitGroup:
                              return {
                                param1: Number.parseInt(e),
                                param2: o,
                                param3: Number.parseInt(n),
                              };
                            case s.ENUM_StarCondition.E_LeastUnitGroup:
                            case s.ENUM_StarCondition.E_MostUnitGroup:
                              return { param1: e, param2: Number.parseInt(o) };
                            case s.ENUM_StarCondition
                              .E_WinCount_WithoutUnitGroup:
                              return { param1: Number.parseInt(e), param2: o };
                          }
                          return null;
                        };
                      o.levelList = [];
                      for (var c = 0; c < i.length; c++) {
                        var l = i[c],
                          d = l.levelId,
                          u = l.name,
                          p = void 0 == l.description ? "" : l.description,
                          f = "TRUE" == l.initLock,
                          h = a(l.star01Type),
                          y = r(h, l.star01P1, l.star01P2, l.star01P3),
                          m = a(l.star02Type),
                          _ = r(m, l.star02P1, l.star02P2, l.star02P3),
                          g = a(l.star03Type),
                          v = r(g, l.star03P1, l.star03P2, l.star03P3),
                          b = l.enemyList.split(":");
                        o.levelList.push({
                          id: d,
                          name: u,
                          descrpition: p,
                          initLock: f,
                          heartCount: 3,
                          starConditionList: [
                            {
                              type: h,
                              param1: y.param1,
                              param2: y.param2,
                              param3: y.param3,
                            },
                            {
                              type: m,
                              param1: _.param1,
                              param2: _.param2,
                              param3: _.param3,
                            },
                            {
                              type: g,
                              param1: v.param1,
                              param2: v.param2,
                              param3: v.param3,
                            },
                          ],
                          enemyList: b,
                        });
                      }
                      n();
                    }),
                    cc.loader.loadRes("data/ChestData", function (t, e) {
                      var i = e.json.Sheet1;
                      o.shopBoxData = [];
                      for (
                        var a = function (t) {
                            var e = (t = t.replace("\uff1a", ":")).split(":");
                            return {
                              min: Number.parseInt(e[0]),
                              max: Number.parseInt(e[1]),
                            };
                          },
                          r = 0;
                        r < i.length;
                        r++
                      ) {
                        var c = i[r];
                        c.id,
                          o.shopBoxData.push({
                            id: c.id,
                            name: c.name,
                            titleUrl: c.titleUrl,
                            iconUrl: c.iconUrl,
                            costType: c.costType,
                            costNum: c.costNum,
                            diamondRange: a(c.diamondRange),
                            gearRange: a(c.gearRange),
                            rare01Range: a(c.rare01Range),
                            rare01CardRange: a(c.rare01CardRange),
                            rare02Range: a(c.rare01Range),
                            rare02CardRange: a(c.rare01CardRange),
                            rare03Range: a(c.rare01Range),
                            rare03CardRange: a(c.rare01CardRange),
                          });
                      }
                      n();
                    });
                }),
                (e.getStarConditionDescription = function (t, e) {
                  switch (t.type) {
                    case s.ENUM_StarCondition.E_None:
                      return "Undefined";
                    case s.ENUM_StarCondition.E_WinCount:
                      for (var n = 0, i = 0; i < e.length; i++)
                        e[i].isWin && n++;
                      return (
                        n >= t.param1 && (n = t.param1),
                        "Win " + n + "/" + t.param1 + " battles"
                      );
                    case s.ENUM_StarCondition.E_WinCount_LeastUnit:
                      n = 0;
                      var a = t.param2,
                        r = t.param3;
                      for (i = 0; i < e.length; i++) {
                        var c = 0;
                        if (e[i].isWin)
                          for (var d = 0; d < e[i].unitList.length; d++)
                            e[i].unitList[d].id == a && c++;
                        c >= r && n++;
                      }
                      var u = l.default.GetUnitLevelDataById(a).level,
                        p = o.GetUnitDataByIDAndLv(a, u);
                      return (
                        n >= t.param1 && (n = t.param1),
                        "Use at least " +
                          r +
                          " " +
                          p.name +
                          " to win " +
                          n +
                          "/" +
                          t.param1 +
                          " battles"
                      );
                    case s.ENUM_StarCondition.E_WinCount_LeastUnitGroup:
                      n = 0;
                      var f = t.param2;
                      for (r = t.param3, i = 0; i < e.length; i++) {
                        if (((c = 0), e[i].isWin))
                          for (d = 0; d < e[i].unitList.length; d++)
                            e[i].unitList[d].group == f && c++;
                        c >= r && n++;
                      }
                      n >= t.param1 && (n = t.param1);
                      var h = void 0;
                      switch (f) {
                        case "FRAME":
                          h = "Frame";
                          break;
                        case "WHEEL":
                          h = "Wheel";
                          break;
                        case "MELEE":
                          h = "Melee";
                          break;
                        case "RANGE":
                          h = "Remote";
                          break;
                        case "TECH":
                          h = "Special";
                      }
                      return (
                        "Use at least " +
                        r +
                        " " +
                        h +
                        " to win " +
                        n +
                        "/" +
                        t.param1 +
                        " battles"
                      );
                    case s.ENUM_StarCondition.E_WinCount_MostUnit:
                      for (
                        n = 0, a = t.param2, r = t.param3, i = 0;
                        i < e.length;
                        i++
                      ) {
                        if (((c = 0), e[i].isWin))
                          for (d = 0; d < e[i].unitList.length; d++)
                            e[i].unitList[d].id == a && c++;
                        c >= r && n++;
                      }
                      return (
                        (u = l.default.GetUnitLevelDataById(a).level),
                        (p = o.GetUnitDataByIDAndLv(a, u)),
                        n >= t.param1 && (n = t.param1),
                        "Use up to " +
                          r +
                          " " +
                          p.name +
                          " to win " +
                          n +
                          "/" +
                          t.param1 +
                          " battles"
                      );
                    case s.ENUM_StarCondition.E_WinCount_MostUnitGroup:
                      for (
                        n = 0, f = t.param2, r = t.param3, i = 0;
                        i < e.length;
                        i++
                      ) {
                        if (((c = 0), e[i].isWin))
                          for (d = 0; d < e[i].unitList.length; d++)
                            e[i].unitList[d].id == f && c++;
                        c >= r && n++;
                      }
                      switch (
                        (n >= t.param1 && (n = t.param1), (h = void 0), f)
                      ) {
                        case "FRAME":
                          h = "Frame";
                          break;
                        case "WHEEL":
                          h = "Wheel";
                          break;
                        case "MELEE":
                          h = "Melee";
                          break;
                        case "RANGE":
                          h = "Remote";
                          break;
                        case "TECH":
                          h = "Special";
                      }
                      return (
                        "Use up to " +
                        r +
                        h +
                        " to win " +
                        n +
                        "/" +
                        t.param1 +
                        " battles"
                      );
                    case s.ENUM_StarCondition.E_LeastUnit:
                      for (a = t.param1, r = t.param2, i = 0; i < e.length; i++)
                        for (c = 0, d = 0; d < e[i].unitList.length; d++)
                          e[i].unitList[d].id == a && c++;
                      return (
                        (u = l.default.GetUnitLevelDataById(a).level),
                        "Use at least " +
                          r +
                          " " +
                          (p = o.GetUnitDataByIDAndLv(a, u)).name
                      );
                    case s.ENUM_StarCondition.E_LeastUnitGroup:
                      for (f = t.param1, r = t.param2, i = 0; i < e.length; i++)
                        for (c = 0, d = 0; d < e[i].unitList.length; d++)
                          e[i].unitList[d].id == f && c++;
                      switch (((h = void 0), f)) {
                        case "FRAME":
                          h = "Frame";
                          break;
                        case "WHEEL":
                          h = "Wheel";
                          break;
                        case "MELEE":
                          h = "Melee";
                          break;
                        case "RANGE":
                          h = "Remote";
                          break;
                        case "TECH":
                          h = "Special";
                      }
                      return "Use at least " + r + " " + h;
                    case s.ENUM_StarCondition.E_MostUnit:
                      for (a = t.param1, r = t.param2, i = 0; i < e.length; i++)
                        for (c = 0, d = 0; d < e[i].unitList.length; d++)
                          e[i].unitList[d].id == a && c++;
                      return (
                        (u = l.default.GetUnitLevelDataById(a).level),
                        "Use up to " +
                          r +
                          " " +
                          (p = o.GetUnitDataByIDAndLv(a, u)).name
                      );
                    case s.ENUM_StarCondition.E_MostUnitGroup:
                      for (f = t.param1, r = t.param2, i = 0; i < e.length; i++)
                        for (c = 0, d = 0; d < e[i].unitList.length; d++)
                          e[i].unitList[d].id == f && c++;
                      switch (((h = void 0), f)) {
                        case "FRAME":
                          h = "Frame";
                          break;
                        case "WHEEL":
                          h = "Wheel";
                          break;
                        case "MELEE":
                          h = "Melee";
                          break;
                        case "RANGE":
                          h = "Remote";
                          break;
                        case "TECH":
                          h = "Special";
                      }
                      return "Use up to " + r + " " + h;
                    case s.ENUM_StarCondition.E_WinCount_WithoutUnit:
                      for (n = 0, a = t.param2, i = 0; i < e.length; i++) {
                        var y = !1;
                        if (e[i].isWin) {
                          for (d = 0; d < e[i].unitList.length; d++)
                            e[i].unitList[d].id == a && (y = !0);
                          y || n++;
                        }
                      }
                      return (
                        (u = l.default.GetUnitLevelDataById(a).level),
                        (p = o.GetUnitDataByIDAndLv(a, u)),
                        n >= t.param1 && (n = t.param1),
                        "Without " +
                          p.name +
                          " win " +
                          n +
                          "/" +
                          t.param1 +
                          " battles"
                      );
                    case s.ENUM_StarCondition.E_WinCount_WithoutUnitGroup:
                      for (n = 0, f = t.param2, i = 0; i < e.length; i++)
                        if (((y = !1), e[i].isWin)) {
                          for (d = 0; d < e[i].unitList.length; d++)
                            e[i].unitList[d].group == f && (y = !0);
                          y || n++;
                        }
                      switch (((h = void 0), f)) {
                        case "FRAME":
                          h = "Frame";
                          break;
                        case "WHEEL":
                          h = "Wheel";
                          break;
                        case "MELEE":
                          h = "Melee";
                          break;
                        case "RANGE":
                          h = "Remote";
                          break;
                        case "TECH":
                          h = "Special";
                      }
                      return (
                        n >= t.param1 && (n = t.param1),
                        "Without " +
                          h +
                          " win " +
                          n +
                          "/" +
                          t.param1 +
                          " battles"
                      );
                    case s.ENUM_StarCondition.E_WinCount_LessTime:
                      for (n = 0, i = 0; i < e.length; i++)
                        e[i].isWin && e[i].finishDuration <= t.param2 && n++;
                      return (
                        n >= t.param1 && (n = t.param1),
                        "Use less than " +
                          t.param2 / 1e3 +
                          "s, win " +
                          n +
                          "/" +
                          t.param1 +
                          " battles"
                      );
                    case s.ENUM_StarCondition.E_WinCount_MoreTime:
                      for (n = 0, i = 0; i < e.length; i++)
                        e[i].isWin && e[i].finishDuration >= t.param2 && n++;
                      return (
                        n >= t.param1 && (n = t.param1),
                        "Use more than " +
                          t.param2 / 1e3 +
                          "s, win " +
                          n +
                          "/" +
                          t.param1 +
                          " battles"
                      );
                    case s.ENUM_StarCondition.E_WinCount_LessUnitPercent:
                      for (n = 0, i = 0; i < e.length; i++)
                        e[i].isWin &&
                          (e[i].finishUnitList / e[i].unitList) * 100 <
                            t.param2 &&
                          n++;
                      return (
                        n >= t.param1 && (n = t.param1),
                        "Remaining blocks less than " +
                          t.param2 +
                          "%\uff0cwin " +
                          n +
                          "/" +
                          t.param1 +
                          " battles"
                      );
                    case s.ENUM_StarCondition.E_WinCount_MoreUnitPercent:
                      for (n = 0, i = 0; i < e.length; i++)
                        e[i].isWin &&
                          (e[i].finishUnitList / e[i].unitList) * 100 >
                            t.param2 &&
                          n++;
                      return (
                        n >= t.param1 && (n = t.param1),
                        "Remaining blocks more than " +
                          t.param2 +
                          "%\uff0cwin " +
                          n +
                          "/" +
                          t.param1 +
                          " battles"
                      );
                  }
                  return "";
                }),
                (e.GetRewardDataById = function (t) {
                  for (
                    var e = Object.values(o.REWARDID), n = 0;
                    n < e.length;
                    n++
                  )
                    if (t == e[n].id) return e[n];
                  return null;
                }),
                (e.GetLevelDataById = function (t) {
                  for (var e = 0; e < o.levelList.length; e++)
                    if (t == o.levelList[e].id) return o.levelList[e];
                  return null;
                }),
                (e.GetEnemyCarDataById = function (t) {
                  for (var e = 0; e < o.enemyList.length; e++)
                    if (t == o.enemyList[e].id) return o.enemyList[e];
                  return null;
                }),
                (e.GetUnitDataByIDAndLv = function (t, e) {
                  for (var n = 0; n < o.unitData.length; n++)
                    if (o.unitData[n].id == t && o.unitData[n].level == e)
                      return o.unitData[n];
                  return null;
                }),
                (e.GetChestDataById = function (t) {
                  for (var e = 0; e < this.shopBoxData.length; e++)
                    if (this.shopBoxData[e].id == t) return this.shopBoxData[e];
                  return null;
                }),
                (e.GetRandomChestReward = function (t) {
                  var e = this.GetChestDataById(t),
                    o = { boxType: t, rewardList: [] };
                  if (null == e) return o;
                  var n = d.default.Random(
                    e.diamondRange.min,
                    e.diamondRange.max
                  );
                  n > 0 &&
                    o.rewardList.push({
                      type: s.ENUM_CHESTREWARDTYPE.ENUM_DIAMOND,
                      id: "",
                      value: n,
                    });
                  var i = d.default.Random(e.gearRange.min, e.gearRange.max);
                  i > 0 &&
                    o.rewardList.push({
                      type: s.ENUM_CHESTREWARDTYPE.ENUM_GEAR,
                      id: "",
                      value: i,
                    });
                  var a = d.default.Random(
                    e.rare01Range.min,
                    e.rare01Range.max
                  );
                  if (a > 0) {
                    for (
                      var r = d.default.Random(
                          e.rare01CardRange.min,
                          e.rare01CardRange.max
                        ),
                        c = [],
                        l = 0;
                      l < this.unitData.length;
                      l++
                    )
                      if (
                        this.unitData[l].quality == s.ENUM_UNIT_QUALITY.E_BLUE
                      ) {
                        for (var u = !1, p = 0; p < c.length; p++)
                          if (c[p] == this.unitData[l].id) {
                            u = !0;
                            break;
                          }
                        0 == u && c.push(this.unitData[l].id);
                      }
                    for (a > c.length && (a = c.length), l = 0; l < a; l++)
                      if (r > 0) {
                        var f = d.default.Random(0, c.length - 1),
                          h = d.default.Random(1, r);
                        o.rewardList.push({
                          type: s.ENUM_CHESTREWARDTYPE.ENUM_UNITCARD,
                          id: c[f],
                          value: h,
                        }),
                          c.splice(f, 1),
                          (r -= h);
                      }
                  }
                  var y = d.default.Random(
                    e.rare02Range.min,
                    e.rare02Range.max
                  );
                  if (y > 0) {
                    var m = d.default.Random(
                      e.rare02CardRange.min,
                      e.rare02CardRange.max
                    );
                    for (c = [], l = 0; l < this.unitData.length; l++)
                      if (
                        this.unitData[l].quality == s.ENUM_UNIT_QUALITY.E_PURPLE
                      ) {
                        for (u = !1, p = 0; p < c.length; p++)
                          if (c[p] == this.unitData[l].id) {
                            u = !0;
                            break;
                          }
                        0 == u && c.push(this.unitData[l].id);
                      }
                    for (y > c.length && (y = c.length), l = 0; l < y; l++)
                      m > 0 &&
                        ((f = d.default.Random(0, c.length - 1)),
                        (h = d.default.Random(1, m)),
                        o.rewardList.push({
                          type: s.ENUM_CHESTREWARDTYPE.ENUM_UNITCARD,
                          id: c[f],
                          value: h,
                        }),
                        c.splice(f, 1),
                        (m -= h));
                  }
                  return o;
                }),
                (e.pkgName = "com.baiying.cargoboom"),
                (e.version = "1.0.0"),
                (e.REWARDID = {
                  COIN: { id: "coin", name: "Coin", iconUrl: "UI/Icon/coins" },
                  DIAMOND: {
                    id: "diamond",
                    name: "Gem",
                    iconUrl: "UI/Icon/diamond",
                  },
                  UNIT01: {
                    id: "unit01",
                    name: "Block",
                    iconUrl: "UI/Icon/unit01",
                  },
                  GEARS: { id: "gear", name: "Gear", iconUrl: "UI/Icon/gears" },
                  LOGIN_CHEST: {
                    id: "loginChest",
                    name: "Sign Reward",
                    iconUrl: "UI/Icon/loginChest",
                  },
                  WHEEL_CHEST: {
                    id: "wheelChest",
                    name: "Chest",
                    iconUrl: "UI/Icon/loginChest",
                  },
                }),
                (e.unitData = []),
                (e.levelList = []),
                (e.enemyList = []),
                (e.shopBoxData = []),
                (e.shopResourceData = [
                  {
                    id: "1001",
                    resourceType: "gear",
                    resourceNum: 500,
                    costType: "diamond",
                    costNum: 100,
                    iconUrl: "gui_cl_box1",
                  },
                  {
                    id: "1002",
                    resourceType: "gear",
                    resourceNum: 2e3,
                    costType: "diamond",
                    costNum: 300,
                    iconUrl: "gui_cl_box1",
                  },
                  {
                    id: "1001",
                    resourceType: "gear",
                    resourceNum: 500,
                    costType: "video",
                    costNum: "Claim",
                    iconUrl: "gui_cl_box2",
                  },
                  {
                    id: "1001",
                    resourceType: "diamond",
                    resourceNum: 100,
                    costType: "video",
                    costNum: "Claim",
                    iconUrl: "gui_cl_gems_box",
                  },
                ]),
                (e.loginReward = [
                  { id: o.REWARDID.GEARS.id, value: 500 },
                  { id: o.REWARDID.GEARS.id, value: 1e3 },
                  { id: o.REWARDID.DIAMOND.id, value: 300 },
                  { id: o.REWARDID.GEARS.id, value: 2e3 },
                  { id: o.REWARDID.GEARS.id, value: 2500 },
                  { id: o.REWARDID.DIAMOND.id, value: 600 },
                  { id: o.REWARDID.LOGIN_CHEST.id, value: 1 },
                ]),
                (e.wheelReward = [
                  { id: o.REWARDID.DIAMOND.id, weight: 20, value: 500 },
                  { id: o.REWARDID.GEARS.id, weight: 20, value: 1e3 },
                  { id: o.REWARDID.WHEEL_CHEST.id, weight: 10, value: 1 },
                  { id: o.REWARDID.DIAMOND.id, weight: 100, value: 200 },
                  { id: o.REWARDID.GEARS.id, weight: 10, value: 1500 },
                  { id: o.REWARDID.DIAMOND.id, weight: 100, value: 100 },
                  { id: o.REWARDID.GEARS.id, weight: 100, value: 500 },
                  { id: o.REWARDID.DIAMOND.id, weight: 80, value: 300 },
                ]),
                (e.videoDiamondValue = 200),
                (o = c([p], e))
              );
            })(cc.Component));
        (a.default = f), cc._RF.pop();
      },
      {},
    ],
    TNTBox: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "173b4fX9RtJlJVxh79TYt0H", "TNTBox");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("Unit_Base"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "tnt_box");
                }),
                (e.prototype.connectAround = function (t) {
                  var e = this.node.addComponent(cc.WeldJoint);
                  (e.connectedBody = t.getComponent(cc.RigidBody)),
                    (e.collideConnected = !0),
                    (e.anchor = cc.v2(
                      (t.x - this.node.x) / 2,
                      (t.y - this.node.y) / 2
                    )),
                    this.setOtherAnchor(t, e),
                    (e.referenceAngle = -t.angle),
                    e.apply();
                }),
                c([d], e)
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    TTSDK: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "ce0c8rEDHpIALukCQCt5sMT", "TTSDK");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("SDK"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e.apiName = "tt"),
                  (e.BANNER_ID = "f4fsql6eq47166f9ii"),
                  (e.INSERT_ID = "a3l7c8874g7b11b8q2"),
                  (e.VIDEO_ID = "g92jf9561aj41aohj6"),
                  (e.TEMPLATE_ID = "ggibmpfr1i02g99qd3"),
                  (e.isToutiaio = !1),
                  (e.recStartTime = 0),
                  (e.recEndTime = 0),
                  (e.isInsertAdNew = !1),
                  (e.recVideoPath = ""),
                  e
                );
              }
              var o;
              return (
                r(e, t),
                (o = e),
                (e.prototype.initSdk = function () {
                  console.log("TTSDK init"),
                    (o.instance = this),
                    (this.api = window[this.apiName]),
                    (this.systemInfo = this.api.getSystemInfoSync()),
                    (this.isToutiaio = "Toutiao" === this.systemInfo.appName),
                    (this.screenWidth = this.systemInfo.windowWidth),
                    (this.screenHeight = this.systemInfo.windowHeight),
                    console.log(
                      "\u7cfb\u7edf\u4fe1\u606f\uff1a" +
                        JSON.stringify(this.systemInfo)
                    ),
                    this.isLoginTT(),
                    this.initBannerAd(),
                    this.createInsertAd(),
                    this.createVideoAd(),
                    this.initRecorder();
                }),
                (e.prototype.showLoginDialog = function () {
                  this.api.showModal({
                    title: "\u63d0\u793a",
                    content:
                      "\u68c0\u6d4b\u5230\u672a\u767b\u5f55\uff0c\u662f\u5426\u8fdb\u884c\u767b\u5f55",
                    success: function (t) {
                      t.confirm
                        ? (o.instance.loginTT(!0, null),
                          console.log("confirm, continued"))
                        : t.cancel && console.log("cancel, cold");
                    },
                    fail: function (t) {
                      console.log("showModal\u8c03\u7528\u5931\u8d25");
                    },
                  });
                }),
                (e.prototype.isLoginTT = function () {
                  this.loginTT(!1, function (t) {
                    t && o.instance.showLoginDialog();
                  });
                }),
                (e.prototype.loginTT = function (t, e) {
                  this.api.login({
                    force: t,
                    success: function (t) {
                      t.isLogin ? null != e && e(!1) : null != e && e(!0),
                        console.log(
                          "login\u8c03\u7528\u6210\u529f" +
                            t.code +
                            " " +
                            t.anonymousCode
                        );
                    },
                    fail: function (t) {
                      console.log("login\u8c03\u7528\u5931\u8d25"),
                        null != e && e(!1);
                    },
                  });
                }),
                (e.prototype.initBannerAd = function () {
                  this.createBannerAd(!1);
                }),
                (e.prototype.createBannerAd = function (t) {
                  void 0 === t && (t = !1),
                    console.log("isToutiaio:" + this.isToutiaio),
                    this.isToutiaio &&
                      (this.bannerAd &&
                        (this.bannerAd.destroy(), (this.bannerAd = null)),
                      (this.bannerAd = this.api.createBannerAd({
                        adUnitId: this.BANNER_ID,
                        style: { width: 200, top: this.screenHeight - 112.5 },
                      })),
                      (this.bannerAd.style.left = (this.screenWidth - 200) / 2),
                      this.bannerAd.onResize(function (t) {
                        console.log(t.width, t.height),
                          (o.instance.bannerAd.style.left =
                            (o.instance.screenWidth - t.width) / 2),
                          (o.instance.bannerAd.style.top =
                            o.instance.screenHeight - t.height);
                      }),
                      this.bannerAd.onLoad(function () {
                        t && o.instance.showBannerAd();
                      }),
                      this.bannerAd.onError(function (t) {
                        console.log(
                          "\u9519\u8bef\u76d1\u542c\uff1a",
                          JSON.stringify(t)
                        );
                      }));
                }),
                (e.prototype.showBannerAd = function (t) {
                  void 0 === t && (t = 100),
                    this.isToutiaio &&
                      (null != this.bannerAd
                        ? (this.bannerAd.show(), (this.isFirstInGame = !1))
                        : this.createBannerAd(!0));
                }),
                (e.prototype.hideBannerAd = function () {
                  null != this.bannerAd && this.bannerAd.hide();
                }),
                (e.prototype.destroyBannerAd = function () {
                  null != this.bannerAd &&
                    (this.bannerAd.destroy(), (this.bannerAd = null));
                }),
                (e.prototype.createInsertAd = function () {
                  this.isToutiaio &&
                    ((this.isInsertAdNew = !0),
                    null != this.insertAd && this.insertAd.destroy(),
                    (this.insertAd = this.api.createInterstitialAd({
                      adUnitId: this.INSERT_ID,
                    })),
                    this.insertAd.onClose(function () {
                      console.log("\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed"),
                        o.instance.createInsertAd(),
                        o.instance.showBannerAd();
                    }),
                    this.insertAd.onError(function (t) {
                      console.log(
                        "\u63d2\u5c4f\u5e7f\u544a\u51fa\u9519\uff1a",
                        JSON.stringify(t)
                      );
                    }));
                }),
                (e.prototype.showInsertAd = function (t) {
                  void 0 === t && (t = 200),
                    this.isToutiaio &&
                      (this.isInsertAdNew || this.createInsertAd(),
                      this.insertAd
                        .load()
                        .then(function () {
                          o.instance.hideBannerAd(),
                            o.instance.insertAd.show().catch(function (t) {
                              o.instance.showBannerAd("13");
                            });
                        })
                        .catch(function (t) {
                          console.log(
                            "\u63d2\u5c4f\u5e7f\u544a\u51fa\u9519:" + t
                          );
                        }),
                      (this.isInsertAdNew = !1));
                }),
                (e.prototype.showNativeAd = function (t, e) {
                  void 0 === t && (t = "1");
                }),
                (e.prototype.onNativeAdClick = function (t) {}),
                (e.prototype.onNativeDestroy = function () {}),
                (e.prototype.navigateToMiniGame = function (t, e, o, n, i) {}),
                (e.prototype.createVideoAd = function () {
                  try {
                    console.log(
                      "\u521b\u5efa\u5934\u6761\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"
                    ),
                      (this.videoAd = this.api.createRewardedVideoAd({
                        adUnitId: this.VIDEO_ID,
                      })),
                      this.videoAd
                        .load()
                        .then(function () {
                          console.log("ad loaded");
                        })
                        .catch(function (t) {
                          console.log(
                            "\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25"
                          );
                        }),
                      this.videoAd.onLoad(function (t) {
                        console.log(
                          "==> rewardedVideoAd onLoad",
                          JSON.stringify(t)
                        );
                      }),
                      this.videoAd.onClose(function (t) {
                        t.isEnded
                          ? o.instance.videoAdCallBack(0)
                          : (o.instance.videoAdCallBack(1),
                            console.log("\u5e7f\u544a\u6ca1\u770b\u5b8c"));
                      }),
                      this.videoAd.onError(function (t) {
                        console.log("onError:", t.errMsg);
                      });
                  } catch (t) {
                    console.log("wxRewardVideoAd error", t);
                  }
                }),
                (e.prototype.showVideoAd = function (t, e) {
                  var n = this;
                  void 0 === t && (t = 300),
                    (this.videoAdCallBack = e),
                    this.videoAd &&
                      this.videoAd
                        .show()
                        .then(function () {
                          console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f");
                        })
                        .catch(function (t) {
                          console.log(
                            "\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898",
                            t
                          ),
                            n.videoAd.load().then(function () {
                              console.log(
                                "\u624b\u52a8\u52a0\u8f7d\u6210\u529f"
                              ),
                                o.instance.videoAd.show();
                            });
                        });
                }),
                (e.prototype.initRecorder = function () {
                  this.ttRecorder = this.api.getGameRecorderManager();
                }),
                (e.prototype.startRecorder = function () {
                  (this.recStartTime = this.getSysTime()),
                    this.ttRecorder.onStart(function (t) {
                      console.log("\u5f55\u5c4f\u5f00\u59cb");
                    }),
                    this.ttRecorder.start({ duration: 120 });
                }),
                (e.prototype.stopRecorder = function () {
                  (this.recEndTime = this.getSysTime()),
                    console.log(
                      "\u5f55\u5c4f\u7ed3\u675f-recEndTime=" + this.recEndTime
                    ),
                    this.ttRecorder.onStop(function (t) {
                      console.log("stopRecorder" + t.videoPath),
                        (o.instance.recVideoPath = t.videoPath);
                    }),
                    this.ttRecorder.stop();
                }),
                (e.prototype.shareRecorder = function (t) {
                  this.recEndTime - this.recStartTime >= 3
                    ? 0 != this.recVideoPath.length
                      ? this.api.shareAppMessage({
                          channel: "video",
                          title:
                            "\u81ed\u5f1f\u5f1f\u5728\u7ebf\u8eb2\u5b50\u5f39",
                          imageUrl: "",
                          templateId: this.TEMPLATE_ID,
                          query: "",
                          extra: {
                            videoPath: this.recVideoPath,
                            videoTopics: [
                              "\u62e5\u6709\u5b50\u5f39\u65f6\u95f4\u7684\u81ed\u5f1f\u5f1f\u662f\u65e0\u654c\u7684",
                            ],
                            withVideoId: !0,
                          },
                          success: function () {
                            console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f"),
                              t(0);
                          },
                          fail: function (e) {
                            console.log(
                              "\u5206\u4eab\u89c6\u9891\u5931\u8d25:" +
                                JSON.stringify(e)
                            ),
                              t(1),
                              o.instance.showToastMsg(
                                "\u5206\u4eab\u89c6\u9891\u5931\u8d25"
                              );
                          },
                        })
                      : o.instance.showToastMsg(
                          "\u89c6\u9891\u5f55\u5236\u5931\u8d25"
                        )
                    : o.instance.showToastMsg(
                        "\u5f55\u5c4f\u65f6\u957f\u4f4e\u4e8e3\u79d2"
                      );
                }),
                (e.prototype.showToastMsg = function (t) {
                  this.api.showToast({
                    title: t,
                    duration: 2e3,
                    success: function (t) {
                      console.log("" + t);
                    },
                    fail: function (t) {
                      console.log("showToast\u8c03\u7528\u5931\u8d25");
                    },
                  });
                }),
                (e.prototype.onBegin = function (t) {
                  console.log("\u5f00\u59cb\u7b2c" + t + "\u5173");
                }),
                (e.prototype.onCompleted = function (t) {
                  console.log("\u7ed3\u675f\u7b2c" + t + "\u5173");
                }),
                (e.prototype.onFailed = function (t) {
                  console.log("\u5931\u8d25\u7b2c" + t.missionId + "\u5173");
                }),
                (e.prototype.onEvent = function (t) {}),
                (o = c([d], e))
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    UIManager: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "dec08tqZrZFp536WVnw7lV3", "UIManager");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("StaticData"),
          l = i("EnumDefiner"),
          d = i("UI_RewardCollector"),
          u = cc._decorator,
          p = u.ccclass,
          f =
            (u.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              var o;
              return (
                r(e, t),
                (o = e),
                (e.canvasNode = function () {
                  var t = cc.director
                    .getScene()
                    .getChildByName("Canvas")
                    .getChildByName("UIRoot");
                  return (
                    null == t &&
                      (((t = new cc.Node()).name = "UIRoot"),
                      (t.parent = cc.director
                        .getScene()
                        .getChildByName("Canvas")),
                      (t.x = 0),
                      (t.y = 0),
                      (t.width = t.parent.width),
                      (t.height = t.parent.height),
                      t.setSiblingIndex(999)),
                    t
                  );
                }),
                (e.waitingCanvasNode = function () {
                  var t = cc.director
                    .getScene()
                    .getChildByName("Canvas")
                    .getChildByName("WaitingRoot");
                  return (
                    null == t &&
                      (((t = new cc.Node()).name = "WaitingRoot"),
                      (t.parent = cc.director
                        .getScene()
                        .getChildByName("Canvas")),
                      (t.x = 0),
                      (t.y = 0),
                      (t.width = t.parent.width),
                      (t.height = t.parent.height),
                      t.setSiblingIndex(999)),
                    t
                  );
                }),
                (e.interludeCanvasNode = function () {
                  var t = cc.director
                    .getScene()
                    .getChildByName("Canvas")
                    .getChildByName("InterludeRoot");
                  return (
                    null == t &&
                      (((t = new cc.Node()).name = "InterludeRoot"),
                      (t.parent = cc.director
                        .getScene()
                        .getChildByName("Canvas")),
                      (t.x = 0),
                      (t.y = 0),
                      (t.width = t.parent.width),
                      (t.height = t.parent.height),
                      t.setSiblingIndex(999)),
                    t
                  );
                }),
                (e.prototype.onLoad = function () {
                  (o.selfNode = this.node),
                    (o.isShowWaiting = !1),
                    cc.loader.loadRes("Prefabs/UI/UI_Waiting", null),
                    cc.game.addPersistRootNode(this.node);
                }),
                (e.PreloadUIRes = function (t, e) {
                  void 0 === e && (e = null),
                    (o.waitingData_preloadResList = t),
                    (o.waitingData_preloadFinishCallback = e);
                }),
                (e.Action_PreloadUIRes = function () {
                  null == o.waitingData_preloadResList ||
                  0 == o.waitingData_preloadResList.length
                    ? null != o.waitingData_preloadFinishCallback &&
                      (o.waitingData_counting_callback(),
                      (o.waitingData_counting_callback = null))
                    : cc.loader.loadRes(
                        o.waitingData_preloadResList[0],
                        o.OnEvent_ResLoaded_Preload
                      );
                }),
                (e.OnEvent_ResLoaded_Preload = function (t, e) {
                  null == t && o.waitingData_preloadResList.splice(0, 1),
                    o.Action_PreloadUIRes();
                }),
                (e.ShowUI_Waiting = function () {
                  console.log("show waiting---");
                  var t = o.waitingNode();
                  null != t
                    ? (t.setParent(o.waitingCanvasNode()),
                      (t.active = !0),
                      t.setSiblingIndex(9999999))
                    : ((o.isShowWaiting = !0),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_Waiting",
                        o.OnEvent_ResLoaded_Waiting
                      ));
                }),
                (e.OnEvent_ResLoaded_Waiting = function (t, e) {
                  if (null == t) {
                    var n = cc.instantiate(e);
                    o.isShowWaiting
                      ? (n.setParent(o.waitingCanvasNode()),
                        (n.active = !0),
                        n.setSiblingIndex(999999))
                      : ((n.active = !1), n.setParent(o.selfNode));
                  }
                }),
                (e.HideUI_Waiting = function () {
                  console.log("hide waiting");
                  var t = o.waitingNode();
                  null != t && (t.active = !1), (o.isShowWaiting = !1);
                }),
                (e.ShowUI_Loading = function (t, e, n) {
                  var i = o.loadingNode();
                  null != i
                    ? i.getComponent("UI_Loading").ShowUI_Loading(t, e, n)
                    : (o.ShowUI_Waiting(),
                      (o.waitingData_loading_resList = t),
                      (o.waitingData_loading_sceneName = e),
                      (o.waitingData_loading_callback = n),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_Loading",
                        this.OnEvent_ResLoaded_Loading.bind(this)
                      ));
                }),
                (e.OnEvent_ResLoaded_Loading = function (t, e) {
                  if (null == t) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n
                        .getComponent("UI_Loading")
                        .ShowUI_Loading(
                          o.waitingData_loading_resList,
                          o.waitingData_loading_sceneName,
                          o.waitingData_loading_callback
                        ),
                      (o.waitingData_loading_resList = null),
                      (o.waitingData_loading_sceneName = null),
                      (o.waitingData_loading_callback = null);
                  }
                  o.HideUI_Waiting();
                }),
                (e.HideUI_Loading = function () {
                  o.loadingNode().active = !1;
                }),
                (e.ShowUI_Notification = function (t) {
                  YYGplatform.showTip(t);
                }),
                (e.OnEvent_ResLoaded_Notification = function (t, e) {
                  if (null == t) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0);
                    for (
                      var i = 0;
                      i < o.waitingData_notification_contentList.length;
                      i++
                    )
                      n.getComponent("UI_Notification").ShowUI_Notification(
                        o.waitingData_notification_contentList[i]
                      );
                    (o.waitingData_notification_contentList = []),
                      (o.isResLoading_notification = !1);
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Notification_Panel = function (t) {
                  var e = o.notificationPanelNode();
                  null != e
                    ? (e.setParent(o.canvasNode()),
                      e.setSiblingIndex(999999),
                      e
                        .getComponent("UI_Notification_Panel")
                        .ShowUI_Notification_Panel(
                          t.title,
                          t.content,
                          t.ok_text,
                          t.cancel_text,
                          t.callback
                        ))
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_Notification_Panel",
                        o.OnEvent_ResLoaded_Notification_Panel
                      ),
                      (o.waitingData_notificationPanel_content = t));
                }),
                (e.OnEvent_ResLoaded_Notification_Panel = function (t, e) {
                  if (null == t) {
                    var n = cc.instantiate(e);
                    if (
                      (n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      null != o.waitingData_notificationPanel_content)
                    ) {
                      var i = o.waitingData_notificationPanel_content.title,
                        a = o.waitingData_notificationPanel_content.content,
                        r = o.waitingData_notificationPanel_content.ok_text,
                        c = o.waitingData_notificationPanel_content.cancel_text,
                        s = o.waitingData_notificationPanel_content.callback;
                      n.getComponent(
                        "UI_Notification_Panel"
                      ).ShowUI_Notification_Panel(i, a, r, c, s);
                    }
                    o.waitingData_notificationPanel_content = null;
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Counting = function (t) {
                  o.ShowUI_Waiting(),
                    (o.waitingData_counting_callback = t),
                    cc.loader.loadRes(
                      "Prefabs/UI/UI_Counting",
                      o.OnEvent_ResLoaded_Counting
                    );
                }),
                (e.OnEvent_ResLoaded_Counting = function (t, e) {
                  if ((console.log("res loaded  : counting"), null == t)) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n
                        .getComponent("UI_Counting")
                        .ShowUI_StartCounting(o.waitingData_counting_callback),
                      (o.waitingData_counting_callback = null);
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Searching = function (t) {
                  o.ShowUI_Waiting(),
                    (o.waitingData_searching_callback = t),
                    cc.loader.loadRes(
                      "Prefabs/UI/UI_Searching",
                      o.OnEvent_ResLoaded_Searching
                    );
                }),
                (e.OnEvent_ResLoaded_Searching = function (t, e) {
                  if ((console.log("res loaded  : searching"), null == t)) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n
                        .getComponent("UI_Searching")
                        .ShowUI_Searching(o.waitingData_searching_callback),
                      (o.waitingData_searching_callback = null);
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Reward = function (t) {
                  var e = o.rewardNode();
                  null != e
                    ? (e.setParent(o.canvasNode()),
                      (e.active = !0),
                      e.setSiblingIndex(999999),
                      e.getComponent("UI_Reward").ShowUI_Reward(t))
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_Reward",
                        o.OnEvent_ResLoaded_Reward
                      ),
                      (o.waitingData_reward = t));
                }),
                (e.OnEvent_ResLoaded_Reward = function (t, e) {
                  if ((console.log("res loaded  : reward"), null == t)) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n
                        .getComponent("UI_Reward")
                        .ShowUI_Reward(o.waitingData_reward),
                      (o.waitingData_reward = []);
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Rewarditem = function (t) {
                  var e = o.rewardItem();
                  null != e
                    ? (e.setParent(o.canvasNode()),
                      (e.active = !0),
                      e.setSiblingIndex(999999),
                      e.getComponent("UI_Rewarditem").ShowUI_Rewarditem(t))
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_Rewarditem",
                        function (e, n) {
                          if (
                            (console.log("res loaded  : reward item"),
                            null == e)
                          ) {
                            var i = cc.instantiate(n);
                            i.setParent(o.canvasNode()),
                              i.setSiblingIndex(999999),
                              (i.active = !0),
                              i
                                .getComponent("UI_Rewarditem")
                                .ShowUI_Rewarditem(t);
                          }
                          o.HideUI_Waiting();
                        }
                      ));
                }),
                (e.ShowUI_LoginReward = function () {
                  var t = o.loginRewardNode();
                  null != t
                    ? (t.setParent(o.canvasNode()),
                      (t.active = !0),
                      t.setSiblingIndex(999999),
                      t.getComponent("UI_LoginReward").ShowUI_LoginReward())
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_LoginReward",
                        o.OnEvent_ResLoaded_LoginReward
                      ));
                }),
                (e.OnEvent_ResLoaded_LoginReward = function (t, e) {
                  if ((console.log("res loaded  : loginreward"), null == t)) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n.getComponent("UI_LoginReward").ShowUI_LoginReward();
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Title = function () {
                  console.log("show title");
                  var t = o.titleNode();
                  null != t
                    ? (t.setParent(o.canvasNode()),
                      (t.active = !0),
                      t.setSiblingIndex(999999),
                      t.getComponent("UI_Title").ShowUI_Title())
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_Title",
                        o.OnEvent_ResLoaded_Title
                      ));
                }),
                (e.ShowUI_VideoTips = function (t) {
                  console.log("show videoTips"), (o.VideoTipsType = t);
                  var e = o.videoTips();
                  null != e
                    ? (e.setParent(o.canvasNode()),
                      (e.active = !0),
                      e.setSiblingIndex(999999),
                      e
                        .getComponent("UI_VideoTips")
                        .ShowUI_VideoTips(o.VideoTipsType))
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_VideoTips",
                        o.OnEvent_VideoTips
                      ));
                }),
                (e.OnEvent_VideoTips = function (t, e) {
                  if ((console.log("res loaded  : videoTips"), null == t)) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n
                        .getComponent("UI_VideoTips")
                        .ShowUI_VideoTips(o.VideoTipsType);
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_LevelUiBase = function () {
                  console.log("show levelUiBase");
                  var t = o.LevelUiBase();
                  null != t
                    ? (t.setParent(o.canvasNode()),
                      (t.active = !0),
                      t.setSiblingIndex(999999),
                      t.getComponent("UI_LevelUiBase").ShowUI_LevelUiBase())
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_LevelUiBase",
                        o.OnEvent_LevelUiBase
                      ));
                }),
                (e.OnEvent_LevelUiBase = function (t, e) {
                  if ((console.log("res loaded  : _levelUiBase"), null == t)) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n.getComponent("UI_LevelUiBase").ShowUI_LevelUiBase();
                  }
                  o.HideUI_Waiting();
                }),
                (e.OnEvent_ResLoaded_Title = function (t, e) {
                  if ((console.log("res loaded  : title"), null == t)) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n.getComponent("UI_Title").ShowUI_Title();
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Finish = function (t) {
                  console.log("[UIManager][Show][Finish]"),
                    o.ShowUI_Waiting(),
                    (o.waitingData_Finish_isWin = t),
                    cc.loader.loadRes(
                      "Prefabs/UI/UI_Finish",
                      o.OnEvent_ResLoaded_Finish
                    );
                }),
                (e.OnEvent_ResLoaded_Finish = function (t, e) {
                  if (
                    (console.log("[UIManager][ResLoaded][Finish]"), null == t)
                  ) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n
                        .getComponent("UI_Finish")
                        .ShowUI_Finish(o.waitingData_Finish_isWin);
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_WheelReward = function () {
                  var t = o.wheelRewardNode();
                  null != t
                    ? (t.setParent(o.canvasNode()),
                      (t.active = !0),
                      t.setSiblingIndex(999999),
                      t.getComponent("UI_WheelReward").ShowUI_WheelReward())
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_WheelReward",
                        o.OnEvent_ResLoaded_UI_WheelReward
                      ));
                }),
                (e.OnEvent_ResLoaded_UI_WheelReward = function (t, e) {
                  if ((console.log("res loaded  : WheelReward"), null == t)) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n.getComponent("UI_WheelReward").ShowUI_WheelReward();
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_FightPrepare = function () {
                  var t = o.fightPrepareNode();
                  null != t
                    ? (t.setParent(o.canvasNode()),
                      (t.active = !0),
                      t.setSiblingIndex(999999),
                      t.getComponent("UI_FightPrepare").Show_FightPrepare())
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_FightPrepare",
                        o.OnEvent_ResLoaded_UI_FightPrepare
                      ));
                }),
                (e.OnEvent_ResLoaded_UI_FightPrepare = function (t, e) {
                  //TODO Mr Dua
                //   h5Ubi.onCallShowInters({
                //   onAndroidWebView: () => {
                //     console.log("WebView");
                //   },
                //   onBrowser: () => {
                //     console.log("Browser-OnEvent_ResLoaded_UI_FightPrepare");
                //   },
                // });
                  if (
                    (console.log(
                      "res loaded  : OnEvent_ResLoaded_UI_FightPrepare"
                    ),
                    null == t)
                  ) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n.getComponent("UI_FightPrepare").Show_FightPrepare();
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Fight = function () {
                  var t = o.fightNode();
                  null != t
                    ? (t.setParent(o.canvasNode()),
                      (t.active = !0),
                      t.setSiblingIndex(999999),
                      t.getComponent("UI_Fight").Show_Fight())
                    : cc.loader.loadRes(
                        "Prefabs/UI/UI_Fight",
                        o.OnEvent_ResLoaded_UI_Fight
                      ),
                    o.ShowUI_Interlude(o.inOrOut);
                }),
                (e.OnEvent_ResLoaded_UI_Fight = function (t, e) {
                  if (
                    (console.log("res loaded  : OnEvent_ResLoaded_UI_Fight"),
                    null == t)
                  ) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n.getComponent("UI_Fight").Show_Fight();
                  }
                }),
                (e.ShowUI_Shop = function () {
                  var t = o.shopNode();
                  null != t
                    ? (t.setParent(o.canvasNode()),
                      (t.active = !0),
                      t.setSiblingIndex(999999),
                      t.getComponent("UI_Shop").ShowUI_Shop())
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_Shop",
                        o.OnEvent_ResLoaded_UI_Shop
                      ));
                }),
                (e.OnEvent_ResLoaded_UI_Shop = function (t, e) {
                  if (
                    (console.log("res loaded  : OnEvent_ResLoaded_UI_Shop"),
                    null == t)
                  ) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n.getComponent("UI_Shop").ShowUI_Shop();
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_RewardBox = function (t) {
                  var e = o.rewardBox();
                  null != e
                    ? (e.setParent(o.canvasNode()),
                      (e.active = !0),
                      e.setSiblingIndex(999999),
                      e.getComponent("UI_RewardBox").ShowUI_RewardBox(t))
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_RewardBox",
                        function (e, n) {
                          o.OnEvent_ResLoaded_UI_RewardBox(e, n, t);
                        }
                      ));
                }),
                (e.OnEvent_ResLoaded_UI_RewardBox = function (t, e, n) {
                  if (
                    (console.log("res loaded  : ShowUI RewardBox"), null == t)
                  ) {
                    var i = cc.instantiate(e);
                    i.setParent(o.canvasNode()),
                      i.setSiblingIndex(999999),
                      (i.active = !0),
                      i.getComponent("UI_RewardBox").ShowUI_RewardBox(n);
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_StarReward = function () {
                  var t = o.starRewardNode();
                  null != t
                    ? (t.setParent(o.canvasNode()),
                      (t.active = !0),
                      t.setSiblingIndex(999999),
                      t.getComponent("UI_StarReward").ShowUI_StarReward())
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_StarReward",
                        o.OnEvent_ResLoaded_UI_StarReward
                      ));
                }),
                (e.OnEvent_ResLoaded_UI_StarReward = function (t, e) {
                  if (
                    (console.log(
                      "res loaded  : OnEvent_ResLoaded_UI_StarReward"
                    ),
                    null == t)
                  ) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n.getComponent("UI_StarReward").ShowUI_StarReward();
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Collect = function () {
                  var t = o.collectNode();
                  null != t
                    ? (t.setParent(o.canvasNode()),
                      (t.active = !0),
                      t.setSiblingIndex(999999),
                      t.getComponent("UI_Collect").ShowUI_Collect())
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_Collect",
                        o.OnEvent_ResLoaded_UI_Collect
                      ));
                }),
                (e.OnEvent_ResLoaded_UI_Collect = function (t, e) {
                  if (
                    (console.log("res loaded  : OnEvent_ResLoaded_UI_Collect"),
                    null == t)
                  ) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n.getComponent("UI_Collect").ShowUI_Collect();
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_CollectDetails = function (t) {
                  (o.CollectDetailsData = t),
                    o.ShowUI_Waiting(),
                    cc.loader.loadRes(
                      "Prefabs/UI/UI_CollectDetails",
                      o.OnEvent_ResLoaded_UI_CollectDetails
                    );
                }),
                (e.OnEvent_ResLoaded_UI_CollectDetails = function (t, e) {
                  if (
                    (console.log(
                      "res loaded  : OnEvent_ResLoaded_UI_CollectDetails"
                    ),
                    null == t)
                  ) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n
                        .getComponent("UI_CollectDetails")
                        .ShowUI_CollectDetails(o.CollectDetailsData);
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Cartoon = function () {
                  o.ShowUI_Waiting(),
                    cc.loader.loadRes(
                      "Prefabs/UI/UI_Cartoon",
                      o.OnEvent_ResLoaded_UI_Cartoon
                    );
                }),
                (e.OnEvent_ResLoaded_UI_Cartoon = function (t, e) {
                  if (
                    (console.log("res loaded  : OnEvent_ResLoaded_UI_Cartoon"),
                    null == t)
                  ) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n.getComponent("UI_Cartoon").ShowUI_Cartoon();
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Guide = function () {
                  var t = o.guideNode();
                  null != t
                    ? (t.setParent(o.canvasNode()),
                      (t.active = !0),
                      t.setSiblingIndex(999999),
                      t.getComponent("UI_Guide").ShowUI_Guide())
                    : (o.ShowUI_Waiting(),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_Guide",
                        o.OnEvent_ResLoaded_UI_Guide
                      ));
                }),
                (e.OnEvent_ResLoaded_UI_Guide = function (t, e) {
                  if (
                    (console.log("res loaded  : OnEvent_ResLoaded_UI_Guide"),
                    null == t)
                  ) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n.getComponent("UI_Guide").ShowUI_Guide();
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Tips = function (t) {
                  (o.tipsType = t),
                    o.ShowUI_Waiting(),
                    cc.loader.loadRes(
                      "Prefabs/UI/UI_Tips",
                      o.OnEvent_ResLoaded_UI_Tips
                    );
                }),
                (e.OnEvent_ResLoaded_UI_Tips = function (t, e) {
                  if (
                    (console.log("res loaded  : OnEvent_ResLoaded_UI_Tips"),
                    null == t)
                  ) {
                    var n = cc.instantiate(e);
                    n.setParent(o.canvasNode()),
                      n.setSiblingIndex(999999),
                      (n.active = !0),
                      n.getComponent("UI_Tips").ShowUI_Tips(o.tipsType);
                  }
                  o.HideUI_Waiting();
                }),
                (e.ShowUI_Interlude = function (t) {
                  console.log("show Interlude"), (o.inOrOut = t);
                  var e = o.interludeNode();
                  null != e
                    ? (e.setParent(o.interludeCanvasNode()),
                      (e.active = !0),
                      e.setSiblingIndex(9999999),
                      e.getComponent("UI_Interlude").Show_Interlude(o.inOrOut))
                    : ((o.isShowInterlude = !0),
                      cc.loader.loadRes(
                        "Prefabs/UI/UI_Interlude",
                        o.OnEvent_ResLoaded_Interlude
                      ));
                }),
                (e.OnEvent_ResLoaded_Interlude = function (t, e) {
                  if (null == t) {
                    var n = cc.instantiate(e);
                    o.isShowInterlude
                      ? (n.setParent(o.interludeCanvasNode()),
                        (n.active = !0),
                        n.setSiblingIndex(999999),
                        n
                          .getComponent("UI_Interlude")
                          .Show_Interlude(o.inOrOut))
                      : ((n.active = !1), n.setParent(o.selfNode));
                  }
                }),
                (e.HideUI_Interlude = function () {
                  console.log("hide interlude");
                  var t = o.interludeNode();
                  null != t && (t.active = !1), (o.isShowInterlude = !1);
                }),
                (e.ShowUI_RewardCollect = function (t) {
                  o.waitingData_coinCollect.push(t), this.loadRewardIcon();
                }),
                (e.loadRewardIcon = function () {
                  if (this.waitingData_coinCollect.length > 0) {
                    var t = this.waitingData_coinCollect[0];
                    this.ShowUI_Waiting();
                    var e = s.default.GetRewardDataById(t.id).iconUrl;
                    cc.loader.loadRes(e, o.OnEvent_ResLoaded_RewardCollect);
                  }
                }),
                (e.OnEvent_ResLoaded_RewardCollect = function (t, e) {
                  if (null == t) {
                    var n = o.waitingData_coinCollect.shift(),
                      i = new cc.Node("reward_collect"),
                      a = new cc.Node("icon");
                    (a.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(
                      e
                    )),
                      (a.parent = i),
                      (a.active = !1),
                      i.addComponent(d.default),
                      i.setParent(o.canvasNode()),
                      i.setSiblingIndex(999999),
                      i.getComponent(d.default).collectReward(n);
                  }
                  o.HideUI_Waiting(), o.loadRewardIcon();
                }),
                (e.selfNode = null),
                (e.waitingNode = function () {
                  return o.waitingCanvasNode().getChildByName("UI_Waiting");
                }),
                (e.interludeNode = function () {
                  return o.interludeCanvasNode().getChildByName("UI_Interlude");
                }),
                (e.loadingNode = function () {
                  return o.canvasNode().getChildByName("UI_Loading");
                }),
                (e.notificationNode = function () {
                  return o.canvasNode().getChildByName("UI_Notification");
                }),
                (e.notificationPanelNode = function () {
                  return o.canvasNode().getChildByName("UI_Notification_Panel");
                }),
                (e.rewardNode = function () {
                  return o.canvasNode().getChildByName("UI_Reward");
                }),
                (e.rewardItem = function () {
                  return o.canvasNode().getChildByName("UI_Rewarditem");
                }),
                (e.loginRewardNode = function () {
                  return o.canvasNode().getChildByName("UI_LoginReward");
                }),
                (e.wheelRewardNode = function () {
                  return o.canvasNode().getChildByName("UI_WheelReward");
                }),
                (e.fightPrepareNode = function () {
                  return o.canvasNode().getChildByName("UI_FightPrepare");
                }),
                (e.fightNode = function () {
                  return o.canvasNode().getChildByName("UI_Fight");
                }),
                (e.shopNode = function () {
                  return o.canvasNode().getChildByName("UI_Shop");
                }),
                (e.rewardBox = function () {
                  return o.canvasNode().getChildByName("UI_RewardBox");
                }),
                (e.titleNode = function () {
                  return o.canvasNode().getChildByName("UI_Title");
                }),
                (e.videoTips = function () {
                  return o.canvasNode().getChildByName("UI_VideoTips");
                }),
                (e.LevelUiBase = function () {
                  return o.canvasNode().getChildByName("UI_LevelUi");
                }),
                (e.starRewardNode = function () {
                  return o.canvasNode().getChildByName("UI_StarReward");
                }),
                (e.collectNode = function () {
                  return o.canvasNode().getChildByName("UI_Collect");
                }),
                (e.finishNode = function () {
                  return o.canvasNode().getChildByName("UI_Finish");
                }),
                (e.guideNode = function () {
                  return o.canvasNode().getChildByName("UI_Guide");
                }),
                (e.isShowWaiting = !1),
                (e.waitingData_notification_contentList = []),
                (e.isResLoading_notification = !1),
                (e.waitingData_notificationPanel_content = {
                  title: "\u6d4b\u8bd5\u6807\u9898",
                  content: "\u6d4b\u8bd5\u5185\u5bb9",
                  ok_text: "ok",
                  cancel_text: "cancel",
                  callback: function (t) {
                    console.log(
                      "\u6536\u5230noti\u56de\u8c03\u3010" + t + "\u3011"
                    );
                  },
                }),
                (e.waitingData_reward = [
                  { id: "coin", value: 100 },
                  { id: "avatar01", value: 1 },
                ]),
                (e.waitingData_Finish_isWin = l.ENUM_FINISHTYPE.ENUM_WIN_0),
                (e.isShowInterlude = !1),
                (e.inOrOut = "in"),
                (e.waitingData_coinCollect = []),
                (o = c([p], e))
              );
            })(cc.Component));
        (a.default = f), cc._RF.pop();
      },
      {},
    ],
    UI_Cartoon: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "a068awocwhN5p84tHdv9aO9", "UI_Cartoon");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("GamePlatform"),
          d = i("UIManager"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.panel = null), (e._count = 0), e;
            }
            return (
              r(e, t),
              (e.prototype.onLoad = function () {
                l.default.SDK.onBegin("1001");
              }),
              (e.prototype.onEnable = function () {
                setTimeout(function () {
                  if (document.createEvent) {
                    var t = document.createEvent("HTMLEvents");
                    t.initEvent("resize", !0, !0), window.dispatchEvent(t);
                  } else document.createEventObject && window.fireEvent("onresize");
                  "undefined" == typeof h5splash ||
                  "undefined" == typeof YYGGames
                    ? console.error("load success")
                    : window.onLoadingFinished ||
                      (h5splash.hideLoading(),
                      (window.onLoadingFinished = !0),
                      YYGGames.onLoadingFinished());
                }, 1e3);
              }),
              (e.prototype.ShowUI_Cartoon = function () {
                cc.tween(this)
                  .delay(0.8 - 0.1 * this._count)
                  .call(
                    function () {
                      this._count > 6
                        ? (this.node
                            .getChildByName("black")
                            .getComponent(cc.Button).interactable = !0)
                        : (1 == this._count
                            ? (this.panel.children[this._count]
                                .getComponent(cc.Animation)
                                .play(
                                  "cartoon_" +
                                    this.panel.children[this._count].name +
                                    "_x"
                                ),
                              (this.panel.children[this._count].active = !0),
                              cc
                                .tween(this)
                                .delay(3)
                                .call(
                                  function () {
                                    this.panel.children[2].active = !0;
                                  }.bind(this)
                                )
                                .start())
                            : (this.panel.children[this._count]
                                .getComponent(cc.Animation)
                                .play(
                                  "cartoon_" +
                                    this.panel.children[this._count].name +
                                    "_x"
                                ),
                              (this.panel.children[this._count].active = !0)),
                          this._count++,
                          this.ShowUI_Cartoon());
                    }.bind(this)
                  )
                  .start();
              }),
              (e.prototype.onEvent_btn_StartGame = function () {
                l.default.SDK.onCompleted("1001"),
                  (this.node.active = !1),
                  this.node.destroy(),
                  s.default.RuntimeData.firstGame
                    ? (d.default.ShowUI_Title(), d.default.ShowUI_Guide())
                    : d.default.ShowUI_Title();
              }),
              c([f(cc.Node)], e.prototype, "panel", void 0),
              c([p], e)
            );
          })(cc.Component);
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    UI_CollectDetails: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "07a39FHK6VPm7MZstGT7DM2", "UI_CollectDetails");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        i("GamePlatform");
        var s = i("DataManager"),
          l = i("StaticData"),
          d = i("EnumDefiner"),
          u = i("UI_FightPrepare"),
          p = i("UIManager"),
          f = i("UI_Collect"),
          h = cc._decorator,
          y = h.ccclass,
          m = h.property,
          _ = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.icon_ItemName = null),
                (e.icon_ItemNameLable = null),
                (e.num = null),
                (e.energy = null),
                (e.level = null),
                (e.icon = null),
                (e.interoduce = null),
                (e.weight = null),
                (e.boxNum = null),
                (e.health = null),
                (e.variableAttribute = null),
                (e.variableAttribute_1 = null),
                (e.upgradeButton = null),
                (e.coseGearNum = null),
                (e.progress = null),
                (e.progressLabel = null),
                (e.unitName = null),
                (e.btn_ad = null),
                (e.numAddIcon = null),
                (e.hpAddIcon = null),
                (e.variablePropertiesAddIcon = null),
                (e.variablePropertiesAddIcon_1 = null),
                (e.allEXAddIcon = null),
                (e.numAddLabel = null),
                (e.hpAddLabel = null),
                (e.variablePropertiesAddLabel = null),
                (e.variablePropertiesAddLabel_1 = null),
                (e.allEXAddLabel = null),
                (e.icon_Max_Big = null),
                (e.icon_Max_Small = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.onLoad = function () {}),
              (e.prototype.ShowUI_CollectDetails = function (t) {
                (this.unitData = t),
                  (this.node.getChildByName("black").opacity = 0),
                  (this.node.getChildByName("panel").scale = 0),
                  cc
                    .tween(this.node.getChildByName("black"))
                    .to(0.2, { opacity: 200 })
                    .start(),
                  cc
                    .tween(this.node.getChildByName("panel"))
                    .to(0.2, { scale: 1 })
                    .start(),
                  this.refreshUI(),
                  this.setVariableAttribute(),
                  this.loadRes();
              }),
              (e.prototype.refreshUI = function () {
                (this.staticUnitData = s.default.GetUnitLevelDataById(
                  this.unitData.id
                )),
                  (this.curLevelData = l.default.GetUnitDataByIDAndLv(
                    this.staticUnitData.id,
                    this.staticUnitData.level
                  )),
                  (this.nextLevelData = l.default.GetUnitDataByIDAndLv(
                    this.staticUnitData.id,
                    this.staticUnitData.level + 1
                  )),
                  this.setQuality(),
                  cc.loader.loadRes(
                    "Unit/" + this.curLevelData.iconUrl,
                    cc.SpriteFrame,
                    function (t, e) {
                      null == t &&
                        ((this.icon.getComponent(cc.Sprite).spriteFrame = e),
                        (this.icon.scale = 1.3));
                    }.bind(this)
                  ),
                  this.nextLevelData && null != this.nextLevelData
                    ? this.setUpGradeUI()
                    : ((this.numAddLabel.node.active = !1),
                      (this.numAddIcon.active = !1),
                      (this.hpAddIcon.active = !1),
                      (this.hpAddLabel.node.active = !1),
                      (this.variablePropertiesAddLabel.node.active = !1),
                      (this.variablePropertiesAddLabel_1.node.active = !1),
                      (this.variablePropertiesAddIcon.active = !1),
                      (this.variablePropertiesAddIcon_1.active = !1),
                      this.setProgress()),
                  (this.num.getComponent(cc.Label).string =
                    "x" + this.curLevelData.maxCount),
                  (this.level.getComponent(cc.Label).string =
                    this.curLevelData.level),
                  (this.energy.getComponent(cc.Label).string =
                    this.curLevelData.energy + ""),
                  (this.interoduce.getComponent(cc.Label).string =
                    this.curLevelData.description),
                  (this.weight.getComponent(cc.Label).string =
                    this.curLevelData.weight + ""),
                  (this.boxNum.getComponent(cc.Label).string =
                    this.curLevelData.maxCount + ""),
                  (this.health.getComponent(cc.Label).string =
                    this.curLevelData.hp + ""),
                  (this.unitName.getComponent(cc.Label).string =
                    this.curLevelData.name),
                  (this.iconUrl = this.curLevelData.iconUrl),
                  (this.titleNameUrl = this.curLevelData.iconUrl),
                  (this.coseGearNum.string =
                    this.curLevelData.upgrade_gear + "");
              }),
              (e.prototype.setQuality = function () {
                var t = this.node
                  .getChildByName("panel")
                  .getChildByName("middle")
                  .getChildByName("Unit_item")
                  .getChildByName("ui_pz_double");
                switch (this.curLevelData.quality) {
                  case d.ENUM_UNIT_QUALITY.E_BLUE:
                    cc.loader.loadRes(
                      "UI/unit/1",
                      cc.SpriteFrame,
                      function (e, o) {
                        null == e
                          ? (t.getComponent(cc.Sprite).spriteFrame = o)
                          : console.error(e);
                      }.bind(this)
                    );
                    break;
                  case d.ENUM_UNIT_QUALITY.E_PURPLE:
                    cc.loader.loadRes(
                      "UI/unit/2",
                      cc.SpriteFrame,
                      function (e, o) {
                        null == e &&
                          (t.getComponent(cc.Sprite).spriteFrame = o);
                      }.bind(this)
                    );
                    break;
                  case d.ENUM_UNIT_QUALITY.E_ORANGE:
                    cc.loader.loadRes(
                      "UI/unit/3",
                      cc.SpriteFrame,
                      function (e, o) {
                        null == e &&
                          (t.getComponent(cc.Sprite).spriteFrame = o);
                      }.bind(this)
                    );
                }
              }),
              (e.prototype.setVariableAttribute = function () {
                var t = this.variableAttribute.getChildByName("icon"),
                  e = this.variableAttribute.getChildByName("number"),
                  o = this.variableAttribute_1.getChildByName("icon"),
                  n = this.variableAttribute_1.getChildByName("number");
                null != this.curLevelData.param01
                  ? ((this.variableAttribute.active = !0),
                    "1003" == this.staticUnitData.id ||
                    "1004" == this.staticUnitData.id ||
                    "1015" == this.staticUnitData.id ||
                    "1018" == this.staticUnitData.id
                      ? (cc.loader.loadRes(
                          "collect/icon_left",
                          cc.SpriteFrame,
                          function (e, o) {
                            null == e
                              ? (t.getComponent(cc.Sprite).spriteFrame = o)
                              : console.log(e);
                          }.bind(this)
                        ),
                        (e.getComponent(cc.Label).string =
                          this.curLevelData.param01))
                      : "1010" == this.staticUnitData.id ||
                        "1011" == this.staticUnitData.id ||
                        "1012" == this.staticUnitData.id ||
                        "1013" == this.staticUnitData.id ||
                        "1022" == this.staticUnitData.id
                      ? (cc.loader.loadRes(
                          "collect/icon_hottime",
                          cc.SpriteFrame,
                          function (e, o) {
                            null == e
                              ? (t.getComponent(cc.Sprite).spriteFrame = o)
                              : console.log(e);
                          }.bind(this)
                        ),
                        (e.getComponent(cc.Label).string =
                          this.curLevelData.param01))
                      : "1009" == this.staticUnitData.id
                      ? (cc.loader.loadRes(
                          "collect/icon_dh",
                          cc.SpriteFrame,
                          function (e, o) {
                            null == e
                              ? (t.getComponent(cc.Sprite).spriteFrame = o)
                              : console.log(e);
                          }.bind(this)
                        ),
                        (e.getComponent(cc.Label).string =
                          this.curLevelData.param01))
                      : "1014" == this.staticUnitData.id
                      ? (cc.loader.loadRes(
                          "collect/icon_zd",
                          cc.SpriteFrame,
                          function (e, o) {
                            null == e
                              ? (t.getComponent(cc.Sprite).spriteFrame = o)
                              : console.log(e);
                          }.bind(this)
                        ),
                        (e.getComponent(cc.Label).string =
                          this.curLevelData.param01))
                      : ("1016" != this.staticUnitData.id &&
                          "1017" != this.staticUnitData.id) ||
                        (cc.loader.loadRes(
                          "collect/icon_timeleft",
                          cc.SpriteFrame,
                          function (e, o) {
                            null == e
                              ? (t.getComponent(cc.Sprite).spriteFrame = o)
                              : console.log(e);
                          }.bind(this)
                        ),
                        (e.getComponent(cc.Label).string =
                          this.curLevelData.param01)))
                  : (this.variableAttribute.active = !1),
                  null != this.curLevelData.param02
                    ? ((this.variableAttribute_1.active = !0),
                      cc.loader.loadRes(
                        "collect/icon_zd",
                        cc.SpriteFrame,
                        function (t, e) {
                          null == t
                            ? (o.getComponent(cc.Sprite).spriteFrame = e)
                            : console.log(t);
                        }.bind(this)
                      ),
                      (n.getComponent(cc.Label).string =
                        this.curLevelData.param02))
                    : (this.variableAttribute_1.active = !1);
              }),
              (e.prototype.loadRes = function () {
                switch (
                  (cc.loader.loadRes(
                    "Unit/" + this.iconUrl,
                    cc.SpriteFrame,
                    function (t, e) {
                      null == t &&
                        (this.icon.getComponent(cc.Sprite).spriteFrame = e);
                    }.bind(this)
                  ),
                  console.error("this.titleNameUrl:", this.titleNameUrl),
                  (this.icon_ItemName.active = !1),
                  (this.icon_ItemNameLable.active = !0),
                  this.titleNameUrl)
                ) {
                  case "1":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Quad Armor";
                    break;
                  case "2":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Tri Armor";
                    break;
                  case "3":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Off-road Wheel";
                    break;
                  case "4":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Small Off-road Wheel";
                    break;
                  case "5":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Wheel";
                    break;
                  case "6":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Small Wheel";
                    break;
                  case "7":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Quad Armor";
                    break;
                  case "8":
                    this.icon_ItemNameLable.getComponent(cc.Label).string = "";
                    break;
                  case "9":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Thrust Spear";
                    break;
                  case "10":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Crossbow";
                    break;
                  case "11":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Machine Gun";
                    break;
                  case "12":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Cannon";
                    break;
                  case "13":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Mortar";
                    break;
                  case "14":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "TNT";
                    break;
                  case "15":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Engine";
                    break;
                  case "16":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Fuel";
                    break;
                  case "17":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Rocket";
                    break;
                  case "18":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Fan";
                    break;
                  case "19":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Spring";
                    break;
                  case "20":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Tri Armor";
                    break;
                  case "21":
                    this.icon_ItemNameLable.getComponent(cc.Label).string = "";
                    break;
                  case "22":
                    this.icon_ItemNameLable.getComponent(cc.Label).string =
                      "Saw";
                }
              }),
              (e.prototype.setProgress = function () {
                -1 != this.curLevelData.upgrade_card
                  ? ((this.progress.getComponent(cc.ProgressBar).progress =
                      this.staticUnitData.pieceCount /
                      this.curLevelData.upgrade_card),
                    (this.progressLabel.string =
                      this.staticUnitData.pieceCount +
                      "/" +
                      this.curLevelData.upgrade_card))
                  : ((this.progress.getComponent(cc.ProgressBar).progress = 1),
                    (this.upgradeButton.active = !1),
                    (this.icon_Max_Big.active = !0),
                    (this.icon_Max_Small.active = !0),
                    (this.progressLabel.node.active = !1));
              }),
              (e.prototype.setUpGradeUI = function () {
                (this.allEXAddIcon.active = !1),
                  (this.allEXAddLabel.node.active = !1),
                  this.nextLevelData.maxCount - this.curLevelData.maxCount <= 0
                    ? ((this.numAddLabel.node.active = !1),
                      (this.numAddIcon.active = !1))
                    : ((this.numAddLabel.string =
                        this.nextLevelData.maxCount -
                        this.curLevelData.maxCount +
                        ""),
                      (this.numAddLabel.node.active = !0),
                      (this.numAddIcon.active = !0)),
                  this.nextLevelData.hp - this.curLevelData.hp <= 0
                    ? ((this.hpAddIcon.active = !1),
                      (this.hpAddLabel.node.active = !1))
                    : ((this.hpAddLabel.string =
                        this.nextLevelData.hp - this.curLevelData.hp + ""),
                      (this.hpAddIcon.active = !0),
                      (this.hpAddLabel.node.active = !0)),
                  this.nextLevelData.param01 - this.curLevelData.param01 <= 0
                    ? ((this.variablePropertiesAddLabel.node.active = !1),
                      (this.variablePropertiesAddIcon.active = !1))
                    : ((this.variablePropertiesAddLabel.string =
                        (
                          this.nextLevelData.param01 - this.curLevelData.param01
                        ).toFixed(2) + ""),
                      (this.variablePropertiesAddLabel.node.active = !0),
                      (this.variablePropertiesAddIcon.active = !0)),
                  this.nextLevelData.param02 - this.curLevelData.param02 <= 0
                    ? ((this.variablePropertiesAddLabel_1.node.active = !1),
                      (this.variablePropertiesAddIcon_1.active = !1))
                    : ((this.variablePropertiesAddLabel_1.string =
                        (
                          this.nextLevelData.param02 - this.curLevelData.param02
                        ).toFixed(2) + ""),
                      (this.variablePropertiesAddLabel_1.node.active = !0),
                      (this.variablePropertiesAddIcon_1.active = !0)),
                  this.setProgress();
              }),
              (e.prototype.onEvent_btn_upGrade = function () {
                -1 != this.curLevelData.upgrade_gear &&
                  (this.curLevelData.upgrade_card <=
                  this.staticUnitData.pieceCount
                    ? s.default.RuntimeData.curGears >=
                      this.curLevelData.upgrade_gear
                      ? (s.default.AdjustGear(-this.curLevelData.upgrade_gear),
                        s.default.AdjustUnitPiece(
                          this.staticUnitData.id,
                          -this.curLevelData.upgrade_card
                        ),
                        s.default.UnitUpGrade(this.staticUnitData.id),
                        this.refreshUI(),
                        p.default.collectNode()
                          ? f.default.instance.refreshUI()
                          : p.default.fightPrepareNode() &&
                            u.default.instance.pushItem(
                              d.ENUM_UnitType.ENUM_ALL
                            ))
                      : p.default.ShowUI_Notification("Not enough gears")
                    : p.default.ShowUI_Notification("Not enough fragments"));
              }),
              (e.prototype.onEvent_btn_tips = function () {
                p.default.ShowUI_Tips("unitIntroduce");
              }),
              (e.prototype.onEvent_btn_close = function () {
                cc
                  .tween(this.node.getChildByName("black"))
                  .to(0.2, { opacity: 0 })
                  .start(),
                  cc
                    .tween(this.node.getChildByName("panel"))
                    .to(0.2, { scale: 0 })
                    .call(
                      function () {
                        (this.node.active = !1),
                          this.node.removeFromParent(),
                          this.node.destroy();
                      }.bind(this)
                    )
                    .start();
              }),
              c([m(cc.Node)], e.prototype, "icon_ItemName", void 0),
              c([m(cc.Node)], e.prototype, "icon_ItemNameLable", void 0),
              c([m(cc.Node)], e.prototype, "num", void 0),
              c([m(cc.Node)], e.prototype, "energy", void 0),
              c([m(cc.Node)], e.prototype, "level", void 0),
              c([m(cc.Node)], e.prototype, "icon", void 0),
              c([m(cc.Node)], e.prototype, "interoduce", void 0),
              c([m(cc.Node)], e.prototype, "weight", void 0),
              c([m(cc.Node)], e.prototype, "boxNum", void 0),
              c([m(cc.Node)], e.prototype, "health", void 0),
              c([m(cc.Node)], e.prototype, "variableAttribute", void 0),
              c([m(cc.Node)], e.prototype, "variableAttribute_1", void 0),
              c([m(cc.Node)], e.prototype, "upgradeButton", void 0),
              c([m(cc.Label)], e.prototype, "coseGearNum", void 0),
              c([m(cc.Node)], e.prototype, "progress", void 0),
              c([m(cc.Label)], e.prototype, "progressLabel", void 0),
              c([m(cc.Node)], e.prototype, "unitName", void 0),
              c([m(cc.Node)], e.prototype, "btn_ad", void 0),
              c([m(cc.Node)], e.prototype, "numAddIcon", void 0),
              c([m(cc.Node)], e.prototype, "hpAddIcon", void 0),
              c([m(cc.Node)], e.prototype, "variablePropertiesAddIcon", void 0),
              c(
                [m(cc.Node)],
                e.prototype,
                "variablePropertiesAddIcon_1",
                void 0
              ),
              c([m(cc.Node)], e.prototype, "allEXAddIcon", void 0),
              c([m(cc.Label)], e.prototype, "numAddLabel", void 0),
              c([m(cc.Label)], e.prototype, "hpAddLabel", void 0),
              c(
                [m(cc.Label)],
                e.prototype,
                "variablePropertiesAddLabel",
                void 0
              ),
              c(
                [m(cc.Label)],
                e.prototype,
                "variablePropertiesAddLabel_1",
                void 0
              ),
              c([m(cc.Label)], e.prototype, "allEXAddLabel", void 0),
              c([m(cc.Node)], e.prototype, "icon_Max_Big", void 0),
              c([m(cc.Node)], e.prototype, "icon_Max_Small", void 0),
              c([y], e)
            );
          })(cc.Component);
        (a.default = _), cc._RF.pop();
      },
      {},
    ],
    UI_Collect: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "23604uh8/ROP6DI12Um+XNd", "UI_Collect");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("StaticData"),
          d = i("EnumDefiner"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.Collect_List_Unit_item = null),
                (e.unit_itemLayout = null),
                (e.panel = null),
                (e.unitData = []),
                e
              );
            }
            var o;
            return (
              r(e, t),
              (o = e),
              (e.prototype.onLoad = function () {
                o.instance = this;
              }),
              (e.prototype.ShowUI_Collect = function () {
                (this.panel.scale = 0),
                  cc
                    .tween(this.panel)
                    .to(0.3, { scale: 1 }, { easing: "quadOut" })
                    .start();
                for (var t = 0; t < 4; t++)
                  (this.unit_item_pool = new cc.NodePool()),
                    this.unit_item_pool.put(
                      cc.instantiate(this.Collect_List_Unit_item)
                    );
                this.refreshUI();
              }),
              (e.prototype.refreshUI = function () {
                this.unitData = [];
                for (
                  var t = 0;
                  t < s.default.RuntimeData.unitLevelData.length;
                  t++
                ) {
                  var e = s.default.RuntimeData.unitLevelData[t],
                    o = l.default.GetUnitDataByIDAndLv(e.id, e.level);
                  this.unitData.push({
                    id: o.id,
                    level: e.level,
                    pieceCount: e.pieceCount,
                    group: o.group,
                    canUseNum: o.maxCount,
                  });
                }
                this.pushItem(d.ENUM_UnitType.ENUM_ALL);
              }),
              (e.prototype.pushItem = function (t) {
                this.unit_itemLayout.removeAllChildren();
                for (var e = 0; e < this.unitData.length; e++)
                  if ("1000" != this.unitData[e].id)
                    if (t == d.ENUM_UnitType.ENUM_ALL) {
                      var o = null;
                      (o =
                        this.unit_item_pool.size() > 0
                          ? this.unit_item_pool.get()
                          : cc.instantiate(
                              this.Collect_List_Unit_item
                            )).setParent(this.unit_itemLayout),
                        (o.active = !0),
                        o
                          .getComponent("Collect_List_Unit_item")
                          .Show_Collect_Unit_item(this.unitData[e]);
                    } else
                      this.unitData[e].group == t &&
                        ((o = null),
                        (o =
                          this.unit_item_pool.size() > 0
                            ? this.unit_item_pool.get()
                            : cc.instantiate(
                                this.Collect_List_Unit_item
                              )).setParent(this.unit_itemLayout),
                        (o.active = !0),
                        o
                          .getComponent("Collect_List_Unit_item")
                          .Show_Collect_Unit_item(this.unitData[e]));
              }),
              (e.prototype.onEvent_btn_ChangeGroup = function (t) {
                switch (t.node.name) {
                  case "all":
                    this.pushItem(d.ENUM_UnitType.ENUM_ALL);
                    break;
                  case "frames":
                    this.pushItem(d.ENUM_UnitType.ENUM_FRAME);
                    break;
                  case "wheels":
                    this.pushItem(d.ENUM_UnitType.ENUM_WHEEL);
                    break;
                  case "melee_weapons":
                    this.pushItem(d.ENUM_UnitType.ENUM_MELEEWEAPON);
                    break;
                  case "range_weapons":
                    this.pushItem(d.ENUM_UnitType.ENUM_RANGEWEAPON);
                    break;
                  case "technology":
                    this.pushItem(d.ENUM_UnitType.ENUM_TECH);
                }
              }),
              (e.prototype.onEvent_btn_close = function () {
                cc.tween(this.panel)
                  .to(0.3, { scale: 0 }, { easing: "backIn" })
                  .call(
                    function () {
                      (this.node.active = !1),
                        this.node.removeFromParent(),
                        this.node.destroy();
                    }.bind(this)
                  )
                  .start();
              }),
              (e.instance = null),
              c([f(cc.Node)], e.prototype, "Collect_List_Unit_item", void 0),
              c([f(cc.Node)], e.prototype, "unit_itemLayout", void 0),
              c([f(cc.Node)], e.prototype, "panel", void 0),
              (o = c([p], e))
            );
          })(cc.Component);
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    UI_Counting: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "1c402a8xoBCCqiZfBO+45GU", "UI_Counting");
        var i = o,
          a = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          l = c.property,
          d = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.countingFrameList = []), (e.curValue = 0), e;
            }
            return (
              a(e, t),
              (e.prototype.ShowUI_StartCounting = function (t) {
                (this.finishCallback = t),
                  (this.curValue = 0),
                  this.DoAction_CountOnce();
              }),
              (e.prototype.DoAction_CountOnce = function () {
                if (this.curValue < this.countingFrameList.length) {
                  var t = this.node.getChildByName("countIcon");
                  (t.getComponent(cc.Sprite).spriteFrame =
                    this.countingFrameList[this.curValue]),
                    this.curValue++,
                    (t.scale = 1),
                    (t.opacity = 255),
                    cc.Tween.stopAllByTarget(t),
                    cc
                      .tween(t)
                      .to(0.2, { scale: 2 }, { easing: "sineIn" })
                      .to(0.8, { scale: 1 }, { easing: "sineOut" })
                      .call(this.DoAction_CountOnce.bind(this))
                      .start(),
                    cc.tween(t).delay(0.4).to(0.6, { opacity: 0 }).start();
                } else
                  null != this.finishCallback && this.finishCallback(),
                    this.node.destroy();
              }),
              r(
                [l([cc.SpriteFrame])],
                e.prototype,
                "countingFrameList",
                void 0
              ),
              r([s], e)
            );
          })(cc.Component);
        (i.default = d), cc._RF.pop();
      },
      {},
    ],
    UI_FightPrepare: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "54b306LGL5M/b6IMUB2vI0k", "UI_FightPrepare");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("StaticData"),
          d = i("Prepare_List_Unit_item"),
          u = i("GamePlatform"),
          p = i("Config"),
          f = i("EnumDefiner"),
          h = i("EventManager"),
          y = i("GameUtil"),
          m = i("UIManager"),
          _ = cc._decorator,
          g = _.ccclass,
          v = _.property,
          b = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.Prepare_List_Unit_item = null),
                (e.unit_itemLayout = null),
                (e.itemScrollView = null),
                (e.itemList2 = null),
                (e.showCarNode = null),
                (e.levelEnergy = null),
                (e.guideMask = null),
                (e.guidePoint = null),
                (e.startButton = null),
                (e.levelLabel = null),
                (e.heartLabel = null),
                (e.unitNode = null),
                (e.spotList = []),
                (e.cellList = []),
                (e._guideCarModel = [
                  { id: "1003", dirType: 0, posIntX: 2, posIntY: 2, level: 1 },
                  { id: "1001", dirType: 0, posIntX: 2, posIntY: 3, level: 1 },
                  { id: "1000", dirType: 0, posIntX: 3, posIntY: 3, level: 1 },
                  { id: "1003", dirType: 0, posIntX: 4, posIntY: 2, level: 1 },
                  { id: "1001", dirType: 0, posIntX: 4, posIntY: 3, level: 1 },
                ]),
                (e.Spell_Unit_item = null),
                (e.allItemList = []),
                (e.unitData = []),
                (e.curEnergy = 0),
                (e.currentLevelTotalEnergy = 60),
                e
              );
            }
            var o;
            return (
              r(e, t),
              (o = e),
              (e.prototype.Show_FightPrepare = function () {
                s.default.RuntimeData.firstGame &&
                  (m.default.ShowUI_Guide(),
                  (this.node.getChildByName("btn_pur").active = !1)),
                  (this.unit_item_pool = new cc.NodePool());
                for (var t = 0; t < 4; t++)
                  this.unit_item_pool.put(
                    cc.instantiate(this.Prepare_List_Unit_item)
                  );
                this.refreshUI(),
                  this.pushItem(f.ENUM_UnitType.ENUM_ALL),
                  this.addDriver();
                var e = l.default.GetLevelDataById(s.default.curLevelId);
                null != e || void 0 != e
                  ? ((this.levelLabel.string =
                      e.name + "-" + (s.default.curLevelSmallIdx + 1)),
                    (this.heartLabel.string =
                      s.default.curHeart + "/" + e.heartCount))
                  : ((this.levelLabel.string = "-"),
                    (this.heartLabel.string = "/"));
              }),
              (e.prototype.onLoad = function () {
                o.instance = this;
                for (var t = 0; t < 8; t++) {
                  for (var e = [], n = [], i = 0; i < 7; i++)
                    e.push(this.itemList2.children[7 * t + i]), n.push(null);
                  this.spotList.push(e), this.cellList.push(n);
                }
                h.default.on(
                  p.default.ENERGY_CHANGE,
                  this.onEnent_GameEnergy_Change,
                  this
                ),
                  h.default.emit(p.default.ENERGY_CHANGE, 0);
              }),
              (e.prototype.onDisable = function () {
                h.default.off(
                  p.default.ENERGY_CHANGE,
                  this.onEnent_GameEnergy_Change
                );
              }),
              (e.prototype.onEvent_guide_energy = function () {
                (this.guideMask.active = !0),
                  (this.guideMask.width = 176),
                  (this.guideMask.height = 56),
                  (this.guideMask.x = this.levelEnergy.node.parent.x - 5),
                  (this.guideMask.y = this.levelEnergy.node.parent.y),
                  u.default.SDK.onBegin("1003"),
                  u.default.SDK.onCompleted("1003");
              }),
              (e.prototype.onEvent_guide_heart = function () {
                var t = this.heartLabel.node.parent.x,
                  e = this.heartLabel.node.parent.y;
                cc
                  .tween(this.guideMask)
                  .to(0.5, { position: cc.v2(t - 8, e) }, { easing: "quadOut" })
                  .start(),
                  u.default.SDK.onBegin("1004"),
                  u.default.SDK.onCompleted("1004");
              }),
              (e.prototype.onEvent_guide_point = function () {
                (this.guideMask.active = !0),
                  (this.guidePoint.active = !0),
                  (this.guidePoint.x = y.default.GetNodeWorldPositionForUINode(
                    this.itemScrollView.children[0].children[0].children[6]
                  ).x),
                  (this.guidePoint.y = y.default.GetNodeWorldPositionForUINode(
                    this.itemScrollView.children[0].children[0].children[6]
                  ).y),
                  (this.guideMask.width = 130),
                  (this.guideMask.height = 192),
                  (this.guideMask.x = y.default.GetNodeWorldPositionForUINode(
                    this.itemScrollView.children[0].children[0].children[6]
                  ).x),
                  (this.guideMask.y = y.default.GetNodeWorldPositionForUINode(
                    this.itemScrollView.children[0].children[0].children[6]
                  ).y),
                  this.guidePoint
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "animation", !0);
                var t = this.guidePoint.x,
                  e = this.guidePoint.y,
                  o = cc
                    .tween(this.guidePoint)
                    .to(1, {
                      position: y.default.GetNodeWorldPositionForUINode(
                        this.showCarNode.children[0].children[38]
                      ),
                    })
                    .call(
                      function () {
                        cc.tween(this)
                          .delay(1)
                          .call(function () {
                            i.start();
                          })
                          .start();
                      }.bind(this)
                    ),
                  n = cc
                    .tween(this.guidePoint)
                    .to(1, { position: cc.v2(t, e) })
                    .call(
                      function () {
                        cc.tween(this)
                          .delay(1)
                          .call(function () {
                            o.start();
                          })
                          .start();
                      }.bind(this)
                    ),
                  i = cc
                    .tween(this.guidePoint)
                    .to(1, {
                      position: y.default.GetNodeWorldPositionForUINode(
                        this.startButton
                      ),
                    })
                    .call(
                      function () {
                        cc.tween(this)
                          .delay(3)
                          .call(function () {
                            n.start();
                          })
                          .start();
                      }.bind(this)
                    );
                o.start(),
                  u.default.SDK.onBegin("1005"),
                  u.default.SDK.onCompleted("1005");
              }),
              (e.prototype.onEvent_guide_closePoint = function () {
                (this.guideMask.active = !1), (this.guidePoint.active = !1);
              }),
              (e.prototype.refreshUI = function () {
                this.unitData = [];
                for (
                  var t = 0;
                  t < s.default.RuntimeData.unitLevelData.length;
                  t++
                ) {
                  var e = s.default.RuntimeData.unitLevelData[t],
                    o = l.default.GetUnitDataByIDAndLv(e.id, e.level);
                  this.unitData.push({
                    id: o.id,
                    level: e.level,
                    pieceCount: e.pieceCount,
                    group: o.group,
                    canUseNum: o.maxCount,
                  });
                }
              }),
              (e.prototype.pushItem = function (t) {
                this.unit_itemLayout.removeAllChildren(),
                  (this.allItemList = []);
                for (var e = 0; e < this.allItemList.length; e++)
                  this.allItemList[e] = null;
                for (e = 0; e < this.unit_itemLayout.children.length; e++)
                  this.unit_itemLayout.children[e] = null;
                for (e = 1; e < this.unitData.length; e++)
                  if (t == f.ENUM_UnitType.ENUM_ALL) {
                    var o = null;
                    (o =
                      this.unit_item_pool.size() > 0
                        ? this.unit_item_pool.get()
                        : cc.instantiate(
                            this.Prepare_List_Unit_item
                          )).setParent(this.unit_itemLayout),
                      (o.active = !0),
                      o
                        .getComponent("Prepare_List_Unit_item")
                        .Show_Prepare_Unit_item(this.unitData[e]),
                      this.allItemList.push(o);
                  } else
                    this.unitData[e].group == t &&
                      ((o = null),
                      (o =
                        this.unit_item_pool.size() > 0
                          ? this.unit_item_pool.get()
                          : cc.instantiate(
                              this.Prepare_List_Unit_item
                            )).setParent(this.unit_itemLayout),
                      (o.active = !0),
                      o
                        .getComponent("Prepare_List_Unit_item")
                        .Show_Prepare_Unit_item(this.unitData[e]),
                      this.allItemList.push(o));
                var n = this.node
                  .getChildByName("bottomNode")
                  .getChildByName("cangeCarModelBtnNode");
                for (e = 0; e < n.children.length; e++)
                  e == s.default.RuntimeData.curCarModelIndex
                    ? (n.children[e].getChildByName("label").color = cc.color(
                        255,
                        255,
                        255,
                        255
                      ))
                    : (n.children[e].getChildByName("label").color = cc.color(
                        91,
                        12,
                        163,
                        255
                      ));
              }),
              (e.prototype.addDriver = function () {
                this.refreshUI(), this.pushItem(f.ENUM_UnitType.ENUM_ALL);
                var t =
                  s.default.RuntimeData.carModel[
                    s.default.RuntimeData.curCarModelIndex
                  ];
                if (s.default.RuntimeData.firstGame) {
                  console.error("\u66f4\u65b0_guideCarModel");
                  for (var e = 0; e < this._guideCarModel.length; e++) {
                    var o = this.getNewCellItem(
                      this._guideCarModel[e].id,
                      this._guideCarModel[e].dirType
                    );
                    this.addNewCellAtPos(
                      o,
                      this._guideCarModel[e].posIntX,
                      this._guideCarModel[e].posIntY,
                      this._guideCarModel[e].dirType
                    );
                  }
                } else {
                  if (
                    1 == s.default.clickInLevel &&
                    ((s.default.clickInLevel = !1),
                    s.default.videoUnitList.length > 0)
                  ) {
                    for (e = 0; e < s.default.videoUnitList.length; e++)
                      for (var n = 0; n < t.length; n++)
                        t[n].id == s.default.videoUnitList[e] &&
                          (this.removeCellAtPos(t[n].posIntX, t[n].posIntY),
                          (t[n] = null),
                          t.splice(n, 1),
                          s.default.videoUnitList.splice(e, 1));
                    s.default.SaveData();
                  }
                  if (t.length <= 0)
                    cc.loader.loadRes(
                      p.default.DRIVER_ICON,
                      cc.SpriteFrame,
                      function (t, e) {
                        if (null == t) {
                          (this.curEnergy = 0),
                            h.default.emit(
                              p.default.ENERGY_CHANGE,
                              this.curEnergy
                            );
                          var o = this.getNewCellItem("1000", 0);
                          this.addNewCellAtPos(o, 3, 3, 0);
                        }
                      }.bind(this)
                    );
                  else {
                    for (
                      this.curEnergy = 0,
                        h.default.emit(p.default.ENERGY_CHANGE, this.curEnergy),
                        e = 0;
                      e < t.length;
                      e++
                    ) {
                      var i = t[e],
                        a = 0;
                      for (
                        a += (o = this.getNewCellItem(i.id, i.dirType)).unitData
                          .energy,
                          h.default.emit(p.default.ENERGY_CHANGE, a),
                          this.addNewCellAtPos(
                            o,
                            i.posIntX,
                            i.posIntY,
                            i.dirType
                          ),
                          n = 0;
                        n < this.allItemList.length;
                        n++
                      )
                        i.id ==
                          this.allItemList[n].getComponent(d.default).unitData
                            .id &&
                          this.allItemList[n]
                            .getComponent(d.default)
                            .onEvent_List_Item_Change(-1);
                    }
                    this.judgeConnectAble();
                  }
                  s.default.enemyCarModel = [];
                }
              }),
              (e.prototype.onEvent_btn_ChangeGroup = function (t) {
                switch (t.node.name) {
                  case "all":
                    this.pushItem(f.ENUM_UnitType.ENUM_ALL),
                      this.setUnitGroupLabelActive(t.node.name);
                    break;
                  case "frames":
                    this.pushItem(f.ENUM_UnitType.ENUM_FRAME),
                      this.setUnitGroupLabelActive(t.node.name);
                    break;
                  case "wheels":
                    this.pushItem(f.ENUM_UnitType.ENUM_WHEEL),
                      this.setUnitGroupLabelActive(t.node.name);
                    break;
                  case "melee_weapons":
                    this.pushItem(f.ENUM_UnitType.ENUM_MELEEWEAPON),
                      this.setUnitGroupLabelActive(t.node.name);
                    break;
                  case "range_weapons":
                    this.pushItem(f.ENUM_UnitType.ENUM_RANGEWEAPON),
                      this.setUnitGroupLabelActive(t.node.name);
                    break;
                  case "technology":
                    this.pushItem(f.ENUM_UnitType.ENUM_TECH),
                      this.setUnitGroupLabelActive(t.node.name);
                }
              }),
              (e.prototype.onEvent_btn_ChangeCar = function (t) {
                if (
                  (console.log(s.default.RuntimeData.firstGame),
                  1 == s.default.RuntimeData.firstGame)
                )
                  return YYGplatform.showTip("Please complete the guide first");
                switch (t.target.name) {
                  case "car_1":
                    (t.target.parent
                      .getChildByName("car_2")
                      .getChildByName("label").color = cc.color(
                      91,
                      12,
                      163,
                      255
                    )),
                      (t.target.parent
                        .getChildByName("car_3")
                        .getChildByName("label").color = cc.color(
                        91,
                        12,
                        163,
                        255
                      )),
                      (t.target.getChildByName("label").color = cc.color(
                        255,
                        255,
                        255,
                        255
                      )),
                      (s.default.RuntimeData.carModel[
                        s.default.RuntimeData.curCarModelIndex
                      ] = this.action_exportMyCarData()),
                      (s.default.RuntimeData.curCarModelIndex = 0),
                      this.cleanNodeAndSaveData();
                    break;
                  case "car_2":
                    (t.target.parent
                      .getChildByName("car_1")
                      .getChildByName("label").color = cc.color(
                      91,
                      12,
                      163,
                      255
                    )),
                      (t.target.parent
                        .getChildByName("car_3")
                        .getChildByName("label").color = cc.color(
                        91,
                        12,
                        163,
                        255
                      )),
                      (t.target.getChildByName("label").color = cc.color(
                        255,
                        255,
                        255,
                        255
                      )),
                      (s.default.RuntimeData.carModel[
                        s.default.RuntimeData.curCarModelIndex
                      ] = this.action_exportMyCarData()),
                      (s.default.RuntimeData.curCarModelIndex = 1),
                      this.cleanNodeAndSaveData();
                    break;
                  case "car_3":
                    (t.target.parent
                      .getChildByName("car_1")
                      .getChildByName("label").color = cc.color(
                      91,
                      12,
                      163,
                      255
                    )),
                      (t.target.parent
                        .getChildByName("car_2")
                        .getChildByName("label").color = cc.color(
                        91,
                        12,
                        163,
                        255
                      )),
                      (t.target.getChildByName("label").color = cc.color(
                        255,
                        255,
                        255,
                        255
                      )),
                      (s.default.RuntimeData.carModel[
                        s.default.RuntimeData.curCarModelIndex
                      ] = this.action_exportMyCarData()),
                      (s.default.RuntimeData.curCarModelIndex = 2),
                      this.cleanNodeAndSaveData();
                }
              }),
              (e.prototype.setUnitGroupLabelActive = function (t) {
                for (var e = 0; e < this.unitNode.children.length; e++)
                  this.unitNode.children[e].name == t
                    ? (this.unitNode.children[e].getChildByName(
                        "icon_label2"
                      ).active = !0)
                    : ((this.unitNode.children[e].getChildByName(
                        "icon_label1"
                      ).active = !0),
                      (this.unitNode.children[e].getChildByName(
                        "icon_label2"
                      ).active = !1));
              }),
              (e.prototype.onEvent_btn_AllUp = function () {
                for (var t = 1; t < this.showCarNode.children.length; t++)
                  if (this.showCarNode.children[t].y >= 225) return;
                for (var e = this.cellList.length - 1; e >= 0; e--)
                  for (t = this.cellList[e].length - 1; t >= 0; t--)
                    if (null != this.cellList[e][t]) {
                      var o = this.cellList[e][t];
                      (this.cellList[e][t] = null),
                        (o.posIntY += 1),
                        (this.cellList[o.posIntX][o.posIntY] = o);
                      var n = this.spotList[o.posIntX][o.posIntY].position;
                      (o.node.x = n.x), (o.node.y = n.y);
                    }
              }),
              (e.prototype.onEvent_btn_AllDown = function () {
                for (var t = 1; t < this.showCarNode.children.length; t++)
                  if (this.showCarNode.children[t].y <= -225) return;
                for (var e = 0; e <= this.cellList.length - 1; e++) {
                  var o = this.cellList[e];
                  for (t = 0; t <= o.length - 1; t++)
                    if (null != this.cellList[e][t]) {
                      var n = this.cellList[e][t];
                      (this.cellList[e][t] = null),
                        (n.posIntY -= 1),
                        (this.cellList[n.posIntX][n.posIntY] = n);
                      var i = this.spotList[n.posIntX][n.posIntY].position;
                      (n.node.x = i.x), (n.node.y = i.y);
                    }
                }
              }),
              (e.prototype.onEvent_btn_AllLeft = function () {
                for (var t = 1; t < this.showCarNode.children.length; t++)
                  if (this.showCarNode.children[t].x <= -262.5) return;
                for (var e = 0; e <= this.cellList.length - 1; e++) {
                  var o = this.cellList[e];
                  for (t = 0; t <= o.length - 1; t++)
                    if (null != this.cellList[e][t]) {
                      var n = this.cellList[e][t];
                      (this.cellList[e][t] = null),
                        (n.posIntX -= 1),
                        (this.cellList[n.posIntX][n.posIntY] = n);
                      var i = this.spotList[n.posIntX][n.posIntY].position;
                      (n.node.x = i.x), (n.node.y = i.y);
                    }
                }
              }),
              (e.prototype.onEvent_btn_AllRight = function () {
                for (var t = 1; t < this.showCarNode.children.length; t++)
                  if (this.showCarNode.children[t].x >= 262.5) return;
                for (var e = this.cellList.length - 1; e >= 0; e--)
                  for (t = this.cellList[e].length - 1; t >= 0; t--)
                    if (null != this.cellList[e][t]) {
                      var o = this.cellList[e][t];
                      (this.cellList[e][t] = null),
                        (o.posIntX += 1),
                        (this.cellList[o.posIntX][o.posIntY] = o);
                      var n = this.spotList[o.posIntX][o.posIntY].position;
                      (o.node.x = n.x), (o.node.y = n.y);
                    }
              }),
              (e.prototype.onEvent_btn_ClearCar = function () {
                m.default.ShowUI_Tips("clearCar");
              }),
              (e.prototype.cleanCar = function () {
                (s.default.RuntimeData.carModel[
                  s.default.RuntimeData.curCarModelIndex
                ] = []),
                  this.cleanNodeAndSaveData();
              }),
              (e.prototype.cleanNodeAndSaveData = function () {
                for (var t = 0; t < this.cellList.length; t++)
                  for (var e = 0; e < this.cellList.length; e++)
                    null != this.cellList[t][e] &&
                      (this.cellList[t][e].node.destroy(),
                      (this.cellList[t][e] = null));
                this.addDriver(), s.default.SaveData();
              }),
              (e.prototype.onEvent_btn_Fight = function () {
                s.default.RuntimeData.carModel[
                  s.default.RuntimeData.curCarModelIndex
                ] = this.action_exportMyCarData();
                var t = l.default.GetLevelDataById(s.default.curLevelId),
                  e = t.enemyList[s.default.curLevelSmallIdx];
                if (
                  ((s.default.enemyCarModel =
                    this.action_exportEnemyCarData(e)),
                  (this.node.active = !1),
                  this.node.destroy(),
                  m.default.ShowUI_Fight(),
                  (m.default.inOrOut = "in"),
                  t && t.name && "" != t.name)
                ) {
                  var o = Number(t.name.replace(/[^\d]/g, ""));
                  u.default.SDK.onBegin(
                    "" + (2e3 + 10 * o + s.default.curLevelSmallIdx + 1)
                  );
                }
              }),
              (e.prototype.onEvent_btn_Back = function () {
                var t = this;
                //Android.showInterstitial();
                h5Ubi.onCallShowInters({
                  onAndroidWebView: () => {
                    console.log("WebView");
                  },
                  onBrowser: () => {
                    console.log("Browser-onEvent_btn_Back2");
                  },
                });
                // YYGplatform.showInterstitial(function () {
                m.default.ShowUI_LevelUiBase();
                t.destroyNode();
                // });
              }),
              (e.prototype.destroyNode = function () {
                (this.node.active = !1), this.node.destroy();
              }),
              (e.prototype.judgeConnectAble = function () {
                for (var t = null, e = [], o = 0; o < this.cellList.length; o++)
                  for (var n = 0; n < this.cellList[o].length; n++)
                    null != this.cellList[o][n] &&
                      ("1000" == this.cellList[o][n].unitData.id
                        ? ((t = this.cellList[o][n]),
                          this.cellList[o][n].showNotConnectIcon(!1))
                        : (this.cellList[o][n].showNotConnectIcon(!0),
                          (this.cellList[o][n].notConnect = !0),
                          e.push(this.cellList[o][n])));
                for (var i = [], a = -1; a <= 1; a++)
                  for (var r = -1; r <= 1; r++)
                    if (Math.abs(a) + Math.abs(r) == 1) {
                      var c = t.posIntX + a,
                        s = t.posIntY + r;
                      if (
                        c >= 0 &&
                        s >= 0 &&
                        c < this.cellList.length &&
                        s <= this.cellList[c].length &&
                        null != this.cellList[c][s]
                      )
                        for (o = e.length - 1; o >= 0; o--)
                          if (e[o] == this.cellList[c][s]) {
                            var l = this.cellList[c][s].unitData;
                            (f = this.checkConnectableReverse(
                              l.connectDir,
                              this.cellList[c][s].dirType,
                              a,
                              r
                            )) &&
                              (this.cellList[c][s].showNotConnectIcon(!1),
                              (this.cellList[c][s].notConnect = !1),
                              i.push(this.cellList[c][s]),
                              e.splice(o, 1));
                            break;
                          }
                    }
                for (; i.length > 0; ) {
                  for (var d = [], u = 0; u < i.length; u++) {
                    var p = i[u];
                    for (a = -1; a <= 1; a++)
                      for (r = -1; r <= 1; r++)
                        if (
                          Math.abs(a) + Math.abs(r) == 1 &&
                          ((c = p.posIntX + a),
                          (s = p.posIntY + r),
                          c >= 0 &&
                            s >= 0 &&
                            c < this.cellList.length &&
                            s <= this.cellList[c].length &&
                            null != this.cellList[c][s])
                        )
                          for (o = e.length - 1; o >= 0; o--) {
                            var f;
                            if (e[o] == this.cellList[c][s])
                              if (
                                ((f = this.checkConnectable(
                                  p.unitData.connectDir,
                                  p.dirType,
                                  a,
                                  r
                                )) &&
                                  ((l = this.cellList[c][s].unitData),
                                  (f = this.checkConnectableReverse(
                                    l.connectDir,
                                    this.cellList[c][s].dirType,
                                    a,
                                    r
                                  ))),
                                f)
                              ) {
                                this.cellList[c][s].showNotConnectIcon(!1),
                                  (this.cellList[c][s].notConnect = !1),
                                  d.push(this.cellList[c][s]),
                                  e.splice(o, 1);
                                break;
                              }
                          }
                  }
                  i = d;
                }
              }),
              (e.prototype.checkConnectable = function (t, e, o, n) {
                var i = !1;
                switch (e) {
                  case 0:
                    t.right && 1 == o && (i = !0),
                      t.left && -1 == o && (i = !0),
                      t.top && 1 == n && (i = !0),
                      t.bottom && -1 == n && (i = !0);
                    break;
                  case 1:
                    t.right && 1 == n && (i = !0),
                      t.left && -1 == n && (i = !0),
                      t.top && -1 == o && (i = !0),
                      t.bottom && 1 == o && (i = !0);
                    break;
                  case 2:
                    t.right && -1 == o && (i = !0),
                      t.left && 1 == o && (i = !0),
                      t.top && -1 == n && (i = !0),
                      t.bottom && 1 == n && (i = !0);
                    break;
                  case 3:
                    t.right && -1 == n && (i = !0),
                      t.left && 1 == n && (i = !0),
                      t.top && 1 == o && (i = !0),
                      t.bottom && -1 == o && (i = !0);
                }
                return i;
              }),
              (e.prototype.checkConnectableReverse = function (t, e, o, n) {
                var i = !1;
                switch (e) {
                  case 0:
                    t.right && -1 == o && (i = !0),
                      t.left && 1 == o && (i = !0),
                      t.top && -1 == n && (i = !0),
                      t.bottom && 1 == n && (i = !0);
                    break;
                  case 1:
                    t.right && -1 == n && (i = !0),
                      t.left && 1 == n && (i = !0),
                      t.top && 1 == o && (i = !0),
                      t.bottom && -1 == o && (i = !0);
                    break;
                  case 2:
                    t.right && 1 == o && (i = !0),
                      t.left && -1 == o && (i = !0),
                      t.top && 1 == n && (i = !0),
                      t.bottom && -1 == n && (i = !0);
                    break;
                  case 3:
                    t.right && 1 == n && (i = !0),
                      t.left && -1 == n && (i = !0),
                      t.top && -1 == o && (i = !0),
                      t.bottom && -1 == o && (i = !0);
                }
                return i;
              }),
              (e.prototype.getNewCellItem = function (t, e) {
                var o = s.default.GetUnitLevelDataById(t),
                  n = l.default.GetUnitDataByIDAndLv(t, o.level),
                  i = cc.instantiate(this.Spell_Unit_item);
                (i.width = 72),
                  (i.height = 72),
                  (i.active = !0),
                  this.itemList2.parent.addChild(i),
                  (i.opacity = 255);
                var a = i.getComponent("Spell_Unit_item");
                return (
                  a.Show_Spell_Unit_item(n),
                  a.showAround(!1),
                  a.showNotConnectIcon(!1),
                  (a.notConnect = !1),
                  (a.dirType = e),
                  a
                );
              }),
              (e.prototype.checkCell = function (t) {
                for (
                  var e = 999999, o = -1, n = -1, i = 0;
                  i < this.spotList.length;
                  i++
                )
                  for (var a = 0; a < this.spotList[i].length; a++) {
                    var r = this.spotList[i][a].position
                      .sub(t.node.position)
                      .mag();
                    r < e && ((e = r), (o = i), (n = a));
                  }
                o >= 0 && n >= 0 && e < 55
                  ? (t.showAround(!1), this.addNewCellAtPos(t, o, n))
                  : t.posIntX >= 0 &&
                    t.posIntY >= 0 &&
                    "1000" == this.cellList[t.posIntX][t.posIntY].unitData.id
                  ? (t.showAround(!1),
                    (t.node.x = this.spotList[t.posIntX][t.posIntY].x),
                    (t.node.y = this.spotList[t.posIntX][t.posIntY].y))
                  : t.doDeath();
              }),
              (e.prototype.addNewCellAtPos = function (t, e, o, n) {
                if (
                  (t.posIntX >= 0 &&
                    t.posIntY >= 0 &&
                    t.posIntX < this.cellList.length &&
                    t.posIntY < this.cellList[t.posIntX].length &&
                    (this.cellList[t.posIntX][t.posIntY] = null),
                  null == this.cellList[e][o])
                ) {
                  (t.posIntX = e), (t.posIntY = o);
                  var i = this.spotList[e][o].position;
                  (t.node.x = i.x),
                    (t.node.y = i.y),
                    (this.cellList[e][o] = t),
                    "unit_item_spelling" ==
                      this.cellList[t.posIntX][t.posIntY].node.name &&
                      h.default.emit(
                        p.default.ENERGY_CHANGE,
                        this.cellList[t.posIntX][t.posIntY].unitData.energy
                      );
                } else this.swapCellAtPos(t, e, o);
                if (void 0 != n)
                  switch (n) {
                    case 0:
                      t.node.angle = 0;
                      break;
                    case 1:
                      t.node.angle = -270;
                      break;
                    case 2:
                      t.node.angle = -180;
                      break;
                    case 3:
                      t.node.angle = -90;
                  }
                else this.judgeConnectAble();
              }),
              (e.prototype.removeCellAtPos = function (t, e) {
                t >= 0 &&
                  e >= 0 &&
                  t < this.cellList.length &&
                  e < this.cellList[t].length &&
                  null != this.cellList[t][e] &&
                  (h.default.emit(
                    p.default.ENERGY_CHANGE,
                    -this.cellList[t][e].unitData.energy
                  ),
                  this.cellList[t][e].node.destroy(),
                  (this.cellList[t][e] = null));
              }),
              (e.prototype.swapCellAtPos = function (t, e, o) {
                if (null != this.cellList[e][o])
                  if (
                    "1000" == this.cellList[e][o].unitData.id &&
                    "unit_item_spelling" == t.node.name
                  )
                    t.node.destroy(), this.removeUnitFromList(t);
                  else {
                    var n = this.cellList[e][o];
                    if (t.posIntX >= 0 && t.posIntY >= 0) {
                      (this.cellList[t.posIntX][t.posIntY] = n),
                        (n.posIntX = t.posIntX),
                        (n.posIntY = t.posIntY);
                      var i = this.spotList[t.posIntX][t.posIntY].position;
                      (n.node.x = i.x), (n.node.y = i.y);
                    } else
                      this.removeUnitFromList(n),
                        h.default.emit(
                          p.default.ENERGY_CHANGE,
                          -n.unitData.energy
                        ),
                        h.default.emit(
                          p.default.ENERGY_CHANGE,
                          t.unitData.energy
                        ),
                        n.node.destroy();
                    (this.cellList[e][o] = null),
                      (t.posIntX = e),
                      (t.posIntY = o),
                      (i = this.spotList[e][o].position),
                      (t.node.x = i.x),
                      (t.node.y = i.y),
                      (this.cellList[e][o] = t);
                  }
              }),
              (e.prototype.removeUnitFromList = function (t) {
                for (var e = 0; e < this.allItemList.length; e++)
                  t.unitData.id ==
                    this.allItemList[e].getComponent(d.default).unitData.id &&
                    this.allItemList[e]
                      .getComponent(d.default)
                      .onEvent_List_Item_Change(1);
              }),
              (e.prototype.onEnent_GameEnergy_Change = function (t) {
                (this.curEnergy += t),
                  (this.levelEnergy.string =
                    this.curEnergy + "/" + this.currentLevelTotalEnergy),
                  this.curEnergy > this.currentLevelTotalEnergy
                    ? ((this.startButton.getComponent(cc.Button).interactable =
                        !1),
                      (this.levelEnergy.node.color = cc.color(255, 0, 0, 255)))
                    : ((this.levelEnergy.node.color = cc.color(
                        255,
                        255,
                        255,
                        255
                      )),
                      (this.startButton.getComponent(cc.Button).interactable =
                        !0));
              }),
              (e.prototype.action_exportMyCarData = function () {
                for (var t = [], e = 0; e < this.cellList.length; e++)
                  for (var o = 0; o < this.cellList.length; o++) {
                    var n = this.cellList[e][o];
                    if (null != n) {
                      var i = {
                        id: n.unitData.id,
                        dirType: n.dirType,
                        posIntX: n.posIntX,
                        posIntY: n.posIntY,
                        level: n.unitData.level,
                        notConnect: n.notConnect,
                      };
                      t.push(i);
                    }
                  }
                return this.action_exportGameData_Anaylsis(t);
              }),
              (e.prototype.action_exportEnemyCarData = function (t) {
                for (
                  var e = l.default.GetEnemyCarDataById(t), o = [], n = 0;
                  n < e.unitList.length;
                  n++
                ) {
                  var i = e.unitList[n];
                  if (null != i) {
                    var a = {
                      id: i.unitId,
                      dirType: i.dirType,
                      posIntX: i.posIntX,
                      posIntY: i.posIntY,
                      level: i.level,
                      notConnect: !1,
                    };
                    o.push(a);
                  }
                }
                return this.action_exportGameData_Anaylsis(o);
              }),
              (e.prototype.action_exportGameData_Anaylsis = function (t) {
                for (var e = 0; e < t.length; e++) {
                  var o = 0;
                  switch (t[e].dirType) {
                    case 1:
                      o = 90;
                      break;
                    case 2:
                      o = 180;
                      break;
                    case 3:
                      o = 270;
                  }
                  t[e].angle = o;
                  var n = t[e].posIntX,
                    i = t[e].posIntY;
                  t[e].position = cc.v2(this.spotList[n][i].position);
                }
                return t;
              }),
              (e.prototype.action_stopScrollView = function () {
                this.itemScrollView.getComponent(cc.ScrollView).enabled = !1;
              }),
              (e.prototype.action_activeScrollView = function (t) {
                (this.itemScrollView.getComponent(cc.ScrollView).enabled = !0),
                  this.itemScrollView
                    .getComponent(cc.ScrollView)
                    ._onTouchEnded(t);
              }),
              (e.instance = null),
              c([v(cc.Node)], e.prototype, "Prepare_List_Unit_item", void 0),
              c([v(cc.Node)], e.prototype, "unit_itemLayout", void 0),
              c([v(cc.Node)], e.prototype, "itemScrollView", void 0),
              c([v(cc.Node)], e.prototype, "itemList2", void 0),
              c([v(cc.Node)], e.prototype, "showCarNode", void 0),
              c([v(cc.Label)], e.prototype, "levelEnergy", void 0),
              c([v(cc.Node)], e.prototype, "guideMask", void 0),
              c([v(cc.Node)], e.prototype, "guidePoint", void 0),
              c([v(cc.Node)], e.prototype, "startButton", void 0),
              c([v(cc.Label)], e.prototype, "levelLabel", void 0),
              c([v(cc.Label)], e.prototype, "heartLabel", void 0),
              c([v(cc.Node)], e.prototype, "unitNode", void 0),
              c([v(cc.Prefab)], e.prototype, "Spell_Unit_item", void 0),
              (o = c([g], e))
            );
          })(cc.Component);
        (a.default = b), cc._RF.pop();
      },
      {},
    ],
    UI_Fight: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "73016ji/TZBWb4lMfIX5pRX", "UI_Fight");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("StaticData"),
          d = i("CarManager"),
          u = i("Unit_Base"),
          p = i("NativeAd"),
          f = i("GamePlatform"),
          h = i("Config"),
          y = i("EnumDefiner"),
          m = i("EventManager"),
          _ = i("GameUtil"),
          g = i("SoundManager"),
          v = i("UIManager"),
          b = cc._decorator,
          N = b.ccclass,
          C = b.property,
          S = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.myCarNode = null),
                (e.enemyCarNode = null),
                (e.left_wall = null),
                (e.right_wall = null),
                (e.healthNode = null),
                (e.health = null),
                (e.landNode = null),
                (e.levelLabel = null),
                (e.giveUpBtn = null),
                (e.native_ad = null),
                (e.isShowNativeAd = !1),
                (e.isFightEnable = !1),
                (e.isOver = !1),
                (e.fightStart = !1),
                (e.fightDuration = 0),
                (e.targetCameraX = 0),
                (e.targetZoomRatio = 0),
                (e.isWin = !1),
                e
              );
            }
            var o;
            return (
              r(e, t),
              (o = e),
              (e.prototype.Show_Fight = function () {
                var t = this;
                s.default.RuntimeData.firstGame && (this.giveUpBtn.active = !1),
                  cc
                    .tween(this.node.getChildByName("black"))
                    .to(1, { opacity: 0 })
                    .start(),
                  (cc.director.getPhysicsManager().enabled = !1),
                  cc
                    .tween(this)
                    .delay(1.5)
                    .call(
                      function () {
                        (cc.director.getPhysicsManager().enabled = !0),
                          (this.fightStart = !0);
                      }.bind(this)
                    )
                    .start(),
                  (this.node.width = cc.winSize.width),
                  (this.node.getChildByName("land").width = cc.winSize.width),
                  (this.left_wall.x =
                    -cc.winSize.width - 2 * this.left_wall.width),
                  this.left_wall.getComponent(cc.RigidBody).syncPosition(!1),
                  (this.right_wall.x =
                    cc.winSize.width + 2 * this.left_wall.width),
                  this.right_wall.getComponent(cc.RigidBody).syncPosition(!1),
                  (this.left_wall.getComponent(cc.RigidBody).onBeginContact =
                    function (e, o, n) {
                      0 == t.isOver && t.contact(n);
                    }),
                  (this.left_wall.getComponent(cc.RigidBody).onPostSolve =
                    function (e, o, n) {
                      0 == t.isOver && t.contact(n);
                    }),
                  (this.right_wall.getComponent(cc.RigidBody).onBeginContact =
                    function (e, o, n) {
                      0 == t.isOver && t.contact(n);
                    }),
                  (this.right_wall.getComponent(cc.RigidBody).onPostSolve =
                    function (e, o, n) {
                      0 == t.isOver && t.contact(n);
                    });
                var e = l.default.GetLevelDataById(s.default.curLevelId);
                (this.levelLabel.string =
                  e.name + "-" + (s.default.curLevelSmallIdx + 1)),
                  this.showNativeAd(),
                  cc
                    .tween(this.node)
                    .delay(f.default.SDK.delayTime)
                    .call(this.autoShowNativeAd.bind(this))
                    .start();
              }),
              (e.prototype.contact = function (t) {
                "unit" == t.node.group &&
                  (t.node.name.indexOf("wheel") >= 0 ||
                  t.node.name.indexOf("spring") >= 0 ||
                  t.node.name.indexOf("spike") >= 0 ||
                  t.node.name.indexOf("saw") >= 0
                    ? t.node.parent.getComponent(u.default).be_Hit(10, !0)
                    : t.node.getComponent(u.default).be_Hit(10, !0));
              }),
              (e.prototype.onLoad = function () {
                (o.instance = this),
                  s.default.isMute ||
                    (g.default.stopMusic(), g.default.playMusicByPath("bgm")),
                  (s.default.judgeCarList = []),
                  (s.default.judgeEnemyCarList = []);
                for (var t = 0; t < 8; t++) {
                  for (var e = [], n = [], i = 0; i < 7; i++)
                    e.push(null), n.push(null);
                  s.default.judgeCarList.push(e),
                    s.default.judgeEnemyCarList.push(n);
                }
                (this.fightDuration = new Date().getTime()),
                  m.default.on(
                    h.default.GAME_OVER,
                    this.onEvent_GameFinish,
                    this
                  ),
                  this.landNode.setSiblingIndex(999999);
              }),
              (e.prototype.onDisable = function () {
                m.default.off(h.default.GAME_OVER, this.onEvent_GameFinish),
                  cc.Tween.stopAllByTarget(this.node),
                  f.default.instance.isNativeAdOn &&
                    f.default.SDK.hideBannerAd();
              }),
              (e.prototype.action_StartSpellCard = function () {
                console.error(
                  "\u8f66\u7684\u6570\u636e\uff1a",
                  s.default.RuntimeData.carModel[
                    s.default.RuntimeData.curCarModelIndex
                  ]
                ),
                  this.addCarUnit(
                    !1,
                    s.default.RuntimeData.carModel[
                      s.default.RuntimeData.curCarModelIndex
                    ],
                    this.myCarNode
                  ),
                  this.speelUnit(
                    s.default.RuntimeData.carModel[
                      s.default.RuntimeData.curCarModelIndex
                    ]
                  ),
                  this.addCarUnit(
                    !0,
                    s.default.enemyCarModel,
                    this.enemyCarNode
                  ),
                  this.speelUnit(s.default.enemyCarModel),
                  this.setCamera(),
                  (this.isFightEnable = !0);
              }),
              (e.prototype.addCarUnit = function (t, e, o) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n].spellUnit;
                  if (o == this.enemyCarNode)
                    switch (i.name) {
                      case "enemy_car_driver":
                      case "ballista":
                      case "cannon":
                      case "machine_gun":
                      case "mortar":
                        i.scaleX = -1;
                    }
                  o.addChild(i),
                    (i.position = e[n].position),
                    (i.angle = e[n].angle);
                  var a = this.createHealthProgress(i);
                  (i.getComponent(u.default).heathProgress = a),
                    this.healthNode.addChild(a),
                    m.default.emit(h.default.EVENT_ADD_HP, i),
                    "1000" == e[n].id &&
                      (t ? (this.enemyCarDriver = i) : (this.myCarDriver = i)),
                    1 == t
                      ? (s.default.judgeEnemyCarList[e[n].posIntX][
                          e[n].posIntY
                        ] = e[n])
                      : (s.default.judgeCarList[e[n].posIntX][e[n].posIntY] =
                          e[n]);
                  var r = l.default.GetUnitDataByIDAndLv(e[n].id, e[n].level);
                  "engine" == i.name &&
                    ((d.default.instance.haveEnergy = !0),
                    (d.default.instance.engineNum = r.param01)),
                    "fuel" == i.name &&
                      ((d.default.instance.haveFuel = !0),
                      (d.default.instance.fuelNum = r.param01));
                }
              }),
              (e.prototype.createHealthProgress = function (t) {
                var e = cc.instantiate(this.health);
                return (
                  (e.active = !0),
                  t.name.indexOf("wheel") >= 0
                    ? e
                        .getComponent("HealthProgress")
                        .initUI_Combat_HPBar(t.getChildByName("wheel_up"))
                    : t.name.indexOf("spike") >= 0
                    ? e
                        .getComponent("HealthProgress")
                        .initUI_Combat_HPBar(t.getChildByName("spike_base"))
                    : t.name.indexOf("spring") >= 0
                    ? e
                        .getComponent("HealthProgress")
                        .initUI_Combat_HPBar(t.getChildByName("spring_middle"))
                    : t.name.indexOf("electric_saw") >= 0
                    ? e
                        .getComponent("HealthProgress")
                        .initUI_Combat_HPBar(t.getChildByName("saw_base"))
                    : e.getComponent("HealthProgress").initUI_Combat_HPBar(t),
                  e
                );
              }),
              (e.prototype.speelUnit = function (t) {
                for (var e = 0; e < t.length; e++)
                  switch (
                    (t[e].spellUnit
                      .getComponent(u.default)
                      .initUnit(t[e].id, t[e].level),
                    t[e].id)
                  ) {
                    case "1000":
                      t[e].isConnect = !0;
                      for (var o = 0; o < t.length; o++)
                        t[e].position.sub(t[o].position).mag() <= 77 &&
                          t[e] != t[o] &&
                          (t[e].spellUnit
                            .getComponent(u.default)
                            .connectAround(t[o].spellUnit),
                          (t[o].isConnect = !0));
                      break;
                    default:
                      for (o = 0; o < t.length; o++)
                        t[e] != t[o] &&
                          (0 == t[e].notConnect
                            ? ("wooden_box" == t[o].spellUnit.name ||
                                "wooden_ramp" == t[o].spellUnit.name ||
                                "iron_box" == t[o].spellUnit.name ||
                                "iron_ramp" == t[o].spellUnit.name ||
                                "fuel" == t[o].spellUnit.name ||
                                "engine" == t[o].spellUnit.name ||
                                "tnt_box" == t[o].spellUnit.name ||
                                t[o].spellUnit.name.indexOf("driver") >= 0) &&
                              (t[e].spellUnit
                                .getComponent(u.default)
                                .connectAround(t[o].spellUnit),
                              (t[e].spellUnit.getComponent(
                                u.default
                              ).connectBody = t[o].spellUnit),
                              (t[o].isConnect = !0))
                            : t[e].spellUnit
                                .getComponent(u.default)
                                .notConnect());
                  }
              }),
              (e.prototype.setCamera = function () {
                (this.fightCamera = cc.Camera.findCamera(this.node)),
                  (this.targetCameraX = 0),
                  (this.targetZoomRatio = 0.6);
              }),
              (e.prototype.update = function (t) {
                if (0 != this.isFightEnable) {
                  0 == this.isOver
                    ? ((this.targetCameraX =
                        (_.default.GetNodeWorldPositionForUINode(
                          this.enemyCarDriver
                        ).x +
                          _.default.GetNodeWorldPositionForUINode(
                            this.myCarDriver
                          ).x) /
                        2),
                      (this.targetZoomRatio =
                        1 -
                        (_.default.GetNodeWorldPositionForUINode(
                          this.enemyCarDriver
                        ).x -
                          _.default.GetNodeWorldPositionForUINode(
                            this.myCarDriver
                          ).x) /
                          1e3 +
                        0.5))
                    : ((this.targetCameraX =
                        this.isWin && 1 == this.isWin
                          ? _.default.GetNodeWorldPositionForUINode(
                              this.enemyCarDriver
                            ).x
                          : _.default.GetNodeWorldPositionForUINode(
                              this.myCarDriver
                            ).x),
                      (this.targetZoomRatio = 1.2)),
                    this.targetZoomRatio >= 1.2
                      ? (this.targetZoomRatio = 1.2)
                      : this.targetZoomRatio <= 0.7 &&
                        (this.targetZoomRatio = 0.7);
                  var e = this.fightCamera.zoomRatio;
                  e > this.targetZoomRatio
                    ? (e -= 1 * t) < this.targetZoomRatio &&
                      (e = this.targetZoomRatio)
                    : (e += 1 * t) > this.targetZoomRatio &&
                      (e = this.targetZoomRatio),
                    (this.fightCamera.zoomRatio = e);
                  var o = this.fightCamera.node.x;
                  o > this.targetCameraX
                    ? (o -= 1e3 * t) < this.targetCameraX &&
                      (o = this.targetCameraX)
                    : (o += 1e3 * t) > this.targetCameraX &&
                      (o = this.targetCameraX),
                    (this.fightCamera.node.x = o);
                }
              }),
              (e.prototype.onEvent_btn_Back = function () {
                h5Ubi.onCallShowInters({
                  onAndroidWebView: () => {
                    console.log("WebView");
                  },
                  onBrowser: () => {
                    console.log("Browser-onEvent_btn_Back3");
                  },
                });
                (cc.director.getPhysicsManager().enabled = !1),
                  v.default.ShowUI_Tips("quitLevel");
              }),
              (e.prototype.action_GiveUp = function () {
                this.resetCamera(),
                  (this.node.active = !1),
                  this.node.destroy(),
                  v.default.ShowUI_FightPrepare();
              }),
              (e.prototype.onEvent_GameFinish = function (t) {
                if (((this.isWin = t), 0 == this.isOver)) {
                  (this.giveUpBtn.getComponent(cc.Button).interactable = !1),
                    (this.isOver = !0);
                  var e = y.ENUM_FINISHTYPE.ENUM_WIN_0;
                  if (t) {
                    s.default.AddLevelSmallIdx();
                    var o = l.default.GetLevelDataById(s.default.curLevelId);
                    s.default.curLevelSmallIdx >= o.enemyList.length &&
                      (e = y.ENUM_FINISHTYPE.ENUM_WIN_1);
                  } else
                    s.default.MinusHeart(),
                      (e = y.ENUM_FINISHTYPE.ENUM_LOSE_0),
                      s.default.curHeart <= 0 &&
                        (e = y.ENUM_FINISHTYPE.ENUM_LOSE_1);
                  if (
                    e == y.ENUM_FINISHTYPE.ENUM_WIN_0 ||
                    e == y.ENUM_FINISHTYPE.ENUM_WIN_1
                  )
                    var n = _.default.GetNodeWorldPositionForUINode(
                        this.enemyCarDriver
                      ).x,
                      i = _.default.GetNodeWorldPositionForUINode(
                        this.enemyCarDriver
                      ).y;
                  else
                    (n = _.default.GetNodeWorldPositionForUINode(
                      this.myCarDriver
                    ).x),
                      (i = _.default.GetNodeWorldPositionForUINode(
                        this.myCarDriver
                      ).y);
                  cc.tween(this)
                    .delay(1.2)
                    .call(
                      function () {
                        cc.loader.loadRes(
                          "Effects/FX_Explode_Test",
                          cc.Prefab,
                          function (t, e) {
                            if (null == t) {
                              var o = cc.instantiate(e);
                              o.setParent(this.node),
                                (o.x = n),
                                (o.y = i),
                                (o.active = !0);
                            }
                          }.bind(this)
                        );
                      }.bind(this)
                    )
                    .start();
                  var a = new Date().getTime();
                  (this.fightDuration = a - this.fightDuration),
                    this.createLevelAnalysisData(e),
                    (cc.director.getPhysicsManager().enabled = !1),
                    cc
                      .tween(this)
                      .delay(3.2)
                      .call(
                        function () {
                          this.resetCamera(),
                            this.node.destroy(),
                            v.default.ShowUI_Finish(e);
                        }.bind(this)
                      )
                      .start();
                }
              }),
              (e.prototype.createLevelAnalysisData = function (t) {
                for (
                  var e,
                    o = [],
                    n = [],
                    i =
                      t == y.ENUM_FINISHTYPE.ENUM_WIN_0 ||
                      t == y.ENUM_FINISHTYPE.ENUM_WIN_1,
                    a = 0;
                  a <
                  s.default.RuntimeData.carModel[
                    s.default.RuntimeData.curCarModelIndex
                  ].length;
                  a++
                ) {
                  switch (
                    l.default.GetUnitDataByIDAndLv(
                      s.default.RuntimeData.carModel[
                        s.default.RuntimeData.curCarModelIndex
                      ][a].id,
                      s.default.RuntimeData.carModel[
                        s.default.RuntimeData.curCarModelIndex
                      ][a].level
                    ).group
                  ) {
                    case y.ENUM_UnitType.ENUM_FRAME:
                      e = "FRAME";
                      break;
                    case y.ENUM_UnitType.ENUM_WHEEL:
                      e = "WHEEL";
                      break;
                    case y.ENUM_UnitType.ENUM_MELEEWEAPON:
                      e = "MELEE";
                      break;
                    case y.ENUM_UnitType.ENUM_RANGEWEAPON:
                      e = "RANGE";
                      break;
                    case y.ENUM_UnitType.ENUM_TECH:
                      e = "TECH";
                  }
                  var r = {
                    uniId: a,
                    id: s.default.RuntimeData.carModel[
                      s.default.RuntimeData.curCarModelIndex
                    ][a].id,
                    group: e,
                  };
                  o.push(r);
                }
                for (a = 0; a < this.myCarNode.children.length; a++)
                  (r = { uniId: a }), n.push(r);
                s.default.createLevelAnalysisData(i, this.fightDuration, o, n);
              }),
              (e.prototype.resetCamera = function () {
                cc.Tween.stopAllByTarget(this.fightCamera),
                  (this.fightCamera.node.x = 0),
                  (this.fightCamera.node.y = 0),
                  (this.fightCamera.zoomRatio = 1);
              }),
              (e.prototype.autoShowNativeAd = function () {
                f.default.SDK.isTimeLoop ||
                  (this.onNativeDestroy(), this.showNativeAd()),
                  console.log("UI_fight--autoShowNativeAd"),
                  f.default.instance.isWX,
                  cc
                    .tween(this.node)
                    .delay(f.default.SDK.delayTime)
                    .call(this.autoShowNativeAd.bind(this))
                    .start();
              }),
              (e.prototype.showNativeAd = function () {
                var t = this;
                f.default.instance.isNativeAdOn
                  ? (f.default.SDK.hideBannerAd(),
                    (this.native_ad.active = !1),
                    this.native_ad
                      .getComponent("NativeAd")
                      .showNativeBigAd(
                        f.default.SDK.NativeAdType.NATIVE_AD_GAME,
                        function (e) {
                          e
                            ? ((t.native_ad.active = !0),
                              (t.isShowNativeAd = !0),
                              f.default.SDK.hideBannerAd())
                            : (f.default.SDK.showBannerAd(
                                h.default.UI_TITLE_BANNER
                              ),
                              (t.native_ad.active = !1));
                        }
                      ),
                    f.default.instance.isVIVO &&
                      f.default.SDK.showInsertAd(h.default.UI_TITLE_INSERT))
                  : ((this.native_ad.active = !1),
                    f.default.SDK.showBannerAd(h.default.UI_TITLE_BANNER));
              }),
              (e.prototype.onNativeDestroy = function () {
                f.default.instance.isNativeAdOn &&
                  this.native_ad &&
                  ((this.native_ad.active = !1),
                  this.native_ad.getComponent("NativeAd").onNativeAdDestroy());
              }),
              (e.prototype.onClickAd = function () {
                this.native_ad &&
                  this.native_ad.getComponent(p.default).onNativeAdClick();
              }),
              (e.instance = null),
              c([C(cc.Node)], e.prototype, "myCarNode", void 0),
              c([C(cc.Node)], e.prototype, "enemyCarNode", void 0),
              c([C(cc.Node)], e.prototype, "left_wall", void 0),
              c([C(cc.Node)], e.prototype, "right_wall", void 0),
              c([C(cc.Node)], e.prototype, "healthNode", void 0),
              c([C(cc.Node)], e.prototype, "health", void 0),
              c([C(cc.Node)], e.prototype, "landNode", void 0),
              c([C(cc.Label)], e.prototype, "levelLabel", void 0),
              c([C(cc.Node)], e.prototype, "giveUpBtn", void 0),
              c([C(cc.Node)], e.prototype, "native_ad", void 0),
              (o = c([N], e))
            );
          })(cc.Component);
        (a.default = S), cc._RF.pop();
      },
      {},
    ],
    UI_Finish: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "5d83c4GAPNPG5FsFQs+ZheO", "UI_Finish");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("GamePlatform"),
          l = i("DataManager"),
          d = i("StaticData"),
          u = i("EnumDefiner"),
          p = i("SoundManager"),
          f = i("UIManager"),
          h = (i("Config"), i("NativeAd"), cc._decorator),
          y = h.ccclass,
          m = h.property,
          _ = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.gameBannerNode = null),
                (e.loseNode = null),
                (e.winNode = null),
                (e.smallWinNode = null),
                (e.bigWinNode = null),
                (e.smallLoseNode = null),
                (e.bigLoseNode = null),
                (e.light = null),
                (e.smallWinSpine = null),
                (e.bigWinSpine = null),
                (e.loseSpine = null),
                (e.yeziSpine = null),
                (e.smallWinStarSpine = null),
                (e.loseStarSpine = null),
                (e.guideMask = null),
                (e.conditionNodeList = []),
                (e.bigLoseButton = null),
                (e.smallLoseButton = null),
                (e.winFinalGearNum = null),
                (e.loseFinalGearNum = null),
                (e.btn_queding = null),
                (e.lab_clickAd = null),
                (e.getGearNum = 0),
                (e.curStar = 0),
                e
              );
            }
            var o;
            return (
              r(e, t),
              (o = e),
              (e.prototype.onLoad = function () {
                (o.instance = this),
                  (cc.director.getPhysicsManager().enabled = !0),
                  l.default.isMute ||
                    (p.default.stopMusic(), p.default.playMusicByPath("bgm"));
              }),
              (e.prototype.onEnable = function () {
                !l.default.RuntimeData.firstGame &&
                  YYGplatform.initGameBanner(this.gameBannerNode, 0.6);
              }),
              (e.prototype.onDisable = function () {}),
              (e.prototype.ShowUI_Finish = function (t) {
                this.finishType = t;
                for (
                  var e = d.default.GetLevelDataById(
                      l.default.curLevelId
                    ).starConditionList,
                    o = 0;
                  o < 3;
                  o++
                ) {
                  var n = l.default.checkStar(
                    e[o].type,
                    e[o].param1,
                    e[o].param2,
                    e[o].param3
                  );
                  (this.conditionNodeList[o]
                    .getChildByName("icon_condition")
                    .getChildByName("icon_right").active = n),
                    n && this.curStar++;
                  var i = d.default.getStarConditionDescription(
                    e[o],
                    l.default.levelAnalysisData
                  );
                  this.conditionNodeList[o]
                    .getChildByName("label_condition")
                    .getComponent(cc.Label).string = i;
                }
                (this.node.getChildByName("black").opacity = 0),
                  (this.node.getChildByName("panel").scale = 0),
                  cc
                    .tween(this.node.getChildByName("black"))
                    .to(0.3, { opacity: 200 })
                    .start(),
                  cc
                    .tween(this.node.getChildByName("panel"))
                    .to(0.3, { scale: 1 })
                    .start(),
                  s.default.instance.isOPPO || s.default.instance.isVIVO
                    ? ((this.btn_queding.x = -107),
                      (this.lab_clickAd.x = 134),
                      (this.lab_clickAd.active = !0))
                    : ((this.btn_queding.x = 0),
                      (this.lab_clickAd.active = !1));
                var a = d.default.GetLevelDataById(l.default.curLevelId);
                switch (t) {
                  case u.ENUM_FINISHTYPE.ENUM_LOSE_0:
                    switch (
                      ((this.winNode.active = !1),
                      (this.loseNode.active = !0),
                      (this.smallLoseNode.active = !0),
                      (this.bigLoseNode.active = !1),
                      (this.light.active = !1),
                      this.loseSpine
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "lostA", !1),
                      this.loseSpine
                        .getComponent(sp.Skeleton)
                        .addAnimation(0, "lostB", !0),
                      this.yeziSpine
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "yezi", !0),
                      this.curStar)
                    ) {
                      case 0:
                        break;
                      case 1:
                        this.loseStarSpine
                          .getComponent(sp.Skeleton)
                          .setAnimation(0, "lostX", !1);
                        break;
                      case 2:
                        this.loseStarSpine
                          .getComponent(sp.Skeleton)
                          .setAnimation(0, "lostXX", !1);
                        break;
                      case 3:
                        this.loseStarSpine
                          .getComponent(sp.Skeleton)
                          .setAnimation(0, "lostXXX", !1);
                    }
                    if (a && a.name && "" != a.name) {
                      var r = {
                        missionId:
                          "" +
                          (2e3 +
                            10 * (c = Number(a.name.replace(/[^\d]/g, ""))) +
                            l.default.curLevelSmallIdx +
                            1),
                        isStop: !0,
                      };
                      s.default.SDK.onFailed(r);
                    }
                    break;
                  case u.ENUM_FINISHTYPE.ENUM_LOSE_1:
                    (this.winNode.active = !1),
                      (this.loseNode.active = !0),
                      (this.smallLoseNode.active = !1),
                      (this.bigLoseNode.active = !0),
                      (this.light.active = !1),
                      this.loseSpine
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "lostBigA", !1),
                      this.loseSpine
                        .getComponent(sp.Skeleton)
                        .addAnimation(0, "lostBigB", !0),
                      this.yeziSpine
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "yezi", !0),
                      (this.loseFinalGearNum.string =
                        2 * l.default.destroyEnemyUnitNum * 5 + ""),
                      (this.getGearNum = l.default.destroyEnemyUnitNum),
                      (l.default.destroyEnemyUnitNum = 0),
                      a &&
                        a.name &&
                        "" != a.name &&
                        ((r = {
                          missionId:
                            "" +
                            (2e3 +
                              10 * (c = Number(a.name.replace(/[^\d]/g, ""))) +
                              l.default.curLevelSmallIdx +
                              1),
                          isStop: !0,
                        }),
                        s.default.SDK.onFailed(r));
                    break;
                  case u.ENUM_FINISHTYPE.ENUM_WIN_0:
                    switch (
                      ((this.winNode.active = !0),
                      (this.bigWinNode.active = !1),
                      (this.smallWinNode.active = !0),
                      (this.loseNode.active = !1),
                      this.smallWinSpine
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "winA", !1),
                      this.curStar)
                    ) {
                      case 0:
                        break;
                      case 1:
                        this.smallWinStarSpine
                          .getComponent(sp.Skeleton)
                          .setAnimation(0, "winX", !1);
                        break;
                      case 2:
                        this.smallWinStarSpine
                          .getComponent(sp.Skeleton)
                          .setAnimation(0, "winXX", !1);
                        break;
                      case 3:
                        this.smallWinStarSpine
                          .getComponent(sp.Skeleton)
                          .setAnimation(0, "winXXX", !1);
                    }
                    if (
                      (this.smallWinSpine
                        .getComponent(sp.Skeleton)
                        .addAnimation(0, "winB", !0),
                      a && a.name && "" != a.name)
                    ) {
                      var c = Number(a.name.replace(/[^\d]/g, ""));
                      s.default.SDK.onCompleted(
                        "" + (2e3 + 10 * c + l.default.curLevelSmallIdx)
                      );
                    }
                    (s.default.instance.isOPPO || s.default.instance.isVIVO) &&
                      l.default.curLevelSmallIdx % 2 == 0 &&
                      ((this.btn_queding.x = 134), (this.lab_clickAd.x = -107));
                    break;
                  case u.ENUM_FINISHTYPE.ENUM_WIN_1:
                    (this.winNode.active = !0),
                      (this.bigWinNode.active = !0),
                      (this.smallWinNode.active = !1),
                      (this.loseNode.active = !1),
                      this.bigWinSpine
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "winBigA", !1),
                      this.bigWinSpine
                        .getComponent(sp.Skeleton)
                        .setAnimation(0, "winBigB", !0),
                      l.default.unLockLevel(l.default.curLevelId),
                      (this.winFinalGearNum.string =
                        2 * l.default.destroyEnemyUnitNum * 5 + ""),
                      (this.getGearNum = l.default.destroyEnemyUnitNum),
                      (l.default.destroyEnemyUnitNum = 0),
                      a &&
                        a.name &&
                        "" != a.name &&
                        ((c = Number(a.name.replace(/[^\d]/g, ""))),
                        s.default.SDK.onCompleted(
                          "" + (2e3 + 10 * c + l.default.curLevelSmallIdx)
                        ));
                }
                l.default.setLevelStar(l.default.curLevelId, this.curStar),
                  l.default.RuntimeData.firstGame &&
                    ((this.guideMask.active = !0),
                    f.default.ShowUI_Guide(),
                    (f.default.guideNode().group = "finish"));
              }),
              (e.prototype.onEvent_guide_Out = function () {
                cc.tween(this)
                  .delay(0.5)
                  .call(
                    function () {
                      (this.guideMask.active = !1),
                        (l.default.RuntimeData.firstGame = !1),
                        f.default.guideNode().destroy(),
                        l.default.SaveData(),
                        YYGplatform.initGameBanner(this.gameBannerNode, 0.6);
                    }.bind(this)
                  )
                  .start();
              }),
              (e.prototype.onEvent_btn_NextLevel = function () {
                this.closeUI(f.default.ShowUI_FightPrepare());
              }),
              (e.prototype.onEvent_btn_backChoiceLevel = function () {
                var t = this;
                YYGplatform.showReward(function () {
                  t.finishType == u.ENUM_FINISHTYPE.ENUM_WIN_1
                    ? l.default.AdjustGear(2 * t.getGearNum * 5)
                    : t.finishType == u.ENUM_FINISHTYPE.ENUM_LOSE_1 &&
                      l.default.AdjustGear(2 * t.getGearNum * 5),
                    console.log(
                      1 == l.default.GetLevelDataById("level_01003").isLocked
                    ),
                    "level_01001" == l.default.curLevelId &&
                    1 == l.default.GetLevelDataById("level_01003").isLocked
                      ? (f.default.ShowUI_LevelUiBase(),
                        t.closeUI(f.default.ShowUI_LoginReward))
                      : "level_01002" == l.default.curLevelId &&
                        1 == l.default.GetLevelDataById("level_01004").isLocked
                      ? (f.default.ShowUI_LevelUiBase(),
                        t.closeUI(f.default.ShowUI_WheelReward))
                      : t.closeUI(f.default.ShowUI_LevelUiBase);
                });
              }),
              (e.prototype.onEvent_btn_backHome = function () {
                h5Ubi.onCallShowInters({
                  onAndroidWebView: () => {
                    console.log("WebView");
                  },
                  onBrowser: () => {
                    console.log("Browser-onEvent_btn_backHome");
                  },
                });

                var t = this;
                // YYGplatform.showInterstitial(function () {
                l.default.AdjustGear(5 * t.getGearNum),
                  "level_01001" == l.default.curLevelId &&
                  1 == l.default.GetLevelDataById("level_01003").isLocked
                    ? (f.default.ShowUI_Title(),
                      t.closeUI(f.default.ShowUI_LoginReward))
                    : "level_01002" == l.default.curLevelId &&
                      1 == l.default.GetLevelDataById("level_01004").isLocked
                    ? (f.default.ShowUI_Title(),
                      t.closeUI(f.default.ShowUI_WheelReward))
                    : t.closeUI(f.default.ShowUI_Title);
                // });
              }),
              (e.prototype.closeUI = function (t) {
                cc
                  .tween(this.node.getChildByName("black"))
                  .to(0.3, { opacity: 0 })
                  .start(),
                  cc
                    .tween(this.node.getChildByName("panel"))
                    .to(0.3, { scale: 0 }, { easing: "backIn" })
                    .call(
                      function () {
                        this.onEvent_btn_close(), t && t();
                      }.bind(this)
                    )
                    .start();
              }),
              (e.prototype.onEvent_btn_close = function () {
                YYGplatform.removeBanner(),
                  (this.node.active = !1),
                  this.node.destroy();
              }),
              (e.instance = null),
              c([m(cc.Node)], e.prototype, "gameBannerNode", void 0),
              c([m(cc.Node)], e.prototype, "loseNode", void 0),
              c([m(cc.Node)], e.prototype, "winNode", void 0),
              c([m(cc.Node)], e.prototype, "smallWinNode", void 0),
              c([m(cc.Node)], e.prototype, "bigWinNode", void 0),
              c([m(cc.Node)], e.prototype, "smallLoseNode", void 0),
              c([m(cc.Node)], e.prototype, "bigLoseNode", void 0),
              c([m(cc.Node)], e.prototype, "light", void 0),
              c([m(cc.Node)], e.prototype, "smallWinSpine", void 0),
              c([m(cc.Node)], e.prototype, "bigWinSpine", void 0),
              c([m(cc.Node)], e.prototype, "loseSpine", void 0),
              c([m(cc.Node)], e.prototype, "yeziSpine", void 0),
              c([m(cc.Node)], e.prototype, "smallWinStarSpine", void 0),
              c([m(cc.Node)], e.prototype, "loseStarSpine", void 0),
              c([m(cc.Node)], e.prototype, "guideMask", void 0),
              c([m([cc.Node])], e.prototype, "conditionNodeList", void 0),
              c([m(cc.Node)], e.prototype, "bigLoseButton", void 0),
              c([m(cc.Node)], e.prototype, "smallLoseButton", void 0),
              c([m(cc.Label)], e.prototype, "winFinalGearNum", void 0),
              c([m(cc.Label)], e.prototype, "loseFinalGearNum", void 0),
              c([m(cc.Node)], e.prototype, "btn_queding", void 0),
              c([m(cc.Node)], e.prototype, "lab_clickAd", void 0),
              (o = c([y], e))
            );
          })(cc.Component);
        (a.default = _), cc._RF.pop();
      },
      {},
    ],
    UI_Guide: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "f3f34ZXRB5GOL73mb5pSl7v", "UI_Guide");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("GamePlatform"),
          d = i("UI_FightPrepare"),
          u = i("UI_Finish"),
          p = i("UI_Title"),
          f = cc._decorator,
          h = f.ccclass,
          y = f.property,
          m = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.panel = null),
                (e.dialogue_content = [
                  "Hey, welcome to the Tank Stars - Battle Arena!",
                  "First start building a small tank of your own!",
                  "Energy represents the upper limit of the num of blocks you can use.",
                  "Heart represents the HP of your tank!",
                  "Now, drag and build your own tank!",
                  "You've got the hang of it! \nEnjoy your play time!",
                ]),
                (e._count = 0),
                e
              );
            }
            var o;
            return (
              r(e, t),
              (o = e),
              (e.prototype.onLoad = function () {
                (o.instance = this),
                  s.default.StartLevel("level_01001"),
                  (this._dialogueLabel = this.panel
                    .getChildByName("talkBg")
                    .getChildByName("label")
                    .getComponent(cc.Label)),
                  (this._black = this.node.getChildByName("black")),
                  (this._npc = this.panel
                    .getChildByName("NPC")
                    .getComponent(sp.Skeleton)),
                  l.default.SDK.onBegin("1002");
              }),
              (e.prototype.ShowUI_Guide = function () {
                console.error("ShowUI_Guide", this._count),
                  (this._dialogueLabel.string =
                    this.dialogue_content[this._count]),
                  this._npc.setAnimation(0, "speak", !0),
                  this.uiIn(),
                  this.textPointer(this.dialogue_content[this._count]),
                  2 == this._count &&
                    (d.default.instance.onEvent_guide_energy(),
                    (this._black.active = !1));
              }),
              (e.prototype.uiIn = function () {
                (this.panel.getComponent(cc.Button).interactable = !0),
                  (this.node.active = !0),
                  (this._black.opacity = 0),
                  (this.panel.getChildByName("talkBg").scale = 0),
                  cc.tween(this._black).to(0.3, { opacity: 180 }).start(),
                  cc
                    .tween(this.panel.getChildByName("talkBg"))
                    .to(0.3, { scale: 1 })
                    .start();
              }),
              (e.prototype.uiOut = function () {
                (this.panel.getComponent(cc.Button).interactable = !1),
                  this._npc.setAnimation(0, "out", !1),
                  cc.tween(this._black).to(0.3, { opacity: 0 }).start(),
                  cc
                    .tween(this.panel.getChildByName("talkBg"))
                    .to(0.3, { scale: 0 })
                    .call(
                      function () {
                        this.node.active = !1;
                      }.bind(this)
                    )
                    .start();
              }),
              (e.prototype.onEvent_btn_nextDialogue = function () {
                console.error("onEvent_btn_nextDialogue:", this._count),
                  this._count++,
                  2 == this._count
                    ? (this.uiOut(), p.default.instance.onEvent_guide_point())
                    : 3 == this._count
                    ? (this.textPointer(this.dialogue_content[this._count]),
                      this._npc.setAnimation(0, "speak", !0),
                      d.default.instance.onEvent_guide_heart(),
                      (this._black.active = !1))
                    : 5 == this._count
                    ? (this.uiOut(), d.default.instance.onEvent_guide_point())
                    : 6 == this._count
                    ? (this.uiOut(),
                      u.default.instance.onEvent_guide_Out(),
                      l.default.SDK.onBegin("1006"),
                      l.default.SDK.onCompleted("1006"))
                    : (this.textPointer(this.dialogue_content[this._count]),
                      this._npc.setAnimation(0, "speak", !0));
              }),
              (e.prototype.textPointer = function (t) {
                var e = this,
                  o = t,
                  n = 0;
                (this._dialogueLabel.string = ""),
                  (this.panel.getComponent(cc.Button).interactable = !1),
                  this.schedule(
                    function () {
                      ++n === o.length + 2
                        ? (e.panel.getComponent(cc.Button).interactable = !0)
                        : (e._dialogueLabel.string = o.substring(0, n));
                    },
                    0.005,
                    o.length + 1,
                    0.03
                  );
              }),
              (e.instance = null),
              c([y(cc.Node)], e.prototype, "panel", void 0),
              (o = c([h], e))
            );
          })(cc.Component);
        (a.default = m), cc._RF.pop();
      },
      {},
    ],
    UI_Interlude: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "412bewEPJtPLKy6z2/9pEeO", "UI_Interlude");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("StaticData"),
          d = i("UIManager"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.inOrOut = ""), (e.loadingBar = null), e;
            }
            return (
              r(e, t),
              (e.prototype.Show_Interlude = function (t) {
                this.inOrOut = t;
                for (
                  var e =
                      s.default.RuntimeData.carModel[
                        s.default.RuntimeData.curCarModelIndex
                      ],
                    o = e.length,
                    n = 0,
                    i = function (t) {
                      var i = e[t],
                        r = l.default.GetUnitDataByIDAndLv(e[t].id, e[t].level),
                        c = a;
                      cc.loader.loadRes(
                        "Prefabs/Unit/" + r.prefabUrl,
                        cc.Prefab,
                        function (t, e) {
                          (i.spellUnit = cc.instantiate(e)),
                            n++,
                            c.action_refreshProgressBar((0.5 * n) / o),
                            n >= o && c.onEvent_LoadMyCarFinished();
                        }
                      );
                    },
                    a = this,
                    r = 0;
                  r < e.length;
                  r++
                )
                  i(r);
              }),
              (e.prototype.onEvent_LoadMyCarFinished = function () {
                for (
                  var t = s.default.enemyCarModel,
                    e = t.length,
                    o = 0,
                    n = function (n) {
                      var a = t[n],
                        r = l.default.GetUnitDataByIDAndLv(t[n].id, t[n].level),
                        c = r.prefabUrl;
                      "1000" == r.id && (c = "enemy_car_driver");
                      var s = i;
                      cc.loader.loadRes(
                        "Prefabs/Unit/" + c,
                        cc.Prefab,
                        function (t, n) {
                          (a.spellUnit = cc.instantiate(n)),
                            o++,
                            s.action_refreshProgressBar(0.5 + (0.5 * o) / e),
                            o >= e &&
                              (d.default
                                .fightNode()
                                .getComponent("UI_Fight")
                                .action_StartSpellCard(),
                              (s.loadingBar.node.active = !1),
                              s.action_DoAnim());
                        }
                      );
                    },
                    i = this,
                    a = 0;
                  a < t.length;
                  a++
                )
                  n(a);
              }),
              (e.prototype.action_refreshProgressBar = function (t) {
                this.loadingBar.progress = t;
              }),
              (e.prototype.action_DoAnim = function () {
                var t = this;
                (this.icon = this.node.getChildByName("interlude")),
                  "in" == this.inOrOut
                    ? (this.icon.scale = 0.1)
                    : (this.icon.scale = 55),
                  (this.icon.active = !0),
                  cc
                    .tween(this)
                    .delay(0.1)
                    .call(function () {
                      cc
                        .tween(t.node.getChildByName("blackFrame"))
                        .to(0.5, { opacity: 0 })
                        .start(),
                        t.setScale(t.inOrOut);
                    })
                    .start();
              }),
              (e.prototype.setScale = function (t) {
                "in" == t &&
                  cc
                    .tween(this.icon)
                    .to(1, { scale: 55 }, { easing: "circIn" })
                    .call(function () {}.bind(this))
                    .start();
              }),
              c([f(cc.ProgressBar)], e.prototype, "loadingBar", void 0),
              c([p], e)
            );
          })(cc.Component);
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    UI_LevelCell: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "d67eczBCdhItoaZ2lgcxYhY", "UI_LevelCell");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = cc._decorator,
          d = l.ccclass,
          u = l.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.bglight = []),
                (e.StarShow = void 0),
                (e.showLevelId = ""),
                (e.clickCallback = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.initLevelCell = function (t, e, o) {
                (this.showLevelId = t), (this.clickCallback = e);
                var n = this.node.getChildByName("Lock");
                this.node
                  .getChildByName("LevelLabel")
                  .getComponent(cc.Label).string = "Level " + o;
                var i = s.default.GetLevelDataById(t),
                  a = i.isLocked,
                  r = i.star;
                if (a)
                  (n.opacity = 255),
                    (this.StarShow.parent.opacity = 0),
                    (this.node.getComponent(cc.Button).interactable = !1);
                else {
                  (n.opacity = 0), (this.StarShow.parent.opacity = 255);
                  for (var c = this.StarShow.children, l = 0; l < r; l++)
                    c[l].active = !0;
                }
                this.showLevelId == s.default.curLevelId &&
                  (this.node
                    .getChildByName("cellbg")
                    .getComponent(cc.Sprite).spriteFrame = this.bglight[1]);
              }),
              (e.prototype.onEvent_btn_click = function () {
                null != this.clickCallback &&
                  (this.clickCallback(this),
                  (s.default.destroyEnemyUnitNum = 0));
              }),
              (e.prototype.onEvent_btn_showDetail = function () {}),
              c([u([cc.SpriteFrame])], e.prototype, "bglight", void 0),
              c([u(cc.Node)], e.prototype, "StarShow", void 0),
              c([d], e)
            );
          })(cc.Component);
        (a.default = p), cc._RF.pop();
      },
      {},
    ],
    UI_LevelUiBase: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "285eaqFYvNBRbQWl7Vv28Tt", "UI_LevelUiBase");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("StaticData"),
          d = (i("GamePlatform"), i("Config")),
          u = i("EventManager"),
          p = i("UI_Title"),
          f = i("UIManager"),
          h = cc._decorator,
          y = h.ccclass,
          m = h.property,
          _ = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.cellPrefab = void 0),
                (e.panel = null),
                (e.unitNumLabel = null),
                (e.cellList = []),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.ShowUI_LevelUiBase = function () {
                (this.panel.scale = 0),
                  cc
                    .tween(this.panel)
                    .to(0.3, { scale: 1 }, { easing: "quadOut" })
                    .start();
                for (var t = 0; t < s.default.RuntimeData.levelList.length; t++)
                  this.getCellItem()
                    .getComponent("UI_LevelCell")
                    .initLevelCell(
                      s.default.RuntimeData.levelList[t].id,
                      this.onEvent_btn_clickCell.bind(this),
                      t + 1
                    );
                for (
                  t = s.default.RuntimeData.levelList.length;
                  t < this.cellList.length;
                  t++
                )
                  this.cellList[t].active = !1;
                this.unitNumLabel.string =
                  s.default.RuntimeData.unitLevelData.length - 1 + "";
              }),
              (e.prototype.onEvent_btn_close = function () {
                cc.tween(this.panel)
                  .to(0.3, { scale: 0 }, { easing: "backIn" })
                  .call(
                    function () {
                      (this.node.active = !1),
                        this.node.destroy(),
                        (p.default.instance.node.active = !0),
                        u.default.emit(d.default.PERSONAL_ASSETS_CHANGE);
                    }.bind(this)
                  )
                  .start();
              }),
              (e.prototype.onEvent_btn_starReward = function () {
                f.default.ShowUI_StarReward();
              }),
              (e.prototype.onEvent_btn_equipment = function () {
                f.default.ShowUI_Collect();
              }),
              (e.prototype.onEvent_btn_assemble = function () {
                (this.node.active = !1),
                  this.node.destroy(),
                  f.default.ShowUI_FightPrepare();
              }),
              (e.prototype.onEvent_btn_video_diamond = function () {
                YYGplatform.showReward(function () {
                  f.default.ShowUI_Rewarditem({
                    id: l.default.REWARDID.DIAMOND.id,
                    value: 50,
                  });
                });
              }),
              (e.prototype.onEvent_btn_discount = function () {
                f.default.ShowUI_Shop();
              }),
              (e.prototype.onEvent_btn_shop = function () {
                f.default.ShowUI_Shop();
              }),
              (e.prototype.onEvent_btn_clickCell = function (t) {
                (s.default.clickInLevel = !0),
                  s.default.StartLevel(t.showLevelId),
                  (this.node.active = !1),
                  this.node.destroy(),
                  f.default.ShowUI_FightPrepare();
              }),
              (e.prototype.getCellItem = function () {
                for (var t = 0; t < this.cellList.length; t++)
                  if (0 == this.cellList[t].active)
                    return (this.cellList[t].active = !0), this.cellList[t];
                var e = cc.instantiate(this.cellPrefab);
                return (
                  this.cellPrefab.parent.addChild(e),
                  (this.cellPrefab.parent.width += 255),
                  (e.active = !0),
                  this.cellList.push(e),
                  e
                );
              }),
              c([m(cc.Node)], e.prototype, "cellPrefab", void 0),
              c([m(cc.Node)], e.prototype, "panel", void 0),
              c([m(cc.Label)], e.prototype, "unitNumLabel", void 0),
              c([y], e)
            );
          })(cc.Component);
        (a.default = _), cc._RF.pop();
      },
      {},
    ],
    UI_Loading: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "4928504PcJIpqwL0/0Nt/wG", "UI_Loading");
        var i = o,
          a = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          l =
            (c.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.curProgressCount = 0), (e.totalCount = 0), e;
              }
              return (
                a(e, t),
                (e.prototype.onLoad = function () {
                  this.totalProgressBar = this.node
                    .getChildByName("totalProgressbar")
                    .getComponent(cc.ProgressBar);
                }),
                (e.prototype.ShowUI_Loading = function (t, e, o) {
                  (this.finishCallback = o),
                    (this.totalCount = 0),
                    null != t && (this.totalCount += t.length),
                    null != e && (this.totalCount += 1),
                    (this.loadingResList = t),
                    (this.loadingSceneName = e),
                    (this.curProgressCount = 0),
                    this.action_updateTotalProgress(0),
                    this.action_loadNextRes();
                }),
                (e.prototype.action_updateTotalProgress = function (t) {
                  this.totalProgressBar.progress = t;
                }),
                (e.prototype.action_loadNextRes = function () {
                  null == this.loadingResList || 0 == this.loadingResList.length
                    ? this.action_loadScene()
                    : cc.loader.loadRes(
                        this.loadingResList[0],
                        this.onEvent_loadingRes_progress.bind(this),
                        this.onEvent_loadingRes_finished.bind(this)
                      );
                }),
                (e.prototype.onEvent_loadingRes_progress = function (t, e, o) {
                  this.action_updateTotalProgress(
                    (1 * this.curProgressCount) / this.totalCount +
                      ((1 * t) / e) * (1 / this.totalCount)
                  );
                }),
                (e.prototype.onEvent_loadingRes_finished = function (t, e) {
                  null == t &&
                    (this.curProgressCount++,
                    this.action_updateTotalProgress(
                      (1 * this.curProgressCount) / this.totalCount
                    ),
                    this.loadingResList.splice(0, 1)),
                    this.action_loadNextRes();
                }),
                (e.prototype.action_loadScene = function () {
                  null == this.loadingSceneName ||
                  0 == this.loadingSceneName.length
                    ? this.action_finish()
                    : cc.director.preloadScene(
                        this.loadingSceneName,
                        this.onEvent_loadingScene_progress.bind(this),
                        this.onEvent_loadingScene_finished.bind(this)
                      );
                }),
                (e.prototype.onEvent_loadingScene_progress = function (
                  t,
                  e,
                  o
                ) {
                  this.action_updateTotalProgress(
                    (1 * this.curProgressCount) / this.totalCount +
                      ((1 * t) / e) * (1 / this.totalCount)
                  );
                }),
                (e.prototype.onEvent_loadingScene_finished = function (t, e) {
                  this.curProgressCount++,
                    this.action_updateTotalProgress(
                      (1 * this.curProgressCount) / this.totalCount
                    ),
                    this.action_finish();
                }),
                (e.prototype.action_finish = function () {
                  console.log(
                    "[UI_Loading][\u6240\u6709\u4efb\u52a1\u8bfb\u53d6\u5b8c\u6210]"
                  ),
                    null != this.finishCallback &&
                      (this.finishCallback(),
                      (this.finishCallback = null),
                      (this.node.active = !1),
                      this.node.destroy());
                }),
                r([s], e)
              );
            })(cc.Component));
        (i.default = l), cc._RF.pop();
      },
      {},
    ],
    UI_LoginReward_Item: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "b1833lY3ppCarWLnRXKTFcw", "UI_LoginReward_Item");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("StaticData"),
          l = cc._decorator,
          d = l.ccclass,
          u = l.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.DayTittle = void 0), e;
            }
            return (
              r(e, t),
              (e.prototype.onLoad = function () {
                (this.iconNode = this.node
                  .getChildByName("icon_background")
                  .getChildByName("icon")),
                  (this.initSpriteFrame = this.iconNode.getComponent(
                    cc.Sprite
                  ).spriteFrame);
              }),
              (e.prototype.onDisable = function () {
                this.iconNode.getComponent(cc.Sprite).spriteFrame =
                  this.initSpriteFrame;
              }),
              (e.prototype.ShowUI_LoginReward_Item = function (t, e, o, n) {
                (this.node.getChildByName("gotNode").active = !1),
                  (this.node
                    .getChildByName("icon_background")
                    .getChildByName("gotLabel").active = !1);
                var i = s.default.GetRewardDataById(t);
                (this.iconNode.getComponent(cc.Sprite).spriteFrame =
                  this.initSpriteFrame),
                  this.iconNode.addComponent("Spin");
                var a = "p" + (o + 1);
                if (
                  (n && (a = "g" + (o + 1)), this.initDayTittle(a), null != i)
                ) {
                  cc.loader.loadRes(
                    i.iconUrl,
                    cc.SpriteFrame,
                    this.onEvent_resLoaded_icon.bind(this)
                  );
                  var r = this.node
                    .getChildByName("icon_background")
                    .getChildByName("value_group");
                  (r.active = e > 1),
                    e > 1 &&
                      ((r
                        .getChildByName("valueLabel")
                        .getComponent(cc.Label).string = "+" + e),
                      (window.valueLabel = r.getChildByName("valueLabel")),
                      (r.getChildByName("valueLabel").x = 0));
                }
              }),
              (e.prototype.initDayTittle = function (t) {
                var e = "UI/loginReward/" + t;
                cc.loader.loadRes(
                  e,
                  function (t, e) {
                    this.DayTittle.getComponent(cc.Sprite).spriteFrame =
                      new cc.SpriteFrame(e);
                  }.bind(this)
                );
              }),
              (e.prototype.Show_Highlight = function () {
                cc.loader.loadRes(
                  "Effects/FX_UI_Rotation_Glow",
                  cc.Prefab,
                  function (t, e) {
                    var o = cc.instantiate(e);
                    this.node.addChild(o),
                      (o.x = -1.5),
                      o.setSiblingIndex(-999999);
                  }.bind(this)
                );
              }),
              (e.prototype.Show_Disabled = function () {
                this.node
                  .getChildByName("icon_background")
                  .getChildByName("value_group");
                (this.node.getChildByName("gotNode").active = !0),
                  (this.node
                    .getChildByName("icon_background")
                    .getChildByName("gotLabel").active = !0);
              }),
              (e.prototype.onEvent_resLoaded_icon = function (t, e) {
                null == t && this.node.active
                  ? (this.iconNode.removeComponent("Spin"),
                    (this.iconNode.angle = 0),
                    (this.iconNode.getComponent(cc.Sprite).spriteFrame = e))
                  : null != t && console.log(t);
              }),
              c([u(cc.Node)], e.prototype, "DayTittle", void 0),
              c([d], e)
            );
          })(cc.Component);
        (a.default = p), cc._RF.pop();
      },
      {},
    ],
    UI_LoginReward: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "42cd4SNiYxMJLQ+9D6GQ3HR", "UI_LoginReward");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("UI_LoginReward_Item"),
          l = i("UIManager"),
          d = i("StaticData"),
          u = i("DataManager"),
          p = i("GamePlatform"),
          f = (i("Config"), cc._decorator),
          h = f.ccclass,
          y = f.property,
          m = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.videoToggle = void 0), (e.btn_get = null), e;
            }
            return (
              r(e, t),
              (e.prototype.onLoad = function () {
                this.loginRewardList = cc
                  .find("panel", this.node)
                  .getChildByName("LoginBg")
                  .getChildByName("content_root")
                  .getChildByName("content")
                  .getComponentsInChildren(s.default);
              }),
              (e.prototype.ShowUI_LoginReward = function () {
                this.RefreshUI_LoginReward(),
                  (this.videoToggle.isChecked = !1),
                  this.action_setButton_clickable(!1);
                var t = this.node
                    .getChildByName("panel")
                    .getChildByName("LoginBg"),
                  e = this.node
                    .getChildByName("panel")
                    .getChildByName("NPC_boy"),
                  o = this.node
                    .getChildByName("panel")
                    .getChildByName("btn_return");
                (t.y = 600),
                  (o.x = -1e3),
                  (e.x = 1e3),
                  cc
                    .tween(o)
                    .to(0.5, { x: -587.5 }, { easing: "backOut" })
                    .start(),
                  cc
                    .tween(e)
                    .to(0.5, { x: 529 }, { easing: "backOut" })
                    .start(),
                  cc
                    .tween(t)
                    .to(0.5, { y: 37.5 }, { easing: "backOut" })
                    .call(this.onEvent_tweenFinished_fadein.bind(this))
                    .start(),
                  (p.default.SDK.isTimeLoop = !0);
              }),
              (e.prototype.RefreshUI_LoginReward = function () {
                for (var t = 0; t < d.default.loginReward.length; t++) {
                  var e = d.default.loginReward[t].id,
                    o = d.default.loginReward[t].value,
                    n = u.default.RuntimeData.loginReward.step > t;
                  this.loginRewardList[t].ShowUI_LoginReward_Item(e, o, t, n),
                    n && this.loginRewardList[t].Show_Disabled(),
                    u.default.CanGetLoginReward() &&
                      t == u.default.RuntimeData.loginReward.step &&
                      this.loginRewardList[t].Show_Highlight();
                }
                (this.btngetReward = cc
                  .find("panel", this.node)
                  .getChildByName("LoginBg")
                  .getChildByName("btnNode_getReward")),
                  (this.btnvideogetReward = cc
                    .find("panel", this.node)
                    .getChildByName("LoginBg")
                    .getChildByName("btnNode_getReward_video")),
                  (this.btngetReward.getComponent(cc.Button).interactable =
                    u.default.CanGetLoginReward()),
                  (this.btnvideogetReward.getComponent(cc.Button).interactable =
                    u.default.CanGetLoginReward()),
                  (this.btn_get.active = !1);
              }),
              (e.prototype.action_setButton_clickable = function (t) {
                (this.node
                  .getChildByName("panel")
                  .getChildByName("btn_return")
                  .getComponent(cc.Button).interactable = t),
                  u.default.CanGetLoginReward() &&
                    ((this.btngetReward.getComponent(cc.Button).interactable =
                      t),
                    (this.btnvideogetReward.getComponent(
                      cc.Button
                    ).interactable = t));
              }),
              (e.prototype.onEvent_btn_getReward = function () {
                console.log("btn"),
                  u.default.CanGetLoginReward()
                    ? this.getReward(1)
                    : YYGplatform.showTip("Signed!");
              }),
              (e.prototype.onEvent_btn_video_getReward = function () {
                var t = this;
                console.log("\u89c6\u9891\u7b7e\u5230 ToDo"),
                  u.default.CanGetLoginReward()
                    ? YYGplatform.showReward(function () {
                        t.getReward(2);
                      })
                    : YYGplatform.showTip("Signed!");
              }),
              (e.prototype.getReward = function (t) {
                var e = u.default.GetLoginReward(),
                  o = { id: e.id, value: e.value * t };
                l.default.ShowUI_Rewarditem(o), this.RefreshUI_LoginReward();
              }),
              (e.prototype.onEvent_btn_toggle = function () {
                this.videoToggle.isChecked
                  ? ((this.btngetReward.active = !0),
                    (this.btnvideogetReward.active = !1))
                  : ((this.btngetReward.active = !1),
                    (this.btnvideogetReward.active = !0));
              }),
              (e.prototype.onEvent_btn_close = function () {
                var t = this;
                // YYGplatform.showInterstitial(function () {
                t.action_setButton_clickable(!1);
                var e = t.node
                    .getChildByName("panel")
                    .getChildByName("LoginBg"),
                  o = t.node.getChildByName("panel").getChildByName("NPC_boy"),
                  n = t.node
                    .getChildByName("panel")
                    .getChildByName("btn_return");
                cc.tween(n).to(0.5, { x: -1e3 }, { easing: "backIn" }).start(),
                  cc.tween(o).to(0.5, { x: 1e3 }, { easing: "backIn" }).start(),
                  cc
                    .tween(e)
                    .to(0.5, { y: 600 }, { easing: "backIn" })
                    .call(t.onEvent_tweenFinished_fadeout.bind(t))
                    .start();
                // });
              }),
              (e.prototype.onDisable = function () {
                p.default.SDK.isTimeLoop = !1;
              }),
              (e.prototype.onEvent_tweenFinished_fadein = function () {
                this.action_setButton_clickable(!0);
              }),
              (e.prototype.onEvent_tweenFinished_fadeout = function () {
                (this.node.active = !1), this.node.destroy();
              }),
              c([y(cc.Toggle)], e.prototype, "videoToggle", void 0),
              c([y(cc.Node)], e.prototype, "btn_get", void 0),
              c([h], e)
            );
          })(cc.Component);
        (a.default = m), cc._RF.pop();
      },
      {},
    ],
    UI_Notification_Panel: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "5d8fbrNjt5BC5lo142zXCcb", "UI_Notification_Panel");
        var i = o,
          a = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          l =
            (c.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.btnNode_ok = null), (e.btnNode_cancel = null), e;
              }
              return (
                a(e, t),
                (e.prototype.onLoad = function () {
                  (this.btnNode_ok = this.node
                    .getChildByName("panel")
                    .getChildByName("okBTN")
                    .getComponent(cc.Button)),
                    (this.btnNode_cancel = this.node
                      .getChildByName("panel")
                      .getChildByName("cancelBTN")
                      .getComponent(cc.Button));
                }),
                (e.prototype.ShowUI_Notification_Panel = function (
                  t,
                  e,
                  o,
                  n,
                  i
                ) {
                  (this.node.active = !0),
                    (this.node.getChildByName("black").opacity = 0),
                    (this.node.getChildByName("panel").scale = 0),
                    null != t && t.length > 0
                      ? ((this.node
                          .getChildByName("panel")
                          .getChildByName("title").active = !0),
                        (this.node
                          .getChildByName("panel")
                          .getChildByName("title")
                          .getChildByName("title_label")
                          .getComponent(cc.Label).string = t))
                      : (this.node
                          .getChildByName("panel")
                          .getChildByName("title").active = !1),
                    (this.node
                      .getChildByName("panel")
                      .getChildByName("content_background")
                      .getChildByName("content")
                      .getComponent(cc.Label).string = e),
                    (this.btnNode_ok.node
                      .getChildByName("label")
                      .getComponent(cc.Label).string = o),
                    (this.btnNode_ok.node.scale = 0),
                    (this.btnNode_ok.node.x = 0),
                    (this.btnNode_ok.interactable = !1),
                    null != n && n.length > 0
                      ? ((this.btnNode_cancel.node.active = !0),
                        (this.btnNode_cancel.node
                          .getChildByName("label")
                          .getComponent(cc.Label).string = n),
                        (this.btnNode_cancel.node.scale = 0),
                        (this.btnNode_cancel.interactable = !1),
                        (this.btnNode_ok.node.x = -150))
                      : (this.btnNode_cancel.node.active = !1),
                    (this.finishCallback = i),
                    cc
                      .tween(this.node.getChildByName("black"))
                      .to(0.2, { opacity: 200 })
                      .start(),
                    cc
                      .tween(this.node.getChildByName("panel"))
                      .to(0.5, { scale: 1 }, { easing: "backOut" })
                      .start(),
                    cc
                      .tween(this.btnNode_ok.node)
                      .delay(0.4)
                      .to(0.3, { scale: 1 }, { easing: "backOut" })
                      .call(this.onEvent_tweenFinished_fadein.bind(this))
                      .start(),
                    this.btnNode_cancel.node.active &&
                      cc
                        .tween(this.btnNode_cancel.node)
                        .delay(0.4)
                        .to(0.3, { scale: 1 }, { easing: "backOut" })
                        .start();
                }),
                (e.prototype.onEvent_tweenFinished_fadein = function () {
                  (this.btnNode_ok.interactable = !0),
                    (this.btnNode_cancel.interactable = !0);
                }),
                (e.prototype.onEvent_btn_ok = function () {
                  (this.btnNode_ok.interactable = !1),
                    (this.btnNode_cancel.interactable = !1),
                    cc
                      .tween(this.node.getChildByName("black"))
                      .to(0.3, { opacity: 0 })
                      .start(),
                    cc
                      .tween(this.node.getChildByName("panel"))
                      .to(0.3, { scale: 0 })
                      .call(this.onEvent_tweenFinished_fadeout.bind(this, !0))
                      .start(),
                    cc
                      .tween(this.btnNode_ok.node)
                      .to(0.1, { scale: 0 })
                      .start(),
                    null != this.btnNode_cancel.node.active &&
                      cc
                        .tween(this.btnNode_cancel.node)
                        .to(0.1, { scale: 0 })
                        .start();
                }),
                (e.prototype.onEvent_btn_cancel = function () {
                  (this.btnNode_ok.interactable = !1),
                    (this.btnNode_cancel.interactable = !1),
                    cc
                      .tween(this.node.getChildByName("black"))
                      .to(0.3, { opacity: 0 })
                      .start(),
                    cc
                      .tween(this.node.getChildByName("panel"))
                      .to(0.3, { scale: 0 })
                      .call(this.onEvent_tweenFinished_fadeout.bind(this, !1))
                      .start(),
                    cc
                      .tween(this.btnNode_ok.node)
                      .to(0.1, { scale: 0 })
                      .start(),
                    null != this.btnNode_cancel.node.active &&
                      cc
                        .tween(this.btnNode_cancel.node)
                        .to(0.1, { scale: 0 })
                        .start();
                }),
                (e.prototype.onEvent_tweenFinished_fadeout = function (t) {
                  (this.node.active = !1),
                    null != this.finishCallback && this.finishCallback(t);
                }),
                r([s], e)
              );
            })(cc.Component));
        (i.default = l), cc._RF.pop();
      },
      {},
    ],
    UI_Notification: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "b6f57MTAGJDlJd8dDXKDBno", "UI_Notification");
        var i = o,
          a = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          l =
            (c.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.notificationItemPrefab = null), (e.itemList = []), e;
              }
              return (
                a(e, t),
                (e.prototype.onLoad = function () {
                  this.notificationItemPrefab =
                    this.node.getChildByName("itemPrefab");
                }),
                (e.prototype.ShowUI_Notification = function (t) {
                  var e = cc.instantiate(this.notificationItemPrefab);
                  e.setParent(this.notificationItemPrefab.parent),
                    (e.active = !0),
                    (e.y = this.notificationItemPrefab.y),
                    (e
                      .getChildByName("content_label")
                      .getComponent(cc.Label).string = t),
                    cc
                      .tween(e)
                      .delay(1)
                      .call(this.moveItem.bind(this, e))
                      .start(),
                    this.itemList.push(e),
                    this.itemList.length > 5 &&
                      (this.itemList[0].destroy(), this.itemList.splice(0, 1));
                }),
                (e.prototype.moveItem = function (t) {
                  cc.tween(t)
                    .parallel(
                      cc
                        .tween(t)
                        .by(0.5, { y: 100 })
                        .call(this.removeItem.bind(this, t)),
                      cc.tween(t).delay(0.3).to(0.2, { opacity: 0 })
                    )
                    .start();
                  for (var e = 0; e < this.itemList.length; e++)
                    if (this.itemList[e] == t) {
                      this.itemList.splice(e, 1);
                      break;
                    }
                }),
                (e.prototype.removeItem = function (t) {
                  t.destroy();
                }),
                r([s], e)
              );
            })(cc.Component));
        (i.default = l), cc._RF.pop();
      },
      {},
    ],
    UI_OtherGames: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "2b09cDGlW9IsZy8CFgnIueu", "UI_OtherGames");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("ScrollVertical"),
          l = i("ScrollList"),
          d = i("GamePlatform"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.scrollVertical = null), (e.scrollList = null), e;
            }
            return (
              r(e, t),
              (e.prototype.onLoad = function () {}),
              (e.prototype.ShowUI_OtherGame = function (t) {
                (this.otherCallBack = t),
                  this.scrollVertical.initList(),
                  this.scrollList.initList(),
                  d.default.SDK.showBannerAd();
              }),
              (e.prototype.start = function () {}),
              (e.prototype.onBtnClose = function () {
                d.default.SDK.hideBannerAd(),
                  this.node.removeFromParent(!0),
                  this.destroy(),
                  this.otherCallBack();
              }),
              c([f(s.default)], e.prototype, "scrollVertical", void 0),
              c([f(l.default)], e.prototype, "scrollList", void 0),
              c([p], e)
            );
          })(cc.Component);
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    UI_RewardBox_Item: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "12d8ahsPyVHpYPZoLYcuVI6", "UI_RewardBox_Item");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("StaticData"),
          d = i("EnumDefiner"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.image_Icon = null),
                (e.label_Level = null),
                (e.label_count = null),
                (e.label_Energy = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.action_ShowUI_RewardBox_Item = function (t) {
                var e = this;
                this.label_Energy.node.parent.active =
                  t.type == d.ENUM_CHESTREWARDTYPE.ENUM_UNITCARD;
                var o = "";
                if (
                  (t.type == d.ENUM_CHESTREWARDTYPE.ENUM_DIAMOND &&
                    ((o = l.default.REWARDID.DIAMOND.iconUrl),
                    (this.label_Level.string = "Gems")),
                  t.type == d.ENUM_CHESTREWARDTYPE.ENUM_GEAR &&
                    ((o = l.default.REWARDID.GEARS.iconUrl),
                    (this.label_Level.string = "Gears")),
                  t.type == d.ENUM_CHESTREWARDTYPE.ENUM_UNITCARD)
                ) {
                  var n = t.id,
                    i = s.default.GetUnitLevelDataById(n).level,
                    a = l.default.GetUnitDataByIDAndLv(n, i);
                  (o = "Unit/" + a.iconUrl),
                    (this.label_Energy.string = "" + a.energy),
                    (this.label_Level.string = "Lv:" + i),
                    (this.label_Level.string = "Fragments"),
                    console.error(t);
                }
                (this.label_count.string = "+" + t.value),
                  cc.loader.loadRes(o, cc.SpriteFrame, function (o, n) {
                    (e.image_Icon.spriteFrame = n),
                      t.type == d.ENUM_CHESTREWARDTYPE.ENUM_GEAR ||
                      t.type == d.ENUM_CHESTREWARDTYPE.ENUM_DIAMOND
                        ? ((e.image_Icon.node.scaleX = 0.7),
                          (e.image_Icon.node.scaleY = 0.7))
                        : ((e.image_Icon.node.scaleX = 1),
                          (e.image_Icon.node.scaleY = 1));
                  });
              }),
              c([f(cc.Sprite)], e.prototype, "image_Icon", void 0),
              c([f(cc.Label)], e.prototype, "label_Level", void 0),
              c([f(cc.Label)], e.prototype, "label_count", void 0),
              c([f(cc.Label)], e.prototype, "label_Energy", void 0),
              c([p], e)
            );
          })(cc.Component);
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    UI_RewardBox: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "64d84nExmhM1qnw5hhOs/RR", "UI_RewardBox");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        i("GamePlatform");
        var s = i("DataManager"),
          l = i("StaticData"),
          d = i("Config"),
          u = i("EnumDefiner"),
          p = i("EventManager"),
          f = i("UI_RewardBox_Item"),
          h = cc._decorator,
          y = h.ccclass,
          m = h.property,
          _ = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.itemPrefab = void 0),
                (e.rewardBox = void 0),
                (e.rewardBoxSp = []),
                (e.itemList = []),
                (e.curData = null),
                (e.native_ad = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.onDisable = function () {
                this.curData = null;
              }),
              (e.prototype.ShowUI_RewardBox = function (t) {
                this.curData = t;
                var e = this,
                  o = t.boxType,
                  n = (t.rewardList, this.rewardBoxSp[0]),
                  i = "FX_UI_BOX_Open",
                  a = this.node.getChildByName("panel"),
                  r = a.getChildByName("bg_light");
                switch (o) {
                  case "1001":
                    (i = "FX_UI_BOX_Open"), (n = this.rewardBoxSp[0]);
                    break;
                  case "1002":
                    (i = "FX_UI_BOX_Open"), (n = this.rewardBoxSp[1]);
                    break;
                  case "1003":
                    (i = "FX_UI_BOX_Open"), (n = this.rewardBoxSp[2]);
                    break;
                  case "1004":
                    (i = "FX_UI_BOX_Open"), (n = this.rewardBoxSp[3]);
                }
                this.initEffectNode(i, r);
                var c = this.rewardBox.getComponent(sp.Skeleton);
                (this.rewardBox.getComponent(sp.Skeleton).skeletonData = n),
                  p.default.emit(d.default.PERSONAL_ASSETS_CHANGE);
                var h = this.node.getChildByName("Mask"),
                  y = a.getChildByName("btn_greem"),
                  m = a.getChildByName("nameLabel"),
                  _ = a.getChildByName("numLabel");
                c.setAnimation(0, "closeStay", !0);
                var g = a.getChildByName("pos"),
                  v = this;
                cc
                  .tween(r)
                  .delay(0.15)
                  .by(0.3, { x: 350, y: -10 })
                  .delay(t.rewardList.length)
                  .by(1, { x: 1e3 })
                  .start(),
                  cc
                    .tween(this.rewardBox)
                    .delay(0.15)
                    .by(0.3, { x: 350, y: -10 })
                    .call(function () {
                      var o = this;
                      v.native_ad && (v.native_ad.active = !0);
                      for (
                        var n = function (n) {
                            setTimeout(function () {
                              0 == n
                                ? c.setAnimation(0, "open", !1)
                                : c.setAnimation(0, "openStayB", !1);
                              var i = e.getrewardItem();
                              i
                                .getComponent(f.default)
                                .action_ShowUI_RewardBox_Item(t.rewardList[n]),
                                (i.scale = 0),
                                (i.active = !0),
                                (i.zIndex = 2 * n),
                                (i.x = g.x),
                                (i.y = g.y);
                              var a = "";
                              if (
                                (t.rewardList[n].type ==
                                  u.ENUM_CHESTREWARDTYPE.ENUM_DIAMOND &&
                                  (a = l.default.REWARDID.DIAMOND.name),
                                t.rewardList[n].type ==
                                  u.ENUM_CHESTREWARDTYPE.ENUM_GEAR &&
                                  (a = l.default.REWARDID.GEARS.name),
                                t.rewardList[n].type ==
                                  u.ENUM_CHESTREWARDTYPE.ENUM_UNITCARD)
                              ) {
                                var r = t.rewardList[n].id,
                                  d = s.default.GetUnitLevelDataById(r).level,
                                  p = l.default.GetUnitDataByIDAndLv(r, d);
                                a = p.name;
                              }
                              var h = function () {
                                (m.opacity = 255),
                                  (_.opacity = 255),
                                  (m.getComponent(cc.Label).string = a);
                              }.bind(o);
                              e.itemBoxAnima(i, n, h);
                            }, 1e3 * n);
                          },
                          i = 0;
                        i < t.rewardList.length;
                        i++
                      )
                        n(i);
                    })
                    .delay(t.rewardList.length)
                    .by(1, { x: 1e3 })
                    .call(function () {
                      (m.opacity = 0), (_.opacity = 0);
                      for (var t = [], o = 0; o < e.itemList.length; o++)
                        e.itemList[o].active && t.push(e.itemList[o]);
                      for (o = t.length - 1; o >= 0; o--) {
                        var n = t[o];
                        e.ShowitemList(n, o, t.length);
                      }
                    })
                    .delay(0.4)
                    .call(function () {
                      (y.active = !0), (h.active = !1);
                    })
                    .start();
              }),
              (e.prototype.onClick_event_getReward = function () {}),
              (e.prototype.initEffectNode = function (t, e) {
                var o = "Effects/" + t;
                cc.loader.loadRes(
                  o,
                  cc.Prefab,
                  function (t, o) {
                    var n = cc.instantiate(o);
                    e.addChild(n),
                      (n.x = 0),
                      (n.y = 0),
                      (n.getChildByName("Box").opacity = 0);
                  }.bind(this)
                );
              }),
              (e.prototype.getrewardItem = function () {
                for (var t = 0; t < this.itemList.length; t++)
                  if (0 == this.itemList[t].active) return this.itemList[t];
                var e = cc.instantiate(this.itemPrefab);
                return (
                  this.itemPrefab.parent.addChild(e), this.itemList.push(e), e
                );
              }),
              (e.prototype.ShowitemList = function (t, e, o) {
                var n = 995 / (o - 1);
                n > 200 && (n = 200);
                var i = -n * (o - 1) * 0.5 + n * e;
                cc.tween(t)
                  .to(0.15 * e, { x: i })
                  .start();
              }),
              (e.prototype.itemBoxAnima = function (t, e, o) {
                var n = this.itemPrefab.getPosition();
                this.rewardBox.getComponent(sp.Skeleton),
                  cc
                    .tween(t)
                    .by(0.2, { y: 200 }, { easing: "sineOut" })
                    .to(0.25, { y: n.y }, { easing: "sineIn" })
                    .start(),
                  cc
                    .tween(t)
                    .by(0.2, { x: -270, scale: 0.4 })
                    .to(0.25, { x: n.x, scale: 1 })
                    .call(function () {
                      o();
                    })
                    .start();
              }),
              (e.prototype.onEvent_box_close = function () {
                (this.node.active = !1), this.node.destroy();
              }),
              (e.prototype.onEvent_btn_getreward = function () {
                for (var t = 0; t < this.curData.rewardList.length; t++)
                  switch (this.curData.rewardList[t].type) {
                    case u.ENUM_CHESTREWARDTYPE.ENUM_DIAMOND:
                      s.default.AdjustDiamond(this.curData.rewardList[t].value);
                      break;
                    case u.ENUM_CHESTREWARDTYPE.ENUM_GEAR:
                      s.default.AdjustGear(this.curData.rewardList[t].value);
                      break;
                    case u.ENUM_CHESTREWARDTYPE.ENUM_UNITCARD:
                      var e = this.curData.rewardList[t].id,
                        o = this.curData.rewardList[t].value;
                      s.default.AdjustUnitPiece(e, o);
                  }
                this.get_rewardBox_animation();
              }),
              (e.prototype.get_rewardBox_animation = function () {
                for (var t = this, e = [], o = 0; o < this.itemList.length; o++)
                  this.itemList[o].active && e.push(this.itemList[o]);
                var n = function (o) {
                  setTimeout(function () {
                    var n = e[o];
                    t.iteme_down_anima(n, o, -1);
                    var i = e[e.length - 1 - o];
                    t.iteme_down_anima(i, e.length - 1 - o, 1);
                  }, 200 * o);
                };
                for (o = 0; o < e.length / 2; o++) n(o);
              }),
              (e.prototype.iteme_down_anima = function (t, e, o) {
                var n = this;
                cc
                  .tween(t)
                  .by(0.4, { y: -200 }, { easing: "sineIn" })
                  .by(0.5, { y: -300 }, { easing: "sineOut" })
                  .start(),
                  cc
                    .tween(t)
                    .by(0.4, { x: 270 * o, scale: -0.4 })
                    .to(0.5, { x: 0, scale: 0 })
                    .call(function () {
                      (2 != e && 3 != e) ||
                        ((n.node.active = !1), n.node.destroy());
                    })
                    .start();
              }),
              c([m(cc.Node)], e.prototype, "itemPrefab", void 0),
              c([m(cc.Node)], e.prototype, "rewardBox", void 0),
              c([m([sp.SkeletonData])], e.prototype, "rewardBoxSp", void 0),
              c([m(cc.Node)], e.prototype, "native_ad", void 0),
              c([y], e)
            );
          })(cc.Component);
        (a.default = _), cc._RF.pop();
      },
      {},
    ],
    UI_RewardCollector: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "c33e8bfdEVD2ZZ+w4xjzps3", "UI_RewardCollector");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("GameUtil"),
          l = cc._decorator,
          d = l.ccclass,
          u = l.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.coinPrefab = null),
                (e.rankPrefab = null),
                (e.shieldPrefab = null),
                (e.curCount = 0),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.collectReward = function (t) {
                var e = s.default.GetNodeWorldPositionForUINode(t.toNode),
                  o = s.default.GetNodeWorldPositionForUINode(t.targetNode);
                (this.singleFinishCallback = t.singleCallback),
                  (this.allFinishCallback = t.allCallback);
                var n = t.count,
                  i = this.node.getChildByName("icon");
                this.addCount(i, n, e, o);
              }),
              (e.prototype.addCount = function (t, e, o, n) {
                for (var i = 0; i < e; i++) {
                  var a = cc.instantiate(t);
                  if (
                    (a.setParent(this.node),
                    (a.active = !0),
                    (a.x = o.x),
                    (a.y = o.y),
                    1 == e)
                  ) {
                    var r =
                      cc.Vec2.distance(cc.v2(o.x, o.y), cc.v2(n.x, n.y)) /
                      s.default.RandomFloat(1e3, 2e3);
                    cc.tween(a)
                      .delay(0.3)
                      .to(r, { x: n.x, y: n.y }, { easing: "quadOut" })
                      .call(this.onEvent_seperateFinished.bind(this, a))
                      .start();
                  } else {
                    var c =
                        (s.default.RandomFloat(-100, 100) / 100) * 100 +
                        a.position.x,
                      l =
                        (s.default.RandomFloat(-100, 100) / 100) * 100 +
                        a.position.y;
                    (r =
                      cc.Vec2.distance(cc.v2(c, l), cc.v2(n.x, n.y)) /
                      s.default.RandomFloat(1e3, 2e3)),
                      cc
                        .tween(a)
                        .to(0.3, { x: c, y: l }, { easing: "quadOut" })
                        .delay(0.3)
                        .to(r, { x: n.x, y: n.y }, { easing: "quadOut" })
                        .call(this.onEvent_seperateFinished.bind(this, a))
                        .start();
                  }
                }
                this.curCount = e;
              }),
              (e.prototype.onEvent_seperateFinished = function (t) {
                cc.tween(t)
                  .to(0.1, { scale: 1.5 })
                  .to(0.1, { scale: 1 })
                  .call(this.onEvent_popFinished.bind(this, t))
                  .start();
              }),
              (e.prototype.onEvent_popFinished = function (t) {
                t.destroy(),
                  null != this.singleFinishCallback &&
                    this.singleFinishCallback(),
                  this.curCount--,
                  0 == this.curCount &&
                    (null != this.allFinishCallback && this.allFinishCallback(),
                    this.node.destroy());
              }),
              c([u(cc.Node)], e.prototype, "coinPrefab", void 0),
              c([u(cc.Node)], e.prototype, "rankPrefab", void 0),
              c([u(cc.Node)], e.prototype, "shieldPrefab", void 0),
              c([d], e)
            );
          })(cc.Component);
        (a.default = p), cc._RF.pop();
      },
      {},
    ],
    UI_Reward_Item: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "102aao2QT5OrKIRLhC2yyIN", "UI_Reward_Item");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("StaticData"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  (this.iconNode = this.node
                    .getChildByName("icon_background")
                    .getChildByName("icon")),
                    (this.initSpriteFrame = this.iconNode.getComponent(
                      cc.Sprite
                    ).spriteFrame);
                }),
                (e.prototype.onDisable = function () {
                  this.iconNode.getComponent(cc.Sprite).spriteFrame =
                    this.initSpriteFrame;
                }),
                (e.prototype.ShowUI_Reward_Item = function (t, e) {
                  var o = s.default.GetRewardDataById(t);
                  if (
                    ((this.iconNode.getComponent(cc.Sprite).spriteFrame =
                      this.initSpriteFrame),
                    this.iconNode.addComponent("Spin"),
                    null != o)
                  ) {
                    cc.loader.loadRes(
                      o.iconUrl,
                      cc.SpriteFrame,
                      this.onEvent_resLoaded_icon.bind(this)
                    ),
                      (this.node
                        .getChildByName("nameLabel")
                        .getComponent(cc.Label).string = o.name);
                    var n = this.node
                      .getChildByName("icon_background")
                      .getChildByName("value_group");
                    (n.active = e > 1),
                      e > 1 &&
                        (n
                          .getChildByName("valueLabel")
                          .getComponent(cc.Label).string = "X" + e);
                  }
                }),
                (e.prototype.onEvent_resLoaded_icon = function (t, e) {
                  null == t && this.node.active
                    ? (this.iconNode.removeComponent("Spin"),
                      (this.iconNode.angle = 0),
                      (this.iconNode.getComponent(cc.Sprite).spriteFrame = e))
                    : null != t && console.log(t);
                }),
                c([d], e)
              );
            })(cc.Component));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    UI_Rewarditem: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "838a8slcttOf7FhV256uSbF", "UI_Rewarditem");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("StaticData"),
          d = i("UIManager"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.bglight = null),
                (e.item = null),
                (e.numLabel = null),
                (e.loginChest = void 0),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.ShowUI_Rewarditem = function (t) {
                (this.node.getChildByName("black").opacity = 0),
                  (this.node.getChildByName("panel").scale = 0),
                  cc
                    .tween(this.node.getChildByName("black"))
                    .to(0.2, { opacity: 200 })
                    .start(),
                  cc
                    .tween(this.node.getChildByName("panel"))
                    .to(0.2, { scale: 1 })
                    .start(),
                  cc
                    .tween(this.bglight)
                    .repeatForever(
                      cc.tween(this.bglight).by(2, { angle: 50 }).start()
                    )
                    .start(),
                  this.initLayer(t);
              }),
              (e.prototype.initLayer = function (t) {
                "loginChest" == t.id && (this.loginChest = !0);
                var e = l.default.GetRewardDataById(t.id).iconUrl;
                (this.numLabel.string = "+" + t.value),
                  cc.loader.loadRes(
                    e,
                    function (t, e) {
                      this.item.getComponent(cc.Sprite).spriteFrame =
                        new cc.SpriteFrame(e);
                    }.bind(this)
                  ),
                  t.id.indexOf("diamond") >= 0
                    ? s.default.AdjustDiamond(t.value)
                    : t.id.indexOf("gear") >= 0 &&
                      s.default.AdjustGear(t.value);
              }),
              (e.prototype.onEvent_btn_close = function () {
                var t = this;
                (this.node.getChildByName("Mask").active = !0),
                  cc
                    .tween(this.node.getChildByName("black"))
                    .to(0.3, { opacity: 0 })
                    .start(),
                  cc
                    .tween(this.node.getChildByName("panel"))
                    .to(0.3, { scale: 0 }, { easing: "backIn" })
                    .call(function () {
                      t.loginChest &&
                        d.default.ShowUI_RewardBox({
                          boxType: "1004",
                          rewardList: [],
                        });
                    })
                    .call(this.onEvent_tweenFinished_fadeout.bind(this))
                    .start();
              }),
              (e.prototype.onEvent_tweenFinished_fadeout = function () {
                (this.node.active = !1), this.node.destroy();
              }),
              c([f(cc.Node)], e.prototype, "bglight", void 0),
              c([f(cc.Node)], e.prototype, "item", void 0),
              c([f(cc.Label)], e.prototype, "numLabel", void 0),
              c([p], e)
            );
          })(cc.Component);
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    UI_Reward: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "7e056Wk29RLAYkx7O8hVsYL", "UI_Reward");
        var i = o,
          a = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          l = c.property,
          d = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.rewardItemPrefab = null), (e.rewardItemList = []), e;
            }
            return (
              a(e, t),
              (e.prototype.onLoad = function () {
                this.rewardItemRoot = this.node
                  .getChildByName("panel")
                  .getChildByName("content_root")
                  .getChildByName("content");
              }),
              (e.prototype.onDisable = function () {
                for (var t = 0; t < this.rewardItemList.length; t++)
                  this.rewardItemList[t].active = !1;
              }),
              (e.prototype.ShowUI_Reward = function (t) {
                for (var e = 0; e < t.length; e++) {
                  if (e >= this.rewardItemList.length) {
                    var o = cc.instantiate(this.rewardItemPrefab);
                    (o.parent = this.rewardItemRoot),
                      this.rewardItemList.push(o);
                  }
                  (this.rewardItemList[e].active = !0),
                    this.rewardItemList[e].setSiblingIndex(99);
                  var n = t[e].id,
                    i = t[e].value;
                  this.rewardItemList[e]
                    .getComponent("UI_Reward_Item")
                    .ShowUI_Reward_Item(n, i);
                }
                for (e = t.length; e < this.rewardItemList.length; e++)
                  this.rewardItemList[e].active &&
                    (this.rewardItemList[e].active = !1);
                (this.node.getChildByName("black").opacity = 0),
                  cc
                    .tween(this.node.getChildByName("black"))
                    .to(0.2, { opacity: 200 })
                    .start(),
                  (this.node.getChildByName("panel").scale = 0),
                  this.action_setButton_clickable(!1),
                  cc
                    .tween(this.node.getChildByName("panel"))
                    .to(0.5, { scale: 1 }, { easing: "backOut" })
                    .call(this.onEvent_tweenFinished_fadein.bind(this))
                    .start();
              }),
              (e.prototype.action_setButton_clickable = function (t) {
                this.node
                  .getChildByName("panel")
                  .getChildByName("closeBTN")
                  .getComponent(cc.Button).interactable = t;
              }),
              (e.prototype.onEvent_btn_close = function () {
                cc
                  .tween(this.node.getChildByName("black"))
                  .to(0.3, { opacity: 0 })
                  .start(),
                  cc
                    .tween(this.node.getChildByName("panel"))
                    .to(0.3, { scale: 0 }, { easing: "backIn" })
                    .call(this.onEvent_tweenFinished_fadeout.bind(this))
                    .start(),
                  this.action_setButton_clickable(!1);
              }),
              (e.prototype.onEvent_tweenFinished_fadein = function () {
                this.action_setButton_clickable(!0);
              }),
              (e.prototype.onEvent_tweenFinished_fadeout = function () {
                this.node.active = !1;
              }),
              r([l(cc.Node)], e.prototype, "rewardItemPrefab", void 0),
              r([s], e)
            );
          })(cc.Component);
        (i.default = d), cc._RF.pop();
      },
      {},
    ],
    UI_Searching: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "fa6412PDYFJuJ9NCFyp0BTq", "UI_Searching");
        var i = o,
          a = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          l =
            (c.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.curProfileIdx = 0), (e.profileList = []), e;
              }
              return (
                a(e, t),
                (e.prototype.onLoad = function () {
                  var t = this.node
                    .getChildByName("profileRoot")
                    .getComponentsInChildren(cc.Sprite);
                  this.profileList = [];
                  for (var e = 0; e < t.length; e++)
                    this.profileList.push(t[e].node),
                      this.profileList[e].setSiblingIndex(999);
                }),
                (e.prototype.ShowUI_Searching = function (t) {
                  (this.finishCallback = t), (this.node.opacity = 255);
                  for (var e = 0; e < this.profileList.length; e++)
                    (this.profileList[e].color = cc.Color.WHITE),
                      (this.profileList[e].scale = 1);
                  (this.curProfileIdx = 0),
                    (this.profileList[0].color = cc.Color.ORANGE),
                    cc
                      .tween(this.node)
                      .delay(0.2)
                      .call(this.onEvent_tweenFinish_searchPop.bind(this))
                      .start();
                }),
                (e.prototype.onEvent_tweenFinish_searchPop = function () {
                  this.curProfileIdx++,
                    this.curProfileIdx >= this.profileList.length
                      ? this.action_fadeout()
                      : ((this.profileList[this.curProfileIdx].color =
                          cc.Color.ORANGE),
                        cc
                          .tween(this.profileList[this.curProfileIdx])
                          .to(0.1, { scale: 1.5 }, { easing: "sineIn" })
                          .to(0.1, { scale: 1 }, { easing: "sineOut" })
                          .call(this.onEvent_tweenFinish_searchPop.bind(this))
                          .start());
                }),
                (e.prototype.action_fadeout = function () {
                  cc.tween(this.node)
                    .to(0.5, { opacity: 0 })
                    .call(this.onEvent_tweenFinish_fade.bind(this))
                    .start();
                }),
                (e.prototype.onEvent_tweenFinish_fade = function () {
                  this.node.destroy(),
                    null != this.finishCallback &&
                      (this.finishCallback(), (this.finishCallback = null));
                }),
                r([s], e)
              );
            })(cc.Component));
        (i.default = l), cc._RF.pop();
      },
      {},
    ],
    UI_Self_Resource: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "77615pf2LhJi533B7A0QBxt", "UI_Self_Resource");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("Config"),
          d = i("EnumDefiner"),
          u = i("EventManager"),
          p = i("UIManager"),
          f = cc._decorator,
          h = f.ccclass,
          y = f.property,
          m = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.label_gearsNum = null),
                (e.label_diamondsNum = null),
                (e.refreshFunc = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.onLoad = function () {
                this.refreshUI(),
                  (this.refreshFunc = this.refreshUI.bind(this));
              }),
              (e.prototype.onEnable = function () {
                u.default.on(
                  l.default.PERSONAL_ASSETS_CHANGE,
                  this.refreshFunc,
                  this
                );
              }),
              (e.prototype.onDisable = function () {
                u.default.off(
                  l.default.PERSONAL_ASSETS_CHANGE,
                  this.refreshFunc
                );
              }),
              (e.prototype.onEvent_btn_addGear = function () {
                p.default.ShowUI_VideoTips(d.ENUM_CHESTREWARDTYPE.ENUM_GEAR);
              }),
              (e.prototype.onEvent_btn_addDiamond = function () {
                p.default.ShowUI_VideoTips(d.ENUM_CHESTREWARDTYPE.ENUM_DIAMOND);
              }),
              (e.prototype.refreshUI = function () {
                (this.label_diamondsNum.string =
                  s.default.RuntimeData.curDiamonds + ""),
                  (this.label_gearsNum.string =
                    s.default.RuntimeData.curGears + "");
              }),
              c([y(cc.Label)], e.prototype, "label_gearsNum", void 0),
              c([y(cc.Label)], e.prototype, "label_diamondsNum", void 0),
              c([h], e)
            );
          })(cc.Component);
        (a.default = m), cc._RF.pop();
      },
      {},
    ],
    UI_Shop: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "94b35jh5DhAT6SosKOGUbYr", "UI_Shop");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("StaticData"),
          l = i("GamePlatform"),
          d = i("NativeAd"),
          u = cc._decorator,
          p = u.ccclass,
          f = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.native_ad = null),
                (e.btn_ad = null),
                (e.btn_boxNode = null),
                (e.btn_resourceNode = null),
                (e.btn_limitTimeNode = null),
                (e.boxItem = null),
                (e.resourceItem = null),
                (e.itemLayout = null),
                (e.panel = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.onLoad = function () {
                (this.boxData = s.default.shopBoxData),
                  (this.resourceData = s.default.shopResourceData),
                  (this.box_item_pool = new cc.NodePool());
                for (var t = 0; t < 3; t++)
                  this.box_item_pool.put(cc.instantiate(this.boxItem));
                for (
                  this.resource_item_pool = new cc.NodePool(), t = 0;
                  t < 4;
                  t++
                )
                  this.resource_item_pool.put(
                    cc.instantiate(this.resourceItem)
                  );
              }),
              (e.prototype.ShowUI_Shop = function () {
                console.log("shop"),
                  (this.panel.scale = 0),
                  cc
                    .tween(this.panel)
                    .to(0.3, { scale: 1 }, { easing: "quadOut" })
                    .start(),
                  this.changeNodeType("box"),
                  this.showNativeAd(),
                  (l.default.SDK.isTimeLoop = !0);
              }),
              (e.prototype.changeNodeType = function (t) {
                this.curNode != t &&
                  ((this.curNode = t), this.set_Btn_Active());
              }),
              (e.prototype.set_Btn_Active = function () {
                switch (this.curNode) {
                  case "box":
                    (this.btn_boxNode.getChildByName("press").active = !0),
                      (this.btn_boxNode.getChildByName("unpress").active = !1),
                      (this.btn_resourceNode.getChildByName("press").active =
                        !1),
                      (this.btn_resourceNode.getChildByName("unpress").active =
                        !0),
                      (this.btn_limitTimeNode.getChildByName("press").active =
                        !1),
                      (this.btn_limitTimeNode.getChildByName("unpress").active =
                        !0),
                      this.push_Box_To_Layout();
                    break;
                  case "resource":
                    (this.btn_boxNode.getChildByName("press").active = !1),
                      (this.btn_boxNode.getChildByName("unpress").active = !0),
                      (this.btn_resourceNode.getChildByName("press").active =
                        !0),
                      (this.btn_resourceNode.getChildByName("unpress").active =
                        !1),
                      (this.btn_limitTimeNode.getChildByName("press").active =
                        !1),
                      (this.btn_limitTimeNode.getChildByName("unpress").active =
                        !0),
                      this.push_Resource_To_Layout();
                    break;
                  case "limitTime":
                    (this.btn_boxNode.getChildByName("press").active = !1),
                      (this.btn_boxNode.getChildByName("unpress").active = !0),
                      (this.btn_resourceNode.getChildByName("press").active =
                        !1),
                      (this.btn_resourceNode.getChildByName("unpress").active =
                        !0),
                      (this.btn_limitTimeNode.getChildByName("press").active =
                        !0),
                      (this.btn_limitTimeNode.getChildByName("unpress").active =
                        !1),
                      this.push_TimeLimit_To_Layout();
                }
              }),
              (e.prototype.push_Box_To_Layout = function () {
                this.itemLayout.removeAllChildren();
                for (var t = 0; t < this.boxData.length; t++) {
                  var e = null;
                  (e =
                    this.box_item_pool.size() > 0
                      ? this.box_item_pool.get()
                      : cc.instantiate(this.boxItem)).setParent(
                    this.itemLayout
                  ),
                    (e.active = !0),
                    e
                      .getComponent("Shop_Box_Item")
                      .Show_Shop_Box_Item(this.boxData[t]);
                }
              }),
              (e.prototype.push_Resource_To_Layout = function () {
                this.itemLayout.removeAllChildren();
                for (var t = 0; t < this.resourceData.length; t++) {
                  var e = null;
                  (e =
                    this.resource_item_pool.size() > 0
                      ? this.resource_item_pool.get()
                      : cc.instantiate(this.resourceItem)).setParent(
                    this.itemLayout
                  ),
                    (e.active = !0),
                    e
                      .getComponent("Shop_Resource_Item")
                      .Show_Shop_Resource_Item(this.resourceData[t]);
                }
              }),
              (e.prototype.push_TimeLimit_To_Layout = function () {
                this.itemLayout.removeAllChildren();
                var t = new cc.Node();
                (t.addComponent(cc.Label).string = "\u656c\u8bf7\u671f\u5f85~"),
                  this.itemLayout.addChild(t);
              }),
              (e.prototype.onEvent_btn_ChangeBoxNode = function () {
                console.log("change"), this.changeNodeType("box");
              }),
              (e.prototype.onEvent_btn_ChangeResourceNode = function () {
                console.log("change"), this.changeNodeType("resource");
              }),
              (e.prototype.onEvent_btn_ChangeLimitTimeNode = function () {
                console.log("change"), this.changeNodeType("limitTime");
              }),
              (e.prototype.onEvent_btn_back = function () {
                h5Ubi.onCallShowInters({
                  onAndroidWebView: () => {
                    console.log("WebView");
                  },
                  onBrowser: () => {
                    console.log("Browser-onEvent_btn_back4");
                  },
                });
                cc.tween(this.panel)
                  .to(0.3, { scale: 0 }, { easing: "backIn" })
                  .call(
                    function () {
                      (this.node.active = !1), this.node.destroy();
                    }.bind(this)
                  )
                  .start();
              }),
              (e.prototype.onDisable = function () {
                l.default.SDK.isTimeLoop = !1;
              }),
              (e.prototype.onClickNativeAd = function () {
                this.native_ad &&
                  this.native_ad.getComponent(d.default).onNativeAdClick();
              }),
              (e.prototype.showNativeAd = function () {
                var t = this;
                l.default.instance.isNativeAdOn
                  ? ((this.native_ad.active = !1),
                    this.native_ad
                      .getComponent("NativeAd")
                      .showNativeBigAd(
                        l.default.SDK.NativeAdType.NATIVE_AD_GAME,
                        function (e) {
                          l.default.SDK.hideBannerAd(),
                            (t.native_ad.active = e),
                            (t.btn_ad.active = e);
                        }
                      ))
                  : ((this.native_ad.active = !1), (this.btn_ad.active = !1));
              }),
              (e.prototype.onEvent_btn_adBgClick = function () {
                this.native_ad &&
                  this.native_ad.getComponent(d.default).onNativeAdClick();
              }),
              c([f(cc.Node)], e.prototype, "native_ad", void 0),
              c([f(cc.Node)], e.prototype, "btn_ad", void 0),
              c([f(cc.Node)], e.prototype, "btn_boxNode", void 0),
              c([f(cc.Node)], e.prototype, "btn_resourceNode", void 0),
              c([f(cc.Node)], e.prototype, "btn_limitTimeNode", void 0),
              c([f(cc.Node)], e.prototype, "boxItem", void 0),
              c([f(cc.Node)], e.prototype, "resourceItem", void 0),
              c([f(cc.Node)], e.prototype, "itemLayout", void 0),
              c([f(cc.Node)], e.prototype, "panel", void 0),
              c([p], e)
            );
          })(cc.Component);
        (a.default = h), cc._RF.pop();
      },
      {},
    ],
    UI_StarReward: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "53773wu8lhELqD5fY0KNcgF", "UI_StarReward");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("GamePlatform"),
          l = cc._decorator,
          d = l.ccclass,
          u = l.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.progress = null),
                (e.rewardLayout = null),
                (e.native_ad = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.ShowUI_StarReward = function () {
                console.log("reward"),
                  (this.progress.width =
                    330 * this.rewardLayout.children.length),
                  this.showNativeAd();
              }),
              (e.prototype.onEvent_scoreview_scroll = function () {}),
              (e.prototype.onEvent_btn_back = function () {
                h5Ubi.onCallShowInters({
                  onAndroidWebView: () => {
                    console.log("WebView");
                  },
                  onBrowser: () => {
                    console.log("Browser-onEvent_btn_back1");
                  },
                });
                (this.node.active = !1), this.node.destroy();
              }),
              (e.prototype.showNativeAd = function () {
                var t = this;
                s.default.instance.isNativeAdOn
                  ? ((this.native_ad.active = !1),
                    this.native_ad
                      .getComponent("NativeAd")
                      .showNativeBigAd(
                        s.default.SDK.NativeAdType.NATIVE_AD_GAME,
                        function (e) {
                          t.native_ad.active = e;
                        }
                      ))
                  : (this.native_ad.active = !1);
              }),
              c([u(cc.Node)], e.prototype, "progress", void 0),
              c([u(cc.Node)], e.prototype, "rewardLayout", void 0),
              c([u(cc.Node)], e.prototype, "native_ad", void 0),
              c([d], e)
            );
          })(cc.Component);
        (a.default = p), cc._RF.pop();
      },
      {},
    ],
    UI_Tips: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "9d55aJHQixGaLpV24boy8/S", "UI_Tips");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("UI_Fight"),
          l = i("UI_FightPrepare"),
          d = cc._decorator,
          u = d.ccclass,
          p = d.property,
          f = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.tipsLabel = null), (e.font_sd = null), e;
            }
            return (
              r(e, t),
              (e.prototype.ShowUI_Tips = function (t) {
                switch (((this.type = t), t)) {
                  case "quitLevel":
                    (this.node
                      .getChildByName("panel")
                      .getChildByName("quit_bg").active = !0),
                      (this.node
                        .getChildByName("panel")
                        .getChildByName("unit_bg").active = !1),
                      (this.tipsLabel.string = "Are you sure to quit?"),
                      (this.font_sd.string = "Quit"),
                      (this.node.active = !1),
                      cc
                        .tween(this)
                        .delay(0.01)
                        .call(
                          function () {
                            (this.node.group = "ui"), (this.node.active = !0);
                          }.bind(this)
                        )
                        .start();
                    break;
                  case "clearCar":
                    (this.node
                      .getChildByName("panel")
                      .getChildByName("quit_bg").active = !0),
                      (this.node
                        .getChildByName("panel")
                        .getChildByName("unit_bg").active = !1),
                      (this.font_sd.string = "Clear"),
                      (this.tipsLabel.string =
                        "The car will be cleared, sure to continue?");
                    break;
                  case "unitIntroduce":
                    (this.node
                      .getChildByName("panel")
                      .getChildByName("quit_bg").active = !1),
                      (this.node
                        .getChildByName("panel")
                        .getChildByName("unit_bg").active = !0);
                }
                (this.node.getChildByName("black").opacity = 0),
                  (this.node.getChildByName("panel").scale = 0),
                  cc
                    .tween(this.node.getChildByName("black"))
                    .to(0.2, { opacity: 200 })
                    .start(),
                  cc
                    .tween(this.node.getChildByName("panel"))
                    .to(0.2, { scale: 1 })
                    .start();
              }),
              (e.prototype.onEvent_btn_sure = function () {
                this.onEvent_tweenFinished_fadeout(),
                  "quitLevel" == this.type
                    ? (this.quit = !0)
                    : "clearCar" == this.type && (this.clean = !0);
              }),
              (e.prototype.onEvent_btn_close = function () {
                (cc.director.getPhysicsManager().enabled = !0),
                  this.onEvent_tweenFinished_fadeout();
              }),
              (e.prototype.onEvent_tweenFinished_fadeout = function () {
                cc
                  .tween(this.node.getChildByName("black"))
                  .to(0.3, { opacity: 0 })
                  .start(),
                  cc
                    .tween(this.node.getChildByName("panel"))
                    .to(0.3, { scale: 0 }, { easing: "backIn" })
                    .call(this.destroyNode.bind(this))
                    .start();
              }),
              (e.prototype.destroyNode = function () {
                (this.node.active = !1),
                  this.quit &&
                    (s.default.instance.action_GiveUp(), (this.quit = !1)),
                  this.clean &&
                    (l.default.instance.cleanCar(), (this.clean = !1)),
                  this.node.destroy();
              }),
              c([p(cc.Label)], e.prototype, "tipsLabel", void 0),
              c([p(cc.Label)], e.prototype, "font_sd", void 0),
              c([u], e)
            );
          })(cc.Component);
        (a.default = f), cc._RF.pop();
      },
      {},
    ],
    UI_Title: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "126a4FpBcVFKZaV25EJtlxR", "UI_Title");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("EventManager"),
          l = i("Config"),
          d = i("UIManager"),
          u = i("GameUtil"),
          p = i("DataManager"),
          f = i("SoundManager"),
          h = i("GamePlatform"),
          y = i("NativeAd"),
          m = cc._decorator,
          _ = m.ccclass,
          g = m.property,
          v = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.btn_Sound_On = null),
                (e.btn_Sound_Off = null),
                (e.guidePoint = null),
                (e.guideMask = null),
                (e.native_ad = null),
                (e.btn_add_icon = null),
                (e.btn_moreGame = null),
                (e.btn_ad = null),
                (e.gameBoxNode = null),
                (e.isShowNativeAd = !1),
                e
              );
            }
            var o;
            return (
              r(e, t),
              (o = e),
              (e.prototype.onLoad = function () {
                (o.instance = this),
                  YYGplatform.initGameBox(this.gameBoxNode, 0.8);
              }),
              (e.prototype.onEnable = function () {
                setTimeout(function () {
                  if (document.createEvent) {
                    var t = document.createEvent("HTMLEvents");
                    t.initEvent("resize", !0, !0), window.dispatchEvent(t);
                  } else document.createEventObject && window.fireEvent("onresize");
                  "undefined" == typeof h5splash ||
                  "undefined" == typeof YYGGames
                    ? console.error("load success")
                    : window.onLoadingFinished ||
                      (h5splash.hideLoading(),
                      (window.onLoadingFinished = !0),
                      YYGGames.onLoadingFinished());
                }, 1e3);
              }),
              (e.prototype.onDisable = function () {
                cc.Tween.stopAllByTarget(this.node),
                  h.default.instance.isNativeAdOn &&
                    h.default.SDK.hideBannerAd();
              }),
              (e.prototype.ShowUI_Title = function () {
                s.default.emit(l.default.PERSONAL_ASSETS_CHANGE),
                  p.default.isMute
                    ? (YYGGames.audioEngine.pause = !0)
                    : (f.default.stopMusic(),
                      f.default.playMusicByPath("bgm"),
                      (YYGGames.audioEngine.pause = !1)),
                  this.showNativeAd(),
                  cc
                    .tween(this.node)
                    .delay(h.default.SDK.delayTime)
                    .call(this.autoShowNativeAd.bind(this))
                    .start(),
                  h.default.instance.isOPPO &&
                    (this.btn_moreGame.active =
                      h.default.SDK.isShowPlatformGameAd()),
                  (h.default.instance.isOPPO || h.default.instance.isVIVO) &&
                    (this.btn_add_icon.active = !0);
              }),
              (e.prototype.onEvent_btn_start = function () {
                (this.node.active = !1),
                  (this.guidePoint.active = !1),
                  (this.guideMask.active = !1),
                  p.default.RuntimeData.firstGame
                    ? d.default.ShowUI_FightPrepare()
                    : // YYGplatform.showInterstitial(function () {
                      d.default.ShowUI_LevelUiBase();
                // });
              }),
              (e.prototype.onEvent_btn_shop = function () {
                d.default.ShowUI_Shop();
              }),
              (e.prototype.onEvent_btn_sign = function () {
                d.default.ShowUI_LoginReward();
              }),
              (e.prototype.onEvent_guide_point = function () {
                (this.guidePoint.active = !0),
                  this.guidePoint
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "animation", !0),
                  (this.guideMask.active = !0),
                  h.default.SDK.onCompleted("1002");
              }),
              (e.prototype.onEvent_btn_wheel = function () {
                d.default.ShowUI_WheelReward();
              }),
              (e.prototype.update = function () {
                var t = this.node
                    .getChildByName("bg")
                    .getChildByName("carNode"),
                  e = t.getChildByName("driver");
                if (
                  (u.default.GetNodeWorldPositionForUINode(e),
                  cc.view.getFrameSize(),
                  e.x > 2 * cc.view.getFrameSize().width + 180)
                ) {
                  for (var o = 0; o < t.children.length; o++)
                    t.children[o].scaleX = -1;
                  (t
                    .getChildByName("lunzi_hup")
                    .getComponent(cc.RevoluteJoint).motorSpeed = 800),
                    (t
                      .getChildByName("lunzi_qup")
                      .getComponent(cc.RevoluteJoint).motorSpeed = 800);
                }
                if (e.x < 0) {
                  for (o = 0; o < t.children.length; o++)
                    t.children[o].scaleX = 1;
                  (t
                    .getChildByName("lunzi_hup")
                    .getComponent(cc.RevoluteJoint).motorSpeed = -800),
                    (t
                      .getChildByName("lunzi_qup")
                      .getComponent(cc.RevoluteJoint).motorSpeed = -800);
                }
              }),
              (e.prototype.onEvent_btn_addToDesk = function () {
                d.default.ShowUI_Collect();
              }),
              (e.prototype.onEvent_btn_soundOn = function () {
                (this.btn_Sound_Off.active = !1),
                  (this.btn_Sound_On.active = !0),
                  (YYGGames.audioEngine.pause = !1),
                  (p.default.isMute = !1);
              }),
              (e.prototype.onEvent_btn_soundOff = function () {
                (this.btn_Sound_Off.active = !0),
                  (this.btn_Sound_On.active = !1),
                  (YYGGames.audioEngine.pause = !0),
                  (p.default.isMute = !0);
              }),
              (e.prototype.autoShowNativeAd = function () {
                h.default.SDK.isTimeLoop ||
                  (this.onNativeDestroy(), this.showNativeAd()),
                  console.log("UI_Title--autoShowNativeAd"),
                  h.default.instance.isWX,
                  cc
                    .tween(this.node)
                    .delay(h.default.SDK.delayTime)
                    .call(this.autoShowNativeAd.bind(this))
                    .start();
              }),
              (e.prototype.showNativeAd = function () {
                var t = this;
                h.default.instance.isNativeAdOn
                  ? (h.default.SDK.hideBannerAd(),
                    (this.native_ad.active = !1),
                    this.native_ad
                      .getComponent("NativeAd")
                      .showNativeBigAd(
                        h.default.SDK.NativeAdType.NATIVE_AD_GAME,
                        function (e) {
                          e
                            ? ((t.native_ad.active = !0),
                              (t.isShowNativeAd = !0),
                              (t.btn_ad.active = !0),
                              h.default.SDK.hideBannerAd())
                            : (h.default.SDK.showBannerAd(
                                l.default.UI_TITLE_BANNER
                              ),
                              (t.native_ad.active = !1),
                              (t.btn_ad.active = !1));
                        }
                      ),
                    h.default.instance.isVIVO &&
                      h.default.SDK.showInsertAd(l.default.UI_TITLE_INSERT))
                  : ((this.native_ad.active = !1),
                    (this.btn_ad.active = !1),
                    h.default.SDK.showBannerAd(l.default.UI_TITLE_BANNER));
              }),
              (e.prototype.onNativeDestroy = function () {
                h.default.instance.isNativeAdOn &&
                  this.native_ad &&
                  ((this.native_ad.active = !1),
                  this.native_ad.getComponent("NativeAd").onNativeAdDestroy());
              }),
              Object.defineProperty(e.prototype, "nativeAdVisible", {
                set: function (t) {
                  this.isShowNativeAd && (this.native_ad.active = t);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.onShowMoreGame = function () {
                var t = this;
                (this.native_ad.active = !1),
                  h.default.SDK.hideBannerAd(),
                  h.default.SDK.showPlatformDrawerGameAd(function (e) {
                    e
                      ? ((t.nativeAdVisible = !1),
                        (h.default.SDK.isTimeLoop = !0))
                      : (t.showNativeAd(), (h.default.SDK.isTimeLoop = !1));
                  });
              }),
              (e.prototype.onClickAd = function () {
                this.native_ad &&
                  this.native_ad.getComponent(y.default).onNativeAdClick();
              }),
              (e.prototype.onAddToZM = function () {
                h.default.SDK.hasShortcutInstalled(function () {});
              }),
              (e.instance = null),
              c([g(cc.Node)], e.prototype, "btn_Sound_On", void 0),
              c([g(cc.Node)], e.prototype, "btn_Sound_Off", void 0),
              c([g(cc.Node)], e.prototype, "guidePoint", void 0),
              c([g(cc.Node)], e.prototype, "guideMask", void 0),
              c([g(cc.Node)], e.prototype, "native_ad", void 0),
              c([g(cc.Node)], e.prototype, "btn_add_icon", void 0),
              c([g(cc.Node)], e.prototype, "btn_moreGame", void 0),
              c([g(cc.Node)], e.prototype, "gameBoxNode", void 0),
              c([g(cc.Node)], e.prototype, "btn_ad", void 0),
              (o = c([_], e))
            );
          })(cc.Component);
        (a.default = v), cc._RF.pop();
      },
      {},
    ],
    UI_VideoTips: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "4ad20H2CK5G0qpr6qTYUVyJ", "UI_VideoTips");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("GamePlatform"),
          l = (i("Config"), i("UIManager")),
          d = i("EnumDefiner"),
          u = i("StaticData"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.bglight = null), (e.icon_zs = null), (e.icon_cl = null), e
              );
            }
            return (
              r(e, t),
              (e.prototype.ShowUI_VideoTips = function (t) {
                (this.type = t),
                  t == d.ENUM_CHESTREWARDTYPE.ENUM_DIAMOND
                    ? ((this.node
                        .getChildByName("panel")
                        .getChildByName("icon_gear").active = !1),
                      (this.node
                        .getChildByName("panel")
                        .getChildByName("icon_diamond").active = !0),
                      (this.icon_zs.active = !0),
                      (this.icon_cl.active = !1))
                    : ((this.node
                        .getChildByName("panel")
                        .getChildByName("icon_gear").active = !0),
                      (this.node
                        .getChildByName("panel")
                        .getChildByName("icon_diamond").active = !1),
                      (this.icon_zs.active = !1),
                      (this.icon_cl.active = !0)),
                  (s.default.SDK.isTimeLoop = !0),
                  (this.node.getChildByName("black").opacity = 0),
                  (this.node.getChildByName("panel").scale = 0),
                  cc
                    .tween(this.node.getChildByName("black"))
                    .to(0.2, { opacity: 200 })
                    .start(),
                  cc
                    .tween(this.node.getChildByName("panel"))
                    .to(0.2, { scale: 1 })
                    .start(),
                  cc
                    .tween(this.bglight)
                    .repeatForever(
                      cc.tween(this.bglight).by(2, { angle: 50 }).start()
                    )
                    .start();
              }),
              (e.prototype.onEvent_btn_close = function () {
                this.node.active = !1;
              }),
              (e.prototype.onDisable = function () {
                s.default.SDK.isTimeLoop = !1;
              }),
              (e.prototype.onEvent_btn_getReward_doubleCoin = function () {
                var t = this;
                YYGplatform.showReward(function () {
                  (t.node.active = !1),
                    t.type == d.ENUM_CHESTREWARDTYPE.ENUM_DIAMOND
                      ? l.default.ShowUI_Rewarditem({
                          id: u.default.REWARDID.DIAMOND.id,
                          value: 50,
                        })
                      : l.default.ShowUI_Rewarditem({
                          id: u.default.REWARDID.GEARS.id,
                          value: 50,
                        });
                });
              }),
              c([h(cc.Node)], e.prototype, "bglight", void 0),
              c([h(cc.Node)], e.prototype, "icon_zs", void 0),
              c([h(cc.Node)], e.prototype, "icon_cl", void 0),
              c([f], e)
            );
          })(cc.Component);
        (a.default = y), cc._RF.pop();
      },
      {},
    ],
    UI_Waiting: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "426cbvMCahHZIxkQVE6Io4R", "UI_Waiting");
        var i = o,
          a = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          r = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          l =
            (c.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return a(e, t), r([s], e);
            })(cc.Component));
        (i.default = l), cc._RF.pop();
      },
      {},
    ],
    UI_WheelReward_Item: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "e9efbJU7HREFqmS8FfuZ2V8", "UI_WheelReward_Item");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("StaticData"),
          l = cc._decorator,
          d = l.ccclass,
          u = l.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.reward_label = null),
                (e.reward_icon = null),
                (e.reward_desc = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.start = function () {}),
              (e.prototype.ShowUI_WheelReward_Item = function (t, e) {
                var o = s.default.wheelReward[t],
                  n = o.id,
                  i = s.default.GetRewardDataById(n);
                (this.reward_icon.spriteFrame = null),
                  null != i &&
                    (cc.loader.loadRes(
                      i.iconUrl,
                      cc.SpriteFrame,
                      this.onEvent_resLoaded_icon.bind(this)
                    ),
                    o.id == s.default.REWARDID.GEARS.id
                      ? ((this.reward_label.string = e + ""),
                        (this.reward_desc.string = "\u9f7f\u8f6e"))
                      : o.id == s.default.REWARDID.UNIT01.id
                      ? ((this.reward_label.string = i.name + ""),
                        (this.reward_desc.string = "\u9053\u5177"))
                      : o.id == s.default.REWARDID.DIAMOND.id
                      ? ((this.reward_label.string = e + ""),
                        (this.reward_desc.string = "\u94bb\u77f3"))
                      : (o.id != s.default.REWARDID.LOGIN_CHEST.id &&
                          o.id != s.default.REWARDID.WHEEL_CHEST.id) ||
                        ((this.reward_label.string = i.name + ""),
                        (this.reward_desc.string = "\u9053\u5177")));
              }),
              (e.prototype.onEvent_resLoaded_icon = function (t, e) {
                null == t && this.node.active
                  ? (this.reward_icon.spriteFrame = e)
                  : null != t && console.log(t);
              }),
              c([u(cc.Label)], e.prototype, "reward_label", void 0),
              c([u(cc.Sprite)], e.prototype, "reward_icon", void 0),
              c([u(cc.Label)], e.prototype, "reward_desc", void 0),
              c([d], e)
            );
          })(cc.Component);
        (a.default = p), cc._RF.pop();
      },
      {},
    ],
    UI_WheelReward: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "d8bf8laq0BFaLkjsHZBwKwr", "UI_WheelReward");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("GamePlatform"),
          l = i("DataManager"),
          d = i("StaticData"),
          u = i("GameUtil"),
          p = i("UIManager"),
          f = i("UI_WheelReward_Item"),
          h = (i("Config"), cc._decorator),
          y = h.ccclass,
          m = h.property,
          _ = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.rewardItemPrefab = null),
                (e.MaskEvent = void 0),
                (e.DrawbtnArry = []),
                (e.native_ad = null),
                e
              );
            }
            return (
              r(e, t),
              (e.prototype.start = function () {
                s.default.SDK.isTimeLoop = !0;
              }),
              (e.prototype.RefreshUI_WheelReward = function () {
                this.MaskEvent = this.node.getChildByName("Mask");
                for (
                  var t = d.default.wheelReward,
                    e = (360 / t.length) * -0.5,
                    o = 0;
                  o < t.length;
                  o++
                ) {
                  var n = t[o],
                    i = cc.instantiate(this.rewardItemPrefab);
                  (i.active = !0),
                    (i.parent = this.rewardItemPrefab.parent),
                    (i.angle = e + (o + 1) * (360 / t.length)),
                    i
                      .getComponent(f.default)
                      .ShowUI_WheelReward_Item(o, n.value);
                }
                this.rewardItemPrefab
                  .getComponent(f.default)
                  .ShowUI_WheelReward_Item(0, t[0].value),
                  (cc
                    .find("panel/bg_banner/draw_time/time_label", this.node)
                    .getComponent(cc.Label).string =
                    l.default.RuntimeData.drawTimes + "/3"),
                  l.default.RuntimeData.drawTimes <= 0
                    ? ((this.DrawbtnArry[0].active = !0),
                      (this.DrawbtnArry[1].active = !1))
                    : ((this.DrawbtnArry[0].active = !1),
                      (this.DrawbtnArry[1].active = !0));
              }),
              (e.prototype.ShowUI_WheelReward = function () {
                this.RefreshUI_WheelReward(),
                  this.action_setButton_clickable(!1);
                var t = this.node
                    .getChildByName("panel")
                    .getChildByName("bg_banner"),
                  e = this.node
                    .getChildByName("panel")
                    .getChildByName("btn_close");
                (t.y = 500),
                  (e.x = -1e3),
                  cc
                    .tween(e)
                    .to(0.5, { x: -597.5 }, { easing: "backOut" })
                    .start(),
                  cc
                    .tween(t)
                    .to(0.5, { y: 0 }, { easing: "backOut" })
                    .call(this.onEvent_tweenFinished_fadein.bind(this))
                    .start();
              }),
              (e.prototype.onEvent_btn_draw = function () {
                if (!(l.default.RuntimeData.drawTimes <= 0)) {
                  (this.MaskEvent.active = !0),
                    this.action_setButton_clickable(!1);
                  var t = l.default.GetRandomWheelReward();
                  this.tween_wheel_rotate(t);
                }
              }),
              (e.prototype.onEvent_btn_video = function () {
                var t = this;
                YYGplatform.showReward(function () {
                  l.default.AdjustdrawTimes(1), t.RefreshUI_WheelReward();
                });
              }),
              (e.prototype.action_setButton_clickable = function (t) {
                (this.DrawbtnArry[0].getComponent(cc.Button).interactable = t),
                  (this.DrawbtnArry[1].getComponent(cc.Button).interactable =
                    t),
                  (this.node
                    .getChildByName("panel")
                    .getChildByName("btn_close")
                    .getComponent(cc.Button).interactable = t);
              }),
              (e.prototype.tween_wheel_rotate = function (t) {
                var e = this,
                  o = d.default.wheelReward,
                  n = 360 / o.length,
                  i = u.default.RandomFloat(0.2 * n, 0.8 * n),
                  a = -t * n - i - 3600,
                  r = cc.find(
                    "panel/bg_banner/wheel_node/wheel_bg/bg_k2",
                    this.node
                  );
                (r.angle = r.angle % 360),
                  cc
                    .tween(r)
                    .to(3, { angle: a }, { easing: "cubicInOut" })
                    .call(function () {
                      l.default.GetWheelReward(t),
                        e.action_setButton_clickable(!0),
                        e.RefreshUI_WheelReward();
                      var n = o[t],
                        i = { id: n.id, value: n.value };
                      p.default.ShowUI_Rewarditem(i), (e.MaskEvent.active = !1);
                    })
                    .start();
              }),
              (e.prototype.onEvent_btn_close = function () {
                var t = this;
                // YYGplatform.showInterstitial(function () {
                t.action_setButton_clickable(!1);
                var e = t.node
                    .getChildByName("panel")
                    .getChildByName("bg_banner"),
                  o = t.node
                    .getChildByName("panel")
                    .getChildByName("btn_close");
                cc.tween(o).to(0.5, { x: -1e3 }, { easing: "backIn" }).start(),
                  cc
                    .tween(e)
                    .to(0.5, { y: 600 }, { easing: "backIn" })
                    .call(t.onEvent_tweenFinished_fadeout.bind(t))
                    .start();
                // });
              }),
              (e.prototype.onDisable = function () {
                s.default.SDK.isTimeLoop = !1;
              }),
              (e.prototype.onEvent_tweenFinished_fadein = function () {
                this.action_setButton_clickable(!0);
              }),
              (e.prototype.onEvent_tweenFinished_fadeout = function () {
                this.node.active = !1;
              }),
              c([m(cc.Node)], e.prototype, "rewardItemPrefab", void 0),
              c([m([cc.Node])], e.prototype, "DrawbtnArry", void 0),
              c([m(cc.Node)], e.prototype, "native_ad", void 0),
              c([y], e)
            );
          })(cc.Component);
        (a.default = _), cc._RF.pop();
      },
      {},
    ],
    Unit_Base: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "99ac3Vzg8BMPIym+zmlvXGq", "Unit_Base");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("DataManager"),
          l = i("StaticData"),
          d = i("UI_Fight"),
          u = i("UI_FightPrepare"),
          p = i("UIManager"),
          f = i("Config"),
          h = i("EventManager"),
          y = i("GameUtil"),
          m = cc._decorator,
          _ = m.ccclass,
          g =
            (m.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e.heath = 100),
                  (e.alive = !0),
                  (e.isConnect = !0),
                  (e.damage = 0),
                  (e.boomDamage = 0),
                  (e.bombDis = 200),
                  (e.count = 0),
                  e
                );
              }
              var o;
              return (
                r(e, t),
                (o = e),
                (e.prototype.onLoad = function () {
                  h.default.on(f.default.UNIT_UNDER_ATTACK, this.be_Hit, this);
                }),
                (e.prototype.initUnit = function (t, e) {
                  this.id = t;
                  var o = 50;
                  if ("1000" == this.id)
                    (this.node.getComponent(cc.RigidBody).gravityScale =
                      20 * l.default.unitData[0].weight),
                      (this.node.getComponent(cc.PhysicsBoxCollider).density =
                        l.default.unitData[0].weight * o),
                      (this.heath = l.default.unitData[0].hp),
                      (this.total = l.default.unitData[0].hp);
                  else {
                    var n = l.default.GetUnitDataByIDAndLv(t, e);
                    if (
                      ((this.heath = n.hp),
                      (this.total = n.hp),
                      0 != this.node.children.length)
                    )
                      for (var i = 0; i < this.node.children.length; i++)
                        (this.node.children[i].getComponent(
                          cc.RigidBody
                        ).gravityScale = 20 * n.weight),
                          null !=
                          this.node.children[i].getComponent(
                            cc.PhysicsBoxCollider
                          )
                            ? (this.node.children[i].getComponent(
                                cc.PhysicsBoxCollider
                              ).density = n.weight * o)
                            : null !=
                              this.node.children[i].getComponent(
                                cc.PhysicsCircleCollider
                              )
                            ? (this.node.children[i].getComponent(
                                cc.PhysicsCircleCollider
                              ).density = n.weight * o)
                            : null !=
                                this.node.getComponent(
                                  cc.PhysicsPolygonCollider
                                ) &&
                              (this.node.children[i].getComponent(
                                cc.PhysicsPolygonCollider
                              ).density = n.weight * o);
                    else
                      (this.node.getComponent(cc.RigidBody).gravityScale =
                        20 * n.weight),
                        void 0 != this.node.getComponent(cc.PhysicsBoxCollider)
                          ? (this.node.getComponent(
                              cc.PhysicsBoxCollider
                            ).density = n.weight * o)
                          : null !=
                            this.node.getComponent(cc.PhysicsCircleCollider)
                          ? (this.node.getComponent(
                              cc.PhysicsCircleCollider
                            ).density = n.weight * o)
                          : null !=
                              this.node.getComponent(
                                cc.PhysicsPolygonCollider
                              ) &&
                            (this.node.getComponent(
                              cc.PhysicsPolygonCollider
                            ).density = n.weight * o);
                    null != n.param01 &&
                      ("spike" == this.node.name ||
                      "ballista" == this.node.name ||
                      "cannon" == this.node.name ||
                      "machine_gun" == this.node.name ||
                      "electric_saw" == this.node.name ||
                      "tnt_box" == this.node.name
                        ? (this.damage = n.param01)
                        : "offroad_wheel" == this.node.name ||
                          "small_offroad_wheel" == this.node.name ||
                          "fan" == this.node.name ||
                          "fuel" == this.node.name ||
                          "engine" == this.node.name ||
                          "rocket" == this.node.name
                        ? (this.speed = n.param01)
                        : "mortar" == this.node.name &&
                          ((this.damage = n.param01),
                          (this.boomDamage = n.param02)));
                  }
                }),
                (e.prototype.onDisable = function () {
                  h.default.off(f.default.UNIT_UNDER_ATTACK, this.be_Hit);
                }),
                (e.prototype.be_Hit = function (t, e) {
                  (this.heath -= t),
                    this.reduce_Blood(t),
                    this.heath <= 0 &&
                      (this.doDeath(e),
                      "EnemyCarNode" == this.node.parent.name &&
                        1 != e &&
                        (s.default.destroyEnemyUnitNum++,
                        cc.loader.loadRes(
                          "shop/ui_cl",
                          cc.SpriteFrame,
                          function (t, e) {
                            if (null == t) {
                              var o = new cc.Node();
                              o.addComponent(cc.Sprite).spriteFrame = e;
                              var n = y.default.GetNodeWorldPositionForUINode(
                                this.node
                              );
                              (o.x = n.x),
                                (o.y = n.y),
                                o.setParent(d.default.instance.node);
                              var i = cc.v2(o.x, o.y + 600);
                              cc.tween(this)
                                .delay(0.6)
                                .call(function () {
                                  cc
                                    .tween(o)
                                    .to(
                                      1.2,
                                      { position: i },
                                      { easing: "quadOut" }
                                    )
                                    .call(function () {
                                      o.destroy();
                                    })
                                    .start(),
                                    cc
                                      .tween(o)
                                      .repeatForever(
                                        cc.tween(o).by(1, { angle: 60 }).start()
                                      )
                                      .start();
                                })
                                .start();
                            }
                          }.bind(this)
                        )),
                      "car_driver" == this.node.name &&
                        h.default.emit(f.default.GAME_OVER, !1),
                      "enemy_car_driver" == this.node.name &&
                        (this.count++,
                        1 == this.count &&
                          ((this.count = 0),
                          e &&
                            1 == e &&
                            ((e = !1),
                            (s.default.destroyEnemyUnitNum +=
                              this.node.parent.children.length)),
                          h.default.emit(f.default.GAME_OVER, !0))),
                      console.error(this.name),
                      this.name.indexOf("wheel") >= 0
                        ? h.default.emit(
                            f.default.EVENT_REMOVE_HP,
                            this.node.getChildByName("wheel_up")
                          )
                        : this.name.indexOf("spike") >= 0
                        ? h.default.emit(
                            f.default.EVENT_REMOVE_HP,
                            this.node.getChildByName("spike_base")
                          )
                        : "spring" == this.name
                        ? h.default.emit(
                            f.default.EVENT_REMOVE_HP,
                            this.node.getChildByName("spring_middle")
                          )
                        : "electric_saw" == this.name
                        ? h.default.emit(
                            f.default.EVENT_REMOVE_HP,
                            this.node.getChildByName("saw_base")
                          )
                        : h.default.emit(f.default.EVENT_REMOVE_HP, this.node));
                }),
                (e.prototype.reduce_Blood = function (t) {
                  this.heathProgress &&
                    (this.heathProgress.getComponent(cc.ProgressBar).progress -=
                      t / this.total);
                }),
                (e.prototype.update = function (t) {
                  if (
                    1 == this.alive &&
                    (this.name.indexOf("wheel") >= 0 ||
                      this.name.indexOf("spike") >= 0 ||
                      this.name.indexOf("spring") >= 0 ||
                      this.name.indexOf("saw") >= 0)
                  )
                    for (var e = 0; e < this.node.children.length; e++)
                      this.node.children[e]
                        .getComponent(cc.RigidBody)
                        .syncPosition(!0);
                }),
                (e.prototype.doDeath = function (t) {
                  if (1 == this.alive) {
                    if (
                      ((this.alive = !1),
                      "tnt_box" == this.node.name || "fuel" == this.node.name)
                    )
                      if (t && 1 == t);
                      else {
                        var e = y.default.GetNodeWorldPositionForUINode(
                            this.node
                          ).x,
                          n = y.default.GetNodeWorldPositionForUINode(
                            this.node
                          ).y;
                        cc.loader.loadRes(
                          "Effects/FX_Explode",
                          cc.Prefab,
                          function (t, o) {
                            if (null == t) {
                              var i = cc.instantiate(o);
                              i.setParent(p.default.fightNode()),
                                (i.x = e),
                                (i.y = n),
                                (i.active = !0);
                            }
                          }.bind(this)
                        );
                        for (
                          var i = d.default.instance.myCarNode,
                            a = d.default.instance.enemyCarNode,
                            r = 0;
                          r < i.children.length;
                          r++
                        ) {
                          var c = y.default.GetNodeWorldPositionForUINode(
                              this.node
                            ),
                            s = y.default.GetNodeWorldPositionForUINode(
                              i.children[r]
                            );
                          if (
                            Math.sqrt(
                              (c.x - s.x) * (c.x - s.x) +
                                (c.y - s.y) * (c.y - s.y)
                            ) < this.bombDis
                          ) {
                            var l = this.getUnitVector(
                              c,
                              i.children[r].position
                            );
                            if (1 == i.children[r].active)
                              if (
                                i.children[r].children.length > 0 &&
                                "rocket" != i.children[r].name
                              )
                                for (
                                  var u = 0;
                                  u < i.children[r].children.length;
                                  u++
                                )
                                  i.children[r].children[u].getComponent(
                                    cc.RigidBody
                                  ) &&
                                    i.children[r].children[u]
                                      .getComponent(cc.RigidBody)
                                      .applyForceToCenter(
                                        cc.v2(
                                          (3e6 * l.dir_x) / 2,
                                          (3e6 * l.dir_y) / 2
                                        ),
                                        !0
                                      ),
                                    "tnt_box" == this.node.name
                                      ? i.children[r].children[u].parent
                                          .getComponent(o)
                                          .be_Hit(this.damage)
                                      : i.children[r].children[u].parent
                                          .getComponent(o)
                                          .be_Hit(20);
                              else
                                i.children[r].getComponent(cc.RigidBody) &&
                                  i.children[r]
                                    .getComponent(cc.RigidBody)
                                    .applyForceToCenter(
                                      cc.v2(
                                        (3e6 * l.dir_x) / 2,
                                        (3e6 * l.dir_y) / 2
                                      ),
                                      !0
                                    ),
                                  "tnt_box" == this.node.name
                                    ? i.children[r]
                                        .getComponent(o)
                                        .be_Hit(this.damage)
                                    : i.children[r].getComponent(o).be_Hit(20);
                          }
                        }
                        for (r = 0; r < a.children.length; r++) {
                          c = y.default.GetNodeWorldPositionForUINode(
                            this.node
                          );
                          var f = y.default.GetNodeWorldPositionForUINode(
                            a.children[r]
                          );
                          if (
                            Math.sqrt(
                              (c.x - f.x) * (c.x - f.x) +
                                (c.y - f.y) * (c.y - f.y)
                            ) < this.bombDis &&
                            ((l = this.getUnitVector(
                              c,
                              a.children[r].position
                            )),
                            1 == a.children[r].active)
                          )
                            if (
                              a.children[r].children.length > 0 &&
                              i.children[r] &&
                              "rocket" != i.children[r].name
                            )
                              for (
                                u = 0;
                                u < a.children[r].children.length;
                                u++
                              )
                                a.children[r].children[u].getComponent(
                                  cc.RigidBody
                                ) &&
                                  a.children[r].children[u]
                                    .getComponent(cc.RigidBody)
                                    .applyForceToCenter(
                                      cc.v2(
                                        (3e6 * l.dir_x) / 2,
                                        (3e6 * l.dir_y) / 2
                                      ),
                                      !0
                                    ),
                                  "tnt_box" == this.node.name
                                    ? a.children[r].children[u].parent
                                        .getComponent(o)
                                        .be_Hit(this.damage)
                                    : a.children[r].children[u].parent
                                        .getComponent(o)
                                        .be_Hit(20);
                            else
                              a.children[r].getComponent(cc.RigidBody) &&
                                a.children[r]
                                  .getComponent(cc.RigidBody)
                                  .applyForceToCenter(
                                    cc.v2(
                                      (3e6 * l.dir_x) / 2,
                                      (3e6 * l.dir_y) / 2
                                    ),
                                    !0
                                  ),
                                "tnt_box" == this.node.name
                                  ? a.children[r]
                                      .getComponent(o)
                                      .be_Hit(this.damage)
                                  : a.children[r].getComponent(o).be_Hit(20);
                        }
                      }
                    else if (this.name.indexOf("wooden") >= 0) {
                      var h = y.default.GetNodeWorldPositionForUINode(
                          this.node
                        ).x,
                        m = y.default.GetNodeWorldPositionForUINode(
                          this.node
                        ).y;
                      cc.loader.loadRes(
                        "Effects/FX_Wood_Fracture",
                        cc.Prefab,
                        function (t, e) {
                          if (null == t) {
                            var o = cc.instantiate(e);
                            o.setParent(p.default.fightNode()),
                              (o.x = h),
                              (o.y = m),
                              (o.active = !0);
                          }
                        }.bind(this)
                      );
                    }
                    t || this.checkConnect(this.node),
                      this.node.color,
                      this.deathAni(),
                      this.node.name.indexOf("driver") >= 0
                        ? cc
                            .tween(this.node)
                            .to(1.2, { color: cc.color(255, 0, 0, 255) })
                            .call(
                              function () {
                                this.node.active = !1;
                              }.bind(this)
                            )
                            .start()
                        : (this.node.active = !1);
                  }
                }),
                (e.prototype.checkConnect = function (t) {
                  if (
                    "EnemyCarNode" == t._parent.name &&
                    "1000" != t.getComponent(o).id
                  ) {
                    for (var e = 0; e < s.default.judgeEnemyCarList.length; e++)
                      for (
                        var n = 0;
                        n < s.default.judgeEnemyCarList[e].length;
                        n++
                      )
                        null != s.default.judgeEnemyCarList[e][n] &&
                          t.getComponent(o) ==
                            s.default.judgeEnemyCarList[e][
                              n
                            ].spellUnit.getComponent(o) &&
                          (s.default.judgeEnemyCarList[e][n] = null);
                    this.judgeConnectAble(s.default.judgeEnemyCarList);
                  } else if (
                    "MyCarNode" == t._parent.name &&
                    "1000" != t.getComponent(o).id
                  ) {
                    for (e = 0; e < s.default.judgeCarList.length; e++)
                      for (n = 0; n < s.default.judgeCarList[e].length; n++)
                        null != s.default.judgeCarList[e][n] &&
                          t.getComponent(o) ==
                            s.default.judgeCarList[e][n].spellUnit.getComponent(
                              o
                            ) &&
                          (s.default.judgeCarList[e][n] = null);
                    this.judgeConnectAble(s.default.judgeCarList);
                  }
                }),
                (e.prototype.judgeConnectAble = function (t) {
                  for (var e = null, n = [], i = 0; i < t.length; i++)
                    for (var a = 0; a < t[i].length; a++)
                      null != t[i][a] &&
                        ("1000" == t[i][a].id
                          ? (e = t[i][a])
                          : n.push(t[i][a]));
                  for (var r = [], c = -1; c <= 1; c++)
                    for (var s = -1; s <= 1; s++)
                      if (Math.abs(c) + Math.abs(s) == 1) {
                        var d = e.posIntX + c,
                          p = e.posIntY + s;
                        if (
                          d >= 0 &&
                          p >= 0 &&
                          d < t.length &&
                          p <= t[d].length &&
                          null != t[d][p]
                        )
                          for (i = n.length - 1; i >= 0; i--)
                            if (n[i] == t[d][p]) {
                              r.push(t[d][p]), n.splice(i, 1);
                              break;
                            }
                      }
                  for (var f = []; r.length > 0; ) {
                    for (var h = [], y = 0; y < r.length; y++) {
                      var m = r[y];
                      for (c = -1; c <= 1; c++)
                        for (s = -1; s <= 1; s++)
                          if (
                            Math.abs(c) + Math.abs(s) == 1 &&
                            ((d = m.posIntX + c),
                            (p = m.posIntY + s),
                            d >= 0 &&
                              p >= 0 &&
                              d < t.length &&
                              p <= t[d].length &&
                              null != t[d][p])
                          )
                            for (i = n.length - 1; i >= 0; i--)
                              if (n[i] == t[d][p]) {
                                var _ = l.default.GetUnitDataByIDAndLv(
                                    m.id,
                                    1
                                  ).connectDir,
                                  g = u.default.instance.checkConnectable(
                                    _,
                                    m.dirType,
                                    c,
                                    s
                                  );
                                if (g) {
                                  var v = l.default.GetUnitDataByIDAndLv(
                                    t[d][p].id,
                                    1
                                  ).connectDir;
                                  g =
                                    u.default.instance.checkConnectableReverse(
                                      v,
                                      t[d][p].dirType,
                                      c,
                                      s
                                    );
                                }
                                if (g) {
                                  (t[d][p].notConnect = !1),
                                    h.push(t[d][p]),
                                    n.splice(i, 1);
                                  break;
                                }
                                for (var b = !1, N = 0; N < f.length; N++)
                                  if (
                                    f[N] == t[d][p].spellUnit.getComponent(o)
                                  ) {
                                    b = !0;
                                    break;
                                  }
                                0 == b &&
                                  f.push(t[d][p].spellUnit.getComponent(o));
                              }
                    }
                    r = h;
                  }
                  if (n && n.length > 0)
                    for (i = 0; i < n.length; i++)
                      f.push(n[i].spellUnit.getComponent(o));
                  if (f && f.length > 0)
                    for (i = 0; i < f.length; i++) f[i].notConnect();
                }),
                (e.prototype.getUnitVector = function (t, e) {
                  var o = t,
                    n = e,
                    i = o.x - n.x,
                    a = o.y - n.y,
                    r = i * i + a * a;
                  return { dir_x: i / Math.sqrt(r), dir_y: a / Math.sqrt(r) };
                }),
                (e.prototype.deathAni = function () {}),
                (e.prototype.setSelfAnchor = function (t, e) {
                  var o = (t.x - this.node.x) / 2 + 1,
                    n = (t.y - this.node.y) / 2 + 1;
                  this.node.angle % 360 == 90
                    ? (e.anchor = cc.v2(n, -o))
                    : this.node.angle % 360 == 180
                    ? (e.anchor = cc.v2(-o, -n))
                    : this.node.angle % 360 == 270
                    ? (e.anchor = cc.v2(-n, o))
                    : this.node.angle % 360 == 0 && (e.anchor = cc.v2(o, n));
                }),
                (e.prototype.setOtherAnchor = function (t, e) {
                  var o = -(t.x - this.node.x) / 2 + 1,
                    n = -(t.y - this.node.y) / 2 + 1;
                  t.angle % 360 == 90
                    ? (e.connectedAnchor = cc.v2(n, -o))
                    : t.angle % 360 == 180
                    ? (e.connectedAnchor = cc.v2(-o, -n))
                    : t.angle % 360 == 270
                    ? (e.connectedAnchor = cc.v2(-n, o))
                    : t.angle % 360 == 0 && (e.connectedAnchor = cc.v2(o, n));
                }),
                (e.prototype.notConnect = function () {
                  if (
                    ((this.isConnect = !1),
                    this.name.indexOf("wheel") >= 0 ||
                      this.name.indexOf("spike") >= 0 ||
                      this.name.indexOf("spring") >= 0 ||
                      this.name.indexOf("saw") >= 0)
                  )
                    for (var t = 0; t < this.node.children.length; t++)
                      (this.node.children[t].active = !1),
                        this.name.indexOf("spring") >= 0 &&
                          (this.node.children[t].getComponent(
                            cc.PhysicsPolygonCollider
                          ).enabled = !1),
                        this.name.indexOf("wheel") >= 0
                          ? h.default.emit(
                              f.default.EVENT_REMOVE_HP,
                              this.node.getChildByName("wheel_up")
                            )
                          : this.name.indexOf("spike") >= 0
                          ? h.default.emit(
                              f.default.EVENT_REMOVE_HP,
                              this.node.getChildByName("spike_base")
                            )
                          : "spring" == this.name
                          ? h.default.emit(
                              f.default.EVENT_REMOVE_HP,
                              this.node.getChildByName("spring_middle")
                            )
                          : "electric_saw" == this.name &&
                            h.default.emit(
                              f.default.EVENT_REMOVE_HP,
                              this.node.getChildByName("saw_base")
                            );
                  else
                    (this.node.active = !1),
                      h.default.emit(f.default.EVENT_REMOVE_HP, this.node);
                }),
                (o = c([_], e))
              );
            })(cc.Component));
        (a.default = g), cc._RF.pop();
      },
      {},
    ],
    VIVOSDK: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "e0a155NrU5JwaeWZaPhA2VT", "VIVOSDK");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("SDK"),
          l = i("SoundManager"),
          d = cc._decorator,
          u = d.ccclass,
          p =
            (d.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e.heyGameSdk = e.runningEnv.heygame.sdk),
                  (e.apiName = "qg"),
                  (e.BANNER_ID = "d8b499d6eca84fae96be34fcf8f60cb6"),
                  (e.INSERT_ID = "3dea92f1e4f14a65a5265eee922fc147"),
                  (e.VIDEO_ID = "a81b6629b1474907a2ca572e9c418d8b"),
                  (e.NATIVE_ID = [
                    "6034f39a8426485c91526cd446238977",
                    "e5e51e01982d4914934cacfeebcf270d",
                  ]),
                  (e.videoStartTime = 0),
                  e
                );
              }
              var o;
              return (
                r(e, t),
                (o = e),
                (e.prototype.initSdk = function () {
                  console.log("VIVOSDK init"),
                    (o.instance = this),
                    (this.api = window[this.apiName]),
                    this.heyGameSdk.init(),
                    this.loadGameConfig(),
                    this.loadCustomConfig(),
                    this.initBannerAd(),
                    this.createVideoAd(),
                    this.createInsertAd(),
                    this.api.onShow(function () {
                      console.log("VIVO_JSB game enter foreground");
                    }),
                    this.api.onHide(function () {
                      console.log("VIVO_JSB game enter background"),
                        l.default.stopAllEffects();
                    });
                }),
                (e.prototype.loadGameConfig = function () {
                  var t = this;
                  this.heyGameSdk.loadGameCfg(
                    function (e) {
                      e &&
                        (t.isOpen =
                          1 === e.switch && 1 === e.tickSwProtErrOnoff);
                    },
                    function (t) {
                      console.log("loadGameCfg" + JSON.stringify(t));
                    }
                  );
                }),
                (e.prototype.loadCustomConfig = function () {
                  var t = this;
                  this.heyGameSdk.loadCustomCfg(
                    function (e) {
                      if (e)
                        for (var o = 0; o < e.length; o++) {
                          var n = e[o];
                          "adAutoClickNum" == n.keyName &&
                            (t.adAutoClickNum = parseInt(n.keyValue)),
                            "delayTime" == n.keyName &&
                              (t.delayTime = parseInt(n.keyValue)),
                            "nativeUpNum" == n.keyName &&
                              (t.nativeUpNum = parseInt(n.keyValue));
                        }
                    },
                    function (t) {
                      console.log("loadCustomCfg" + JSON.stringify(t));
                    }
                  );
                }),
                (e.prototype.installShortcutIcon = function (t) {
                  this.api.installShortcut({
                    success: function () {
                      t(!0);
                    },
                    fail: function (e) {
                      t(!1);
                    },
                    complete: function () {},
                  });
                }),
                (e.prototype.hasShortcutInstalled = function (t) {
                  var e = this;
                  this.api.hasShortcutInstalled({
                    success: function (o) {
                      0 == o
                        ? e.api.installShortcut({
                            success: function (t) {},
                            fail: function (e) {
                              t(!1);
                            },
                            complete: function () {
                              t(!1);
                            },
                          })
                        : (t(!0),
                          e.showToast("\u56fe\u6807\u5df2\u6dfb\u52a0"));
                    },
                    fail: function (e) {
                      t(!1);
                    },
                    complete: function () {
                      t(!1);
                    },
                  });
                }),
                (e.prototype.initBannerAd = function () {
                  this.createBannerAd(!1);
                }),
                (e.prototype.createBannerAd = function (t) {
                  void 0 === t && (t = !1),
                    console.log("createBannerAd"),
                    this.bannerAd &&
                      (this.bannerAd.destroy(), (this.bannerAd = null)),
                    (this.bannerAd = this.api.createBannerAd({
                      posId: this.BANNER_ID,
                      style: {},
                    })),
                    this.bannerAd.onResize(function (t) {
                      console.log(
                        "[Banner\u5e7f\u544a] banner \u5bbd\u5ea6\uff1a" +
                          t.width +
                          ", banner \u9ad8\u5ea6\uff1a" +
                          t.height +
                          ", banner \u4f4d\u7f6eX : " +
                          t.left +
                          ", banner \u4f4d\u7f6ey : " +
                          t.top
                      );
                    }),
                    this.bannerAd.onLoad(function () {
                      console.log(
                        "[Banner\u5e7f\u544a] \u5e7f\u544a\u52a0\u8f7d\u6210\u529f"
                      ),
                        t && o.instance.showBannerAd();
                    }),
                    this.bannerAd.onError(function (t) {
                      console.log(
                        "\u9519\u8bef\u76d1\u542c\uff1a",
                        JSON.stringify(t)
                      );
                    });
                }),
                (e.prototype.showBannerAd = function (t) {
                  void 0 === t && (t = 100),
                    null != this.bannerAd
                      ? this.bannerAd
                          .show()
                          .then(function () {
                            console.log(
                              "banner\u5e7f\u544a\u5c55\u793a\u5b8c\u6210"
                            );
                          })
                          .catch(function (t) {
                            console.log(
                              "banner\u5e7f\u544a\u5c55\u793a\u5931\u8d25",
                              JSON.stringify(t)
                            );
                          })
                      : this.createBannerAd(!0);
                }),
                (e.prototype.hideBannerAd = function () {
                  console.log("\u8bf7\u6c42\u9690\u85cfBannerAD : HOME"),
                    null != this.bannerAd && this.bannerAd.hide();
                }),
                (e.prototype.destroyBannerAd = function () {
                  console.log("\u8bf7\u6c42\u6bc1\u6389BannerAD : HOME"),
                    null != this.bannerAd &&
                      (this.bannerAd.destroy(), (this.bannerAd = null));
                }),
                (e.prototype.createInsertAd = function () {
                  console.log("createInsertAd"),
                    (this.insertAd = this.api.createInterstitialAd({
                      posId: this.INSERT_ID,
                      style: {},
                    })),
                    this.insertAd.onLoad(function () {
                      console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d");
                    }),
                    this.insertAd.onClose(function () {
                      console.log("\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed"),
                        o.instance.createInsertAd();
                    }),
                    this.insertAd.onError(function (t) {
                      console.log(
                        "\u63d2\u5c4f\u5e7f\u544a\u51fa\u9519\uff1a",
                        JSON.stringify(t)
                      ),
                        30002 === t.errCode && o.instance.createInsertAd();
                    });
                }),
                (e.prototype.showInsertAd = function (t) {
                  if ((void 0 === t && (t = 200), this.insertAd)) {
                    var e = this.insertAd.show();
                    null != e &&
                      e &&
                      e
                        .then(function () {
                          console.log(
                            "\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u6210\u529f"
                          );
                        })
                        .catch(function (t) {
                          console.log(
                            "\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5931\u8d25",
                            JSON.stringify(t)
                          );
                        });
                  } else this.createInsertAd();
                }),
                (e.prototype.createNativeAd = function (t, e) {
                  var o = this;
                  console.log("createNativeAd");
                  var n = this.api.createNativeAd({ posId: t });
                  return (
                    console.log("createNativeAd:"),
                    n.onLoad(function (i) {
                      console.log("createNativeAd---res:" + JSON.stringify(i)),
                        i.adList && i.adList.length > 0
                          ? (console.log(
                              "\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f-" +
                                t
                            ),
                            n.reportAdShow({
                              adId: i.adList[0].adId.toString(),
                            }),
                            (o.nativeAdData[t] = i.adList[0]),
                            e(i.adList[0]),
                            console.log(
                              "createNativeAd--nativeCurrentAd:" +
                                JSON.stringify(i.adList[0])
                            ),
                            console.log(
                              "createNativeAd--nativeCurrentAd.adId:" +
                                i.adList[0].adId
                            ))
                          : e(null);
                    }),
                    n.onError(function (t) {
                      console.log("nativeAd:" + JSON.stringify(t));
                    }),
                    n
                  );
                }),
                (e.prototype.showNativeBigAd = function (t, e) {
                  console.log("vivo sdk showNativeBigAd"),
                    console.log("showNativeBigAd:", t),
                    this.nativeAdData[this.NATIVE_ID[t]]
                      ? e(this.nativeAdData[this.NATIVE_ID[t]])
                      : (console.log("showNativeBigAd new:", t),
                        (this.nativeAd[t] = this.createNativeAd(
                          this.NATIVE_ID[t],
                          e
                        )));
                }),
                (e.prototype.showNativeIconAd = function (t, e) {
                  console.log("vivo sdk showNativeIconAd");
                }),
                (e.prototype.onNativeAdClick = function (t, e) {
                  console.log("onNativeClick:" + e),
                    this.nativeAd[t] &&
                      (this.nativeAd[t].reportAdClick({ adId: e.toString() }),
                      console.log("\u539f\u751f\u5e7f\u544a\u70b9\u51fb-" + t),
                      this.onNativeDestroy(t));
                }),
                (e.prototype.onNativeDestroy = function (t) {
                  console.log("onNativeDestroy:"),
                    this.nativeAd &&
                      ((this.nativeAd[t] = null),
                      (this.nativeAdData[this.NATIVE_ID[t]] = null),
                      console.log("\u539f\u751f\u5e7f\u544a\u9500\u6bc1-" + t));
                }),
                (e.prototype.createVideoAd = function () {
                  var t = this;
                  console.log("createVideoAd");
                  try {
                    console.log(
                      "\u521b\u5efaVIVO\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"
                    ),
                      (this.videoAd = this.api.createRewardedVideoAd({
                        posId: this.VIDEO_ID,
                      })),
                      this.videoAd.onLoad(function (t) {
                        console.log(
                          "\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210-onload\u89e6\u53d1",
                          JSON.stringify(t)
                        );
                      }),
                      this.videoAd.onError(function (e) {
                        console.log("rewardedVideoAd onError:", e.errMsg),
                          t.api.showToast({
                            message:
                              "\u5bf9\u4e0d\u8d77\uff0c\u6682\u65f6\u6ca1\u6709\u5e7f\u544a\u4e86\uff01",
                          }),
                          t.videoAd.load();
                      }),
                      this.videoAd.onClose(function (e) {
                        e && e.isEnded
                          ? (console.log(
                              "\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"
                            ),
                            o.instance.videoAdCallBack(0))
                          : (console.log(
                              "\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"
                            ),
                            o.instance.videoAdCallBack(1)),
                          l.default.resumeSound(),
                          t.videoAd.load();
                      });
                  } catch (t) {
                    console.log("vivoRewardVideoAd error", t);
                  }
                }),
                (e.prototype.loadVideoAdAuto = function () {
                  console.log(
                    "\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d"
                  ),
                    setTimeout(
                      function () {
                        console.log(
                          "\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u4e2d"
                        ),
                          this.videoAd.load();
                      }.bind(this),
                      15e3
                    );
                }),
                (e.prototype.showVideoAd = function (t, e) {
                  if (
                    (void 0 === t && (t = 300),
                    (this.videoAdCallBack = e),
                    this.getSysTime() - this.videoStartTime > 15)
                  )
                    if (null != this.videoAd) {
                      this.videoStartTime = this.getSysTime();
                      var o = this.videoAd.show();
                      null != o &&
                        o &&
                        o
                          .then(function () {
                            console.log(
                              "\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u64ad\u653e\u6210\u529f"
                            ),
                              l.default.pauseSound();
                          })
                          .catch(function (t) {
                            console.log(
                              "\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u5c55\u793a\u5931\u8d25",
                              JSON.stringify(t)
                            );
                          });
                    } else this.createVideoAd();
                }),
                (e.prototype.navigateToMiniGame = function (t, e, o, n, i) {
                  this.api.navigateToMiniGame({
                    pkgName: e,
                    path: o,
                    extraData: { from: n },
                    success: function () {
                      i(!0);
                    },
                    fail: function (t) {
                      console.log("navigateToMiniGame:" + JSON.stringify(t)),
                        i(!1);
                    },
                  });
                }),
                (e.prototype.showToast = function (t) {
                  void 0 === t && (t = ""),
                    this.api.showToast({
                      title: t,
                      icon: "none",
                      duration: 1500,
                    });
                }),
                (e.prototype.onBegin = function (t) {
                  console.log("oppoSDK onBegin:" + t),
                    this.heyGameSdk.onBegin(t);
                }),
                (e.prototype.onCompleted = function (t) {
                  console.log("oppoSDK onBegin:" + t),
                    this.heyGameSdk.onCompleted(t);
                }),
                (e.prototype.onFailed = function (t) {
                  console.log("oppoSDK onFailed:" + JSON.stringify(t)),
                    this.heyGameSdk.onFailed(t.missionId, t.isStop);
                }),
                (e.prototype.onEvent = function (t) {}),
                (o = c([u], e))
              );
            })(s.default));
        (a.default = p), cc._RF.pop();
      },
      {},
    ],
    WXSDK: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "3ebbe1Pd45Ph4tx+C6TPvR7", "WXSDK");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("SDK"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e.apiName = "wx"),
                  (e.BANNER_ID = "adunit-e47874fab5984822"),
                  (e.INSERT_ID = "adunit-30fc12eff29e780c"),
                  (e.VIDEO_ID = "adunit-83daeae528c1f8b1"),
                  (e.SHARE_ID = "adunit-01440d2ba14e13ed"),
                  (e.shareNum = 0),
                  (e.startShareTime = 0),
                  (e.endShareTime = 0),
                  (e.sceneNum = 0),
                  (e.url = ""),
                  e
                );
              }
              var o;
              return (
                r(e, t),
                (o = e),
                (e.prototype.initSdk = function () {
                  console.log("WXSDK init"),
                    (o.instance = this),
                    (this.api = window[this.apiName]),
                    console.log("WXSDK appVersion--", this.appVersion),
                    (this.systemInfo = this.api.getSystemInfoSync()),
                    (this.screenWidth = this.systemInfo.screenWidth),
                    (this.screenHeight = this.systemInfo.screenHeight),
                    console.log(
                      "\u7cfb\u7edf\u4fe1\u606f\uff1a" +
                        JSON.stringify(this.systemInfo)
                    ),
                    this.api.showShareMenu({ withShareTicket: !1 }),
                    this.initBannerAd(),
                    this.createInsertAd(),
                    this.createVideoAd(),
                    this.api.onShow(function (t) {
                      (this.sceneNum = t.scene),
                        o.instance.EggscallBack &&
                          (o.instance.EggscallBack(),
                          console.log("\u8fd4\u56de\u5c0f\u6e38\u620f"),
                          (o.instance.EggscallBack = null));
                    });
                }),
                (e.prototype.onEggsCallBack = function (t) {
                  o.instance.EggscallBack = t;
                }),
                (e.prototype.initShareConfig = function () {
                  cc.loader.load("", function (t, e) {
                    null == t &&
                      ((o.instance.shareConfig = e),
                      o.instance.onShareAppMessage());
                  });
                }),
                (e.prototype.httpsuccess = function (t) {
                  t &&
                    t.info &&
                    t.info.touchFlag &&
                    (0 == t.info.touchFlag
                      ? (o.hasOpen = !1)
                      : 1 == t.info.touchFlag && (o.hasOpen = !0)),
                    console.log(t, "\u6210\u529f", o.hasOpen);
                }),
                (e.prototype.httpfailed = function (t) {
                  console.log(t, "\u5931\u8d25");
                }),
                (e.prototype.onShareAppMessage = function () {
                  var t =
                      "\u80fd\u8fc7\u8fd9\u5173\u7684\u5927\u4f6c\u542c\u8bf4\u8003\u8bd5\u90fd\u65e0\u538b\u529b\uff0c\u4f60\u884c\u5417\uff1f",
                    e = "";
                  this.shareConfig &&
                    ((t = this.shareConfig.onShareAppMessage.title),
                    (e = this.shareConfig.onShareAppMessage.imageUrl)),
                    this.api.onShareAppMessage(function () {
                      return { title: t, imageUrl: e, query: "id=heygame" };
                    });
                }),
                (e.prototype.shareAppMessage = function (t) {
                  var e =
                      "\u80fd\u8fc7\u8fd9\u5173\u7684\u5927\u4f6c\u542c\u8bf4\u8003\u8bd5\u90fd\u65e0\u538b\u529b\uff0c\u4f60\u884c\u5417\uff1f",
                    o = "";
                  this.shareConfig &&
                    ((e = this.shareConfig.onShareAppMessage.title),
                    (o = this.shareConfig.onShareAppMessage.imageUrl)),
                    (this.shareCallBack = t),
                    (this.startShareTime = this.getSysTime()),
                    this.shareNum++,
                    this.api.shareAppMessage({
                      title: e,
                      imageUrl: o,
                      query: "id=heygame",
                    });
                }),
                (e.prototype.onShareFinish = function (t) {
                  t
                    ? this.showToastMsg("\u5206\u4eab\u6210\u529f")
                    : this.showToastMsg("\u5206\u4eab\u5931\u8d25"),
                    this.shareCallBack && this.shareCallBack(t);
                }),
                (e.prototype.showBannerVisible = function (t) {
                  this.bannerAd
                    ? t
                      ? this.bannerAd.show()
                      : this.bannerAd.hide()
                    : this.createBannerAd(!1);
                }),
                (e.prototype.initBannerAd = function () {
                  var t = this;
                  this.createBannerAd(!1),
                    this.api.onHide(function () {
                      console.log("wx.onhide"),
                        t.isFirstInGame || t.createBannerAd(!0);
                    });
                }),
                (e.prototype.createBannerAd = function (t) {
                  void 0 === t && (t = !1),
                    this.bannerAd &&
                      (this.bannerAd.destroy(), (this.bannerAd = null)),
                    (this.bannerAd = this.api.createBannerAd({
                      adUnitId: this.BANNER_ID,
                      style: { width: 200, top: 0, left: 0 },
                    })),
                    this.bannerAd.onResize(function () {
                      (o.instance.bannerAd.style.left =
                        o.instance.screenWidth / 2 -
                        o.instance.bannerAd.style.realWidth / 2 +
                        0.1),
                        (o.instance.bannerAd.style.top =
                          o.instance.screenHeight -
                          o.instance.bannerAd.style.realHeight +
                          0.1);
                    }),
                    this.bannerAd.onLoad(function () {
                      t && o.instance.showBannerAd(), (o.hasLoad = !0);
                    }),
                    this.bannerAd.onError(function (t) {
                      console.log(
                        "\u9519\u8bef\u76d1\u542c\uff1a",
                        JSON.stringify(t)
                      ),
                        (o.hasLoad = !1);
                    });
                }),
                (e.prototype.showBannerAd = function (t) {
                  void 0 === t && (t = 100),
                    null != this.bannerAd
                      ? (this.bannerAd.show(), (this.isFirstInGame = !1))
                      : this.createBannerAd(!0);
                }),
                (e.prototype.hideBannerAd = function () {
                  null != this.bannerAd && this.bannerAd.hide();
                }),
                (e.prototype.destroyBannerAd = function () {
                  null != this.bannerAd &&
                    (this.bannerAd.destroy(), (this.bannerAd = null));
                }),
                (e.prototype.createInsertAd = function () {
                  null != this.insertAd && this.insertAd.destroy(),
                    (this.insertAd = this.api.createInterstitialAd({
                      adUnitId: this.INSERT_ID,
                    })),
                    this.insertAd.onLoad(function () {
                      console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d");
                    }),
                    this.insertAd.onClose(function () {
                      console.log("\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed"),
                        o.instance.createInsertAd();
                    }),
                    this.insertAd.onError(function (t) {
                      console.log(
                        "\u63d2\u5c4f\u5e7f\u544a\u51fa\u9519\uff1a",
                        JSON.stringify(t)
                      );
                    });
                }),
                (e.prototype.showInsertAd = function (t) {
                  void 0 === t && (t = 200),
                    null != this.insertAd
                      ? (o.instance.hideBannerAd(),
                        this.insertAd.show().catch(function (t) {
                          console.log(
                            "\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u9519\u8bef:" +
                              JSON.stringify(t)
                          );
                        }))
                      : console.log(
                          "\u6ca1\u6709\u63d2\u5c4f\u5e7f\u544a\uff0c\u76f4\u63a5\u9000\u51fa"
                        );
                }),
                (e.prototype.showNativeAd = function (t, e) {
                  void 0 === t && (t = "1");
                }),
                (e.prototype.onNativeAdClick = function (t) {}),
                (e.prototype.onNativeDestroy = function () {}),
                (e.prototype.navigateToMiniGame = function (t, e, o, n, i) {}),
                (e.prototype.vibrateLong = function () {
                  this.api.vibrateLong();
                }),
                (e.prototype.vibrateShort = function () {
                  this.api.vibrateShort();
                }),
                (e.prototype.createVideoAd = function () {
                  try {
                    console.log(
                      "\u521b\u5efa\u5fae\u4fe1\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"
                    ),
                      (this.videoAd = this.api.createRewardedVideoAd({
                        adUnitId: this.VIDEO_ID,
                      })),
                      this.videoAd
                        .load()
                        .then(function () {
                          console.log("ad loaded");
                        })
                        .catch(function (t) {
                          console.log(
                            "\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25"
                          );
                        }),
                      this.videoAd.onClose(function (t) {
                        void 0 == t
                          ? o.instance.videoAdCallBack(0)
                          : (console.log("==> rewardedVideoAd onClose", t),
                            t.isEnded
                              ? o.instance.videoAdCallBack(0)
                              : (o.instance.videoAdCallBack(1),
                                console.log("\u5e7f\u544a\u6ca1\u770b\u5b8c")));
                      }),
                      this.videoAd.onError(function (t) {
                        console.log("onError:", t.errMsg),
                          o.instance.videoAdCallBack(2);
                      });
                  } catch (t) {
                    console.log("wxRewardVideoAd error", t);
                  }
                }),
                (e.prototype.showVideoAd = function (t, e) {
                  void 0 === t && (t = 300),
                    (this.videoAdCallBack = e),
                    this.videoAd &&
                      this.videoAd
                        .show()
                        .then(function () {
                          console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f");
                        })
                        .catch(function (t) {
                          console.log(
                            "\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898",
                            t
                          ),
                            o.instance.videoAd.load().then(function () {
                              console.log(
                                "\u624b\u52a8\u52a0\u8f7d\u6210\u529f"
                              ),
                                o.instance.videoAd.show();
                            });
                        });
                }),
                (e.prototype.onBegin = function (t) {
                  console.log("\u5f00\u59cb\u7b2c" + t + "\u5173"),
                    this.api.aldStage.onStart({
                      stageId: t,
                      stageName: "\u7b2c" + t + "\u5173",
                    }),
                    this.onEvent({
                      id: "Mission",
                      label: "\u5173\u5361\u5f00\u59cb",
                      params: {
                        stageId: t,
                        stageName: "\u7b2c" + t + "\u5173",
                        desc: "\u5173\u5361\u5f00\u59cb",
                      },
                    });
                }),
                (e.prototype.onCompleted = function (t) {
                  console.log("\u7ed3\u675f\u7b2c" + t + "\u5173"),
                    this.api.aldStage.onEnd({
                      stageId: t,
                      stageName: "\u7b2c" + t + "\u5173",
                      event: "complete",
                      params: { desc: "\u5173\u5361\u5b8c\u6210" },
                    }),
                    this.onEvent({
                      id: "Mission",
                      label: "\u5173\u5361\u5b8c\u6210",
                      params: {
                        stageId: t,
                        stageName: "\u7b2c" + t + "\u5173",
                        desc: "\u5173\u5361\u5b8c\u6210",
                      },
                    });
                }),
                (e.prototype.onFailed = function (t) {
                  console.log("\u5931\u8d25\u7b2c" + t.missionId + "\u5173"),
                    this.api.aldStage.onEnd({
                      stageId: t.missionId,
                      stageName: "\u7b2c" + t.missionId + "\u5173",
                      event: "fail",
                      params: { desc: t.cause },
                    }),
                    this.onEvent({
                      id: "Mission",
                      label: "\u5931\u8d25",
                      params: {
                        stageId: t.missionId,
                        stageName: "\u7b2c" + t.missionId + "\u5173",
                        desc: t.cause,
                      },
                    });
                }),
                (e.prototype.onEvent = function (t) {
                  switch (
                    (console.log("onEvent:" + JSON.stringify(t)), t.eventType)
                  ) {
                    case "adVideo":
                      this.api.leuok.adVideo({
                        type: t.videoId,
                        subType: t.subType,
                      });
                      break;
                    case "appOnce":
                      this.api.leuok.appOnce({ actionNumber: t.actionNumber });
                  }
                }),
                (e.prototype.showToastMsg = function (t) {
                  this.api.showToast({
                    title: t,
                    duration: 2e3,
                    success: function (t) {
                      console.log("" + t);
                    },
                    fail: function (t) {
                      console.log("showToast\u8c03\u7528\u5931\u8d25");
                    },
                  });
                }),
                (e.appId = "wxac06bbcadb9fbbe4"),
                (e.hasLoad = !1),
                (e.hasOpen = !1),
                (o = c([d], e))
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    WoodenBox: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "d634ehgpvNIeKMUQeRgwgnR", "WoodenBox");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("Unit_Base"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "wooden_box");
                }),
                (e.prototype.connectAround = function (t) {
                  var e = this.node.addComponent(cc.WeldJoint);
                  (e.connectedBody = t.getComponent(cc.RigidBody)),
                    (e.collideConnected = !0),
                    (e.anchor = cc.v2(
                      (t.x - this.node.x) / 2,
                      (t.y - this.node.y) / 2
                    )),
                    this.setOtherAnchor(t, e),
                    (e.referenceAngle = -t.angle),
                    e.apply();
                }),
                c([d], e)
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    WoodenRamp: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "0d814ycYbNArKCWy3TeGotN", "WoodenRamp");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("Unit_Base"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "wooden_ramp");
                }),
                (e.prototype.connectAround = function (t) {
                  var e = this.node.addComponent(cc.WeldJoint);
                  (e.connectedBody = t.getComponent(cc.RigidBody)),
                    (e.collideConnected = !0),
                    this.setSelfAnchor(t, e),
                    this.setOtherAnchor(t, e),
                    (e.referenceAngle = this.node.angle - t.angle),
                    e.apply();
                }),
                c([d], e)
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    Wooden_Wheel: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "646bcjze5NGMIqWS6UURrRB", "Wooden_Wheel");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("Unit_Base"),
          l = cc._decorator,
          d = l.ccclass,
          u =
            (l.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.onLoad = function () {
                  t.prototype.onLoad.call(this), (this.name = "wooden_wheel");
                }),
                (e.prototype.setOtherAnchor = function (t, e) {
                  var o = -(t.x - this.node.x),
                    n = -(t.y - this.node.y);
                  t.angle % 360 == 90
                    ? (e.connectedAnchor = cc.v2(n, -o))
                    : t.angle % 360 == 180
                    ? (e.connectedAnchor = cc.v2(-o, -n))
                    : t.angle % 360 == 270
                    ? (e.connectedAnchor = cc.v2(-n, o))
                    : t.angle % 360 == 0 && (e.connectedAnchor = cc.v2(o, n));
                }),
                (e.prototype.connectAround = function (t) {
                  if (this.node.position.sub(t.position).mag() <= 77) {
                    var e = this.node
                        .getChildByName("wheel_down")
                        .addComponent(cc.RevoluteJoint),
                      o = this.node
                        .getChildByName("wheel_up")
                        .addComponent(cc.RevoluteJoint);
                    (e.connectedBody = t.getComponent(cc.RigidBody)),
                      (e.anchor = cc.v2(0, 0)),
                      this.setOtherAnchor(t, e),
                      (e.collideConnected = !0),
                      e.apply(),
                      (o.connectedBody = t.getComponent(cc.RigidBody)),
                      (o.anchor = cc.v2(0, 0)),
                      this.setOtherAnchor(t, o),
                      (o.collideConnected = !0),
                      o.apply();
                  }
                }),
                c([d], e)
              );
            })(s.default));
        (a.default = u), cc._RF.pop();
      },
      {},
    ],
    YYGplatform: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a69fe/2afBAcIJcb/Baktae", "YYGplatform"),
          (window.SOUNDFlag = !0);
        var n = "Tank Stars - Battle Arena",
          i = (function (t) {
            return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t =
              t.toLowerCase()).replace(/(^\s*)|(\s*$)/g, "")).replace(
              /[^A-Za-z0-9-]+/g,
              " "
            )).replace(/\b\w+\b/g, s)).replace(/\s/g, "-")).replace(
              /--/g,
              "-"
            )).replace(/--/g, "-")).replace(/--/g, "-")).replace(
              /--/g,
              "-"
            )).replace(/--/g, "-")).replace(/(^-*)|(-*$)/g, ""));
          })(n);
        console.error("\u6e38\u620f\u540d:", n), console.error("nameId:", i);
        var a = { appName: n, appID: i, isGD: !1 },
          r = 200,
          c = 150;
        function s(t) {
          return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
        }
        var l,
          d,
          u = 0,
          p = !0,
          f = [],
          h = [],
          y = [],
          m = !1,
          _ = 0;
        (_ = 4),
          (window.YYGplatform = (function () {
            window.platformInited = !1;
            var t = function (t, e) {
                if ("undefined" == typeof YYGGames) {
                  var o = document.createElement("script");
                  o.setAttribute("type", "text/javascript"),
                    o.setAttribute("src", t),
                    document.getElementsByTagName("body")[0].appendChild(o),
                    e && (o.onload = e);
                } else e();
              },
              e = function (t) {
                document.getElementsByTagName("title")[0].innerText = t;
              },
              o = function () {
                var t = document.createElement("style");
                (t.innerText =
                  "body {overflow: hidden;} #Game {position: absolute;margin: 0;overflow: hidden;width: "
                    .concat(1334, " px; height: ")
                    .concat(
                      750,
                      "px;left: 50%;top: 50%;transform: translate(-50%, -50%);}"
                    ) +
                  "#AdTip {overflow: hidden;word-break: break-all;overflow-wrap: break-word;font-family: Arial;padding: 10px;min-height: 20px;color: rgb(255, 255, 255);line-height: 20px;text-align: center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0, 0.7);font-size: 18px;width: 90%;opacity: 1;-webkit-transform: 0.5s ease-in, opacity 0.5s ease-in;}.divImage {position: absolute;z-index: 99999;}"),
                  document.head.appendChild(t);
              },
              n = function (t) {
                var e =
                    document.getElementById("GameDiv") ||
                    document.getElementById("Game"),
                  o = document.createElement("div");
                o.setAttribute("id", t),
                  o.setAttribute("class", "divImage"),
                  o.setAttribute(
                    "onclick",
                    '(()=>{YYGGames.navigate("Loading", "LOGO");})()'
                  ),
                  o.setAttribute("style", "width:15%;top: 0%;right:0%;");
                var n = document.createElement("img");
                n.setAttribute("width", "100%"),
                  n.setAttribute("id", t + "Image"),
                  (window.gamelogoImg = n),
                  (n.src = "g");
                //   o.appendChild(n),
                //   e.appendChild(o);
              },
              i = function (t) {
                // var e = t.getChildByName("GameBox1"),
                //   o = t.getChildByName("GameBox2"),
                //   n = new cc.Node();
                // (window.game1 = n),
                //   (n.name = "GameBox1"),
                //   (n.width = 5),
                //   (n.height = 5),
                //   (n.anchorX = n.anchorY = 0.5),
                //   (n.x = e.x),
                //   (n.y = e.y),
                //   (window.GameBox1 = n);
                // var i = new cc.Node();
                // (i.name = "item"),
                //   (i.width = 5),
                //   (i.height = 5),
                //   (i.anchorX = i.anchorY = 0.5),
                //   (i.x = 0),
                //   (i.y = 0);
                // var a = i.addComponent(cc.Sprite);
                // (a.sizeMode = 0), (a.spriteFrame = window.di);
                // var s = new cc.Node();
                // (s.x = 0),
                //   (s.y = 0),
                //   (s.width = r),
                //   (s.height = c),
                //   (s.name = "Mask");
                // var l = s.addComponent(cc.Mask);
                // (l.type = cc.Mask.Type.IMAGE_STENCIL),
                //   (l.spriteFrame = window.di),
                //   (l.inverted = !1),
                //   i.addChild(s),
                //   n.addChild(i);
                // var d = new cc.Node();
                // (window.GameBox2 = d),
                //   (window.game2 = d),
                //   (d.name = "GameBox2"),
                //   (d.width = r + 15),
                //   (d.height = c + 15),
                //   (d.anchorX = d.anchorY = 0.5),
                //   (d.x = o.x),
                //   (d.y = o.y);
                // var u = new cc.Node();
                // (u.name = "item2"),
                //   (u.width = r + 15),
                //   (u.height = c + 15),
                //   (u.anchorX = u.anchorY = 0.5),
                //   (u.x = 0),
                //   (u.y = 0);
                // var p = u.addComponent(cc.Sprite);
                // (p.sizeMode = 0), (p.spriteFrame = window.di);
                // var f = new cc.Node();
                // (f.x = 0),
                //   (f.y = 0),
                //   (f.width = r),
                //   (f.height = c),
                //   (f.name = "Mask2");
                // var h = f.addComponent(cc.Mask);
                // (h.type = cc.Mask.Type.IMAGE_STENCIL),
                //   (h.spriteFrame = window.di),
                //   (h.inverted = !1),
                //   u.addChild(f),
                //   d.addChild(u);
                // var y = new cc.Node();
                // return (
                //   y.addChild(n),
                //   y.addChild(d),
                //   (YYGplatform.GameBox = y),
                //   t.addChild(y),
                //   console.log("AdNode: ", [n, d]),
                //   y
                // );
              },
              s = function (t, e, o) {
                (t.scaleX = o), (t.scaleY = o), (e.scaleX = o), (e.scaleY = o);
                for (var n = [], i = 0; i < 12; i++) n.push(i);
                var a = n[Math.floor(12 * Math.random())];
                n.splice(a, 1);
                var s = cc.find("item/Mask", t),
                  l = new cc.Node();
                s.addChild(l);
                var u = l.addComponent(cc.Sprite);
                (u.sizeMode = 0),
                  (u.spriteFrame = new cc.SpriteFrame(y[a])),
                  (l.width = r),
                  (l.height = c),
                  l.addComponent(cc.Button),
                  l.on("click", function () {
                    //YYGGames.navigate("MainMenu", "MORE", d[a].id);
                  });
                var p = n[Math.floor(11 * Math.random())],
                  f = cc.find("item2/Mask2", e),
                  h = new cc.Node();
                f.addChild(h);
                var m = h.addComponent(cc.Sprite);
                (m.sizeMode = 0),
                  (m.spriteFrame = new cc.SpriteFrame(y[p])),
                  (h.width = r),
                  (h.height = c),
                  h.addComponent(cc.Button),
                  h.on("click", function () {
                    //YYGGames.navigate("MainMenu", "MORE", d[p].id);
                  });
              },
              g = function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1,
                  o = new cc.Node();
                (o.name = "GameBanner"),
                  (o.width = 0),
                  (o.height = 0),
                  (o.anchorX = o.anchorY = 0),
                  (o.x = -800),
                  (o.y = -76);
                var n = new cc.Node();
                (n.name = "New ScrollView"),
                  (n.width = 0),
                  (n.height = 0),
                  (n.anchorX = n.anchorY = 0),
                  (n.x = n.y = 0);
                var i = n.addComponent(cc.Sprite);
                (i.sizeMode = 0), (i.spriteFrame = window.di2);
                var a = new cc.Node();
                (a.name = "view"),
                  (a.width = 2500),
                  (a.height = 185),
                  (a.anchorX = a.anchorY = 0),
                  (a.x = a.y = 0);
                var s = a.addComponent(cc.Mask);
                (s.type = cc.Mask.Type.IMAGE_STENCIL),
                  (s.spriteFrame = window.di),
                  (s.inverted = !1);
                var l = new cc.Node();
                (l.name = "content"),
                  (l.width = 2500),
                  (l.height = 185),
                  (l.anchorX = l.anchorY = 0),
                  (l.x = l.y = 0);
                var d = new cc.Node();
                (d.name = "item"),
                  (d.anchorX = d.anchorY = 0),
                  (d.x = 10),
                  (d.y = 20),
                  (d.width = r + 15),
                  (d.height = c + 15);
                var u = new cc.Node();
                (u.x = 72.5),
                  (u.y = 72.5),
                  (u.width = r),
                  (u.height = c),
                  (u.name = "Mask"),
                  t.addChild(o),
                  o.addChild(n),
                  n.addChild(a),
                  a.addChild(l),
                  l.addChild(d),
                  d.addChild(u);
                var p = u.addComponent(cc.Mask);
                return (
                  (p.type = cc.Mask.Type.IMAGE_STENCIL),
                  (p.spriteFrame = window.di),
                  (p.inverted = !1),
                  (YYGplatform.GameBanner = o),
                  (window.GameBanner = o),
                  (o.scaleX = 0),
                  (o.scaleY = 0),
                  o
                );
              },
              v = function (t) {
                t &&
                  p &&
                  (t.x > -(t.width - 667 - 50) ? (t.x -= 0.5) : (t.x = 0));
              },
              b = function (n) {
                e(a.appName),
                  o(),
                  t("YYGGames.js", function () {
                    var t = this;
                    YYGGames.init({
                      appName: "YYGGames", //a.appID,
                      channel: _,
                      config: {
                        gamedistributionId: a.gamedistributionId,
                        gamemonetizeId: a.gamemonetizeId,
                      },
                      complete: function () {
                        (window.platformInited = !0),
                          (window.showMetheAuthor = function () {
                            var t = document.createElement("iframe");
                            (t.style.display = "none"),
                              document.head.appendChild(t),
                              t.contentWindow.console.log.apply(this, [
                                "%c %c %c YYGGAMES %c%s %c %c ",
                                "background: #fb8cb3",
                                "background: #d44a52",
                                "color: #ffffff; background: #871905",
                                "color: #ffffff;background: #871905;",
                                "116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103"
                                  .split(",")
                                  .map(function (t) {
                                    return String.fromCharCode(~~t);
                                  })
                                  .join(""),
                                "background: #d44a52",
                                "background: #fb8cb3",
                              ]);
                          }),
                          document.getElementById("AdTip") &&
                            (YYGGames.showTip = function (t, e) {
                              (e = isNaN(e) ? 2e3 : e),
                                (document.getElementById("AdTip").innerHTML =
                                  t),
                                (document.getElementById(
                                  "AdTip"
                                ).style.display = ""),
                                setTimeout(function () {
                                  document.getElementById(
                                    "AdTip"
                                  ).style.display = "none";
                                }, e);
                            });
                        location.href;
                        YYGGames.moreGameEnabled ? N(n) : ((m = !0), n()),
                          YYGGames.addEventListener(
                            YYGGames.events.adDismissed,
                            t,
                            function () {
                              YYGGames.showTip(
                                "Pls watch the ad completely, so that you can claim your reward"
                              );
                            }
                          ),
                          YYGGames.addEventListener(
                            YYGGames.events.beforeShowAd,
                            t,
                            function () {
                              (YYGGames.audioEngine.pause = !0),
                                cc.game.pause();
                            }
                          ),
                          YYGGames.addEventListener(
                            YYGGames.events.afterShowAd,
                            t,
                            function () {
                              (YYGGames.audioEngine.pause =
                                !!cc.sys.localStorage.getItem(
                                  "Tank-Stars-Battle-Arena-MusicState"
                                ) &&
                                "true" ==
                                  cc.sys.localStorage.getItem(
                                    "Tank-Stars-Battle-Arena-MusicState"
                                  )),
                                cc.game.canvas.blur(),
                                setTimeout(function () {
                                  cc.game.canvas.focus(),
                                    console.log(
                                      "cc.game.canvas.focus afterShowAd"
                                    );
                                }, 500),
                                cc.game.resume();
                            }
                          ),
                          YYGGames.addEventListener(
                            YYGGames.events.adBreakDone,
                            t,
                            function () {
                              cc.game.canvas.focus(),
                                console.log("cc.game.canvas.focus");
                            }
                          );
                      },
                    });
                  });
              },
              N = function (t) {
                t();
              };
            return {
              init: function (t) {
                cc.loader.load(
                  "https://h5gamessdk.yyggames.com/sdk/res/di1.png",
                  function (e, o) {
                    e ||
                      cc.loader.load(
                        "https://h5gamessdk.yyggames.com/sdk/res/di2.png",
                        function (e, n) {
                          if (!e) {
                            (window.di = new cc.SpriteFrame(o)),
                              (window.di2 = new cc.SpriteFrame(n));
                            var i = new XMLHttpRequest();
                            i.open("get", "cnf.json"),
                              i.send(null),
                              (i.onload = function () {
                                if (200 == i.status) {
                                  var e = JSON.parse(i.responseText);
                                  console.info(
                                    "%c cnf: ",
                                    "background:#a8edcc",
                                    e
                                  ),
                                    (a = e);
                                }
                                b(t);
                              });
                          }
                        }
                      );
                  }
                );
              },
              initGameBanner: function (t, e) {
                console.log("initGameBanner");
                var o = g(t, e);
                if (m) o.active = 0;
                else {
                  var n = cc.find("New ScrollView", o);
                  h = [];
                  for (var i = 0; i < y.length; i++) {
                    var a = cc.find("view/content/item", n),
                      s = cc.find("view/content", n),
                      u = cc.instantiate(a);
                    u.x = 10 + 220 * i;
                    var _ = cc.find("Mask", u),
                      b = new cc.Node(),
                      N = b.addComponent(cc.Sprite);
                    (N.sizeMode = 0),
                      (N.spriteFrame = new cc.SpriteFrame(y[i])),
                      (b.width = r),
                      (b.height = c),
                      _.addChild(b),
                      h.push(b),
                      f.push(_),
                      s.addChild(u);
                  }
                  console.log("btnArray: ", h);
                  for (
                    var C = function (t) {
                        h[t].addComponent(cc.Button),
                          h[t].on("click", function () {
                            console.log("btnArray[i]", t),
                              YYGGames.navigate("MainMenu", "MORE", d[t].id);
                          }),
                          h[t].on("mouseenter", function () {
                            0 != f.length &&
                              ((p = !1),
                              (f[t].scaleX = 1.1),
                              (f[t].scaleY = 1.1));
                          }),
                          h[t].on("mouseleave", function () {
                            0 != f.length &&
                              ((p = !0), (f[t].scaleX = 1), (f[t].scaleY = 1));
                          });
                        var e = document.getElementById("GameCanvas");
                        e &&
                          e.addEventListener("mouseout", function (e) {
                            0 != f.length &&
                              ((p = !0), (f[t].scaleX = 1), (f[t].scaleY = 1));
                          });
                      },
                      S = 0;
                    S < h.length;
                    S++
                  )
                    C(S);
                  l = setInterval(function () {
                    v(s);
                  }, 1);
                }
              },
              initGameBox: function (t, e) {
                // var o = i(t);
                // m
                //   ? (o.active = 0)
                //   : s(
                //       o.getChildByName("GameBox1"),
                //       o.getChildByName("GameBox2"),
                //       e
                //     );
              },
              removeBanner: function () {
                window.GameBanner && window.GameBanner.destroy(),
                  (f = []),
                  clearInterval(l);
              },
              showInterstitial: function (t) {
                // YYGGames.showInterstitial(t);
              },
              showReward: function (t) {
                // if (!YYGGames.rewardReady)
                //   return (
                //     YYGGames.showTip("No Available Video"),
                //     void (t.rewardDismissed && t.rewardDismissed())
                //   );
                // YYGGames.showReward(t);

                h5Ubi.onCallShowReward({
                  onAndroidWebView: () => {
                    console.log("WebView");
                    // Xử lý trả thưởng khi gọi trên Android
                    window.rewardCallback = t;
                    // Android.showRewardAd();
                  },
                  onBrowser: () => {
                    console.log("Browser");
                    //Xử lý trả thưởng dưới web để test
                    t();
                  },
                });
                //window.resolveAdResult = t;
                //t();
              },
              showTip: function (t) {
                YYGGames.showTip(t);
              },
            };
          })()),
          cc._RF.pop();
      },
      {},
    ],
    test: [
      function (t, e, o) {
        "use strict";
        function n(t) {
          "@babel/helpers - typeof";
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        cc._RF.push(e, "aacf0EJi3NH6p7umN+JXVCL", "test");
        var i = t,
          a = o,
          r = (function () {
            var t = function (e, o) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(e, o);
            };
            return function (e, o) {
              function n() {
                this.constructor = e;
              }
              t(e, o),
                (e.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })(),
          c = function (t, e, o, i) {
            var a,
              r = arguments.length,
              c =
                r < 3
                  ? e
                  : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, o))
                  : i;
            if (
              "object" ==
                ("undefined" == typeof Reflect ? "undefined" : n(Reflect)) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(t, e, o, i);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (a = t[s]) &&
                  (c = (r < 3 ? a(c) : r > 3 ? a(e, o, c) : a(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c;
          };
        Object.defineProperty(a, "__esModule", { value: !0 });
        var s = i("UIManager"),
          l = cc._decorator,
          d = l.ccclass,
          u = l.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.label = null), (e.text = "hello"), e;
            }
            return (
              r(e, t),
              (e.prototype.start = function () {}),
              (e.prototype.onEvent_btn_start = function () {
                console.log("btn start"),
                  s.default.ShowUI_Counting(
                    this.onEvent_callback_countingdownfinished.bind(this)
                  );
              }),
              (e.prototype.onEvent_callback_countingdownfinished = function () {
                console.log("counting down finsihed");
              }),
              c([u(cc.Label)], e.prototype, "label", void 0),
              c([u], e.prototype, "text", void 0),
              c([d], e)
            );
          })(cc.Component);
        (a.default = p), cc._RF.pop();
      },
      {},
    ],
  },
  {},
  [
    "APPSDK",
    "Ballista",
    "Cannon",
    "CarManager",
    "Collect_List_Unit_item",
    "Config",
    "DataDefiner",
    "DataManager",
    "Driver",
    "Electric_Saw",
    "Engine",
    "EnumDefiner",
    "EventManager",
    "Fan",
    "FloatNodeItem",
    "Fuel",
    "GameLogic",
    "GamePlatform",
    "GamePlatformType",
    "GameUtil",
    "HealthProgress",
    "IronBox",
    "IronRamp",
    "ItemClickEvent",
    "ItemData",
    "Machine_Gun",
    "Mortar",
    "NativeAd",
    "OPPOSDK",
    "Offroad_Wheel",
    "OtherGameManager",
    "OtherGame_Data",
    "OtherGame_DrawerGridManager",
    "OtherGame_DrawerManager",
    "OtherGame_FourManager",
    "OtherGame_GridManager",
    "PCSDK",
    "PoolManager",
    "Prepare_List_Unit_item",
    "QQSDK",
    "Rocket",
    "SDK",
    "ScrollList",
    "ScrollVertical",
    "Shop_Box_Item",
    "Shop_Resource_Item",
    "Small_Offroad_Wheel",
    "Small_Wooden_Wheel",
    "SoundManager",
    "Spell_Unit_item",
    "Spike",
    "Spin",
    "Spring",
    "Starter",
    "StaticData",
    "TNTBox",
    "TTSDK",
    "UIManager",
    "UI_Cartoon",
    "UI_Collect",
    "UI_CollectDetails",
    "UI_Counting",
    "UI_Fight",
    "UI_FightPrepare",
    "UI_Finish",
    "UI_Guide",
    "UI_Interlude",
    "UI_LevelCell",
    "UI_LevelUiBase",
    "UI_Loading",
    "UI_LoginReward",
    "UI_LoginReward_Item",
    "UI_Notification",
    "UI_Notification_Panel",
    "UI_OtherGames",
    "UI_Reward",
    "UI_RewardBox",
    "UI_RewardBox_Item",
    "UI_RewardCollector",
    "UI_Reward_Item",
    "UI_Rewarditem",
    "UI_Searching",
    "UI_Self_Resource",
    "UI_Shop",
    "UI_StarReward",
    "UI_Tips",
    "UI_Title",
    "UI_VideoTips",
    "UI_Waiting",
    "UI_WheelReward",
    "UI_WheelReward_Item",
    "Unit_Base",
    "VIVOSDK",
    "WXSDK",
    "WoodenBox",
    "WoodenRamp",
    "Wooden_Wheel",
    "YYGplatform",
    "test",
  ]
);
