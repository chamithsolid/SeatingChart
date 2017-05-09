module Ts.SeatingChart {

    export class BlockModel {

        constructor(name: string, guid: string, row: number, col: number, seatmodel: SeatModel[], width: number, height: number) {
            this.name = name;
            this.guid = guid;
            this.row = row;
            this.col = col;
            this.seatModel = seatmodel;
            this.width = width;
            this.height = height;
        }

        name: string;
        guid: string;
        row: number;
        col: number;
        seatModel: SeatModel[];
        width: number;
        height: number;
    }

    export class SeatModel {

        constructor(guid: string, blockModelGuid: string, seatNumber: number, seatState: SeatState, rowNumber: number, colNumber: number) {
            this.guid = guid;
            this.blockModelGuid = blockModelGuid;
            this.rowNumber = rowNumber;
            this.colNumber = colNumber;
            this.seatState = seatState;
            this.seatNumber = seatNumber;
        }

        guid: string;
        blockModelGuid: string;
        seatNumber: number;
        seatState: SeatState;
        rowNumber: number;
        colNumber: number;
    }

    export enum SeatState {
        exclude, avaiable, notavaiable, my
    }
}