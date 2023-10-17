const customerContainer = document.querySelector('#customer-directory')

function quickList(customerArray) {
    for (let customer of customerArray) {
        console.log('this is ${customer.name}')
    }
}

/* <div class="customers">
            <img href="">
            <div class="name">Name</div>
            <div class="email">email@example.com</div>
            <div class="address">123 Cool Street,<br>City, State, Zip code</div>
            <div class="dob">DOB:</div>
            <div class="customer-since">Customer Since:</div>
        </div> */

        function buildCustomers(customerArray) {
            for (let customer of customerArray) {
                let customerCard = document.createElement('div')
                customerCard.classList.add("customers")
                let profilePhoto = document.createElement('img')
                profilePhoto.src =  customer.picture.large
                profilePhoto.alt = 'profile photo'
                customerCard.appendChild(profilePhoto)
                customerContainer.appendChild(customerCard)
                let customerName = document.createElement('div')
                customerName.classList.add("name")
                customerName.innerText = `${customer.name.first} ${customer.name.last}`
                customerCard.appendChild(customerName)
                let customerEmail = document.createElement('div')
                customerEmail.classList.add('email')
                customerEmail.innerText = `${customer.email}`
                customerCard.appendChild(customerEmail)
                let customerAddress = document.createElement('div')
                customerAddress.classList.add("address")
                customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name},`



            }
        }

quickList(customers)        
buildCustomers(customers)
