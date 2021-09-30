// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div id="main-container" class="shadow-lg bg-white rounded-lg">
        <h1 class="text-center text-2xl font-medium">Создайте своё резюме</h1>

        <h2 class="text-xl font-medium">Введите даннные про себя ниже</h2>

        <img src="./src/img/1.jpg"></img>

        <p class="text-lg font-medium">Введите Имя</p>
        <input
          class="rounded-lg  border  focus:outline-none focus:ring-2 focus:ring-purple-600 "
          type="name"
          placeholder="Enter your name"
        />

        <p class="text-lg font-medium">Введите Фамилию</p>
        <input
          class="rounded-lg  border  focus:outline-none focus:ring-2 focus:ring-purple-600 "
          type="surname"
          placeholder="Enter your surname"
        />

        <p class="text-lg font-medium">Введите професию</p>
        <input
          class="rounded-lg  border  focus:outline-none focus:ring-2 focus:ring-purple-600 "
          type="profession"
          placeholder="Enter your profession"
        />

        <h2 class="text-xl font-medium">Введите свои контактные данные</h2>

        <p class="text-lg font-medium">Введите почту</p>
        <input
          class=" left-1 rounded-lg  border  focus:outline-none focus:ring-2 focus:ring-purple-600 "
          type="email"
          placeholder="Enter your email"
        />

        <p class="text-lg font-medium">Введите номер</p>
        <input
          class=" rounded-lg  border  focus:outline-none focus:ring-2 focus:ring-purple-600 "
          type="phone number"
          placeholder="Enter phone number"
        />

        <h2 class="text-xl font-medium">Краткая информация </h2>
      </div>
    </>
  );
}

export default App;
