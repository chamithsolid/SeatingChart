var Ts;
(function (Ts) {
    var SeatingChart;
    (function (SeatingChart) {
        var Main = (function () {
            function Main() {
                this.block = new SeatingChart.Block();
                this.initControllers();
            }
            Main.prototype.loadBlockInfo = function (uid) {
                $('#blockModel').modal('show').appendTo('body');
            };
            Main.prototype.putObject = function (e) {
                var _this = this;
                if (e === 'block') {
                    this.block.add();
                    $('.openModel').on('click', function (e) {
                        _this.loadBlockInfo($(e.target).data('blockid'));
                    });
                }
            };
            Main.prototype.initControllers = function () {
                var _this = this;
                $('.object').off().on('click', function (e) {
                    _this.putObject($(e.target).data('type'));
                });
            };
            return Main;
        }());
        SeatingChart.Main = Main;
        $(document).ready(function () {
            var x = new Main();
        });
    })(SeatingChart = Ts.SeatingChart || (Ts.SeatingChart = {}));
})(Ts || (Ts = {}));
