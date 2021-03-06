﻿/// <reference path="../scripts/typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="model.ts" />

module Ts.SeatingChart {
    export class Object {
        dragable(div: string) {
            $('#' + div).draggable();
        }
        resizable(div: string) {
            $('#' + div).resizable();
        }

        apply(div: string) {
            this.dragable(div);
            this.resizable(div);
        }
        constructor() {

        }
    }

    export class Block extends Object {
        private uid: string;
        private row: number;
        private col: number;

        remove(id: string): void {
            $('#' + id).remove();
        }

        createDom(): string {
            let util = new Utility()
            let blockGuid = util.guid();
            let seats = new Array(100);
            let seatnumber: number = 1;
            for (var r = 0; r < 10; r++) {
                for (var c = 0; c < 10; c++) {
                    seats.push(new SeatModel(util.guid(), blockGuid, seatnumber, SeatState.avaiable, r, c));
                    seatnumber++;
                }
            }
            let block = new BlockModel('untitile', blockGuid, 10, 10, seats, (30 * 10) + 20, (30 * 10) + 50);
            var template = kendo.template($("#template-block").html());
            var result = template(block);
            $("#canves").append(result);
            return blockGuid;
        }

        viewDom(blockModel: BlockModel, seatModel: SeatModel[]): void {
            let block = new BlockModel('untitile', blockModel.guid, blockModel.row, blockModel.col, seatModel, (30 * blockModel.col) + 20,
                (30 * blockModel.row) + 50);
            var template = kendo.template($("#template-block").html());
            var result = template(block);
            $("#canves").append(result);
        }
        updateDom(): void {

        }

        add() {
            this.apply(this.createDom());
        }

        constructor() {
            super();
        }
    }
}