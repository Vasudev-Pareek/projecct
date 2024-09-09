let Title = document.getElementById("title");
let Task = document.getElementById("Task");
let TodoBox = document.getElementById("Todo");
let ShowStory = document.getElementById("Story");
let Submit = document.getElementById("Submit");
let ShowHide = document.getElementById("Show-Hide");
let CloseBtn = document.getElementById("CloseBtn");
let showBox = document.getElementById("SHowBox");
let PopContainer = document.getElementById("popUp-container");
let PopMini = document.getElementById("Pop-Minijs");
let SignUpButton1 = document.getElementById("SignUp-btn1");
let SignUpButton2 = document.getElementById("SignUp-btn2");
let LoginButton1 = document.getElementById("login-btn1");
let LoginButton2 = document.getElementById("login-btn2");
let GoLogin = document.getElementById("Go-login");
let GoSignUp = document.getElementById("Go-SignUp");
let SignUpPage = document.getElementById("SignUp-page");
let LoginPage = document.getElementById("Login-page");
let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let SignUpEmail = document.getElementById("SignUp-Email");
let SignUpPassword = document.getElementById("SignUp-Password");
let LoginEmail = document.getElementById("Login-Email");
let LoginPassword = document.getElementById("Login-Password");
let signupError = document.getElementById("signupError");
let LoginError = document.getElementById("LoginError");
let MainloginDisplay = document.getElementById("Main-login-display");

// // Load tasks from local storage when the page loads.
// loadTasks();
// ProfileShow();

if (Submit) {
  Submit.addEventListener("click", (e) => {
    e.preventDefault();
    const title = Title.value.trim();
    const task = Task.value.trim();

    if (title && task) {
      const newTask = {
        id: Date.now(), // Unique ID based on timestamp.
        title: title,
        task: task,
      };

      // Additems(title, task);

      //     // Get existing tasks from local storage.
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

      //     // Add the new task to the tasks array.
      tasks.push(newTask);

      //     // Save updated tasks to local storage.
      localStorage.setItem("tasks", JSON.stringify(tasks));

      //     // Display the new task.
      displayTask(newTask);

      //     // Clear the input fields
      Title.value = "";
      Task.value = "";
    }
  });
}

// Show all local storage data in html
ShowStory.addEventListener("click", () => {
  loadTasks();
});

function displayTask(task) {
  //   // Create a new task element
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("todoList-Iteams");
  taskDiv.dataset.id = task.id;

  var check = document.createElement("i");
  check.classList.add("fa-regular", "fa-circle");
  taskDiv.appendChild(check);

  const taskTitle = document.createElement("li");
  taskTitle.textContent = `Title: ${task.title} - Task: ${task.task}`;
  taskDiv.appendChild(taskTitle);

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");
  taskDiv.appendChild(deleteIcon);

  TodoBox.appendChild(taskDiv);

  // Event Listener for -- Hide and Show All logic for all li and dive box---->
  ShowHide.addEventListener("click", () => {
    if (taskDiv.style.display == "flex") {
      taskDiv.style.display = "none";
      ShowHide.innerText = "Show All";
    } else {
      taskDiv.style.display = "flex";
      ShowHide.innerText = "Hide All";
    }
  });

  // Include Check -- stri-through functionality.
  check.addEventListener("click", () => {
    taskTitle.classList.toggle("checked-line");
    if (check.classList.contains("fa-circle")) {
      check.classList.remove("fa-circle");
      check.classList.add("fa-circle-check");
    } else {
      check.classList.remove("fa-circle-check");
      check.classList.add("fa-circle");
    }
  });

  // Add delete functionality
  deleteIcon.addEventListener("click", () => {
    // Remove the task from the UI
    taskDiv.remove();

    // Remove the task from local storage
    deleteTask(task.id);
  });
}

// Function for Load All task when we click on story button
function loadTasks() {
  //   // Clear existing tasks
  TodoBox.innerHTML = "";

  //   // Get tasks from local storage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  //   // Display each task
  tasks.forEach(displayTask);
}

