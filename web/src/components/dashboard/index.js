import React, { useState } from 'react';

function Dashboard({ onSubmit }) {
    const [ options, setOptions ] = useState([]);

    function showInput() {
        let optionSelect = document.querySelector('select#optionsForm').value;
        document.querySelector('div.form').style.display = "block";
        document.querySelector('form.login-form').style.display = "grid";
        
        switch(optionSelect) {
            case 'password':
                if(!options.includes('password')) {
                    setOptions([...options, 'password']);
                    document.querySelector('input.password').style.display = "block";
                    document.querySelector('button.password').style.display = "block";
                }
                break;
            case 'name':
                if(!options.includes('name')) {
                    setOptions([...options, 'name']);
                    document.querySelector('input.name').style.display = "block";
                    document.querySelector('button.name').style.display = "block";
                }
                break;
            case 'birthday':
                if(!options.includes('birthday')) {
                    setOptions([...options, 'birthday']);
                    document.querySelector('input.birthday').style.display = "block";
                    document.querySelector('button.birthday').style.display = "block";
                }
                break;
            case 'cpf':
                if(!options.includes('cpf')) {
                    setOptions([...options, 'cpf']);
                    document.querySelector('input.cpf').style.display = "block";
                    document.querySelector('button.cpf').style.display = "block";
                }
                break;
            default:
                console.log('Error');
        }
    }

    function eraseInput(classInput) {

    }

    return(
        <div className="dashboard-page">
            <label htmlFor="optionsForm">
                <select name="form" id="optionsForm">
                    <option value="password">Password</option>
                    <option value="name">Name</option>
                    <option value="birthday">Birthday</option>
                    <option value="cpf">CPF</option>
                </select>
                <button onClick={showInput}>Show Option</button>
            </label>

            <div className="form">
                <form className="login-form">
                    <input type="password" required placeholder="Password" className="inputs password"/>
                    <button onClick={() => eraseInput("password")} className="b password">X</button>

                    <input type="text" required placeholder="Name" className="inputs name"/>
                    <button onClick={() => eraseInput("name")} className="b name">X</button>

                    <input type="date" required placeholder="Date of birthday" className="inputs birthday"/>
                    <button onClick={() => eraseInput("birthday")} className="b birthday">X</button>

                    <input type="text"required placeholder="CPF" className="inputs cpf"/>
                    <button onClick={() => eraseInput("cpf")} className="b cpf">X</button>
                    <button type="submit">Update info</button>
                </form>
            </div>
        </div>
    );
}

export default Dashboard;