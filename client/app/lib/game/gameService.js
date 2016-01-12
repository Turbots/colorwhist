class GameService {

    constructor($log) {
        $log.info('Starting GameService');
    }
}

GameService.$inject = ['$log'];
export { GameService }