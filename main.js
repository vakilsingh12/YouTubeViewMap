mapboxgl.accessToken = 'pk.eyJ1IjoidnNrMTIzIiwiYSI6ImNrY2RiaTUwcjBjejgyd3BtMzhsaXh4dDQifQ.MfGqfCgB4YinfYE6730oIQ';
var map = new mapboxgl.Map({
container: 'map',
zoom:1,
style: 'mapbox://styles/mapbox/streets-v11'
});
fetch('filedata.json')
.then(countrydata=>countrydata.json())
.then((finalcountry)=>{
  finalcountry.map((elem)=>{
    return fetch('countrylatlogn.json').then(res => res.json()).then((data) => {
      let final=elem.country.toLowerCase();
      let long=data[final]
      // console.log(final);
      // console.log(long);
      let latitude=long[0];
      let longitude=long[1];
      let filedata=elem.views;
      if(filedata>100)
      {
        color="green";
      }else if(filedata>50)
      {
        color="yellow";
      }else{
       color="red"
      }
      new mapboxgl.Marker({
        color:color
      })
      .setLngLat([longitude, latitude])
      .addTo(map);
  });
  });
});
//style: 'mapbox://styles/mapbox/streets-v11'   light mode //dark-v10 ->dark mode