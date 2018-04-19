import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Container} from 'theme/grid'
import {NavLink} from 'react-router-dom'

export  default class  Navigation  extends  Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li>Work</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}