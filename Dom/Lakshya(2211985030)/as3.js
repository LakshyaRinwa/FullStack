// Task 01: 

const proPlanFeatures = document.querySelector('#pro-plan .card-body ul');
const phoneSupportFeature = document.createElement('li');
phoneSupportFeature.innerText = '24/7 Phone support';
proPlanFeatures.appendChild(phoneSupportFeature);

// Task 02:

const basicPlan = document.getElementById('basic-plan');
const proPlan = document.getElementById('pro-plan');
proPlan.insertAdjacentElement('beforebegin', basicPlan);
 
// Task 03:

const proButton = proPlan.querySelector('button');
proButton.innerText = 'Buy Now';
proButton.style.backgroundColor = '#007bff';
proButton.style.color = 'white';

// Task 04:

document.querySelector('#basic-plan .storage-amount').innerText = '3'; 
proPlan.querySelector('.storage-amount').innerText = '25';

// Task 05: 

const pricingElements = document.querySelectorAll('.pricing');
const monthlyPrices = [10, 30]; 
const annualPrices = [100, 300]; 

document.querySelectorAll('input[name="payment"]').forEach(input => {
    input.addEventListener('change', function() {
        if (this.value === 'annual') {
            pricingElements[0].innerText = annualPrices[0];
            pricingElements[1].innerText = annualPrices[1];
        } else {
            pricingElements[0].innerText = monthlyPrices[0]; 
            pricingElements[1].innerText = monthlyPrices[1];
        }
    });
});