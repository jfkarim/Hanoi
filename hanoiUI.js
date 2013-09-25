var game = new Hanoi.Game();
game.run();

var startTowerIndex = null;

var clearBoard = function() {
  $('.disk').remove();
}

var render = function() {
  clearBoard();
  game.towers.forEach(function(tower, tower_index) {
    // each tower
    reversed_tower = tower.slice();
    reversed_tower.reverse();
    reversed_tower.forEach(function(disk) {
      // each disk in tower
      newDisk = $('<div class="disk"></div>');
      newDisk.css('width', '' + disk*60 + 'px');
      $('#'+tower_index).append(newDisk);
    });
  });
}


$(document).ready( function() {
  render();
  $("div.tower").click(function() {
    if (startTowerIndex !== null) {
      // if we've already picked up a disc
      var endTowerIndex = parseInt($(this).attr('id'));
      if (game.move(startTowerIndex,endTowerIndex)) {
        render();
      } else {
        console.log("Invalid Move")
      }

      startTowerIndex = null;
    } else {
      // if we haven't picked up a disc
      startTowerIndex = parseInt($(this).attr('id'));
    }
  });
});