// Function For delete Task --->
function deleteTask(taskId) {
  //   // Get existing tasks
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  //   // Remove the task with the specified ID
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  // console.log(updatedTasks);

  //   // Save updated tasks to local storage
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// Event listener for The Pop box showing -->
showBox.addEventListener("click", () => {
  PopContainer.style.display = "block";

  // Get data from local storage and display in the box --- show-box.
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach((item) => Additems(item.title, item.task));
});

// Event listener for The Pop box hiding --
CloseBtn.addEventListener("click", () => {
  PopContainer.style.display = "none";
});

// Add items to showbox ------------------->
function Additems(value1, value2) {
  const divBox = document.createElement("div");
  divBox.classList.add("PopUp-mini");
  divBox.innerHTML = `
          <p id="PopUp-title" class="Popup-text"> <span>Title: -</span> <span> ${value1} </span></p>
          <p id="PopUp-task" class="Popup-text"> <span>Task: -</span> <span> ${value2}  </span></p>
  `;
  PopMini.appendChild(divBox);
}

// This code is for login form --- for changing color of log in buttons
if (SignUpButton2) {
  SignUpButton2.addEventListener("mouseover", () => {
    SignUpButton1.style.backgroundColor = "#007BFF";
  });
}

if (SignUpButton2) {
  SignUpButton2.addEventListener("mouseout", () => {
    SignUpButton1.style.backgroundColor = "rgba(80, 78, 78, 0.696)";
  });
}

if (LoginButton2) {
  LoginButton2.addEventListener("mouseover", () => {
    LoginButton1.style.backgroundColor = "rgba(80, 78, 78, 0.696)";
  });
}

if (LoginButton2) {
  LoginButton2.addEventListener("mouseout", () => {
    LoginButton1.style.backgroundColor = "#007BFF";
  });
}

// Page changing ---> login to sign up   --------------------------------->
if (GoLogin) {
  GoLogin.addEventListener("click", () => {
    LoginPage.classList.add("hide");
    setTimeout(() => {
      SignUpPage.style.display = "none";
      LoginPage.style.display = "flex";
      setTimeout(() => {
        LoginPage.classList.remove("hide");
      }, 20);
    }, 500);
  });
}

// using log in button
if (SignUpButton1) {
  SignUpButton1.addEventListener("click", () => {
    LoginPage.classList.add("hide");
    setTimeout(() => {
      SignUpPage.style.display = "none";
      LoginPage.style.display = "flex";
      setTimeout(() => {
        LoginPage.classList.remove("hide");
      }, 20);
    }, 500);
  });
}

// Page changing ---> sign up to log in  --------------------------------->
if (GoSignUp) {
  GoSignUp.addEventListener("click", () => {
    LoginPage.classList.add("hide");
    setTimeout(() => {
      LoginPage.style.display = "none";
      SignUpPage.style.display = "flex";
      setTimeout(() => {
        LoginPage.classList.remove("hide");
      }, 20);
    }, 500);
  });
}
// using create account button ---->
if (LoginButton2) {
  LoginButton2.addEventListener("click", () => {
    LoginPage.classList.add("hide");
    setTimeout(() => {
      LoginPage.style.display = "none";
      SignUpPage.style.display = "flex";
      setTimeout(() => {
        LoginPage.classList.remove("hide");
      }, 20);
    }, 500);
  });
}
// ----------------------------------------Ends here>

// Sign Up Form values ------------------------>
if (SignUpButton2) {
  SignUpButton2.addEventListener("click", () => {
    SignUpInfo();
  });
}

function SignUpInfo() {
  const firstname = FirstName.value.trim();
  const lastname = LastName.value.trim();
  const email = SignUpEmail.value.trim();
  const password = SignUpPassword.value.trim();

  const info = {
    id: Date.now(),
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  };

  const data = JSON.parse(localStorage.getItem(email));

  if (data === null) {
    localStorage.setItem(email, JSON.stringify(info));
    console.log("congrets You have now account, please log in");
    signupError.innerHTML = `<i class="fa-solid fa-circle-check"></i> &nbsp Congrets !! account created successfully, Please Log in. `;
    signupError.style.color = "green";
    setTimeout(() => {
      signupError.innerHTML = "";
    }, 3000);
  } else {
    console.log("You already have account, Please login");
    signupError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> &nbsp Error !! You already have an account, Please login`;
    signupError.style.color = "red";
    setTimeout(() => {
      signupError.innerHTML = "";
    }, 3000);
  }
}

// login form values ------------------------------>
if (LoginButton1) {
  LoginButton1.addEventListener("click", () => {
    const email = LoginEmail.value.trim();
    const password = LoginPassword.value.trim();

    const data = JSON.parse(localStorage.getItem(email));
    console.log(data);
    
    if (data !== null) {
      if (password == data.password) {
        LoginError.innerHTML = `<i class="fa-solid fa-circle-check"></i> &nbsp Success !! You are good to Go`;
        LoginError.style.color = "green";
        setTimeout(() => {
          LoginError.innerHTML = "";
        }, 3000);

        // something code is here --->
        setTimeout(() => {          
          MainloginDisplay.style.display = "none";
          document.body.style.overflowY = "auto";
        }, 1000);
        SetUserName(data.firstname, data.lastname);
      } else {
        LoginError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> &nbsp Error !! incorrect password`;
        LoginError.style.color = "red";
        setTimeout(() => {
          LoginError.innerHTML = "";
        }, 3000);
      }
    } else {
      LoginError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> &nbsp Error !! Please Create Your account`;
      LoginError.style.color = "red";
      setTimeout(() => {
        LoginError.innerHTML = "";
      }, 3000);
    }
  });
}

// Profile Image upload ------------>
let ProfileImgs = document.querySelectorAll(".Profile-imgs");
let ImageUpload = document.getElementById("Image-Upload");
let CrossButton = document.getElementById("cross-button");
let ProfileNone = document.getElementById("Profile-none");
let FirstProfile = document.getElementById("First-profile");
let SignOut = document.getElementById("Sign-out");
let ProfileName = document.getElementById("profile-Name");

ImageUpload.onchange = function () {
  ProfileImgs.forEach((ele) => {
    ele.src = URL.createObjectURL(ImageUpload.files[0]);
    localStorage.setItem("profile", JSON.stringify(ele.src));
  });
};

CrossButton.addEventListener("click", () => {
  ProfileNone.style.display = "none";
});

FirstProfile.addEventListener("click", () => {
  ProfileNone.style.display = "block";
  ProfileNone.classList.add("Slow-animate")
});

SignOut.addEventListener("click", () => {
  MainloginDisplay.style.display = "block";
  document.body.style.overflowY = "hidden";
  ProfileNone.style.display = "none";
});


// Add user name at profile
function SetUserName(firstname, lastname){
  ProfileName.innerText = `${firstname} ${lastname} `;
}

// Function to show the profile image stored in localStorage6
function ProfileShow() {
  let ProfileImg = localStorage.getItem("profile"); // Retrieve the stored image
  if (ProfileImg) {
    ProfileImgs.forEach((ele) => {
      ele.src = ProfileImg; // Set the src to the stored image
    });
  }
}

// Function to convert image to base64
function getBase64(file, callback) {
  let reader = new FileReader();
  reader.onload = function () {
    callback(reader.result); // The result is a base64 encoded string
  };
  reader.readAsDataURL(file);
}

// Event listener for image upload
ImageUpload.onchange = function () {
  let file = ImageUpload.files[0];
  getBase64(file, function (base64Image) {
    ProfileImgs.forEach((ele) => {
      ele.src = base64Image; // Display the selected image
    });
    localStorage.setItem("profile", base64Image); // Store the base64 image in localStorage
  });
};

// Call the function to show the image on page load
ProfileShow();

