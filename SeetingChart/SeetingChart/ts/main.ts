module Ts.SeatingChart {

    export class Main {
        private blockds = new kendo.data.DataSource();
        private seatsds = new kendo.data.DataSource();

        loadLayout() {
            $.when($.getJSON('../data/blocks.json'), $.getJSON('../data/seats.json')).done((e1, e2) => {
                this.blockds.data(e1);
                this.seatsds.data(e2);
                $.each(this.blockds.view(), (i, d) => {
                    console.log(d);
                });
            });
        }
        openBlockInfo(uid: string) {
            $('#blockModel').modal('show').appendTo('body');
        }

        putObject(e) {
            if (e === 'block') {
                this.block.add();
                $('.openModel').on('click', (e) => {
                    this.openBlockInfo($(e.target).data('blockid'));
                });
            }
        }
        initControllers() {
            $('.object').off().on('click', (e) => {
                this.putObject($(e.target).data('type'));
            });

        }
        block: Block;
        constructor() {
            this.block = new Block();
            this.initControllers();
            this.loadLayout();
        }
    }
    $(document).ready(() => {
        var x = new Main();
    });
}