var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About component</h1>
      <p> Welcome </p>
      <p> tools: </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
          Javascript framwork
        </li>
        <li>
          <a href="https://openweathermap.org">OpenWeatherMap</a>
        </li>
      </ul>
    </div>

  )
};

module.exports = About;
