const userCard = document.querySelector("#user-card");
const userImage = document.querySelector("#user-image");
const userName = document.querySelector("#user-name");
const userAddress = document.querySelector("#user-address");
const userPhone = document.querySelector("#user-phone");
const loadUserButton = document.querySelector("#load-user");

async function fetchUserData() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        userImage.src = user.picture.large;
        userName.textContent = `${user.name.first} ${user.name.last}`;
        userAddress.textContent = `${user.location.city}, ${user.location.country}`;
        userPhone.textContent = user.phone;
    } catch (error) {
        console.error("Error fetching user data:", error);
        userName.textContent = "Error loading user data";
    }
}

loadUserButton.addEventListener("click", fetchUserData);

fetchUserData();
