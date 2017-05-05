/// <reference path="../scripts/typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="model.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ts;
(function (Ts) {
    var SeatingChart;
    (function (SeatingChart) {
        var Object = (function () {
            function Object() {
            }
            Object.prototype.dragable = function (div) {
                $('#' + div).draggable();
            };
            Object.prototype.resizable = function (div) {
                $('#' + div).resizable();
            };
            Object.prototype.apply = function (div) {
                this.dragable(div);
                this.resizable(div);
            };
            return Object;
        }());
        SeatingChart.Object = Object;
        var Block = (function (_super) {
            __extends(Block, _super);
            function Block() {
                _super.call(this);
            }
            Block.prototype.remove = function (id) {
                $('#' + id).remove();
            };
            Block.prototype.createDom = function () {
                var util = new SeatingChart.Utility();
                var blockGuid = util.guid();
                var seats = new Array(100);
                var seatnumber = 1;
                for (var r = 0; r < 10; r++) {
                    for (var c = 0; c < 10; c++) {
                        seats.push(new SeatingChart.SeatModel(util.guid(), blockGuid, seatnumber, SeatingChart.SeatState.avaiable, r, c));
                        seatnumber++;
                    }
                }
                var block = new SeatingChart.BlockModel('untitile', blockGuid, 10, 10, seats);
                var template = kendo.template($("#template-block").html());
                var result = template(block);
                $("#canves").append(result);
                return blockGuid;
            };
            Block.prototype.add = function () {
                this.apply(this.createDom());
            };
            return Block;
        }(Object));
        SeatingChart.Block = Block;
    })(SeatingChart = Ts.SeatingChart || (Ts.SeatingChart = {}));
})(Ts || (Ts = {}));
