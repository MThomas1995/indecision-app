console.log('app.js is running');

// JSX - javaScript XML
const app = {
    title: 'Indecision Apps',
    subTitle: 'Welcome to the Indecision App',
    options: []
};

// Form submit event handler
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
        console.log(app.options);
    }
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
}

// Function to remove all options from app object and re-render page
const removeAllOptions = () => {
    app.options = [];
    renderApp();
    console.log(app.options);
}

// Variable where the display is rendered to
const appRoot = document.getElementById('app');

// Function to render the contents to the page
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>} 
            <p>{app.options.length > 0 ? 'here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do</button>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

// Render app on page load
renderApp();