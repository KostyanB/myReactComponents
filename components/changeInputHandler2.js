const Form = () => {
    const [ form, setForm ] = useState({
        title: initTitle,
        holder: initHolder,
    });
    const inputRef = useRef();

    // useEffect(() => setForm({
    //     title: initTitle,
    //     holder: initHolder
    // }), [initTitle, initHolder]);

    const submitHandler = e => {
        e.preventDefault();
        const { title } = form;
        if (!title.trim()) {
            setForm({...form,
                holder: emptyHolder
            });
            return;
        }
        const newPost = {
            title,
            id: Date.now().toString()
        };

        // newPost -> store
        setForm({title: initTitle, holder: initHolder});
    };

    const changeInputHandler = input => {
        // e.persist();
        setForm(prev => ({...prev, ...{
            //динамический ключ
            [input.current.name]: input.current.value
        }}));
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title"></label>
                <input type="text"
                    id="title"
                    placeholder={form.holder}
                    value={form.title}
                    name="title"
                    onChange={() => changeInputHandler(inputRef)}
                    ref={inputRef}
                />
            </div>
            <button type="submit"></button>
        </form>
    );
}
export default Form;