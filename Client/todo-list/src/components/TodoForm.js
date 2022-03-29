import React, {useState, useEffect, useRef } from 'react';
import { BsArrowDown, BsPlusCircleFill } from "react-icons/bs";
import { RiCheckboxCircleLine } from "react-icons/ri";

function TodoForm(props){
    const [input, setInput] = useState(props.edit ? props.edit.value: '');
    const [showDescription, setShowDescription ] = useState(false);
    const [description, setDescription] = useState(
        props.edit ? props.edit.description : ''
    );

    const inputRef = useRef(null);

    const handleChange = (e) =>{
        setInput(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleDescription = (e) => {
        e.preventDefault();
        setShowDescription(!showDescription);
    };

    const handleSumbit = (e) => {
        e.preventDefault();


        props.onSumbit({
            id: Math.floor(Math.random() * 10000),
            text:input,
            description,
            isDone: flase,
            showDescription: false,
        });
        setInput('');
        setDescription('');
    };

    return (
        <Form onSumbit={handleSumbit} className='todo-form'>
            {props.edit ? (
                <div className='todo-form--update'>
                    <input 
                    placeholder='update your item'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='todo-input edit todo-description' 
                    />
                    <textarea
                        placeholder='Description'
                        value={description}
                        onChange={handleDescriptionChange}
                        name='description'
                        className='todo-input todo-description'
                    />
                    <button onClick={handleSumbit} className='todo-button'>
                        <RiCheckboxCircleLine />
                    </button>
                </div>
            ): (
                <>
                    <input
                        placeholder='Add a todo'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='todo-input'
                        ref={inputRef}
                    />
                    <button 
                        onClick={handleDescription} 
                        className='todo-button edit'>
                        <BsArrowDown />
                    </button>
                    <button
                        onClick={handleSumbit}
                        className='todo-button'
                    >
                            <BsPlusCircleFill />
                    </button>
                    {showDescription && (
                        <textarea
                            placeholder='Description'
                            value={description}
                            onChange={handleDescriptionChange}
                            name='description'
                            className='todo-input todo-description'
                        />
                    )}
                </>
            )}
        </Form>
    );
}
export default TodoForm;