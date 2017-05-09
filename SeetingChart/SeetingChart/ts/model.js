var Ts;
(function (Ts) {
    var SeatingChart;
    (function (SeatingChart) {
        var BlockModel = (function () {
            function BlockModel(name, guid, row, col, seatmodel, width, height) {
                this.name = name;
                this.guid = guid;
                this.row = row;
                this.col = col;
                this.seatModel = seatmodel;
                this.width = width;
                this.height = height;
            }
            return BlockModel;
        }());
        SeatingChart.BlockModel = BlockModel;
        var SeatModel = (function () {
            function SeatModel(guid, blockModelGuid, seatNumber, seatState, rowNumber, colNumber) {
                this.guid = guid;
                this.blockModelGuid = blockModelGuid;
                this.rowNumber = rowNumber;
                this.colNumber = colNumber;
                this.seatState = seatState;
                this.seatNumber = seatNumber;
            }
            return SeatModel;
        }());
        SeatingChart.SeatModel = SeatModel;
        (function (SeatState) {
            SeatState[SeatState["exclude"] = 0] = "exclude";
            SeatState[SeatState["avaiable"] = 1] = "avaiable";
            SeatState[SeatState["notavaiable"] = 2] = "notavaiable";
            SeatState[SeatState["my"] = 3] = "my";
        })(SeatingChart.SeatState || (SeatingChart.SeatState = {}));
        var SeatState = SeatingChart.SeatState;
    })(SeatingChart = Ts.SeatingChart || (Ts.SeatingChart = {}));
})(Ts || (Ts = {}));
