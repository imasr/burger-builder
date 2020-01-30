import React from "react";

import classes from "./Modal.module.scss";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
    <Wrapper>
        <Backdrop show={props.show} close={props.modalClose} />
        <div className={classes.Modal} style={
            {
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Wrapper>
)
export default modal