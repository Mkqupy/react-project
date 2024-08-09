import "./App.css";

const name = "Марія Калініченко";
const imageUrl = 'https://i.pinimg.com/736x/05/5e/84/055e84ce980832928d423484db686903.jpg';
const imageAlt = 'Cat';

const obj = {
  name: "Google",
  url: "https://www.google.com.ua/?hl=uk",
};
const colors = ["red", "green", "blue"];
const num1 = 27;
const num2 = 14;
const sum = num1 + num2;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {name}
        <br></br>
        <p>
          Ласкаво просимо до нашого сайту!
          <br>
          </br>
          <a href={obj.url}>{obj.name}</a>
        </p>
        <p>Сума: {sum}</p>
        <ul>
          {colors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
        
      </header>
    </div>
  );
}

export default App;
