function getsupportedprop(proparray) {
    var root = document.documentElement //reference root element of document
    for (var i = 0; i < proparray.length; i++) { //loop through possible properties
        if (proparray[i] in root.style) { //if property exists on element (value will be string, empty string if not set)
            return proparray[i] //return that string
        }
    }
}

var csstransform = getsupportedprop(['transform', 'MozTransform', 'webkitTransform', 'msTransform', 'OTransform'])
var csstransition = getsupportedprop(['transition', 'MozTransition', 'webkitTransition', 'msTransition', 'oTransition'])


var Emitter = function(opts, parent) {
    this.particles = [];
    this.opts = opts;
    this.total = 0;
    this.opts.i = Date.now();
    this.particleType = opts.particleType || Particle;
    this.ele = document.createElement('div');
    this.ele.className = 'emitter';
    this.ele.setAttribute('aria-hidden', 'true');
    this.ele.setAttribute('style', 'position:absolute;-webkit-transform:translate(' + this.opts.center[0] + '%, ' + this.opts.center[1] + '%) translateZ(0);-moz-transform:translate(' + this.opts.center[0] + '%, ' + this.opts.center[1] + '%) translateZ(0);-ms-transform:translate(' + this.opts.center[0] + '%, ' + this.opts.center[1] + '%) translateZ(0);-o-transform:translate(' + this.opts.center[0] + '%, ' + this.opts.center[1] + '%) translateZ(0);transform:translate(' + this.opts.center[0] + '%, ' + this.opts.center[1] + '%) translateZ(0);');


    for (var i = 0; i < opts.particles; i++) {
        this.total++;
        this.particles.push(new this.particleType(this.ele, opts));
    }

    parent = document.getElementById(opts.attachTo)
    parent.appendChild(this.ele);
}

Emitter.prototype.destroy = function() {
    this.ele.parentNode.removeChild(this.ele);
}

var Particle = function(parent, opts) {
    // this.ele = this.pool.pop(); // Broken
    if (!this.ele) {
        this.ele = document.createElement('div');
        this.ele.setAttribute('style', 'position:absolute;');
        this.ele.className = 'particle';
    }
    parent.appendChild(this.ele);
    this.reset(opts);
    var _this = this;

    this.ele.addEventListener('webkitTransitionEnd', isTransitionOver, false);
    this.ele.addEventListener('oTransitionEnd', isTransitionOver, false);
    this.ele.addEventListener('transitionend', isTransitionOver, false);

    function isTransitionOver(event) {
        if (opts.loop) {
            _this.reset(opts, 0);
        } else {
            if (_this.ele.parentElement) {
                _this.ele.parentElement.removeChild(_this.ele);
            }
            _this.pool.push(_this.ele);
        }
    }

    if (!opts.touch) {
        if ((Modernizr.touch) && (md.mobile())) {
            if (_this.ele.parentElement) {
                _this.ele.parentElement.removeChild(_this.ele);
            }
        }
    }

}

// Save old particles here because creating them is OMG EXPENSIVE.
Particle.prototype.pool = [];

Particle.prototype.beforeDraw = function(p) {
    this.ele.style.opacity = 1;
}

Particle.prototype.reset = function(opts, p) {
    if (opts.colorFn) {
        this.color = opts.colorFn();
    } else {
        this.color = opts.color || 'white';
    }
    this.r = this.fuzz(opts.r) || 4;
    // this.width = this.fuzz(opts.width) || 10;
    // this.height = this.fuzz(opts.height) || 10;
    this.ang = this.fuzz(opts.ang) || Math.PI * 2 * Math.random();
    this.spd = this.fuzz(opts.spd) || Math.random() / 5;
    this.life = this.fuzz(opts.life) || 250 + Math.random() * 250;
    this.i = opts.i || 0;
    this.animate = opts.animate || ['scale'];

    this.rNow = this.r;
    // this.wNow = this.width;
    // this.hNow = this.height;
    this.angNow = Math.PI / 2 + this.ang;
    this.spdNow = this.spd;
    this.colorNow = this.color;



    this.draw(0, 1);
    var _this = this;

    window.setTimeout(function() {
        _this.draw(_this.life, 0);
    });
}

Particle.prototype.fuzz = function(value) {
    if (!value) {
        return false;
    }
    return value[0] + (value[1] * 2 * Math.random() - value[1]);
}

Particle.prototype.draw = function(i, p) {

    if (p === 1) {
        this.ele.classList.add('notransition');
    } else {
        this.ele.style[csstransition] = this.life / 1000 + 's';
        this.ele.classList.remove('notransition');
    }
    this.beforeDraw(p);
    var radiusOffset = (0 - this.rNow / 2);
    this.ele.style[csstransform] = [
        'translate(' + radiusOffset + 'px,' + radiusOffset + 'px)', // Center on circle
        'rotate(' + this.angNow + 'rad)', //  Rotate in whichever direction we're emitting.
        'translateZ(0)',
        'translate(' + (i * this.spdNow) + 'px,0)' // Move however far we need to go.
    ].join(' ');

    this.ele.style.width = this.rNow + 'px';
    this.ele.style.height = this.rNow + 'px';
    this.ele.style.backgroundColor = this.colorNow;
    this.ele.style.borderRadius = this.rNow + 'px';
}

function smokeEmitter(attachTo) {

  window[attachTo] = new Emitter({
    particles:70,      
    attachTo: attachTo,
    color:'rgba(255,255,255,.5)',
    ang: [1.5,0.5],
    r: [4,3],
    spd: [.02,.01],
    life: [1000,150],
    center: [0,0],
    loop:true,
    touch:false
  });
}
