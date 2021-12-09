import React from 'react'
import classes from './ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.itemA}>
                    <span className={classes.error}>4</span>
                </div>
                <div className={classes.itemB}>
                    <img src="img\logo.svg" alt="" className={classes.errorImg}/>
                </div>
                <div className={classes.itemC}>
                    <span className={classes.error}>4</span>
                </div>
            </div>

        </div>
    )
}

export default ErrorPage
