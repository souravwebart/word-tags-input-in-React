import React, { useState } from 'react';
import "../index.css";


function TagsInput() {

    const [tags, setTags] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    const listTags = (val) => {
        val.preventDefault();
        setTags([...tags, val.target.textContent]);

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
                <ul onClick={((e) => listTags(e))}>
                    <li >
                        <div className="list-tags-div">
                            <h2>Child malnutrition</h2>
                            <span>28</span>
                        </div>
                    </li>
                    <li >
                        <div className="list-tags-div">
                            <h2>Child media managment</h2>
                            <span>68</span>
                        </div>
                    </li>
                    <li >
                    <div className="list-tags-div">
                        <h2>Child consultant</h2>
                        <span>100</span>
                    </div>
                </li>
                <li >
                <div className="list-tags-div">
                    <h2>Children</h2>
                    <span>46</span>
                </div>
            </li>

                </ul>
                <input className="submit"
                    type="submit"
                    value=""
                />
            </form>
        </div>
    )
}

export default TagsInput;
