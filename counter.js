function updateCounter() {
  const counter = document.getElementById('counter');
  let count = localStorage.getItem('visiterCount');
  if(count == null){
    count = 1;
  }else{
    count++;
  }
  localStorage.setItem('visiterCount', count);
  counter.innerHTML = `Vistor Count: ${localStorage.getItem('visiterCount')}`;


 
  const locationn = document.getElementById('locationn');
  let location = localStorage.getItem('visiterLocation');
  if(location == null){
    location = 1;
  }else{
    location++;
  }
  localStorage.setItem('visiterLocation', location);
  locationn.innerHTML = `Vistor Location: ${localStorage.getItem('visiterLocation')}`;
}
updateCounter();