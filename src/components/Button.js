function Button({bgColor, textColor, bWidth,borderR, children, onClick}) {
    const styles ={
        backgroundColor:bgColor,
        color:textColor,
        width:bWidth,
        
        borderRadius:borderR,
        fontSize:'0.5rem'
    }
    return (
        <button onClick={onClick} style={styles}>{children}</button>
    )

    }
export default Button;