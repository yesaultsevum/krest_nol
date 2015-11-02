(function(){

var arr = new Array(9);

var win = $('.win span').text();
var lose = $('.lose span').text();

$('.cell').on('click', function(){
   var self = $(this);
   var id = self.attr('id');
   if(arr[id] !== 'player' && arr[id] !== 'ai'){
      Player_turn(self, id);  
      if(checkArr(arr)){
         setTimeout(function (){
           Ai_turn();
         }, 200)
      } 
   }else{
      return;
   } 
});

function Player_turn(self, id){
   arr[id] = 'player'
   $('#'+ id +'').addClass('player');
   checkEnd();
}

function Ai_turn(){
  var random = Math.floor(Math.random()*9);
   if(arr[random] == undefined){
     arr[random] = 'ai';
     $('#'+ random +'').addClass('ai');
     checkEnd();
   }
   else{
      return Ai_turn();
   };
}

function checkArr(array){
   for(var i = 0; i<array.length; i++){
       var item = array[i];
       if(item == undefined){
         return true;
       }else if(i < 9){
         continue;
       }
   }
}

function checkEnd() {
  if (arr[0]=='ai' && arr[1]=='ai' && arr[2]=='ai' || arr[3]=='ai' && arr[4]=='ai' && arr[5]=='ai' || arr[6]=='ai' && arr[7]=='ai' && arr[8]=='ai') alert('you lose'), lose++, $('.lose span').text(lose), arr = new Array(9), $('.cell').removeClass('ai player');
  if (arr[0]=='ai' && arr[3]=='ai' && arr[6]=='ai' || arr[1]=='ai' && arr[4]=='ai' && arr[7]=='ai' || arr[2]=='ai' && arr[5]=='ai' && arr[8]=='ai') alert('you lose'), lose++, $('.lose span').text(lose), arr = new Array(9), $('.cell').removeClass('ai player');
  if (arr[0]=='ai' && arr[4]=='ai' && arr[8]=='ai' || arr[2]=='ai' && arr[4]=='ai' && arr[6]=='ai') alert('you lose'), lose++, $('.lose span').text(lose), arr = new Array(9), $('.cell').removeClass('ai player');
  if (arr[0]=='player' && arr[1]=='player' && arr[2]=='player' || arr[3]=='player' && arr[4]=='player' && arr[5]=='player' || arr[6]=='player' && arr[7]=='player' && arr[8]=='player') alert('you win'), win++, $('.win span').text(win), arr = new Array(9), $('.cell').removeClass('ai player');
  if (arr[0]=='player' && arr[3]=='player' && arr[6]=='player' || arr[1]=='player' && arr[4]=='player' && arr[7]=='player' || arr[2]=='player' && arr[5]=='player' && arr[8]=='player') alert('you win'), win++, $('.win span').text(win), arr = new Array(9), $('.cell').removeClass('ai player');
  if (arr[0]=='player' && arr[4]=='player' && arr[8]=='player' || arr[2]=='player' && arr[4]=='player' && arr[6]=='player') alert('you win'), win++, $('.win span').text(win), arr = new Array(9), $('.cell').removeClass('ai player');
  if (arr[0] && arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && arr[6] && arr[7] && arr[8]) alert('draw'), arr = new Array(9), $('.cell').removeClass('ai player');
}

})()





