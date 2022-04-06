var AdvanceFeatures = /** @class */ (function () {
    function AdvanceFeatures() {
    }
    AdvanceFeatures.prototype.getFeaturesList = function (list, key) {
        return list.filter(function (ele, inx, arr) {
            return ele.name.includes(key || 'datetype');
        });
    };
    return AdvanceFeatures;
}());
var af = new AdvanceFeatures();
var list = [
    { name: 'generics datetype' },
    { name: 'acccess modifiers' }
];
var result = af.getFeaturesList(list);
console.log(result);
