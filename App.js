import "./App.css";
import { useState } from "react";
import Image1 from "./img/1.jpg";
import Image2 from "./img/2.jpg";
import Image3 from "./img/3.jpg";

function App() {
  const themes = [Image1, Image2, Image3];
  const [valueInput, setValueInput] = useState({
    name: "",
    surname: "",
    profession: "",
    email: "",
    number: "",
    theme: 0,
  });

  return (
    <>
      <div
        id="main-container"
        class="flex flex-col md:flex-row shadow-lg bg-white rounded-lg"
      >
        <div>
          <h1 class="text-center text-2xl font-medium">Создайте своё резюме</h1>
          <h2 class="text-xl font-medium">Введите даннные про себя ниже</h2>
          <div id="img" class="flex flex-row">
            <img
              // value={}
              class="block mx-auto h-24 sm:mx-0 sm:flex-shrink-0"
              src="img/1.jpg"
              onClick={() => setValueInput({ ...valueInput, theme: 0 })}
            />
            <img
              // value={}
              class="block mx-auto h-24 sm:mx-0 sm:flex-shrink-0"
              src="img/2.jpg"
              onClick={() => setValueInput({ ...valueInput, theme: 1 })}
            />
            <img
              // value={}
              class="block mx-auto h-24 sm:mx-0 sm:flex-shrink-0"
              src="img/3.jpg"
              onClick={() => setValueInput({ ...valueInput, theme: 2 })}
            />
          </div>
          <p class="text-lg font-medium">Введите Имя</p>

          <input
            size="50"
            class="rounded-lg  border  focus:outline-none focus:ring-2 focus:ring-purple-600 "
            type="name"
            placeholder="Enter your name"
            value={valueInput.name}
            onChange={(event) =>
              setValueInput({ ...valueInput, name: event.currentTarget.value })
            }
          />

          <p class="text-lg font-medium">Введите Фамилию</p>
          <input
            class="rounded-lg  border  focus:outline-none focus:ring-2 focus:ring-purple-600 "
            type="surname"
            placeholder="Enter your surname"
            value={valueInput.surname}
            onChange={(event) =>
              setValueInput({
                ...valueInput,
                surname: event.currentTarget.value,
              })
            }
          />

          <p class="text-lg font-medium">Введите професию</p>
          <input
            class="rounded-lg  border  focus:outline-none focus:ring-2 focus:ring-purple-600 "
            type="profession"
            placeholder="Enter your profession"
            value={setValueInput.profession}
            onChange={(event) =>
              setValueInput({
                ...valueInput,
                profession: event.currentTarget.value,
              })
            }
          />

          <h2 class="text-xl font-medium">Введите свои контактные данные</h2>

          <p class="text-lg font-medium">Введите почту</p>
          <input
            class=" left-1 rounded-lg  border  focus:outline-none focus:ring-2 focus:ring-purple-600 "
            type="email"
            placeholder="Enter your email"
            value={setValueInput.email}
            onChange={(event) =>
              setValueInput({ ...valueInput, email: event.currentTarget.value })
            }
          />

          <p class="text-lg font-medium">Введите номер</p>
          <input
            class=" rounded-lg  border  focus:outline-none focus:ring-2 focus:ring-purple-600 "
            type="phone number"
            placeholder="Enter phone number"
            value={setValueInput.number}
            onChange={(event) =>
              setValueInput({
                ...valueInput,
                number: event.currentTarget.value,
              })
            }
          />

          <h2 class="text-xl font-medium">Краткая информация </h2>
        </div>

        <div
          className="mx-auto"
          style={{ backgroundImage: `url(${themes[valueInput.theme]})` }}
        >
          <input name="Color Picker" type="color" />
          <h2 class="text-xl font-medium">Example </h2>
          <h2 class="text-lg font-medium">{valueInput.name} </h2>
          <h2 class="text-lg font-medium">{valueInput.surname} </h2>
          <h2 class="text-lg font-medium">{valueInput.profession} </h2>
          <h2 class="text-lg font-medium">{valueInput.email} </h2>
          <h2 class="text-lg font-medium">{valueInput.number} </h2>
        </div>
      </div>
    </>
  );
}

export default App;
