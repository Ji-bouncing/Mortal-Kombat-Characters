document.querySelector('#liuKang').addEventListener('click', liuKangChange)
document.querySelector('#mileanaJi').addEventListener('click', mileanaChange)
document.querySelector('#raidenMan').addEventListener('click', raidenChange)
document.querySelector('#subZero').addEventListener('click', subZeroChange)
document.querySelector('#realMilana').addEventListener('click', realMilanaChange)
document.querySelector('#repTile').addEventListener('click', repTileChange)
document.querySelector('#scorPion').addEventListener('click', scorPionChange)
document.querySelector('#shangTsung').addEventListener('click', shangTsungChange)
document.querySelector('#sinDel').addEventListener('click', sinDelChange)
document.querySelector('#subZeroTwo').addEventListener('click',subZeroTwoChange)


function liuKangChange(){
  document.querySelector('body').style.backgroundImage = "url('/Images/Liu Kang background.jpg')";
  document.querySelector('body').style.backgroundSize = '100% 100%';
  document.querySelector('body').style.color = 'white'
  document.querySelector('#putName').innerHTML = 'Liu Kang'
}
function mileanaChange(){
    document.querySelector('body').style.backgroundImage= "url('/Images/Mileana.jpg')";
    document.querySelector('body').style.color = 'white'
    document.querySelector('#putName').innerHTML = 'Mileana'
}
function raidenChange(){
  document.querySelector('body').style.backgroundImage = "url('/Images/Raiden background.jpg')";
  document.querySelector('body').style.color = 'white'
  document.querySelector('#putName').innerHTML = 'Raiden'
}
function subZeroChange(){
    document.querySelector('body').style.backgroundImage= "url('/Images/Real SubZero.jpg')";
  document.querySelector('body').style.color = 'white'
  document.querySelector('#putName').innerHTML = 'Sub Zero'
}
function realMilanaChange(){
    document.querySelector('body').style.backgroundImage= "url('/Images/Realmileana.jpg')";
  document.querySelector('body').style.color = 'white'
  document.querySelector('#putName').innerHTML = 'Milana'
}
function repTileChange(){
      document.querySelector('body').style.backgroundImage= "url('/Images/Reptile background.jpg')";
      document.querySelector('body').style.color = 'white'
      document.querySelector('#putName').innerHTML = 'Reptile'
}
function scorPionChange(){
      document.querySelector('body').style.backgroundImage= "url('/Images/Scorpion background.jpg')";
  document.querySelector('body').style.color = 'white'
  document.querySelector('#putName').innerHTML = 'Scorpion'
}
function shangTsungChange(){
      document.querySelector('body').style.backgroundImage = "url('/Images/Shang tsung background.jpg')";
  document.querySelector('body').style.color = 'white'
  document.querySelector('#putName').innerHTML = 'Shang Tsung'
}
function sinDelChange(){
      document.querySelector('body').style.backgroundImage = "url('/Images/Simde background.jpg')";
  document.querySelector('body').style.color = 'white'
  document.querySelector('#putName').innerHTML = 'Sindel'
}
function subZeroTwoChange(){
        document.querySelector('body').style.backgroundImage = "url('/Images/Sub-Zero background.jpg')";
  document.querySelector('body').style.color = 'white'
  document.querySelector('#putName').innerHTML = 'SubZero'
}