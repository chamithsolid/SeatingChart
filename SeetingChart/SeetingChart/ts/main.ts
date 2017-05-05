module Ts.SeatingChart {

    export class Main {

        loadBlockInfo(uid: string) {

            $('#blockModel').modal('show').appendTo('body');
        }
       
        putObject(e) {
            if (e === 'block') {
                this.block.add();
                $('.openModel').on('click', (e) => {
                    this.loadBlockInfo($(e.target).data('blockid'));
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
        }
    }
    $(document).ready(() => {
        var x = new Main();
    });
}