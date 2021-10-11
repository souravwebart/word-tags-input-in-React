import React, { useState } from 'react';
import "../index.css";


function SelectInput() {

    const [tags, setTags] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
     
    };

    const removeTags = indexRemove => {
        setTags([...tags.filter((_, index) => index !== indexRemove)]);
    };

    const addTags = event => {
        setTags([...tags, event.target.value]);
        event.target.value = "";

    };


    return (
        <div className="tag_heading">
            <h1>tags</h1>
            <p>Select time for your event</p>
            <form onSubmit={handleSubmit}>
                <div className="tag_input">
                    <div className="input_tag_add">
                        <input className="input-tag-show" id="Search"
                            type="search"
                            onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                            placeholder="Add tags"
                        />
                    </div>
                    <div><ul className="tags">
                        {tags.map((tag, index) => (
                            <li key={index} className="tag_list">
                                <span className='tag-name'>{tag}</span>
                                <span className='tag-close-icon'
                                    onClick={() => removeTags(index)}
                                >
                                    x
                                </span>
                            </li>
                        ))}
                    </ul></div>
                </div>
                <select className="form-select1" size="3" aria-label="select example" value={tags} onChange={addTags}>
                    <option value="Child malnutrition" >Child malnutrition</option>
                    <option value="Child media managment">Child media managment</option>
                    <option value="Child consultant">Child consultant</option>
                    <option value="Children">Children</option>
                </select>
                <input className="submit"
                    type="submit"
                    value=""
                />
            </form>
        </div>
    )
}

export default SelectInput;
