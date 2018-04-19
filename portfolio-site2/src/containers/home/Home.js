import React, { Component, PropTypes} from 'react';
import styled from 'styled-components';
import {Container} from 'theme/grid'
import { Image, ImageDiv, RevealP } from './home.style'
import WhenInView from 'components/WhenInView/WhenInView'
import Navigation from "../../components/Header/Header";

export  default class  Home extends  Component {
    static propTypes = {};

    render() {
        return (
            <Container>
                <Navigation/>
                <h1>Hi Ana</h1>
                <ImageDiv>
                    <h1>Ana Merfu</h1>
                    <h2>Designer</h2>
                </ImageDiv>

                <WhenInView>
                    {({ isInView }) =>

                        <RevealP hide={!isInView}>
                            My dad used to call me "The monk who likes many things." Here's why: Whenever he asked me what I was passionate about, I always gave him different answers every single time. "I want to be a pianist," "I want to be a professional basketball player," "I want to be a DJ," I replied. I've never said, "I want to be a web developer." But some way, somehow, I grew my passion around web development before I even noticed it.

                            To me, it's a super power to be able to create solutions in the form of a website. For example, I created an app that helps me pass my Finnish exam. Recently, I even created a bookmark manager for all my saved links because I couldn't find any other straightforward and easy ways.
                        </RevealP>

                    }
                </WhenInView>


            </Container>
        )
        }
    }