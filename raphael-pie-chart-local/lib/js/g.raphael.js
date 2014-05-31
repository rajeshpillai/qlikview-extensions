/*!
 * g.Raphael 0.5 - Charting library, based on RaphaÃ«l
 *
 * Copyright (c) 2009 Dmitry Baranovskiy (http://g.raphaeljs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael.el.popup = function(d, k, h, g) {
  var c = this.paper || this[0].paper,
      f, j, b, e, a;
  if (!c) {
    return
  }
  switch (this.type) {
  case "text":
  case "circle":
  case "ellipse":
    b = true;
    break;
  default:
    b = false
  }
  d = d == null ? "up" : d;
  k = k || 5;
  f = this.getBBox();
  h = typeof h == "number" ? h : (b ? f.x + f.width / 2 : f.x);
  g = typeof g == "number" ? g : (b ? f.y + f.height / 2 : f.y);
  e = Math.max(f.width / 2 - k, 0);
  a = Math.max(f.height / 2 - k, 0);
  this.translate(h - f.x - (b ? f.width / 2 : 0), g - f.y - (b ? f.height / 2 : 0));
  f = this.getBBox();
  var i = {
    up: ["M", h, g, "l", -k, -k, -e, 0, "a", k, k, 0, 0, 1, -k, -k, "l", 0, -f.height, "a", k, k, 0, 0, 1, k, -k, "l", k * 2 + e * 2, 0, "a", k, k, 0, 0, 1, k, k, "l", 0, f.height, "a", k, k, 0, 0, 1, -k, k, "l", -e, 0, "z"].join(","),
    down: ["M", h, g, "l", k, k, e, 0, "a", k, k, 0, 0, 1, k, k, "l", 0, f.height, "a", k, k, 0, 0, 1, -k, k, "l", -(k * 2 + e * 2), 0, "a", k, k, 0, 0, 1, -k, -k, "l", 0, -f.height, "a", k, k, 0, 0, 1, k, -k, "l", e, 0, "z"].join(","),
    left: ["M", h, g, "l", -k, k, 0, a, "a", k, k, 0, 0, 1, -k, k, "l", -f.width, 0, "a", k, k, 0, 0, 1, -k, -k, "l", 0, -(k * 2 + a * 2), "a", k, k, 0, 0, 1, k, -k, "l", f.width, 0, "a", k, k, 0, 0, 1, k, k, "l", 0, a, "z"].join(","),
    right: ["M", h, g, "l", k, -k, 0, -a, "a", k, k, 0, 0, 1, k, -k, "l", f.width, 0, "a", k, k, 0, 0, 1, k, k, "l", 0, k * 2 + a * 2, "a", k, k, 0, 0, 1, -k, k, "l", -f.width, 0, "a", k, k, 0, 0, 1, -k, -k, "l", 0, -a, "z"].join(",")
  };
  j = {
    up: {
      x: -!b * (f.width / 2),
      y: -k * 2 - (b ? f.height / 2 : f.height)
    },
    down: {
      x: -!b * (f.width / 2),
      y: k * 2 + (b ? f.height / 2 : f.height)
    },
    left: {
      x: -k * 2 - (b ? f.width / 2 : f.width),
      y: -!b * (f.height / 2)
    },
    right: {
      x: k * 2 + (b ? f.width / 2 : f.width),
      y: -!b * (f.height / 2)
    }
  }[d];
  this.translate(j.x, j.y);
  return c.path(i[d]).attr({
    fill: "#000",
    stroke: "none"
  }).insertBefore(this.node ? this : this[0])
};
Raphael.el.tag = function(f, b, l, k) {
  var i = 3,
      e = this.paper || this[0].paper;
  if (!e) {
    return
  }
  var c = e.path().attr({
    fill: "#000",
    stroke: "#000"
  }),
      j = this.getBBox(),
      m, h, a, g;
  switch (this.type) {
  case "text":
  case "circle":
  case "ellipse":
    a = true;
    break;
  default:
    a = false
  }
  f = f || 0;
  l = typeof l == "number" ? l : (a ? j.x + j.width / 2 : j.x);
  k = typeof k == "number" ? k : (a ? j.y + j.height / 2 : j.y);
  b = b == null ? 5 : b;
  h = 0.5522 * b;
  if (j.height >= b * 2) {
    c.attr({
      path: ["M", l, k + b, "a", b, b, 0, 1, 1, 0, -b * 2, b, b, 0, 1, 1, 0, b * 2, "m", 0, -b * 2 - i, "a", b + i, b + i, 0, 1, 0, 0, (b + i) * 2, "L", l + b + i, k + j.height / 2 + i, "l", j.width + 2 * i, 0, 0, -j.height - 2 * i, -j.width - 2 * i, 0, "L", l, k - b - i].join(",")
    })
  } else {
    m = Math.sqrt(Math.pow(b + i, 2) - Math.pow(j.height / 2 + i, 2));
    c.attr({
      path: ["M", l, k + b, "c", -h, 0, -b, h - b, -b, -b, 0, -h, b - h, -b, b, -b, h, 0, b, b - h, b, b, 0, h, h - b, b, -b, b, "M", l + m, k - j.height / 2 - i, "a", b + i, b + i, 0, 1, 0, 0, j.height + 2 * i, "l", b + i - m + j.width + 2 * i, 0, 0, -j.height - 2 * i, "L", l + m, k - j.height / 2 - i].join(",")
    })
  }
  f = 360 - f;
  c.rotate(f, l, k);
  if (this.attrs) {
    this.attr(this.attrs.x ? "x" : "cx", l + b + i + (!a ? this.type == "text" ? j.width : 0 : j.width / 2)).attr("y", a ? k : k - j.height / 2);
    this.rotate(f, l, k);
    f > 90 && f < 270 && this.attr(this.attrs.x ? "x" : "cx", l - b - i - (!a ? j.width : j.width / 2)).rotate(180, l, k)
  } else {
    if (f > 90 && f < 270) {
      this.translate(l - j.x - j.width - b - i, k - j.y - j.height / 2);
      this.rotate(f - 180, j.x + j.width + b + i, j.y + j.height / 2)
    } else {
      this.translate(l - j.x + b + i, k - j.y - j.height / 2);
      this.rotate(f, j.x - b - i, j.y + j.height / 2)
    }
  }
  return c.insertBefore(this.node ? this : this[0])
};
Raphael.el.drop = function(d, g, f) {
  var e = this.getBBox(),
      c = this.paper || this[0].paper,
      a, j, b, i, h;
  if (!c) {
    return
  }
  switch (this.type) {
  case "text":
  case "circle":
  case "ellipse":
    a = true;
    break;
  default:
    a = false
  }
  d = d || 0;
  g = typeof g == "number" ? g : (a ? e.x + e.width / 2 : e.x);
  f = typeof f == "number" ? f : (a ? e.y + e.height / 2 : e.y);
  j = Math.max(e.width, e.height) + Math.min(e.width, e.height);
  b = c.path(["M", g, f, "l", j, 0, "A", j * 0.4, j * 0.4, 0, 1, 0, g + j * 0.7, f - j * 0.7, "z"]).attr({
    fill: "#000",
    stroke: "none"
  }).rotate(22.5 - d, g, f);
  d = (d + 90) * Math.PI / 180;
  i = (g + j * Math.sin(d)) - (a ? 0 : e.width / 2);
  h = (f + j * Math.cos(d)) - (a ? 0 : e.height / 2);
  this.attrs ? this.attr(this.attrs.x ? "x" : "cx", i).attr(this.attrs.y ? "y" : "cy", h) : this.translate(i - e.x, h - e.y);
  return b.insertBefore(this.node ? this : this[0])
};
Raphael.el.flag = function(e, k, j) {
  var g = 3,
      c = this.paper || this[0].paper;
  if (!c) {
    return
  }
  var b = c.path().attr({
    fill: "#000",
    stroke: "#000"
  }),
      i = this.getBBox(),
      f = i.height / 2,
      a;
  switch (this.type) {
  case "text":
  case "circle":
  case "ellipse":
    a = true;
    break;
  default:
    a = false
  }
  e = e || 0;
  k = typeof k == "number" ? k : (a ? i.x + i.width / 2 : i.x);
  j = typeof j == "number" ? j : (a ? i.y + i.height / 2 : i.y);
  b.attr({
    path: ["M", k, j, "l", f + g, -f - g, i.width + 2 * g, 0, 0, i.height + 2 * g, -i.width - 2 * g, 0, "z"].join(",")
  });
  e = 360 - e;
  b.rotate(e, k, j);
  if (this.attrs) {
    this.attr(this.attrs.x ? "x" : "cx", k + f + g + (!a ? this.type == "text" ? i.width : 0 : i.width / 2)).attr("y", a ? j : j - i.height / 2);
    this.rotate(e, k, j);
    e > 90 && e < 270 && this.attr(this.attrs.x ? "x" : "cx", k - f - g - (!a ? i.width : i.width / 2)).rotate(180, k, j)
  } else {
    if (e > 90 && e < 270) {
      this.translate(k - i.x - i.width - f - g, j - i.y - i.height / 2);
      this.rotate(e - 180, i.x + i.width + f + g, i.y + i.height / 2)
    } else {
      this.translate(k - i.x + f + g, j - i.y - i.height / 2);
      this.rotate(e, i.x - f - g, i.y + i.height / 2)
    }
  }
  return b.insertBefore(this.node ? this : this[0])
};
Raphael.el.label = function() {
  var c = this.getBBox(),
      b = this.paper || this[0].paper,
      a = Math.min(20, c.width + 10, c.height + 10) / 2;
  if (!b) {
    return
  }
  return b.rect(c.x - a / 2, c.y - a / 2, c.width + a, c.height + a, a).attr({
    stroke: "none",
    fill: "#000"
  }).insertBefore(this.node ? this : this[0])
};
Raphael.el.blob = function(z, j, i) {
  var g = this.getBBox(),
      B = Math.PI / 180,
      n = this.paper || this[0].paper,
      r, A, q;
  if (!n) {
    return
  }
  switch (this.type) {
  case "text":
  case "circle":
  case "ellipse":
    A = true;
    break;
  default:
    A = false
  }
  r = n.path().attr({
    fill: "#000",
    stroke: "none"
  });
  z = (+z + 1 ? z : 45) + 90;
  q = Math.min(g.height, g.width);
  j = typeof j == "number" ? j : (A ? g.x + g.width / 2 : g.x);
  i = typeof i == "number" ? i : (A ? g.y + g.height / 2 : g.y);
  var m = Math.max(g.width + q, q * 25 / 12),
      t = Math.max(g.height + q, q * 25 / 12),
      u = j + q * Math.sin((z - 22.5) * B),
      b = i + q * Math.cos((z - 22.5) * B),
      v = j + q * Math.sin((z + 22.5) * B),
      d = i + q * Math.cos((z + 22.5) * B),
      o = (v - u) / 2,
      l = (d - b) / 2,
      f = m / 2,
      e = t / 2,
      s = -Math.sqrt(Math.abs(f * f * e * e - f * f * l * l - e * e * o * o) / (f * f * l * l + e * e * o * o)),
      c = s * f * l / e + (v + u) / 2,
      a = s * -e * o / f + (d + b) / 2;
  r.attr({
    x: c,
    y: a,
    path: ["M", j, i, "L", v, d, "A", f, e, 0, 1, 1, u, b, "z"].join(",")
  });
  this.translate(c - g.x - g.width / 2, a - g.y - g.height / 2);
  return r.insertBefore(this.node ? this : this[0])
};
Raphael.fn.label = function(a, d, b) {
  var c = this.set();
  b = this.text(a, d, b).attr(Raphael.g.txtattr);
  return c.push(b.label(), b)
};
Raphael.fn.popup = function(a, f, d, b, c) {
  var e = this.set();
  d = this.text(a, f, d).attr(Raphael.g.txtattr);
  return e.push(d.popup(b, c), d)
};
Raphael.fn.tag = function(a, f, d, c, b) {
  var e = this.set();
  d = this.text(a, f, d).attr(Raphael.g.txtattr);
  return e.push(d.tag(c, b), d)
};
Raphael.fn.flag = function(a, e, c, b) {
  var d = this.set();
  c = this.text(a, e, c).attr(Raphael.g.txtattr);
  return d.push(c.flag(b), c)
};
Raphael.fn.drop = function(a, e, c, b) {
  var d = this.set();
  c = this.text(a, e, c).attr(Raphael.g.txtattr);
  return d.push(c.drop(b), c)
};
Raphael.fn.blob = function(a, e, c, b) {
  var d = this.set();
  c = this.text(a, e, c).attr(Raphael.g.txtattr);
  return d.push(c.blob(b), c)
};
Raphael.el.lighter = function(b) {
  b = b || 2;
  var a = [this.attrs.fill, this.attrs.stroke];
  this.fs = this.fs || [a[0], a[1]];
  a[0] = Raphael.rgb2hsb(Raphael.getRGB(a[0]).hex);
  a[1] = Raphael.rgb2hsb(Raphael.getRGB(a[1]).hex);
  a[0].b = Math.min(a[0].b * b, 1);
  a[0].s = a[0].s / b;
  a[1].b = Math.min(a[1].b * b, 1);
  a[1].s = a[1].s / b;
  this.attr({
    fill: "hsb(" + [a[0].h, a[0].s, a[0].b] + ")",
    stroke: "hsb(" + [a[1].h, a[1].s, a[1].b] + ")"
  });
  return this
};
Raphael.el.darker = function(b) {
  b = b || 2;
  var a = [this.attrs.fill, this.attrs.stroke];
  this.fs = this.fs || [a[0], a[1]];
  a[0] = Raphael.rgb2hsb(Raphael.getRGB(a[0]).hex);
  a[1] = Raphael.rgb2hsb(Raphael.getRGB(a[1]).hex);
  a[0].s = Math.min(a[0].s * b, 1);
  a[0].b = a[0].b / b;
  a[1].s = Math.min(a[1].s * b, 1);
  a[1].b = a[1].b / b;
  this.attr({
    fill: "hsb(" + [a[0].h, a[0].s, a[0].b] + ")",
    stroke: "hsb(" + [a[1].h, a[1].s, a[1].b] + ")"
  });
  return this
};
Raphael.el.resetBrightness = function() {
  if (this.fs) {
    this.attr({
      fill: this.fs[0],
      stroke: this.fs[1]
    });
    delete this.fs
  }
  return this
};
(function() {
  var c = ["lighter", "darker", "resetBrightness"],
      a = ["popup", "tag", "flag", "label", "drop", "blob"];
  for (var b in a) {
    (function(d) {
      Raphael.st[d] = function() {
        return Raphael.el[d].apply(this, arguments)
      }
    })(a[b])
  }
  for (var b in c) {
    (function(d) {
      Raphael.st[d] = function() {
        for (var e = 0; e < this.length; e++) {
          this[e][d].apply(this[e], arguments)
        }
        return this
      }
    })(c[b])
  }
})();
Raphael.g = {
  shim: {
    stroke: "none",
    fill: "#000",
    "fill-opacity": 0
  },
  txtattr: {
    font: "12px Arial, sans-serif",
    fill: "#fff"
  },
  colors: (function() {
    var c = [0.6, 0.2, 0.05, 0.1333, 0.75, 0],
        a = [];
    for (var b = 0; b < 10; b++) {
      if (b < c.length) {
        a.push("hsb(" + c[b] + ",.75, .75)")
      } else {
        a.push("hsb(" + c[b - c.length] + ", 1, .5)")
      }
    }
    return a
  })(),
  snapEnds: function(j, k, h) {
    var e = j,
        l = k;
    if (e == l) {
      return {
        from: e,
        to: l,
        power: 0
      }
    }
    function m(d) {
      return Math.abs(d - 0.5) < 0.25 ? ~~ (d) + 0.5 : Math.round(d)
    }
    var g = (l - e) / h,
        a = ~~ (g),
        c = a,
        b = 0;
    if (a) {
      while (c) {
        b--;
        c = ~~ (g * Math.pow(10, b)) / Math.pow(10, b)
      }
      b++
    } else {
      while (!a) {
        b = b || 1;
        a = ~~ (g * Math.pow(10, b)) / Math.pow(10, b);
        b++
      }
      b && b--
    }
    l = m(k * Math.pow(10, b)) / Math.pow(10, b);
    if (l < k) {
      l = m((k + 0.5) * Math.pow(10, b)) / Math.pow(10, b)
    }
    e = m((j - (b > 0 ? 0 : 0.5)) * Math.pow(10, b)) / Math.pow(10, b);
    return {
      from: e,
      to: l,
      power: b
    }
  },
  axis: function(p, o, k, D, e, G, g, J, h, a, q) {
    a = a == null ? 2 : a;
    h = h || "t";
    G = G || 10;
    q = arguments[arguments.length - 1];
    var C = h == "|" || h == " " ? ["M", p + 0.5, o, "l", 0, 0.001] : g == 1 || g == 3 ? ["M", p + 0.5, o, "l", 0, -k] : ["M", p, o + 0.5, "l", k, 0],
        s = this.snapEnds(D, e, G),
        H = s.from,
        z = s.to,
        F = s.power,
        E = 0,
        w = {
        font: "11px 'Fontin Sans', Fontin-Sans, sans-serif"
        },
        v = q.set(),
        I;
    I = (z - H) / G;
    var n = H,
        m = F > 0 ? F : 0;
    r = k / G;
    if (+g == 1 || +g == 3) {
      var b = o,
          u = (g - 1 ? 1 : -1) * (a + 3 + !! (g - 1));
      while (b >= o - k) {
        h != "-" && h != " " && (C = C.concat(["M", p - (h == "+" || h == "|" ? a : !(g - 1) * a * 2), b + 0.5, "l", a * 2 + 1, 0]));
        v.push(q.text(p + u, b, (J && J[E++]) || (Math.round(n) == n ? n : +n.toFixed(m))).attr(w).attr({
          "text-anchor": g - 1 ? "start" : "end"
        }));
        n += I;
        b -= r
      }
      if (Math.round(b + r - (o - k))) {
        h != "-" && h != " " && (C = C.concat(["M", p - (h == "+" || h == "|" ? a : !(g - 1) * a * 2), o - k + 0.5, "l", a * 2 + 1, 0]));
        v.push(q.text(p + u, o - k, (J && J[E]) || (Math.round(n) == n ? n : +n.toFixed(m))).attr(w).attr({
          "text-anchor": g - 1 ? "start" : "end"
        }))
      }
    } else {
      n = H;
      m = (F > 0) * F;
      u = (g ? -1 : 1) * (a + 9 + !g);
      var c = p,
          r = k / G,
          A = 0,
          B = 0;
      while (c <= p + k) {
        h != "-" && h != " " && (C = C.concat(["M", c + 0.5, o - (h == "+" ? a : !! g * a * 2), "l", 0, a * 2 + 1]));
        v.push(A = q.text(c, o + u, (J && J[E++]) || (Math.round(n) == n ? n : +n.toFixed(m))).attr(w));
        var l = A.getBBox();
        if (B >= l.x - 5) {
          v.pop(v.length - 1).remove()
        } else {
          B = l.x + l.width
        }
        n += I;
        c += r
      }
      if (Math.round(c - r - p - k)) {
        h != "-" && h != " " && (C = C.concat(["M", p + k + 0.5, o - (h == "+" ? a : !! g * a * 2), "l", 0, a * 2 + 1]));
        v.push(q.text(p + k, o + u, (J && J[E]) || (Math.round(n) == n ? n : +n.toFixed(m))).attr(w))
      }
    }
    var K = q.path(C);
    K.text = v;
    K.all = q.set([K, v]);
    K.remove = function() {
      this.text.remove();
      this.constructor.prototype.remove.call(this)
    };
    return K
  },
  labelise: function(a, c, b) {
    if (a) {
      return (a + "").replace(/(##+(?:\.#+)?)|(%%+(?:\.%+)?)/g, function(d, f, e) {
        if (f) {
          return (+c).toFixed(f.replace(/^#+\.?/g, "").length)
        }
        if (e) {
          return (c * 100 / b).toFixed(e.replace(/^%+\.?/g, "").length) + "%"
        }
      })
    } else {
      return (+c).toFixed(0)
    }
  }
};