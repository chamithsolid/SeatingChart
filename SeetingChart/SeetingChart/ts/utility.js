var Ts;
(function (Ts) {
    var SeatingChart;
    (function (SeatingChart) {
        var Utility = (function () {
            function Utility() {
            }
            Utility.prototype.guid = function () {
                return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
                    this.s4() + '-' + this.s4() + this.s4() + this.s4();
            };
            Utility.prototype.s4 = function () {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            };
            return Utility;
        }());
        SeatingChart.Utility = Utility;
    })(SeatingChart = Ts.SeatingChart || (Ts.SeatingChart = {}));
})(Ts || (Ts = {}));
