async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // 🔥 start here: write code to loop through the rides
    

    let type = 'placeholder'
    // these only need to be changed if it's a purple ride
    let border = 'border-4 border-gray-900 p-4 my-4 text-left' 
    let pasngrbox = 'rounded-xl bg-gray-600 text-white p-2'

  // outer loop to cycle through rides requested
     for (i=0; i<json.length; i++) {
      console.log(json[i][0].numberOfPassengers)
        // this segment determines the type of ride and assigns corresponding HTML class variables for use in styling
          if (json[i].length > 1) {
              type = 'Noober Pool'
              }
            else if(json[i][0].purpleRequested == true) {
              type = 'Noober Purple'
              border = 'border-4 border-purple-500 p-4 my-4 text-left'
              pasngrbox = 'rounded-xl bg-purple-600 text-white p-2'
            }
            else if (json[i][0].numberOfPassengers > 3) {
              type = 'Noober XL'
            }
            else {
              type = 'Noober X'
            }
            
        // this segment adds the header
        let outputelement = document.querySelector('.rides')
        outputelement.insertAdjacentHTML('beforeend', `
          <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${type}</span>
            </h1>
        `)

        // This segment adds ride details, with an inner loop as needed for pool rides
        for (j=0; j<json[i].length; j++) {
            outputelement.insertAdjacentHTML('beforeend', `
            <div class="${border}">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${json[i][j].passengerDetails.first} ${json[i][j].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${json[i][j].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="${pasngrbox}">
          ${json[i][j].numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${json[i][j].pickupLocation.address}</p>
          <p>${json[i][j].pickupLocation.city}, ${json[i][j].pickupLocation.state} ${json[i][j].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${json[i][j].dropoffLocation.address}</p>
          <p>${json[i][j].dropoffLocation.city}, ${json[i][j].dropoffLocation.state} ${json[i][j].dropoffLocation.zip}</p>
        </div>
      </div>
    </div> 
            `)
        }

            // set design elements back to default for non-purple rides
            border = 'border-4 border-gray-900 p-4 my-4 text-left' 
            pasngrbox = 'rounded-xl bg-gray-600 text-white p-2'

     }

}

window.addEventListener('DOMContentLoaded', pageLoaded)

