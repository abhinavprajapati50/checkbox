import React, { useState } from "react";

const options = [
    { label: "Lifestyle", value: "lifestyle" },
    { label: "Area", value: "area" },
    { label: "Random", value: "random" },
    { label: "Comedy", value: "comedy" },
    { label: "Entertainment", value: "entertainment" }
];

export const Chexkbox = (props) => {
    return (
        <div>
            <div>
                {props.title}
                <ul>
                    {props.options.map(option => (
                        <li key={props.key}>
                            <label>
                                {option.label}
                                <input
                                    className={props.className}
                                    name="test"
                                    checked={option.value === props.checked}
                                    onChange={() => props.onChange(option.value)}
                                    type="radio"
                                />
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

};

