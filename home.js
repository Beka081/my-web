function showHospitalDetails(hospitalName) {
    const hospitalDetailsDiv = document.getElementById('hospital-details');
    hospitalDetailsDiv.style.display = 'block';

    if (hospitalName === 'hospital1') {
        document.getElementById('hospital-name').textContent = 'Adare General Hospital';
        document.getElementById('hospital-services').innerHTML = `
            <ul>
                <li>General Check-up</li>
                <li>Surgery</li>
                <li>Pediatrics</li>
            </ul>
        `;
        document.getElementById('hospital-months').textContent = 'Available Months: January, February, March';
    } else if (hospitalName === 'hospital2') {
        // ... similar structure for Hospital 2
        document.getElementById('hospital-name').textContent = 'Alatyon Hospital';
        document.getElementById('hospital-services').innerHTML = `
            <ul>
                <li>Cardiology</li>
                <li>Neurology</li>
                <li>Oncology</li>
            </ul>
        `;
        document.getElementById('hospital-months').textContent = 'Available Months: April, May, June';
    } else if (hospitalName === 'hospital3') {
        // ... and so on for other hospitals
    }
    // ... Add similar structures for the remaining hospitals
}function showHospitalDetails(hospitalName) {
    const hospitalDetailsDiv = document.querySelector('.hospital-details');
    hospitalDetailsDiv.style.display = 'block';
  
    if (hospitalName === 'hospital1') {
      document.getElementById('hospital-name').textContent = 'Adare General Hospital';
      document.getElementById('hospital-services').innerHTML = `
        <ul>
          <li>Service 1: General Check-up</li>
          <li>Service 2: Surgery</li>
          <li>Service 3: Pediatrics</li>
        </ul>
      `;
      document.getElementById('hospital-months').textContent = 'Available Months: January, February, March';
    } else if (hospitalName === 'hospital2') {
      // ... similar structure for Hospital 2
      document.getElementById('hospital-name').textContent = 'Alatyon Hospital';
      document.getElementById('hospital-services').innerHTML = `
        <ul>
          <li>Service 4: Cardiology</li>
          <li>Service 5: Neurology</li>
          <li>Service 6: Oncology</li>
        </ul>
      `;
      document.getElementById('hospital-months').textContent = 'Available Months: April, May, June';
    }
    // ... and so on for other hospitals
  }function showHospitalDetails(hospitalName) {
    const hospitalDetailsDiv = document.querySelector('.hospital-details');
    hospitalDetailsDiv.style.display = 'block';

  