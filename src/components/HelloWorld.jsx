import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateHelloText } from '../redux/actions';
import { useRef } from 'react';

const HelloWorld = () => {

    const inputRef = useRef(null);

    const helloText = useSelector((state) => state.helloText);
    const dispatch = useDispatch();

    const handleInputChange = () => {
        dispatch(updateHelloText(inputRef.current.value));
    };

    const handleTextReset = () => {
        dispatch(updateHelloText('Hello World!'));
    };

  return (
    <div className='flex flex-col gap-4 justify-start items-start'>
        <h1 className={`text-4xl font-bold border-b-2 border-b-gray-400 border-spacing-10 pb-2 ${helloText ? 'text-black' : 'text-gray-300 select-none hover:cursor-not-allowed'}`}>{helloText || 'Type something below'}</h1>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center gap-2'>
                <label htmlFor="hello_world_input" className="sr-only">Hello World Text Input</label>
                <div className="w-60">
                    <input
                        type="text"
                        name="hello_world_input"
                        id="email"
                        ref={inputRef}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Type something here..."
                    />
                </div>
                <button type="button" onClick={handleInputChange} className="btn-primary">Update text</button>
            </div>
            <p className="text-xs text-gray-500">The new state will persist until you clear your cookies or use the below button to reset.</p>
        </div>
        <button type="button" onClick={handleTextReset} className="btn-secondary">Reset text</button>
    </div>
  );
};

export default HelloWorld;