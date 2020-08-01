describe('sample test', function () {
    it('should call the processInput function', function () {
        expect(true).toBe(true);
    })
})
describe('jasmine-node', function() {
    var periodicArr;
    beforeEach(function() {
        periodicArr = ajaxCall();
    })

    var str = "breaking"; 
    var symbol = "br";
    describe('break string', function() {
        var breakSt = breakStr(str, 3);
        var expected = ["bre", "rea", "eak", "aki", "kin", "ing"];
        it('should break string into array items with given count', function() {
            expect(breakSt).toEqual(expected);
        });
        it('string length equals array items length', function() {
            expect(str.length).toEqual(expected.length + 2);
        });
    });

    it('should call the processInput function', function() {
      window.btnState = jasmine.createSpy('btnState');
      spyOn(window, 'regexMatch');
      spyOn(view, 'buildFullDom');
      spyOn(view, 'displayMessage');
      spyOn(window, 'clearForm');

      var processInp = processInput("arun kumar");
      expect(processInp).toBeUndefined();
      expect(window.btnState).toHaveBeenCalledTimes(2);
      expect(window.ajaxCall).toBeDefined();
      expect(window.regexMatch).toHaveBeenCalledWith(window.ajaxCall(), "arun");
      expect(view.displayMessage).toHaveBeenCalledTimes(1);
    });

    it('should replace symbol with empty', function() {
        var replace = replaceSymbol(symbol, str);
        var expected = ["e", "a", "k", "i", "n", "g"];
        expect(symbol.length).toBe(2);
        expect(replace).toEqual(expected);
        expected.forEach(function(val) {
            expect(val.length).toEqual(1);
        });
        expect(replace).toContain(expected[0]);
        expect(replace).toEqual(jasmine.arrayContaining(expected));
        expect(replace).not.toEqual(jasmine.arrayContaining([symbol]));
    });

    it('should find regex match of element', function() {
        var regex_match1 = regexMatch(periodicArr, symbol);
        var regex_match2 = regexMatch(periodicArr, "zz");
        expect(regex_match1).not.toBe(null);
        expect(regex_match2).toBe(null);
        expect(regex_match1).toEqual(jasmine.objectContaining({
            symbol: symbol
        }));
        expect(regex_match1).toEqual(jasmine.objectContaining({ symbol: jasmine.stringMatching(/br/) }));
    });

    it('should join array of three', function() {
        var join_array = joinArray("breaking", { symbol: symbol, pos: 0 });
        expect(join_array).not.toBe(null);
        expect(join_array).toContain("eaking");
    });

});