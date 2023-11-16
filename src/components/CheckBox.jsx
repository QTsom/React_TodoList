import styled from "styled-components";

const CheckBox = (props) => {
    const {contents, category, checked, onClick} = props;

    return (
        <CheckBoxWrap className="checkbox-wrap__item">
            <input 
                type="checkbox"
                className="" 
                checked={checked}
                onClick={onClick}
                name={checked}
            />
            <label ><span>{category}</span> {contents}</label>
        </CheckBoxWrap>
    )
}

export default CheckBox;

const CheckBoxWrap = styled.div`
    
`