$(document).ready( function() {
  var $status = $('#status');
  var game = new Hanoi.Game();
  var startTowerIndex = null;
  var turns = 0;
  game.run();

  var clearBoard = function() {
    $('.disk').remove();
  }

  var render = function() {
    clearBoard();
    if (turns === 1) {
      $status.html(''+ turns + " Move");
    } else {
      $status.html(''+ turns + " Moves");
    }
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

  render();
  $("div.tower").click(function() {
    if (startTowerIndex !== null) {
      // if we've already picked up a disc
      var endTowerIndex = parseInt($(this).attr('id'));
      if (game.move(startTowerIndex,endTowerIndex)) {
        turns++;
        render();
        if (game.isWon()) {
          $status.html("Won in " + turns + " moves.");
          $("div.tower").unbind('click');
        }
      } else {
        console.log("Invalid Move")
        $('.selected').removeClass('selected');
      }
      startTowerIndex = null;
    } else {
      // if we haven't picked up a disc
      startTowerIndex = parseInt($(this).attr('id'));
      $(this).children('.disk').first().addClass('selected');
    }
  });

  $("div.button").click(function() {
    game = new Hanoi.Game();
    turns = 0;
    render();
  });

});