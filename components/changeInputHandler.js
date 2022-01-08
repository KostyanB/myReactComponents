const Post = () => {
    const [title, setTitle] = useState();

    const submitHandler = e => {
        e.preventDefault();
        const {title} = state;

        if (!title.trim()) return;

        const newPost = {
            title,
            id: Date.now().toString()
        };
        // newPost -> store
        setState({title: ''});
    };

    const changeInputHandler = e => {
        e.persist();
        setState(prev => ({...prev, ...{
            [e.taget.name]: e.target.value //динамический ключ
        }}))
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title"></label>
                <input type="text"
                    id="title"
                    value={state.title}
                    name="title"
                    onChange={changeInputHandler}
                />
            </div>
            <button type="submit"></button>
        </form>
    );
}
export default Form;