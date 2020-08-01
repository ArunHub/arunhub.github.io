(function () {
    this.BreakingBad = function () {

        var defaults = {
            isRandom: false
        };
        this.selectedInput = null;

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

        inputGroup.addEventListener('mouseover', overInpGroup, false);
        inputGroup.addEventListener('mouseleave', leaveInpGroup, false);
    };


    // var jsondat;

    // var oReq = new XMLHttpRequest();
    // oReq.addEventListener("load", function () {
    //     jsondat = oReq.responseText
    // });
    // oReq.open("GET", "js/data/content.json");
    // oReq.send();


    //private variables
    var submitBtn = document.getElementById('submit-btn');
    var details = document.getElementById('details');

    var selected = [],
        elemNotFound = false,
        randomElem = false;

    var inputGroup = document.getElementById('input-group');
    var refresh = document.getElementById('refresh');
    var view = {
        left: 0,
        delay: 1,
        get: function (prop) {
            return prop === 'left' ? this.left : this.delay;
        },
        set: function (prop, value) {
            return prop === 'left' ? this.left += value : this.delay += value;
        }
    };

    // public methods

    BreakingBad.prototype.fireSubmit = function (e) {
        e.stopPropagation();
        var sayUrName = document.getElementById('say-ur-name');
        var randomCheck = document.getElementById('randomInp').checked;
        randomElem = randomCheck;
        var input = sayUrName.value.trim();
        if (input === null || input.length === 0 || input.match(/[^a-zA-Z\s+]/gi)) {
            displayMessage('Oops, Special characters, numbers are not allowed. Enter only Letters!');
            clearForm();
            return;
        } else if (input.length === 1) {
            displayMessage('Enter atleast two letters');
            clearForm();
            return;
        } else { }
        this.selectedInput = input.toLowerCase();
        processInput.call(this);
        if ((selected.length > 0 || !elemNotFound)) {
            play();
        }
    };

    BreakingBad.prototype.refreshPage = function () {
        window.location.reload();
    };

    //private functions

    function processInput() {
        var splitInput = this.selectedInput.split(/\s+/);
        var periodicArr = ajaxCall();
        var notFoundId = document.getElementById('not-found');
        submitBtn.setAttribute('disabled', 'disabled');

        for (var i = 0; i < splitInput.length; i++) {
            var retVal = regexMatch(periodicArr, splitInput[i]);
            if ((retVal === null || retVal === undefined)) {
                elemNotFound = true;
                var createEl = document.createElement('span');
                createEl.innerText = splitInput[i] + " ";
                notFoundId.appendChild(createEl);
                notFoundId.style.display = "block";
            } else {
                selected.push(retVal.symbol);
                var joinedArr = joinArray(splitInput[i], retVal);
                buildFullDom(joinedArr, i);
            }
        }

        [].forEach.call(document.querySelectorAll('.periodic-element'), function (el) {
            el.classList.add('pseudo'); // or add a class
            el.style.transitionDelay = view.get('delay') + "s";
        });

        details.style.opacity = 1;
        details.style.transitionDelay = view.get('delay') + 1 + "s";

        clearForm();
        return;
    }

    function ajaxCall() {
        var tempObj = jsonData.elements.map(function (obj) {
            return {
                name: obj.name,
                source: obj.source,
                summary: obj.summary,
                category: obj.category,
                atomic_mass: obj.atomic_mass,
                number: obj.number,
                shells: obj.shells,
                symbol: obj.symbol.toLowerCase(),
                oxidationStates: obj.oxidationStates
            };
        });
        return tempObj;
    }

    function joinArray(str, retVal) {
        var first = replaceSymbol(retVal.symbol, str);
        var removed = first.splice(retVal.pos).join('');
        first = first.join('');
        var retArr = [];
        retArr.push(first);
        retArr.push(retVal);
        retArr.push(removed);
        return retArr;
    }

    function addClass(id, cl) {
        var element, name, arr;
        element = document.getElementById(id);
        name = cl;
        arr = element.className.split(" ");
        if (arr.indexOf(name) == -1) {
            element.className += " " + name;
        }
    }

    function replaceSymbol(input, string) {
        var regex = new RegExp(input, 'i');
        return string.replace(regex, '').split('');
    }

    function play() {
        var audio = document.getElementById("audio");
        audio.src = "images/breaking-bad-theme.mp3";
        audio.play();
    }

    function regexMatch(periodicArr, str) {
        var oneLen = [];
        var twoLen = [];
        var temp;
        var sameEl = [];

        function strMatch(regex) {
            temp = str.match(regex);

            if (temp !== null) { // checks if temp has element matched instead of null
                periodicArr[i]['pos'] = temp.index;
                if ((selected.indexOf(temp[0]) > -1)) sameEl.push(periodicArr[i]); // checks if matched element already exists in selected array
                return temp;
            }
            return;
        }

        for (var i = 0; i < periodicArr.length; i++) {
            var regex = new RegExp(periodicArr[i].symbol, 'i');
            if (periodicArr[i].symbol && strMatch(regex) && (selected.indexOf(temp[0]) < 0)) {
                periodicArr[i]['pos'] = temp.index;
                (temp[0].length === 2) ? twoLen.push(periodicArr[i]) : oneLen.push(periodicArr[i]);
            }
        }

        function getRandom(max) {
            return randomElem ? Math.floor(Math.random() * Math.floor(max)) : 0;
        }

        return twoLen[getRandom(twoLen.length)] ?
            twoLen[getRandom(twoLen.length)] : oneLen[getRandom(oneLen.length)] ?
                oneLen[getRandom(oneLen.length)] : sameEl[getRandom(sameEl.length)] ?
                    sameEl[getRandom(sameEl.length)] : null;
    }


    function createElem(tag, classN, attr, text) {
        var ce = document.createElement(tag);
        ce.className += classN;

        if (attr !== undefined) {
            attr.type === 'id' ? ce.setAttribute('id', attr.value) : ce.setAttribute('title', attr.value);
        }

        if (text) ce.innerText = text;
        return ce;
    }

    function setCateColor(category) {
        switch (category) {
            case 'non metal':
                return '#ffcc00';
            case 'noble gas':
                return '#33cccc';
            case 'alkaline earth metal':
                return '#99ccff';
            case 'semi metal':
                return '#ff8080';
            case 'halogen':
                return '#99cc00';
            case 'transition metal':
                return '#99ccff';
            case 'basic metal':
                return '#ccc0da';
            case 'alkali metal':
                return '#ff99cc';
            case 'lanthanides':
                return '#f1dddc';
            case 'actinides':
                return '#f1dddc';
            default:
                return 'whitesmoke';
        }
    }

    function buildFullDom(dom, index) {
        var inputword = "input-word-" + index;
        var categoryColor = setCateColor(dom[1].category);
        var inputGroup = document.getElementById('input-group');
        var peIndex = 'pe-' + index;

        var ciw = createElem('div', inputword);
        var cpe = '<div class="periodic-element" id="' + peIndex + '" style="left: ' + view.get('left') + 'px; transition-delay: ' + view.get('delay') + 's"><div class="atomic-mass" title="atomic mass">' + dom[1].atomic_mass + '</div><div class="oxidation" title="oxidation states"></div><div class="symbol" title="periodic element">' + dom[1].symbol + '</div><div class="number" title="atomic number">' + dom[1].number + '</div><div class="shells" title="shells">2</div></div>';

        // document.fragement
        // var ciw = '<div class="'+inputword+'">';
        // ciw.appendChild(cpe); 
        ciw.innerHTML = cpe;
        inputGroup.appendChild(ciw);

        var thisEl = document.getElementById(peIndex);

        dom[1].shells.forEach(function (val) {
            var createShell = createElem('span', '', undefined, '-' + val);
            thisEl.lastElementChild.appendChild(createShell);
        });

        dom[1].oxidationStates.forEach(function (val) {
            var createOxd = createElem('span', '', undefined, val);
            thisEl.firstElementChild.nextElementSibling.appendChild(createOxd);
        });

        details.innerHTML += '<div><strong style="color:' + categoryColor + '">' + dom[1].name + ' - <span class="details-symbol">' + dom[1].symbol + '</span></strong><br>' + dom[1].summary + '<br>' + dom[1].source + '</div>';

        thisEl.setAttribute("data-before", dom[0]);
        thisEl.setAttribute("data-after", dom[2]);

        var spanEl = thisEl.offsetWidth; //useless

        addClass(peIndex, 'transit');

        var smokeElement = 'smoke' + index;
        var cookEl = document.getElementsByClassName('cook-element')[0];

        var createSmokeEl = createElem('div', '', { type: 'id', value: smokeElement });
        createSmokeEl.setAttribute('title', 'category: ' + dom[1].category);
        cookEl.appendChild(createSmokeEl);

        var smokeJs = document.getElementById(smokeElement);

        smokeJs.className += ' animate';
        smokeJs.style.animationDelay = view.get('delay') + "s";

        smokeJs.addEventListener("webkitAnimationEnd", deleteSmoke, false);
        smokeJs.addEventListener("animationend", deleteSmoke, false);
        smokeJs.addEventListener("oanimationend", deleteSmoke, false);

        var elWidth = thisEl.offsetWidth;

        view.set('left', elWidth);
        view.set('delay', 2.5);

        window.smokeEmitter(smokeElement);
        window[smokeElement].opts.color = categoryColor;

        if (window.matchMedia("(max-width: 1000px)").matches) {
            // window[smokeElement].opts.particles = 200;
            window[smokeElement].opts.r = [3, 2];
        }

    }

    function deleteSmoke() {
        window[this.id].destroy();
    }

    function clearForm() {
        var form = document.getElementsByName('periodicForm');
        form[0].reset();
    }


    function fadeOut(element) {
        var op = 1; // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1) {
                clearInterval(timer);
                op = 0;
                element.style.opacity = op;
                // element.style.display = 'none';
                submitBtn.removeAttribute('disabled');
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 300);
    }

    function overInpGroup() {
        console.log("touchstart");
        this.style.zIndex = 1;
    }

    function leaveInpGroup() {
        console.log("touchsend");
        this.style.zIndex = 0;
    }

    function displayMessage(str) {
        var message = document.getElementById('message');
        submitBtn.setAttribute('disabled', 'disabled');
        message.innerText = str;
        fadeOut(message);
    }

    // Utility method to extend defaults with user options
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    function show() {
        if ((screen.msOrientation || screen.orientation.type) === 'portrait-primary') {
            alert('Please rotate your screen orientation to landscape and get better view.');
        }
    }

    if (screen.orientation) {
        screen.orientation.addEventListener("change", show);
    }

    window.onload = show;

})();

var breaking = new BreakingBad();
