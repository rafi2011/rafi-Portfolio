import React from 'react';
import logo from '../../logo.svg';

import "./Header.css";

export default function Header(props) {
    return (
        <div className="header bg-dark text-white head">  
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                    <h1>{props.data.name}
                        <p className="lead">Full Stack Developer</p>
                    </h1>
                    </div>
                    <div className="col-md-5">
                        <div className="well well-lg"> 
                            <div className="row">
                                <div className="col-sm-6">
                                </div>
                                <div className="col-sm-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}