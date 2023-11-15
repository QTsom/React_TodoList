const CheckBox = () => {
    return (
        <CheckBox className="checkbox-wrap__item">
            <input 
                type="checkbox"
                className="" 
                checked=""
                onClick=""
                name=""
            />
            <label htmlFor="check1"><span>{category}</span> {contents}</label>
        </CheckBox>
    )
}

export default CheckBox;