import styled from "styled-components";

const CheckBox = (props) => {
    const {contents, category, name, checked, checkId,onChange} = props;

    return (
        <CheckBoxWrap className="checkbox-wrap__item">
            <input 
                type="checkbox"
                id={checkId}
                className="" 
                checked={checked}
                onChange={onChange}
                name={name}
            />
            <label htmlFor={checkId}><span>{category}</span> {contents}</label>
        </CheckBoxWrap>
    )
}

export default CheckBox;

const CheckBoxWrap = styled.div`
    
`