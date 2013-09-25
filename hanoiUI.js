var game = new Hanoi.Game();
game.run();

var clearBoard = function() {

}

var render = function() {
  clearBoard();
  game.towers.forEach(function(tower, tower_index) {
    // each tower
    reversed_tower = tower.reverse();
    reversed_tower.forEach(function(disk) {
      // each disk in tower
      newDisk = $('<div class="disk"></div>');
      newDisk.css('width', '' + disk*60 + 'px');
      $('#tower'+tower_index).append(newDisk);
    });
  });
}


$(document).ready( function() {
  render();
  // $("div.tower").click()
})