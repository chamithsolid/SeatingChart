var Ts;
(function (Ts) {
    var SeatingChart;
    (function (SeatingChart) {
        var Main = (function () {
            function Main() {
                this.blockds = new kendo.data.DataSource();
                this.seatsds = new kendo.data.DataSource();
                this.block = new SeatingChart.Block();
                this.initControllers();
                this.loadLayout();
            }
            Main.prototype.loadLayout = function () {
                var _this = this;
                $.when($.getJSON('../data/blocks.json'), $.getJSON('../data/seats.json')).done(function (e1, e2) {
                    _this.blockds.data(e1);
                    _this.seatsds.data(e2);
                    $.each(_this.blockds.view(), function (i, d) {
                        console.log(d);
                    });
                });
            };
            Main.prototype.openBlockInfo = function (uid) {
                $('#blockModel').modal('show').appendTo('body');
            };
            Main.prototype.putObject = function (e) {
                var _this = this;
                if (e === 'block') {
                    this.block.add();
                    $('.openModel').on('click', function (e) {
                        _this.openBlockInfo($(e.target).data('blockid'));
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
