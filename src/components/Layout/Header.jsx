import React from 'react';
import classes from './Header.module.css';
import headerImage from '../../assets/sample.jpg';

function Header() {
    return <React.Fragment>
        <header className={classes.header}>
            {/* <H3MateMaker */}
            <h3 className={classes.heading}>Mate Maker</h3>
        </header>
        <div className={classes.headerImage}>
            <img src={headerImage} alt='' />
        </div>
    </React.Fragment>

}

export default Header;