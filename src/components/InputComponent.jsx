const InputComponent = ({ inputValue }) => {
    const onClickInput = (e) => {
        console.log(e, inputValue);

    }
    return (
        <div>
            <input type="text" value={inputValue}
                placeholder="Type somthing" />
            <button onClick={onClickInput}>click</button>
        </div>
    )
}
export default InputComponent;
