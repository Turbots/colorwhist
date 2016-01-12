import angular from 'angular';
import { GameController } from 'lib/game/gameController';
import { GameService } from 'lib/game/gameService';

angular.module('app', [])
.controller('GameController', GameController)
.service('GameService', GameService);