import React from "react";
import Header from './Header';
import Action from './Action';
import AddOption from "./addOption";
import Options from './Options';
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {

// Properties //
    state = {
        options: [],
        selectedOption: undefined
    }

// Methods //
    // Delete Options
    handleDeleteOptions = () => {
        // Return object with arrow function
        this.setState(() => ({ options: [] }));
    }
    // Add Option
    handleAddOption = (option) => {

        if(!option) {
            return 'Please enter value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
    // Delete Option
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    // Pick Option    
    handlePickOption = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        this.setState(() => ({selectedOption: option}));
    }
    // Close Modal
    handleCloseModal = () => {
        this.setState(() => ({selectedOption: undefined}));
    }

    // Adding of component
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {

        }
    }
    // Update of component
    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }

    }
    // Removing a component
    componentWillUnmount = () => {
        console.log('Component will unmount');
    }

    render() {

        const app = {
            title: 'Indecision App',
            subTitle: 'Put your life in the hands of a computer',
        };

        return (
            <div>
                <Header title={app.title} subTitle={app.subTitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        // Pass down function to child
                        handlePickOption={this.handlePickOption}
                    />
                    <div className="widget">
                    <Options 
                        options={this.state.options}
                    // Pass down function to child
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption 
                        handleAddOption={this.handleAddOption}
                    />
                    </div>

                </div>
                <OptionModal
                    handleCloseModal={this.handleCloseModal}
                    selectedOption={this.state.selectedOption}
                />
            </div>
        );
    }
}