import React from 'react';
import classes from './Footer.module.css';

const footer = props => {
    return (
        <footer className={classes.Footer}>
            <div>
                <h3>ReactJS | Angular | GCP | Javascript | Responsive Web Development</h3>
                <p>
                    The content displayed on this webpage is intended for informational purposes and is a guide only.
                    It does not replace or substitute for professional medical advice, diagnosis or treatment.
                    Information contained on this webpage must be discussed with an appropriate healthcare professional
                    before making any decisions
                    or taking any action based on the content of this webpage.
                </p>
                <p>
                    Copyright SISU Wellness
                </p>
                <a className={classes.linkedIn} href="https://www.linkedin.com/in/jing-zhou-743201160/"></a>
            </div>
        </footer>
    );
};

export default footer;